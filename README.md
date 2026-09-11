# CANOD

A Canadian practical-technology publication built with the Next.js App Router, React, TypeScript and Tailwind/CSS. The production site is a static export hosted on GitHub Pages at https://canod.ca.

## Local Development

Use Node.js 22.13 or newer and npm.

```sh
npm ci
npx next dev --port 4318
```

The inherited Vite/Vinext development scripts remain in the repository for historical compatibility. Use Next.js for the GitHub Pages production path.

## Build and Test

```sh
npm run lint
npm test
```

`npm test` runs the production build and Node tests. To build without running tests:

```sh
npm run build:pages
```

`npm run build` is an alias for the same static build. Generated files are in `out/`, with trailing-slash routes and the existing `CNAME`. Preview that directory with a static HTTP server that serves directory `index.html` files. Next.js server features and API routes are not available on GitHub Pages.

Tests cover exported routes and metadata, content links, interactive components, commercial-link gating, reading estimates, the dock checker's 25,200 answer combinations and the safety checklist's 183,708 combinations.

## Code Map

- `app/`: routes, metadata, sitemap and global/page styles.
- `components/home/`: modular homepage and scroll-linked CANOD signal.
- `components/kinetic-hero.tsx` and `lib/canod-sculpture.ts`: existing lazy-loaded Three.js sculpture and accessible controls.
- `components/editorial-scene.tsx`: original lightweight SVG editorial scenes.
- `components/dock-checker.tsx`: reusable client-side form, guidance and checklist download.
- `lib/dock-checker.ts`: deterministic educational rules. No hardware detection or compatibility guarantee.
- `lib/dock-sources.ts` and `lib/dock-guide.tsx`: official references and the USB-C dock guide.
- `components/home/safety-section.tsx` and `components/safety-inspection.tsx`: lightweight inspection chapter; native radios work without JavaScript.
- `components/safety-checker.tsx` and `lib/safety-checker.ts`: local educational checklist, conditional questions, dependency checks, download and print.
- `lib/safety-sources.ts` and `lib/safety-guide.tsx`: dated primary sources and the Canadian charger guide. `app/safety.css` holds its chapter/tool styles and static/reduced-motion fallbacks.
- `lib/guides.tsx` and `lib/editorial.ts`: guide content, pillars and visitor intents.
- `lib/commercial-links.ts` and `components/affiliate-disclosure.tsx`: future commercial-link registry and gated disclosure/link components.
- `app/globals.css`: existing brand/font tokens. `home.css` contains the signal/motion foundation; `publication.css`, `tools.css` and `editorial.css` style the publication experience.
- `tests/`: Node tests against source and static output.

The original organizer and NAS guides, sourcing shortlist, partner information and contact-draft functionality remain available. Newsletter subscriptions and business-software coverage are explicitly planned, not presented as working services.

## Editorial and Commercial Rules

Use primary sources for technical claims and record the source-check date. Separate research-based guidance from verified hands-on testing. The checker asks what to verify; it must never claim a dock is compatible without the exact hardware evidence.

There are no approved tracking links in the registry. Pending entries render no commercial link or near-recommendation disclosure. Add a tracking URL only after approval, then explicitly mark the entry approved. Keep disclosure next to the relevant recommendation. Do not add UGREEN affiliate links. Do not claim affiliate-program membership merely because a revenue type exists in the code.

No backend, account, external API or personal-data collection is used by the checker. It computes locally and generates a text-file download. It does not store answers between visits.

The safety checklist does not inspect a product, authenticate marks, query recall data, certify safety or determine legal compliance. Positive answers are self-reported. Unknown power paths and missing ratings cannot silently become confirmed checks. Keep federal guidance distinct from provincial requirements and preserve these limits when editing rules or sources. Re-review sources and update the visible review date when making substantive changes.

## Deployment After Review

The existing workflow is **Deploy CANOD to GitHub Pages**, in `.github/workflows/deploy-pages.yml`.

After reviewing and committing the intended changes on `main`:

```sh
git push origin main
```

That push triggers installation, `npm run build:pages`, artifact upload from `out/` and deployment. Do not commit generated `out/` files.

To rerun the workflow for code already pushed to `main`:

```sh
gh workflow run deploy-pages.yml --repo kamxnet/canod-web2 --ref main
```

No DNS, domain, email or hosting changes are required. A local build alone does not publish the site.
