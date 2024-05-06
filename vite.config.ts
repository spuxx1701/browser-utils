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
    // TODO: Look for a way to get this to work so we can use nested imports paths
    // rollupOptions: {
    //   // This enables us to add include entrypoints besides `lib/index.ts` into the bundle.
    //   // It leads to a better developer experience when importing functionalities from the lib
    //   // since it allows deep imports like `import { Logger } from '@spuxx/browser-utils/services/logger';`.
    //   input: Object.fromEntries(
    //     glob
    //       .sync('lib/**/*.{ts,tsx}', { ignore: '**/*.{test,spec}.{ts,tsx}' })
    //       .map((file) => [
    //         relative('lib', file.slice(0, file.length - extname(file).length)),
    //         fileURLToPath(new URL(file, import.meta.url)),
    //       ]),
    //   ),
    //   output: {
    //     assetFileNames: 'assets/[name][extname]',
    //     entryFileNames: '[name].js',
    //   },
    // },
  },
});
