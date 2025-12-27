// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  components: [
    {
      path: '~/components',
      global: true,
      // Keep folder names in component tags (e.g., Sidebar/Left.vue -> <SidebarLeft />)
      pathPrefix: true
    }
  ],
  nitro: {
    compatibilityDate: '2025-12-23'
  },
  modules: ['@nuxtjs/tailwindcss']
})
