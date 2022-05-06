import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteESLint from '@ehutch79/vite-eslint'
import components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    process.env.NODE_ENV === 'development' && viteESLint({
      include: ['src/**/*.vue', 'src/**/*.ts']
    }),
    components({ directoryAsNamespace: true }),
  ]
})
