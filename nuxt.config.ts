// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  css: [
    '@/assets/styles/reset.css'
  ],
  modules: [
    // ...
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@element-plus/nuxt'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/default.scss";'	
        }
      }
    }
  }
})