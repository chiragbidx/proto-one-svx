# Camplytic — Next.js Facebook Campaign Dashboard Starter

This is a minimal Next.js 16 (App Router) SaaS UI starter (React 19, TypeScript 5, Tailwind-ready) now showcasing a working Facebook marketing campaign dashboard. Ready-to-run dev supervision (scripts/dev-supervisor.js + git polling), Dockerfile, and a clean, Camplytic-branded landing page included. No auth, backend, or DB-linked features yet — designed to layer on authenticated/dashboard routes, APIs, data, and more.

---

## 1. Current Scope
- Purpose: Baseline UI with a production-grade, multi-page Facebook Campaign Dashboard (Overview, Campaigns, Reports) and prominent landing page CTA.
- Data: Drizzle/PostgreSQL configured (base `users` model), but dashboard data is static.
- Auth: NextAuth.js installed, not configured.
- Dashboard: `/dashboard` with sidebar, Overview/Campaigns/Reports routes + Camplytic theme.
- Landing: Responsive, orange-accented, centered, with Go to Dashboard CTA.
- Owner Info: Chirag Dodiya, chirag@bidx.ai.

## First Request Rule
- Feature work is now in `app/(dashboard)/dashboard/` for dashboard; landing remains in `app/page.tsx` but CTA and branding now up to date.

## 2. Technology Stack
- Next.js 16 App Router (server-preferred).
- React 19, TypeScript 5 (strict).
- Tailwind, PostCSS.
- Data: Drizzle ORM + Postgres schema (no campaign or analytics tables yet).
- Tooling: ESLint 9, Docker.

## 3. Project Structure
```
app/
  layout.tsx                # Root layout, applies globals
  page.tsx                  # Public landing
  (dashboard)/dashboard/    # Facebook Campaign Dashboard root
    layout.tsx              # Sidebar shell and meta
    page.tsx                # Root redirect
    general/page.tsx        # Overview
    campaigns/page.tsx      # Table view
    reports/page.tsx        # Analytics/reports
  globals.css
public/                     # Assets
components/                 # Shared UI
lib/db/                     # Drizzle schema/client (users only)
drizzle/                    # SQL migrations
scripts/                    # Dev helpers/infrastructure
other config files...
```

## 4. Install & Run
```bash
npm install
npm run dev   # localhost:3000
```
Drizzle/DB (Postgres):
```bash
DATABASE_URL="postgresql://user:pass@host:5432/db" npm run db:migrate
```

## 5. Routing & Components
- `/`: Landing (Camplytic themed, dashboard CTA).
- `/dashboard`: Redirects to Overview.
- `/dashboard/general`: Dashboard Home.
- `/dashboard/campaigns`: Campaigns static table.
- `/dashboard/reports`: Static reports/metrics.
- All dashboard routes share sidebar, branding, and owner info.

## 6. Styling
- Tailwind (`app/globals.css`), minimal global overrides.
- Consistent orange (#FB7232) and accent palette.

## 7. Environment & Secrets
- Required: `OPENAI_API_KEY`, `DATABASE_URL`, `DATABASE_SSL`, `NEXTAUTH_SECRET`/`AUTH_SECRET` (see `env.example`).

## 8. Data & Backend
- No dynamic data yet; dashboard is presentational. User data set up for future DB expansion.

## 9. Testing
- Not present.

## 10. Change Guidelines
- Minimal diffs, coordinated route structure, keep README/FILES updated.

## 11. Hard Stops
- See earlier, unchanged.

## 12. Deployment
- Vercel or Node 18+, Dockerfile included.

---

**Brand:** Camplytic  
**Owner:** Chirag Dodiya (chirag@bidx.ai)

Polish, extend or connect to live FB API/DB as next scope!