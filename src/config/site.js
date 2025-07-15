// Website Basic Configuration
export const SITE_CONFIG = {
  DOMAIN: 'https://your-domain.com', // TODO: Replace with actual domain
  NAME: 'Merge Fellas',
  TITLE: 'Merge Fellas - The Ultimate Merge Puzzle Game',
  DESCRIPTION: 'Experience Merge Fellas, the most popular merge puzzle game! Free online game, no download required, play on mobile and desktop.',
  KEYWORDS: 'Merge Fellas, merge game, free game, online game, puzzle game, casual game',
  DEFAULT_OG_IMAGE: '/images/og-default.webp',
  TWITTER_HANDLE: '@mergefellas',
  
  // SEO Default Configuration
  SOCIAL: {
    TWITTER_CARD_TYPE: 'summary_large_image',
    OG_TYPE_WEBSITE: 'website',
    OG_TYPE_ARTICLE: 'article'
  }
}

// Get current domain
export function getCurrentDomain() {
  return SITE_CONFIG.DOMAIN
}

// Utility function: generate full URL
export function getFullUrl(path = '') {
  return `${SITE_CONFIG.DOMAIN}${path}`
}

// Utility function: generate canonical URL
export function getCanonicalUrl(route) {
  return getFullUrl(route.fullPath)
}

// Utility function: generate default SEO meta tags
export function getDefaultSeoMeta(canonicalUrl, title = null, description = null) {
  const finalTitle = title || SITE_CONFIG.TITLE
  const finalDescription = description || SITE_CONFIG.DESCRIPTION
  
  return [
    { name: 'description', content: finalDescription },
    { name: 'keywords', content: SITE_CONFIG.KEYWORDS },
    { name: 'author', content: SITE_CONFIG.NAME },
    { name: 'robots', content: 'index, follow' },
    // Open Graph
    { property: 'og:title', content: finalTitle },
    { property: 'og:description', content: finalDescription },
    { property: 'og:url', content: canonicalUrl },
    { property: 'og:type', content: SITE_CONFIG.SOCIAL.OG_TYPE_WEBSITE },
    { property: 'og:site_name', content: SITE_CONFIG.NAME },
    { property: 'og:image', content: getFullUrl(SITE_CONFIG.DEFAULT_OG_IMAGE) },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:type', content: 'image/webp' },
    // Twitter Card
    { name: 'twitter:card', content: SITE_CONFIG.SOCIAL.TWITTER_CARD_TYPE },
    { name: 'twitter:title', content: finalTitle },
    { name: 'twitter:description', content: finalDescription },
    { name: 'twitter:image', content: getFullUrl(SITE_CONFIG.DEFAULT_OG_IMAGE) },
    { name: 'twitter:site', content: SITE_CONFIG.TWITTER_HANDLE },
  ]
}

// Utility function: generate article type SEO meta tags
export function getArticleSeoMeta(canonicalUrl, seo, imageUrl = null, publishedTime = null) {
  const meta = [
    { name: 'description', content: seo.description },
    { name: 'keywords', content: seo.keywords },
    { name: 'author', content: SITE_CONFIG.NAME },
    { name: 'robots', content: 'index, follow' },
    // Open Graph
    { property: 'og:title', content: seo.title },
    { property: 'og:description', content: seo.description },
    { property: 'og:url', content: canonicalUrl },
    { property: 'og:type', content: SITE_CONFIG.SOCIAL.OG_TYPE_ARTICLE },
    { property: 'og:site_name', content: SITE_CONFIG.NAME },
    { property: 'og:locale', content: 'en_US' },
    // Twitter Card
    { name: 'twitter:card', content: SITE_CONFIG.SOCIAL.TWITTER_CARD_TYPE },
    { name: 'twitter:title', content: seo.title },
    { name: 'twitter:description', content: seo.description },
    { name: 'twitter:site', content: SITE_CONFIG.TWITTER_HANDLE },
  ]
  
  // Add image information
  const finalImageUrl = imageUrl || SITE_CONFIG.DEFAULT_OG_IMAGE
  if (finalImageUrl) {
    const fullImageUrl = finalImageUrl.startsWith('http') ? finalImageUrl : getFullUrl(finalImageUrl)
    meta.push(
      { property: 'og:image', content: fullImageUrl },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:type', content: 'image/webp' },
      { name: 'twitter:image', content: fullImageUrl }
    )
  }
  
  // Add published time
  if (publishedTime) {
    meta.push({ property: 'article:published_time', content: publishedTime })
  }
  
  return meta
} 