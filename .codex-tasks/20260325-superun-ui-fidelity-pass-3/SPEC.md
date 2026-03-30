# Task Spec

## Goal
Continue polishing the Superun public site with a third pass that more closely matches `https://www.superun.com/home`, with added focus on font size, font choice, login/register fidelity, and `community-view` page replication.

## Scope
- Re-audit the current public site against the target with emphasis on typography and non-home pages
- Implement a third, tighter UI fidelity pass across homepage, login/register, and `community-view` surfaces
- Re-run local checks and browser validation
- Deploy the accepted version to Cloudflare Workers and verify the live page

## Constraints
- Keep scope limited to visual fidelity, typography, and page replication; do not expand product scope
- Preserve existing routes and interactions unless a fidelity fix requires small static-UI adjustments
- Use the task artifacts in this directory as the source of truth for progress and recovery

## Validation
- `npm --prefix /Users/zsj/code/program/superun run check`
- `npm --prefix /Users/zsj/code/program/superun run build`
- Browser validation against local preview for `/home`, `/web/login`, and representative `/web/community-view/[slug]`
- `npx wrangler deployments status --json --name superun-public-site --cwd "/Users/zsj/code/program/superun" -c "/Users/zsj/code/program/superun/wrangler.jsonc"`
