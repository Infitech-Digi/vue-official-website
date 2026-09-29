# InfitechDigi Pricing Master — Phase 1

Dokumen ini menjadi referensi harga utama untuk homepage, `/harga`, dan halaman detail layanan.

## 1. Mulai Digital

| Paket | Harga | Fokus |
|---|---:|---|
| Starter | Rp990.000 | Fondasi digital dasar |
| Business | Rp1.900.000 | Fondasi digital + pencatatan operasional dasar |

Keputusan utama:
- Hanya **2 paket**.
- Spreadsheet tidak lagi diposisikan sebagai value/produk utama.
- Starter dan Business sama-sama mencakup komunikasi pelanggan, Google Business Profile, database pelanggan, dan konsultasi digital awal.
- Business menambahkan penjualan/kas dasar, dashboard ringkas, dan invoice digital.
- Training: 30 menit / 1 jam.
- Technical support: 14 / 30 hari.

## 2. Landing Page

| Paket | Harga |
|---|---:|
| Starter | Rp1.500.000 |
| Business | Rp2.750.000 |
| Premium | Rp4.000.000 |

Tahun pertama termasuk domain .com, hosting sesuai level, SSL, deployment, dan Basic Technical Care 12 bulan.

Hosting: 2 GB / 5 GB / 10 GB.

## 3. Company Profile

| Paket | Harga |
|---|---:|
| Basic | **Rp3.500.000 promo** — normal Rp4.000.000 |
| Business | Rp8.500.000 |
| Premium | Rp12.500.000 |

Harga marketing utama: **Mulai Rp3,5 juta**.

Hosting: 5 GB / 10 GB / 20 GB.

## 4. Toko Online

| Paket | Harga |
|---|---:|
| Starter | Rp8.000.000 |
| Business | Rp15.000.000 |
| Premium | Rp25.000.000 |

Keputusan utama:
- Starter menggunakan katalog + CTA order ke WhatsApp.
- Payment gateway **tidak wajib** di Starter.
- Payment gateway mulai relevan di Business sesuai provider dan kebutuhan.
- Tidak menggunakan batas "produk awal" sebagai value utama paket.

Hosting: 10 GB / 20 GB / 40 GB.

## 5. Sistem Bisnis

Bukan paket harga kaku. Nominal berfungsi sebagai **estimasi awal** sebelum discovery.

| Scope | Estimasi |
|---|---:|
| Starter | mulai Rp15.000.000 |
| Business | mulai Rp35.000.000 |
| Enterprise | Custom quotation |

Harga final bergantung pada modul, role, workflow, integrasi, data, dan deployment.

## 6. Custom Development

Bukan paket harga kaku. Final quotation dibuat setelah discovery.

| Scope | Estimasi |
|---|---:|
| Starter / MVP | mulai Rp20.000.000 |
| Business | mulai Rp50.000.000 |
| Enterprise | Custom quotation |

## 7. Managed Website Plan — Tahun Kedua

| Plan | Harga / tahun | Resource |
|---|---:|---|
| Basic | Rp790.000 | hosting hingga 5 GB |
| Plus | Rp1.290.000 | hosting hingga 10 GB |
| Pro | Rp1.990.000 | hosting hingga 20 GB |

Mencakup hosting, SSL/config teknis, backup, monitoring, maintenance teknis, dan support sesuai level.

**Tidak termasuk:** update konten rutin, desain materi baru, fitur baru, input data berkala, lisensi pihak ketiga.

Domain renewal dibayar terpisah mengikuti registrar/TLD agar biaya renewal transparan.

## 8. Business Email

Business Email Setup diposisikan sebagai **add-on**, bukan benefit default seluruh paket website.

Biaya bergantung pada provider dan jumlah akun. Lisensi Google Workspace/Zoho/provider lain dibayar terpisah.

## 9. Prinsip Single Source of Truth

Data harga produksi berada di `src/data/site.js`:
- `pricingCategories`
- `managedPlans`
- `pricingPolicy`
- `pricingAddOns`

Homepage, halaman harga, dan detail layanan harus membaca sumber data ini dan tidak memiliki angka harga hard-coded yang bertentangan.
