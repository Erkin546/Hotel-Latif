import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        room: resolve(__dirname, 'src/pages/room/index.html'),
      }
    }
  }
})
