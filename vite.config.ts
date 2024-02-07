import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import dfs from 'vite-plugin-dts';

import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig({
  plugins: [react(), tsconfigPaths(), dfs()],
  build: {
    lib: {
      entry: {
        components: path.resolve(__dirname, './packages/implementation/components/index.ts'),
      },
      name: 'uni.choi-DesignSystem',
      fileName: (format) => `index.${format}.js`,
    },
    outDir: 'dist',
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
