// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Fin-Calc | Hisse Maliyeti Hesaplayıcı',
      htmlAttrs: {
        lang: 'tr'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Fin-Calc, hisse maliyeti hesaplayıcı web uygulaması.' },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'fiyat, hesaplama, hisse, lot, maliyet, ortalama, web uygulaması'
        },
        { name: 'robots', content: 'index, follow' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },

  devtools: { enabled: false },
  plugins: ['~/plugins/i18n/index.js'],
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxtjs/sitemap', '@nuxtjs/robots'],
  css: ['@/assets/css/tailwind.css'],

  site: {
    url: 'https://fin-calcc.vercel.app/'
  },

  robots: {
    groups: [
      {
        userAgent: '*',
        disallow: ''
      }
    ],
    sitemap: 'https://fin-calcc.vercel.app/sitemap.xml'
  },

  compatibilityDate: '2025-03-15'
})
