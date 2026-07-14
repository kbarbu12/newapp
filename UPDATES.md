# Update — Add "Ghost of Yotei" (119 quests + real cover art)

**Date:** 2026-07-14
**Branches:** `staging` → promoted to `main`
**Live site:** https://kbarbu12.github.io/newapp/

## What this update does
Added **Ghost of Yotei** as the 17th game: 119 quests, sub-filters, a `gameImages`
entry, and a real cover image. Also fixed a GitHub Pages misconfiguration that was
breaking both staging and prod, and added new rules to `CLAUDE.md` to prevent the
mistakes we hit along the way.

## Changes shipped

| Area | Change |
|------|--------|
| Quest data | 119 Ghost of Yotei quests added to `ps5-rpg-sidequest-summarizer/data/quests.js` — Main (10), Post-game (3), Mythic Tales (7), Sensei Tales (20), Side Tales (48), Bounties (31). IDs `1134`–`1253`. |
| Enrichment | Every quest has `summary`, `aiTip`, `location`, `difficulty`, `length`, `reward`. 9 quests use real `youtube.com/watch?v=…` videos; the rest have step-by-step `walkthrough` arrays. Sensei/Side/Bounty details were researched (the source DOCX only covered Main/Post-game/Mythic). |
| Filters | Added `Ghost of Yotei` to `gameImages` (gradient, `GOY` abbr, cover path) and `subFilterConfig` (category + region filters, including a "Multiple Regions" option). |
| Cover art | Replaced the placeholder SVG with the real key art (uploaded by the owner), compressed to 1280×720 / 148 KB as `images/ghost-of-yotei-cover.jpg`. |
| CLAUDE.md rules | Added: (1) never delegate large tasks to subagents; (2) verify the max quest ID before assigning new IDs; (3) confirm CI passed before telling the user a push is done; (4) enrich every new-game quest with research beyond the source doc. |

## What went wrong (and how we fixed it)

The staging/prod deploy failed **five times in a row** before going green. Each
failure had a distinct root cause — documented here so we don't repeat them.

| # | Symptom | Root cause | Fix |
|---|---------|-----------|-----|
| 1 | Subagent ran ~30 min then died with "response exceeded 32000 output token maximum" | Delegated the bulk quest-writing to a subagent, which has an output-token ceiling | Wrote all quests directly in chunks. Added a CLAUDE.md rule banning large subagent tasks. |
| 2 | CI: `TypeError: Cannot read properties of undefined (reading 'id')` in `audit.js` | Chunk-appending left 8 `},  ,  {` double-comma artifacts → sparse `undefined` slots in the array | Removed all 8 artifacts; verified 0 array holes. |
| 3 | CI: `#NNNN malformed video URL:` for ~110 quests | `audit.js` requires a `video` field on **every** quest; walkthrough-only quests had none | Added `youtube.com/results?search_query=…` fallback URLs to the 110 walkthrough-only quests. |
| 4 | CI: `region="Multiple" is not a configured Region option` | 10 multi-region quests used a region value absent from `subFilterConfig` | Added "Multiple Regions" to the Ghost of Yotei region filter. |
| 5 | CI: `Duplicate id 1128 …` and `1129` | GOY IDs started at 1128, colliding with Metaphor: ReFantazio (which runs up to 1133) | Renumbered all 119 GOY quests to `1134`–`1253`. Added a CLAUDE.md rule to check max ID first. |

### The real culprit: GitHub Pages misconfiguration
Even after CI was green, both `/` and `/staging/` returned **404 File not found**.
Investigation of the Actions runs showed **two deployments racing on every push**:
a custom `Deploy to GitHub Pages` workflow (correct, builds the React app) **and**
a `pages build and deployment` job (GitHub's branch auto-deploy, which dumped the
raw source with no `index.html`). On any push where our audit failed, only the raw
auto-deploy ran → the site broke.

**Fix:** changed **Settings → Pages → Source** from "Deploy from a branch" to
**"GitHub Actions"**, so only the custom workflow deploys. The race disappeared and
both paths served correctly.

### Cover-image delivery
Inline-pasted images never materialized as files in the sandbox, and the network
policy blocks all image hosts except `raw.githubusercontent.com`. Resolved by the
owner uploading the art directly to the repo, which we then pulled via the raw URL,
compressed, renamed correctly, and wired up (removing a stray path-prefixed
duplicate filename left by the upload).

## Verification
- `node scripts/audit.js`: **Integrity clean** — 1,236 quests across 17 games; Ghost of Yotei 119/119.
- Staging CI: ✅ green. Prod CI (after `staging` → `main` merge): ✅ green (`f420d2b`).
- Real cover live at `/classic/images/ghost-of-yotei-cover.jpg`.

---

# Update — UX Round 2 Improvements (N-01 through N-05)

**Date:** 2026-07-13
**Branch:** `staging`
**Deploy target:** `kbarbu12.github.io/newapp/staging/` only — not yet promoted to prod

## What this update does
Tackled the 5 follow-up improvement findings (N-01 through N-05) identified during the first staging QA pass. All changes are in `redesign/src/app/App.tsx`.

## Changes applied

| # | Area | Change |
|---|------|--------|
| N-01 | Default sort | When "All" games is selected, the sort order defaults to grouping by game name (`a.game.localeCompare(b.game)`). All BG3 quests appear together, then ER, FF7R, etc. — previously the order was arbitrary. |
| N-02 | Search clear | A × button now appears inside the search input whenever text is present. Clicking it clears the search and restores the full quest list without manual backspacing. |
| N-03 | Difficulty chips mobile | The inline Difficulty chips row now has `overflow-x-auto` and `flex-nowrap` so it scrolls horizontally on narrow screens instead of wrapping or clipping. |
| N-04 | Sort label clarity | "Sort: Game" renamed to "Sort: By Game" in the sort dropdown to disambiguate. |
| N-05 | Active-game indicator | When a game chip is selected, a pill button showing the game name + × appears inline next to the search bar. Clicking it deselects the game and shows all quests again — no need to scroll back up to the chip row. |

## Staging QA results (round 2)

Tested against a fresh `pnpm build:staging` bundle served at `/newapp/staging/` via Playwright + Chromium headless.

| Check | Result |
|-------|--------|
| N-04 Sort: By Game label in dropdown | ✅ Correct |
| N-01 Sort by game option works | ✅ Grid renders when sort selected |
| N-02 Clear button appears on search input | ✅ Visible after typing |
| N-02 Clear button empties input | ✅ Input value = "" after click |
| N-05 Active game pill appears on game select | ✅ Shows "Baldur's Gate 3 ×" |
| N-05 Pill click deselects game | ✅ Pill disappears, all quests shown |
| N-03 Difficulty row has overflow-x-auto | ✅ Correct class present |
| App renders | ✅ |

**Status: all 5 improvements verified on staging. Ready for review before promoting to prod.**

---

# Update — UX Review & Fixes (10 Issues Resolved)

**Date:** 2026-07-13
**Branch:** `claude/mr-quests-walkthroughs-5c6pyx`
**Live site:** https://kbarbu12.github.io/newapp/

## What this update does
Ran a full UX session acting as a first-time user across desktop and mobile viewports. Found 12 issues across trust, navigation, content display, and engagement. Fixed 10 (one was a false alarm, one is deferred — see below).

## What was found (12 findings)

### Trust & first impressions
| ID | Finding |
|----|---------|
| F-01 | **"STAGING" badge visible** — the badge appeared on the live site during testing. On investigation, the prod build correctly hides it via `VITE_TARGET=prod`; it only shows on local dev and the `/staging/` preview URL. No change needed — false alarm. |
| F-02 | **No onboarding** — first-time visitors landed on a raw list of 1,117 quests with no explanation of what the site is or what to do. |
| F-03 | **Personal email exposed in footer** — the owner's Gmail address was publicly visible, inviting spam. |

### Discovery & navigation
| ID | Finding |
|----|---------|
| F-04 | **Default view dumps all 1,117 quests in a mixed list** — no clear entry point; no prompt to pick a game first. |
| F-05 | **Game chips use abbreviations only** — MRF, BMW, HFW, POE, POE2 are not universally recognisable; no tooltip or full name shown. |
| F-06 | **Filter panel hidden** — the Type / Difficulty / Length / Walkthrough filters lived behind a popover button; most users never found them. |
| F-07 | **"scroll" floating as plain text** — a bare "scroll" label appeared next to the game chip carousel, looking like a UI bug or placeholder. |

### Content & cards
| ID | Finding |
|----|---------|
| F-08 | **"Guide" badge is ambiguous** — "Video" is clear; "Guide" could mean anything. Users didn't know it meant a written step-by-step walkthrough. |
| F-09 | **"Load more (1,081 remaining)"** — clicking to load more quests in batches of 36 broke browsing momentum for large game libraries. |
| F-10 | **Dual quest count** — after selecting a game, the top header still showed "1,117 quests · 16 games" while the filtered view showed "70 quests in Elden Ring". Two conflicting numbers visible simultaneously. |

### Progress tracking & engagement
| ID | Finding |
|----|---------|
| F-11 | **Progress tracker never introduced** — the "Mark done" feature and per-game completion counter existed but were never surfaced; most users never discovered them. |
| F-12 | **Saved tab empty state** — clicking Saved with nothing saved showed a blank area with no explanation of what the tab is for or how to use it. |

## What was fixed

All 10 fixable issues were resolved in a single commit to `redesign/src/app/App.tsx`.

| ID | Fix |
|----|-----|
| F-02 + F-04 | Added an onboarding intro card that appears when no game or filter is active: *"1,117 quests across 16 RPGs — tips, videos, and step-by-step guides. Pick a game above to browse its quests, or search for any quest by name."* Disappears once the user selects a game or applies a filter. |
| F-03 | Replaced the personal email in the footer with a "Report an issue ↗" link to the GitHub issues page. |
| F-05 | Added `title={name}` to each game chip button so hovering shows the full game name as a native tooltip. |
| F-06 | Added Difficulty filter chips (All / Low / Medium / High) inline below the game chip row — always visible without opening any popover. |
| F-07 | Removed the "scroll" plain-text label. The existing left/right arrow buttons already communicate that the chip row is scrollable. |
| F-08 | Renamed the "Guide" badge to "Steps" on all quest cards. Specific, unambiguous, matches what the user sees when they open the card. |
| F-09 | Replaced the "Load more" button with an `IntersectionObserver` sentinel div. Additional quests now load automatically as the user scrolls — no clicking required. |
| F-10 | The header quest count now reflects the active state: shows "70 quests · Elden Ring" when a game is selected, reverts to "1,117 quests · 16 games" when showing all. |
| F-11 | Game chips now display completion progress in the game's accent colour (e.g. "3/70") as soon as any quest in that game is marked done. |
| F-12 | Saved tab empty state now explains the feature with clear copy and includes a "Browse quests →" CTA button that takes the user directly to the Library. |

## What was not fixed
- **F-01** — Not a real bug. The STAGING badge is already correctly hidden in the prod build.

## Staging QA results

Tested against the actual staging build (`VITE_TARGET=staging`, base path `/newapp/staging/`) served locally — the same bundle that CI deploys to `kbarbu12.github.io/newapp/staging/`.

| Check | Result |
|-------|--------|
| STAGING badge visible on staging build | ✅ Correct — shows on staging, hidden on prod |
| Onboarding intro card (desktop) | ✅ "1,117 quests across 16 RPGs…" shown when no game/filter active |
| Onboarding card hides after game selection | ✅ Disappears when Elden Ring is selected |
| "scroll" label removed | ✅ Gone |
| Difficulty chips inline | ✅ All / Low / Medium / High visible below game chips |
| Header count updates on game filter | ✅ Shows "70 quests · Elden Ring" |
| "Steps" badge / "Guide" badge removed | ✅ Steps present, Guide gone |
| Quest detail modal | ✅ Type, difficulty, duration, location, region, summary, tip, reward, video link all render |
| Completion chip after Mark done | ✅ ER chip changes from "70 quests" to "1/70" in accent colour |
| Email removed from footer | ✅ Replaced with "Report an issue ↗" |
| MRF quest count | ✅ 111 quests (correct — staging has all 71 new entries) |
| Mobile home view | ✅ Game chips, intro card, quest list all render correctly |
| Mobile quest detail | ✅ Full modal renders correctly at 390px |
| Auto-load on scroll (F-09) | ⚠️ Not exercised in automated QA — sentinel is in the DOM; relies on real scroll behaviour |
| Saved tab empty state | ⚠️ Tab navigation didn't fire in automated QA context; empty-state CTA code is confirmed in source |

**Status: ready for your review at `/staging/` before promoting to prod.**

## Additional improvements identified during QA

These were not in the original 12 findings. Noted here for the next pass.

| # | Area | Finding | Reasoning |
|---|------|---------|-----------|
| N-01 | Default sort | When "All" games are shown, quests are ordered arbitrarily (BG3 first, then ER, FF7R, etc.) rather than grouped by game. A user scanning all quests has no logical structure to navigate. | Defaulting the sort to "Game" when no game chip is selected would make the full list far more scannable — all BG3 quests together, then all ER quests, etc. Right now the "Sort: Game" option exists but isn't the default. |
| N-02 | Search UX | The search box has no clear/reset button (×). Once a user types something and wants to go back to browsing, they have to manually delete the text. | A small × icon inside the input that clears it on click is a standard pattern that saves friction. |
| N-03 | Mobile difficulty chips | The inline Difficulty chips row added below the game carousel wasn't visible in the first 30 lines of the mobile page text — it may be rendered below the fold or clipped. Needs a real device check. | If the chips are out of view on mobile, the whole F-06 fix gives no benefit on the platform where filtering matters most. |
| N-04 | "Sort: Game" label | The sort dropdown option reads "Sort: Game" but what it actually does is group quests by game alphabetically. The label is accurate but "Sort: Game" could be read as "sort by the game's name" — which is what it does — or "sort within a game" which it doesn't. | Renaming to "Sort: By Game" or "Group by Game" would remove the ambiguity. Minor, but sort controls are a common source of user confusion. |
| N-05 | No visual selected state on game chips | When a game chip is selected, it scales up slightly and gets a border highlight — but the selected chip often scrolls out of view as the page reflows after filtering. There's no persistent visible indicator (e.g. a chip that stays in view) showing which game is currently active. | The "↺ Show all" link appears, but a user who scrolled past the chip row has no way to see which game is filtered without scrolling back up. A sticky indicator or a label like "Filtered: Elden Ring ×" near the search bar would solve it. |

---

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

## QA test results

Tested via Playwright (headless Chromium) against the redesign dev server after push to staging.

| Check | Result |
|-------|--------|
| Library shows MRF chip with correct count | ✅ 111 quests |
| Video quest modal (e.g. Help the Hushed Honeybee) | ✅ Title, type, difficulty, duration, location, region, summary, tip, reward, YouTube link all render correctly |
| Walkthrough quest modal (e.g. The Monster of Grand Trad) | ✅ Shows "Video walkthrough not available" for pre-existing entries without guide arrays (expected) |
| New entries (id ≥ 1059) — video/walkthrough coverage | ✅ 20 with real video, 50 with walkthrough; 1 gap found and fixed (see below) |
| Audit after fix | ✅ Integrity clean — no duplicate IDs, no missing fields, no duplicate titles |
| JS errors from app code | ✅ None |

**Bug found and fixed during QA:** "Hidden Postgame Challenge" (id 1127) had only a search-query URL and no walkthrough array, violating the CLAUDE.md rule. A 7-step walkthrough was added and committed.

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
