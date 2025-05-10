import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['swiper', 'react-masonry-css', 'react-modal', 'react-icons'],
        },
      },
    },
    // Enable minification for production builds
    minify: 'terser',
    // Generate source maps for debugging
    sourcemap: true,
  },
}) 