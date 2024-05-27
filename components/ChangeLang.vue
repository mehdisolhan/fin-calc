<template>lang</template>
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

const onChangeLanguage = (lang) => {
  store.setLanguage(lang)
}
</script>
