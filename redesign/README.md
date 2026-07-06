# RPG Quest Guide — Redesign

A React/Vite redesign of the RPG Quest Guide, deployed **alongside** the live
vanilla site so the new design can be reviewed against real data before any of
it replaces production.

## Live surfaces

| Surface | URL | Contents |
|---------|-----|----------|
| Production (current) | `/newapp/` | The existing vanilla site — untouched. |
| **Staging** | `/newapp/staging/` | The full redesign, **every tab visible**, wired to the real quest data. Review here. |
| Promoted redesign | `/newapp/app/` | Only the tabs that have been approved and promoted (see below). |

All three ship from one GitHub Pages deploy (`.github/workflows/pages.yml`).

## Real quest data

The redesign renders the **same** dataset the live site ships. At build time
`scripts/gen-data.mjs` reads `../ps5-rpg-sidequest-summarizer/data/quests.js`
(the single source of truth — 949 quests, 15 games) and generates
`src/generated/data.ts`. There is no hand-maintained copy to drift.

## Promoting a tab (deploy parts that are good)

Each section is gated in `src/config/promotion.ts`:

```ts
export const PROMOTED_TABS = {
  home: false,   // flip to true once reviewed in staging
  browse: false,
  news: false,
  saved: false,
};
```

- **Staging** ignores these flags and shows everything.
- **Prod** (`/newapp/app/`) shows only tabs set to `true`.

Workflow: review a tab in staging → flip its flag to `true` → merge to `main`.
CI rebuilds and the tab goes live under `/newapp/app/`. Nothing appears in prod
until it's proven good; with nothing promoted, `/app/` shows a neutral
placeholder.

## Local development

```bash
npm install
npm run dev            # staging mode — all tabs

npm run build:staging  # -> dist/staging  (base /newapp/staging/, all tabs)
npm run build:prod     # -> dist/app      (base /newapp/app/, promoted tabs only)
```
