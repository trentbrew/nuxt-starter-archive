<template>
  <main class="w-screen h-screen flex flex-col justify-center items-center gap-[24px]">
    <img src="assets/nuxt.png" alt="xchange logo" class="h-[50px]" />

    <div class="text-center">
      <h1 class="text-[36px]">Welcome to Nuxt 3</h1>
      <br />
      <a href="https://v3.nuxtjs.org/guide/directory-structure/components">
        <strong class="text-[#47b884]">Explore the docs »</strong>
      </a>
      <br />
      <br />
      <a href="https://tailwindcss.com/docs">TailwindCSS</a>
      ·
      <a href="https://daisyui.com/docs">DaisyUI</a>
      ·
      <a href="https://app.supabase.com/">Supabase</a>
    </div>

    <button @click="fetchUrl" class="btn">fetch url</button>
    <button @click="fetchUrl" class="btn">fetch url</button>
  </main>
</template>