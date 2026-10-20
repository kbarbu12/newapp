# TODO — owner: @kbarbu12

Work parked for the repo owner to do (things the agent environment can't).

## ~~Chapter/act naming per game~~ — DONE 2026-08-06
Each game now names its divisions with its own term (Realms, Districts, Planets,
Archstones, Arcs, Questlines, Acts, Chapters, Regions), with a matching Library
filter and sort. See PROGRESS.md §0 "Phase 1b".

## Game-verification roadmap — COMPLETE (2026-08-07)
All 24 games verified across Phases 1–4 (prod `v2.2.0` → `v2.3.1`). Details in
`PROGRESS.md` (§ "Game-verification roadmap") and `CHANGELOG.md`.

## Upgrade quest videos from search URLs to real `watch?v=` links
1,443 of 2,475 quest `video` fields (as of 2026-10-13) are YouTube *search*
URLs (`results?search_query=…`). **1,440 of them now have a proposed
`watch?v=` link** in `docs/video-candidates/` (18 games). The other 3 (#108,
#1432, #2461) have no single matching video. All candidates await the owner's review on
https://claude.ai/artifact/J76YaqKJqtKN2krU1zpAhq — ship one PR per game the
owner marks done, swapping out flagged links. See PROGRESS.md "Session
2026-10-11 → 13".

## AC Odyssey entries no guide could confirm (Phase 3 leftovers)
~96 AC Odyssey entries still have only 1–3 steps because no guide confirmed
more detail. Made-up details were stripped on 2026-10-14 and the vague ones
now have plain, safe steps; the rest (riddles, tombs, romances, short side
quests) are generic but accurate. Full lists are in PROGRESS.md (Phase 3
batch notes). Owner: verify in-game or with each entry's video if you want
richer steps.

## Enable live-site prod QA (defers CLAUDE.md rule 3)
The "QA prod after every deploy" rule currently runs against the **local prod
build** only, because this environment's network policy blocks the live
`kbarbu12.github.io` host (the agent proxy returns 403 for it). To make the
rule verify the *real* deployment:
- Allowlist `kbarbu12.github.io` in the environment's network policy, then
- QA can load the live `/newapp/` URL after each prod deploy (routing, DNS,
  Pages artifact) instead of a local server.

Until then, prod QA = `npm run build:prod` + local headless render.

## Delete merged branches (agent can't; git proxy rejects ref deletion)
These are merged into `main` and safe to delete via the GitHub UI:
- `claude/ps5-rpg-sidequest-summarizer-xaidg6` (PR #37 — Valhalla)
- `claude/add-pr-template` (PR #38 — PR template)
- `claude/qa-and-changelog-rules` (PR #39 — QA & release rules)
- `claude/add-todo` (PR #40 — this file, once merged)

## Decisions from QA 2026-10-20 (`docs/qa-session-2026-10-20.md`)
- **M7 "Mark finished" bonus — DECIDED, to build:** a game can only be marked
  finished (and earn the +500) once **at least 50%** of its quests are done.
- **M8 reminders — PARKED until there's a server:** the owner wants real
  reminders, but scheduled notifications while the app is closed need a push
  service. Until then, leave "Enable reminders" as is (or hide it). Revisit
  when a backend exists.
- **Quest data fixes — after the app fixes:** re-type AC Valhalla's Order
  of the Ancients entry (the other 141 are correctly `main`; Valhalla's World
  Events are missing entirely — a content decision), rewrite templated tips/summaries (mostly AC Odyssey),
  fix the 31 TotK `type: "shrine"` entries, fill coverage gaps.

## NEXT SESSION: quest data (remind the owner first)
App fixes shipped in `v2.5.0`/`v2.6.0`; the Valhalla re-type (#301) and TotK
shrine fix (#300) are done. Still to do, both blocked on 2026-10-20 because the
session couldn't reach guide sites (powerpyx, game8, fandom, gamerguides,
youtube) even after the owner opened network access — a fresh session should
pick the new setting up. Check access first (`curl -sI https://www.powerpyx.com`).
- **D4 — fill coverage gaps:** Hogwarts Legacy (10 missing), FF7 Rebirth (7),
  Witcher 3 (6), Cyberpunk 2077 (3), Ghost of Tsushima (3), Black Myth:
  Wukong (1). Details in `docs/qa-session-2026-10-20.md`.
- **D2 — rewrite templated tips/summaries**, mostly AC Odyssey.
- **Open decision:** whether to add Valhalla's World Events.

Remove the reminder in `CLAUDE.md` once this section is done.
