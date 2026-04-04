import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { getActiveSubscription, userHasPremium } from "./db";
import { getStripe } from "./stripe/stripe";
import { PREMIUM_PLAN, FREE_SESSION_IDS, isFreeSession } from "./stripe/products";
import { z } from "zod";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  subscription: router({
    /** Get current user's subscription status */
    status: protectedProcedure.query(async ({ ctx }) => {
      const isPremium = await userHasPremium(ctx.user.id);
      const sub = await getActiveSubscription(ctx.user.id);
      return {
        isPremium,
        subscriptionStatus: ctx.user.subscriptionStatus ?? "free",
        stripeSubscriptionId: sub?.stripeSubscriptionId ?? null,
      };
    }),

    /** Check if a specific session is accessible */
    canAccessSession: publicProcedure
      .input(z.object({ sessionId: z.string() }))
      .query(async ({ ctx, input }) => {
        // Free sessions are always accessible
        if (isFreeSession(input.sessionId)) {
          return { canAccess: true, isFree: true };
        }
        // Not logged in → cannot access premium
        if (!ctx.user) {
          return { canAccess: false, isFree: false };
        }
        // Check premium status
        const isPremium = await userHasPremium(ctx.user.id);
        return { canAccess: isPremium, isFree: false };
      }),

    /** Create a Stripe Checkout session for subscription */
    createCheckout: protectedProcedure.mutation(async ({ ctx }) => {
      const stripe = getStripe();
      const origin = ctx.req.headers.origin || ctx.req.headers.referer?.replace(/\/$/, "") || "http://localhost:3000";

      // Create or retrieve Stripe customer
      let customerId = ctx.user.stripeCustomerId;
      if (!customerId) {
        const customer = await stripe.customers.create({
          email: ctx.user.email ?? undefined,
          name: ctx.user.name ?? undefined,
          metadata: {
            user_id: ctx.user.id.toString(),
          },
        });
        customerId = customer.id;
      }

      const session = await stripe.checkout.sessions.create({
        customer: customerId,
        mode: "subscription",
        allow_promotion_codes: true,
        client_reference_id: ctx.user.id.toString(),
        metadata: {
          user_id: ctx.user.id.toString(),
          customer_email: ctx.user.email ?? "",
          customer_name: ctx.user.name ?? "",
        },
        line_items: [
          {
            price_data: {
              currency: PREMIUM_PLAN.currency,
              product_data: {
                name: PREMIUM_PLAN.name,
                description: PREMIUM_PLAN.description,
              },
              unit_amount: PREMIUM_PLAN.priceAmountXOF, // XOF is zero-decimal
              recurring: {
                interval: PREMIUM_PLAN.interval,
              },
            },
            quantity: 1,
          },
        ],
        success_url: `${origin}/abonnement?success=true`,
        cancel_url: `${origin}/abonnement?cancelled=true`,
      });

      return { checkoutUrl: session.url };
    }),

    /** Cancel subscription via Stripe */
    cancel: protectedProcedure.mutation(async ({ ctx }) => {
      const sub = await getActiveSubscription(ctx.user.id);
      if (!sub?.stripeSubscriptionId) {
        return { success: false, error: "Aucun abonnement actif trouvé" };
      }

      try {
        const stripe = getStripe();
        await stripe.subscriptions.update(sub.stripeSubscriptionId, {
          cancel_at_period_end: true,
        });
        return { success: true };
      } catch (error: any) {
        console.error("[Subscription] Cancel error:", error.message);
        return { success: false, error: "Erreur lors de l'annulation. Veuillez réessayer." };
      }
    }),

    /** Get plan details (public) */
    plan: publicProcedure.query(() => {
      return {
        ...PREMIUM_PLAN,
        freeSessionIds: [...FREE_SESSION_IDS],
      };
    }),
  }),
});

export type AppRouter = typeof appRouter;
