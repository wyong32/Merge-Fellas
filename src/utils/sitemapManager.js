import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { gamesList } from '../data/gamesList.js'
import { blogData } from '../data/blogPosts.js'
import { SITE_CONFIG } from '../config/site.js'

// 获取当前文件路径
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 动态获取当前时间
function getCurrentTimestamp() {
  return new Date().toISOString()
}

// 优化的时间戳解析函数
function parseLastModified(dateString, fallback = null) {
  if (!fallback) {
    fallback = getCurrentTimestamp()
  }
  
  if (!dateString) return fallback
  
  try {
    const date = new Date(dateString)
    if (isNaN(date.getTime())) return fallback
    return date.toISOString()
  } catch (error) {
    console.warn(`Invalid date format: ${dateString}, using current time`)
    return fallback
  }
}

// 静态页面配置
function getStaticPages() {
  const currentTime = getCurrentTimestamp()
  
  return [
    {
      path: '/',
      changefreq: 'daily',
      priority: '1.0',
      lastmod: currentTime,
      description: '网站首页 - 最重要的页面'
    },
    {
      path: '/games',
      changefreq: 'daily',
      priority: '0.9',
      lastmod: currentTime,
      description: '游戏列表页面'
    },
    {
      path: '/brainrot-characters',
      changefreq: 'weekly',
      priority: '0.8',
      lastmod: currentTime,
      description: 'Brainrot Characters页面'
    },
    {
      path: '/blog',
      changefreq: 'daily',
      priority: '0.8',
      lastmod: currentTime,
      description: '博客列表页面'
    },
    // Legal页面
    {
      path: '/privacy-policy',
      changefreq: 'yearly',
      priority: '0.3',
      lastmod: currentTime,
      description: '隐私政策'
    },
    {
      path: '/terms-of-service',
      changefreq: 'yearly',
      priority: '0.3',
      lastmod: currentTime,
      description: '服务条款'
    },
    {
      path: '/copyright',
      changefreq: 'yearly',
      priority: '0.3',
      lastmod: currentTime,
      description: '版权信息'
    },
    {
      path: '/about-us',
      changefreq: 'monthly',
      priority: '0.5',
      lastmod: currentTime,
      description: '关于我们'
    },
    {
      path: '/contact-us',
      changefreq: 'monthly',
      priority: '0.5',
      lastmod: currentTime,
      description: '联系我们'
    }
  ]
}

// 生成动态页面数据
function generateDynamicPages() {
  const pages = []
  
  // 游戏详情页面
  gamesList.forEach((game) => {
    const gameDate = parseLastModified(game.time)
    
    pages.push({
      path: `/games/${game.addressBar}`,
      changefreq: 'weekly',
      priority: '0.7',
      lastmod: gameDate,
      description: `${game.title} 游戏详情页`
    })
  })
  
  // 博客页面
  if (blogData && blogData.posts) {
    blogData.posts.forEach((post) => {
      const postDate = parseLastModified(post.date)
      pages.push({
        path: `/blog/${post.addressBar}`,
        changefreq: 'monthly',
        priority: '0.7',
        lastmod: postDate,
        description: `${post.title} 博客文章`
      })
    })
  }
  
  return pages
}

// 站点地图管理器类
class SitemapManager {
  constructor() {
    this.staticPages = getStaticPages()
    this.dynamicPages = generateDynamicPages()
  }

  // 生成完整的站点地图数据
  generateSitemapData(hostname = SITE_CONFIG.DOMAIN) {
    console.log(`📍 正在为域名 ${hostname} 生成站点地图数据...`)
    
    const staticPages = this.staticPages.map(page => ({
      url: `${hostname}${page.path}`,
      lastmod: page.lastmod,
      changefreq: page.changefreq,
      priority: page.priority
    }))
    
    const dynamicPages = this.dynamicPages.map(page => ({
      url: `${hostname}${page.path}`,
      lastmod: page.lastmod,
      changefreq: page.changefreq,
      priority: page.priority
    }))
    
    const allPages = [...staticPages, ...dynamicPages]
    
    console.log(`📊 站点地图统计: 总页面数 ${allPages.length}`)
    
    return allPages
  }
}

// 导出函数
export function generateSitemapData(hostname) {
  const manager = new SitemapManager()
  return manager.generateSitemapData(hostname)
}

export default new SitemapManager() 