<script setup>
import { computed, onMounted } from 'vue'
import { trackEvent } from '../utils/analytics'
import { useRoute } from 'vue-router'
import { serviceDetails, pricingCategories, managedPlans } from '../data/site'
import { filterDemos, getDemoRoute, getDemoIndustry, getDemoServiceType } from '../data/demos'

const route = useRoute()
const detail = computed(() => serviceDetails[route.params.slug] || serviceDetails['landing-page'])
const pricing = computed(() => pricingCategories.find(p => p.slug === route.params.slug))
const plans = computed(() => route.params.slug === 'managed-website' ? managedPlans : pricing.value?.packages || [])
const ctaText = computed(() => detail.value.cta || `Konsultasikan ${detail.value.title}`)
const processItems = computed(() => detail.value.processDetail || detail.value.process.map(item => [item, '']))
const hasWebsiteAfterLaunch = computed(() => ['landing-page','company-profile','toko-online'].includes(route.params.slug))
const relevantDemos = computed(() => filterDemos({ service: route.params.slug }).slice(0, 3))
onMounted(()=>trackEvent('view_service',{service:String(route.params.slug)}))
const demoMeta = (demo) => `${getDemoIndustry(demo.industry)?.name ?? demo.industry} · ${getDemoServiceType(demo.service)?.name ?? demo.service}`
</script>

<template>
  <main class="service-detail">
    <section class="service-hero">
      <div class="container service-hero-grid">
        <div>
          <span class="eyebrow">{{detail.eyebrow}}</span>
          <h1>{{detail.hero}}</h1>
          <p class="service-lead">{{detail.lead}}</p>
          <p v-if="detail.promise" class="service-promise">{{detail.promise}}</p>
          <div class="hero-actions">
            <RouterLink :to="`/kontak?service=${route.params.slug}&source=service-detail`" class="btn">{{ctaText}}</RouterLink>
            <RouterLink v-if="detail.demo" to="/demo" class="btn btn-secondary">Lihat Demo</RouterLink>
          </div>
          <p class="starting-price">{{detail.price}} <span>• Konsultasi awal gratis</span></p>
        </div>
        <div class="service-hero-panel">
          <span>InfitechDigi Solution</span><h3>{{detail.title}}</h3>
          <div class="mini-flow"><i></i><i></i><i></i></div>
          <p class="hero-panel-caption">Scope awal yang biasanya dibahas</p>
          <ul><li v-for="item in detail.deliverables.slice(0,4)" :key="item">✓ {{item}}</li></ul>
        </div>
      </div>
    </section>

    <section class="section section-soft">
      <div class="container">
        <div class="section-heading"><span class="eyebrow">Kondisi yang Kami Bantu</span><h2>Apakah bisnis Anda mengalami kondisi seperti ini?</h2></div>
        <div class="pain-grid"><article v-for="(p,i) in detail.pains" :key="p"><span>0{{i+1}}</span><p>{{p}}</p></article></div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-heading centered"><span class="eyebrow">Hasil yang Ditargetkan</span><h2>Bukan sekadar daftar fitur. Solusi harus memperbaiki cara bisnis bekerja atau berkomunikasi.</h2></div>
        <div class="outcome-grid"><article v-for="o in detail.outcomes" :key="o[0]"><div class="outcome-icon">↗</div><h3>{{o[0]}}</h3><p>{{o[1]}}</p></article></div>
      </div>
    </section>

    <section v-if="detail.experience" class="section section-dark">
      <div class="container">
        <div class="section-heading"><span class="eyebrow">Pengalaman yang Dirancang</span><h2>Apa yang berubah ketika solusi ini digunakan dengan tepat?</h2></div>
        <div class="experience-grid"><article v-for="item in detail.experience" :key="item[0]"><span>✓</span><div><h3>{{item[0]}}</h3><p>{{item[1]}}</p></div></article></div>
      </div>
    </section>

    <section class="section section-soft">
      <div class="container split">
        <div><span class="eyebrow">Cocok untuk Siapa?</span><h2>Solusi ini tepat jika bisnis Anda berada pada kondisi berikut.</h2></div>
        <div class="check-list"><div v-for="a in detail.audience" :key="a"><span>✓</span>{{a}}</div></div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-heading"><span class="eyebrow">Scope & Deliverables</span><h2>Apa yang masuk dalam pembahasan dan pengerjaan.</h2><p>Detail final mengikuti paket, discovery, dan scope yang disepakati.</p></div>
        <div class="deliverable-grid"><article v-for="(d,i) in detail.deliverables" :key="d"><span>{{String(i+1).padStart(2,'0')}}</span><strong>{{d}}</strong></article></div>
        <div v-if="detail.scopeNotes" class="scope-boundary">
          <div><span class="eyebrow">Batas Scope</span><h3>Supaya ekspektasi jelas sejak awal.</h3></div>
          <ul><li v-for="note in detail.scopeNotes" :key="note">{{note}}</li></ul>
        </div>
      </div>
    </section>

    <section v-if="detail.journey" class="section section-dark">
      <div class="container"><div class="section-heading"><span class="eyebrow">Customer Journey</span><h2>Alur belanja dibuat mengikuti cara pelanggan mengambil keputusan.</h2></div>
      <div class="journey-row"><div v-for="(j,i) in detail.journey" :key="j"><span>{{i+1}}</span><strong>{{j}}</strong></div></div></div>
    </section>

    <section v-if="detail.workflow" class="section section-dark">
      <div class="container"><div class="section-heading"><span class="eyebrow">Workflow Transformation</span><h2>Dari proses saat ini menuju workflow yang lebih terstruktur.</h2></div>
      <div class="journey-row"><div v-for="(j,i) in detail.workflow" :key="j"><span>{{i+1}}</span><strong>{{j}}</strong></div></div></div>
    </section>

    <section v-if="detail.capabilities" class="section section-dark">
      <div class="container"><div class="section-heading"><span class="eyebrow">Kapabilitas Development</span><h2>Bentuk solusi ditentukan oleh requirement, bukan dipilih dari paket teknologi.</h2></div>
      <div class="capability-grid"><div v-for="c in detail.capabilities" :key="c">{{c}}</div></div></div>
    </section>

    <section v-if="detail.demo" class="section demo-service-section">
      <div class="container">
        <div class="section-heading between"><div><span class="eyebrow">Industry Showcase</span><h2>Lihat seperti apa bisnis Anda bisa tampil.</h2><p>Demo adalah concept showcase, bukan klaim sebagai project client.</p></div><RouterLink to="/demo" class="text-link">Lihat semua demo →</RouterLink></div>
        <div v-if="relevantDemos.length" class="demo-mini-grid"><article v-for="d in relevantDemos" :key="d.slug" class="service-demo-master-card"><RouterLink :to="getDemoRoute(d)" class="service-demo-master-cover"><img v-if="d.coverImage" :src="d.coverImage" :alt="`Preview ${d.title}`" loading="lazy"><span>DEMO / CONCEPT</span></RouterLink><small>{{demoMeta(d)}}</small><h3>{{d.title}}</h3><p>{{d.description}}</p><RouterLink :to="getDemoRoute(d)" class="text-link">Lihat Detail Demo →</RouterLink></article></div><div v-else class="empty-state compact"><p>Demo spesifik untuk layanan ini sedang disiapkan.</p><RouterLink to="/demo" class="text-link">Jelajahi semua demo →</RouterLink></div>
      </div>
    </section>

    <section v-if="plans.length" class="section section-soft">
      <div class="container">
        <div class="section-heading centered"><span class="eyebrow">Paket & Investasi</span><h2>Pilih level berdasarkan kebutuhan, bukan sekadar jumlah fitur.</h2><p>{{detail.pricingNote || 'Harga final dikonfirmasi setelah scope utama dipahami.'}}</p></div>
        <div class="package-grid" :class="{'package-grid-two': plans.length === 2}">
          <article v-for="p in plans" :key="p.name" class="package-card" :class="{recommended:p.recommended}">
            <span v-if="p.recommended" class="recommended-label">Paling Direkomendasikan</span><h3>{{p.name}}</h3><div v-if="p.regularPrice" class="regular-price">Normal {{p.regularPrice}}</div><strong class="package-price">{{p.price}}</strong><div v-if="p.priceNote" class="price-note">{{p.priceNote}}</div>
            <p class="package-audience">{{p.audience || p.desc}}</p><ul><li v-for="f in p.features" :key="f">✓ <span>{{f}}</span></li></ul>
            <RouterLink :to="`/kontak?service=${route.params.slug}&package=${encodeURIComponent(p.name)}&source=service-package`" class="btn" :class="{'btn-secondary':!p.recommended}">Bahas Paket {{p.name}}</RouterLink>
          </article>
        </div>
        <div v-if="pricing" class="center-action"><RouterLink to="/harga" class="text-link">Lihat perbandingan paket lengkap →</RouterLink></div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-heading"><span class="eyebrow">Proses Pengerjaan</span><h2>Setiap tahap punya tujuan yang jelas.</h2><p>Untuk proyek kompleks, tahapan dapat dipecah menjadi milestone sesuai scope.</p></div>
        <div class="process-detail-grid"><article v-for="(p,i) in processItems" :key="p[0]"><span>{{String(i+1).padStart(2,'0')}}</span><h3>{{p[0]}}</h3><p v-if="p[1]">{{p[1]}}</p></article></div>
      </div>
    </section>

    <section class="section section-soft">
      <div class="container split service-logistics">
        <div><span class="eyebrow">Timeline</span><h2>Berapa lama pengerjaannya?</h2><p>{{detail.timeline}}</p><p class="fine-note">Timeline dimulai setelah scope dan materi/dependency utama siap.</p></div>
        <div><h3>Yang kami butuhkan dari Anda</h3><div class="check-list"><div v-for="n in detail.needs" :key="n"><span>✓</span>{{n}}</div></div></div>
      </div>
    </section>

    <section v-if="hasWebsiteAfterLaunch && detail.afterLaunch" class="section">
      <div class="container after-launch">
        <div><span class="eyebrow">Setelah Go-Live</span><h2>{{detail.afterLaunch.title}}</h2><p>{{detail.afterLaunch.body}}</p><p class="fine-note">{{detail.afterLaunch.note}}</p></div>
        <RouterLink to="/layanan/managed-website" class="btn btn-secondary">Pelajari Managed Website</RouterLink>
      </div>
    </section>

    <section class="section section-soft">
      <div class="container narrow">
        <div class="section-heading centered"><span class="eyebrow">FAQ {{detail.title}}</span><h2>Pertanyaan yang sering muncul sebelum mulai.</h2></div>
        <details v-for="f in detail.faq" :key="f[0]" class="faq-item"><summary>{{f[0]}}<span>+</span></summary><p>{{f[1]}}</p></details>
      </div>
    </section>

    <section class="service-final-cta">
      <div class="container service-final-inner"><div><span class="eyebrow">Konsultasi Awal Gratis</span><h2>Siap membahas {{detail.title}} untuk bisnis Anda?</h2><p>{{detail.finalLead || 'Ceritakan kondisi dan tujuan Anda. Kami bantu menentukan scope yang paling masuk akal.'}}</p></div><RouterLink :to="`/kontak?service=${route.params.slug}&source=service-detail`" class="btn btn-light">{{ctaText}}</RouterLink></div>
    </section>

    <div class="mobile-sticky-cta"><span>{{detail.price}}</span><RouterLink :to="`/kontak?service=${route.params.slug}&source=service-detail`">Konsultasi →</RouterLink></div>
  </main>
</template>
