# Spec

## Goal

- Clarify how `/docs/[slug]` is entered in the current local site and how that compares to the upstream public site
- Identify whether the older local high-fidelity recreated community pages still exist in the current codebase
- Reduce the remaining visible drift on `/web/login` and improve its visual alignment with the upstream runtime page

## Non-Goals

- Reworking the `/home` route chain again
- Reintroducing the removed local community recreation pages into the runtime
- Replacing the community iframe strategy in this pass

## Acceptance

- The login page is visually closer to upstream in high-signal areas: top chrome alignment, card vertical rhythm, `更多` control sizing, form control sizing, and `创建团队` placement
- `npm run check` and `npm run build` pass after the login refinements
- Task notes capture the current `/docs/[slug]` entry path and the reason it is hard to discover upstream
- Task notes capture whether the old local recreation code still exists and at what layer

## Risks

- Upstream login is React/Tailwind-driven, so fidelity checks need to rely on runtime snapshots and computed geometry rather than matching class names
- The repo still contains historical untracked task directories; only task-relevant evidence should be touched
