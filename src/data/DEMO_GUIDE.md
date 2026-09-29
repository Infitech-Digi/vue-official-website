# Demo Content Guide

Data Demo dikelola dari `src/data/demos.json`. Komponen Vue tidak perlu diedit ketika menambah Demo.

## Menambah Demo
1. Tambahkan satu object ke `demos.json`.
2. Gunakan `slug` unik, huruf kecil dan tanda hubung, misalnya `aceh-adventure`.
3. Pilih `industry` dan `service` dari `demo-taxonomies.json`.
4. Untuk menyembunyikan Demo yang belum siap, gunakan `"visibility": "draft"`.
5. Buat folder `public/demos/{slug}/`.
6. Masukkan aset menggunakan nama berikut bila tersedia:
   - `cover.webp`
   - `desktop-01.webp`, `desktop-02.webp`, ...
   - `mobile-01.webp`, `mobile-02.webp`, ...
7. Jalankan `npm run validate:demos`.

Aset tidak perlu didaftarkan satu per satu di JSON. Script akan membuat `src/data/demo-assets.generated.json` secara otomatis. Jika `cover.webp` tidak ada, `desktop-01` dipakai sebagai cover. Jika keduanya belum ada, UI memakai placeholder.

## Field utama
Wajib: `slug`, `title`, `industry`, `service`, `description`, `visibility`, `status`.

Direkomendasikan: `bestFor`, `features`, `pages`, `design`, `priority`, `featured`, `createdAt`, `updatedAt`.

Opsional: `liveDemoUrl`, `source`.

`source` hanya untuk catatan internal lokasi/versi source project dan tidak ditampilkan ke visitor.

## Visibility
- `draft`: tersimpan tetapi tidak tampil di website.
- `public`: tampil di website.
- `archived`: tidak tampil, tetapi data tetap disimpan.

## Priority
Angka lebih besar tampil lebih dahulu. `featured: true` menentukan kelayakan masuk Featured; `priority` menentukan urutannya.

## Validasi
`npm run validate:demos` membedakan:
- ERROR: data inti tidak valid dan command gagal.
- WARNING: aset/live URL belum lengkap tetapi project tetap boleh dilanjutkan.
