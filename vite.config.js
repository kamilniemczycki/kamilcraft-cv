import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig((mode) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    server: {
      port: parseInt(env.VITE_PORT ?? 5173),
    },
    plugins: [ vue(), splitVendorChunkPlugin() ],
    resolve: {
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  };
});
