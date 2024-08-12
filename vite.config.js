import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/react-vite/",
  build: {
    rollupOptions: {
      input: {
        index: resolve(resolve(), 'index.html'),
        404: resolve(resolve(), '404.html')
      }
    }
  }
})