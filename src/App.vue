<template>
  <!-- 全局粒子背景效果 -->
  <ParticleEffect />

  <RouterView />
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'
import ParticleEffect from '@/components/ParticleEffect.vue'
import {
  SITE_CONFIG,
  getCanonicalUrl,
  getDefaultSeoMeta,
  getArticleSeoMeta,
} from '@/config/site.js'

const route = useRoute()

// Initialize reactive data for head management
const siteData = ref({
  title: SITE_CONFIG.TITLE,
  meta: getDefaultSeoMeta(SITE_CONFIG.DOMAIN),
  link: [{ rel: 'canonical', href: SITE_CONFIG.DOMAIN }],
})

// Call useHead with reactive data
useHead(siteData)

// Watch for route changes and update SEO
const updateSEO = (currentRoute) => {
  // Generate canonical URL
  const canonicalUrl = getCanonicalUrl(currentRoute)

  console.log('Route changed:', currentRoute.path, currentRoute.meta?.seo)

  // Update SEO information
  if (currentRoute.meta && currentRoute.meta.seo) {
    siteData.value.title = currentRoute.meta.seo.title
    siteData.value.meta = getArticleSeoMeta(canonicalUrl, currentRoute.meta.seo)
    console.log('Updated SEO with route meta:', currentRoute.meta.seo.title)
  } else {
    // Default SEO information
    siteData.value.title = SITE_CONFIG.TITLE
    siteData.value.meta = getDefaultSeoMeta(canonicalUrl)
    console.log('Updated SEO with default:', SITE_CONFIG.TITLE)
  }

  // Update canonical URL
  siteData.value.link = [{ rel: 'canonical', href: canonicalUrl }]
}

// Watch for route changes
watch(
  () => route.path,
  () => updateSEO(route),
  { immediate: true }
)

// Also watch for meta changes (in case dynamic route meta changes)
watch(
  () => route.meta,
  () => updateSEO(route),
  { immediate: true }
)
</script>

<style scoped>
</style>
