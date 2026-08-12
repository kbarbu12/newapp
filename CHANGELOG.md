# Changelog

Prod (`main`) deploys, newest first. Each entry lists the shipped PR(s) and a
short summary of what changed. See `DEPLOY.md` for the staging → prod flow.

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
