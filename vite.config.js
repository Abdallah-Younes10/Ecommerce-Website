import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    visualizer({
      filename: 'stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    minify: 'esbuild',
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // ===========================================
          // ⚠️ globals.js يجب أن يبقى ضمن main chunk
          // ===========================================
          if (id.includes('src/globals.js')) return 'main';

          // ===========================================
          // Components: تقسيم حسب الصفحة
          // ===========================================
          if (id.includes('src/component/Home')) return 'home';
          if (id.includes('src/component/ProductsPage')) return 'products';
          if (id.includes('src/component/ProductDetails')) return 'product-details';
          if (id.includes('src/component/Layout')) return 'layout';

          // أي ملفات أخرى → main
        },
        // تحسين أسماء الملفات لسهولة القراءة
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
});
