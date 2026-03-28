# Task Spec

## Goal

Reduce the remaining visible fidelity gap on `/home`, focusing on template-card spacing and card rendering details that still differ from the upstream public site.

## Scope

- Compare the archived upstream home DOM/CSS against the local home card markup and styles
- Tighten card-to-card spacing and the `Show More` section rhythm
- Improve card rendering for mobile-preview templates so they match the upstream phone-frame presentation more closely
- Validate with static checks and screenshot comparison

## Non-Goals

- Rebuild the upstream React card component system one-to-one
- Change routing, data order, or category filtering behavior
- Rewrite footer/docs behavior

## Acceptance

- Home card grid spacing and bottom CTA spacing match upstream more closely in the visible layout
- Mobile-preview cards no longer render as plain full-bleed screenshots; they use a phone-frame treatment similar to upstream
- `npm run check` and `npm run build` pass
- Progress notes capture the upstream/local card differences and final verification evidence

## Risks

- Card markup changes can unintentionally affect hover behavior and mobile layout
- Screenshot comparison can be noisy if viewport height or lazy-loaded images differ
