# SPEC

## Goal
Bring the public Superun site implementation in `/Users/zsj/code/program/superun` noticeably closer to `https://www.superun.com/home` in UI fidelity, typography detail, spacing, hierarchy, and overall polish, while preserving the current Cloudflare Workers deployment path.

## Scope
- Audit target-vs-current visual gaps across the public site surfaces, with homepage fidelity as the primary focus.
- Refine typography, spacing, sizing, layout rhythm, visual hierarchy, and component polish in the existing Astro implementation.
- Validate the polished result locally and redeploy the accepted build to Cloudflare Workers.

## Non-goals
- Rebuilding the authenticated product builder.
- Adding backend integrations or changing the site information architecture beyond what is needed for visual fidelity.
- Large architecture rewrites unrelated to UI fidelity.

## Done conditions
- The homepage and linked public surfaces are visually closer to the target site in layout, density, type treatment, and component styling.
- `npm run check` and `npm run build` pass.
- Browser verification confirms the polished pages load and preserve the required interactions.
- The accepted version is deployed to Cloudflare Workers and the public URL loads.
