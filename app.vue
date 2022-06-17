<script setup>
useHead({
  title: 'Nuxt Playground',
  htmlAttrs: { 'data-theme': 'acid' },
});
const route = useRoute();
</script>

<template>
  <div class="app h-screen flex flex-col bg-base-200 p-[24px]">
    <ShopNavigation />
    <NuxtPage class="h-full" />
  </div>
</template>