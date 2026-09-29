<script setup>
import { computed, ref, watch } from 'vue'
import { trackEvent } from '../utils/analytics'
import { useRoute } from 'vue-router'
import DemoPreview from '../components/DemoPreview.vue'
import { getDemoByRoute, getDemoIndustry, getDemoServiceType, getRelatedDemos, getDemoRoute, getRelatedServiceRoute } from '../data/demos'
import { services } from '../data/site'
const route = useRoute()
const demo = computed(() => getDemoByRoute(route.params.industry, route.params.slug))
const industry = computed(() => demo.value ? getDemoIndustry(demo.value.industry) : null)
const serviceType = computed(() => demo.value ? getDemoServiceType(demo.value.service) : null)
const service = computed(() => demo.value ? services.find(s => s.slug === demo.value.service) : null)
const related = computed(() => getRelatedDemos(demo.value, 3))
const contactRoute = computed(() => demo.value ? { path:'/kontak', query:{ demo:demo.value.slug, industry:demo.value.industry, service:demo.value.service } } : '/kontak')
const previewRoute = computed(() => demo.value ? `${getDemoRoute(demo.value)}/preview` : '/demo')
const liveDevice = ref('desktop')
const liveLoading = ref(true)
const liveLoaded = ref(false)
function loadLive(){ liveLoaded.value=true; liveLoading.value=true; trackEvent('load_live_demo',{demo:demo.value?.slug,industry:demo.value?.industry,service:demo.value?.service}) }
const liveFrameClass = computed(() => `demo-inline-live-frame-${liveDevice.value}`)
watch(() => demo.value?.liveDemoUrl, () => { liveLoading.value = true; liveLoaded.value=false })
</script>
<template>
  <template v-if="demo">
    <section class="demo-detail-hero"><div class="container"><div class="demo-detail-copy"><span class="eyebrow">Demo / Concept</span><div class="demo-meta">{{industry?.name}} · {{serviceType?.name}}</div><h1>{{demo.title}}</h1><p>{{demo.description}}</p><div class="hero-actions"><RouterLink v-if="demo.liveDemoUrl" class="btn" :to="previewRoute">Lihat Live Demo</RouterLink><RouterLink class="btn" :class="{'btn-secondary':demo.liveDemoUrl}" :to="contactRoute">Buat Website Seperti Ini</RouterLink></div><p v-if="!demo.liveDemoUrl" class="fine-note">Live demo belum dipublikasikan. Preview konsep tetap dapat digunakan sebagai referensi diskusi.</p></div><DemoPreview :demo="demo" large /></div></section>

    <section class="section"><div class="container demo-detail-two"><div><span class="eyebrow">Tentang Konsep</span><h2>Arah desain yang punya tujuan.</h2><p>{{demo.description}}</p><div class="design-direction"><span>DESIGN DIRECTION</span><strong>{{demo.style}}</strong></div></div><div><span class="mini-label">COCOK UNTUK</span><div class="best-for-list"><span v-for="item in demo.bestFor" :key="item">{{item}}</span></div></div></div></section>

    <section class="section section-soft"><div class="container"><div class="section-heading"><span class="eyebrow">Struktur & Fitur</span><h2>Fondasi yang dapat dikembangkan.</h2><p>Elemen di bawah adalah arah awal. Struktur final mengikuti konten dan kebutuhan bisnis Anda.</p></div><div class="demo-feature-grid"><article v-for="(item,i) in demo.features" :key="item"><span>{{String(i+1).padStart(2,'0')}}</span><strong>{{item}}</strong></article></div><div v-if="demo.pages?.length" class="demo-page-structure"><span class="mini-label">STRUKTUR HALAMAN</span><div class="best-for-list"><span v-for="page in demo.pages" :key="page">{{page}}</span></div></div></div></section>

    <section class="section demo-inline-live-section"><div class="container"><div class="section-heading between"><div><span class="eyebrow">Live Preview</span><h2>Lihat website langsung dari halaman ini.</h2><p v-if="demo.liveDemoUrl">Website demo di bawah dimuat langsung dari sumber aslinya. Gunakan pilihan perangkat untuk melihat tampilannya dalam viewport berbeda.</p><p v-else>Live demo belum dipublikasikan. Preview gambar concept tetap tersedia sebagai referensi.</p></div><RouterLink v-if="demo.liveDemoUrl" class="text-link" :to="previewRoute">Buka Preview Penuh →</RouterLink></div>
      <div v-if="demo.liveDemoUrl" class="demo-inline-live-wrap">
        <div v-if="!liveLoaded" class="live-preview-gate"><img v-if="demo.coverImage" :src="demo.coverImage" :alt="`Preview ${demo.title}`"><div class="live-preview-gate-overlay"><button type="button" class="btn btn-light" @click="loadLive">▶ Muat Live Demo</button></div></div>
        <template v-else><div class="demo-inline-toolbar">
          <div class="demo-device-switch" aria-label="Ukuran preview">
            <button type="button" :class="{active:liveDevice==='desktop'}" @click="liveDevice='desktop'">Desktop</button>
            <button type="button" :class="{active:liveDevice==='tablet'}" @click="liveDevice='tablet'">Tablet</button>
            <button type="button" :class="{active:liveDevice==='mobile'}" @click="liveDevice='mobile'">Mobile</button>
          </div>
          <div class="demo-inline-toolbar-actions"><span>LIVE DEMO · {{demo.title}}</span><a :href="demo.liveDemoUrl" target="_blank" rel="noopener noreferrer">Buka Tab Baru ↗</a></div>
        </div>
        <div class="demo-inline-stage">
          <div class="demo-inline-live-frame" :class="liveFrameClass">
            <div v-if="liveLoading" class="demo-frame-loading"><span></span>Memuat live demo…</div>
            <iframe :src="demo.liveDemoUrl" :title="`Live demo ${demo.title}`" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" @load="liveLoading=false"></iframe>
          </div>
        </div>
        <div class="demo-frame-fallback"><span>Preview tidak tampil?</span><p>Website sumber dapat membatasi pemuatan melalui iframe.</p><a :href="demo.liveDemoUrl" target="_blank" rel="noopener noreferrer">Buka demo di tab baru ↗</a></div></template>
      </div>
      <div v-else class="preview-tabs-static"><div><span>DESKTOP PREVIEW</span><DemoPreview :demo="demo" large /></div><div class="mobile-preview-shell"><span>MOBILE PREVIEW</span><div v-if="demo.mobileScreenshots?.length" class="mobile-screenshot-list"><img v-for="src in demo.mobileScreenshots" :key="src" :src="src" :alt="`Mobile preview ${demo.title}`" loading="lazy"></div><div v-else class="mobile-preview-placeholder"><div><b>{{demo.title}}</b><i></i><i></i><i></i></div><small>Mobile screenshot belum ditambahkan</small></div></div></div>
    </div></section>

    <section class="section section-dark"><div class="container customization-grid"><div><span class="eyebrow eyebrow-light">Bisa Disesuaikan</span><h2>Konsep ini bukan template yang kaku.</h2><p>Kami menggunakan concept sebagai titik awal diskusi, lalu menyesuaikannya dengan identitas dan kebutuhan bisnis Anda.</p></div><div class="customization-list"><span>Warna & identitas brand</span><span>Logo & aset bisnis</span><span>Struktur halaman</span><span>Konten & copywriting</span><span>Fitur & integrasi</span><span>Responsive desktop & mobile</span></div></div></section>

    <section v-if="service" class="section"><div class="container relevant-service"><div><span class="eyebrow">Layanan yang Direkomendasikan</span><h2>{{service.title}}</h2><p>{{service.desc}}</p></div><div class="relevant-service-price"><span>INVESTASI</span><strong>{{service.price}}</strong><RouterLink class="btn" :to="getRelatedServiceRoute(demo)">Lihat Detail Layanan</RouterLink></div></div></section>

    <section v-if="related.length" class="section section-soft"><div class="container"><div class="section-heading between"><div><span class="eyebrow">Konsep Serupa</span><h2>Lihat arah desain lainnya.</h2></div><RouterLink class="text-link" to="/demo">Jelajahi semua demo →</RouterLink></div><div class="featured-demo-grid"><RouterLink v-for="item in related" :key="item.id" :to="getDemoRoute(item)" class="featured-demo-card"><DemoPreview :demo="item"/><div class="demo-card-body"><span class="demo-meta">{{getDemoIndustry(item.industry)?.name}} · {{getDemoServiceType(item.service)?.name}}</span><h3>{{item.title}}</h3><p>{{item.description}}</p><strong>Lihat Detail →</strong></div></RouterLink></div></div></section>

    <section class="service-final-cta"><div class="container service-final-inner"><div><span class="eyebrow eyebrow-light">Referensi: {{demo.title}}</span><h2>Ingin website dengan arah seperti ini?</h2><p>Konteks concept ini akan dibawa ke halaman konsultasi agar Anda tidak perlu menjelaskan dari awal.</p></div><RouterLink class="btn btn-light" :to="contactRoute">Buat Website Seperti Ini</RouterLink></div></section>
  </template>
  <section v-else class="section"><div class="container narrow demo-empty-state"><span>Demo tidak ditemukan</span><h1>Concept yang Anda cari belum tersedia.</h1><RouterLink class="btn" to="/demo">Kembali ke Demo</RouterLink></div></section>
</template>
