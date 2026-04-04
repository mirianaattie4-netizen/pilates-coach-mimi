import { describe, expect, it } from "vitest";
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
