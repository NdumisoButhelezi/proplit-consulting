import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Tell Vite to use the "src" folder as the root
  root: 'src',
  plugins: [react()],
  base: '/', // Ensures that asset URLs are absolute (e.g., "/assets/...")
  build: {
    // Output the build to a folder named "dist" at the project root (one level up)
    outDir: '../dist',
    emptyOutDir: true,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
