// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  routeRules: {
    '/en/test/*/**': { isr: true },
    '/de/test/*/**': { isr: true },
  },
});
