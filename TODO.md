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
- ~~**M7 "Mark finished" bonus — DECIDED, to build:** a game can only be marked
  finished (and earn the +500) once **at least 50%** of its quests are done.~~
  Built in #286, live in `v2.5.0`.
- **M8 reminders — PARKED until there's a server:** the owner wants real
  reminders, but scheduled notifications while the app is closed need a push
  service. Until then, leave "Enable reminders" as is (or hide it). Revisit
  when a backend exists.
- ~~**Quest data fixes — after the app fixes:** re-type AC Valhalla's Order
  of the Ancients entry (the other 141 are correctly `main`; Valhalla's World
  Events are missing entirely — a content decision), rewrite templated tips/summaries (mostly AC Odyssey),
  fix the 31 TotK `type: "shrine"` entries, fill coverage gaps.~~ All done
  (#300, #301, #307–#330); live in `v2.5.0` and `v2.7.0`.

## ~~Quest data: coverage gaps + templated tips~~ — DONE 2026-10-20
D4 and D2 from the 2026-10-20 QA report were done in PRs #307–#328 (to `staging`)
(coverage: Hogwarts, Witcher 3, Cyberpunk, Ghost of Tsushima, Wukong, plus a
corrected FF7 Rebirth target; tips/summaries: AC Odyssey, Cyberpunk, Jedi:
Survivor, TotK, Pillars, Deadfire). With all of them merged, no tip, summary or
walkthrough is duplicated in the data. Still open:
- ~~**Decision:** whether to add Valhalla's World Events.~~ Added: 129 World
  Events across all regions (IDs 2624–2752), under a new "World Events" category.
- Hogwarts Legacy is 1 short of its estimated 130. No further missing quest
  could be confirmed, so nothing was guessed.
- The Witcher 3's target is now 290 (about 207 base-game main/side/contract
  quests plus ~24 Hearts of Stone and ~58 Blood and Wine). Batch 1 added the 26
  missing base-game main quests; batch 2 the 19 missing base-game witcher
  contracts; batch 3 19 White Orchard/Velen secondary quests; batch 4 15
  Novigrad secondary quests; batch 5 14 Skellige/Kaer Morhen secondary quests
  (193/290); batch 6 13 Hearts of Stone quests; batch 7 14 Blood and Wine
  quests; batch 8 the 9 quests held back for conflicting sources, now verified
  (229/290). Next: re-verify the original 100 Witcher 3 entries (IDs 13-635,
  several describe the wrong quest) and add the remaining Blood and Wine side
  quests and contracts.

## What's left (as of 2026-10-21)
Prod is `v2.7.0`. In priority order:
1. **Ship the Witcher 3 batches waiting on `staging`** (#332, #335–#344):
   - About 129 new quests (Witcher 3 at 229 / 290) and 36 corrected original
     entries.
   - Needs: QA on staging, then the owner's go-ahead to promote.
2. **Finish Witcher 3:**
   - Re-check the rest of the original 100 entries (IDs 13–635); some describe
     the wrong quest.
   - Add the remaining Blood and Wine side quests and contracts (61 short of
     the 290 target).
3. **Replace the 2 allowlisted shared videos** with quest-specific ones:
   `jDvmQQVqWGs` on #1320–1322 and `X1deZpHKJ9I` on #725–726.
4. **Hogwarts Legacy:** 1 short of its estimated 130 (see above).
5. **Fact-check the new quest data** (v2.7.0 and the Witcher 3 batches):
   - Game facts and video contents weren't verified, because the guide sites
     and YouTube are blocked from the agent environment.
   - The data was written from search snippets. Spot-check in-game, or re-run
     with network access.
6. **Owner reviews still pending:**
   - The video-candidates review page and the AC Odyssey leftovers (see above).
   - The merged branches to delete (see above).
7. **Parked:**
   - M8 reminders, until there's a server.
   - Live-site prod QA, until `kbarbu12.github.io` is allowlisted (see above).
