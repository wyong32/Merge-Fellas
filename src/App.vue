<template>
  <!-- 全局粒子背景效果 -->
  <ParticleEffect />

  <RouterView />
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'
import ParticleEffect from '@/components/ParticleEffect.vue'
import {
  SITE_CONFIG,
  getCanonicalUrl,
  getDefaultSeoMeta,
  getArticleSeoMeta,
} from '@/config/site.js'
import { gamesList } from '@/data/gamesList.js'
import { blogData } from '@/data/blogPosts.js'

const route = useRoute()

// 获取详情页SEO数据的函数
const getDetailPageSeo = (route) => {
  const { path, params } = route

  // 游戏详情页
  if (path.startsWith('/games/') && params.addressBar) {
    const game = gamesList.find((g) => g.addressBar === params.addressBar)
    if (game && game.seo) {
      return game.seo
    }
  }

  // 博客详情页
  if (path.startsWith('/blog/') && params.slug) {
    const post = blogData.posts.find((p) => p.addressBar === params.slug)
    if (post && post.seo) {
      return post.seo
    }
  }

  return null
}

// 创建响应式的SEO数据
const seoData = computed(() => {
  const canonicalUrl = getCanonicalUrl(route)

  // 首先检查是否有详情页SEO数据
  const detailSeo = getDetailPageSeo(route)
  if (detailSeo) {
    return {
      title: detailSeo.title,
      meta: getArticleSeoMeta(canonicalUrl, detailSeo),
      link: [{ rel: 'canonical', href: canonicalUrl }],
    }
  }

  // 检查路由是否有SEO配置
  if (route.meta && route.meta.seo) {
    return {
      title: route.meta.seo.title,
      meta: getArticleSeoMeta(canonicalUrl, route.meta.seo),
      link: [{ rel: 'canonical', href: canonicalUrl }],
    }
  }

  // 默认SEO配置
  return {
    title: SITE_CONFIG.TITLE,
    meta: getDefaultSeoMeta(canonicalUrl),
    link: [{ rel: 'canonical', href: canonicalUrl }],
  }
})

// 使用useHead管理SEO
useHead(seoData)

// 调试日志
watch(
  () => route.path,
  (newPath) => {
    console.log('Route changed:', newPath)
    console.log('Route meta:', route.meta)
    console.log('Route params:', route.params)

    const detailSeo = getDetailPageSeo(route)
    if (detailSeo) {
      console.log('Detail page SEO found:', detailSeo)
    }

    console.log('Final SEO data:', seoData.value)
  },
  { immediate: true }
)
</script>

<style scoped>
</style>
