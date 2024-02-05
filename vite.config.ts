import { join, resolve } from 'node:path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({ rollupTypes: true }), // Output .d.ts files
  ],
  build: {
    lib: {
      entry: resolve(__dirname, join('lib', 'index.ts')),
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    minify: false,
    target: 'esnext',
  },
  test: {
    environment: 'jsdom',
    setupFiles: './packages/test/setup.ts',
    coverage: {
      all: false,
      enabled: true,
    },
  },
});
