import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/admin/', // ensures assets load correctly from /admin
  build: {
    outDir: 'dist/admin',       // output directory
    emptyOutDir: true,          // clean before building
    rollupOptions: {
      input: path.resolve(__dirname, 'src/admin/index.js'), // entry point
    },
  },
});
