import { defineConfig } from 'vite';
import path from 'path';

// Use path-browserify so decap CMS can bundle in the browser
const alias = {
  path: 'path-browserify'
};

export default defineConfig({
  base: '/admin/', // ensures assets load correctly from /admin
  resolve: { alias },
  build: {
    outDir: 'dist/admin',       // output directory
    emptyOutDir: true,          // clean before building
    rollupOptions: {
      input: path.resolve(__dirname, 'src/admin/index.js'), // entry point
    },
  },
});
