<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import DemoPreview from '../components/DemoPreview.vue'
import { demoCatalog, demoIndustries, demoServiceTypes, filterDemos, getDemoIndustry, getDemoServiceType, getDemoRoute, getFeaturedDemos } from '../data/demos'

const route = useRoute()
const router = useRouter()
const industry = ref(typeof route.query.industry === 'string' ? route.query.industry : '')
const service = ref(typeof route.query.service === 'string' ? route.query.service : '')
const featured = getFeaturedDemos(3)
const results = computed(() => filterDemos({ industry: industry.value || undefined, service: service.value || undefined }))
const label = (demo) => `${getDemoIndustry(demo.industry)?.name ?? demo.industry} · ${getDemoServiceType(demo.service)?.name ?? demo.service}`

watch([industry, service], () => {
  const query = {}
  if (industry.value) query.industry = industry.value
  if (service.value) query.service = service.value
  router.replace({ path:'/demo', query })
})
function clearFilters(){ industry.value=''; service.value='' }
</script>

<template>
  <section class="demo-hero">
    <div class="container demo-hero-grid">
      <div>
        <span class="eyebrow">Demo / Concept Library</span>
        <h1>Temukan arah website yang cocok untuk bisnis Anda.</h1>
        <p>Jelajahi konsep website untuk berbagai jenis bisnis. Setiap konsep dapat disesuaikan dengan brand, konten, fitur, dan kebutuhan bisnis Anda.</p>
        <div class="hero-actions"><a class="btn" href="#jelajahi-demo">Jelajahi Demo</a><RouterLink class="btn btn-secondary" to="/kontak">Konsultasikan Kebutuhan</RouterLink></div>
      </div>
      <aside class="demo-disclosure"><span>TRANSPARANSI</span><strong>Demo adalah arah desain, bukan project client.</strong><p>Item di halaman ini berstatus Concept/Demo kecuali secara eksplisit diberi label Client Project.</p></aside>
    </div>
  </section>

  <section v-if="featured.length" class="section demo-featured-section">
    <div class="container">
      <div class="section-heading between"><div><span class="eyebrow">Pilihan InfitechDigi</span><h2>Mulai dari konsep pilihan.</h2><p>Beberapa arah desain yang paling siap digunakan sebagai titik awal diskusi.</p></div><a class="text-link" href="#jelajahi-demo">Lihat semua konsep ↓</a></div>
      <div class="featured-demo-grid">
        <RouterLink v-for="demo in featured" :key="demo.id" :to="getDemoRoute(demo)" class="featured-demo-card">
          <DemoPreview :demo="demo" />
          <div class="demo-card-body"><span class="demo-meta">{{ label(demo) }}</span><h3>{{ demo.title }}</h3><p>{{ demo.description }}</p><strong>Lihat Detail →</strong></div>
        </RouterLink>
      </div>
    </div>
  </section>

  <section id="jelajahi-demo" class="section section-soft demo-explorer">
    <div class="container">
      <div class="section-heading"><span class="eyebrow">Industry Explorer</span><h2>Jelajahi berdasarkan bisnis dan jenis website.</h2><p>Pilih kombinasi yang paling dekat dengan kebutuhan Anda. Filter tersimpan di URL sehingga hasilnya dapat langsung dibagikan.</p></div>
      <div class="demo-filter-panel">
        <div class="filter-group"><span>INDUSTRI</span><div class="filter-chips"><button :class="{active:!industry}" @click="industry=''">Semua</button><button v-for="item in demoIndustries" :key="item.slug" :class="{active:industry===item.slug}" @click="industry=item.slug">{{item.name}}</button></div></div>
        <div class="filter-group"><span>JENIS WEBSITE</span><div class="filter-chips"><button :class="{active:!service}" @click="service=''">Semua</button><button v-for="item in demoServiceTypes" :key="item.slug" :class="{active:service===item.slug}" @click="service=item.slug">{{item.name}}</button></div></div>
      </div>
      <div class="demo-result-head"><p><strong>{{ results.length }}</strong> konsep ditemukan<span v-if="industry || service"> untuk filter yang dipilih</span>.</p><button v-if="industry || service" class="text-button" @click="clearFilters">Reset filter</button></div>
      <div v-if="results.length" class="demo-catalog-grid">
        <RouterLink v-for="demo in results" :key="demo.id" :to="getDemoRoute(demo)" class="demo-catalog-card">
          <DemoPreview :demo="demo" />
          <div class="demo-card-body"><span class="demo-meta">{{ label(demo) }}</span><h3>{{ demo.title }}</h3><p>{{ demo.description }}</p><strong>Lihat Detail →</strong></div>
        </RouterLink>
      </div>
      <div v-else class="demo-empty-state"><span>Belum ada konsep untuk kombinasi ini.</span><h3>Kebutuhan Anda tetap bisa kami rancang secara khusus.</h3><p>Demo bukan batas layanan InfitechDigi. Gunakan koleksi lain sebagai inspirasi atau ceritakan kebutuhan bisnis Anda.</p><div class="hero-actions"><button class="btn btn-secondary" @click="clearFilters">Lihat Semua Demo</button><RouterLink class="btn" to="/kontak">Konsultasikan Kebutuhan</RouterLink></div></div>
    </div>
  </section>

  <section class="section demo-faq-section"><div class="container demo-faq-grid"><div><span class="eyebrow">Tentang Demo</span><h2>Inspirasi awal, bukan template yang kaku.</h2></div><div class="faq-stack"><details open><summary>Apakah desain harus sama persis dengan demo?<span>+</span></summary><p>Tidak. Warna, identitas visual, struktur halaman, konten, fitur, dan CTA dapat disesuaikan dengan kebutuhan bisnis.</p></details><details><summary>Apakah semua demo adalah project client?<span>+</span></summary><p>Tidak. Konsep di katalog ini diberi status Demo/Concept. Project nyata ditampilkan terpisah pada Portfolio.</p></details><details><summary>Apakah bisa meminta kategori yang belum tersedia?<span>+</span></summary><p>Bisa. Katalog membantu menentukan arah visual, tetapi bukan batas industri atau jenis website yang dapat dikerjakan.</p></details></div></div></section>

  <section class="service-final-cta"><div class="container service-final-inner"><div><span class="eyebrow eyebrow-light">Sudah menemukan gaya yang cocok?</span><h2>Jadikan konsepnya milik bisnis Anda.</h2><p>Kami sesuaikan desain, konten, struktur, dan fiturnya agar relevan dengan bisnis Anda.</p></div><RouterLink class="btn btn-light" to="/kontak">Konsultasikan Kebutuhan</RouterLink></div></section>
</template>
