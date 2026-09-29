<script setup>
import { computed } from 'vue'
import { services } from '../data/site'
import { getPublicDemos, getDemoRoute, getDemoIndustry } from '../data/demos'

const bySlug = Object.fromEntries(services.map((item) => [item.slug, item]))
const service = (slug) => bySlug[slug]
const demos = getPublicDemos()

const websiteServices = ['landing-page', 'company-profile', 'toko-online'].map(service)
const customServices = ['sistem-bisnis', 'custom-development'].map(service)

const journey = [
  { no:'01', stage:'Mulai', title:'Bangun fondasi digital', text:'Mulai dari identitas dan kanal digital yang membuat bisnis lebih mudah ditemukan dan dihubungi.', services:['mulai-digital'] },
  { no:'02', stage:'Bangun & Tumbuh', title:'Perkuat website dan penjualan', text:'Bangun aset digital untuk kredibilitas, campaign, leads, katalog, dan penjualan.', services:['landing-page','company-profile','toko-online'] },
  { no:'03', stage:'Rapikan Operasional', title:'Satukan proses bisnis', text:'Kurangi proses manual dan rapikan data, workflow, laporan, serta operasional internal.', services:['sistem-bisnis'] },
  { no:'04', stage:'Kembangkan', title:'Bangun solusi khusus', text:'Ketika proses bisnis membutuhkan aplikasi, portal, integrasi, atau sistem yang lebih spesifik.', services:['custom-development'] },
]

const audience = {
  'mulai-digital':'UMKM dan bisnis lokal yang baru membangun fondasi digital',
  'landing-page':'Campaign, promo, event, produk, atau satu penawaran spesifik',
  'company-profile':'Bisnis jasa dan perusahaan yang ingin meningkatkan kredibilitas',
  'toko-online':'Bisnis produk yang ingin memiliki katalog dan alur pemesanan sendiri',
  'sistem-bisnis':'Bisnis dengan proses manual, data tersebar, atau workflow yang mulai kompleks',
  'custom-development':'Organisasi dengan kebutuhan aplikasi, portal, API, atau integrasi khusus',
}

const serviceDemos = (slug, limit = 1) => demos
  .filter((demo) => demo.service === slug)
  .sort((a,b) => (b.priority ?? 0) - (a.priority ?? 0))
  .slice(0, limit)

const companyDemos = computed(() => demos.filter((d) => d.service === 'company-profile').sort((a,b)=>(b.priority??0)-(a.priority??0)).slice(0,3))

const comparison = [
  { label:'Fokus utama', landing:'Campaign & leads', company:'Kredibilitas bisnis', store:'Katalog & penjualan' },
  { label:'Struktur', landing:'1 halaman fokus', company:'Multi halaman', store:'Katalog produk' },
  { label:'Cocok untuk', landing:'Ads, promo, event', company:'Profil perusahaan/jasa', store:'Bisnis produk' },
  { label:'Investasi awal', landing:'Mulai Rp1,5 jt', company:'Mulai Rp3,5 jt', store:'Mulai Rp8 jt' },
]

const process = [
  ['01','Discovery','Memahami tujuan, kondisi bisnis, dan kebutuhan utama.'],
  ['02','Scope','Menentukan ruang lingkup, output, dan arah pengerjaan.'],
  ['03','Design','Menyusun struktur, pengalaman pengguna, dan visual.'],
  ['04','Development','Membangun solusi sesuai scope yang disepakati.'],
  ['05','Review','Pengujian, feedback, dan penyempurnaan sebelum rilis.'],
  ['06','Launch','Deployment, handover, dan technical care sesuai layanan.'],
]
</script>

<template>
  <section class="services-hero">
    <div class="container services-hero-grid">
      <div>
        <span class="eyebrow">Layanan InfitechDigi</span>
        <h1>Layanan digital untuk <span>setiap tahap pertumbuhan bisnis.</span></h1>
        <p>Mulai dari membangun kehadiran digital, meningkatkan penjualan, hingga mengembangkan sistem dan aplikasi khusus untuk operasional bisnis.</p>
        <div class="hero-actions">
          <a href="#layanan" class="btn btn-primary">Jelajahi Layanan ↓</a>
          <RouterLink to="/kontak?source=services" class="btn btn-secondary">Konsultasikan Kebutuhan</RouterLink>
        </div>
      </div>
      <aside class="services-capability-card">
        <small>CAPABILITY MAP</small>
        <strong>Dari fondasi sampai sistem khusus</strong>
        <div class="services-capability-list">
          <span>Fondasi Digital</span><span>Website & Growth</span><span>Digital Commerce</span><span>Business System</span><span>Custom Application</span><span>Technical Care</span>
        </div>
        <RouterLink to="/solusi">Belum tahu harus mulai dari mana? Temukan solusi →</RouterLink>
      </aside>
    </div>
  </section>

  <section id="layanan" class="section">
    <div class="container">
      <div class="services-section-head">
        <div><span class="eyebrow">Digital Growth Journey</span><h2>Layanan yang berkembang bersama bisnis Anda.</h2></div>
        <p>Anda tidak harus mengambil semuanya sekaligus. Mulai dari kebutuhan paling relevan sekarang, lalu kembangkan ketika bisnis membutuhkannya.</p>
      </div>
      <div class="services-journey">
        <article v-for="item in journey" :key="item.no">
          <span>{{ item.no }}</span><small>{{ item.stage }}</small><h3>{{ item.title }}</h3><p>{{ item.text }}</p>
          <div><RouterLink v-for="slug in item.services" :key="slug" :to="`/layanan/${slug}`">{{ service(slug)?.title }} →</RouterLink></div>
        </article>
      </div>
    </div>
  </section>

  <section class="section services-soft-section">
    <div class="container">
      <div class="services-section-head compact"><div><span class="eyebrow">Mulai</span><h2>Bangun fondasi digital bisnis.</h2></div><p>Untuk bisnis yang ingin lebih mudah ditemukan, dihubungi, dan mulai mengelola aktivitas digital dengan lebih rapi.</p></div>
      <article class="service-feature-card service-feature-wide">
        <div class="service-feature-copy"><span class="service-kicker">Fondasi Digital</span><h3>{{ service('mulai-digital').title }}</h3><p>{{ service('mulai-digital').desc }}</p><small>Cocok untuk</small><strong>{{ audience['mulai-digital'] }}</strong><b>{{ service('mulai-digital').price }}</b><RouterLink class="text-link" to="/layanan/mulai-digital">Pelajari Mulai Digital →</RouterLink></div>
        <div class="service-feature-aside"><span>Yang dibangun</span><ul><li>Kehadiran digital yang lebih rapi</li><li>Jalur komunikasi pelanggan</li><li>Fondasi data pelanggan</li><li>Pendampingan awal penggunaan</li></ul></div>
      </article>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="services-section-head"><div><span class="eyebrow">Website & Growth</span><h2>Bangun aset digital yang bekerja untuk bisnis.</h2></div><p>Pilih bentuk website berdasarkan tujuan: mendapatkan leads, membangun kepercayaan, atau mempermudah penjualan produk.</p></div>
      <div class="service-feature-grid">
        <article v-for="item in websiteServices" :key="item.slug" class="service-feature-card">
          <div v-if="serviceDemos(item.slug)[0]" class="service-demo-thumb">
            <img v-if="serviceDemos(item.slug)[0].coverImage" :src="serviceDemos(item.slug)[0].coverImage" :alt="`Demo ${serviceDemos(item.slug)[0].title}`" loading="lazy">
            <span>DEMO / CONCEPT</span>
          </div>
          <div class="service-feature-copy"><span class="service-kicker">{{ item.slug === 'landing-page' ? 'Website Conversion' : item.slug === 'company-profile' ? 'Website Kredibilitas' : 'Digital Commerce' }}</span><h3>{{ item.title }}</h3><p>{{ item.desc }}</p><small>Cocok untuk</small><strong>{{ audience[item.slug] }}</strong><b>{{ item.price }}</b><div class="service-card-links"><RouterLink :to="`/layanan/${item.slug}`">Lihat Detail →</RouterLink><RouterLink v-if="serviceDemos(item.slug)[0]" :to="getDemoRoute(serviceDemos(item.slug)[0])">Lihat Contoh →</RouterLink></div></div>
        </article>
      </div>

      <div class="service-comparison">
        <div class="comparison-head"><div><span class="eyebrow">Pilih berdasarkan tujuan</span><h3>Landing Page, Company Profile, atau Toko Online?</h3></div><p>Tiga layanan ini sama-sama berbasis website, tetapi dirancang untuk tujuan bisnis yang berbeda.</p></div>
        <div class="table-scroll"><table class="comparison-table"><thead><tr><th></th><th>Landing Page</th><th>Company Profile</th><th>Toko Online</th></tr></thead><tbody><tr v-for="row in comparison" :key="row.label"><td>{{ row.label }}</td><td>{{ row.landing }}</td><td>{{ row.company }}</td><td>{{ row.store }}</td></tr></tbody></table></div>
      </div>

      <div v-if="companyDemos.length" class="services-demo-strip">
        <div class="services-demo-strip-head"><div><span class="eyebrow">Contoh Arah Visual</span><h3>Lihat bagaimana website dapat tampil untuk industri berbeda.</h3></div><RouterLink to="/demo">Jelajahi Semua Demo →</RouterLink></div>
        <div class="services-demo-grid"><RouterLink v-for="demo in companyDemos" :key="demo.slug" :to="getDemoRoute(demo)" class="services-demo-card"><div><img v-if="demo.coverImage" :src="demo.coverImage" :alt="demo.title" loading="lazy"><span>DEMO / CONCEPT</span></div><small>{{ getDemoIndustry(demo.industry)?.name }}</small><strong>{{ demo.title }}</strong><b>Lihat Detail →</b></RouterLink></div>
      </div>
    </div>
  </section>

  <section class="section services-dark-section">
    <div class="container">
      <div class="services-section-head"><div><span class="eyebrow">System & Custom</span><h2>Ketika bisnis membutuhkan lebih dari website.</h2></div><p>Sistem Bisnis dan Custom Development dimulai dari discovery. Scope dan quotation final ditentukan setelah kebutuhan serta proses bisnis dipahami.</p></div>
      <div class="custom-service-grid">
        <article v-for="item in customServices" :key="item.slug"><span>{{ item.slug === 'sistem-bisnis' ? 'OPERASIONAL & AUTOMATION' : 'SOFTWARE SESUAI KEBUTUHAN' }}</span><h3>{{ item.title }}</h3><p>{{ item.desc }}</p><small>Cocok untuk</small><strong>{{ audience[item.slug] }}</strong><div class="custom-estimate"><small>Model harga</small><b>Estimasi awal tersedia · quotation setelah discovery</b></div><RouterLink :to="`/layanan/${item.slug}`">Pelajari {{ item.title }} →</RouterLink></article>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="managed-service-block">
        <div><span class="eyebrow">Aftercare</span><h2>Website sudah live? Kami tetap bisa menjaganya.</h2><p>Managed Website adalah technical care setelah periode awal layanan, untuk membantu website tetap terpantau, aman, dan terjaga secara teknis.</p><RouterLink to="/layanan/managed-website" class="btn btn-secondary">Pelajari Managed Website</RouterLink></div>
        <aside><small>MULAI</small><strong>Rp790 ribu<span>/tahun</span></strong><ul><li>Monitoring teknis</li><li>Maintenance sesuai paket</li><li>Dukungan teknis website</li></ul><p>Routine content update tidak termasuk technical maintenance.</p></aside>
      </div>
    </div>
  </section>

  <section class="section services-soft-section">
    <div class="container">
      <div class="services-section-head compact"><div><span class="eyebrow">Website Delivery</span><h2>Website Anda tidak berhenti setelah selesai dibuat.</h2></div><p>Untuk Landing Page, Company Profile, dan Toko Online, tahun pertama sudah mencakup kebutuhan teknis dasar agar website siap digunakan.</p></div>
      <div class="website-includes"><article><span>01</span><strong>Domain .com</strong><p>Domain utama untuk tahun pertama sesuai ketersediaan.</p></article><article><span>02</span><strong>Hosting</strong><p>Hosting untuk menjalankan website selama periode awal.</p></article><article><span>03</span><strong>SSL</strong><p>Koneksi HTTPS untuk akses website yang aman.</p></article><article><span>04</span><strong>Deployment</strong><p>Konfigurasi dan publikasi website sampai siap diakses.</p></article><article><span>05</span><strong>Basic Technical Care</strong><p>Pendampingan teknis dasar selama 12 bulan.</p></article></div>
      <p class="website-includes-note">Pembaruan konten rutin tidak termasuk dalam technical maintenance. Domain renewal dan Managed Website setelah tahun pertama mengikuti paket/perpanjangan yang dipilih.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="services-section-head compact"><div><span class="eyebrow">Cara Kami Bekerja</span><h2>Proses yang jelas dari kebutuhan sampai go-live.</h2></div><p>Untuk Sistem Bisnis dan Custom Development, discovery juga menjadi dasar penentuan scope dan quotation final.</p></div>
      <div class="services-process"><article v-for="item in process" :key="item[0]"><span>{{ item[0] }}</span><strong>{{ item[1] }}</strong><p>{{ item[2] }}</p></article></div>
    </div>
  </section>

  <section class="section services-pricing-teaser">
    <div class="container">
      <div class="services-section-head compact"><div><span class="eyebrow">Investasi</span><h2>Mulai dari kebutuhan yang paling relevan.</h2></div><RouterLink to="/harga" class="text-link">Lihat Paket & Harga Lengkap →</RouterLink></div>
      <div class="service-price-list"><RouterLink v-for="item in services.filter(s => s.slug !== 'managed-website')" :key="item.slug" :to="`/layanan/${item.slug}`"><span>{{ item.title }}</span><strong>{{ ['sistem-bisnis','custom-development'].includes(item.slug) ? 'Berdasarkan scope' : item.price }}</strong><b>→</b></RouterLink></div>
    </div>
  </section>

  <section class="services-unsure">
    <div class="container"><div><span>Belum tahu layanan mana yang cocok?</span><h2>Mulai dari kebutuhan bisnis, bukan nama layanan.</h2><p>Ceritakan apa yang ingin Anda tingkatkan. Halaman Solusi akan membantu memetakan kebutuhan Anda ke layanan yang paling relevan.</p></div><div class="hero-actions"><RouterLink to="/solusi" class="btn btn-light">Temukan Solusi</RouterLink><RouterLink to="/kontak?source=services-unsure" class="btn btn-outline-light">Konsultasi Gratis</RouterLink></div></div>
  </section>
</template>
