<template>
  <header class="bg-background/75 backdrop-blur -mb-px sticky top-0 z-50 lg:mb-0 lg:border-0 p-4">
    <div class="flex justify-between">
      <div class="flex items-center space-x-4">
        <h1>My App</h1>
      </div>
      <UTooltip :popper="{ arrow: true }" :text="isDark ? $t('switchToLightMode') : $t('switchToDarkMode')">
        <UButton
          :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
          variant="ghost"
          aria-label="Theme"
          @click="isDark = !isDark"
        />
      </UTooltip>
    </div>
  </header>
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
