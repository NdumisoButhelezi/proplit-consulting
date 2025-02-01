import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Tell Vite that your index.html and source files are in the `src` folder.
  root: 'src',
  plugins: [react()],
  base: '/', // Use the root path for asset references
  build: {
    // Output the production build to a folder named "dist" at the project root
    outDir: '../dist',
    emptyOutDir: true,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
