import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/styles.css'
import HomeView from './views/HomeView.vue'
import { trackEvent } from './utils/analytics'
import { applySeo } from './utils/seo'

const routes = [
  { path:'/', component:HomeView, meta:{ title:'InfitechDigi — Digital Solution Partner', description:'Website, toko online, sistem bisnis, dan custom development untuk membantu bisnis bertumbuh.' } },
  { path:'/solusi', component:() => import('./views/SolutionsView.vue'), meta:{ title:'Solusi Digital untuk Bisnis | InfitechDigi', description:'Temukan arah solusi digital berdasarkan kebutuhan dan tahap bisnis Anda.' } },
  { path:'/layanan', component:() => import('./views/ServicesView.vue'), meta:{ title:'Layanan Digital | InfitechDigi', description:'Layanan website, toko online, sistem bisnis, custom development, dan managed website.' } },
  { path:'/layanan/:slug', name:'service-detail', component:() => import('./views/ServiceDetailView.vue'), meta:{ title:'Detail Layanan | InfitechDigi', description:'Pelajari scope, proses, demo, dan investasi layanan InfitechDigi.' } },
  { path:'/demo', component:() => import('./views/DemoView.vue'), meta:{ title:'Demo Website | InfitechDigi', description:'Jelajahi concept website untuk berbagai jenis bisnis.' } },
  { path:'/demo/:industry/:slug/preview', component:() => import('./views/DemoLivePreviewView.vue'), meta:{ demoPreview:true, noindex:true, title:'Live Demo Preview | InfitechDigi', description:'Preview concept website InfitechDigi.' } },
  { path:'/demo/:industry/:slug', name:'demo-detail', component:() => import('./views/DemoDetailView.vue'), meta:{ title:'Demo Detail | InfitechDigi', description:'Lihat detail concept, struktur, dan live preview demo website InfitechDigi.' } },
  { path:'/portfolio', component:() => import('./views/PortfolioView.vue'), meta:{ title:'Portfolio & Experience | InfitechDigi', description:'Pengalaman profesional, Client Project, dan Demo ditampilkan secara transparan.' } },
  { path:'/harga', component:() => import('./views/PricingView.vue'), meta:{ title:'Harga & Paket | InfitechDigi', description:'Lihat kisaran investasi layanan digital InfitechDigi dan apa yang termasuk.' } },
  { path:'/tentang', component:() => import('./views/AboutView.vue'), meta:{ title:'Tentang InfitechDigi', description:'Kenali cara kerja, kapabilitas, dan prinsip delivery InfitechDigi.' } },
  { path:'/insight', component:() => import('./views/InsightView.vue'), meta:{ noindex:true, title:'Insight | InfitechDigi', description:'Insight digital untuk pemilik bisnis.' } },
  { path:'/kontak', component:() => import('./views/ContactView.vue'), meta:{ title:'Konsultasi Gratis | InfitechDigi', description:'Ceritakan kebutuhan digital bisnis Anda dan lanjutkan konsultasi melalui WhatsApp.' } },
  { path:'/:pathMatch(.*)*', component:() => import('./views/NotFoundView.vue'), meta:{ noindex:true, title:'Halaman Tidak Ditemukan | InfitechDigi', description:'Halaman tidak ditemukan.' } },
]
const router=createRouter({history:createWebHistory(),routes,scrollBehavior:(to,from,saved)=>saved||({top:0})})
router.afterEach((to)=>{ const seo=applySeo(to); trackEvent('page_view',{path:to.fullPath,title:seo.title}) })
createApp(App).use(router).mount('#app')
