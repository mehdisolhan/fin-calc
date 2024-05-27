<template>
  <button @click="handleDarkMode" class="p-2 rounded-full bg-background/50 text-primary/50">Toggle Dark Mode</button>
</template>
<script setup>
const colorMode = ref('light')
// const isDark = computed({
//   get() {
//     return colorMode.value === 'dark'
//   },
//   set() {
//     // colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
//   }
// })
const handleDarkMode = () => {
  colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
  if (colorMode.value === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
</script>
