<template>
  <div class="page-container">
    <!-- 头部导航栏 -->
    <Header />

    <!-- 主内容区域 -->
    <main class="main-content">
      <div class="container">
        <h1 class="page-title">All Games</h1>

        <!-- 游戏列表网格 -->
        <div class="games-grid">
          <a
            v-for="game in gamesList"
            :key="game.id"
            class="game-card"
            :href="`/games/${game.addressBar}`"
          >
            <div class="game-image-container">
              <img
                :src="game.gameImageSrc"
                :alt="game.gameImageAlt"
                class="game-image"
                loading="lazy"
                decoding="async"
              />
              <div v-if="game.isHot" class="hot-badge">HOT</div>
            </div>
            <h3 class="game-title">{{ game.title }}</h3>
          </a>
        </div>
      </div>
    </main>

    <!-- 底部板块 -->
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { gamesList } from '@/data'

</script>

<style scoped>
.page-title {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 1rem;
  margin-bottom: 3rem;
}

.game-card {
  background: var(--color-card-bg);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  text-align: center;
}

.game-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.2);
  border-color: rgba(99, 102, 241, 0.3);
}

.game-image-container {
  position: relative;
  overflow: hidden;
}

.game-image {
  width: 100%;
  height: 120px;
  object-fit: cover;
}

.hot-badge {
  position: absolute;
  top: 8px;
  right: 8px;
  background: linear-gradient(135deg, #f59e0b, #ea580c);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.game-title {
  font-size: 0.9rem;
  font-weight: 600;
  margin: 0;
  padding: 0.5rem 1rem;
  color: #e2e8f0;
}

/* 平板端响应式 */
@media (max-width: 1024px) {
  .page-title {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  .games-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }

  .game-image {
    height: 100px;
  }

  .game-title {
    font-size: 0.85rem;
    padding: 10px;
  }
}

/* 移动端响应式 */
@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .games-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
  }

  .game-image {
    height: 80px;
  }

  .game-title {
    font-size: 0.8rem;
    padding: 8px;
  }

  .hot-badge {
    top: 4px;
    right: 4px;
    padding: 0.2rem 0.4rem;
    font-size: 0.6rem;
  }
}
</style> 