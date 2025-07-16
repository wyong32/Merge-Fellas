<template>
  <div class="page-container">
    <!-- 头部导航栏 -->
    <Header />

    <!-- 主内容区域 -->
    <main class="main-content">
      <div class="container">
        <h1 v-if="currentGame" class="page-title">{{ currentGame.title }} - Game Details</h1>
        <h1 v-else class="page-title">Game Not Found</h1>
        <div class="content-area">
          <!-- 游戏板块组件 -->
          <GameBoard v-if="currentGame" :current-main-game="currentGameAsMainGame" />

          <!-- 游戏未找到 -->
          <div v-else class="game-not-found">
            <p>Sorry, we couldn't find the game you're looking for.</p>
            <button @click="goBack" class="back-button">Back to Home</button>
          </div>
        </div>

        <!-- Hot Games板块标题 -->
        <h2 class="section-title">Featured New Games</h2>
        <div class="content-area">
          <!-- Hot Games板块组件 -->
          <HotGames />
        </div>

        <!-- 关于我们板块标题 -->
        <h2 class="section-title">About Merge Fellas</h2>
        <div class="content-area">
          <!-- 关于我们板块 -->
          <section class="about-section">
            <div class="about-content">
              <!-- 左侧内容 -->
              <div class="about-text">
                <div
                  v-if="currentGame"
                  v-html="currentGame.detailsHtml"
                  class="main-game-details content-wrapper"
                ></div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>

    <!-- 底部板块 -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useHead } from '@vueuse/head'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import GameBoard from '@/components/GameBoard.vue'
import HotGames from '@/components/HotGames.vue'
import { mainGame, gamesList } from '@/data'
import { getCanonicalUrl, getArticleSeoMeta } from '@/config/site.js'

const route = useRoute()
const router = useRouter()
const currentGame = ref(null)

const currentGameAsMainGame = computed(() => {
  if (!currentGame.value) return null
  return {
    id: currentGame.value.id,
    title: currentGame.value.title,
    iframeUrl: currentGame.value.iframeUrl,
    addressBar: currentGame.value.addressBar,
    gameImageSrc: currentGame.value.gameImageSrc,
    gameImageAlt: currentGame.value.gameImageAlt,
  }
})

const loadGame = () => {
  const addressBar = route.params.addressBar
  currentGame.value = gamesList.find((game) => game.addressBar === addressBar)
}

// Dynamic SEO using useHead
useHead(
  computed(() => {
    const canonicalUrl = getCanonicalUrl(route)

    if (currentGame.value && currentGame.value.seo) {
      return {
        title: currentGame.value.seo.title,
        meta: getArticleSeoMeta(
          canonicalUrl,
          currentGame.value.seo,
          currentGame.value.gameImageSrc
        ),
        link: [{ rel: 'canonical', href: canonicalUrl }],
      }
    } else {
      // Fallback for game not found
      return {
        title: 'Game Not Found - Merge Fellas',
        meta: [
          {
            name: 'description',
            content: 'The requested game could not be found on Merge Fellas.',
          },
          { name: 'keywords', content: 'merge fellas, game not found, puzzle games' },
          { name: 'robots', content: 'noindex, nofollow' },
        ],
        link: [{ rel: 'canonical', href: canonicalUrl }],
      }
    }
  })
)

const goBack = () => {
  router.push('/')
}

onMounted(loadGame)
watch(() => route.params.addressBar, loadGame)
</script>

<style scoped>
.game-not-found {
  text-align: center;
  padding: 50px 20px;
}

/* 页面主标题 */
.page-title {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, var(--color-blue-light), var(--color-cyan-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.game-not-found p {
  font-size: 1.1rem;
  color: var(--color-text-gray);
  margin-bottom: 2rem;
}

.back-button {
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.back-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(107, 70, 193, 0.3);
}

.section-title {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin: 0 0 2rem 0;
  background: linear-gradient(135deg, var(--color-primary-light), var(--color-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 热门游戏板块标题 */
.section-title:nth-of-type(2) {
  background: linear-gradient(135deg, var(--color-green-light), var(--color-green-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.about-content {
  width: 100%;
}

/* 左侧文本内容 */
.about-text {
  display: flex;
  flex-direction: column;
}

.main-game-details,
.game-detail-section {
  background: var(--color-card-bg);
  border-radius: 12px;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.main-game-details:hover,
.game-detail-section:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(107, 70, 193, 0.15);
  background: rgba(255, 255, 255, 0.15);
}

/* 右侧视频内容 */
.about-video {
  display: flex;
  flex-direction: column;
}

.video-container {
  background: var(--color-card-bg);
  border-radius: 16px;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  aspect-ratio: 3/2;
}

.video-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(107, 70, 193, 0.15);
}

.video-container iframe {
  border-radius: 12px;
}

/* 视频蒙版样式 */
.video-overlay {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.video-overlay .preview-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

.video-overlay .play-button {
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
}

.video-overlay .play-button:hover {
  transform: scale(1.1);
}

.video-overlay::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
  border-radius: 12px;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .page-title {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  .section-title {
    font-size: 1.8rem;
    margin: 0 0 1rem 0;
  }

  .about-content {
    gap: 1.5rem;
  }

  .main-game-details,
  .game-detail-section {
    padding: 1.2rem;
  }

  .video-container {
    padding: 1.2rem;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }

  .section-title {
    font-size: 1.5rem;
    margin: 0 0 0.5rem 0;
  }

  .about-content {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .main-game-details,
  .game-detail-section {
    padding: 0.5rem;
  }

  .video-container {
    padding: 1rem;
  }

  .video-overlay .play-button svg {
    width: 48px;
    height: 48px;
  }
}
</style> 