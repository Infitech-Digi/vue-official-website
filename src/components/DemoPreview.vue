<script setup>
import { computed } from 'vue'
import { getDemoIndustry, getDemoServiceType } from '../data/demos'
const props = defineProps({ demo:{ type:Object, required:true }, large:Boolean })
const industry = computed(() => getDemoIndustry(props.demo.industry)?.name ?? props.demo.industry)
const service = computed(() => getDemoServiceType(props.demo.service)?.name ?? props.demo.service)
</script>
<template>
  <div class="demo-preview" :class="{ 'demo-preview-large': large }">
    <img v-if="demo.coverImage" :src="demo.coverImage" :alt="`Preview ${demo.title}`" loading="lazy" decoding="async">
    <div v-else class="demo-preview-placeholder" :data-industry="demo.industry">
      <div class="preview-browserbar"><i></i><i></i><i></i><span>CONCEPT PREVIEW</span></div>
      <div class="preview-page">
        <div class="preview-nav"><b>{{ demo.title }}</b><span></span><span></span><span></span></div>
        <div class="preview-hero-block">
          <div><small>{{ industry }}</small><strong>{{ demo.title }}</strong><em>{{ service }}</em></div>
          <div class="preview-art"><i></i><i></i><i></i></div>
        </div>
        <div class="preview-content-row"><i></i><i></i><i></i></div>
      </div>
      <span class="preview-note">Screenshot aktual belum ditambahkan</span>
    </div>
  </div>
</template>
