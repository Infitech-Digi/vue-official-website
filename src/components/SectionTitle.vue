<script setup>
defineProps({ eyebrow:String, title:String, copy:String, center:Boolean })
</script>
<template>
  <div :class="['section-title', {center}]">
    <span v-if="eyebrow" class="eyebrow">{{ eyebrow }}</span>
    <h2>{{ title }}</h2>
    <p v-if="copy">{{ copy }}</p>
  </div>
</template>
