<template>
  <div class="page-container">
    <!-- 头部导航栏 -->
    <Header />

    <!-- 主内容区域 -->
    <main class="main-content">
      <div class="container">
        <!-- PC横幅广告 -->
        <aside
          class="ads-wrapper"
          v-if="!isMobile"
          style="width: 100%; min-height: 90px; margin: 10px 0"
        >
          <ins
            class="adsbygoogle"
            style="display: block; min-height: 90px; margin: 10px 0; width: 100%"
            data-ad-client="ca-pub-8698738517703947"
            data-ad-slot="4266230179"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </aside>

        <!-- 移动横幅广告 -->
        <aside
          class="ads-wrapper"
          v-if="isMobile"
          style="width: 100%; min-height: 90px; margin: 10px 0"
        >
          <ins
            class="adsbygoogle"
            style="display: block"
            data-ad-client="ca-pub-8698738517703947"
            data-ad-slot="7116604857"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </aside>

        <h1 class="page-title">Start Merge Fellas</h1>
        <div class="content-area">
          <!-- 游戏板块组件 -->
          <GameBoard />
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
              <!-- 视频（如果有的话） -->
              <div v-if="mainGame.videoSrc" class="about-video">
                <div class="video-container">
                  <!-- 视频蒙版层 -->
                  <div
                    v-if="!videoLoaded"
                    class="video-overlay"
                    :style="{ backgroundImage: `url(${mainGame.videoImageSrc})` }"
                    @click="loadVideo"
                  >
                    <div class="play-button">
                      <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" fill="rgba(255,255,255,0.9)" />
                        <polygon points="10,8 16,12 10,16" fill="rgba(16,185,129,1)" />
                      </svg>
                    </div>
                    <img
                      :src="mainGame.videoImageSrc"
                      :alt="mainGame.videoImageAlt"
                      class="preview-image"
                    />
                  </div>
                  <!-- 实际视频iframe -->
                  <iframe
                    v-if="videoLoaded"
                    :src="mainGame.videoSrc"
                    frameborder="0"
                    allow="autoplay; picture-in-picture"
                    width="100%"
                    height="100%"
                  ></iframe>
                </div>
              </div>

              <!-- 文字内容 -->
              <div class="about-text">
                <div v-html="mainGame.detailsHtml" class="main-game-details content-wrapper"></div>
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
import { ref, onMounted, onUnmounted, watchEffect } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import GameBoard from '@/components/GameBoard.vue'
import HotGames from '@/components/HotGames.vue'
import { mainGame } from '@/data'

import { useDeviceDetection } from '@/utils/useDeviceDetection.js'

const videoLoaded = ref(false)
const { isMobile } = useDeviceDetection()

// 手动触发广告加载
const loadAds = () => {
  if (window.adsbygoogle && typeof window.adsbygoogle.push === 'function') {
    try {
      // 只处理当前页面中的广告元素
      const homeContainer = document.querySelector('.page-wrapper')
      if (!homeContainer) return

      const adElements = homeContainer.querySelectorAll('.adsbygoogle')

      // 检查哪些广告需要重新加载
      const adsToReload = []
      adElements.forEach((el, index) => {
        const status = el.getAttribute('data-ad-status')
        const hasContent = el.children.length > 0

        if (!status || status === 'unfilled' || !hasContent) {
          adsToReload.push({ element: el, index })
        }
      })

      if (adsToReload.length === 0) {
        return
      }

      adsToReload.forEach(({ element, index }) => {
        try {
          // 标记广告元素已处理
          element.setAttribute('data-ad-status', 'loading')
          ;(window.adsbygoogle = window.adsbygoogle || []).push({})
        } catch (pushError) {
          // 忽略重复加载错误
          if (!pushError.message.includes('already have ads')) {
            console.error('HomeView广告加载失败:', pushError)
          }
          // 移除标记，允许重试
          element.removeAttribute('data-ad-status')
        }
      })
    } catch (e) {
      console.error('HomeView广告加载失败:', e)
    }
  } else {
    // 如果 adsbygoogle 还没加载，延迟重试
    setTimeout(loadAds, 1000)
  }
}

// 监听广告脚本加载完成
const waitForAdScript = () => {
  if (window.adsbygoogle) {
    // 延迟加载广告，确保页面完全渲染
    setTimeout(loadAds, 3000)
  } else {
    setTimeout(waitForAdScript, 100)
  }
}

// 监听页面可见性变化，重新加载广告
const handleVisibilityChange = () => {
  if (!document.hidden) {
    setTimeout(loadAds, 1000)
  }
}

onMounted(() => {
  // 等待广告脚本加载完成后立即加载广告
  waitForAdScript()

  // 监听页面可见性变化
  document.addEventListener('visibilitychange', handleVisibilityChange)

  // 监听路由变化
  const unwatch = watchEffect(() => {
    setTimeout(loadAds, 2000)
  })

  // 清理监听器
  onUnmounted(() => {
    document.removeEventListener('visibilitychange', handleVisibilityChange)
    unwatch()
  })
})

const loadVideo = () => {
  videoLoaded.value = true
}
</script>

<style scoped>
/* 页面主标题 */
.page-title {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 4s ease-in-out infinite;
}

@keyframes gradientShift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
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
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* 文本内容 */
.about-text {
  display: flex;
  flex-direction: column;
  width: 100%;
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

/* 视频内容 */
.about-video {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.video-container {
  background: var(--color-card-bg);
  border-radius: 16px;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  aspect-ratio: 16/9;
  width: 800px;
  margin: 0 auto;
}

.video-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(107, 70, 193, 0.15);
}

.video-container iframe {
  border-radius: 12px;
  width: 100%;
  height: 100%;
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

/* v-html内容现在使用公用的content.css样式 */

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