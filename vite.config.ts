import { defineConfig } from 'vite';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? '/mob-a11y/' : '/',
  appType: 'spa',
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  server: {
    port: 5173,
    host: '0.0.0.0',
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
      { delay: 100 },
    ),
  ],
});
