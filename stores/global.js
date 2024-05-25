import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', () => {
  const language = ref('tr')

  function setLanguage(payload) {
    const { $i18n } = useNuxtApp()
    $i18n.global.locale.value = payload
    language.value = payload
  }

  return {
    language,
    setLanguage
  }
})
