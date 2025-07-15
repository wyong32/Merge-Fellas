import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // 如果有保存的位置（浏览器前进/后退），返回保存的位置
    if (savedPosition) {
      return savedPosition
    }
    // 对于所有新的路由跳转，滚动到页面顶部
    return { top: 0, behavior: 'smooth' }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        seo: {
          title: 'Merge Fellas: The Ultimate Character Evolution Game',
          description: 'Tap to descend into pure chaos! Brainrot Clicker is an idle game where you generate absurd memes, unlock upgrades, and build an empire of internet absurdity.',
          keywords: 'Merge Fellas, merge game, evolution game, character game, free online game'
        }
      }
    },
    {
      path: '/games/:addressBar',
      name: 'game-detail',
      component: () => import('../views/GameDetailView.vue'),
    },
    {
      path: '/games',
      name: 'games',
      component: () => import('../views/GamesView.vue'),
      meta: {
        seo: {
          title: 'All Games - Merge Fellas Game Collection | Free Online Games',
          description: 'Discover more exciting merge games! Merge Fellas game collection includes various fun brain rot games, all free to play online.',
          keywords: 'merge games collection, free games, online games, brain rot games, casual games collection'
        }
      }
    },
    {
      path: '/brainrot-characters',
      name: 'brainrot-characters',
      component: () => import('../views/BrainrotCharactersView.vue'),
      meta: {
        seo: {
          title: 'Brainrot Characters - Meet the Meme Icons | Merge Fellas',
          description: 'Discover iconic brainrot characters! Meet Cappuccino Assassino, Trippi Troppi, and other legendary meme personalities in our character gallery.',
          keywords: 'brainrot characters, meme characters, Cappuccino Assassino, Trippi Troppi, character gallery, meme icons'
        }
      }
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue'),
      meta: {
        seo: {
          title: 'Blog - Merge Fellas Game Guides and News | Merge Game Tips',
          description: 'Merge Fellas official blog provides game guides, tips sharing and latest news. Learn merge game strategies and gameplay.',
          keywords: 'Merge Fellas blog, game guides, merge game tips, game news, strategy guides, gameplay tips'
        }
      }
    },
    {
      path: '/blog/:slug',
      name: 'blog-detail',
      component: () => import('../views/BlogDetailView.vue'),
    },
    // Legal Pages
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: () => import('../views/PrivacyPolicyView.vue'),
      meta: {
        seo: {
          title: 'Privacy Policy - Merge Fellas | Data Protection & User Privacy',
          description: 'Read our comprehensive privacy policy to understand how Merge Fellas protects and handles your personal information and data.',
          keywords: 'privacy policy, data protection, user privacy, personal information, Merge Fellas, GDPR compliance'
        }
      }
    },
    {
      path: '/terms-of-service',
      name: 'terms-of-service',
      component: () => import('../views/TermsOfServiceView.vue'),
      meta: {
        seo: {
          title: 'Terms of Service - Merge Fellas | User Agreement & Service Rules',
          description: 'Read our terms of service to understand the rules and guidelines for using Merge Fellas games and services.',
          keywords: 'terms of service, user agreement, service rules, legal terms, Merge Fellas, user responsibilities'
        }
      }
    },
    {
      path: '/copyright',
      name: 'copyright',
      component: () => import('../views/CopyrightView.vue'),
      meta: {
        seo: {
          title: 'Copyright Information - Merge Fellas | Intellectual Property Rights',
          description: 'Learn about copyright and intellectual property rights for Merge Fellas games and content. Information about usage rights and restrictions.',
          keywords: 'copyright, intellectual property, trademark, DMCA, usage rights, Merge Fellas, licensing'
        }
      }
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: () => import('../views/AboutUsView.vue'),
      meta: {
        seo: {
          title: 'About Us - Merge Fellas | Our Story & Mission',
          description: 'Learn about Merge Fellas team, our mission to create amazing puzzle games, and our commitment to providing the best gaming experience.',
          keywords: 'about us, Merge Fellas team, mission, puzzle games, game development, free games, gaming community'
        }
      }
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: () => import('../views/ContactUsView.vue'),
      meta: {
        seo: {
          title: 'Contact Us - Merge Fellas | Get In Touch',
          description: 'Contact the Merge Fellas team for support, feedback, or inquiries about our merge puzzle games.',
          keywords: 'contact us, support, feedback, Merge Fellas, help, inquiry'
        }
      }
    }
  ],
})

export default router
