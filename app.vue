<script setup>
useHead({
  title: 'Nuxt Starter',
  htmlAttrs: { 'data-theme': 'dark' },
});
const route = useRoute();
</script>

<template>
  <div class="app h-screen flex flex-col bg-base-300 p-[24px]">
    <Navigation />
    <NuxtPage class="bg-blue-900 h-full" />
  </div>
</template>