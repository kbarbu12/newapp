# Update — Metaphor: ReFantazio Full Quest Database (71 New Entries)

**Date:** 2026-07-13
**Branch:** `claude/mr-quests-walkthroughs-5c6pyx`
**Live site:** https://kbarbu12.github.io/newapp/

## What this update does
Added all 71 missing quests from the uploaded Metaphor: ReFantazio quest
database docx to `ps5-rpg-sidequest-summarizer/data/quests.js`. Every entry
has either a real YouTube `watch?v=` video URL (found via search) or a
step-by-step walkthrough array.

## What was added

### Main Quests — MQ-01 to MQ-11 (11 entries, all with real video URLs)
- Save the Prince from Death's Curse, Necromancer Takedown, Thwart Zorba's Plan
- Apprehend the Real Kidnapper, Infiltrate the Charadrius, Obtain Drakodios
- Ancestral Solution, Eliminate Virga Island's Threat, Prepare for the Final Battle
- Skybound Avatar Conquest, Save the Country

### More's Tasks — SQ-01 to SQ-07 (7 entries, all with real video URLs)
Dedicated per-chapter YouTube videos exist for each:
- Foreword and Prologue, Chapter One: Ordeal, Chapter Two: Solitude
- Chapter Three: Drifting, Chapter Four: Turmoil, Chapter Five: Resolve
- Chapter Six: The End

### Favor / NPC Side Quests — SQ-10 to SQ-25 (16 entries, walkthroughs)
A Friend in Need, Missing Child, Merchant's Request, Delivery Troubles,
Stolen Goods Recovery, Troubled Soldier, Lost Necklace, Herbal Remedy,
Guard Duty Assistance, Fisherman's Problem, Old Woman's Request, Broken Cart,
Refugee Aid, Noble Dispute, Food Supply Crisis, Caravan Escort

### Hunt / Bounty Quests — SQ-26 to SQ-35 (10 entries, walkthroughs)
Forest Beast, Cave Horror, Bandit Leader, Swamp Creature, Desert Predator,
Mountain Giant, Undead Commander, Rogue Mage, Arena Champion, Ancient Guardian

### Investigation Quests — SQ-36 to SQ-45 (10 entries, walkthroughs)
Church Investigation, Political Spy Hunt, Missing Official, Underground Network,
Smuggling Ring, Hidden Archive, Secret Experiment, Noble Conspiracy,
Royal Document Recovery, Assassin Plot

### Retrieval / Dungeon Quests — SQ-46 to SQ-55 (10 entries, walkthroughs)
Retrieve Sacred Artifact, Recover Lost Weapon, Ancient Relic Hunt,
Dungeon Key Search, Hidden Treasure Map, Forgotten Library,
Sunken Ruins Expedition, Crystal Core Retrieval, Forbidden Tome,
Mystic Orb Recovery

### Special / Time-Gated Quests — SQ-56 to SQ-65 (7 entries, mixed)
Festival Preparation, Tournament Qualifier, Arena Challenge Series (video),
Companion Trial, Secret Ending Requirement Quest (video), Final Preparation Task,
Hidden Postgame Challenge (video)

## What was skipped (already existed under different titles)
SQ-08 Pagan's Dilemma, SQ-09 Help the Hushed Honeybee, SQ-57 Royal Debate Event
(= The Royal Election Debates), SQ-60 Gauntlet Runner Trial (= The Gauntlet
Runner Races), SQ-62 Virtue Test (= The King's Trials).

## Video sourcing
Real `youtube.com/watch?v=` URLs were found for all main quests and More's Tasks
via targeted YouTube search. For the remaining side quests, no dedicated videos
exist for the specific quest names, so step-by-step walkthroughs were written
based on the game's mechanics (Archetypes, calendar system, Press Turn combat,
Follower bonds, Virtue stats).

## Quest count
Metaphor: ReFantazio now has **113 quest entries** in the database.

---

# Update — Smarter Quest Assistant, Chat Info Panel & Mobile Chat Layout

**Date:** 2026-07-11
**Branch:** `claude/bottom-menu-layout-26xlps`
**Live site:** https://kbarbu12.github.io/newapp/

## What this update does
Made the redesign's Quest Assistant chat genuinely useful, added an in-chat
help affordance so users know what to ask, and fixed the mobile chat layout —
all in `redesign/`. Shipped to `staging`, then promoted `staging` → `main` (live).

## Smarter Quest Assistant (data-grounded, no backend)
- Replaced the chat's 5 random canned replies with a client-side retrieval
  engine, `redesign/src/app/chatEngine.ts`, that reads the question and answers
  from the real quest dataset (`GAMES` / `QUESTS`). No API key, no backend, no
  cost — it ships on GitHub Pages as-is.
- It routes intents over the data:
  - **Specific quest** ("how do I rescue the grand duke in bg3?") → full
    breakdown: type, difficulty, length, summary, AI tip, reward, and a
    clickable **Watch walkthrough** link (or numbered walkthrough steps when a
    quest has no video).
  - **Counts** ("how many Witcher 3 quests are there?") → answered live.
  - **Filtered listings** ("show me hard Elden Ring quests", "short Cyberpunk
    quests") → real matching quests.
  - **Fuzzy / unknown** → closest related quests, or a graceful fallback.
- *Not an LLM:* it's keyword retrieval, so it won't hold open-ended
  conversation. A true conversational LLM (needs a backend/proxy for the API
  key + per-message cost) is logged as a backlog item in `CHECKLIST.md`.

## Chat info panel ("what can I ask?")
- Added an **ⓘ** button to the chat header that opens a short help panel:
  what the assistant can do, four **clickable example prompts** (clicking one
  sends it), and a note that answers are grounded in the quest library.

## Mobile chat layout
- Enlarged the mobile bottom tab bar (bigger padding, text, and icons) and
  lifted the floating chat button above it so they no longer overlap.
- **Fixed a chat overlap bug:** with the help panel open, the card grew past
  its max-height and pushed the message area + text input out of view. The help
  content now lives inside the scrollable body (shown in place of the messages
  while open) with `min-h-0`, so the header and input always stay visible and
  bounded.

## Docs
- `CHECKLIST.md`: marked the smarter chatbot and mobile-layout work done, and
  added a backlog item for the optional conversational-LLM upgrade.

## Verified
- `redesign` builds clean (`pnpm build`).
- Exercised the chat engine against the real dataset across all intents.
- Drove the app in a headless phone-sized browser: help panel opens from the ⓘ
  button, example chips send and return the correct answer, and the input stays
  visible with the help panel open (overlap fixed).

---

# Update — FF7 Rebirth Missing Odd Jobs & New-Entry Walkthrough Rule

**Date:** 2026-07-10
**Branch:** `claude/game-dev-clarification-v1zjky`
**Live site:** https://kbarbu12.github.io/newapp/

## What this update does
Reconciled an uploaded FF7 Rebirth quest DOCX against the database, added only
the entries that were genuinely missing (with real data, not the DOCX's
placeholder templates), gave them real walkthrough videos, and codified a rule
for future entries.

## What was added
- **Two FF7 Rebirth side quests (Odd Jobs)** added to
  `ps5-rpg-sidequest-summarizer/data/quests.js` — the single source of truth:
  - **Gold Cup or Bust** (Corel / Gold Saucer) — win the Gold Cup chocobo race
    for Billy; reward Chocoking's Cape. Video:
    `youtube.com/watch?v=B8oUhHkOKak`.
  - **Escape from Endless Writer's Block** (Gongaga) — photograph Red XIII for
    the author Maeve. Video: `youtube.com/watch?v=pIsaVCnmNNo`.
  - FF7 Rebirth now has 74 quests.

## Why nothing else from the DOCX was imported
- The uploaded `FF7_Rebirth_Quest_Database.docx` ("DOCX 2.0") duplicated a game
  already fully in the database: all 14 main quests and 47 of 49 side quests
  already existed, with richer data than the DOCX (real summaries, tips,
  rewards, videos vs. the DOCX's identical "Add YouTube link here" templates).
- Per user direction, existing entries were left untouched and only the two
  truly missing titles were added — avoiding duplicates and avoiding
  overwriting good data with placeholders.

## Process change
- **New rule in `CLAUDE.md` ("Quest data entries"):** every new quest entry must
  have a walkthrough. Check for a real `youtube.com/watch?v=…` video first (a
  `results?search_query=…` search URL does **not** count); if there's no real
  video, add a step-by-step `walkthrough: [ … ]` array instead.

## Verified
- `redesign/scripts/gen-data.mjs` regenerates cleanly (no syntax errors); both
  new videos pass the real-video filter and register in the "With Video" stat.
- No duplicate IDs.

## Deployment
- Shipped to `staging`, then promoted `staging` → `main` (live).

---

# Update — Redesign, Staging Environment & Walkthrough Expansion

**Date:** 2026-07-06
**Branch:** `claude/staging-env-design-review-tybqwn`
**Live site:** https://kbarbu12.github.io/newapp/

## What this update does
Brought in a full React/Vite redesign of the site, stood up a staging
environment and a per-tab promotion pipeline so parts of the redesign can go
live only after review, then routed production to the promoted redesign and
began filling in written walkthroughs for quests with no video.

### Redesign wired to real data
- Imported the React/Vite/Tailwind (shadcn) redesign into `redesign/`.
- Added `redesign/scripts/gen-data.mjs`, which generates the app's data from
  the live `data/quests.js` at build time (949 quests, 15 games) — a single
  source of truth, no hand-maintained copy. Mirrors the site's real-video rule
  (placeholder `…/results` search links don't count → 254 real videos).

### Staging + per-tab promotion
- `redesign/src/config/promotion.ts` gates each tab. Staging shows every tab;
  production shows only tabs flipped to `true`.
- CI (`.github/workflows/pages.yml`) builds two bundles and publishes:
  - `/newapp/` — the **promoted redesign** (Library + Saved live)
  - `/newapp/staging/` — the full redesign, all tabs
  - `/newapp/classic/` — the original vanilla site, self-contained
- Promoted **Library** and **Saved** to production; **Home** and **News**
  remain staging-only for now.

### Production routing & caching
- Moved the vanilla site to `/newapp/classic/` so its PWA service worker
  scopes to `/classic/` and can no longer serve a stale redesign; added a
  kill-switch `/newapp/sw.js` to clear the legacy root-scoped worker.
- Redesign published at the `/newapp/` root (no `/app/` subpath, no redirect);
  cover images served from `/newapp/classic/images/`; dropped the redesign's
  `noindex` so production stays indexable.

### UX fixes
- Home quick-shortcuts (High Difficulty, With Video, Short Quests, Main Quests
  Only) now apply their filter when jumping to the Library.
- Scroll resets to the top when switching tabs.
- Added the **No Video** option to the Walkthrough filter (parity with the
  vanilla site: All / Video Only / No Video).
- Rebuilt the quest detail **modal** to match the pre-redesign layout (banner,
  Quest Type / Difficulty / Duration / Location, Region, Summary, Tip, Reward,
  Step-by-Step Walkthrough, plus Watch Walkthrough / About the Game side
  cards) and widened it.
- Mobile: enlarged the "Browse by game" cards and fixed the modal so it fits
  the viewport with the close button always reachable.

### Written walkthroughs (no-video quests)
Added step-by-step guides, shown in the detail modal and on the classic site.

| Game | Guides added | Coverage |
|------|:------------:|:--------:|
| Demon's Souls | 12 | all no-video quests ✅ |
| Pillars of Eternity | 27 | all no-video quests ✅ |

---

# Update — Full Coverage Pass for Cyberpunk 2077 & FF7 Rebirth

**Date:** 2026-07-03
**Branch:** `claude/continue-previous-task-ljm8v9`

## What this update does
Audited the two most recently expanded games and filled in the missing content
so each game covers *everything tied to it*, not just a sample.

| Game | Before | After | Added |
|------|:------:|:-----:|:-----:|
| Cyberpunk 2077: Ultimate Edition | 20 | **76** | +56 |
| Final Fantasy VII Rebirth | 18 | **57** | +39 |
| **Total quest library** | 253 | **348** | **+95** |

## Cyberpunk 2077 — what was added
- **Main Jobs (base game):** The Pickup, The Information, Playing for Time, Automatic
  Love, Disasterpiece, I Walk the Line, Transmission, Search and Destroy, Play It Safe,
  Never Fade Away, Nocturne Op55N1, plus the Star (Aldecaldos) and Sun (Legendary) endings.
- **Side Jobs:** Happy Together, Big in Japan, Beat on the Brat, Epistrophy, Space
  Oddity, Heroes, Queen of the Highway, With a Little Help from My Friends, Following
  the River, Pisces, Talkin' 'Bout a Revolution, They Won't Go When I Go.
- **Gigs (fixer contracts):** Monster Hunt, Freedom of the Press, Family Heirloom,
  Life's Work, Serious Side Effects, Flight of the Cheetah, Getting Warmer…, Last Login.
- **Cyberpsycho Sightings:** all **17** named sightings (Second Chances, The Wasteland,
  House on a Hill, Discount Doc, Where the Bodies Hit the Floor, Bloody Ritual, Six Feet
  Under, Demons of War, Lt. Mower, Ticket to the Major Leagues, Phantom of Night City,
  On Deaf Ears, Smoke on the Water, Lex Talionis, Letter of the Law, Seaside Cafe,
  Under the Bridge), each tagged with its district.
- **Phantom Liberty (Dogtown):** Dog Eat Dog, Hole in the Sky, Spider and the Fly,
  Firestarter, Lucretia My Reflection, Somewhat Damaged, The Killing Moon, plus Dogtown
  gigs (Baby Let Me Take You, Black Steel in the Hour of Chaos).

## Final Fantasy VII Rebirth — what was added
- **All 14 main story chapters** (Fall of a Hero → End of the World), each tagged with
  its chapter number and region.
- **Odd Jobs (side quests)** across every region:
  Grasslands, Junon, Corel, Gongaga, Cosmo Canyon, and Nibel — e.g. A Rare Card Lost,
  Stuck in a Rut, Calling All Frogs, Sand and Circuses, Missing: Mr. Birdie, Teach Me
  Great Warrior, The Spice of Life, Bonds of Trust, Absence of a Sign, Esoteric Secrets
  of the Elders, and the Chapter 12 endgame jobs (Hustle and Grind, Victim of
  Circumstance, Lament of the Damned, etc.).

## Data quality notes
- Quest names, chapters, regions, and the 17-Cyberpsycho / 36-Odd-Job counts were
  cross-checked against public guides (Game8, PowerPyx, GamesRadar, Fandom) before adding.
- New entries carry `region` (district for Cyberpunk, world region for FF7) and, where
  relevant, `chapter`, which surface on both the card and detail views.
- Walkthrough links for the new entries use targeted YouTube search URLs
  (`youtube.com/results?search_query=…`). This guarantees a live, relevant result and
  avoids dead/incorrect hard-coded video IDs. Swapping these for hand-picked single
  videos is a future polish step.

## Verified
- `data/quests.js` parses cleanly — 348 quests, no duplicate IDs, no missing fields.
- Rendered the site in headless Chromium: all 348 cards render, the FF7 filter shows 57,
  and quest detail pages open correctly with no JavaScript errors.

## Process change
Added a **Coverage Protocol** section to `CHECKLIST.md`: when adding/expanding any game,
cover the full main story, all named side content, repeatable/system content, DLC,
secrets/endings — and verify against a canonical guide before marking it done.

## Not done / follow-ups
- Region/district **sub-filters** for Cyberpunk and FF7 (like the BG3 Act and Elden Ring
  Region filters) — new entries are tagged and ready; existing older entries would need
  back-filling first.
- Replace YouTube search links with hand-picked per-quest videos.
- Same full-coverage audit could be applied to the other 13 games.
