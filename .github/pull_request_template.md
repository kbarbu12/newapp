## What & why
<!-- One or two sentences: what this PR changes and the reason. -->

## Type of change
<!-- Check all that apply -->
- [ ] New game added
- [ ] New quests / quest data for an existing game
- [ ] Quest data fix (fields, walkthrough, video, difficulty, etc.)
- [ ] App / redesign code change
- [ ] Other:

## Quest data checklist
<!-- Delete this section if the PR touches no quest data. -->
- [ ] New quest IDs start at `maxId + 1` (verified against the file)
- [ ] Every new entry has a real `video` **or** a step-by-step `walkthrough`
- [ ] `summary`, `aiTip`, `location`, `difficulty`, `length`, `reward` filled in — no placeholders
- [ ] `difficulty` is one of `Low` / `Medium` / `High`; `length` is `short` / `medium` / `long`
- [ ] New game registered in `gameImages` (gradient, abbr, cover) and `subFilterConfig`
- [ ] `node scripts/audit.js` passes (exit 0)

## Verification
<!-- How you confirmed it works. -->
- [ ] `node --check` / build passes
- [ ] QA: rendered the affected game/quests in the app (not just the data)
- Notes:

## Deploy
- [ ] Targets `staging` (promote to `main` only on say-so — see DEPLOY.md)
