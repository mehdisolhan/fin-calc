<template>
  <div class="relative overflow-x-auto m-2">
    <table class="table-fixed w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th v-for="column in columns" :key="column.key" class="px-6 py-3">
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <td class="px-6 py-4">{{ row.id }}</td>
          <td class="px-6 py-4">
            <input
              v-model="row.price"
              type="number"
              min="0"
              :placeholder="$t('price')"
              class="w-full p-2 border border-gray-300 rounded-md text-black"
              @input="() => calculateRowTotal(row)"
            />
          </td>
          <td class="px-6 py-4">
            <span>x</span>
          </td>
          <td class="px-6 py-4">
            <input
              v-model="row.quantity"
              type="number"
              min="0"
              :placeholder="$t('lotQuantity')"
              class="w-full p-2 border border-gray-300 rounded-md text-black"
              @input="() => calculateRowTotal(row)"
            />
          </td>
          <td class="px-6 py-4">
            <span>=</span>
          </td>
          <td class="px-6 py-4 font-bold text-black text-center text-base dark:text-white">
            <span>{{ `${row.total} ${row.total > 0 ? store.currencyIcon : ''}` }}</span>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-xl font-bold text-green-600 dark:text-green-500"
        >
          <td class="px-6 py-4" />
          <td class="px-6 py-4">{{ `${avgPrice} ${avgPrice > 0 ? store.currencyIcon : ''}` }}</td>
          <td class="px-6 py-4">x</td>
          <td class="px-6 py-4">{{ totalLot }}</td>
          <td class="px-6 py-4">=</td>
          <td class="px-6 py-4 text-center">{{ `${totalPrices} ${totalPrices > 0 ? store.currencyIcon : ''}` }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
import { useGlobalStore } from '@/stores/global'

const store = useGlobalStore()
const { t } = useI18n()

const columns = ref([
  {
    key: 'id',
    label: '#'
  },
  {
    key: 'price',
    label: t('price')
  },
  {
    key: 'cross',
    label: ''
  },
  {
    key: 'quantity',
    label: t('lotQuantity')
  },
  {
    key: 'equal',
    label: ''
  },
  {
    key: 'total',
    label: t('total')
  }
])

const rows = reactive([
  {
    id: 1,
    price: 0,
    cross: '',
    quantity: 0,
    equal: '',
    total: 0
  },
  {
    id: 2,
    price: 0,
    cross: '',
    quantity: 0,
    equal: '',
    total: 0
  },
  {
    id: 3,
    price: 0,
    cross: '',
    quantity: 0,
    equal: '',
    total: 0
  },
  {
    id: 4,
    price: 0,
    cross: '',
    quantity: 0,
    equal: '',
    total: 0
  }
])

const totalLot = computed(() =>
  rows.reduce((acc, row) => {
    const quantity = parseInt(row.quantity)
    return quantity > 0 ? acc + quantity : acc
  }, 0)
)
const totalPrices = computed(() =>
  rows.reduce((acc, row) => {
    return row.total > 0 ? acc + row.total : acc
  }, 0)
)
const avgPrice = computed(() => {
  return totalPrices.value > 0 && totalLot.value > 0 ? (totalPrices.value / totalLot.value).toFixed(2) : 0
})

const calculateRowTotal = (row) => {
  const { price, quantity } = row
  if (!price || !quantity) return 0
  const rowTotal = price * quantity
  if (rowTotal > 0) {
    row.total = rowTotal
  }
}
</script>
