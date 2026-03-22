import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        room1: resolve(__dirname, 'src/pages/room/room1.html'),
        room2: resolve(__dirname, 'src/pages/room/room2.html'),
        room3: resolve(__dirname, 'src/pages/room/room3.html'),
        room4: resolve(__dirname, 'src/pages/room/room4.html'),
        room5: resolve(__dirname, 'src/pages/room/room5.html'),
        room6: resolve(__dirname, 'src/pages/room/room6.html'),
      }
    }
  }
})

