import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5173,
    open: true, // Automatically opens browser on npm run dev / npm start
    host: true
  },
  publicDir: 'public',
  build: {
    outDir: 'dist'
  }
});
