import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

const alias = {
  '@': fileURLToPath(new URL('./src', import.meta.url)),
  '@views': fileURLToPath(new URL('./src/views', import.meta.url)),
  '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
}

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias,
  },
})
