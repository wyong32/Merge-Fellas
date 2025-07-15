import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import sitemap from 'vite-plugin-sitemap'
import { getCurrentDomain } from './src/config/site.js'
import { generateSitemapData } from './src/utils/sitemapManager.js'

// 生成所有路由
function getAllRoutes() {
  const sitemapData = generateSitemapData()
  return sitemapData.map(item => new URL(item.url).pathname)
}

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const plugins = [
    vue(),
    vueJsx(),
    vueDevTools(),
  ]

  // 只在生产构建时使用sitemap插件
  if (command === 'build') {
    const hostname = getCurrentDomain()
    console.log(`🌐 构建站点地图使用域名: ${hostname}`)
    
    const sitemapData = generateSitemapData()
    
    plugins.push(
      sitemap({
        hostname,
        generateRobotsTxt: false,
        exclude: ['/404'],
        // 使用我们的sitemap数据配置
        dynamicRoutes: sitemapData.map(item => new URL(item.url).pathname),
        // 添加自定义路由配置
        routes: sitemapData.map(item => ({
          path: new URL(item.url).pathname,
          changefreq: item.changefreq,
          priority: parseFloat(item.priority),
          lastmod: item.lastmod
        }))
      })
    )
  }

  return {
    plugins,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
    // 构建优化
    build: {
      // 启用资源压缩
      minify: 'terser',
      // 生成sourcemap用于调试
      sourcemap: false,
      // 资源目录
      assetsDir: 'assets',
      // Rollup配置优化
      rollupOptions: {
        output: {
          // 手动代码分割，优化缓存
          manualChunks: {
            // 将Vue相关包分离
            'vue-vendor': ['vue', 'vue-router', 'pinia'],
            // 将工具库分离
            'utils': ['@vueuse/head'],
            // 将数据文件分离
            'data': [
              './src/data/gamesList.js',
              './src/data/blogPosts.js',
              './src/data/mainGame.js'
            ]
          },
          // 文件命名优化，添加hash用于缓存
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: (assetInfo) => {
            // 根据文件类型分类存放
            const info = assetInfo.name.split('.')
            const ext = info[info.length - 1]
            if (/\.(png|jpe?g|gif|svg|webp|ico)$/i.test(assetInfo.name)) {
              return 'assets/images/[name]-[hash].[ext]'
            }
            if (/\.(css)$/i.test(assetInfo.name)) {
              return 'assets/css/[name]-[hash].[ext]'
            }
            return 'assets/[ext]/[name]-[hash].[ext]'
          }
        }
      },
      // 设置chunk大小警告阈值
      chunkSizeWarningLimit: 1000,
      // 压缩配置
      terserOptions: {
        compress: {
          // 生产环境移除console
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
  }
})
