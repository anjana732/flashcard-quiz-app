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
      'c84b-2401-4900-1c36-17-443-9e32-6423-9231.ngrok-free.app',
      ''
    ]
  }
})
