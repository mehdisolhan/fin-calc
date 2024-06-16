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
          <td class="px-6 py-4 text-center">
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
          <td class="px-6 py-4 text-center">
            <span>=</span>
          </td>
          <td class="px-6 py-4 font-bold text-black text-center text-base dark:text-white">
            <span>{{ `${row.total} ${row.total > 0 ? store.currencyIcon : ''}` }}</span>
          </td>
          <td v-if="row.id > 4" class="px-6 py-4 font-bold text-black text-center text-base dark:text-white">
            <button
              type="button"
              class="flex items-center m-2 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              @click="() => rows.splice(rows.indexOf(row), 1)"
            >
              <Icon name="heroicons:x-circle-16-solid" />
              <span class="ml-2">{{ $t('delete') }}</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="flex justify-between bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <button
        type="button"
        class="flex items-center m-2 text-white text-sm p-3 me-2 mb-2 bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700 hover:bg-gray-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg focus:outline-none dark:focus:ring-blue-800"
        @click="addNewRow"
      >
        <Icon name="heroicons:plus-circle-16-solid" />
        <span class="ml-2">{{ $t('addNew') }}</span>
      </button>
      <button
        type="button"
        class="flex items-center m-2 text-white text-sm p-3 me-2 mb-2 bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700 hover:bg-gray-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg focus:outline-none dark:focus:ring-blue-800"
        @click="clearAll"
      >
        <Icon name="heroicons:trash-16-solid" />
        <span class="ml-2">{{ $t('clearAll') }}</span>
      </button>
    </div>
    <div class="grid grid-cols-3 place-items-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 font-bold">
      <div class="px-6 py-4">
        <div class="text-base">{{ t('averagePrice') }}</div>
        <div class="text-center text-green-600 dark:text-green-500">
          {{ `${avgPrice} ${avgPrice > 0 ? store.currencyIcon : ''}` }}
        </div>
      </div>
      <div class="px-6 py-4">
        <div class="text-base">{{ t('totalLot') }}</div>
        <div class="text-center text-green-600 dark:text-green-500">{{ totalLot }}</div>
      </div>
      <div class="px-6 py-4">
        <div class="text-base">{{ t('total') }}</div>
        <div class="text-center text-green-600 dark:text-green-500">
          {{ `${totalPrices} ${totalPrices > 0 ? store.currencyIcon : ''}` }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
import { useGlobalStore } from '@/stores/global'

const store = useGlobalStore()
const { t } = useI18n()

const columns = computed(() => [
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
  if (!price || !quantity) {
    row.total = 0
    return
  }
  const rowTotal = price * quantity
  if (rowTotal > 0) {
    row.total = rowTotal
  }
}

const addNewRow = () => {
  const lastRow = rows[rows.length - 1]
  rows.push({
    id: lastRow.id + 1,
    price: 0,
    cross: '',
    quantity: 0,
    equal: '',
    total: 0
  })
}

const clearAll = () => {
  rows.forEach((row) => {
    row.price = 0
    row.quantity = 0
    row.total = 0
  })
}
</script>
