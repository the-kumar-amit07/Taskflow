/**
 * Vite Configuration
 *
 * This file configures Vite's development server and build process.
 *
 * WHAT WE ARE ADDING:
 * ───────────────────
 * Path alias: @ → ./src
 *
 * This lets us write:
 *   import { Button } from '@/components/ui/Button';
 *
 * Instead of:
 *   import { Button } from '../../../components/ui/Button';
 *
 * HOW IT WORKS:
 * ─────────────
 * Vite uses Rollup under the hood for building. The resolve.alias
 * option tells both the dev server AND the production build to
 * replace "@/" with the absolute path to the "src/" folder.
 *
 * We use Node.js built-in modules to construct the path:
 * - import { fileURLToPath } from 'url' → Converts a file:// URL to a path
 * - import { dirname, resolve } from 'path' → Path manipulation utilities
 *
 * WHY fileURLToPath?
 * In ES modules (type: "module" in package.json), the old __dirname
 * global is NOT available. We need to derive the directory path from
 * import.meta.url, which gives us the current file's URL as a
 * file:// URL string. fileURLToPath converts it to a regular path.
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'url';

// https://vite.dev/config/
export default defineConfig({

  // ──────────────────────────────────────────
  // PLUGINS
  // ──────────────────────────────────────────
  plugins: [react()],
  // ──────────────────────────────────────────
  // RESOLVE — Module resolution configuration
  // ──────────────────────────────────────────
  resolve: {
    alias: {
      /**
       * Path Alias: @ → ./src
       *
       * fileURLToPath(new URL('./src', import.meta.url))
       *
       * Breaking this down:
       * 1. import.meta.url → "file:///Users/you/projects/taskflow/vite.config.js"
       * 2. new URL('./src', import.meta.url) → "file:///Users/you/projects/taskflow/src"
       * 3. fileURLToPath(...) → "/Users/you/projects/taskflow/src"
       *
       * The result is the absolute path to the src/ folder,
       * which Vite uses to resolve any import starting with "@/".
       *
       * Example resolution:
       *   import { Button } from '@/components/ui/Button'
       *   → resolves to: /Users/you/projects/taskflow/src/components/ui/Button
       */
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  // ──────────────────────────────────────────
  // SERVER — Development server configuration
  // ──────────────────────────────────────────
  server: {
    // Port for the development server
    // Default is 5173, but we explicitly set it for clarity
    port: 5173,

    // Automatically open the browser when dev server starts
    // Set to false if you prefer to open manually
    open: false,

    // Enable CORS (needed for Firebase Auth redirects in some cases)
    cors: true,
  },

  // ──────────────────────────────────────────
  // BUILD — Production build configuration
  // ──────────────────────────────────────────
  build: {
    // Output directory for production build
    outDir: 'dist',

    // Generate source maps for production
    // Useful for debugging production errors
    // Set to false for maximum security (hides source code)
    sourcemap: false,

    // Chunk size warning limit (in KB)
    // Warns if any JS bundle exceeds this size
    // Helps catch accidental large imports
    chunkSizeWarningLimit: 1000,
  },
})
