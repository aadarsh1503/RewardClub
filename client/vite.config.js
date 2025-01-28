import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    outDir: 'build', // The directory where the build will be output
    sourcemap: true, // Enable sourcemaps for easier debugging
    minify: 'esbuild', // Minify the code using esbuild (default)
  },
})
