# TODO — owner: @kbarbu12

Work parked for the repo owner to do (things the agent environment can't).

## ~~Chapter/act naming per game~~ — DONE 2026-08-06
Each game now names its divisions with its own term (Realms, Districts, Planets,
Archstones, Arcs, Questlines, Acts, Chapters, Regions), with a matching Library
filter and sort. See PROGRESS.md §0 "Phase 1b".

## Game-verification roadmap — COMPLETE (2026-08-07)
All 24 games verified across Phases 1–4 (prod `v2.2.0` → `v2.3.1`). Details in
`PROGRESS.md` (§ "Game-verification roadmap") and `CHANGELOG.md`.

## ~~Upgrade quest videos from search URLs to real `watch?v=` links~~ — DONE 2026-10-28
No search URLs are left: every quest `video` is a real `watch?v=` or playlist
link, and every one has a title-check row in
`docs/video-candidates/title-check.json`. Rounds 3–6 checked each video's title
against its quest. Round 7 (2026-10-28) reviewed the 73 rows those rounds left
unconfirmed. 44 were confirmed and 26 were swapped to a video named after the
quest (AC Odyssey's #1999 and #2141 were also renamed to their in-game titles).
One made-up quest was removed (Hogwarts Legacy #717 "Trafficking Talents"), and
two stay unverified but keep their walkthroughs (#179, #779). The owner review
on the artifact page is no longer needed.

## ~~AC Odyssey entries no guide could confirm (Phase 3 leftovers)~~ — DONE 2026-10-26
The "~96" short entries had already shrunk to 31. On 2026-10-26, 27 of them
were researched against two or more guides each and given full 4–6 step
walkthroughs. Pride of Place and Centaur Field now have their real riddle
solutions, and Tough Love was corrected: the gentle choice saves Neleus, not
Mikkos. Four stay at 3 steps: Sharp Tongue, Wasn't Born the Kingfisher and
The Kingfisher and the Robin are already complete, and no guide covers Not My
Mother's Daughter in more detail.

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

## ~~Delete old branches~~ — DONE 2026-10-26
The owner deleted all 265 old branches; only `main` and `staging` remain.
`staging` is protected by the "stagging" ruleset (no deletion, no force
push), and "Automatically delete head branches" is on, so PR branches are
removed after each merge from now on.

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
- ~~Hogwarts Legacy is 1 short of its estimated 130.~~ Now 133 (#386). No further missing quest
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

## What's left (as of 2026-10-24)
Prod is `v2.9.28`; `staging` and `main` match.

**Done since the last update:** the 2 shared videos were replaced (#363,
`v2.9.2`), and the **[HIGH] full fact-check pass is complete** (`v2.9.3` to
`v2.9.7`). The sample (101 entries, #366) and the full passes on AC Odyssey
(#370), the smaller `v2.7.0` games (#373), Witcher 3 (#376) and AC Valhalla
(#379) checked every new entry against guide search results:

| Pass | Checked | Clear errors | Smaller problems |
|---|---|---|---|
| Sample (all games) | 101 | 13 | 17 |
| AC Odyssey | 179 | 8 | 29 |
| Smaller `v2.7.0` games | 69 | 7 | 6 |
| Witcher 3 | 245 | 8 | 21 |
| AC Valhalla | 109 | 7 | 14 |
| **Total** | **703** | **43** | **87** |

All of them are fixed. Details are in `CHANGELOG.md` and `PROGRESS.md`.

**Done on 2026-10-24 (`v2.9.9`):** the 5 ostraka that still had generic
steps were solved and the 3 conflicting Jorvik events now list every method
(#385; the other 4 ostraka on the old list had already been solved). 4
missing Hogwarts relationship quests were added (#386, now 133 / 130). 7 of
the 10 optional Witcher 3 encounters were added (#387, now 297 / 290).

**Done on 2026-10-24 (`v2.9.10`):** the video title check (round 3) has
started. The Witcher 3 (#390), AC Valhalla (#391) and Jedi:
Survivor (#392) are done: 475 videos checked, 135 swapped for clearly
titled alternatives, and 41 left as is. See PROGRESS.md and the round-3 table
in `docs/video-candidates/README.md`.

**Done on 2026-10-24 (`v2.9.12`):** God of War Ragnarök (#399):
68 videos checked, 63 matched, 3 swapped, 2 left as is.

**Done on 2026-10-24 (`v2.9.13`):** Metaphor: ReFantazio (#402):
37 videos checked, 15 matched, 15 swapped, 7 left as is.

**Done on 2026-10-24 (`v2.9.16`):** Ghost of Tsushima (#413): 40
videos checked, 27 matched, 13 swapped.

**Done on 2026-10-25 (`v2.9.17`):** Sekiro (#416): 39 videos
checked, 34 matched, 4 swapped, 1 left as is.

**Done on 2026-10-25 (`v2.9.18`):** Black Myth: Wukong (#419): 37
videos checked, 19 matched, 17 swapped, 1 left as is.

**Done on 2026-10-25 (`v2.9.19`):** Zelda: Tears of the
Kingdom (#422): 36 videos checked, 30 matched, 5 swapped, 1 left as is.

**Done on 2026-10-25 (`v2.9.20`):** Elden Ring (#425): 32 videos
checked, 18 matched, 14 swapped.

**Done on 2026-10-25 (`v2.9.21`):** Final Fantasy VII Remake
(#428): 30 videos checked, 14 matched, 15 swapped, 1 left as is.

**Done on 2026-10-25 (`v2.9.22`):** the rest of round 3, one PR per game: Star
Wars Jedi: Fallen Order (#431): 28 videos checked, 15 matched, 11 swapped, 2
left as is. Baldur's Gate 3 (#432): 26 videos checked, 20 matched, 6 swapped.
Cyberpunk 2077 (#433): 22 videos checked, 16 matched, 6 swapped. Final Fantasy
VII Rebirth (#434): 19 videos checked, 14 matched, 3 swapped, 2 left as is.
Persona 5 Royal (#435): 18 videos checked, 6 matched, 10 swapped, 2 left as is.
Demon's Souls (#436): 13 videos checked, 10 matched, 3 swapped. Hogwarts Legacy
(#437): 13 videos checked, 11 matched, 2 swapped. Horizon Forbidden West
(#438): 11 video checked, 9 matched, 2 swapped. Ghost of Yōtei (#439): 9 videos
checked, 3 matched, 6 swapped. Pillars of Eternity II: Deadfire (#440): 4
videos checked, 1 matched, 0 swapped, 3 left as is. Skyrim (#441): 4 videos
checked, 3 matched, 0 swapped, 1 left as is. Pillars of Eternity (#442): 1
video checked, 0 matched, 1 swapped.

**Done on 2026-10-25 (`v2.9.23`):** every entry flagged by the round-3 title
check was fixed, one PR per game: God of War Ragnarök (#445), Sekiro (#446),
Black Myth: Wukong (#447), Zelda (#448), FF7 Remake (#449), Jedi: Fallen Order
(#450), Baldur's Gate 3 (#451), Persona 5 Royal (#452), FF7 Rebirth (#453) and
Deadfire (#454).

**Done on 2026-10-26 (`v2.9.24`):** round 5 rechecked the 52 videos left as is:
Witcher 3 (#457), AC Valhalla (#458), Metaphor (#459), Jedi: Survivor (#460),
Persona 5 Royal (#461), Deadfire (#462) and notes (#463). 48 now match or
were swapped; 4 have no video anywhere and keep their steps.

**Done on 2026-10-26 (`v2.9.25`):** the unconfirmed extras. Needle in a
Haystack (AC Odyssey) confirmed by three sources (#466); A Warm Welcome, The
Price of Passage and Call of the Wild added to Witcher 3 (#467).

Still open, in priority order:
1. **Video title check is finished.** Every video has a row in
   `docs/video-candidates/title-check.json`, and every quest now has a video
   named after it or a guide for exactly what it asks. Round 4 fixed the
   flagged titles, duplicates and bundles (#445–#454); round 5 rechecked the
   52 videos left as is (#457–#463); round 6 (2026-10-27) found videos for the
   last 4: Metaphor's More's Task Chapters Two, Four and Five now point to
   guides for their archetype requirements (#477), and Skyrim's Reparations
   to a walkthrough named after it (#478); round 7 (2026-10-28) reviewed the
   73 rows earlier rounds left unconfirmed (#481–#493, #494). Nothing is left.
2. **Parked:**
   - M8 reminders, until there's a server.
   - Live-site prod QA, until `kbarbu12.github.io` is allowlisted (see above).
