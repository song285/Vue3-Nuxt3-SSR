// https://nuxt.com/docs/api/configuration/nuxt-config
import { loadEnv } from 'vite'
import https from 'node:https'
const envName = loadEnv(process.argv[process.argv.length-1], './env').VITE_SERVER_NAME

export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [
        // { src: 'http://xxx.js' }
      ],
      link: [
        // { rel: 'stylesheet', href: 'https://awesome-lib.css' }
      ],
    }
  },
  srcDir: 'src/',
  css: [
    '@/assets/styles/reset.css'
  ],
  modules: [
    // ...
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@element-plus/nuxt',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/default.scss";'	
        }
      }
    }
  },
  runtimeConfig: { // 运行时常量
    public: { // 客户端-服务的都能访问
      baseUrl: envName
    }
  },
  // // 代理服务器
  // nitro: {
  //   devProxy: {
  //     '/api': {
  //       target: process.env.VITE_SERVER_NAME,
  //       changeOrigin: true
  //     }
  //   }
  // }
})