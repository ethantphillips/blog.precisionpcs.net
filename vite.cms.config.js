import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist/admin', // final location of built files
    emptyOutDir: true,     // keeps index.html and css
    rollupOptions: {
      input: './src/admin/index.js'
    }
  }
});
