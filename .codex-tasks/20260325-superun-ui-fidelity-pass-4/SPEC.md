# Task Spec

## Goal
Start a new long-running fourth fidelity pass for the Superun public site by scraping the target site for DOM, CSS, font resources, typography sizes, and secondary-page structure, then use that evidence to drive a pixel-level replication of the home page, login page, and community/detail pages before validating differences and deploying the accepted result.

## Scope
- Capture and store target evidence for `/home`, `/web/login`, and representative community/detail pages from `https://www.superun.com`
- Produce a design audit covering the overall design system and per-page design direction, plus an implementation plan for the overall site and each target page
- Implement the fidelity updates in the local Astro site with emphasis on DOM structure, typography, spacing, and visual composition
- Compare the replica against the target, record remaining differences, iterate if needed, then deploy the accepted result to Cloudflare Workers

## Constraints
- Keep the site static and safe; do not add unsafe external redirects or behaviors that exceed the current public-site scope
- Use task artifacts in this directory as the source of truth for captures, audit notes, and validation output
