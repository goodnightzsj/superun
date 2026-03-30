# Epic Specification

## Goal

- Continue after pass 5 and close the next layer of remaining fidelity gaps against `https://www.superun.com`, focusing on front-end visual rhythm, motion timing, mobile adaptation, and community inner-page consistency so the public site feels even closer to a 1:1 replica.

## Non-Goals

- Recreate backend product logic, persistence, or authenticated builder flows.
- Add production auth providers or server APIs.
- Replace safe static/local reconstructions with risky third-party integrations.

## Constraints

- Must keep the site deployable to Cloudflare Workers.
- Must preserve same-site redirect hardening on `/web/login`.
- Must remain frontend-only and safe for static deployment.
- Must create new pass-6 truth artifacts and validate each child task before marking it done.

## Risk Assessment

- Remaining gaps are likely smaller and more visual, so fresh evidence is required to avoid random churn.
- Community inner pages may need selective local reconstruction rather than blindly trusting remote iframe surfaces.
- Mobile behavior must be checked at 390px explicitly rather than inferred from desktop layouts.

## Child Deliverables

- Pass-6 audit and evidence refresh
- Home-page visual polish
- Login-page visual polish
- Community-view structural polish
- Responsive/mobile fine tuning
- Motion and interaction polish
- Final validation, deploy, and documentation sync

## Dependency Notes

- The audit task defines the pass-6 truth set and must complete before implementation subtasks proceed.
- Responsive and motion tuning may touch shared CSS and should land before final validation.
- Final validation depends on all implementation subtasks completing.
- `depends_on` uses `;` as delimiter for multiple IDs.

## Child Task Types

- `single-full`

## Done-When

- [ ] Every row in `SUBTASKS.csv` is `DONE`
- [ ] Pass-6 evidence artifact exists
- [ ] Remaining home, login, community, responsive, and motion gaps are implemented and validated
- [ ] `npm run check` passes
- [ ] `npm run build` passes
- [ ] Accepted pass-6 version is deployed and verified on Workers
- [ ] `llmdoc` reflects any changed public-page behavior or constraints
