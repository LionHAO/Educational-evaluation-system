import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import path from 'path'
import { log } from 'node:console'
const baseURL = 'http://114.132.66.162:8081/'

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: baseURL,
        changeOrigin: true,
        rewrite: (path) =>  {
          console.log(path.replace(/^\/api/, ''));
          return path.replace(/^\/api/, '')
        }
      }
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      // 只能是绝对路径
      // '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@': path.resolve('./src')
    },
  },
})
