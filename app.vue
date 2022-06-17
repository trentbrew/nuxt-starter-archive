<script setup>
useHead({
  title: 'Nuxt Starter',
  htmlAttrs: { 'data-theme': 'cupcake' },
});
const route = useRoute();
</script>

<template>
  <div class="app h-screen flex flex-col bg-base-300 p-[24px]">
    <Navigation />
    <NuxtPage class="h-full" />
  </div>
</template>