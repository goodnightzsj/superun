# Epic Specification

## Goal

- Audit the current local public-site build against the original Superun public site for `home`, `login`, and representative community preview pages.
- Produce and execute a fidelity plan that closes remaining gaps across structure, interaction, visual styling, responsive behavior, and runtime details.
- Sync the final baseline back into `llmdoc` and task records, then deploy the baseline to Workers.

## Scope

- Compare local preview output against the original site for:
  - `/home`
  - `/web/login`
  - representative community preview routes
- Record concrete mismatches in markup, copy, layout, motion, spacing, assets, responsive behavior, and browser interaction states
- Produce a prioritized remediation plan with page-specific and shared-system fixes
- Implement the approved fidelity changes, including the current shared community shell baseline and the live home top-40 card order
- Update `llmdoc` and `.codex-tasks` so recovery does not depend on chat history
- Deploy the final baseline and capture live evidence

## Non-Goals

- No authenticated builder work
- No backend/API integration changes

## Constraints

- Current truth source for runtime pages is the local code plus live original-site observation
- Audit must prefer current original-site behavior over older raw captures when they conflict
- Keep evidence under this epic so later implementation can recover without chat history

## Child Deliverables

- Home-page fidelity audit
- Login-page fidelity audit
- Community-page fidelity audit
- Unified remediation plan
- Shared-system and `home/login` implementation pass
- Shared-shell community rebaseline
- Record sync and final deployment evidence

## Done-When

- [ ] Every row in `SUBTASKS.csv` is `DONE`
- [ ] A concrete gap list exists for all target pages
- [ ] A prioritized implementation plan exists with shared fixes vs page-local fixes clearly separated
- [ ] Final runtime behavior is reflected in `llmdoc` and the epic recovery files
- [ ] A live Workers deployment version is captured after the final fidelity baseline ships
