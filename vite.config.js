import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    allowedHosts: [
      'c449-2401-4900-1c36-17-dc21-69f6-5d3e-96e4.ngrok-free.app'
    ]
  }
})
