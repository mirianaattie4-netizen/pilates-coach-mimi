import type { Request, Response } from "express";
import Stripe from "stripe";
import { getStripe } from "./stripe";
import { getDb } from "../db";
import { users, subscriptions } from "../../drizzle/schema";
import { eq } from "drizzle-orm";

/**
 * Stripe webhook handler — processes subscription events.
 * Route: POST /api/stripe/webhook
 * Must use express.raw() body parser for signature verification.
 */
export async function handleStripeWebhook(req: Request, res: Response) {
  const stripe = getStripe();
  const sig = req.headers["stripe-signature"] as string;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    console.error("[Stripe Webhook] STRIPE_WEBHOOK_SECRET not configured");
    return res.status(500).json({ error: "Webhook secret not configured" });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
  } catch (err: any) {
    console.error("[Stripe Webhook] Signature verification failed:", err.message);
    return res.status(400).json({ error: `Webhook Error: ${err.message}` });
  }

  // Handle test events for webhook verification
  if (event.id.startsWith("evt_test_")) {
    console.log("[Stripe Webhook] Test event detected, returning verification response");
    return res.json({ verified: true });
  }

  console.log(`[Stripe Webhook] Received event: ${event.type} (${event.id})`);

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        await handleCheckoutCompleted(session);
        break;
      }
      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription;
        await handleSubscriptionUpdated(subscription);
        break;
      }
      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        await handleSubscriptionDeleted(subscription);
        break;
      }
      case "invoice.paid": {
        const invoice = event.data.object as Stripe.Invoice;
        console.log(`[Stripe Webhook] Invoice paid: ${invoice.id}`);
        break;
      }
      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice;
        console.log(`[Stripe Webhook] Invoice payment failed: ${invoice.id}`);
        // Subscription status will be updated via customer.subscription.updated
        break;
      }
      default:
        console.log(`[Stripe Webhook] Unhandled event type: ${event.type}`);
    }
  } catch (error) {
    console.error(`[Stripe Webhook] Error processing ${event.type}:`, error);
    return res.status(500).json({ error: "Webhook processing error" });
  }

  return res.json({ received: true });
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const userId = session.metadata?.user_id;
  const stripeCustomerId = session.customer as string;
  const stripeSubscriptionId = session.subscription as string;

  if (!userId) {
    console.error("[Stripe Webhook] No user_id in checkout session metadata");
    return;
  }

  const db = await getDb();
  if (!db) {
    console.error("[Stripe Webhook] Database not available");
    return;
  }

  const numericUserId = parseInt(userId, 10);

  // Update user with Stripe customer ID and premium status
  await db
    .update(users)
    .set({
      stripeCustomerId,
      subscriptionStatus: "premium",
    })
    .where(eq(users.id, numericUserId));

  // Create subscription record
  if (stripeSubscriptionId) {
    await db.insert(subscriptions).values({
      userId: numericUserId,
      stripeSubscriptionId,
      stripeCustomerId,
      status: "active",
    });
  }

  console.log(`[Stripe Webhook] User ${userId} upgraded to premium (subscription: ${stripeSubscriptionId})`);
}

async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
  const db = await getDb();
  if (!db) return;

  const stripeSubId = subscription.id;
  const status = subscription.status;

  // Update subscription record
  const mappedStatus = mapStripeStatus(status);
  await db
    .update(subscriptions)
    .set({ status: mappedStatus })
    .where(eq(subscriptions.stripeSubscriptionId, stripeSubId));

  // Update user subscription status
  const subRecords = await db
    .select()
    .from(subscriptions)
    .where(eq(subscriptions.stripeSubscriptionId, stripeSubId))
    .limit(1);

  if (subRecords.length > 0) {
    const userSubStatus = status === "active" ? "premium" : status === "past_due" ? "premium" : "cancelled";
    await db
      .update(users)
      .set({ subscriptionStatus: userSubStatus as "free" | "premium" | "cancelled" })
      .where(eq(users.id, subRecords[0].userId));
  }

  console.log(`[Stripe Webhook] Subscription ${stripeSubId} updated to ${status}`);
}

async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  const db = await getDb();
  if (!db) return;

  const stripeSubId = subscription.id;

  // Update subscription record
  await db
    .update(subscriptions)
    .set({ status: "cancelled" })
    .where(eq(subscriptions.stripeSubscriptionId, stripeSubId));

  // Revert user to free tier
  const subRecords = await db
    .select()
    .from(subscriptions)
    .where(eq(subscriptions.stripeSubscriptionId, stripeSubId))
    .limit(1);

  if (subRecords.length > 0) {
    await db
      .update(users)
      .set({ subscriptionStatus: "free" })
      .where(eq(users.id, subRecords[0].userId));
  }

  console.log(`[Stripe Webhook] Subscription ${stripeSubId} cancelled`);
}

function mapStripeStatus(stripeStatus: string): "active" | "past_due" | "cancelled" | "incomplete" {
  switch (stripeStatus) {
    case "active":
    case "trialing":
      return "active";
    case "past_due":
      return "past_due";
    case "canceled":
    case "unpaid":
      return "cancelled";
    default:
      return "incomplete";
  }
}
