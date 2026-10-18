# Changelog

Prod (`main`) deploys, newest first. Each entry lists the shipped PR(s) and a
short summary of what changed. See `DEPLOY.md` for the staging → prod flow.

## 2026-10-18 (3)

- **Check AC Odyssey videos and swap 48 weak ones** (PR #270) — `v2.4.15`
  patch. Round 2 of the video title check (videos already in the app): 294
  of 344 matched their quest title; 48 swapped for videos that name the
  quest; #2332 renamed to Till Death Do Us Part. #1999 and #2141 flagged.
- **Check Hogwarts Legacy videos and swap 24 weak ones** (PR #271). 94 of
  120 matched; 24 swapped; #716 renamed to Foal of the Dead. #717 and #516
  flagged.

## 2026-10-18 (2)

- **Replace the last 4 YouTube search links with real videos** (PR #268) —
  `v2.4.14` patch. Metaphor #158 (with corrected relic steps) and #726,
  Deadfire #779, BG3 #997 now embed real videos; #726 shares #725's video,
  which covers both quests and is allowlisted in the audit. Every quest now
  has a real video: 2,461 quests, 2,459 videos, 2 playlists, 0 search links.

## 2026-10-18

- **Add 3 missing Skyrim main quests** (PR #265) — `v2.4.13` patch. The
  Horn of Jurgen Windcaller (#2594), A Cornered Rat (#2595) and the
  optional Paarthurnax (#2596), in story order with steps and videos;
  Alduin's Wall #1396 steps fixed.
- **Rebuild Deadfire main quests to match the game** (PR #266). The main
  line now follows the real seven quests: Stranded, To Hunt a God, The Veins
  of Eora (new #2597), A Distant Light, He Waits in Fire, The Coming Storm and
  The City Lost to Time (moved from Side Quest to Main Quest). Made-up titles
  replaced; duplicate #776 removed. Quest count 2,458 → 2,461.

## 2026-10-17 (7)

- **Rewrite Ghost of Yotei side content from walkthroughs** (PRs #258–#263,
  one per region) — `v2.4.12` patch. 91 of the 103 side entries (side
  tales, sensei tales, bounties, post-game) had invented NPCs, places and
  steps; each now follows the real tale or bounty (start, objectives,
  reward, tip). Real sensei restored (Takahashi, Ina, Yoshida, Enomoto); 9
  entries moved to their correct region and A Brokered Trust / The Tooth
  Breaker re-filed as bounties. The 7 Mythic Tales and 5 other entries were
  already accurate.

## 2026-10-17 (6)

- **Rebuild Ghost of Yotei main story from the real Main Tales** (PR #255)
  — `v2.4.11` patch. The ten Atsu's Journey entries had invented content;
  each now follows the real tale (the Snake, the Old Inn, Hanbei and the
  dual katana, Lord Saito's training fortress, the ronin's lead, the Oni,
  the Kitsune, the Saito brothers, Call of the Hunt, the Final Hunt of the
  Onryō). #1142 is now Call of the Hunt, replacing the made-up "The Saito
  Brothers (Part 2)".

## 2026-10-17 (5)

- **Resolve the last YouTube search links** (PRs #241–#249) — `v2.4.10`
  patch. 15 of the 19 remaining search links get real videos, and the
  entries behind them are fixed: Skyrim Reparations is now the Thieves Guild
  expulsion quest, Horizon War Totems the God of War Easter egg, BG3 #801
  split into Get Gortash's Netherstone and new #2593 Get Orin's Netherstone,
  BG3 #997 renamed Acquire the Gauntlets for Helsik, Metaphor #726/#1078
  corrected, Witcher 3 Wine Wars: Consorting rewritten. Made-up entries
  Pillars of Eternity #108 The Dozen's Dispute and Sekiro #1833 removed.
- **Duplicate and mislabelled quests** (PRs #250–#253). Witcher 3 #616 and
  #351 merged into #43 and #33; Skyrim #1399 Alduin's Bane, #1400 Season
  Unending and #1404 The Fallen renamed to match their content, #1398 steps
  fixed, duplicate #1514 removed; Deadfire duplicates #62 and #786 removed
  and #775 renamed The Coming Storm; Cyberpunk #263 merged into #250
  Nocturne Op55N1. Quest count 2,465 → 2,458; 4 search links remain.

## 2026-10-17 (4)

- **Merge Witcher 3 duplicate Nameless quests into #601** (PR #238) —
  `v2.4.9` patch. #601 "Nameless" is now the Hindarsfjall main quest with
  a 5-step walkthrough and video; duplicate #371 "The Nameless" removed.
- **Fix Black Myth: Wukong boss entries and remove a duplicate** (PR #239).
  #832 is now Whiteclad Noble, new #2592 Baw-Li-Guhh-Lang, #840 the Venom
  Daoist (replacing the made-up "Duo of Corruption"), #841 Keeper of the
  Flaming Mountains & Yin-Yang Fish; #842 removed as a duplicate of #31
  The Five Element Carts (now filed under Chapter 5). Quest count
  2,466 → 2,465; 19 quests left on a YouTube search link.

## 2026-10-17 (3)

- **Data fixes from the video check** (PRs #220–#223) — `v2.4.8` patch.
  Skyrim #1535/#1536 renamed to Volskygge / Ansilvund and Stormcloak fort
  battles #1498–#1500 now note they need Season Unending to hand over the
  hold; HFW #397 rewritten as The Wound in the Sand; BG3 #798 is now
  Impress the Murder Tribunal and #1005 Help the Cursed Monk is rewritten;
  duplicates BG3 #986 and Deadfire #773 removed. Quest count 2,468 → 2,466.
- **57 more hand-picked YouTube videos across 13 games** (PRs #221,
  #224–#236). Only 23 quests are left on a YouTube search link.

## 2026-10-17 (2)

- **Apply verified YouTube videos to 17 games** (PRs #202–#218) — `v2.4.7`
  patch. 1,364 quests switch from a YouTube search link to a real embedded
  video: Valhalla 134, BG3 84, Cyberpunk 120, Demon's Souls 7, Elden Ring
  38, FF7 Rebirth 53, Ghost of Tsushima 35, Ghost of Yōtei 103, Horizon
  FW 52, Metaphor 36, P5R 47, Pillars I 106, Deadfire 110, Sekiro 23,
  Skyrim 130, TotK 214, Witcher 3 72. Only candidates that passed the
  title check or were swapped to a checked alternative (#201) were applied;
  76 unverified or doubtful ones stay as search links. Walkthrough steps
  are kept alongside every video.

## 2026-10-17

- **Add video title-check results for all 1,440 video candidates** (PR #195)
  — `v2.4.6` patch. Docs only: `docs/video-candidates/title-check.json`
  records whether each candidate video came up in a YouTube search for its
  quest title (1,308 / 1,440 match), with alternatives and data notes.
- **Fix 4 Witcher 3 quest titles to their in-game names** (PR #196) — #367
  The Final Trial, #609 Evil's Soft First Touches, #611 A Midnight Clear,
  #634 Scavenger Hunt: Grandmaster Manticore Gear.
- **Fix Horizon Forbidden West #394 title: Blood Choke -> The Blood Choke**
  (PR #197).
- **Fix 2 Baldur's Gate 3 quest titles to their in-game names** (PR #198) —
  #978 Avenge Glut's Circle, #1010 Visit the Emperor's Old Hideout.
- **Fix 3 Skyrim quest titles to their in-game names** (PR #199) — #1489
  Rescue from Fort Kastav (text rewritten to the prisoner rescue), #1523
  Mehrunes Dagon: Pieces of the Past (moved to Daedric Quests), #1533
  Silenced Tongues.

## 2026-10-16

- **Fix Valhalla quest title: The Son of Jorvik -> This Son of Jorvik**
  (PR #192) — `v2.4.5` patch. #1952 now uses the in-game title.
- **Remove duplicate Witcher 3 quest: The Merry Widow (Contract) (#353)**
  (PR #193). Kept #628 "Contract: The Merry Widow". Quest count
  2,469 → 2,468.

## 2026-10-15 (4)

- **Fail the quest audit on filler step text and label-only tips** (PR #190)
  — `v2.4.4` patch. Tooling only: `scripts/audit.js` now errors on template
  step phrases and label-only aiTips, so CI and the deploy gate block them.
  No app or data change.

## 2026-10-15 (3)

- **Fix the last 17 AC Odyssey riddles and restore 2 removed by mistake**
  (PR #188) — `v2.4.3` patch. Every riddle now has a real region and
  content (no template riddles left); new Malis region; "Beneath Theseus'
  Dreams" and "'Til Death Do Us Part" restored (#180 removed them in error).
  Quest count 2,467 → 2,469.
- **Remove empty Paradise Islands filter and move To the Edge of the World
  to Petrified Islands** (PR #187). Empty "Forest Islands" and "Peloponnese"
  filter options also removed (#188).

## 2026-10-15 (2)

- **Log 2026-10-15 quest data cleanup and v2.4.1 deploy in PROGRESS.md**
  (PR #185) — `v2.4.2` patch. Docs only: brings the session log up to date.
  No app or data change.

## 2026-10-15

- **Quest data cleanup across six games** — `v2.4.1` patch (PRs #170–#183).
  - **AC Odyssey** (#171, #172, #177, #183): 49 cultists, romances and Lost
    Tales got real regions; 18 riddles got correct regions and, for 10, the
    tablet and answer spots; 10 story quests warn about the choices that
    matter (Nikolaos, the Lagos chain, the family ending); island regions now
    match the game (Lesbos/Chios → Petrified Islands, Lemnos/Thasos → new
    Hephaistos Islands, Keos → Pirate Islands).
  - **Deadfire** (#173, #174): 28 bounties and 18 faction quests got their
    own tips; 12 bounties are ship fights and now say so; 10 faction quests
    got real steps.
  - **Cyberpunk** (#175): 17 gigs got their own tips; Big Pete's reward
    claim fixed.
  - **Jedi: Survivor** (#176, #182): 8 rumors fixed (rewards, givers);
    4 missing rumors added (#2588–#2591).
  - **Ghost of Tsushima** (#178, #179): 39 companion and mythic tales
    rewritten from guides (filler steps replaced); A Gathering Storm is Act 3.
  - **Pillars of Eternity** (#181): 14 bounties got their own tips and 7 got
    real target locations.
  - **Removed 12 unconfirmed quests** (#180): 7 Jedi: Survivor rumors, 4 AC
    Odyssey riddles, Ghost of Tsushima's "The Coward's Deception".
  - Quest count 2,475 → 2,467.
- Session log update (PR #170), docs only.

## 2026-10-14

- **Walkthrough steps everywhere** — `v2.4.0` minor (PRs #126–#168).
  - **Show walkthrough steps alongside the video** (PR #127): quests with a
    video now also show their step list.
  - **Steps for every video quest** (PRs #128–#145, except #130, #135 and
    #143): Hogwarts Legacy, God of War Ragnarök, Jedi: Survivor and Fallen
    Order, Wukong, FF7 Rebirth, Cyberpunk, Metaphor, Witcher 3, Horizon,
    Demon's Souls, Ghost of Tsushima, Ghost of Yōtei, P5R and Pillars, with
    data fixes along the way.
  - **AC Odyssey expansion** (PRs #146–#154): ~200 quests' 1–3-step lists
    expanded from guides (story, side quests, Cult of Kosmos targets, Lost
    Tales, romances, beasts, tombs, riddles).
  - **Template steps replaced** (PRs #155–#162): Cyberpunk gigs (wrong
    districts/fixers fixed), Deadfire and Pillars bounties (real target
    locations), TotK, P5R Mementos, Skyrim contracts/forts, Yōtei, Valhalla.
  - **Leftovers made plain and safe** (PRs #163–#168): entries no guide
    confirmed lost their invented details and got plain steps.
  - **Last placeholder text replaced** (PR #126): 6 AC Odyssey quests and 1
    Deadfire quest.
  - **Removed fake/duplicate quests** (PRs #130, #135, #143): Hogwarts
    #509 and #868, an FF7 Rebirth quest, a Witcher 3 contract duplicate and
    a Yōtei duplicate. Quest count 2,480 → 2,475.

## 2026-10-13 (3)

- **Log 2026-10-13 quest removals and v2.3.16 deploy in PROGRESS.md**
  (PR #125) — `v2.3.17` patch. Docs only: brings the session log up to date
  (PR #122/#123/#124, prod QA results, open items). No app or data change.

## 2026-10-13 (2)

- **Replace generic AI tips and rewards on 105 AC Odyssey side quests**
  (PR #122) — `v2.3.16` patch. Each of #2071–#2185 gets a quest-specific
  aiTip and a specific reward (named items where guides list them, e.g.
  Secretive Gauntlets, Bow of the Muses, Atlantean Blade). Also adds unshipped
  video candidates for three renamed Skyrim quests (docs only).
- **Remove 4 duplicate/fake quests** (PR #123). AC Odyssey #2186–#2188
  (duplicates of Xenia's treasure hunts #2118–#2120) and Skyrim #1502 "Rescue
  from Fort Amol" (not a real quest). Quest count 2,484 → 2,480.

## 2026-10-13

- **Replace placeholder text on 62 Pillars of Eternity quests** (PR #119) —
  `v2.3.15` patch. Real summary, aiTip, walkthrough and reward for #2359–#2444,
  verified against guides. Regions fixed (Elms' Reach quests, At the Mercy of
  the Tribes and True to Form → Twin Elms; Siege of Crägholdt → White March;
  The Grey Sleeper → Longwatch Falls). #2407 Unworn Eorn → Unwanted. Removed
  #2379 (duplicate of #760) and #2361 "The Final Confrontation" (not a quest).
  Quest count 2,486 → 2,484.
- **Replace placeholder text on 34 Deadfire quests** (PR #120). Same treatment
  for #2445–#2540; #2445 Helping Hands Main Quest → Side Quest. #2503 Her Last
  Request left unchanged (no guide details).

## 2026-10-12

- **Remove 29 fabricated/duplicate quests and fix 3 Skyrim entries** (PR #117) —
  `v2.3.14` patch. Quest count 2,515 → 2,486. Removed 2 duplicates (#613, #1515)
  and 27 invented or placeholder entries: Ghost of Yōtei (5), Horizon Forbidden
  West (2), Sekiro (1), Skyrim (2), Pillars of Eternity (5, incl. two Deadfire
  quests filed under PoE1) and Deadfire (12, incl. 5 invented companion quests).
  Fixed #1469 Master of the Mind → The Staff of Magnus, #1491 Rescue from Fort
  Neugrad → Stormcloaks, #1492 Liberation of Skyrim → Battle for Windhelm.
  Also adds `docs/video-candidates/` (1,441 proposed YouTube links awaiting
  review; not used by the app).
- Also ships the 2026-10-10 (2) session log in `PROGRESS.md` (PR #116).

## 2026-10-10 (2)

- **AC Odyssey main-quest regions, all chapters** (PR #110) — `v2.3.13` patch.
  20 more main quests moved to their real regions: #2007 Equal Employment
  Opportunity Program → Phokis; Eppie quests #2008–#2011 → Boeotia; #2012–#2015
  Megaris campaign → Megaris; #2024 Memories Awoken → Phokis; Olympic Games
  quests #2054–#2056 → Elis; Lagos quests #2057–#2060 → Arkadia; #2061 The
  Conqueror → Boeotia; #2063 The Battle of Pylos → Messenia (new Region filter
  option); #2068 We Will Rise → Northern Greece.
- **AC Odyssey side-quest placeholder text replaced** (PR #111, PR #112, PR #113,
  PR #114). 95 of the 101 side quests that shared the generic "A regional side
  quest in …" text now have real summaries and walkthroughs from guides. Title
  fixes: Dagger to the Heart, Handle with Care, Death Comes for Us All, Have You
  Seen My Mikkos?. 7 Lesbos/Chios quests moved from Northern Sporades to
  Petrified Islands. 6 entries with no guide source left unchanged (#2143,
  #2149, #2151, #2168, #2170, #2180).
- Also ships the 2026-10-10 session log in `PROGRESS.md` (PR #109).

## 2026-10-10

- **Fix AC Odyssey Chapter 5 main-quest regions** (PR #107) — `v2.3.12` patch.
  13 Chapter 5 main quests were filed under Cyclades Islands. Moved #2031–#2035
  (To Find a Girl → Monger Down) to **Korinthia**, #2036–#2040 (First Do No
  Harm → Ashes to Ashes) to **Argolis**, and #2041–#2043 (Abandoned by the Gods
  → Athens' Last Hope) to **Attika**. Rewrote #2040 Ashes to Ashes' summary and
  walkthrough (altar → forest shrine → save the baby or chase Chrysis). Also
  ships the 2026-10-06 session log in `PROGRESS.md` (PR #106).

## 2026-10-06

- **Fix AC Odyssey duplicate Ostraka entries** (PR #104) — `v2.3.11` patch.
  Removed 4 Side Quest entries (#2081 Record Sunshine, #2082 Happy Hour,
  #2083 Pressed for Time, #2084 A Specific General) that duplicated existing
  Ainigmata Ostraka riddles and only had placeholder text and search-URL
  videos. Corrected those 4 Ostraka entries' regions: Happy Hour and Record
  Sunshine → Megaris (was Attika); Pressed for Time and A Specific General →
  Phokis (was Northern Greece). AC Odyssey now 349 quests (was 353), with 0
  search-URL videos.

## 2026-08-25

- **Metaphor: ReFantazio + Persona 5 Royal video-link fixes** (PR #101, PR #102)
  — `v2.3.9` patch. Owner video-checked both games' "Watch guide" links.
  Metaphor: ReFantazio: replaced 18 dead/incorrect video links (quest count
  unchanged at 76). Persona 5 Royal: replaced 10 dead/incorrect video links
  (quest count unchanged at 66). Final Fantasy VII Rebirth was also checked
  in this pass — every link confirmed correct, no changes needed.

## 2026-08-24

- **Ghost of Tsushima + Hogwarts Legacy video-link fixes** (PR #97, PR #98) —
  `v2.3.7` patch. Owner video-checked both games' "Watch guide" links.
  Ghost of Tsushima: replaced 21 dead/incorrect video links, and split 3
  quests that each bundled two unrelated collectibles under one video into
  6 standalone entries with their own dedicated video (Haiku & Hot Springs;
  Pillars of Honor & Duels; Mongol Artifacts & Records) — now 74 quests, up
  from 71. Hogwarts Legacy: replaced 2 dead video links and removed 2
  quests the owner confirmed don't exist in the game (The Unnatural
  Animagus, E is for Erised) — now 122 quests, down from 124.

## 2026-08-12 (3)

- **Star Wars Jedi: Survivor video-link fixes** (PR #95) — `v2.3.5` patch. Owner
  spot-check of the Survivor "Watch guide" links replaced 41 entries: incorrect,
  unavailable, or too-long videos, plus converting the remaining
  `results?search_query=` search-URL fallbacks (rumor quests, exploration/recruit
  tasks) to specific `watch?v=` guides — Survivor now has 0 search-URL videos.
  Includes an owner-approved shared video for #1320/#1321/#1322 (Kle-0, Fenn
  Finau, Masi Finau — same arena); `audit.js` gained a `SHARED_VIDEOS` allowlist
  so intentional same-location shares pass the reused-video check.

## 2026-08-12 (2)

- **God of War Ragnarök video-link fixes** (PR #94) — `v2.3.4` patch. Owner
  spot-check of the Ragnarök "Watch guide" links flagged 2 entries whose YouTube
  video was incorrect: #46 Defend Your Valor and #443 Sigrún's Curse. Replaced
  both with owner-supplied correct guides. The other 66 Ragnarök entries were
  confirmed correct.

## 2026-08-12

- **Elden Ring video-link fixes** (PR #93) — `v2.3.3` patch. Owner spot-check of
  the Elden Ring "Watch guide" links (part of the per-game video-verification
  effort) flagged 5 entries whose YouTube video was unavailable or incorrect.
  Replaced the links for #239 Malenia, #241 Dragonlord Placidusax (was a
  location guide, not a boss fight), #1011 Become Elden Lord, #1012 Roderika's
  Questline, and #1013 Thops' Questline with owner-supplied correct guides. The
  other 65 Elden Ring entries were confirmed correct.

## 2026-08-08

- **Black Myth: Wukong — real YouTube video links** (PR #90) — `v2.3.2` patch.
  First game in the "search URL → specific `watch?v=` link" effort. Converted
  the game's search-URL boss/quest videos to specific YouTube guides (sourced via
  YouTube-filtered search, then owner-reviewed). Wukong now 35 real `watch?v=`
  videos + 4 search-URL fallbacks (each with a full step-by-step walkthrough);
  the fallbacks are paired-boss / ambiguous entries where no single video fits.

## 2026-08-07

- **Skyrim quest-data compliance fix** (PR #85) — `v2.3.1` patch. Phase 3
  verification of The Elder Scrolls V: Skyrim closed a compliance gap where 54
  entries had only a search-URL video and a 1-step stub walkthrough. Expanded 50
  entries to accurate multi-step walkthroughs (Thieves Guild radiant jobs, Dark
  Brotherhood contracts, College of Winterhold ritual spells, both Civil War
  fort campaigns, dungeon quests), renamed a mislabeled entry to "The Blessings
  of Nature (Kynareth)", and removed 3 redundant cross-reference stub entries
  whose real versions already exist. Skyrim now 145 quests. Also verified
  **AC Valhalla** (142) and **Cyberpunk 2077** (148) as complete and accurate —
  no changes needed — completing Phase 3.
- **Promote Phase 2 games to production** (PRs #81, #82) — `v2.3.0` minor
  release. Ships the Game-Verification Phase 2 batch:
  - **Horizon Forbidden West** (PR #81) — the base game was already
    comprehensively covered, but the Burning Shores DLC had only two entries
    and both used fabricated quest names. Replaced them with the DLC's real 9
    quests (6 main: To the Burning Shores, Heaven and Earth, The Stars in Their
    Eyes, For His Amusement, His Final Act, Epilogue; 3 side: A Friend in the
    Dark, The Splinter Within, In His Wake). HFW now 76 quests.
  - **Metaphor: ReFantazio** (PR #82) — quest coverage verified complete (76,
    100% of target); fixed the region taxonomy by adding a **Brilehaven** filter
    option and re-tagging its 6 Port Brilehaven side quests (Dental Distress,
    Efflorescent Youth, Soldier's Solace, The Chalice vs. The Brew, Superior
    Scrimshaw, Deeds and Diversions) from their mis-assigned regions.
  - Also verified **Ghost of Yotei** as complete and accurate (119 quests; every
    category count matches authoritative sources) — no data changes needed.
- **Promote Phase 1 games to production** (PRs #76, #77, #78) — `v2.2.0`
  minor release. Ships the Game-Verification Phase 1 batch:
  - **Pillars of Eternity 1 & 2** (PR #76) — added 185 quests from the
    supplied canonical lists (POE1 115 total, POE2 127 total), each with an
    accurate summary, aiTip, step-by-step walkthrough, reward, and video;
    switched both games' sub-filter to **Quest Type** (Main/Side/Companion/
    Faction/Task/Bounty, plus Expansion for Deadfire) via a new `category`
    field on every POE entry.
  - **Persona 5 Royal** (PR #77) — completed the Mementos Requests to the
    canonical **32**: removed 6 non-canonical/placeholder entries, kept the 4
    canonical existing ones, and added 28 more (P5R now 66 quests).
  - **Black Myth: Wukong** (PR #78) — added the two genuinely-missing Chapter 4
    Purple Cloud Mountain secret bosses, **the Duskveil** (rewards the Weaver's
    Needle) and **Daoist Mi** (rewards the Violet Hail Transformation); Wukong
    now 39 quests.
  - Also verified **SW Jedi: Fallen Order** and **SW Jedi: Survivor** as already
    complete and fully compliant — no data changes needed.
- **Promote redesign + Quest Assistant + 3 verified games to production**
  (PR #50) — `v2.0.0` major launch. Ships the full redesign (quest-type badges,
  chapters/acts, game page, 4-tab Library, gamification, chatbot deep-links,
  first-visit welcome), the Quest Assistant (Tiers 1–4 intents with
  stemming/synonym retrieval and missable/progression handling), and verified
  quest data with full walkthroughs for Final Fantasy VII Remake, Elden Ring,
  and Baldur's Gate 3.
- **Add semver tagging + GitHub Releases for prod deploys** (PRs #49, #51, #52)
  — every push to `main` now auto-tags a semver version and cuts a GitHub
  Release via `release.yml` (bump level from a `[major]`/`[minor]`/patch token in
  the merge subject). Rewrites `REVERT.md` around tag-based rollback and adds a
  Versioning & rollback section to `DEPLOY.md`. This deploy tagged `v2.0.0`
  (baseline `v1.0.0` on the prior prod state).

## 2026-07-18

- **Add quest-type Category filter to Assassin's Creed Valhalla (England Arc)**
  (PRs #43, #44) — reclassified all 142 Valhalla entries' `category` from
  granular story-arc names into five quest-type buckets (Main Story · England
  Arc · Mythology · Vinland Saga · Order of the Ancients) and preserved each
  original arc name in a new `arc` field (passed through `gen-data.mjs`). Adds a
  **Category** sub-filter alongside the existing **Region** filter in the
  Valhalla `subFilterConfig`.
- **Add Assassin's Creed Odyssey (353 entries) with Category & Region filters**
  (PR #42) — new game with the complete base-game catalog: 72 main-story quests,
  118 side quests, 10 Lost Tales of Greece, 43 Cult of Kosmos, 8 Legendary
  Beasts, 4 Mythical Creatures, 16 Romances, 22 Tombs, 60 Ainigmata Ostraka,
  each enriched with summary, aiTip, difficulty, length, reward and a
  step-by-step walkthrough. 349/353 entries carry a real, dedicated
  `youtube.com/watch?v=` walkthrough video (the 4 without share names with
  Ainigmata Ostraka riddles and keep authored walkthroughs). Expands the
  redesign with game-driven **Category** and **Region** sub-filters (new
  `category` field passed through `gen-data.mjs`; regions normalized to a
  canonical set), and registers the game in `gameImages` + `subFilterConfig`
  with cover art.

## 2026-07-17

- **Exempt CHANGELOG/TODO edits from the one-PR-per-change rule** (PR #41) —
  pure `CHANGELOG.md`/`TODO.md` edits now ride along with the change they
  describe instead of requiring a dedicated PR.
- **Add TODO list for deferred owner work** (PR #40) — added `TODO.md` tracking
  the deferred live-site prod QA (rule 3, blocked by the environment network
  policy) and the merged branches awaiting manual deletion.
- **Add QA & release rules and this changelog** (PR #39) — CLAUDE.md now requires
  a QA test after every staging push, a changelog entry after every prod deploy,
  and a QA test after every prod deploy. Added `CHANGELOG.md` (this file) and
  backfilled the day's earlier deploys.
- **Add PR template and require a titled PR per change** (PR #38) — added
  `.github/pull_request_template.md` (type-of-change, quest-data checklist,
  verification, deploy target) and a CLAUDE.md rule that every change ships as
  its own PR titled after the change.
- **Add Assassin's Creed Valhalla (142 quests)** (PR #37) — new game with 142
  fully enriched base-game main-arc quests (summary, aiTip, location, difficulty,
  length, reward, step-by-step walkthroughs), registered in `gameImages` and a
  22-region `subFilterConfig`. Includes a difficulty-value fix (`Easy` → `Low`)
  caught during QA rendering.
