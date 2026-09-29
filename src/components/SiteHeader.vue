<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import logo from '../assets/infitechdigi-logo.png'
const route = useRoute()
const open = ref(false)
const activeDropdown = ref(null)
const headerEl = ref(null)

const closeDropdowns = () => { activeDropdown.value = null }
const close = () => { open.value = false; closeDropdowns() }
const toggleDropdown = (name) => {
  activeDropdown.value = activeDropdown.value === name ? null : name
}
const handleDropdownEnter = (name, event) => {
  if (event.pointerType === 'mouse') activeDropdown.value = name
}
const handleDropdownLeave = (event) => {
  if (event.pointerType === 'mouse') closeDropdowns()
}
const handlePointerDown = (event) => {
  if (headerEl.value && !headerEl.value.contains(event.target)) closeDropdowns()
}
const handleKeydown = (event) => {
  if (event.key === 'Escape') closeDropdowns()
}

onMounted(() => {
  document.addEventListener('pointerdown', handlePointerDown)
  document.addEventListener('keydown', handleKeydown)
})
onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', handlePointerDown)
  document.removeEventListener('keydown', handleKeydown)
})
watch(() => route.fullPath, close)
const solutions=[['Mulai Go Digital','mulai-digital'],['Tingkatkan Kredibilitas','company-profile'],['Dapatkan Leads','landing-page'],['Jualan Online','toko-online'],['Rapikan Operasional','sistem-bisnis'],['Aplikasi Khusus','custom-development']]
const services=[['Mulai Digital','mulai-digital'],['Landing Page','landing-page'],['Company Profile','company-profile'],['Toko Online','toko-online'],['Sistem Bisnis','sistem-bisnis'],['Custom Development','custom-development'],['Managed Website','managed-website']]
</script>
<template><header ref="headerEl" class="site-header"><div class="container nav-wrap">
<RouterLink class="brand-logo" to="/" @click="close" aria-label="InfitechDigi Home"><img :src="logo" alt="InfitechDigi — Digital Solution Partner" /></RouterLink>
<button class="menu-toggle" type="button" aria-label="Buka menu navigasi" :aria-expanded="open" @click="open=!open"><span></span><span></span><span></span></button>
<nav :class="['main-nav',{open}]" aria-label="Navigasi utama">
<div class="nav-dropdown" @pointerenter="handleDropdownEnter('solutions', $event)" @pointerleave="handleDropdownLeave"><button type="button" :aria-expanded="activeDropdown === 'solutions'" @click="toggleDropdown('solutions')">Solusi <span>⌄</span></button><div :class="['nav-dropdown-panel',{open:activeDropdown === 'solutions'}]"><RouterLink to="/solusi" @click="close"><strong>Temukan Solusi</strong><small>Mulai dari kebutuhan bisnis Anda</small></RouterLink><RouterLink v-for="x in solutions" :key="x[1]" :to="{ path: '/solusi', query: { need: x[1] } }" @click="close">{{x[0]}}</RouterLink></div></div>
<div class="nav-dropdown" @pointerenter="handleDropdownEnter('services', $event)" @pointerleave="handleDropdownLeave"><button type="button" :aria-expanded="activeDropdown === 'services'" @click="toggleDropdown('services')">Layanan <span>⌄</span></button><div :class="['nav-dropdown-panel',{open:activeDropdown === 'services'}]"><RouterLink to="/layanan" @click="close"><strong>Semua Layanan</strong><small>Capability InfitechDigi</small></RouterLink><RouterLink v-for="x in services" :key="x[1]" :to="`/layanan/${x[1]}`" @click="close">{{x[0]}}</RouterLink></div></div>
<RouterLink to="/demo" @click="close">Demo</RouterLink><RouterLink to="/portfolio" @click="close">Portfolio</RouterLink><RouterLink to="/harga" @click="close">Harga</RouterLink><RouterLink to="/tentang" @click="close">Tentang</RouterLink><RouterLink to="/kontak" class="btn btn-primary nav-cta" @click="close">Konsultasi Gratis</RouterLink>
</nav></div></header></template>
