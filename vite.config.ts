import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import generouted from '@generouted/react-router'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), generouted()],
})
