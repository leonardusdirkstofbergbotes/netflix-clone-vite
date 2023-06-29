import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src/assets/'),
    }
  }
});
