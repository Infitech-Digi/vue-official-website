# Demo Content Management — Implemented

Demo content sekarang dikelola dari JSON dan folder aset, tanpa mengubah komponen Vue.

- `src/data/demos.json`: master content.
- `src/data/demo-taxonomies.json`: industry/service/taxonomy.
- `src/data/demos.js`: loader + helper; UI tetap memakai API helper yang sama.
- `public/demos/{slug}/`: cover/desktop/mobile assets.
- `scripts/demo-assets.mjs`: auto-discovery aset dan manifest generator.
- `scripts/validate-demos.mjs`: ERROR/WARNING validator.
- `src/data/DEMO_GUIDE.md`: panduan tambah/edit demo.

Implemented: draft/public/archived, featured + priority, design tags, pages, dates, internal source reference, smarter related-demo, asset fallback, optional live URL, automatic asset discovery, validation, and npm lifecycle integration.

Intentionally not implemented: Admin/CMS and CLI demo generator.

## Seed demo lengkap

Per 28 September 2026, tujuh seed demo sudah memiliki `cover.webp`, `desktop-01.webp`, `desktop-02.webp`, dan `mobile-01.webp`. Preview ini adalah **concept preview** untuk mengisi katalog, bukan screenshot aktual dari website client. Seluruh seed sementara menggunakan `https://infitechdigi.com/` sebagai `liveDemoUrl` sesuai keputusan pengembangan; URL dapat diganti per demo dari `src/data/demos.json` ketika deployment demo masing-masing tersedia.
