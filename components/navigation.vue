<script setup>
const route = useRoute();
function checkRoute() {
    console.clear();
    console.log(route.name);
}
</script>


<template>
<div class="navbar bg-base-100 rounded-xl">
  <div class="navbar-start">
    <a class="btn btn-ghost normal-case text-xl">Nuxt App</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      <li><NuxtLink :class="route.name == 'index' && 'active'" to="/">Home</NuxtLink></li>
      <li><NuxtLink :class="route.name == 'dashboard' && 'active'" to="/dashboard">Dashboard</NuxtLink></li>
      <li><NuxtLink :class="route.name == 'about' && 'active'" to="/about">About</NuxtLink></li>
    </ul>
  </div>
  <div class="navbar-end">
    <button @click="checkRoute" class="btn">Settings</button>
  </div>
</div>
</template>