<template>
  <!-- 主英雄区域 -->
  <section class="hero-section">
    <!-- 三栏布局 -->
    <div class="hero-content" :class="{ 'mobile-layout': isMobile }">
      <!-- 左侧游戏列表：仅在桌面端显示 -->
      <div v-if="!isMobile" class="games-sidebar left-games">
        <div
          v-for="game in leftGames"
          :key="game.title"
          class="game-item"
          @click="handleGameClick(game)"
        >
          <img
            :src="game.gameImageSrc"
            :alt="game.gameImageAlt"
            class="game-thumbnail"
            loading="lazy"
            decoding="async"
          />
          <div class="game-info">
            <span class="game-name">{{ game.title }}</span>
          </div>
        </div>
      </div>

      <!-- 中央iframe区域 -->
      <div class="main-game-area">
        <div class="game-view-container" :class="{ 'web-fullscreen': isWebFullscreen }">
          <div ref="gameAreaRef" class="iframe-container">
            <!-- 蒙版层 -->
            <div
              v-if="!gameLoaded"
              class="iframe-overlay"
              :style="{ backgroundImage: `url(${mainGame.gameImageSrc})` }"
              @click="loadGame"
            >
              <div class="play-content">
                <img
                  :src="mainGame.gameImageSrc"
                  :alt="mainGame.gameImageAlt"
                  class="play-poster-thumb"
                />
                <div class="play-button">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.647c1.295.746 1.295 2.54 0 3.286L7.279 20.99c-1.25.72-2.779-.217-2.779-1.643V5.653z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="play-text">PLAY</span>
                </div>
              </div>
              <img
                :src="mainGame.gameImageSrc"
                :alt="mainGame.gameImageAlt"
                class="preview-image"
              />
            </div>
            <!-- 实际iframe -->
            <iframe
              v-if="gameLoaded"
              :src="mainGame.iframeUrl"
              :title="mainGame.title"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              scrolling="no"
              width="100%"
              height="100%"
            ></iframe>
          </div>
          <!-- 游戏操作栏 -->
          <div class="game-controls">
            <span class="game-title">{{ mainGame.title }}</span>
            <div class="control-buttons">
              <button
                @click="toggleWebFullscreen"
                :title="isWebFullscreen ? 'Exit Theater Mode' : 'Theater Mode'"
              >
                <svg
                  v-if="!isWebFullscreen"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
                  ></path>
                </svg>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"
                  ></path>
                </svg>
              </button>
              <button
                @click="toggleNativeFullscreen"
                :title="isNativeFullscreen ? 'Exit Fullscreen' : 'Fullscreen'"
              >
                <svg
                  v-if="!isNativeFullscreen"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <polyline points="9 21 3 21 3 15"></polyline>
                  <line x1="21" y1="3" x2="14" y2="10"></line>
                  <line x1="3" y1="21" x2="10" y2="14"></line>
                </svg>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="4 14 10 14 10 20"></polyline>
                  <polyline points="20 10 14 10 14 4"></polyline>
                  <line x1="14" y1="10" x2="21" y2="3"></line>
                  <line x1="3" y1="21" x2="10" y2="14"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧游戏列表：仅在桌面端显示 -->
      <div v-if="!isMobile" class="games-sidebar right-games">
        <div
          v-for="game in rightGames"
          :key="game.title"
          class="game-item"
          @click="handleGameClick(game)"
        >
          <img
            :src="game.gameImageSrc"
            :alt="game.gameImageAlt"
            class="game-thumbnail"
            loading="lazy"
            decoding="async"
          />
          <div class="game-info">
            <span class="game-name">{{ game.title }}</span>
          </div>
        </div>
      </div>

      <!-- 移动端游戏列表：仅在移动端显示 -->
      <div v-if="isMobile" class="mobile-games-section">
        <h2 class="mobile-games-title">More Games</h2>
        <div class="mobile-games-container">
          <div
            v-for="game in mobileGames"
            :key="game.title"
            class="mobile-game-item"
            @click="handleGameClick(game)"
          >
            <img
              :src="game.gameImageSrc"
              :alt="game.gameImageAlt"
              class="mobile-game-thumbnail"
              loading="lazy"
              decoding="async"
            />
            <h4 class="mobile-game-name">{{ game.title }}</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mainGame, gamesList } from '@/data'
import { useDeviceDetection } from '@/utils/useDeviceDetection'

export default {
  name: 'GameBoard',
  props: {
    currentMainGame: {
      type: Object,
      default: () => mainGame,
    },
  },
  setup() {
    const { isMobile } = useDeviceDetection()
    return { isMobile }
  },
  data() {
    return {
      gamesList,
      gameLoaded: false,
      isWebFullscreen: false,
      isNativeFullscreen: false,
    }
  },
  computed: {
    mainGame() {
      return this.currentMainGame
    },
    leftGames() {
      return this.gamesList.filter((game) => game.position === 'left')
    },
    rightGames() {
      return this.gamesList.filter((game) => game.position === 'right')
    },
    // 移动端合并所有游戏列表
    mobileGames() {
      return this.gamesList.filter((game) => game.position === 'left' || game.position === 'right')
    },
  },
  methods: {
    handleGameClick(game) {
      this.$router.push(`/games/${game.addressBar}`)
    },
    loadGame() {
      this.gameLoaded = true
    },
    toggleWebFullscreen() {
      this.isWebFullscreen = !this.isWebFullscreen
      // When entering web fullscreen, ensure body scrolling is disabled
      document.body.style.overflow = this.isWebFullscreen ? 'hidden' : ''
    },
    toggleNativeFullscreen() {
      if (!document.fullscreenElement) {
        this.$refs.gameAreaRef?.requestFullscreen().catch((err) => {
          console.error(`全屏模式启动失败: ${err.message} (${err.name})`)
        })
      } else {
        document.exitFullscreen()
      }
    },
    onFullscreenChange() {
      this.isNativeFullscreen = !!document.fullscreenElement
    },
  },
  mounted() {
    document.addEventListener('fullscreenchange', this.onFullscreenChange)
  },
  unmounted() {
    document.removeEventListener('fullscreenchange', this.onFullscreenChange)
    // Ensure we clean up body style if component is unmounted while in web fullscreen
    if (this.isWebFullscreen) {
      document.body.style.overflow = ''
    }
  },
  watch: {
    currentMainGame() {
      this.gameLoaded = false
    },
  },
}
</script>

<style scoped>
/* 主英雄区域样式 */
.hero-section {
  margin-bottom: 2rem;
}

/* 三栏布局样式 */
.hero-content {
  display: grid;
  gap: 1rem;
  align-items: start;
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(236, 72, 153, 0.2);
  box-shadow: 0 8px 32px rgba(236, 72, 153, 0.15);
}

/* 桌面端三栏布局 */
.hero-content:not(.mobile-layout) {
  grid-template-columns: 200px 1fr 200px;
}

/* 移动端单栏布局 */
.hero-content.mobile-layout {
  grid-template-columns: 1fr;
  padding: 0.5rem;
  border-radius: 10px;
}

/* 左右侧游戏列表样式 */
.games-sidebar {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
}

.game-item {
  background: var(--color-card-bg);
  border-radius: 12px;
  padding: 0.5rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(6, 182, 212, 0.2);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.game-item:hover {
  transform: translateY(-3px);
  background: var(--color-blue-hover);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
  border-color: var(--color-cyan-light);
}

.game-item:hover .game-info {
  opacity: 1;
  visibility: visible;
}

.game-thumbnail {
  width: 100%;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
}

.game-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 100%);
  padding: 0.5rem;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.game-name {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-text-light);
}

/* 中央iframe区域样式 */
.main-game-area {
  display: flex;
  width: 100%;
  font-size: 0;
}

.game-view-container {
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%);
  padding: 1rem 1rem 0 1rem;
  border-radius: 16px;
  border: 1px solid rgba(168, 85, 247, 0.3);
  box-shadow: 0 10px 40px rgba(168, 85, 247, 0.2);
  width: 100%;
}

.game-view-container.web-fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background: #000;
  padding: 1rem;
  border-radius: 0;
  border: none;
}

.game-view-container.web-fullscreen .iframe-container {
  flex-grow: 1;
  height: 0;
  border-radius: 1rem;
  overflow: hidden;
}

.iframe-container {
  position: relative;
  width: 100%;
  aspect-ratio: 16/11;
  background-color: #f0f0f0;
  border-radius: 1rem;
  overflow: hidden;
  z-index: 1;
}

.iframe-container iframe {
  width: 100%;
  height: 100%;
  border-radius: 12px;
}

/* iframe蒙版样式 */
.iframe-overlay {
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

.iframe-overlay .preview-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

.iframe-overlay .play-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.iframe-overlay .play-poster-thumb {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 1.25rem;
  border: 3px solid white;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  background-color: #000;
}

.iframe-overlay .play-button {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: var(--color-green);
  border: 2px solid white;
  border-radius: 9999px;
  color: white;
  padding: 0.75rem 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.iframe-overlay .play-button svg {
  width: 30px;
  height: 30px;
  transition: transform 0.3s ease;
}

.iframe-overlay .play-button:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
}

.iframe-overlay .play-button:hover svg {
  transform: scale(1.1);
}

.iframe-overlay .play-text {
  font-size: 1.2rem;
}

.iframe-overlay::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 1;
  border-radius: 12px;
}

/* 游戏操作栏样式 */
.game-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  color: var(--color-text-light);
}

.game-title {
  font-size: 1.1rem;
  font-weight: 600;
}

.control-buttons {
  display: flex;
  gap: 0.5rem;
}

.control-buttons button {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(168, 85, 247, 0.3);
  color: var(--color-text-light);
  border-radius: 0.75rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.control-buttons button:hover {
  background: rgba(168, 85, 247, 0.2);
  border-color: rgba(168, 85, 247, 0.5);
  transform: scale(1.05);
}

/* 移动端游戏列表样式 */
.mobile-games-section {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(236, 72, 153, 0.2);
  box-shadow: 0 8px 32px rgba(236, 72, 153, 0.15);
  padding: 0.5rem;
}

.mobile-games-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text-light);
  margin-bottom: 0.5rem;
  text-align: center;
  background: linear-gradient(135deg, var(--color-blue-light), var(--color-cyan-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.mobile-games-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 0.5rem 0;
}

.mobile-game-item {
  background: var(--color-card-bg);
  border-radius: 10px;
  padding: 0.5rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(6, 182, 212, 0.2);
  cursor: pointer;
  text-align: center;
}

.mobile-game-item:hover {
  transform: translateY(-3px);
  background: var(--color-blue-hover);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
  border-color: var(--color-cyan-light);
}

.mobile-game-thumbnail {
  width: 100%;
  height: 80px;
  border-radius: 5px;
  object-fit: cover;
}

.mobile-game-name {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-text-light);
  margin: 0;
  line-height: 1.2;
}

/* 平板端响应式 */
@media (max-width: 1024px) {
  .hero-content:not(.mobile-layout) {
    grid-template-columns: 150px 1fr 150px;
    gap: 0.8rem;
    padding: 0.8rem;
  }

  .games-sidebar {
    grid-template-columns: 1fr;
    gap: 0.4rem;
  }

  .game-thumbnail {
    height: 60px;
  }

  .game-name {
    font-size: 0.75rem;
  }

  .game-view-container {
    padding: 0.8rem 0.8rem 0 0.8rem;
  }

  .game-title {
    font-size: 1rem;
  }

  .control-buttons button {
    width: 36px;
    height: 36px;
  }
}

@media (max-width: 768px) {
  .iframe-container {
    aspect-ratio: 2/3;
  }
}
/* 移动端样式优化 */
.mobile-layout .hero-section {
  margin-bottom: 0;
}

.mobile-layout .mobile-games-container {
  grid-template-columns: repeat(2, 1fr);
  gap: 0.8rem;
}

.mobile-layout .mobile-game-name {
  font-size: 0.7rem;
}

.mobile-layout .game-view-container {
  padding: 0.6rem 0.6rem 0 0.6rem;
}

.mobile-layout .game-title {
  font-size: 0.9rem;
}

.mobile-layout .control-buttons button {
  width: 32px;
  height: 32px;
}

.mobile-layout .control-buttons button svg {
  width: 16px;
  height: 16px;
}

.mobile-layout .iframe-overlay .play-poster-thumb {
  width: 120px;
  height: 120px;
  border-radius: 1rem;
  border: 2px solid white;
}

.mobile-layout .iframe-overlay .play-content {
  gap: 1rem;
}

.mobile-layout .iframe-overlay .play-button {
  padding: 0.6rem 1.5rem;
  font-size: 1rem;
  gap: 0.5rem;
}

.mobile-layout .iframe-overlay .play-button svg {
  width: 24px;
  height: 24px;
}

.mobile-layout .iframe-overlay .play-text {
  font-size: 1rem;
}
</style> 