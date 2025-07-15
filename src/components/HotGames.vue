<template>
  <!-- Hot Games板块 -->
  <section class="hot-games-section">
    <div class="hot-games-grid">
      <div
        v-for="game in hotGames"
        :key="game.name"
        class="game-card"
        @click="goToGame(game.addressBar)"
      >
        <img
          :src="game.image"
          :alt="game.name"
          class="game-image"
          loading="lazy"
          decoding="async"
        />
        <div class="game-card-info">
          <h3 class="game-card-title">{{ game.name }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { gamesList } from '@/data'

const router = useRouter()

const hotGames = computed(() => {
  // 从gamesList中筛选标记为热门的游戏
  return gamesList
    .filter((game) => game.isHot)
    .map((game) => ({
      name: game.title,
      image: game.gameImageSrc,
      addressBar: game.addressBar,
    }))
})

const goToGame = (addressBar) => {
  router.push(`/games/${addressBar}`)
}
</script>

<style scoped>
.hot-games-section .hot-games-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 1rem;
}

/* Hot Games板块游戏卡片样式 */
.hot-games-section .game-card {
  background: var(--color-card-bg);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(249, 115, 22, 0.2);
  position: relative;
  font-size: 0;
  cursor: pointer;
}

.hot-games-section .game-card:hover {
  transform: translateY(-3px);
  background: var(--color-green-hover);
  box-shadow: 0 8px 25px rgba(16, 185, 129, 0.3);
  border-color: var(--color-orange-light);
}

.hot-games-section .game-card:hover .game-card-info {
  opacity: 1;
  visibility: visible;
}

.hot-games-section .game-image {
  width: 100%;
  height: 120px;
  object-fit: cover;
}

.hot-games-section .game-card-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 100%);
  padding: 12px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.hot-games-section .game-card-title {
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  color: var(--color-text-light);
}

/* 平板端响应式 */
@media (max-width: 1024px) {
  .hot-games-section .hot-games-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 0.8rem;
  }

  .hot-games-section .game-image {
    height: 100px;
  }

  .hot-games-section .game-card-info {
    padding: 10px;
  }

  .hot-games-section .game-card-title {
    font-size: 13px;
  }
}

/* 移动端响应式 */
@media (max-width: 768px) {
  .hot-games-section .hot-games-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.6rem;
  }

  .hot-games-section .game-card {
    display: flex;
    flex-direction: column;
    font-size: initial;
  }

  .hot-games-section .game-image {
    height: 80px;
  }

  .hot-games-section .game-card-info {
    position: static;
    background: none;
    padding: 8px;
    opacity: 1;
    visibility: visible;
  }

  .hot-games-section .game-card-title {
    font-size: 12px;
    text-align: center;
  }
}
</style> 