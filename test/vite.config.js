import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  root: resolve(__dirname, "test/src")
})
