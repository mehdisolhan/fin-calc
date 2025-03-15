<template>
  <div>
    <select
      v-model="currentCurrency"
      name="currency"
      class="cursor-pointer bg-gray-50 dark:bg-gray-800 text-black dark:text-white rounded-lg"
      @change="onSelectChange"
    >
      <option v-for="currency in currencyList" :key="currency.label" :value="currency">
        {{ `${currency.icon} ${currency.label}` }}
      </option>
    </select>
  </div>
</template>
<script setup>
import { useGlobalStore } from '@/stores/global'
import { currencyList } from '@/constants'

const store = useGlobalStore()
const currentCurrency = ref(store.currency || {})

const onSelectChange = () => {
  store.setCurrency(currentCurrency.value)
}
</script>
