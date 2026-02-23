import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // obligatoire pour un domaine personnalisé
  plugins: [react()]
})
