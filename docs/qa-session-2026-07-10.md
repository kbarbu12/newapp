# QA Session — 2026-07-10

Quality-assurance pass on the RPG Quest Guide project (static site + React redesign).

## What we did

### 1. Static-site data audit — PASS
- Ran `npm test` (`ps5-rpg-sidequest-summarizer/scripts/audit.js`).
- **998 quests across 15 games**, integrity clean: no duplicate IDs, no missing
  fields, no duplicate titles; all video links and sub-filter values valid.
- Content-coverage gaps flagged (informational, not failures) — worst offenders:
  Pillars of Eternity (56%), Pillars of Eternity II (58%), Persona 5 Royal (68%),
  Horizon Forbidden West (74%).

### 2. Redesign production build — PASS
- Installed dependencies with pnpm (per `pnpm-workspace.yaml`).
- `pnpm build` and `pnpm build:staging` both succeed:
  - 1659 modules transformed, ~3.5s.
  - Staging build uses correct base path `/newapp/staging/` and renders the
    amber "Staging" badge.
  - Non-blocking Vite warning: single JS bundle is 772 kB (228 kB gzip) —
    candidate for code-splitting later.
- No standalone typecheck exists (no `tsconfig.json` / `tsc`); esbuild strips
  types during the Vite build, so the build is the effective gate.

### 3. Bug found & fixed — staging/prod tab-gating comments
- Several comments claimed "staging shows every tab," but `isTabLive` reads only
  `PROMOTED_TABS` regardless of target, so **staging mirrors prod** (same tabs,
  differing only by the badge) — which is the intended behavior.
- Fixed the contradictory/misleading comments in
  `redesign/src/config/promotion.ts` and `redesign/src/app/App.tsx`.
  Comment-only change; no behavior change. Rebuilt to confirm.

### 4. Committed the pnpm lockfile
- `pnpm install` generated `redesign/pnpm-lock.yaml`; committed it since the
  redesign is a pnpm project.

## What remains to be done

### Immediate / housekeeping
- **Standardize package manager.** The repo now carries both
  `redesign/package-lock.json` (npm) and `redesign/pnpm-lock.yaml` (pnpm).
  Pick one and remove the other to avoid drift.
- **Code-split the redesign bundle** (optional) — 772 kB single chunk; use
  dynamic `import()` / `manualChunks` for faster first load.
- **Add a typecheck gate** (optional) — no `tsconfig.json`/`tsc` today, so type
  errors only surface at runtime.

### Content coverage (from the audit, lowest first)
- Pillars of Eternity — 56% (gap 22)
- Pillars of Eternity II: Deadfire — 58% (gap 21)
- Persona 5 Royal — 68% (gap 21)
- Horizon Forbidden West — 74% (gap 18)
- Plus smaller gaps on most other games (see `npm run audit`).

### From the existing backlog (CHECKLIST.md)
- Match real YouTube walkthrough videos for the remaining ~695 placeholder
  search links across the 14 not-yet-audited games.
- Auto-refresh on service-worker update (`controllerchange` hook in `src/pwa.js`).
- Connect the feedback box (needs a Web3Forms access key).
- Finish the name-by-name accuracy audit (BG3 in progress; Elden Ring, Wukong left).
- Quest Detail Pages phases 2–4 (sidebar extras, SEO polish, static pages).

## Verification commands
```bash
# Static-site audit
cd ps5-rpg-sidequest-summarizer && npm test

# Redesign builds
cd redesign && pnpm install && pnpm build && pnpm build:staging
```
