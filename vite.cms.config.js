import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'public/admin', // final location of built files
    emptyOutDir: false,     // keeps index.html and css
    rollupOptions: {
      input: './src/admin/index.js'
    }
  }
});
