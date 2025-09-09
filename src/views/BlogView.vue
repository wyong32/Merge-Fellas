<template>
  <div class="page-container">
    <!-- 头部导航栏 -->
    <Header />

    <!-- 主内容区域 -->
    <main class="main-content">
      <div class="container">
        <h1 class="page-title">Merge Fellas Blog</h1>
        <p class="page-subtitle">
          Insights, strategies, and deep dives into the world of merge puzzle gaming.
        </p>

        <div class="blog-grid">
          <a
            v-for="post in posts"
            :key="post.id"
            :href="`/blog/${post.addressBar}`"
            class="blog-card"
          >
            <img
              :src="post.imageUrl"
              :alt="post.imageAlt"
              class="blog-image"
              loading="lazy"
              decoding="async"
            />
            <div class="blog-info">
              <h2 class="blog-title">{{ post.title }}</h2>
              <p class="blog-excerpt">{{ post.excerpt }}</p>
              <span class="blog-date">{{ formatDate(post.date) }}</span>
            </div>
          </a>
        </div>
      </div>
    </main>

    <!-- 底部板块 -->
    <Footer />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { blogData } from '@/data'

const posts = computed(() => blogData.posts)

const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return date.toLocaleDateString('en-US', options)
}
</script>

<style scoped>
.page-title {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #10b981, #34d399);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-subtitle {
  font-size: 1.2rem;
  text-align: center;
  color: #64748b;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.blog-card {
  background: var(--color-card-bg);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(10px);
}

.blog-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(16, 185, 129, 0.2);
  border-color: rgba(16, 185, 129, 0.3);
}

.blog-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.blog-info {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.blog-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  color: #e2e8f0;
  line-height: 1.3;
}

.blog-excerpt {
  font-size: 0.95rem;
  color: #94a3b8;
  line-height: 1.6;
  flex-grow: 1;
  margin-bottom: 1rem;
}

.blog-date {
  font-size: 0.85rem;
  color: #64748b;
  text-align: right;
  margin-top: auto;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .page-title {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  .blogs-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .blog-card {
    padding: 1.5rem;
  }

  .blog-title {
    font-size: 1.3rem;
  }

  .blog-excerpt {
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .blogs-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .blog-card {
    padding: 1rem;
  }

  .blog-title {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  .blog-excerpt {
    font-size: 0.85rem;
    margin-bottom: 1rem;
  }

  .blog-meta {
    font-size: 0.8rem;
  }

  .blog-image {
    height: 180px;
  }
}
</style> 