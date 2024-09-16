import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Verificar si estamos en entorno de producción
const backendUrl = process.env.NODE_ENV === 'production'
  ? 'https://backend-music_store_firk.onrender.com' // URL del backend en producción (Render)
  : 'http://localhost:5000'; // URL del backend en desarrollo

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    entries: ['index.html'],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true, // Esto puede ayudar a manejar dependencias mixtas CJS/ESM
    },
    outDir: 'dist', // Asegura que la carpeta de salida sea 'dist'
  },
  define: {
    'process.env.VITE_BACKEND_URL': JSON.stringify(backendUrl),
  }
})
