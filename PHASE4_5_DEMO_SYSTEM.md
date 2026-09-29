# Phase 4–5 — Demo Industry Explorer & Concept Detail

Implemented:
- `/demo` hero, transparency notice, featured concepts, two-dimensional filters, shareable query parameters, visual catalogue, empty state, FAQ and final CTA.
- Dynamic `/demo/:industry/:slug` detail pages.
- Related concepts, related service/pricing, customization section, desktop/mobile preview architecture and contextual consultation CTA.
- Listing/detail consume `src/data/demos.js` as the single source of truth.
- Contact page now accepts demo/service/industry context and includes a budget-range field.

Asset note:
The Demo Master currently has no real screenshot files or live demo URLs. The UI therefore renders deliberate concept-preview placeholders and clear "screenshot belum ditambahkan" messaging rather than fabricating client/demo assets. Add `coverImage`, `screenshots`, `mobileScreenshots`, and `liveDemoUrl` to each record when those assets are available.
