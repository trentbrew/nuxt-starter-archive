import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    buildModules: ['@pinia/nuxt'],
    modules: ['@nuxtjs/tailwindcss'],
    env: {
        baseUrl: process.env.BASE_URL,
    }
})
