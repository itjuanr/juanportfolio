import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Caminhos relativos: o build funciona em qualquer subpasta (ex.: GitHub Pages).
  base: './',
})
