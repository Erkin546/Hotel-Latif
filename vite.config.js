import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        room: resolve(__dirname, 'src/pages/room/room1.html'),
        room: resolve(__dirname, 'src/pages/room/room2.html'),
        room: resolve(__dirname, 'src/pages/room/room3.html'),
        room: resolve(__dirname, 'src/pages/room/room4.html'),
        room: resolve(__dirname, 'src/pages/room/room5.html'),
        room: resolve(__dirname, 'src/pages/room/room6.html'),
      }
    }
  }
})

