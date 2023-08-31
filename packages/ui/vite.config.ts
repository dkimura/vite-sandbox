import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.tsx',
      name: 'ui',
      fileName: (format) => `index.${format}.js`,
    },
  },
  plugins: [react(), dts({ copyDtsFiles: true })],
})
