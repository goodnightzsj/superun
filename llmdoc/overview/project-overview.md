# Project Overview

This project rebuilds the public-facing Superun site as a Cloudflare Workers-native Astro application. Scope includes the homepage, login page, template preview flow, and SEO-style documentation surfaces. It intentionally excludes the authenticated product builder.

## Stack
- Astro static output for content-first page rendering
- Wrangler deployment to Cloudflare Workers using `wrangler.jsonc:1` plus a minimal `src/worker.ts:1` pass-through to the `ASSETS` binding
- TypeScript for data modeling
- Minimal client JavaScript for prompt, query, and preview toggles

## Delivery principles
- Preserve the observed public-site user flow
- Favor reusable content/data-driven sections over hardcoded pages
- Validate fidelity-critical changes in isolated Google Chrome against locally served `dist` before Workers deploy
- Keep deployment aligned with `dist` static output and Wrangler asset serving
