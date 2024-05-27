<template>content</template>
<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const columns = [
  {
    key: 'id',
    label: '#'
  },
  {
    key: 'price',
    label: t('price')
  },
  {
    key: 'quantity',
    label: t('lotQuantity')
  },
  {
    key: 'total',
    label: t('total')
  }
]

const rows = [
  {
    id: 1,
    price: 0,
    quantity: 0,
    total: 0
  },
  {
    id: 2,
    price: 0,
    quantity: 0,
    total: 0
  },
  {
    id: 3,
    price: 0,
    quantity: 0,
    total: 0
  },
  {
    id: 4,
    price: 0,
    quantity: 0,
    total: 0
  }
]
const defaultRowCount = 4
</script>
