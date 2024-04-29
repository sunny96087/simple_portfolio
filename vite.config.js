import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteImages from 'vite-plugin-vue-images'
import sitemap from 'vite-plugin-sitemap'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteImages(),
    sitemap({
      // 設定 sitemap 的基本路徑
      baseUrl: 'https://simpleportfolio-64b60.web.app/',
      // 指定生成 sitemap 的路徑
      outputPath: 'dist/sitemap.xml'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
