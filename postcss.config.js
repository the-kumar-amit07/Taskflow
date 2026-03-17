// FILE: postcss.config.js

/**
 * PostCSS Configuration
 *
 * PostCSS is a CSS transformation pipeline. It takes your CSS,
 * runs it through plugins, and outputs the final CSS.
 *
 * Our plugins:
 * 1. tailwindcss — Generates utility classes from your config
 * 2. autoprefixer — Adds vendor prefixes for browser support
 *
 * The ORDER matters:
 * - Tailwind runs FIRST to generate the CSS
 * - Autoprefixer runs SECOND to add prefixes to the generated CSS
 */
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
