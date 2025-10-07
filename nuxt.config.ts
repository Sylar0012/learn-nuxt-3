// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  typescript: {
    shim: true,
    typeCheck: true,
  },
  modules: ["nuxt-quasar-ui"],
  quasar: {
    /* */
  },
});
