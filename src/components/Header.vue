<template>
  <header class="header">
    <div class="header-content">
      <!-- 左侧Logo -->
      <a href="/" class="logo">
        <div class="logo-icon">
          <span class="logo-text">M</span>
          <div class="logo-particles">
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
          </div>
        </div>
        <div class="logo-brand">
          <span class="logo-merge">Merge</span>
          <span class="logo-fellas">Fellas</span>
        </div>
      </a>

      <!-- 桌面端导航菜单 -->
      <nav class="nav-menu desktop-nav">
        <ul class="nav-list">
          <li v-for="item in navItems" :key="item.name" class="nav-item">
            <a :href="item.route" class="nav-link">
              <span class="nav-label">{{ item.name }}</span>
              <div class="nav-glow"></div>
            </a>
          </li>
        </ul>
        <div class="nav-line"></div>
      </nav>

      <!-- 移动端汉堡菜单按钮 -->
      <button
        class="hamburger-btn mobile-only"
        @click="toggleMobileNav"
        :class="{ active: isMobileNavOpen }"
        :aria-label="isMobileNavOpen ? 'Close navigation menu' : 'Open navigation menu'"
        :aria-expanded="isMobileNavOpen"
        aria-controls="mobile-nav"
      >
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
    </div>

    <!-- 移动端导航抽屉 -->
    <div
      id="mobile-nav"
      class="mobile-nav"
      :class="{ open: isMobileNavOpen }"
      role="navigation"
      aria-label="Mobile navigation menu"
    >
      <ul class="mobile-nav-list">
        <li v-for="item in navItems" :key="item.name" class="mobile-nav-item">
          <a :href="item.route" class="mobile-nav-link" @click="closeMobileNav">
            {{ item.name }}
          </a>
        </li>
      </ul>
    </div>

    <!-- 移动端背景遮罩 -->
    <div
      class="mobile-nav-overlay"
      :class="{ open: isMobileNavOpen }"
      @click="closeMobileNav"
    ></div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

// 导航菜单数据
const navItems = ref([
  { name: 'Home', route: '/' },
  { name: 'Games', route: '/games' },
  { name: 'Italian Brainrot Characters', route: '/brainrot-characters' },
  { name: 'Blog', route: '/blog' },
])

// 移动端导航状态
const isMobileNavOpen = ref(false)

const toggleMobileNav = () => {
  isMobileNavOpen.value = !isMobileNavOpen.value
}

const closeMobileNav = () => {
  isMobileNavOpen.value = false
}
</script>

<style scoped>
/* 头部导航栏样式 */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border-bottom: 1px solid rgba(148, 163, 184, 0.1);
  height: 85px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1), 0 1px 0 rgba(255, 255, 255, 0.05) inset;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 85px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Logo样式 */
.logo {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.logo:hover {
  transform: scale(1.03);
}

.logo-icon {
  position: relative;
  width: 60px;
  height: 60px;
  background: linear-gradient(145deg, #6366f1, #8b5cf6, #d946ef);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 15px 35px rgba(99, 102, 241, 0.3), 0 5px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.logo-text {
  font-size: 28px;
  font-weight: 900;
  color: white;
  z-index: 2;
  position: relative;
}

.logo-particles {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.particle {
  position: absolute;
  width: 3px;
  height: 3px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  animation: float 3s ease-in-out infinite;
}

.particle:nth-child(1) {
  top: 20%;
  left: 20%;
  animation-delay: 0s;
}

.particle:nth-child(2) {
  top: 60%;
  right: 20%;
  animation-delay: 1s;
}

.particle:nth-child(3) {
  bottom: 20%;
  left: 60%;
  animation-delay: 2s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) scale(1);
    opacity: 0.6;
  }
  50% {
    transform: translateY(-10px) scale(1.2);
    opacity: 1;
  }
}

.logo-brand {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.3rem;
  font-family: 'Inter', 'Segoe UI', sans-serif;
  font-weight: 800;
  line-height: 1;
  white-space: nowrap;
}

.logo-merge {
  font-size: 1.4rem;
  color: #6366f1;
  text-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
}

.logo-fellas {
  font-size: 1.4rem;
  color: #8b5cf6;
  text-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
}

/* 桌面端导航菜单样式 */
.desktop-nav {
  position: relative;
}

.nav-list {
  display: flex;
  align-items: center;
  list-style: none;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
}

.nav-item {
  margin: 0;
}

.nav-link {
  position: relative;
  display: block;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.8rem 1.2rem;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  overflow: hidden;
}

.nav-label {
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;
}

.nav-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%);
  border-radius: 12px;
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(99, 102, 241, 0.2);
}

.nav-link:hover {
  color: white;
  transform: translateY(-1px);
}

.nav-link:hover .nav-glow {
  opacity: 1;
  transform: scale(1);
}

.nav-link:hover .nav-label {
  transform: scale(1.02);
}

.nav-link.router-link-active {
  color: white;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.25) 0%, rgba(139, 92, 246, 0.25) 100%);
  border: 1px solid rgba(99, 102, 241, 0.3);
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.2), 0 3px 10px rgba(0, 0, 0, 0.1);
}

.nav-line {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, transparent 0%, rgba(99, 102, 241, 0.8) 50%, transparent 100%);
  border-radius: 1px;
}

/* 汉堡菜单按钮 */
.hamburger-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  gap: 4px;
}

.hamburger-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(99, 102, 241, 0.4);
}

.hamburger-line {
  width: 20px;
  height: 2px;
  background: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
  border-radius: 1px;
}

.hamburger-btn.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(4px, 4px);
}

.hamburger-btn.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.hamburger-btn.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(4px, -4px);
}

/* 移动端导航抽屉 */
.mobile-nav {
  position: fixed;
  top: 85px;
  right: -100%;
  width: 280px;
  height: calc(100vh - 85px);
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.98) 0%, rgba(30, 41, 59, 0.98) 100%);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border-left: 1px solid rgba(148, 163, 184, 0.1);
  transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow-y: auto;
  z-index: 999;
}

.mobile-nav.open {
  right: 0;
}

.mobile-nav-list {
  list-style: none;
  margin: 0;
  padding: 2rem 0;
}

.mobile-nav-item {
  margin-bottom: 0.5rem;
}

.mobile-nav-link {
  display: block;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1rem 2rem;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
}

.mobile-nav-link:hover {
  color: white;
  background: rgba(99, 102, 241, 0.1);
  border-left-color: #6366f1;
}

.mobile-nav-link.router-link-active {
  color: white;
  background: rgba(99, 102, 241, 0.2);
  border-left-color: #6366f1;
}

/* 移动端背景遮罩 */
.mobile-nav-overlay {
  position: fixed;
  top: 85px;
  left: 0;
  width: 100%;
  height: calc(100vh - 85px);
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s ease;
  z-index: 998;
}

.mobile-nav-overlay.open {
  opacity: 1;
  visibility: visible;
}

/* 响应式显示控制 */
.mobile-only {
  display: none;
}

/* 平板端样式 */
@media (max-width: 1024px) {
  .header-content {
    padding: 0 1.5rem;
  }

  .nav-link {
    font-size: 0.8rem;
    padding: 0.6rem 0.8rem;
  }
}

/* 移动端样式 */
@media (max-width: 768px) {
  .header {
    height: 70px;
  }

  .header-content {
    height: 70px;
    padding: 0 1rem;
  }

  .logo {
    gap: 0.6rem;
  }

  .logo-icon {
    width: 45px;
    height: 45px;
  }

  .logo-text {
    font-size: 20px;
  }

  .logo-merge,
  .logo-fellas {
    font-size: 1.1rem;
  }

  .desktop-nav {
    display: none;
  }

  .mobile-only {
    display: flex;
  }

  .mobile-nav {
    top: 70px;
    height: calc(100vh - 70px);
  }

  .mobile-nav-overlay {
    top: 70px;
    height: calc(100vh - 70px);
  }
}

@media (max-width: 480px) {
  .logo {
    gap: 0.4rem;
  }

  .logo-icon {
    width: 40px;
    height: 40px;
  }

  .logo-text {
    font-size: 18px;
  }

  .logo-brand {
    gap: 0.2rem;
  }

  .logo-merge,
  .logo-fellas {
    font-size: 0.9rem;
  }

  .mobile-nav {
    width: 100%;
    right: -100%;
  }

  .mobile-nav.open {
    right: 0;
  }
}
</style> 