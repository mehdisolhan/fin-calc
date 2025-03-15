<template>
  <input
    :value="row.displayedPrice"
    type="text"
    class="w-full p-2 border border-gray-300 rounded-md text-black"
    placeholder="0.00"
    @input="(e) => handleInput(e, row)"
    @focus="() => handleFocus(row)"
    @blur="() => handleBlur(row)"
  />
</template>
<script setup>
import { useI18n } from 'vue-i18n'
import { useGlobalStore } from '@/stores/global'

const store = useGlobalStore()
const { n } = useI18n()

const emits = defineEmits(['calculate-row-total'])
const row = defineModel({
  type: Object,
  default: () => ({})
})

const handleInput = (e, row) => {
  let rawValue = e.target.value
  rawValue = rawValue.replace(/,/g, '.')

  const firstDotIndex = rawValue.indexOf('.')

  if (firstDotIndex !== -1) {
    const beforeDot = rawValue.slice(0, firstDotIndex + 1)
    const afterDot = rawValue.slice(firstDotIndex + 1).replace(/\./g, '')
    rawValue = beforeDot + afterDot
  }

  rawValue = rawValue.replace(/[^0-9.]/g, '')

  row.price = rawValue
  row.displayedPrice = rawValue
  emits('calculate-row-total', row)
}

const handleFocus = (row) => {
  row.displayedPrice = row.price
}

const handleBlur = (row) => {
  if (row.price) {
    const numericValue = parseFloat(row.price)
    if (!isNaN(numericValue)) {
      row.displayedPrice = n(numericValue, 'decimal', store.currency.value)
    }
  }
}
</script>
