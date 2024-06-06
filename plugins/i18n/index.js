import { createI18n } from 'vue-i18n'
import { language } from './language'
import { defineNuxtPlugin } from '#app'
import { useGlobalStore } from '@/stores/global'

export default defineNuxtPlugin((nuxtApp) => {
  const store = useGlobalStore()
  const i18n = createI18n({
    legacy: false,
    locale: store.language,
    fallbackLocale: 'tr',
    messages: language,
    globalInjection: true
  })

  nuxtApp.vueApp.use(i18n)
  nuxtApp.provide('i18n', i18n)
})
