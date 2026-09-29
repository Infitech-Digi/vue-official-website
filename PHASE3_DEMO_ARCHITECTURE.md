# Phase 3 — Demo Data Architecture

Status: implemented.

## Goal
Create one scalable source of truth for all InfitechDigi Demo/Concept records before redesigning `/demo` and building dynamic detail pages.

## Source of truth
`src/data/demos.js`

## Demo schema
Each demo has:
- `id` — globally unique stable identifier
- `slug` — client-facing concept URL slug
- `title` — meaningful concept name (not Style 01/02)
- `industry` — normalized industry slug
- `service` — related InfitechDigi service slug
- `style` — design direction
- `description`
- `bestFor[]`
- `features[]`
- `screenshots[]`
- `mobileScreenshots[]`
- `coverImage`
- `liveDemoUrl`
- `featured`
- `status` — currently `concept`

## Supporting taxonomies
- `demoIndustries`
- `demoServiceTypes`

## Helpers
- `getDemoIndustry()`
- `getDemoServiceType()`
- `getDemoById()`
- `getDemoByRoute()`
- `getFeaturedDemos()`
- `filterDemos()`
- `getRelatedDemos()`
- `getDemoRoute()`
- `getRelatedServiceRoute()`

## Safety / truthfulness
Concepts are explicitly marked `status: 'concept'`. Screenshot paths and live URLs remain empty until actual demo assets exist. No client identity, testimonial, metric, result, or live URL has been invented.

## Compatibility
The old `demos` export in `site.js` is now generated from `demoCatalog`, so the current Homepage and `/demo` keep working without maintaining a second hardcoded demo list.

## Ready for next phases
Phase 4 can build the `/demo` Industry Explorer directly from `demoCatalog`, filters, and taxonomies.
Phase 5 can add `/demo/:industry/:slug` using `getDemoByRoute()`.
Phase 6 can render Homepage featured demos using `getFeaturedDemos()`.
