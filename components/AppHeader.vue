<template>
  <header class="bg-background/75 backdrop-blur -mb-px sticky top-0 z-50 lg:mb-0 lg:border-0 p-4">
    <div class="flex justify-between">
      <div class="flex items-center space-x-4">
        <h1
          class="text-2xl font-bold subpixel-antialiased tracking-widest text-gray-950 hover:text-gray-600 dark:text-gray-300"
        >
          Fin-Calc
        </h1>
      </div>
      <div class="flex gap-x-3 justify-center items-center">
        <Currency />
        <!-- <ChangeLang /> -->
        <DarkModeSwitch />
      </div>
    </div>
  </header>
</template>
