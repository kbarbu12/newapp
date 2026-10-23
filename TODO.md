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

## ~~Delete the duplicate `v2.9.0` release~~ — DONE 2026-10-23
The v2.8.0 deploy (PR #357) was tagged twice because GitHub delivered the push
to `main` twice. The owner deleted the duplicate `v2.9.0` release and tag;
tags now run `v2.7.0`, `v2.8.0`, `v2.9.1`. `release.yml` skips already-tagged
commits (#358, live in `v2.9.1`), so this can't recur.

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

## ~~Quest data: coverage gaps + templated tips + Witcher 3~~ — DONE, live in `v2.8.0`
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
  (229/290). All 100 original entries have been re-checked against the guides
  and 82 corrected (#341–#345, #348–#350). New quests since: #351–#355. **Witcher 3 is complete at
  290/290** (only names confirmed by the guide lists were added) and shipped
  in `v2.8.0` (#357).

## What's left (as of 2026-10-23)
Prod is `v2.9.3`; `staging` and `main` match. In priority order:
1. ~~**Replace the 2 allowlisted shared videos**~~ Done (#363): each of
   #1320–1322 and #725–726 now has its own video and the audit allowlist is
   empty. Jedi: Survivor's three are one combined fight, so their videos all
   show that fight from different uploads.
2. **[HIGH] Full fact-check pass on the new quest data.** The sample is done
   and fixed (`v2.9.3`, #366), but it found too many errors to leave the rest
   unchecked.
   - **The sample (2026-10-23):** 101 entries with the most specific claims
     from `v2.7.0` and the Witcher 3 work, checked against guide search
     results. 13 had a clear error and 17 had a smaller problem (an
     unsupported, overstated or imprecise detail). All 30 are fixed.
     - AC Odyssey: 10 of 25 had problems (5 clear errors).
     - Other `v2.7.0` games: 11 of 26 (5 clear errors).
     - AC Valhalla: 4 of 20 (1 clear error).
     - Witcher 3: 5 of 30 (2 clear errors).
   - **AC Odyssey full pass: DONE (2026-10-23).** All 179 remaining entries
     were checked: 8 had a clear error and 29 a smaller problem, all fixed.
     Another 10 ostraka riddles that only had generic steps now have their
     solution from the guides. 9 ostraka still have generic steps because no
     guide gave a solution: Goat's Gruff, Pigsty, Fire in the Belly, Stadium
     Love, Bridging the Gap, Star-Crossed Lovers, Needle in a Haystack,
     Rightful King and Prophecy Prevention.
   - **Do next (about 1 in 5 had a clear error):** the 69 unchecked entries
     in these games:
     - Cyberpunk: 21.
     - TotK: 18.
     - Jedi: Survivor: 11.
     - Hogwarts Legacy: 6.
     - Deadfire: 6.
     - Ghost of Tsushima: 4.
     - Pillars of Eternity: 3.
   - **Then (fewer errors):** the 354 unchecked Witcher 3 (245) and AC
     Valhalla (109) entries.
   - **Method:** check each entry's location, rewards and amounts, choices,
     requirements and tip against the guides. Fix anything wrong and hedge
     anything only one guide supports. Ship one PR per game.
   - **Videos:** whether each video actually shows its quest still hasn't
     been checked first-hand.
3. **Hogwarts Legacy:** 1 short of its estimated 130 (see above).
4. **Optional Witcher 3 extras beyond the 290 target:** small unmarked
   encounters the guide lists name but that weren't added, because 290 was
   reached first or the sources were thin: Call of the Wild, Yustianna
   Disturbed, A Warm Welcome, Drunken Rabble, Strumpet in Distress, Suspicious
   Shakedown, The Price of Passage, A Dog's Life, Looters, Caravan Attack.
5. **Owner actions (agent can't do these):**
   - Review the video-candidates page and the AC Odyssey leftovers (see above).
   - Delete the merged branches (see above).
6. **Parked:**
   - M8 reminders, until there's a server.
   - Live-site prod QA, until `kbarbu12.github.io` is allowlisted (see above).
