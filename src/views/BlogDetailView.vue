<template>
  <div class="page-container">
    <!-- 头部导航栏 -->
    <Header />

    <!-- 主内容区域 -->
    <main class="main-content">
      <div class="container">
        <div v-if="post" class="blog-detail">
          <article class="blog-content">
            <header class="blog-header">
              <h1 class="blog-title">{{ post.title }}</h1>
              <div class="blog-meta">
                <time :datetime="post.date">{{ formattedDate }}</time>
              </div>
            </header>

            <img
              :src="post.imageUrl"
              :alt="post.imageAlt"
              class="featured-image"
              loading="lazy"
              decoding="async"
            />

            <section class="blog-body content-wrapper" v-html="post.content"></section>
          </article>
        </div>
        <div v-else class="loading-container">
          <p v-if="error">{{ error }}</p>
          <p v-else>Loading post...</p>
        </div>
      </div>
    </main>

    <!-- 底部板块 -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { blogData } from '@/data'
import { SITE_CONFIG, getCanonicalUrl, getArticleSeoMeta } from '@/config/site.js'

const route = useRoute()
const post = ref(null)
const error = ref(null)

const formattedDate = computed(() => {
  if (!post.value || !post.value.date) {
    return ''
  }
  const date = new Date(post.value.date)
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return date.toLocaleDateString('en-US', options)
})

const findPost = () => {
  error.value = null
  post.value = null
  const postSlug = route.params.slug
  const foundPost = blogData.posts.find((p) => p.addressBar === postSlug)

  if (foundPost) {
    post.value = foundPost
  } else {
    error.value = 'Post not found.'
  }
}

// 移除useHead调用，让App.vue统一管理SEO

onMounted(findPost)
watch(() => route.params.slug, findPost)
</script>

<style scoped>
.blog-detail {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
}

.blog-content {
  background: var(--color-card-bg);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.blog-header {
  text-align: center;
  margin-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 2rem;
}

.blog-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #10b981, #34d399);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
}

.blog-meta {
  color: #64748b;
  font-size: 0.95rem;
}

.featured-image {
  width: 100%;
  border-radius: 12px;
  margin-bottom: 2rem;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.loading-container {
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: #64748b;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .blog-detail {
    max-width: 100%;
    padding: 1.5rem 0;
  }

  .blog-content {
    padding: 1.5rem;
  }

  .blog-title {
    font-size: 2.2rem;
  }

  .blog-header {
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
  }
}

@media (max-width: 768px) {
  .blog-detail {
    padding: 1rem 0;
  }

  .blog-content {
    padding: 1rem;
    border-radius: 12px;
  }

  .blog-title {
    font-size: 1.8rem;
    line-height: 1.3;
  }

  .blog-header {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
  }

  .blog-meta {
    font-size: 0.9rem;
  }

  .featured-image {
    margin-bottom: 1rem;
    border-radius: 8px;
  }

  .loading-container {
    font-size: 1.2rem;
    min-height: 50vh;
  }
}
</style>