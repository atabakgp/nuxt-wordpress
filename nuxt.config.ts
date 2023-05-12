// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      title: "rota dekorasyon",
      viewport: "width=device-width, initial-scale=1"
    }
  },
  runtimeConfig: {
    public: {
      wpUri: process.env.WP_URI
    }
  },
  css: [
    "primevue/resources/themes/lara-light-blue/theme.css",
    "primevue/resources/primevue.css",
    "primeicons/primeicons.css"
  ],
  build: {
    transpile: ["primevue"]
  }
})
