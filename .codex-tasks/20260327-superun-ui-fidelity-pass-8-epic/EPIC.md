# Pass 8 UI Fidelity Epic

## Goal
- Continue from pass 7 and close the next layer of fidelity gaps between the rebuilt public site and `https://www.superun.com`.
- Focus on removing remaining iframe-based community previews in favor of real recreated pages, aligning home gallery hover behavior with the target, restricting preview zoom motion to Android/mobile-style cards only, and continuing residual home/login/community polish where browser evidence still shows drift.

## Child Deliverables
1. Refresh pass-8 browser evidence and identify concrete remaining gaps.
2. Replace remaining iframe-based community previews with real recreated pages.
3. Add recreate CTA to home creation-item hover and align card hover chrome.
4. Restrict preview zoom motion to Android/mobile-style cards only and tune related interaction details.
5. Polish remaining home/login/community fidelity gaps surfaced by browser evidence.
6. Revalidate responsive and motion behavior after pass-8 changes.
7. Validate deploy and sync docs/truth artifacts.

## Constraints
- Keep existing route structure, locale behavior, login redirect hardening, and Workers deployment shape intact.
- Prefer extending existing Astro/data-driven template preview patterns over introducing a new runtime architecture.
- Use browser-backed evidence for hover, preview, and responsive acceptance before any deploy.
- No child task becomes `DONE` without explicit validation and truth-source updates.
