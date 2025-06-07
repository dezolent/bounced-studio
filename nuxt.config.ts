// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],
  css: ['~/assets/css/main.css'],
  imports: {
    exclude: ['validate']
  },
  runtimeConfig: {
    public: {
      shopifyStoreName: process.env.SHOPIFY_STORE_NAME || '8rtkam-zq.myshopify.com',
      shopifyAccessToken: process.env.SHOPIFY_ACCESS_TOKEN || '277303736711d63bedea37710b392030'
    }
  },
  app: {
    head: {
      title: 'Bounced - Music Producer Streetwear',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Premium streetwear for music producers. Elevate your style with Bounced.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap' }
      ]
    }
  },
  nitro: {
    prerender: {
      routes: ['/products']
    }
  }
})