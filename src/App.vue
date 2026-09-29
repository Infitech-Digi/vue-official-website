<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'

const route = useRoute()
const isDemoPreview = computed(() => route.meta.demoPreview === true)
</script>

<template>
  <SiteHeader v-if="!isDemoPreview" />
  <main :class="{ 'demo-preview-main': isDemoPreview }">
    <RouterView />
  </main>
  <SiteFooter v-if="!isDemoPreview" />
</template>
