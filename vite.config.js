import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteImages from 'vite-plugin-vue-images'
import sitemap from 'vite-plugin-sitemap';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), ViteImages(),
    sitemap({
      // 這裡是套件的配置選項
      // 例如，你可以設定 sitemap 的基本路徑
      baseUrl: 'https://yourdomain.com',
      // 或者，你可以指定生成 sitemap 的路徑
      outputPath: 'dist/sitemap.xml',
      // 更多配置選項，請參考套件文檔
    }),],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
