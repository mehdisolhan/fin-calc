<template>
  <div class="cursor-pointer" @click="handleDarkMode">
    <Icon v-if="colorMode === 'light'" name="heroicons:moon" />
    <Icon v-else name="heroicons:sun" />
  </div>
</template>
<script setup>
const colorMode = ref('light')
const handleDarkMode = () => {
  colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
  if (colorMode.value === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
</script>
