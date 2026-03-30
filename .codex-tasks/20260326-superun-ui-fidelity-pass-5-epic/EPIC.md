# Epic Specification

## Goal

- Continue the Superun public-site fidelity work after pass 4 and aggressively close the remaining visual, interaction, asset, mobile, and i18n gaps against `https://www.superun.com`, with the goal of making the public pages feel much closer to a 1:1 frontend replica.

## Non-Goals

- Recreate backend product logic, data persistence, or authenticated AI builder behavior.
- Add production auth providers or server APIs.
- Preserve the previous synthetic placeholder experience when real public-page assets or target-like motion can be reproduced safely on the frontend.

## Constraints

- Must keep the site deployable to Cloudflare Workers.
- Must preserve same-site redirect hardening on `/web/login`.
- Must stay frontend-only and safe for a static public deployment.
- Must create explicit per-feature task coverage and execute against those task plans rather than ad-hoc edits.
- Must validate each child task before marking it done.

## Risk Assessment

- Exact target assets and animations may require fresh capture and extraction before implementation.
- Mobile behavior and hover/touch interactions can diverge between desktop and touch devices, so both need explicit validation.
- Exact preview internals on `/web/community-view/[slug]` may still require safe local reconstruction rather than remote embedding.

## Child Deliverables

- Pass-5 audit and evidence refresh
- Real brand asset and shared visual fidelity improvements
- Responsive and mobile adaptation
- i18n and language-switch fidelity
- Homepage motion fidelity
- Gallery thumbnail and hover/touch fidelity
- Login-page polish and exactness
- Community/detail-page internal fidelity
- Final validation, deploy, and documentation sync

## Dependency Notes

- The audit task establishes the pass-5 truth set and must complete before implementation subtasks proceed.
- Shared brand assets should land before page-level polish tasks that depend on them.
- Responsive work should precede page-level motion tuning where mobile behavior matters.
- Final validation depends on all implementation subtasks completing.
- `depends_on` uses `;` as delimiter for multiple IDs.

## Child Task Types

- `single-full`

## Done-When

- [ ] Every row in `SUBTASKS.csv` is `DONE`
- [ ] Mobile, brand, i18n, input motion, gallery thumbnails, login fidelity, and community fidelity subtasks are all validated
- [ ] `npm run check` passes
- [ ] `npm run build` passes
- [ ] A new diff/deviation artifact exists for pass 5
- [ ] The accepted pass-5 version is deployed and verified on Workers
- [ ] `llmdoc` reflects the changed public-page behavior and constraints
