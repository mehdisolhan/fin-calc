<template>
  <UTooltip :popper="{ arrow: true }" :text="isDark ? $t('switchToLightMode') : $t('switchToDarkMode')">
    <UButton
      :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
      variant="ghost"
      aria-label="Theme"
      @click="isDark = !isDark"
    />
  </UTooltip>
</template>
<script setup>
const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>
