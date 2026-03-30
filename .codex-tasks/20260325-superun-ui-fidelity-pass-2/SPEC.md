# Task Spec

## Goal
Continue polishing the Superun public site so the homepage more closely matches `https://www.superun.com/home`, with a second pass focused on the remaining layout, spacing, hierarchy, and typography gaps.

## Scope
- Audit the current homepage against the target again after the first polish pass
- Implement a second, tighter UI fidelity pass in the public-site code
- Re-run local checks and browser validation
- Deploy the accepted version to Cloudflare Workers and verify the live page

## Constraints
- Keep scope limited to fidelity and typography polish, not feature expansion
- Preserve existing routes and interactions
- Use the task artifacts in this directory as the source of truth for progress and recovery

## Validation
- `npm --prefix /Users/zsj/code/program/superun run check`
- `npm --prefix /Users/zsj/code/program/superun run build`
- Browser validation against local preview
- `npx wrangler deployments status --json --name superun-public-site --cwd "/Users/zsj/code/program/superun" -c "/Users/zsj/code/program/superun/wrangler.jsonc"`
