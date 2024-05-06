import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import ViteYaml from '@modyfi/vite-plugin-yaml';

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: 'app/public',
  resolve: {
    alias: {
      '@spuxx/browser-utils': '/lib',
    },
  },
  plugins: [
    dts({
      include: ['lib/**/*'],
      exclude: ['lib/**/*.{test,spec}.*'],
      tsconfigPath: './tsconfig.build.json',
      rollupTypes: true,
    }),
    ViteYaml(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib'),
      name: '@spuxx/browser-utils',
      formats: ['es'],
      fileName: `index`,
    },
  },
});
