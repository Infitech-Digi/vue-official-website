<script setup>
import { computed, onMounted, onBeforeUnmount, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getDemoByRoute, getDemoIndustry, getDemoServiceType, getDemoRoute } from '../data/demos'

const route = useRoute()
const demo = computed(() => getDemoByRoute(route.params.industry, route.params.slug))
const industry = computed(() => demo.value ? getDemoIndustry(demo.value.industry) : null)
const serviceType = computed(() => demo.value ? getDemoServiceType(demo.value.service) : null)
const device = ref('desktop')
const loading = ref(true)
const frameLoaded = () => { loading.value = false }
const contactRoute = computed(() => demo.value ? { path:'/kontak', query:{ demo:demo.value.slug, industry:demo.value.industry, service:demo.value.service } } : '/kontak')
const detailRoute = computed(() => demo.value ? getDemoRoute(demo.value) : '/demo')
const frameClass = computed(() => `demo-live-frame demo-live-frame-${device.value}`)
let robotsMeta
onMounted(() => {
  document.title = demo.value ? `${demo.value.title} — Demo Preview | InfitechDigi` : 'Demo Preview | InfitechDigi'
  robotsMeta = document.querySelector('meta[name="robots"]')
  if (!robotsMeta) {
    robotsMeta = document.createElement('meta')
    robotsMeta.name = 'robots'
    document.head.appendChild(robotsMeta)
    robotsMeta.dataset.previewCreated = 'true'
  }
  robotsMeta.dataset.previousContent = robotsMeta.content || ''
  robotsMeta.content = 'noindex,nofollow'
})
onBeforeUnmount(() => {
  if (!robotsMeta) return
  if (robotsMeta.dataset.previewCreated === 'true') robotsMeta.remove()
  else robotsMeta.content = robotsMeta.dataset.previousContent || 'index,follow'
})
</script>

<template>
  <div v-if="demo" class="demo-live-preview-page">
    <header class="demo-preview-navbar">
      <div class="demo-preview-brand">
        <RouterLink :to="detailRoute" class="demo-preview-back" aria-label="Kembali ke detail demo">←</RouterLink>
        <img src="../assets/infitechdigi-logo.png" alt="InfitechDigi">
        <div class="demo-preview-title">
          <strong>{{ demo.title }}</strong>
          <span>{{ industry?.name }} · {{ serviceType?.name }} · Demo / Concept</span>
        </div>
      </div>

      <div class="demo-device-switch" aria-label="Ukuran preview">
        <button :class="{active:device==='desktop'}" @click="device='desktop'" title="Desktop">Desktop</button>
        <button :class="{active:device==='tablet'}" @click="device='tablet'" title="Tablet">Tablet</button>
        <button :class="{active:device==='mobile'}" @click="device='mobile'" title="Mobile">Mobile</button>
      </div>

      <div class="demo-preview-actions">
        <RouterLink class="demo-preview-detail-link" :to="detailRoute">Detail Demo</RouterLink>
        <a class="demo-preview-external" :href="demo.liveDemoUrl" target="_blank" rel="noopener noreferrer">Buka Tab Baru ↗</a>
        <RouterLink class="btn demo-preview-cta" :to="contactRoute">Buat Website Seperti Ini</RouterLink>
      </div>
    </header>

    <main class="demo-live-stage">
      <div class="demo-live-notice">Preview menggunakan website sumber di dalam frame InfitechDigi. Tampilan dapat berbeda mengikuti ukuran viewport.</div>
      <div :class="frameClass">
        <div v-if="loading" class="demo-frame-loading"><span></span><strong>Memuat live demo…</strong></div>
        <iframe
          :src="demo.liveDemoUrl"
          :title="`Live preview ${demo.title}`"
          loading="eager"
          referrerpolicy="strict-origin-when-cross-origin"
          allow="fullscreen; clipboard-read; clipboard-write"
          @load="frameLoaded"
        ></iframe>
      </div>
      <div class="demo-frame-fallback">
        <span>Demo tidak tampil?</span>
        <p>Beberapa website dapat membatasi tampilan melalui iframe. Anda tetap dapat membuka sumber demo di tab baru.</p>
        <a :href="demo.liveDemoUrl" target="_blank" rel="noopener noreferrer">Buka Demo di Tab Baru ↗</a>
      </div>
    </main>
  </div>
  <section v-else class="section"><div class="container narrow demo-empty-state"><span>Demo tidak ditemukan</span><h1>Preview yang Anda cari belum tersedia.</h1><RouterLink class="btn" to="/demo">Kembali ke Demo</RouterLink></div></section>
</template>
