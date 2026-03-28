# Task Specification

## Goal

- Unify the current project truth sources across runtime code, `llmdoc`, and `.codex-tasks`.
- Remove the inactive documentation data path so the running docs route has a single local source of truth.
- Record the current live Workers state so future recovery does not stop at the older pass-9 deploy record.

## Scope

- Consolidate docs runtime source to `src/data/site.ts`
- Remove inactive `astro:content` docs wiring that is not used by the current route implementation
- Update only the stale `llmdoc` sections that describe deploy evidence and docs data source
- Add a new `.codex-tasks` audit task and annotate the latest pass-9 task with the newer live version context

## Non-Goals

- No redesign or UI fidelity changes
- No change to public route behavior
- No migration of docs pages to a CMS or remote source

## Acceptance

- Only one active docs source remains in the codebase for `/docs/[slug]`
- `llmdoc` describes the current docs source and the current live Workers version accurately
- `.codex-tasks` contains a current state-unification record and no longer implies that `cbfb4aff-ab40-4390-a7a5-dc90855f5ad1` is the present live version
- `npm run check` and `npm run build` pass
- Key local build pages still match the current live Workers output
