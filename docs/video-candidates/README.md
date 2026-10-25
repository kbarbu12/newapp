# Unshipped YouTube video candidates

Proposed `watch?v=` replacements for quest `video` fields that are still
YouTube search URLs. **None of these are applied to `quests.js` yet.** Each
game ships as its own PR once the owner has reviewed the links.

Format: `{questId: videoId}`, except `vidcands.json` (rows `{id,g,t,c,u,v}`,
8 games) and `aco.json` (AC Odyssey, already applied and shipped).

| File | Game | Links | Review page |
|---|---|---|---|
| vidcands.json | GoT, Demon's Souls, FF7 Rebirth, P5R, Elden Ring, Wukong, Metaphor, Sekiro | 262 | claude.ai/artifact/KWfg5ewMCX7XdgdxSYXybc |
| hfw.json | Horizon Forbidden West | 62 | claude.ai/artifact/E5i3Ff3nCDkEyEqkkt5smt |
| w3.json | The Witcher 3 | 79 | claude.ai/artifact/L6D3fHio6ik6UrYWsbdh6W |
| bg3.json | Baldur's Gate 3 | 87 | claude.ai/artifact/AyLWLniwZMhT41NpaWKExr |
| goy.json | Ghost of Yōtei | 104 | claude.ai/artifact/8wnE1PYEPKskrxgd5gcWTM |
| poe1.json | Pillars of Eternity | 103 | claude.ai/artifact/YJ2QcQMQ4N3c68N3qBSRBo |
| poe2.json | Pillars of Eternity II: Deadfire | 109 | claude.ai/artifact/AKv1sGot7pLsg3xWPGBHSn |
| cp.json | Cyberpunk 2077 | 128 | claude.ai/artifact/6tjac9wWQKT53VVg4RaFST |
| vh.json | AC Valhalla | 142 | claude.ai/artifact/KdyNpABgM1ymigYTq7a9ei |
| sky.json | Skyrim | 129 | claude.ai/artifact/TmiWpbGzxapKRM62k7GYUw |
| totk.json | Zelda: Tears of the Kingdom | 217 | claude.ai/artifact/MStSqBWsCMyM9jLagXoGQg |
| left.json | Leftovers: Skyrim, Witcher 3, Pillars I & II | 18 | claude.ai/artifact/UDZhgTgMtErLokRpSjajSn |

## Title check, round 2 — videos already in the app (2026-10-18)

The first check only covered the 1,440 candidates. Round 2 checks the 1,160
videos that were in `quests.js` before then, game by game, the same way (a
YouTube search for the quest title; rows are appended to `title-check.json`
with `"file": "quests.js"`). Clear replacements found along the way are
swapped in and noted as `swapped to <videoId>`.

| Game | Match | Swapped | Left as is (quest IDs) |
|---|---|---|---|
| Assassin's Creed Odyssey | 294 / 344 | 48 | 1999 (title may not be a real quest), 2141 (title likely wrong; #2140 is Myths and Minotaurs) |
| Hogwarts Legacy | 94 / 120 | 24 | 717 (title doesn't look like a real quest), 516 (overlaps #862 The Room of Requirement) |

## Title check, round 3 — videos added since 2026-10-18 (2026-10-24)

Round 3 checks the 1,078 videos added to `quests.js` after round 2, one game
per PR, the same way as round 2.

| Game | Match | Swapped | Left as is (quest IDs) |
|---|---|---|---|
| The Witcher 3 | 157 / 253 | 86 | 2779, 2787, 2859, 2871, 2887, 2901, 2923, 2926, 2934, 2942 (no YouTube result for the title) |
| Assassin's Creed Valhalla | 109 / 135 | 22 | 1971, 2635, 2750 (no YouTube result for the title), 2640 (only result didn't name the quest) |
| Star Wars Jedi: Survivor | 33 / 87 | 27 | 1282, 1284, 1288, 1290, 1295–1298, 1304, 1310, 1323, 1337–1343, 1345, 1369, 2589, 2591 (no YouTube result for the title); 1287, 1292, 1299, 1305, 2588 (only generic playthrough videos came up) |
| God of War Ragnarök | 63 / 68 | 3 | 162, 164 (not in-game quest titles: umbrella entries for Atreus's sections and Mimir's lore); 663 matched, but "The Applecore" is an area, not a favour |
| Metaphor: ReFantazio | 15 / 37 | 15 | 1065 (only a generic numbered playthrough part came up); 1068–1070, 1072–1074 (More's Task chapters: only parts of multi-part series or nothing came up) |
| Ghost of Tsushima | 27 / 40 | 13 | — |
| Sekiro | 34 / 39 | 4 | 1798 (Corrupted Monk at Mibu Village: looks like a duplicate of the Illusion entry 1797); 1818 matched, but its title "Shume Masaka Nagahiro" should be Shume Masaji Oniwa |
| Black Myth: Wukong | 19 / 37 | 17 | 838 ("The Yakshas of the Pagoda": no boss by that name came up); 29 was swapped because its video was the Chapter 6 Giant Shigandang fight; 831, 836 and 839 have titles that mix two bosses |
| Zelda: Tears of the Kingdom | 30 / 36 | 5 | 1636 ("The Necluda Sky Crystal" isn't a quest name: the game has North, East and West Necluda Sky Crystal quests) |
| Elden Ring | 18 / 32 | 14 | — |
| Final Fantasy VII Remake | 14 / 30 | 15 | 1045 ("Chocobo Search (Rat Problem)" merges two separate side quests); 1036 and 1049 matched, but their titles need a look (1036 is the Chapter 10 sewers, 1049 mixes The Angel of the Slums with the Moogle Emporium) |
| Star Wars Jedi: Fallen Order | 15 / 28 | 11 | 1258 ("The Weathered Monument & Venator Wreckage" is an umbrella entry for two Zeffo areas); 1276 (chests across every planet: only per-planet guides came up) |
| Baldur's Gate 3 | 20 / 26 | 6 | — (115 matched, but no quest called "The Stolen Gnome" came up: it's the Barcus Wroot windmill rescue) |
| Cyberpunk 2077 | 16 / 22 | 6 | — |
| Final Fantasy VII Rebirth | 14 / 19 | 3 | 74 ("The Protorelic Quests" looks like a duplicate of 639); 125 ("Tifa's Piano Recital" looks like a duplicate of 646 "Piano Performances"); 131 was swapped because its video was a hard-mode enemy clip |
| Persona 5 Royal | 6 / 18 | 10 | 97 (Akechi's Confidant: only per-rank videos came up); 466 ("Will Seeds & Jose" bundles two separate systems) |
| Demon's Souls | 10 / 13 | 3 | — |
| Hogwarts Legacy | 11 / 13 | 2 | — |

## Title check (2026-10-17)

`title-check.json` records a check of every candidate above (1,440 links).
For each quest, YouTube was searched for the quest title. A row is `match`
if the candidate video came up in the results (a second title wording was
tried before giving up), otherwise `notfound`.

- `notfound` only means the video did not come up in a title search. It may
  still be the right video; treat it as "needs a look", not "wrong".
- `foundAs` is the YouTube title the video was found under.
- `note` holds alternative videos (`alt <videoId> (<title>)`) and data
  problems spotted along the way (wrong in-game titles, likely duplicates).
- #353 is included but was already removed from `quests.js` as a duplicate
  of #628.

**1,308 of 1,440 match (91%).**

| Game | Match | Not found (quest IDs) |
|---|---|---|
| Assassin's Creed Valhalla | 134 / 142 | 1876, 1894, 1903, 1904, 1948, 1963, 1971, 1990 |
| Baldur's Gate 3 | 78 / 87 | 794, 801, 947, 965, 986, 988, 991, 993, 1003 |
| Black Myth: Wukong | 0 / 4 | 832, 840, 841, 842 |
| Cyberpunk 2077 | 120 / 128 | 266, 268, 292, 301, 528, 540, 560, 586 |
| Demon's Souls | 8 / 12 | 141, 747, 748, 752 |
| Elden Ring | 25 / 38 | 804, 805, 810, 811, 813, 819, 823, 824, 825, 1015, 1021, 1025, 1026 |
| Final Fantasy VII Rebirth | 48 / 54 | 313, 639, 643, 644, 647, 648 |
| Ghost of Tsushima | 35 / 40 | 469, 474, 478, 919, 926 |
| Ghost of Yōtei | 103 / 104 | 1232 |
| Horizon Forbidden West | 52 / 62 | 390, 396, 397, 400, 401, 668, 1375, 1387, 2573, 2578 |
| Metaphor: ReFantazio | 20 / 39 | 18, 82, 83, 156, 158, 719, 720, 725, 726, 728, 730, 731, 732, 733, 740, 742, 745, 1078, 1092 |
| Persona 5 Royal | 43 / 48 | 446, 447, 676, 686, 2561 |
| Pillars of Eternity | 102 / 106 | 757, 2394, 2397, 2443 |
| Pillars of Eternity II: Deadfire | 104 / 112 | 773, 777, 779, 784, 2463, 2481, 2510, 2540 |
| Sekiro | 19 / 27 | 1821, 1823, 1824, 1825, 1828, 1829, 1830, 1833 |
| Skyrim | 130 / 140 | 1394, 1404, 1448, 1451, 1472, 1476, 1510, 1519, 1520, 1524 |
| Zelda: Tears of the Kingdom | 214 / 217 | 1695, 1741, 1742 |
| The Witcher 3 | 73 / 80 | 369, 379, 601, 609, 621, 625, 634 |

### Swapped after the title check (2026-10-17)

61 `notfound` candidates were replaced in their game files with the
alternative video found during the check (the `alt` in `title-check.json`).
`title-check.json` still shows the original candidate, as checked.

Not swapped, because the alternative wasn't a clear fit: #801 (no single
video covers both bosses), #773 (same video as #110, likely duplicate quest),
#779 (German-language video), #1824 and #1833 (videos cover only part of the
questline), #158 and #1078 ("Part 1" videos). The other 64 `notfound` rows
had no alternative and keep their original candidate.
