import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/style.css'],
  modules: ['@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt'],
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:8000/api/v1',
    },
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['preline'],
    },
  },
})
