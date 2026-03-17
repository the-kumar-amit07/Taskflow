// FILE: tailwind.config.js

/**
 * Tailwind CSS Configuration — TaskFlow Design System
 *
 * This file defines the complete visual language of our application.
 * Every color, spacing value, font, shadow, and animation used
 * anywhere in the app is defined or extended here.
 *
 * WHY configure instead of using defaults?
 * ──────────────────────────────────────────
 * Tailwind's defaults are excellent for getting started, but a
 * production SaaS app needs a BRANDED design system:
 * - Custom primary color (not Tailwind's default blue)
 * - Consistent spacing scale tuned for our UI density
 * - Custom shadows that match our design aesthetic
 * - Animation timings that feel intentional
 *
 * HOW Tailwind purges unused CSS:
 * ──────────────────────────────────
 * The "content" array tells Tailwind which files to scan for class names.
 * If a class like "bg-red-500" appears in ANY of those files,
 * it is included in the output CSS. If no file uses "bg-red-500",
 * it is removed. This is why production Tailwind CSS is tiny (~5-15KB).
 *
 * IMPORTANT: Tailwind scans for COMPLETE class names as static strings.
 * It cannot detect dynamically constructed class names:
 *
 *   ✅ className="bg-red-500"         → Tailwind finds "bg-red-500"
 *   ✅ className={isError ? "bg-red-500" : "bg-green-500"} → Both found
 *   ❌ className={`bg-${color}-500`}  → Tailwind CANNOT find this
 *
 * This is a common gotcha. Always use complete class name strings.
 */

/** @type {import('tailwindcss').Config} */
export default {
  // ──────────────────────────────────────────
  // CONTENT — Files to scan for class names
  // ──----------------------------------------
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  // ──────────────────────────────────────────
  // THEME — Design token definitions
  // ──────────────────────────────────────────
  theme: {
      /**
     * EXTEND vs. OVERRIDE
     *
     * Properties inside "extend" ADD to Tailwind's defaults.
     * Properties OUTSIDE "extend" REPLACE Tailwind's defaults.
     *
     * Example:
     *   extend: { colors: { brand: '#0079BF' } }
     *   → Adds "brand" color, keeps all default colors (red, blue, etc.)
     *
     *   colors: { brand: '#0079BF' }
     *   → ONLY "brand" exists. All default colors are GONE.
     *
     * We use "extend" for most things to keep Tailwind's useful defaults
     * while adding our custom tokens.
     */
    extend: {
      // ────────────────────────────────
      // COLORS — Our brand color palette
      // ────────────────────────────────
      colors: {
          /**
         * Brand / Primary Colors
         *
         * Used for primary buttons, links, active states, and
         * brand-identifying UI elements.
         *
         * The scale goes from 50 (lightest) to 950 (darkest).
         * 500 is the "base" — the color you would pick in a design tool.
         *
         * Usage:
         *   bg-brand-500      → Primary button background
         *   text-brand-600    → Link text color
         *   hover:bg-brand-600 → Button hover state
         *   bg-brand-50       → Subtle tinted background
         *   border-brand-200  → Light border accent
         */
        'brand': {
          50: '#EBF5FF',
          100: '#D6EAFF',
          200: '#ADD5FF',
          300: '#85C0FF',
          400: '#5CABFF',
          500: '#0079BF',   // ← Base brand color (Trello-inspired blue)
          600: '#006AA3',
          700: '#005587',
          800: '#00406B',
          900: '#002B4F',
          950: '#001B33',
        },
        /**
         * Success Colors — Positive actions and states
         * Used for: success toasts, completed tasks, active indicators
         */
        success: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
          950: '#052E16',
        },

        /**
         * Warning Colors — Caution states
         * Used for: due soon badges, warning toasts, attention indicators
         */
        warning: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
          950: '#451A03',
        },
        /**
         * Danger Colors — Destructive actions and error states
         * Used for: delete buttons, error toasts, overdue badges, error text
         */
        danger: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
          950: '#450A0A',
        },
          /**
         * Surface Colors — Backgrounds and card surfaces
         *
         * "Surface" is a Material Design concept — it refers to
         * the background layers of UI elements. By naming them
         * semantically, we make it easy to implement dark mode later.
         *
         * Usage:
         *   bg-surface        → Default page background
         *   bg-surface-overlay → Modal/dropdown background
         */
        surface: {
          DEFAULT: '#FFFFFF',
          raised: '#F8FAFC',
          overlay: '#FFFFFF',
          sunken: '#F1F5F9',
          border: '#E2E8F0',
        },
        /**
         * Content Colors — Text and icon colors
         *
         * Semantic naming for text colors based on emphasis level.
         * This is how design systems at Atlassian and GitHub work.
         *
         * Usage:
         *   text-content-primary   → Main headings, primary text
         *   text-content-secondary → Subtitles, descriptions
         *   text-content-tertiary  → Timestamps, metadata
         *   text-content-inverse   → Text on dark backgrounds
         */
        content: {
          primary: '#0F172A',
          secondary: '#475569',
          tertiary: '#94A3B8',
          disabled: '#CBD5E1',
          inverse: '#FFFFFF',
        }
      },
      // ────────────────────────────────
      // FONT FAMILY — Typography
      // ────────────────────────────────
      fontFamily: {
        /**
         * System font stack — matches the OS native font.
         * This is what GitHub, Stripe, and most SaaS apps use.
         *
         * Why system fonts?
         * - Zero download time (already on user's device)
         * - Feels native and familiar to the user
         * - Great rendering on every platform
         *
         * The stack tries fonts in order:
         * 1. Inter — Our preferred font (we may add it later)
         * 2. System UI fonts (varies by OS)
         * 3. Sans-serif fallback
         */
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        /**
         * Monospace font — For code blocks, IDs, and technical content
         */
        mono: [
          'JetBrains Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      // ────────────────────────────────
      // FONT SIZE — Type scale
      // ────────────────────────────────
      fontSize: {
        /**
         * Custom type scale with matching line heights.
         *
         * Format: ['font-size', { lineHeight: 'value' }]
         *
         * This ensures every font size has a pre-calculated
         * line height that maintains vertical rhythm.
         */
        'xs': ['0.75rem', { lineHeight: '1rem' }],       // 12px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],    // 14px
        'base': ['1rem', { lineHeight: '1.5rem' }],       // 16px
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],    // 18px
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],     // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],        // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],   // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],     // 36px
      },
       // ────────────────────────────────
      // SPACING — Custom spacing values
      // ────────────────────────────────
      spacing: {
        /**
         * Additional spacing values beyond Tailwind's defaults.
         * Tailwind already provides 0, 1(4px), 2(8px), 3(12px),
         * 4(16px), 5(20px), 6(24px), 8(32px), etc.
         *
         * We add values specific to our UI needs.
         */
        '4.5': '1.125rem',   // 18px — Between 4 (16px) and 5 (20px)
        '13': '3.25rem',     // 52px — Navbar height
        '15': '3.75rem',     // 60px — Common section spacing
        '18': '4.5rem',      // 72px — Sidebar width collapsed
        '62': '15.5rem',     // 248px — Sidebar width expanded
        '68': '17rem',       // 272px — Card detail sidebar
      },
      // ────────────────────────────────
      // BORDER RADIUS — Roundness scale
      // ────────────────────────────────
      borderRadius: {
        /**
         * Custom border radius values.
         * Our UI uses slightly larger default rounding than Tailwind's.
         */
        'sm': '0.25rem',     // 4px — Subtle rounding (badges, tags)
        'md': '0.375rem',    // 6px — Default for inputs, small cards
        'lg': '0.5rem',      // 8px — Cards, dropdowns
        'xl': '0.75rem',     // 12px — Modals, large cards
        '2xl': '1rem',       // 16px — Board cards, prominent elements
      },
      // ────────────────────────────────
      // BOX SHADOW — Elevation system
      // ────────────────────────────────
      boxShadow: {
        /**
         * Shadow scale representing elevation levels.
         *
         * Material Design concept: elements closer to the user
         * have larger, more diffuse shadows. This creates visual
         * hierarchy — modals "float" above the page.
         *
         * Usage:
         *   shadow-sm    → Subtle elevation (cards in a grid)
         *   shadow-md    → Medium elevation (dropdowns)
         *   shadow-lg    → High elevation (modals, popovers)
         *   shadow-card  → Specific shadow for Trello-style cards
         */
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
        'card': '0 1px 1px rgba(0, 0, 0, 0.08), 0 0 1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 4px 8px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0, 0, 0, 0.08)',
        'sidebar': '2px 0 8px rgba(0, 0, 0, 0.06)',
        'dropdown': '0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)',
        'modal': '0 16px 48px rgba(0, 0, 0, 0.16), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
       // ────────────────────────────────
      // ANIMATIONS — Custom transitions
      // ────────────────────────────────
      keyframes: {
        /**
         * Custom keyframe animations.
         *
         * These are referenced by the "animation" utilities below.
         * Tailwind generates classes like "animate-fade-in".
         */

        // Fade in — for modals, toasts, new content
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        // Fade out — for dismissing elements
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        // Slide up — for modals and bottom sheets
        'slide-up': {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        // Slide down — for dropdowns
        'slide-down': {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },

        // Scale in — for popovers and tooltips
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        // Skeleton shimmer — loading state animation
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },

        // Spin — for loading spinners
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        /**
         * Animation utility classes.
         *
         * Format: 'name duration timing-function iteration'
         *
         * Usage in JSX:
         *   <div className="animate-fade-in">Appears smoothly</div>
         *   <div className="animate-slide-up">Slides up from below</div>
         *   <div className="animate-shimmer">Loading skeleton</div>
         */
        'fade-in': 'fade-in 0.2s ease-out',
        'fade-out': 'fade-out 0.2s ease-in',
        'slide-up': 'slide-up 0.3s ease-out',
        'slide-down': 'slide-down 0.2s ease-out',
        'scale-in': 'scale-in 0.2s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin-slow 1.5s linear infinite',
      },
      // ────────────────────────────────
      // TRANSITION — Timing presets
      // ────────────────────────────────
      transitionDuration: {
        '0': '0ms',
        '75': '75ms',
        '100': '100ms',
        '150': '150ms',     // Quick interactions (hover, focus)
        '200': '200ms',     // Default transitions
        '300': '300ms',     // Medium transitions (sidebar, panels)
        '500': '500ms',     // Slow transitions (page transitions)
      },
      // ────────────────────────────────
      // Z-INDEX — Stacking order scale
      // ────────────────────────────────
      zIndex: {
        /**
         * Z-index scale for managing stacking order.
         *
         * Using named z-index values prevents the "z-index: 99999"
         * wars that happen when developers compete to put their
         * element on top. A defined scale solves this.
         *
         * Rule: The higher the z-index, the closer to the user.
         *
         * Layout:
         *   content (0) → sidebar (30) → navbar (40) →
         *   dropdown (50) → modal-backdrop (60) → modal (70) →
         *   toast (80) → tooltip (90)
         */
        '0': '0',
        'content': '10',
        'sidebar': '30',
        'navbar': '40',
        'dropdown': '50',
        'modal-backdrop': '60',
        'modal': '70',
        'toast': '80',
        'tooltip': '90',
      },
      // ────────────────────────────────
      // MIN/MAX WIDTH — Layout constraints
      // ────────────────────────────────
      minWidth: {
        'card': '272px',     // Minimum width of a Trello-style list
        'modal-sm': '400px',
        'modal-md': '560px',
        'modal-lg': '720px',
      },

      maxWidth: {
        'card': '272px',     // List column width
        'modal-sm': '400px',
        'modal-md': '560px',
        'modal-lg': '720px',
        'content': '1280px', // Max content width for centered layouts
      },
    },
  },

  // ──────────────────────────────────────────
  // PLUGINS — Tailwind extensions
  // ──────────────────────────────────────────
  plugins: [
    /**
     * We can add Tailwind plugins here later:
     * - @tailwindcss/forms (better default form styles)
     * - @tailwindcss/typography (prose styles for rich text)
     * - @tailwindcss/container-queries (responsive containers)
     *
     * We will add these as needed, not upfront, to keep
     * the bundle lean.
     */
  ],
}

