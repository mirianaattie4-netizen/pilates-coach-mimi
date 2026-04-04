import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { getActiveSubscription, userHasPremium } from "./db";
import { getStripe } from "./stripe/stripe";
import { PREMIUM_PLAN, FREE_SESSION_IDS, isFreeSession } from "./stripe/products";
import { TRPCError } from "@trpc/server";
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

    /** Get detailed subscription info for profile page */
    details: protectedProcedure.query(async ({ ctx }) => {
      const isPremium = await userHasPremium(ctx.user.id);
      const sub = await getActiveSubscription(ctx.user.id);

      if (!isPremium || !sub?.stripeSubscriptionId) {
        return {
          isPremium: false,
          plan: null,
          currentPeriodEnd: null,
          cancelAtPeriodEnd: false,
          status: ctx.user.subscriptionStatus ?? "free",
          error: null,
        };
      }

      try {
        const stripe = getStripe();
        const stripeSub = await stripe.subscriptions.retrieve(sub.stripeSubscriptionId);
        return {
          isPremium: true,
          plan: PREMIUM_PLAN.name,
          currentPeriodEnd: stripeSub.current_period_end * 1000,
          cancelAtPeriodEnd: stripeSub.cancel_at_period_end,
          status: stripeSub.status,
          error: null,
        };
      } catch (error: any) {
        console.error("[Subscription] Failed to fetch Stripe details:", error.message);
        return {
          isPremium,
          plan: PREMIUM_PLAN.name,
          currentPeriodEnd: null,
          cancelAtPeriodEnd: false,
          status: sub.status,
          error: "Impossible de récupérer les détails de l'abonnement depuis Stripe.",
        };
      }
    }),

    /** Get payment history from Stripe invoices */
    paymentHistory: protectedProcedure.query(async ({ ctx }) => {
      const customerId = ctx.user.stripeCustomerId;
      if (!customerId) {
        return { payments: [], error: null };
      }

      try {
        const stripe = getStripe();
        const invoices = await stripe.invoices.list({
          customer: customerId,
          limit: 20,
          status: "paid",
        });

        const payments = invoices.data.map((invoice) => ({
          id: invoice.id,
          date: (invoice.created ?? 0) * 1000,
          amount: invoice.amount_paid ?? 0,
          currency: invoice.currency ?? "xof",
          status: invoice.status ?? "unknown",
          description: invoice.lines?.data?.[0]?.description ?? PREMIUM_PLAN.name,
          receiptUrl: invoice.hosted_invoice_url ?? null,
          invoicePdf: invoice.invoice_pdf ?? null,
          periodStart: (invoice.period_start ?? 0) * 1000,
          periodEnd: (invoice.period_end ?? 0) * 1000,
        }));

        return { payments, error: null };
      } catch (error: any) {
        console.error("[Subscription] Failed to fetch payment history:", error.message);
        return {
          payments: [],
          error: "Impossible de récupérer l'historique des paiements. Veuillez réessayer.",
        };
      }
    }),

    /** Check if a specific session is accessible */
    canAccessSession: publicProcedure
      .input(z.object({ sessionId: z.string() }))
      .query(async ({ ctx, input }) => {
        if (isFreeSession(input.sessionId)) {
          return { canAccess: true, isFree: true };
        }
        if (!ctx.user) {
          return { canAccess: false, isFree: false };
        }
        const isPremium = await userHasPremium(ctx.user.id);
        return { canAccess: isPremium, isFree: false };
      }),

    /** Create a Stripe Checkout session for subscription */
    createCheckout: protectedProcedure.mutation(async ({ ctx }) => {
      const stripe = getStripe();
      const origin = ctx.req.headers.origin || ctx.req.headers.referer?.replace(/\/$/, "") || "http://localhost:3000";

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
              unit_amount: PREMIUM_PLAN.priceAmountXOF,
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

    /** Cancel subscription via Stripe (cancel at period end) */
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

    /** Reactivate a subscription that was set to cancel at period end */
    reactivate: protectedProcedure.mutation(async ({ ctx }) => {
      const sub = await getActiveSubscription(ctx.user.id);
      if (!sub?.stripeSubscriptionId) {
        return { success: false, error: "Aucun abonnement trouvé à réactiver" };
      }

      try {
        const stripe = getStripe();
        const stripeSub = await stripe.subscriptions.retrieve(sub.stripeSubscriptionId);

        // Can only reactivate if it's set to cancel at period end but still active
        if (!stripeSub.cancel_at_period_end) {
          return { success: false, error: "L'abonnement n'est pas en cours d'annulation" };
        }

        await stripe.subscriptions.update(sub.stripeSubscriptionId, {
          cancel_at_period_end: false,
        });
        return { success: true };
      } catch (error: any) {
        console.error("[Subscription] Reactivate error:", error.message);
        return { success: false, error: "Erreur lors de la réactivation. Veuillez réessayer." };
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
