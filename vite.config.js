import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ vue(), splitVendorChunkPlugin() ],
  resolve: {
    vue: 'vue/dist/vue.esm-bundler.js',
  },
  build: {
    chunkSizeWarningLimit: 2048,
  },
});
