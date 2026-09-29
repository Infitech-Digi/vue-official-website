# Production Optimization Pass

Implemented:
- Service Detail uses Demo Master and real concept covers/routes.
- Contact converted to lead qualification + WhatsApp message flow.
- Portfolio separates Selected Experience, Client Projects, and Demo/Concept.
- About expanded into trust/capability page.
- Homepage compressed by removing duplicated Journey, Inclusion, and Process sections.
- Navigation upgraded with solution/service discovery dropdowns.
- Route lazy loading (homepage eager), route metadata, canonical, OG basics, robots/noindex rules.
- Insight remains available but removed from primary navigation and marked noindex until real articles exist.
- Analytics event layer (`dataLayer` + custom event) added for page views and lead submission; ready for analytics provider wiring.
- 404 route and defensive fallback added.
- robots.txt and sitemap.xml added.
- Accessibility improvements: focus-visible and reduced-motion handling.

Still requires real-world production inputs:
- Replace temporary seed `liveDemoUrl` values with actual deployed demo URLs.
- Add verified Client Project case studies when publishable.
- Add real Insight articles before indexing/adding navigation.
- Connect preferred analytics provider/tag ID if required.
- Final hosting headers, CSP, compression, cache policy, domain/SSL and cross-browser QA depend on deployment environment.

## Solution deep-link fix
- Navbar Solusi items now use `/solusi?need=<id>` instead of hash-only links.
- `SolutionsView` reads `route.query.need` and activates the matching business need.
- Invalid/missing `need` falls back to `mulai-digital`.
- Selecting a need inside the page updates the URL, so links are shareable and browser navigation stays synchronized.
