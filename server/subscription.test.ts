import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";
import { isFreeSession, isFreeSesion, FREE_SESSION_IDS, PREMIUM_PLAN } from "./stripe/products";

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };
}

function createAuthContext(overrides?: Partial<AuthenticatedUser>): TrpcContext {
  const user: AuthenticatedUser = {
    id: 1,
    openId: "test-user-123",
    email: "test@example.com",
    name: "Test User",
    loginMethod: "manus",
    role: "user",
    stripeCustomerId: null,
    subscriptionStatus: "free",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
    ...overrides,
  };

  return {
    user,
    req: {
      protocol: "https",
      headers: { origin: "https://test.example.com" },
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };
}

describe("Stripe Products Configuration", () => {
  it("defines exactly 3 free session IDs", () => {
    expect(FREE_SESSION_IDS).toHaveLength(3);
    expect(FREE_SESSION_IDS).toContain("classique");
    expect(FREE_SESSION_IDS).toContain("mobilite");
    expect(FREE_SESSION_IDS).toContain("stretching");
  });

  it("correctly identifies free sessions with isFreeSession", () => {
    expect(isFreeSession("classique")).toBe(true);
    expect(isFreeSession("mobilite")).toBe(true);
    expect(isFreeSession("stretching")).toBe(true);
  });

  it("correctly identifies premium sessions with isFreeSession", () => {
    expect(isFreeSession("contemporain")).toBe(false);
    expect(isFreeSession("avance")).toBe(false);
    expect(isFreeSession("hiit-fullbody")).toBe(false);
    expect(isFreeSession("muscu-fullbody")).toBe(false);
    expect(isFreeSession("bas-du-corps")).toBe(false);
    expect(isFreeSession("haut-du-corps")).toBe(false);
    expect(isFreeSession("mobilite-hanches")).toBe(false);
    expect(isFreeSession("mobilite-colonne")).toBe(false);
  });

  it("deprecated isFreeSesion still works as alias", () => {
    expect(isFreeSesion("classique")).toBe(true);
    expect(isFreeSesion("contemporain")).toBe(false);
  });

  it("has correct premium plan pricing in XOF (FCFA)", () => {
    expect(PREMIUM_PLAN.priceAmountXOF).toBe(10000);
    expect(PREMIUM_PLAN.currency).toBe("xof");
    expect(PREMIUM_PLAN.interval).toBe("month");
  });

  it("has plan name and description in French", () => {
    expect(PREMIUM_PLAN.name).toBe("Coach Mimi Premium");
    expect(PREMIUM_PLAN.description).toContain("21 séances");
  });

  it("has features list with expected items", () => {
    expect(PREMIUM_PLAN.features.length).toBeGreaterThan(5);
    expect(PREMIUM_PLAN.features).toContain("21 séances complètes guidées");
    expect(PREMIUM_PLAN.features).toContain("Lecteur vocal en français");
  });
});

describe("subscription.canAccessSession", () => {
  it("allows access to free sessions for unauthenticated users", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    for (const freeId of FREE_SESSION_IDS) {
      const result = await caller.subscription.canAccessSession({ sessionId: freeId });
      expect(result.canAccess).toBe(true);
      expect(result.isFree).toBe(true);
    }
  });

  it("allows access to free sessions for authenticated non-premium users", async () => {
    const ctx = createAuthContext({ subscriptionStatus: "free" });
    const caller = appRouter.createCaller(ctx);

    const result = await caller.subscription.canAccessSession({ sessionId: "mobilite" });
    expect(result.canAccess).toBe(true);
    expect(result.isFree).toBe(true);
  });

  it("denies access to premium sessions for unauthenticated users", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const premiumSessions = ["contemporain", "avance", "hiit-fullbody", "muscu-fullbody"];
    for (const sessionId of premiumSessions) {
      const result = await caller.subscription.canAccessSession({ sessionId });
      expect(result.canAccess).toBe(false);
      expect(result.isFree).toBe(false);
    }
  });

  it("returns isFree=false for premium sessions even when accessible", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.subscription.canAccessSession({ sessionId: "avance" });
    expect(result.isFree).toBe(false);
  });
});

describe("subscription.plan", () => {
  it("returns plan details with correct XOF pricing", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const plan = await caller.subscription.plan();
    expect(plan.priceAmountXOF).toBe(10000);
    expect(plan.currency).toBe("xof");
    expect(plan.interval).toBe("month");
    expect(plan.freeSessionIds).toHaveLength(3);
    expect(plan.features).toContain("21 séances complètes guidées");
  });

  it("returns all 3 free session IDs", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const plan = await caller.subscription.plan();
    expect(plan.freeSessionIds).toContain("classique");
    expect(plan.freeSessionIds).toContain("mobilite");
    expect(plan.freeSessionIds).toContain("stretching");
  });
});

describe("subscription.details", () => {
  it("returns non-premium details for free user with no error", async () => {
    const ctx = createAuthContext({ subscriptionStatus: "free" });
    const caller = appRouter.createCaller(ctx);

    const details = await caller.subscription.details();
    expect(details.isPremium).toBe(false);
    expect(details.plan).toBeNull();
    expect(details.currentPeriodEnd).toBeNull();
    expect(details.cancelAtPeriodEnd).toBe(false);
    expect(details.status).toBe("free");
    expect(details.error).toBeNull();
  });

  it("returns cancelled status for cancelled user without active sub", async () => {
    const ctx = createAuthContext({ subscriptionStatus: "cancelled" });
    const caller = appRouter.createCaller(ctx);

    const details = await caller.subscription.details();
    expect(details.isPremium).toBe(false);
    expect(details.status).toBe("cancelled");
    expect(details.error).toBeNull();
  });

  it("returns expected shape with all required fields", async () => {
    const ctx = createAuthContext({ subscriptionStatus: "free" });
    const caller = appRouter.createCaller(ctx);

    const details = await caller.subscription.details();
    expect(details).toHaveProperty("isPremium");
    expect(details).toHaveProperty("plan");
    expect(details).toHaveProperty("currentPeriodEnd");
    expect(details).toHaveProperty("cancelAtPeriodEnd");
    expect(details).toHaveProperty("status");
    expect(details).toHaveProperty("error");
  });

  it("returns premium details with Stripe data when subscription is active", async () => {
    // Mock db helpers to simulate premium user with active subscription
    const dbModule = await import("./db");
    vi.spyOn(dbModule, "userHasPremium").mockResolvedValue(true);
    vi.spyOn(dbModule, "getActiveSubscription").mockResolvedValue({
      id: 1,
      userId: 1,
      stripeSubscriptionId: "sub_test_abc",
      stripeCustomerId: "cus_test_123",
      status: "active",
      currentPeriodEnd: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    } as any);

    // Mock Stripe to return subscription details
    const stripeModule = await import("./stripe/stripe");
    vi.spyOn(stripeModule, "getStripe").mockImplementation(() => ({
      subscriptions: {
        retrieve: () => Promise.resolve({
          current_period_end: 1735689600, // 2025-01-01 00:00:00 UTC
          cancel_at_period_end: false,
          status: "active",
        }),
      },
    } as any));

    const ctx = createAuthContext({ subscriptionStatus: "premium" });
    const caller = appRouter.createCaller(ctx);

    const details = await caller.subscription.details();
    expect(details.isPremium).toBe(true);
    expect(details.plan).toBe("Coach Mimi Premium");
    expect(details.currentPeriodEnd).toBe(1735689600 * 1000);
    expect(details.cancelAtPeriodEnd).toBe(false);
    expect(details.status).toBe("active");
    expect(details.error).toBeNull();

    vi.restoreAllMocks();
  });

  it("returns cancelAtPeriodEnd=true when subscription is set to cancel", async () => {
    const dbModule = await import("./db");
    vi.spyOn(dbModule, "userHasPremium").mockResolvedValue(true);
    vi.spyOn(dbModule, "getActiveSubscription").mockResolvedValue({
      id: 1,
      userId: 1,
      stripeSubscriptionId: "sub_test_cancel",
      stripeCustomerId: "cus_test_456",
      status: "active",
      currentPeriodEnd: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    } as any);

    const stripeModule = await import("./stripe/stripe");
    vi.spyOn(stripeModule, "getStripe").mockImplementation(() => ({
      subscriptions: {
        retrieve: () => Promise.resolve({
          current_period_end: 1738368000,
          cancel_at_period_end: true,
          status: "active",
        }),
      },
    } as any));

    const ctx = createAuthContext({ subscriptionStatus: "premium" });
    const caller = appRouter.createCaller(ctx);

    const details = await caller.subscription.details();
    expect(details.isPremium).toBe(true);
    expect(details.cancelAtPeriodEnd).toBe(true);
    expect(details.currentPeriodEnd).toBe(1738368000 * 1000);
    expect(details.error).toBeNull();

    vi.restoreAllMocks();
  });

  it("returns error message when Stripe API fails but preserves premium status", async () => {
    const dbModule = await import("./db");
    vi.spyOn(dbModule, "userHasPremium").mockResolvedValue(true);
    vi.spyOn(dbModule, "getActiveSubscription").mockResolvedValue({
      id: 1,
      userId: 1,
      stripeSubscriptionId: "sub_test_err",
      stripeCustomerId: "cus_test_789",
      status: "active",
      currentPeriodEnd: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    } as any);

    const stripeModule = await import("./stripe/stripe");
    vi.spyOn(stripeModule, "getStripe").mockImplementation(() => ({
      subscriptions: {
        retrieve: () => { throw new Error("Stripe down"); },
      },
    } as any));

    const ctx = createAuthContext({ subscriptionStatus: "premium" });
    const caller = appRouter.createCaller(ctx);

    const details = await caller.subscription.details();
    expect(details.isPremium).toBe(true);
    expect(details.plan).toBe("Coach Mimi Premium");
    expect(details.error).toBeTruthy();
    expect(typeof details.error).toBe("string");

    vi.restoreAllMocks();
  });
});

describe("subscription.paymentHistory", () => {
  it("returns empty payments for user without stripeCustomerId", async () => {
    const ctx = createAuthContext({ stripeCustomerId: null });
    const caller = appRouter.createCaller(ctx);

    const result = await caller.subscription.paymentHistory();
    expect(result.payments).toEqual([]);
    expect(result.error).toBeNull();
  });

  it("returns expected shape with payments array and error field", async () => {
    const ctx = createAuthContext({ stripeCustomerId: null });
    const caller = appRouter.createCaller(ctx);

    const result = await caller.subscription.paymentHistory();
    expect(result).toHaveProperty("payments");
    expect(result).toHaveProperty("error");
    expect(Array.isArray(result.payments)).toBe(true);
  });

  it("gracefully handles Stripe API errors with error message", async () => {
    const stripeModule = await import("./stripe/stripe");

    vi.spyOn(stripeModule, "getStripe").mockImplementation(() => {
      return {
        invoices: {
          list: () => { throw new Error("Stripe API unavailable"); },
        },
      } as any;
    });

    const ctx = createAuthContext({ stripeCustomerId: "cus_test_123" });
    const caller = appRouter.createCaller(ctx);

    const result = await caller.subscription.paymentHistory();
    expect(result.payments).toEqual([]);
    expect(result.error).toBeTruthy();
    expect(typeof result.error).toBe("string");

    vi.restoreAllMocks();
  });

  it("returns mapped payment data from Stripe invoices on success", async () => {
    const stripeModule = await import("./stripe/stripe");

    vi.spyOn(stripeModule, "getStripe").mockImplementation(() => ({
      invoices: {
        list: () => Promise.resolve({
          data: [
            {
              id: "in_test_001",
              created: 1733011200, // 2024-12-01
              amount_paid: 10000,
              currency: "xof",
              status: "paid",
              lines: { data: [{ description: "Coach Mimi Premium" }] },
              hosted_invoice_url: "https://invoice.stripe.com/test-receipt",
              invoice_pdf: "https://invoice.stripe.com/test.pdf",
              period_start: 1730419200,
              period_end: 1733011200,
            },
            {
              id: "in_test_002",
              created: 1730419200,
              amount_paid: 10000,
              currency: "xof",
              status: "paid",
              lines: { data: [{ description: "Coach Mimi Premium" }] },
              hosted_invoice_url: null,
              invoice_pdf: null,
              period_start: 1727740800,
              period_end: 1730419200,
            },
          ],
        }),
      },
    } as any));

    const ctx = createAuthContext({ stripeCustomerId: "cus_test_success" });
    const caller = appRouter.createCaller(ctx);

    const result = await caller.subscription.paymentHistory();
    expect(result.error).toBeNull();
    expect(result.payments).toHaveLength(2);

    const first = result.payments[0];
    expect(first.id).toBe("in_test_001");
    expect(first.date).toBe(1733011200 * 1000);
    expect(first.amount).toBe(10000);
    expect(first.currency).toBe("xof");
    expect(first.status).toBe("paid");
    expect(first.description).toBe("Coach Mimi Premium");
    expect(first.receiptUrl).toBe("https://invoice.stripe.com/test-receipt");
    expect(first.invoicePdf).toBe("https://invoice.stripe.com/test.pdf");
    expect(first.periodStart).toBe(1730419200 * 1000);
    expect(first.periodEnd).toBe(1733011200 * 1000);

    const second = result.payments[1];
    expect(second.receiptUrl).toBeNull();
    expect(second.invoicePdf).toBeNull();

    vi.restoreAllMocks();
  });
});

describe("Router structure", () => {
  it("has all expected subscription procedures including reactivate", () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    expect(caller.subscription.plan).toBeDefined();
    expect(caller.subscription.canAccessSession).toBeDefined();
    expect(caller.subscription.details).toBeDefined();
    expect(caller.subscription.paymentHistory).toBeDefined();
    expect(caller.subscription.createCheckout).toBeDefined();
    expect(caller.subscription.cancel).toBeDefined();
    expect(caller.subscription.reactivate).toBeDefined();
    expect(caller.subscription.status).toBeDefined();
  });
});
