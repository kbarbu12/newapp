# RPG Quest Guide — Launch & Improvement Checklist

> 📊 **Live progress, per-game coverage tracker, and roadmap now live in [`PROGRESS.md`](PROGRESS.md).**
> This file tracks launch/platform tasks; `PROGRESS.md` tracks quest-content coverage.
>
> **Status legend:** ✅ done · 🟡 done but not verified against a guide · 🔴 not started / sample only

## ✅ Done
- [x] Site live on GitHub Pages (https://kbarbu12.github.io/newapp/)
- [x] Rename site to "RPG Quest Guide"
- [x] SEO meta tags, Open Graph, Twitter cards, JSON-LD
- [x] sitemap.xml + robots.txt
- [x] Google Search Console verification + sitemap submitted
- [x] Favicon + social preview image
- [x] Walkthrough video links on all quests
- [x] Video copyright disclaimer (footer + per card)
- [x] Dynamic page title on game filter
- [x] Fix card banner images (no cropping)
- [x] Expand quest library to 199 quests (~15 per game)
- [x] Full coverage pass — Cyberpunk 2077 (20 → 76) and FF7 Rebirth (18 → 57)
- [x] Full coverage pass — Witcher 3 (15 → 49), God of War Ragnarök (14 → 48), Horizon FW (14 → 41)
- [x] Full coverage pass — Persona 5 Royal (14 → 37), Ghost of Tsushima (13 → 35), Hogwarts Legacy (14 → 42)
- [x] Library now at 516 quests across 15 games (8 games fully covered)
- [x] Cyberpunk 2077 deep-fill (76 → 148): remaining main jobs, side jobs, ~37 gigs, Phantom Liberty
- [x] Deep-fill all 8 covered games (Witcher 3 full main story, FF7 World Intel/minigames/summons, GoW favors, Horizon, P5R Confidants/Mementos, Ghost tales, Hogwarts class/side quests) — library now **717**
- [x] Deep-fill the last 4 games (Metaphor, Demon's Souls, Pillars of Eternity, Deadfire) — library now **786**; 12 of 15 games deep-filled
- [x] Deep-fill BG3, Elden Ring (+ full Shadow of the Erdtree DLC), and Black Myth: Wukong — **all 15 games now deep-filled; library at 844 quests**
- [x] Add "Shadow of the Erdtree (DLC)" option to the Elden Ring region sub-filter
- [x] Per-game sub-filters for 13 of 15 games (District/Region/Realm/Archstone) + back-filled region tags on older entries
- [x] Video audit: all 844 walkthrough links verified to capture their own quest (43 generic/shared videos replaced)
- [x] Smarter Quest Assistant chatbot — replaced the random canned replies with a client-side retrieval engine (`redesign/src/app/chatEngine.ts`) that answers from the real quest dataset: specific-quest breakdowns (summary, tip, reward, walkthrough, video link), live counts, and difficulty/length/game listings
- [x] Mobile layout: enlarged the bottom tab bar and lifted the chat widget above it so they no longer overlap

## 🚧 Quest Detail Pages (current focus)
- [x] **Phase 1 — Core detail page**: clickable cards → `#quest-42` hash URL → detail view, back button support, shareable links
- [ ] **Phase 2 — Sidebar extras**: related quests from same game, "Buy this game" buttons (placeholder links until affiliate signup)
- [ ] **Phase 3 — SEO polish**: per-quest page title + meta description, game grouping headers in "All games" view
- [ ] **Phase 4 — Static quest pages**: generate real static HTML pages per quest for full Google indexing (do once site gains traction)

## 📋 Backlog
- [ ] **Upgrade the Quest Assistant to a real conversational LLM (e.g. Claude API)** — the
      current assistant is client-side keyword retrieval over the quest data (grounded, no
      cost, no key), so it can't hold open-ended conversation or reason across quests. A true
      LLM would. Blocker: the API key can't live in a static GitHub Pages bundle (anyone could
      read it), so this needs a small backend/serverless proxy to hold the key and relay
      requests, plus per-message API cost. Scope this before building.
- [ ] **Match real YouTube walkthrough videos to the remaining 14 games** — replace the
      placeholder `results?search_query=` links with direct, quest-matched `watch?v=` links,
      as already done for all 62 God of War Ragnarök quests. ~695 search links remain across
      Cyberpunk 2077, Hogwarts Legacy, The Witcher 3, and the other games.
- [ ] **Auto-refresh on service-worker update** — add a `controllerchange` hook in
      `src/pwa.js` that reloads the page once a new service worker takes control, so a
      version bump reaches visitors without a manual double-refresh (guard with a
      `refreshing` flag to avoid reload loops).
- [ ] **Connect the feedback box** — the "Share your feedback" section is built and
      live (`src/feedback.js`, Web3Forms integration), but needs a free Web3Forms
      access key to actually deliver mail to k.barbu12@gmail.com. To finish:
      get a key at https://web3forms.com (enter k.barbu12@gmail.com), paste it into
      `ACCESS_KEY` in `src/feedback.js`, confirm the one-time verification email,
      then send a live test. Until then the form shows an "email us directly" fallback.
- [ ] Real cover images for Pillars of Eternity 1 & 2
- [ ] Bing Webmaster Tools setup
- [ ] Sign up for Amazon Associates / GOG affiliate program
- [ ] Swap placeholder buy-links for real affiliate links
- [ ] Apply for Google AdSense (needs traffic first)
- [ ] Quest completed tracker (localStorage)
- [ ] Add more games (Skyrim, Dark Souls, Dragon Age)

## 🧭 Coverage Protocol (apply to every game)
When adding or expanding a game, cover **everything tied to it**, not just a sample:
- [ ] Main story (all chapters / main jobs / acts)
- [ ] All named side quests / side jobs / odd jobs
- [ ] Repeatable/system content (gigs, cyberpsycho sightings, world intel, hunts, bounties)
- [ ] DLC / expansion content (e.g. Phantom Liberty, Shadow of the Erdtree)
- [ ] Secrets, legendary items, and endings
- [ ] Verify against a canonical guide (PowerPyx / Game8 / Fextralife) before marking done

**All 15 games are deep-filled ✅** — see `PROGRESS.md` for the full per-game tracker and optional polish items.

### 🔎 Accuracy audit (in progress)
Beyond deep-fill, a name-by-name accuracy audit against canonical guides is underway:
- [x] Pillars of Eternity, Pillars of Eternity II: Deadfire, Demon's Souls, Metaphor: ReFantazio
      — guide-audited (13 misattributed/fabricated quest names fixed; see `PROGRESS.md` §2).
- [~] Baldur's Gate 3 (in progress), Elden Ring, Black Myth: Wukong — remaining 🟡 games to audit
      title-by-title. **BG3:** companion quests corrected to official journal names; 2 misattributions
      fixed (Arabella/Voss, Minsc/High-Harper duplicate) and 5 more name-verified side quests added
      (now 63 of 100+). Remaining Act 1–3 side quests gated on guide-host egress.
- [x] **Automate the audit** — `scripts/audit.js` runs the integrity checks (IDs / required fields /
      duplicate titles / video-link health / sub-filter tag integrity) and a per-game count diff, so
      the ✅/🟡/🔴 status is generated. Wired to `npm test` + CI (`.github/workflows/audit.yml`,
      and it gates the Pages deploy).

## 📣 Marketing
- [ ] Post in game subreddits (r/Eldenring, r/witcher, r/GhostOfTsushima…)
- [ ] Share in game-specific Discord servers
- [ ] Twitter/X account for daily quest tips
- [ ] TikTok/YouTube Short showing the site
