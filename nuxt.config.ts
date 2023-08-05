// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  routeRules: {
    '/en/NA/*/**': { isr: 7200 },
    '/en/EU/*/**': { isr: 7200 },
    '/de/NA/*/**': { isr: 7200 },
    '/de/EU/*/**': { isr: 7200 },
  },
});
