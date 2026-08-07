# Reverting production

Every prod deploy is a `staging` → `main` merge (see `DEPLOY.md`), and each one
is named with a **semver tag** and a matching **GitHub Release**, created
automatically by `.github/workflows/release.yml`. Because every release is a
fixed point in history, any prod deploy can be found and rolled back later.

## Finding a version

```sh
git fetch --tags
git tag -l 'v*' --sort=-v:refname   # newest first
```

Or browse the repo's **Releases** page — each release links its merge commit and
carries that deploy's `CHANGELOG.md` notes.

## What the numbers mean

| Bump  | Meaning                                   | Signalled by (merge subject) |
| ----- | ----------------------------------------- | ---------------------------- |
| MAJOR | ground-up redesign / breaking overhaul    | `[major]`                    |
| MINOR | new game or feature                       | `[minor]`                    |
| PATCH | data fix, copy tweak, bug fix             | (default — no token)         |

## Rolling prod back

Stay on the staging-first flow — revert on `staging`, then promote:

```sh
# Undo a specific prod deploy (its merge commit)
git checkout staging
git revert -m 1 <merge-commit>     # -m 1 keeps the base branch's side
# then open a PR staging -> main to promote the revert
```

To go all the way back to a known-good version instead of undoing one merge,
compare against its tag and revert everything since:

```sh
git diff vX.Y.Z                    # what changed since that version
git checkout vX.Y.Z                # detached checkout to inspect the old tree
```

## Pre-redesign design

The design that was live before the redesign is everything **before `v2.0.0`**
(baseline `v1.0.0`), captured at the immutable commit
`21aee03695f7538d9871c2745e8d37d9bc2e8358`. `git checkout 21aee03` restores it at
any time.
