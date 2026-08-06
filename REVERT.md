# Reverting the redesign

The `design-based-on-user-feedback` work is developed on the branch
`claude/design-based-on-user-feedback-stln63`. The design that was live
**before** this redesign is preserved so it can be restored at any time.

## Snapshot

The pre-redesign state is captured at this immutable commit:

```
21aee03695f7538d9871c2745e8d37d9bc2e8358
```

This is the tip of `main`/`staging` at the time the redesign branch was created,
so `origin/main` also holds the current design until the redesign is promoted.

## How to revert to the current (pre-redesign) design

The redesign lands via its own pull request into `staging` (then `staging` →
`main`, per `DEPLOY.md`). To undo it:

**If the redesign PR has not been merged yet** — just don't merge it, or close
it. `staging`/`main` still hold the current design.

**If the redesign has been merged and deployed** — revert it:

```sh
# Option A: revert the redesign merge commit (keeps history, safest for shared branches)
git checkout staging
git revert -m 1 <redesign-merge-commit>
# then open a PR staging -> main to promote the revert

# Option B: inspect / compare against the snapshot at any time
git diff 21aee03            # what the redesign changed
git checkout 21aee03        # detached checkout of the old design
```

That commit never moves, so the pre-redesign design is always one command away.
