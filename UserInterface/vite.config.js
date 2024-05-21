import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/v1/': {
        target: 'http://localhost:8000', // Update this to your backend server's URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/v1/, '/api/v1') // Corrected rewrite function
      }
    }
  }
});
