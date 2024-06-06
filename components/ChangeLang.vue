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
import { useGlobalStore } from '@/stores/global'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const store = useGlobalStore()
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
}
</script>
