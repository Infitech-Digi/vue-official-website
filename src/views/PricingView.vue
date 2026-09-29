<script setup>
import { ref } from 'vue'
import { pricingCategories, managedPlans, pricingPolicy, pricingAddOns } from '../data/site'

const active = ref(pricingCategories[0].slug)
const category = () => pricingCategories.find(c => c.slug === active.value) || pricingCategories[0]
</script>

<template>
  <section class="page-hero pricing-hero">
    <div class="container narrow">
      <span class="eyebrow">Paket & Harga</span>
      <h1>Investasi digital yang lebih mudah dipahami sejak awal.</h1>
      <p>Pilih kategori layanan untuk melihat paket, cakupan, dan perbandingannya. Untuk Sistem Bisnis dan Custom Development, angka yang tampil adalah estimasi awal—quotation final dibuat setelah discovery.</p>
    </div>
  </section>

  <section class="section pricing-workspace">
    <div class="container">
      <div class="pricing-tabs" role="tablist" aria-label="Kategori harga">
        <button v-for="c in pricingCategories" :key="c.slug" :class="{active:active===c.slug}" @click="active=c.slug">{{c.name}}</button>
      </div>

      <div class="pricing-category-head">
        <div><span class="eyebrow">{{category().kicker}}</span><h2>{{category().name}}</h2></div>
        <p>{{category().intro}}</p>
      </div>

      <div class="package-grid" :class="{'package-grid-two': category().packages.length === 2}">
        <article v-for="p in category().packages" :key="p.name" class="package-card" :class="{recommended:p.recommended}">
          <span v-if="p.recommended" class="recommended-label">Paling Direkomendasikan</span>
          <h3>{{p.name}}</h3>
          <div v-if="p.regularPrice" class="regular-price">Normal {{p.regularPrice}}</div>
          <strong class="package-price">{{p.price}}</strong>
          <div v-if="p.priceNote" class="price-note">{{p.priceNote}}</div>
          <p class="package-audience">{{p.audience}}</p>
          <ul><li v-for="f in p.features" :key="f">✓ <span>{{f}}</span></li></ul>
          <RouterLink :to="`/kontak?layanan=${category().slug}&paket=${p.name}`" class="btn" :class="{'btn-secondary':!p.recommended}">{{ category().priceMode === 'estimate' ? 'Konsultasikan Scope' : 'Konsultasikan Paket' }}</RouterLink>
        </article>
      </div>

      <p v-if="category().note" class="pricing-note">{{category().note}}</p>

      <div class="comparison-wrap">
        <div class="comparison-head"><div><span class="eyebrow">Perbandingan Detail</span><h3>Bandingkan {{category().name}}</h3></div><p>{{ category().priceMode === 'estimate' ? 'Perbandingan ini menggambarkan level kompleksitas, bukan paket kaku.' : 'Lihat perbedaan cakupan utama sebelum menentukan paket.' }}</p></div>
        <div class="table-scroll">
          <table class="comparison-table">
            <thead><tr><th>Fitur / Cakupan</th><th v-for="p in category().packages" :key="p.name">{{p.name}}</th></tr></thead>
            <tbody>
              <tr v-for="row in category().compare" :key="row[0]">
                <td>{{row[0]}}</td>
                <td v-for="(value, index) in row.slice(1, category().packages.length + 1)" :key="index">{{value}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-soft">
    <div class="container">
      <div class="section-heading centered"><span class="eyebrow">Tahun Pertama</span><h2>Apa yang sudah termasuk pada paket website?</h2><p>Landing Page, Company Profile, dan Toko Online dirancang agar bisa langsung go-live tanpa Anda harus menyusun komponen teknis satu per satu.</p></div>
      <div class="pricing-policy-grid">
        <article><span class="policy-index">01</span><h3>Website Year One</h3><ul><li v-for="item in pricingPolicy.websiteYearOne" :key="item">✓ {{item}}</li></ul></article>
        <article><span class="policy-index">02</span><h3>Tahun Kedua & Renewal</h3><ul><li v-for="item in pricingPolicy.renewal" :key="item">✓ {{item}}</li></ul></article>
      </div>
      <div class="maintenance-boundary"><strong>Batas Technical Maintenance</strong><p>{{pricingPolicy.maintenanceBoundary}}</p></div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-heading centered"><span class="eyebrow">Website Care Tahun Kedua</span><h2>Managed Website Plan</h2><p>Mulai tahun kedua, pilih level technical care berdasarkan kebutuhan website. Domain renewal dan lisensi pihak ketiga ditagihkan terpisah agar biaya tetap transparan.</p></div>
      <div class="managed-grid">
        <article v-for="p in managedPlans" :key="p.name" class="managed-card" :class="{recommended:p.recommended}">
          <span v-if="p.recommended" class="recommended-label">Pilihan Utama</span><h3>{{p.name}}</h3><strong>{{p.price}}</strong><p>{{p.desc}}</p>
          <ul><li v-for="f in p.features" :key="f">✓ {{f}}</li></ul>
        </article>
      </div>
    </div>
  </section>

  <section class="section section-soft">
    <div class="container">
      <div class="section-heading"><span class="eyebrow">Add-on</span><h2>Tambahkan hanya ketika memang dibutuhkan.</h2><p>Fitur eksternal dan pekerjaan di luar scope utama tidak dipaksa masuk ke semua paket.</p></div>
      <div class="addon-grid">
        <article v-for="a in pricingAddOns" :key="a.name"><h3>{{a.name}}</h3><strong>{{a.price}}</strong><p>{{a.note}}</p></article>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container split">
      <div><span class="eyebrow">Transparansi Scope</span><h2>Apa yang dapat membuat biaya berubah?</h2><p>Harga paket adalah scope standar. Kami konfirmasi kebutuhan sebelum proyek dimulai agar tidak ada asumsi tersembunyi.</p></div>
      <div class="feature-list">
        <div><strong>Jumlah & kompleksitas halaman</strong><p>Struktur konten yang lebih besar membutuhkan design dan development tambahan.</p></div>
        <div><strong>Fitur & integrasi</strong><p>Payment gateway, API, booking, dashboard, role, dan logic khusus memengaruhi scope.</p></div>
        <div><strong>Data & content setup</strong><p>Volume produk, data awal, migrasi, atau konten dapat memengaruhi effort implementasi.</p></div>
        <div><strong>Custom requirement</strong><p>Kebutuhan di luar paket akan dibahas dan diestimasi terlebih dahulu sebelum dikerjakan.</p></div>
      </div>
    </div>
  </section>
</template>
