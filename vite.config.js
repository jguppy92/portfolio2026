import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        ja: resolve(import.meta.dirname, 'ja/index.html'),
        carrierSync: resolve(import.meta.dirname, 'work/carrier-sync/index.html'),
        orderRouting: resolve(import.meta.dirname, 'work/order-routing/index.html'),
      }
    }
  }
})