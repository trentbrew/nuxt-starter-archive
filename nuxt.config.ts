import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    env: {
        baseUrl: process.env.BASE_URL,
    }
})
