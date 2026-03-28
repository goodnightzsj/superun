# Spec

## Goal

Restore the real upstream home-card interaction chain and close the remaining visible home spacing drift:
- `home` cards should open the iframe-based community preview flow directly, not the local `/templates/[slug]` detour
- local community preview pages should match the current runtime shell used by upstream home-card clicks
- `home` gallery spacing and controls should match the upstream runtime page, not the earlier static-HTML inference

## Non-Goals

- redesigning the login page beyond changes required by the corrected preview flow
- removing the standalone `/templates` routes if they are still useful as direct-access pages
- reproducing every internal iframe app detail; iframe source parity is sufficient

## Acceptance

- clicking a local `home` card opens a local `/web/community-view/<preview-slug>` page in a new tab
- the local community route uses the upstream preview slug derived from `visitUrl`, not the stale human-readable alias
- the local community page shows the detailed left panel plus `复刻创作`, device toggles, and iframe preview instead of the current missing-session shell
- `home` gallery card spacing and visible controls align with the upstream runtime page
- `npm run check` and `npm run build` pass
- Playwright confirms upstream and local route behavior for `home` card click and high-signal visual parity
- `llmdoc` is synced after implementation
- a focused git commit is created, pushed, and deployed to Cloudflare Workers

## Risks

- upstream home cards use runtime JS rather than static anchors, so route mapping must come from verified runtime/API data
- the repo is already dirty; only task-relevant files should be staged and committed
