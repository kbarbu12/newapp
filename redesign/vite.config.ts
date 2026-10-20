import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],

  // Split the bundle so each part caches on its own: the generated quest data
  // (~85% of the bytes) changes with content edits, third-party code rarely,
  // and the app itself with code changes. A code-only deploy then doesn't make
  // returning visitors re-download the data, and vice versa.
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('/src/generated/')) return 'quest-data'
          if (id.includes('/node_modules/')) return 'vendor'
        },
      },
    },
    // The quest-data chunk is large by design; don't warn about it.
    chunkSizeWarningLimit: 3000,
  },
})
