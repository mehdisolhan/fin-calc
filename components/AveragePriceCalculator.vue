<template>
  <div class="relative overflow-x-auto m-2 text-sm max-sm:text-xs">
    <table class="w-full text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th v-for="column in columns" :key="column.key" class="px-6 py-3">
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, i) in rows" :key="row.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <td class="px-6 py-4 max-sm:px-0 max-sm:py-1 min-w-[30px]">{{ row.id }}</td>
          <td class="px-6 py-4 max-sm:px-0 max-sm:py-1 min-w-[150px]">
            <CurrencyInput v-model="rows[i]" @calculate-row-total="calculateRowTotal" />
          </td>
          <td class="px-6 py-4 max-sm:px-0 max-sm:py-1 text-center min-w-[30px]">
            <span>x</span>
          </td>
          <td class="px-6 py-4 max-sm:px-0 max-sm:py-1 min-w-[150px]">
            <input
              :value="row.quantity"
              type="text"
              class="w-full p-2 max-sm:p-1 border border-gray-300 rounded-md text-black"
              placeholder="0"
              @input="(e) => handleQuantityInput(e, row)"
            />
          </td>
          <td class="px-6 py-4 max-sm:px-1 max-sm:py-1 text-center min-w-[30px]">
            <span>=</span>
          </td>
          <td
            class="px-6 py-4 max-sm:px-0 max-sm:py-1 font-bold text-black text-center text-base max-sm:text-sm dark:text-white min-w-[120px]"
          >
            <span>{{ $n(row.total, 'currency', store.currency.value) }}</span>
          </td>
          <td
            v-if="row.id > 4"
            class="px-6 py-4 max-sm:px-0 max-sm:py-1 font-bold text-black text-center text-base max-sm:text-sm dark:text-white min-w-[100px]"
          >
            <button
              type="button"
              class="flex items-center m-2 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm max-sm:text-xs px-3 py-2 max-sm:px-1 max-sm:py-1 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
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
        class="flex items-center m-2 text-white text-sm max-sm:text-xs p-3 max-sm:p-1 me-2 mb-2 bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700 hover:bg-gray-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg focus:outline-none dark:focus:ring-blue-800"
        @click="addNewRow"
      >
        <Icon name="heroicons:plus-circle-16-solid" />
        <span class="ml-2">{{ $t('addNew') }}</span>
      </button>
      <button
        type="button"
        class="flex items-center m-2 text-white text-sm max-sm:text-xs p-3 max-sm:p-1 me-2 mb-2 bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700 hover:bg-gray-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg focus:outline-none dark:focus:ring-blue-800"
        @click="clearAll"
      >
        <Icon name="heroicons:trash-16-solid" />
        <span class="ml-2">{{ $t('clearAll') }}</span>
      </button>
    </div>
    <div class="grid grid-cols-3 place-items-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 font-bold">
      <div class="px-6 py-4">
        <div class="text-base max-sm:text-sm">{{ t('averagePrice') }}</div>
        <div class="text-center text-green-600 dark:text-green-500">
          {{ $n(avgPrice, 'currency', store.currency.value) }}
        </div>
      </div>
      <div class="px-6 py-4">
        <div class="text-base max-sm:text-sm">{{ t('totalLot') }}</div>
        <div class="text-center text-green-600 dark:text-green-500">{{ totalLot }}</div>
      </div>
      <div class="px-6 py-4">
        <div class="text-base max-sm:text-sm">{{ t('total') }}</div>
        <div class="text-center text-green-600 dark:text-green-500">
          {{ $n(totalPrices, 'currency', store.currency.value) }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
import { useGlobalStore } from '@/stores/global'
import Decimal from 'decimal.js'

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
    price: '',
    displayedPrice: '',
    cross: '',
    quantity: '',
    equal: '',
    total: 0
  },
  {
    id: 2,
    price: '',
    displayedPrice: '',
    cross: '',
    quantity: '',
    equal: '',
    total: 0
  },
  {
    id: 3,
    price: '',
    displayedPrice: '',
    cross: '',
    quantity: '',
    equal: '',
    total: 0
  },
  {
    id: 4,
    price: '',
    displayedPrice: '',
    cross: '',
    quantity: '',
    equal: '',
    total: 0
  }
])

const handleQuantityInput = (e, row) => {
  const currentValue = row.quantity
  let rawValue = e.target.value

  rawValue = rawValue.replace(/,/g, '.')

  const dotCount = (rawValue.match(/\./g) || []).length

  if (dotCount > 1) {
    e.target.value = currentValue
    return
  }

  rawValue = rawValue.replace(/[^0-9.]/g, '')

  row.quantity = rawValue
  e.target.value = rawValue
  calculateRowTotal(row)
}

const totalLot = computed(() =>
  rows.reduce((acc, row) => {
    const quantity = parseInt(row.quantity)
    return quantity > 0 ? acc + quantity : acc
  }, 0)
)

const totalPrices = computed(() =>
  rows.reduce((acc, row) => {
    return row.total > 0 ? new Decimal(acc).plus(row.total).toNumber() : acc
  }, 0)
)

const avgPrice = computed(() => {
  if (totalPrices.value > 0 && totalLot.value > 0) {
    return new Decimal(totalPrices.value).dividedBy(totalLot.value).toNumber()
  }
  return 0
})

const calculateRowTotal = (row) => {
  const { price, quantity } = row
  if (!price || !quantity) {
    row.total = 0
    return
  }
  try {
    const decimalPrice = new Decimal(price)
    const decimalQuantity = new Decimal(quantity)
    const rowTotal = decimalPrice.times(decimalQuantity)
    if (rowTotal.greaterThan(0)) {
      row.total = rowTotal.toNumber()
    }
  } catch (error) {
    console.error('Error calculating total:', error)
    row.total = 0
  }
}

const addNewRow = () => {
  const lastRow = rows[rows.length - 1]
  rows.push({
    id: lastRow.id + 1,
    displayedPrice: '',
    price: '',
    cross: '',
    quantity: '',
    equal: '',
    total: 0
  })
}

const clearAll = () => {
  rows.forEach((row) => {
    row.price = 0
    row.displayedPrice = ''
    row.quantity = 0
    row.total = 0
  })
}
</script>
