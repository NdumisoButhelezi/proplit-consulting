import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Tell Vite to use the "src" folder as the root
  root: 'src',
  plugins: [react()],
  base: '/', // Ensures that asset URLs are absolute (e.g., "/assets/...")
  build: {
    // Output the build to the "public_html" directory on your server
    outDir: '../public_html', // Adjust this path to match your server's public_html directory
    emptyOutDir: true, // Clears the output directory before building
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});