# Deploying

The site ships from **one GitHub Pages artifact** but two git branches drive it
independently, so changes always land on staging first and reach prod only when
you promote them.

| Branch    | Publishes to                            | Build            |
| --------- | --------------------------------------- | ---------------- |
| `staging` | `kbarbu12.github.io/newapp/staging/`    | full (all tabs)  |
| `main`    | `kbarbu12.github.io/newapp/` (live)     | promoted prod    |

## Everyday flow

1. **Work on `staging`.** Every push to `staging` auto-deploys to `/staging/`.
   Review it there against real data.
2. **Promote when ready.** When you say "ship it," merge `staging` → `main`.
   The push to `main` rebuilds the live `/` path from exactly what you reviewed.

Because GitHub Pages serves a single artifact, any push republishes the whole
site — but each path is built from its own branch, so `/` never changes until
`main` changes.

## New tabs have a second gate

`redesign/src/config/promotion.ts` still controls which tabs appear in the
**prod** build. A brand-new tab shows in `/staging/` immediately but stays
hidden in `/` until it's flipped to `true` there and merged to `main`. Existing
content, quest data, and bug fixes need no such flip — merging to `main` ships
them.
