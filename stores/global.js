import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', () => {
  const language = ref('tr')
  const currency = ref({ value: 'try', label: 'TRY', icon: '₺' })

  const currencyIcon = computed(() => currency.value.icon)

  function setLanguage(payload) {
    const { $i18n } = useNuxtApp()
    $i18n.global.locale.value = payload
    language.value = payload
  }

  function setCurrency(payload) {
    currency.value = payload
  }

  return {
    language,
    currency,
    currencyIcon,
    setLanguage,
    setCurrency
  }
})
