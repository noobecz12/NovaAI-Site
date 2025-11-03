import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // dla custom domeny GitHub Pages
  plugins: [react()],
})
