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
Prod is `v2.9.21`; `staging` and `main` match.

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

**Done since (on `staging`, not yet on prod):** Star Wars Jedi: Fallen Order (#431): 28 videos checked, 15 matched, 11 swapped, 2 left as is. Baldur's Gate 3 (#432): 26 videos checked, 20 matched, 6 swapped. Cyberpunk 2077 (#433): 22 videos checked, 16 matched, 6 swapped.

Still open, in priority order:
1. **Finish the video title check (round 3).** 92 videos left, one game per
   PR, same method (a YouTube search per quest title, logged in
   `docs/video-candidates/title-check.json`). Counts are videos with no row
   in `title-check.json` yet (recounted 2026-10-24; the earlier table also
   counted videos checked in rounds 1–2):

   | Game | Videos |
   |---|---|
   | Final Fantasy VII Rebirth | 19 |
   | Persona 5 Royal | 18 |
   | Demon's Souls | 13 |
   | Hogwarts Legacy | 13 |
   | Horizon Forbidden West | 11 |
   | Ghost of Yōtei | 9 |
   | Pillars of Eternity II: Deadfire | 4 |
   | Skyrim | 4 |
   | Pillars of Eternity | 1 |

   The 56 videos left as is (IDs in the README table) need a look from the
   owner or a better source. Most are Jedi: Survivor story missions,
   collectible hunts and Metaphor's More's Task chapters. God of War Ragnarök #162 Atreus's Search, #164
   Mimir's Knowledge and #663 The Applecore aren't real in-game quest names
   (two umbrella entries and an area); decide whether to rename or drop them.
   Sekiro #1798 "Corrupted Monk" (Mibu Village) looks like a duplicate of
   #1797, and #1818 "Shume Masaka Nagahiro" should be Shume Masaji Oniwa.
   Black Myth: Wukong titles mix bosses: #831 "Elder Jinchi (Lingxuzi)",
   #836 "Macaque Chief (Non-Void)" and #839 "Violet Spider (Second Sister)"
   each name two different bosses, and #838 "The Yakshas of the Pagoda"
   isn't a boss name. Zelda #1636 "The Necluda Sky Crystal" isn't a real
   quest: the game has North, East and West Necluda Sky Crystal quests.
   Zelda #1643's summary misspells the shrine as "Uzasum" (it's Usazum).
   Final Fantasy VII Remake: many main entries use descriptive titles, not
   the game's chapter names (e.g. #1027 "Bombing Mission" is Chapter 1 "The
   Destruction of Mako Reactor 1"). #1045 "Chocobo Search (Rat Problem)"
   merges two separate side quests, #1049 "The Angel of the Slums (Moogle
   Merchant)" mixes a side quest with the Moogle Emporium, #1036 "The
   Collapsed Expressway" describes the Chapter 10 sewers (Abzu), and #1032
   and #1034 both cover Chapter 8.
   Jedi: Fallen Order: most story entries use descriptive titles rather than
   the game's own objective names, and #1258 "The Weathered Monument &
   Venator Wreckage" bundles two Zeffo areas into one entry.
   Baldur's Gate 3 #115 "The Stolen Gnome" isn't an in-game quest name (it's
   the Barcus Wroot windmill rescue).
2. **Unconfirmed extras:** Needle in a Haystack's solution comes from a
   single guide. A Warm Welcome, The Price of Passage and Call of the Wild
   (Witcher 3) weren't added because no guide could confirm them.
3. **Owner actions (agent can't do these):**
   - Review the video-candidates page and the AC Odyssey leftovers (see above).
   - Delete the merged branches (see above).
4. **Parked:**
   - M8 reminders, until there's a server.
   - Live-site prod QA, until `kbarbu12.github.io` is allowlisted (see above).
