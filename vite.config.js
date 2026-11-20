import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Site lives at https://shnbltv5.github.io/ (repo name: shnbltv5.github.io), so base is '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
