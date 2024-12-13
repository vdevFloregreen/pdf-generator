import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: { target: 'esnext' },
  plugins: [react()],
  resolve: {
    alias: {
      '@pdfme/common': '/pdf-generator/packages/common/dist/cjs/src/index.js'
    }
  },
});
