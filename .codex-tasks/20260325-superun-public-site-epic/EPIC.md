# Epic Specification

## Goal

- Rebuild the public-facing Superun site as a high-fidelity, Cloudflare Workers-native project that covers the home page, login page, template preview flow, and SEO docs flow, and is ready to deploy with Wrangler.

## Non-Goals

- Recreate the authenticated AI builder workspace.
- Integrate real authentication providers or production APIs.
- Build a CMS or admin panel.

## Constraints

- Must deploy cleanly to Cloudflare Workers.
- Must use a stack well-suited for content-heavy, image-forward public pages with minimal client JavaScript.
- Must preserve the observed information architecture and interaction logic from the source site.
- Must include planning coverage for wireframes, PRD-like page logic, design specs, and task decomposition inside project artifacts rather than separate user-facing outputs.

## Risk Assessment

- Public pages are observable, but some downstream product flows are gated by login and must be reconstructed from public behavior and docs.
- Image and content fidelity may require local placeholders or reconstructed assets rather than exact originals.
- Deployment readiness depends on matching current Cloudflare Workers static asset conventions.

## Child Deliverables

- Foundation and architecture setup
- Public page implementation
- Docs and preview flow content
- Validation and Cloudflare deployment readiness

## Dependency Notes

- Page implementation depends on foundation setup.
- Docs and preview flow depend on shared layout and content model.
- Final verification depends on all implementation tasks completing.
- `depends_on` uses `;` as delimiter for multiple IDs.

## Child Task Types

- `single-full`
- `single-compact`
- `batch`

## Done-When

- [ ] Every row in `SUBTASKS.csv` is `DONE`
- [ ] The site builds successfully
- [ ] The Workers deployment config is present and valid for Wrangler-based deployment
- [ ] Home, login, preview, and docs pages are implemented and internally linked
- [ ] llmdoc contains concise architectural and delivery notes for future work
