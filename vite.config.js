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
      '052f-2401-4900-1c36-17-6dab-3519-dc74-ddee.ngrok-free.app'
    ]
  }
})
