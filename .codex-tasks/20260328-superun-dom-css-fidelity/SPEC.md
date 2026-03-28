# Spec

## Goal

Use scraped upstream DOM and CSS assets as the source of truth to realign the local public-site implementation with the current `www.superun.com` behavior for:

- `/home`
- `/web/login`
- `/templates`
- `/templates/[slug]`
- `/web/community-view/[slug]`

## Non-Goals

- Logged-in builder flows
- Real backend auth/session creation
- Full-content parity for every template beyond the current visible fidelity scope

## Acceptance

- Raw upstream HTML/CSS evidence is captured under `raw/`
- Local route structure matches the upstream entry chain for template cards
- `community` no longer routes users through a broken local flow that diverges from upstream intent
- `npm run check` passes
- `npm run build` passes
- Playwright comparison on key pages shows local output is basically aligned with upstream structure and behavior

## Risks

- Upstream home content is dynamic and may drift during capture
- Upstream community shell currently surfaces missing-session states, so parity must preserve current behavior without implying backend support
- The repo currently has prior uncommitted fidelity changes; edits must work with them rather than revert them
