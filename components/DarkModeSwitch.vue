<template>
  <div class="cursor-pointer" @click="handleDarkMode">
    <Icon v-if="colorMode === 'light'" name="heroicons:moon" />
    <Icon v-else name="heroicons:sun" />
  </div>
</template>
<script setup>
const { setItem, getItem } = useLocalStorage()
const colorMode = ref('light')

const handleDarkMode = () => {
  colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
  setItem('theme', colorMode.value)
  if (colorMode.value === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

onMounted(() => {
  if (process.client) {
    const theme = getItem('theme')
    if (theme) {
      colorMode.value = theme
      if (theme === 'dark') {
        document.documentElement.classList.add('dark')
      }
    }
  }
})
</script>
