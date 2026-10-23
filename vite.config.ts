import { defineConfig } from 'vite';

// Relative base so the same build works on GitHub Pages and inside portal iframes.
export default defineConfig({
  base: './',
  build: { outDir: 'dist', assetsInlineLimit: 0, chunkSizeWarningLimit: 1500 },
});
