import { defineConfig } from 'vite';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  plugins: [
    FullReload(
      [
        'src/pages/**',
        'src/components/**',
        'src/assets/**',
        'style.scss',
        'index.ts',
        'index.html',
        '404.html',
      ],
      { delay: 100 }
    ),
  ],
});
