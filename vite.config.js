import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteImages from 'vite-plugin-vue-images'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), ViteImages()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
