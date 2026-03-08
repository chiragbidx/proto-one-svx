# FILES.md — Structural & Architectural Index (Next.js App Router Starter)

AI-facing index of the repository as it exists today. Drizzle ORM (PostgreSQL) and auth-ready dependencies are present; dashboard and new routes are now added. If something is unclear: **STOP AND ASK**.

---

## 1. High-Level Overview
- Purpose: minimal App Router scaffold for future SaaS UI, now with Drizzle + Postgres base schema and a Facebook Campaign Dashboard structure.
- Style: file-system routing, server-preferred components.
- Tech: Next.js 16, React 19, TypeScript 5, Tailwind-ready PostCSS, ESLint 9.
- Present: Drizzle schema + initial migration for `users`. Dashboard UI for Facebook campaigns management: Overview, Campaigns, Reports.
- Not present: API routes for campaign data, tests.

## 2. Application Entry Points
- `app/layout.tsx`: Root layout; applies globals.
- `app/page.tsx`: Public landing page (server component, now Camplytic-branded).
- `app/(dashboard)/dashboard/layout.tsx`: Dashboard shell, sidebar, main content region.
- `app/(dashboard)/dashboard/page.tsx`: Redirects to `/dashboard/general`
- `app/(dashboard)/dashboard/general/page.tsx`: Dashboard Home/Overview.
- `app/(dashboard)/dashboard/campaigns/page.tsx`: Campaigns list/table view.
- `app/(dashboard)/dashboard/reports/page.tsx`: Reports/analytics page.
- `app/globals.css`: Global styles; imports Tailwind; defines light/dark CSS variables.

## 3. Modules / Feature Areas
- `app/`: UI shell and routing.
- `app/(dashboard)/dashboard/`: Facebook campaigns dashboard (Overview, Campaigns, Reports pages).
- `components/`: Shared UI ("AgentActionPanel", "ErrorReporter").
- `public/`: Static assets (logos/icons).
- `lib/db/`: Drizzle schema and client.
- `drizzle/`: SQL migrations + meta journal.
- Config/tooling: ESLint, PostCSS, Next config, TS config, Drizzle config.

## 4. Routes (Controllers)
- `/` → `app/page.tsx`: Camplytic-branded landing with CTA to dashboard.
- `/dashboard` → `app/(dashboard)/dashboard/page.tsx` (redirects to general/overview)
- `/dashboard/general` → Overview cards, quick actions.
- `/dashboard/campaigns` → Table of campaigns (static data now).
- `/dashboard/reports` → Reports and key metrics.
- All dashboard routes share a sidebar layout in `app/(dashboard)/dashboard/layout.tsx`.

## 5. Services & Providers
- None (backend API and DB-driven data not present yet).

## 6. Data Layer
- ORM/DB: Drizzle ORM + PostgreSQL. User schema as before.

## 7. DTOs, Schemas & Validation
- None yet (dashboard is presentational/static).

## 8. Cross-Cutting Concerns
- Error reporting via `components/ErrorReporter.tsx`.

## 9. Configuration & Environment
- `env.example`: lists `OPENAI_API_KEY`, `DATABASE_URL`, `DATABASE_SSL`, `NEXTAUTH_SECRET` (reuse `AUTH_SECRET`), optional `OPENAI_MODEL`.

## 10. Async & Background Processing
- Not present.

## 11. Testing Structure
- No tests. Suggested layouts unchanged.

## 12. File & Directory Index
```
.gitignore
README.md
FILES.md
RULES.md
Dockerfile
app/
  favicon.ico
  globals.css
  layout.tsx
  page.tsx
  (dashboard)/
    dashboard/
      layout.tsx
      page.tsx
      general/
        page.tsx
      campaigns/
        page.tsx
      reports/
        page.tsx
public/
  file.svg
  globe.svg
  next.svg
  vercel.svg
  window.svg
scripts/
  db-init.js
  dev-supervisor.js
  git-poll.js
  error-reporter.ts
components/
  AgentActionPanel.tsx
  ErrorReporter.tsx
lib/db/
  schema.ts
  client.ts
drizzle/
  0000_init.sql
  meta/_journal.json
drizzle.config.ts
eslint.config.mjs
next.config.ts
postcss.config.mjs
tsconfig.json
package.json
package-lock.json
.git/
```

## 13. Safe Modification Guidance
- New dashboard/public pages: add as route folders under `app/` or `(dashboard)/`.
- Shared UI in `components/`.
- Keep changes minimal; update this file for new route areas or modules.

---

If structure or intent is uncertain, **STOP AND ASK** before modifying.