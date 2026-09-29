# Phase 2 — Service Detail Final Polish

Fase ini memoles seluruh halaman detail layanan agar berfungsi sebagai sales landing page yang lebih matang dan konsisten untuk target bisnis lokal Indonesia.

## Diterapkan ke 7 layanan

- Mulai Digital
- Landing Page
- Company Profile
- Toko Online
- Sistem Bisnis
- Custom Development
- Managed Website

## Perubahan utama

- Copy hero dan CTA dibuat lebih kontekstual per layanan.
- Ditambahkan value statement/promise per layanan.
- Pain point, outcome, target client, deliverables, dan batas scope diperjelas.
- Ditambahkan section "Pengalaman yang Dirancang" agar halaman tidak hanya berupa checklist fitur.
- Process sekarang menjelaskan tujuan setiap tahap, bukan hanya nama tahap.
- Timeline diberi ekspektasi dependency/materi dari client.
- Website service memiliki After Go-Live yang spesifik per layanan.
- Pricing copy dibuat lebih kontekstual dengan karakter layanan.
- Sistem Bisnis dan Custom Development menegaskan estimasi awal bukan quotation final.
- Managed Website menegaskan technical maintenance bukan update konten rutin.
- Demo tetap diberi label DEMO / CONCEPT dan tidak diklaim sebagai client project.
- Final CTA dibuat spesifik untuk setiap layanan.

## Catatan scope fase berikutnya

Demo yang tampil di halaman service masih memakai data/placeholder lama. Integrasi demo nyata, industry filtering, demo detail, screenshot, dan related demo masuk Phase 3–6 sesuai backlog.

## Validasi

- `node --check src/data/site.js`: lolos.
- `node --check src/main.js`: lolos.
- `npm install` pada environment sandbox timeout, sehingga production build belum dapat diverifikasi di environment ini.
