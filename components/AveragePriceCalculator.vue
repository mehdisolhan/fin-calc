<template>
  <div class="relative overflow-x-auto m-2">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
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
              class="w-full p-2 border border-gray-300 rounded-md text-black"
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
              class="w-full p-2 border border-gray-300 rounded-md text-black"
            />
          </td>
          <td class="px-6 py-4">
            <span>=</span>
          </td>
          <td class="px-6 py-4 font-bold text-black text-center text-base dark:text-white">
            <span>{{ calculateRowTotal(row.price, row.quantity) }}</span>
            <span></span>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-xl font-bold text-green-600 dark:text-green-500"
        >
          <td class="px-6 py-4" />
          <td class="px-6 py-4">{{ avgPrice }}</td>
          <td class="px-6 py-4">x</td>
          <td class="px-6 py-4">{{ totalLot }}</td>
          <td class="px-6 py-4">=</td>
          <td class="px-6 py-4 text-center">{{ total }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
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
    label: `${t('price')}`
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
]

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
const totalPrices = computed(() => rows.reduce((acc, row) => acc + row.price, 0))
const avgPrice = computed(() => {
  const total = totalPrices.value
  const lot = totalLot.value
  return total > 0 && lot > 0 ? `${(total / lot).toFixed(2)} ₺` : 0
})
const total = computed(() => totalPrices.value * totalLot.value)

const calculateRowTotal = (price, quantity) => {
  if (!price || !quantity) return 0
  const total = price * quantity
  return total > 0 ? `${total} ₺` : total
}
</script>
