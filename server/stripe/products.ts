/**
 * Stripe product/price configuration for Coach Mimi subscriptions.
 * 
 * Pricing: 10 000 FCFA/mois (XOF — West African CFA franc)
 * XOF is a zero-decimal currency in Stripe, so amount = 10000 (not cents).
 * 
 * - Free tier: 3 sessions (Pilates Classique, Mobilité Pure, Stretching Profond)
 * - Premium tier: All 21 sessions
 */

/** Free session IDs — accessible without subscription */
export const FREE_SESSION_IDS = [
  "classique",       // Pilates Classique
  "mobilite",        // Mobilité Pure
  "stretching",      // Stretching Profond
] as const;

/** Check if a session ID is free */
export function isFreeSession(sessionId: string): boolean {
  return (FREE_SESSION_IDS as readonly string[]).includes(sessionId);
}

/** @deprecated Use isFreeSession instead */
export const isFreeSesion = isFreeSession;

/** Subscription plan details */
export const PREMIUM_PLAN = {
  name: "Coach Mimi Premium",
  description: "Accès illimité aux 21 séances de Pilates, HIIT, Musculation, Mobilité et Stretching",
  priceAmountXOF: 10000, // 10 000 FCFA — XOF is zero-decimal
  currency: "xof",
  interval: "month" as const,
  features: [
    "21 séances complètes guidées",
    "Pilates, HIIT, Musculation, Mobilité, Stretching",
    "Timer automatique et signal sonore",
    "Lecteur vocal en français",
    "Galerie d'exercices illustrés",
    "Enregistrement vocal personnel",
    "Nouvelles séances régulières",
  ],
};
