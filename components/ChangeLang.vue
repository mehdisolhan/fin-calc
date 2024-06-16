<template>
  <select
    v-model="lang"
    name="language"
    class="cursor-pointer bg-gray-50 dark:bg-gray-800 text-black dark:text-white rounded-lg"
    @change="onChangeLanguage"
  >
    <option v-for="(l, index) in defaultLanguages" :key="index" :value="l.value">
      {{ l.label }}
    </option>
  </select>
</template>
<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const store = useGlobalStore()
const { setItem, getItem } = useLocalStorage()
const lang = ref(store.lang || 'tr')

const defaultLanguages = [
  {
    value: 'tr',
    label: t('turkish')
  },
  {
    value: 'en',
    label: t('english')
  }
]

const onChangeLanguage = () => {
  store.setLanguage(lang.value)
  setItem('lang', lang.value)
}

onMounted(() => {
  if (process.client) {
    const storedLang = getItem('lang')
    if (storedLang) {
      lang.value = storedLang
      store.setLanguage(lang.value)
    } else {
      if (navigator.language?.includes('tr')) {
        lang.value = 'tr'
        store.setLanguage(lang.value)
      }
    }
  }
})
</script>
