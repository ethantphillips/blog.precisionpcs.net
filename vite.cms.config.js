import { defineConfig } from 'vite';

export default defineConfig({
  // your Vite config here
  build: {
    outDir: 'dist/admin',
    emptyOutDir: true,
    rollupOptions: {
      input: 'src/admin/index.js',
    },
  },
});
