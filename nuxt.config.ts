// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/seo',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/google-analytics'
  ],

  // Runtime config for environment variables
  runtimeConfig: {
    public: {
      googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID || '',
      siteUrl: process.env.SITE_URL || 'https://boniface-mwangi.com',
      siteName: 'Boniface Mwangi Campaign',
      siteDescription: 'Join Boniface Mwangi in building a better Kenya. Every voice matters, every action counts.',
    }
  },

  // SEO Configuration
  seo: {
    redirectToCanonicalSiteUrl: true,
  },

  site: {
    url: 'https://boniface-mwangi.com',
    name: 'Boniface Mwangi Campaign',
    description: 'Join Boniface Mwangi in building a better Kenya. Every voice matters, every action counts.',
    defaultLocale: 'en-KE',
  },

  // Sitemap configuration
  sitemap: {
    sources: [
      '/api/__sitemap__/urls'
    ]
  },

  // Google Analytics
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID || '',
    config: {
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure',
    }
  },

  // App configuration
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Boniface Mwangi Campaign',
      meta: [
        { name: 'description', content: 'Join Boniface Mwangi in building a better Kenya. Every voice matters, every action counts.' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#0B0B0D' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Boniface Mwangi Campaign' },
        { property: 'og:locale', content: 'en_KE' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@bonifacemwangi' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      ]
    }
  },

  // CSS
  css: ['~/assets/css/main.css'],

  // Build configuration
  build: {
    transpile: ['@tanstack/vue-virtual']
  },

  // Nitro configuration for deployment
  nitro: {
    preset: 'static',
    prerender: {
      routes: ['/sitemap.xml', '/robots.txt']
    }
  },

  // TypeScript configuration
  typescript: {
    strict: true,
    typeCheck: true
  },

  // Performance optimizations
  experimental: {
    payloadExtraction: false,
    inlineSSRStyles: false
  }
})
