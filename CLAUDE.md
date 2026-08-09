# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Coach Mimi is a French-language online Pilates coaching platform (client: HFM / Coach Mimi, Abidjan/Côte d'Ivoire). It ships 21 guided workout sessions (Pilates, HIIT, Musculation, Mobilité, Stretching) with a timer-driven player, French text-to-speech coaching cues, and a Stripe subscription paywall priced in XOF (CFA francs). 3 sessions are free; the rest require the "Coach Mimi Premium" subscription.

Note: `README.md` describes an older/aspirational stack (MongoDB, Redux, AWS/Heroku) that does not match the actual codebase below — don't rely on it.

## Commands

```bash
pnpm install         # install deps (pnpm is the package manager; see packageManager field in package.json)
pnpm dev              # run dev server (tsx watch on server/_core/index.ts, Vite middleware for the client)
pnpm build            # vite build (client) + esbuild bundle of server into dist/
pnpm start            # run production build (dist/index.js)
pnpm check            # tsc --noEmit — type-check the whole project
pnpm format           # prettier --write .
pnpm test             # vitest run (server-side tests only, see vitest.config.ts)
pnpm db:push          # drizzle-kit generate && drizzle-kit migrate — generate + apply DB migrations from drizzle/schema.ts
```

Run a single test file: `pnpm test server/subscription.test.ts` (or `npx vitest run -t "<test name>"` to filter by name).

There is no lint script configured; `pnpm check` (TypeScript) and `pnpm format` (Prettier) are the enforcement tools. The `.github/workflows/webpack.yml` CI workflow is stale/unused (references `npx webpack`, which has no config in this repo) — don't treat it as the real CI process.

## Architecture

This app was scaffolded from a "Manus WebDev" template. Any file or directory named `_core` (`server/_core/`, `client/src/_core/`, `shared/_core/`) is platform/framework scaffolding (auth SDK, env loading, storage proxy, vite glue, error types) — treat it as infrastructure, not app logic. Application/domain logic lives outside `_core` folders.

**Monorepo layout**, one `package.json`/`tsconfig.json` at the root, three source roots aliased in both Vite and TS config:
- `@` → `client/src`
- `@shared` → `shared`
- `client/`, `server/`, `shared/`, `drizzle/` are plain relative imports otherwise.

**Server** (`server/`, Express + tRPC):
- `server/_core/index.ts` is the entrypoint: registers Stripe webhook routes *before* `express.json()` (required for Stripe signature verification), then OAuth callback routes, then mounts the tRPC router at `/api/trpc`. In dev it delegates to Vite middleware (`_core/vite.ts`); in prod it serves the built static client.
- `server/routers.ts` defines the single `appRouter` (tRPC) with `system`, `auth`, and `subscription` sub-routers. This is the one place new server endpoints get added.
- `server/_core/trpc.ts` defines three procedure tiers: `publicProcedure`, `protectedProcedure` (requires `ctx.user`), `adminProcedure` (requires `ctx.user.role === "admin"`).
- `server/_core/context.ts` builds per-request tRPC context by calling `sdk.authenticateRequest(req)` — auth failures degrade to `user: null` rather than throwing, so public procedures still work.
- `server/_core/sdk.ts` implements the Manus OAuth flow: exchanges an auth code for a token, fetches user info, and issues/verifies a JWT session cookie (`COOKIE_NAME`, 1-year expiry, HS256 signed with `JWT_SECRET`). `server/_core/oauth.ts` wires the `/api/oauth/callback` HTTP route on top of this.
- `server/db.ts` wraps Drizzle: lazily creates a MySQL connection from `DATABASE_URL` (returns `null`/no-ops if unset, so local tooling and most tests run without a DB), and exposes `upsertUser`, `getUserByOpenId`, `getUserById`, `getActiveSubscription`, `userHasPremium`.
- `server/stripe/` — `products.ts` defines `FREE_SESSION_IDS`, `isFreeSession()`, and the `PREMIUM_PLAN` (10 000 XOF/month); `stripe.ts` lazily constructs the Stripe client; `webhook.ts`/`routes.ts` handle Stripe Checkout + subscription lifecycle events, writing to the `subscriptions` table.
- Access control for premium content is enforced server-side via `subscription.canAccessSession` (checks `isFreeSession()` first, then `userHasPremium()`), not just hidden client-side.

**Database** (`drizzle/`, MySQL via `drizzle-orm/mysql2`):
- `drizzle/schema.ts` is the source of truth: `users` (keyed by OAuth `openId`, cached `subscriptionStatus`) and `subscriptions` (Stripe subscription tracking, FK-by-convention to `users.id`).
- After editing `schema.ts`, run `pnpm db:push` to generate + apply a migration (migrations land in `drizzle/`, snapshots in `drizzle/meta/`). Don't hand-edit generated migration/snapshot files.

**Client** (`client/src/`, React 19 + Vite + Wouter + tRPC + Tailwind v4 + shadcn/ui):
- `App.tsx` defines all routes via Wouter's `<Switch>`/`<Route>` — routes are French paths (`/a-propos`, `/galerie`, `/abonnement`, `/profil`, `/session/:id`).
- `lib/trpc.ts` creates the typed tRPC React client from the server's `AppRouter` type — client and server share types by direct TS import, no codegen step.
- `_core/hooks/useAuth.ts` is the auth hook: wraps `trpc.auth.me`/`trpc.auth.logout`, optionally redirects unauthenticated users via `getLoginUrl()` (`client/src/const.ts`), which builds the Manus OAuth portal URL at runtime from `VITE_OAUTH_PORTAL_URL`/`VITE_APP_ID`.
- `hooks/useSubscription.ts` is the premium-gating hook used by pages/components to decide whether to show paywall UI.
- **Session data model**: `lib/sessionTypes.ts` defines the shared `Exercise`/`SessionConfig` shape (phases: warmup/workout/cooldown). Each of the 21 sessions is hand-authored as its own data file (`lib/exerciseData.ts` for session 1, `lib/session2Data.ts` … `session21Data.ts` for the rest), all aggregated into `allSessions` by `lib/sessions.ts`. Session `id` values (e.g. `"classique"`, `"mobilite"`, `"stretching"`) are the same strings used by `FREE_SESSION_IDS` on the server — keep these in sync when adding/renaming a session.
- `pages/SessionPage.tsx` + `components/CircularTimer.tsx`/`ProgressBar.tsx` drive the workout player (per-exercise timer, phase progression). `hooks/useVoiceRecorder.ts`/`useSpeech.ts` and `components/VoiceRecorderPanel.tsx` handle French voice playback/recording for coaching cues.
- `components/ui/` is shadcn/ui (Radix primitives + Tailwind); treat these as generated/vendor components — prefer composing them over editing internals. `components.json` holds the shadcn config.

**Shared** (`shared/`): `const.ts` (cookie name, error message constants shared client/server) and `_core/errors.ts` (typed error helpers, e.g. `ForbiddenError`, used by the auth SDK).

## Conventions

- User-facing strings (UI copy, error messages returned from tRPC procedures, session content) are in French; keep new user-facing text French-language and consistent with the existing tone.
- Currency is XOF (CFA franc), a zero-decimal currency in Stripe — amounts like `PREMIUM_PLAN.priceAmountXOF` are whole units (10000), not cents.
- Server-side tests (`server/**/*.test.ts`) call tRPC procedures directly via `appRouter.createCaller(ctx)` with a hand-built `TrpcContext` (see `server/subscription.test.ts`, `server/auth.logout.test.ts`) rather than spinning up HTTP — follow this pattern for new router tests, mocking `server/db.ts` / `server/stripe/stripe.ts` with `vi.spyOn` as needed.
- Prettier is configured with double quotes, semicolons, 2-space indent (`.prettierrc`); run `pnpm format` before committing.
