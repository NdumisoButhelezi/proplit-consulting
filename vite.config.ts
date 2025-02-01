import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Serve from the root on Vercel
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
