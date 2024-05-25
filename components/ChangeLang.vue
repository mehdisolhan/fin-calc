<template>
  <USelect :value="lang" color="white" :options="defaultLanguages" variant="outline" @change="onChangeLanguage">
    <template #leading>
      <UIcon name="i-heroicons-language-solid" class="w-5 h-5" />
    </template>
  </USelect>
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

const onChangeLanguage = (lang) => {
  store.setLanguage(lang)
}
</script>
