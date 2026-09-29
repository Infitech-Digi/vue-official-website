# InfitechDigi Vue — Normalized Baseline

Vue 3 + Vue Router + Vite untuk website InfitechDigi.

## Requirement

- Node.js 20+ (Node 24 LTS direkomendasikan)
- npm 10+

## Install bersih

Jika sebelumnya sudah pernah menjalankan project versi lama, lakukan clean install:

```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

Buka URL yang ditampilkan oleh Vite, biasanya `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## Catatan normalisasi

- Vite dipin ke 5.4.14 dan `@vitejs/plugin-vue` 5.2.1 agar tidak bergantung pada jalur native Rolldown dari versi `latest` yang sebelumnya bermasalah di macOS Apple Silicon.
- Design system hanya menggunakan brand InfitechDigi: navy, blue, bright blue, white, dan soft blue.
- CSS legacy purple/lavender telah dihapus, bukan ditimpa dengan override.
- Hero mengikuti komposisi website existing, tetapi menggunakan design tokens brand yang sama dengan seluruh website.
- Section "Dipercaya oleh Berbagai Organisasi" diletakkan langsung setelah hero.
- Logo navbar dan footer menggunakan aset logo InfitechDigi yang diberikan.
- SPA hosting memerlukan fallback semua route ke `index.html`.

## Phase 1 — Pricing Master

Pricing telah dinormalisasi. Lihat `PRICING_MASTER.md` untuk keputusan paket, harga tahun pertama, renewal, Managed Website, dan add-on. Sumber data produksi berada di `src/data/site.js`.
