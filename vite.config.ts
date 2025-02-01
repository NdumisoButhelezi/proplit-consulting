import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Tell Vite to use the "src" folder as the root
  root: 'src',
  plugins: [react()],
  base: '/', // Ensure assets are referenced from the root in the final build
  build: {
    // Output the built files into a "dist" folder at the project root (outside of "src")
    outDir: '../dist',
    // Optionally, empty the output directory before building
    emptyOutDir: true,
  },
});
