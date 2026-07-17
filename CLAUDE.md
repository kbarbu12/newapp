# CLAUDE.md

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## Deployment

All changes deploy to **staging first, prod only on the user's say-so.** Work
lands on the `staging` branch (auto-deploys to `/staging/`); promote to the live
`/` site by merging `staging` → `main`. See `DEPLOY.md` for the full flow.

## Pull requests

**Every change ships as its own pull request, titled after the change.** No
matter how small (a new game, a data fix, a code tweak), open a dedicated PR
whose title names what changed — e.g. `Add Assassin's Creed Valhalla (142
quests)` or `Fix Valhalla difficulty values: Easy -> Low`. One logical change
per PR; don't batch unrelated changes together.

Fill in `.github/pull_request_template.md` (GitHub loads it automatically) and
complete its checklist honestly before requesting review. PRs target `staging`
(see Deployment above).

## Quest data entries

Quests live in `ps5-rpg-sidequest-summarizer/data/quests.js` (the single source
of truth; the redesign regenerates from it).

**Every new quest entry must have a walkthrough.** Check for a `video` first: a
"real" video is a specific `youtube.com/watch?v=…` (or playlist) link — a
`results?search_query=…` search URL does **not** count. If a new entry has no
real video, add a step-by-step `walkthrough: [ … ]` array instead (see existing
entries for the format).

**Before assigning IDs to new quests**, always check the current highest ID in the file first:
```js
node -e "const src=require('fs').readFileSync('ps5-rpg-sidequest-summarizer/data/quests.js','utf8'); eval(src); console.log(Math.max(...quests.map(q=>q.id)));"
```
Start new quest IDs at `maxId + 1`. Never hardcode a starting ID without verifying.

**When adding a new game**, always enrich every quest beyond what the source document provides:
- Search for a real YouTube walkthrough video (`youtube.com/watch?v=…`). If found, use `video`.
- If no real video exists, write a step-by-step `walkthrough: [ … ]` array from game knowledge.
- Fill in `summary`, `aiTip`, `location`, `difficulty`, `length`, and `reward` for every entry — never leave them blank or use placeholder text.
- Add the game to `gameImages` (gradient, abbr, cover path) and `subFilterConfig` (category/region filters).
- Source documents are a starting point only; supplement missing quests, fields, and details using research.

## Pre-notification CI Check

**Never tell the user a push is done until you have confirmed CI passed.**

After every `git push` to any branch:
1. Wait for the GitHub Actions run to complete — use `mcp__github__actions_list` to find the latest run for that branch, then poll until `status` is `completed`.
2. If `conclusion` is `failure`, fetch the logs with `mcp__github__get_job_logs` (failed_only: true), diagnose the error, fix it, and push again. Repeat until the run passes.
3. Only report success to the user once `conclusion` is `success`.

Never say "pushed" or "done" while CI is still running or has failed.

## Agent Usage

**Never delegate large tasks to subagents.** Subagents have output token limits and will fail silently mid-task on anything substantial (bulk data writing, large file edits, multi-file changes). Handle all major work directly. Only spawn agents for small, focused lookups or research that returns a short answer.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.
