import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteESLint from '@ehutch79/vite-eslint'
import windiCSS from 'vite-plugin-windicss'
import components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [
    windiCSS(),
    vue(),
    process.env.NODE_ENV === 'development' && viteESLint({
      include: ['src/**/*.vue', 'src/**/*.ts']
    }),
    components({ directoryAsNamespace: true }),
  ]
})
