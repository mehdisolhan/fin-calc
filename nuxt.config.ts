// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  plugins: ['~/plugins/i18n/index.js'],
  modules: ['@nuxt/ui']
})
