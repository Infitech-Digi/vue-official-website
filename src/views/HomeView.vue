<script setup>
import { computed, ref } from 'vue'
import HeroVisual from '../components/HeroVisual.vue'
import TrustedOrganizations from '../components/TrustedOrganizations.vue'
import SectionTitle from '../components/SectionTitle.vue'
import CtaBand from '../components/CtaBand.vue'
import { problems, services, pricing, faqs } from '../data/site'
import { getFeaturedDemos, getPublicDemos, getDemoIndustry, getDemoServiceType, getDemoRoute } from '../data/demos'

const demoFilter = ref('featured')
const demoFilters = [
  { id: 'featured', label: 'Pilihan' },
  { id: 'travel', label: 'Travel' },
  { id: 'konstruksi', label: 'Konstruksi' },
  { id: 'kuliner', label: 'Kuliner' },
  { id: 'professional-service', label: 'Profesional' },
  { id: 'other', label: 'Lainnya' },
]
const homepageDemos = computed(() => {
  if (demoFilter.value === 'featured') return getFeaturedDemos(6)
  const demos = getPublicDemos().sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0))
  if (demoFilter.value === 'other') return demos.filter((demo) => ['retail', 'technology'].includes(demo.industry)).slice(0, 6)
  return demos.filter((demo) => demo.industry === demoFilter.value).slice(0, 6)
})
const demoMeta = (demo) => `${getDemoIndustry(demo.industry)?.name ?? demo.industry} · ${getDemoServiceType(demo.service)?.name ?? demo.service}`

</script>
<template>
  <section class="hero">
    <div class="container hero-grid">
      <div class="hero-copy">
        <span class="eyebrow">Digital Partner untuk Bisnis yang Ingin Bertumbuh</span>
        <h1>Bangun bisnis yang lebih siap <span>tumbuh secara digital.</span></h1>
        <p>InfitechDigi membantu bisnis lokal membangun website profesional, toko online, sistem bisnis, dan aplikasi khusus—dengan solusi yang mudah dipahami dan siap digunakan.</p>
        <div class="hero-actions"><RouterLink to="/kontak" class="btn">Konsultasi Gratis</RouterLink><RouterLink to="/demo" class="btn btn-secondary">Lihat Demo Website</RouterLink></div>
        <div class="hero-note">Website • Toko Online • Sistem Bisnis • Custom Development</div>
      </div>
      <HeroVisual />
    </div>
  </section>
  <TrustedOrganizations />

<section class="section"><div class="container"><SectionTitle eyebrow="Mulai dari kebutuhan bisnis" title="Tidak semua bisnis membutuhkan solusi yang sama" copy="Kami mulai dari masalah dan tujuan bisnis Anda, baru menentukan website atau sistem yang paling tepat." />
    <div class="problem-grid"><article v-for="item in problems" :key="item[0]" class="card problem-card"><div class="icon-badge">↗</div><h3>{{item[0]}}</h3><p>{{item[2]}}</p><span class="solution-label">Rekomendasi: {{item[1]}}</span></article></div>
  </div></section>

  <section class="section"><div class="container"><SectionTitle eyebrow="Layanan" title="Solusi digital yang bisa Anda pilih sesuai kebutuhan" copy="Bukan sekadar jasa pembuatan website. Kami membantu dari kehadiran digital hingga sistem yang mendukung operasional bisnis." />
    <div class="service-grid"><RouterLink v-for="s in services.slice(0,6)" :key="s.slug" :to="`/layanan/${s.slug}`" class="card service-card"><span>0{{services.indexOf(s)+1}}</span><h3>{{s.title}}</h3><p>{{s.desc}}</p><strong class="service-price">{{s.price}}</strong><b>Pelajari solusi →</b></RouterLink></div>
  </div></section>

  <section class="section section-dark"><div class="container split"><div><span class="eyebrow eyebrow-light">Kenapa InfitechDigi</span><h2>Teknologi seharusnya mempermudah bisnis, bukan menambah kebingungan.</h2><p>Kami menggabungkan pendekatan bisnis, desain, dan software development agar solusi yang dibuat tidak berhenti pada tampilan saja.</p></div><div class="feature-list"><div><strong>Solusi sesuai kebutuhan</strong><p>Kebutuhan bisnis dipahami lebih dulu sebelum menentukan teknologi.</p></div><div><strong>Mudah dipahami</strong><p>Komunikasi tanpa jargon teknis yang tidak diperlukan.</p></div><div><strong>Siap digunakan</strong><p>Setup domain, hosting, deployment, dan konfigurasi teknis dapat ditangani.</p></div><div><strong>Tetap terjaga</strong><p>Technical maintenance membantu website tetap berjalan setelah launch.</p></div><div><strong>Bisa berkembang</strong><p>Solusi dapat ditingkatkan ketika kebutuhan bisnis semakin kompleks.</p></div><div><strong>Fokus pada kebutuhan bisnis</strong><p>Flow, CTA, dan komunikasi dirancang mengikuti konteks, karakter pelanggan, dan tujuan bisnis.</p></div></div></div></section>

  <section class="section section-soft homepage-demo-section"><div class="container"><SectionTitle eyebrow="Demo website" title="Lihat seperti apa bisnis Anda bisa tampil" copy="Jelajahi konsep website pilihan InfitechDigi. Setiap konsep dapat disesuaikan dengan identitas, konten, dan kebutuhan bisnis Anda." />
    <div class="homepage-demo-disclosure"><span>Demo / Concept</span><p>Contoh di bawah adalah konsep desain untuk membantu Anda melihat arah website yang memungkinkan, bukan Client Project kecuali dinyatakan demikian.</p></div>
    <div class="homepage-demo-filters" aria-label="Filter demo berdasarkan industri">
      <button v-for="filter in demoFilters" :key="filter.id" type="button" :class="{ active: demoFilter === filter.id }" @click="demoFilter = filter.id">{{ filter.label }}</button>
    </div>
    <div class="homepage-demo-grid">
      <RouterLink v-for="demo in homepageDemos" :key="demo.slug" :to="getDemoRoute(demo)" class="homepage-demo-card">
        <div class="homepage-demo-cover">
          <img v-if="demo.coverImage" :src="demo.coverImage" :alt="`Preview konsep ${demo.title}`" loading="lazy" width="1200" height="750">
          <div v-else class="homepage-demo-cover-fallback"><span>{{ demo.title }}</span></div>
          <span class="homepage-demo-badge">Demo / Concept</span>
        </div>
        <div class="homepage-demo-body">
          <span class="demo-meta">{{ demoMeta(demo) }}</span>
          <h3>{{ demo.title }}</h3>
          <p>{{ demo.description }}</p>
          <strong>Lihat Detail →</strong>
        </div>
      </RouterLink>
    </div>
    <div v-if="homepageDemos.length === 0" class="homepage-demo-empty"><strong>Demo untuk kategori ini sedang disiapkan.</strong><p>Jelajahi katalog lengkap atau konsultasikan kebutuhan website Anda.</p></div>
    <div class="homepage-demo-footer"><div><strong>Belum menemukan kategori bisnis Anda?</strong><p>Lihat katalog lengkap atau ceritakan kebutuhan Anda agar kami dapat merekomendasikan arah yang sesuai.</p></div><div class="homepage-demo-actions"><RouterLink to="/demo" class="btn btn-secondary">Jelajahi Semua Demo</RouterLink><RouterLink to="/kontak" class="btn">Konsultasikan Kebutuhan</RouterLink></div></div>
  </div></section>

  <section class="section"><div class="container"><SectionTitle eyebrow="Paket & harga" title="Harga jelas. Scope juga harus jelas." copy="Lihat kisaran biaya dan apa saja yang sudah termasuk sebelum Anda menghubungi kami. Harga final tetap menyesuaikan kebutuhan dan scope proyek." />
    <div class="pricing-detail-grid"><article v-for="p in pricing" :key="p.name" class="price-detail-card" :class="{ featured:p.featured }"><div class="price-head"><span class="pill">{{p.badge}}</span><h3>{{p.name}}</h3><strong>{{p.price}}</strong><p>{{p.desc}}</p></div><ul><li v-for="f in p.features" :key="f">✓ {{f}}</li></ul><p class="price-note">{{p.note}}</p><RouterLink :to="`/layanan/${p.serviceSlug}`" class="btn" :class="{'btn-secondary':!p.featured}">Lihat Detail Layanan</RouterLink></article></div>
    <div class="pricing-more"><div><strong>Butuh membandingkan paket atau langsung mendiskusikan kebutuhan bisnis Anda?</strong><p>Lihat seluruh paket dan perbandingan di halaman harga, atau lanjutkan ke konsultasi gratis jika Anda sudah siap berdiskusi.</p></div><div class="pricing-more-actions"><RouterLink to="/harga" class="btn btn-secondary">Lihat Semua Paket & Harga</RouterLink><RouterLink to="/kontak" class="btn">Konsultasi Gratis</RouterLink></div></div>
  </div></section>

  <section class="section"><div class="container founder-card"><div><span class="eyebrow">Built from real development experience</span><h2>Bukan sekadar desain yang terlihat bagus.</h2><p>InfitechDigi dibangun dari pengalaman pengembangan website, aplikasi, sistem internal, integrasi, dan software untuk kebutuhan nyata. Setiap solusi dirancang agar dapat digunakan, dipelihara, dan dikembangkan.</p></div><div class="skill-cloud"><span>Web Development</span><span>Business System</span><span>UI/UX</span><span>Infrastructure</span><span>Integration</span><span>Automation</span></div></div></section>

  <section class="section section-soft"><div class="container"><SectionTitle eyebrow="FAQ" title="Hal yang sering ditanyakan sebelum mulai" />
    <div class="faq-grid"><details v-for="f in faqs" :key="f[0]"><summary>{{f[0]}}</summary><p>{{f[1]}}</p></details></div>
  </div></section>

  <CtaBand />
</template>
