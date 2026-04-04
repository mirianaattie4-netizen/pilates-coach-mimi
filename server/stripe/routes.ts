import type { Express } from "express";
import express from "express";
import { handleStripeWebhook } from "./webhook";

/**
 * Register Stripe-related Express routes.
 * MUST be called BEFORE express.json() for the webhook route.
 */
export function registerStripeRoutes(app: Express) {
  // Webhook route — needs raw body for signature verification
  app.post(
    "/api/stripe/webhook",
    express.raw({ type: "application/json" }),
    handleStripeWebhook
  );
}
