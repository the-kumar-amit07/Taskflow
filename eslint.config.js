// FILE: eslint.config.js

/**
 * ESLint Configuration — Flat Config Format (ESLint 9+)
 *
 * This file defines ALL linting rules for the TaskFlow project.
 *
 * HOW FLAT CONFIG WORKS:
 * ──────────────────────
 * Instead of the old cascading .eslintrc files, flat config uses
 * a single JavaScript file that exports an ARRAY of config objects.
 * Each object in the array can target specific files, add plugins,
 * or define rules. Objects later in the array override earlier ones.
 *
 * Think of it like layers of paint:
 *   Layer 1: Base rules (apply to everything)
 *   Layer 2: React-specific rules (apply to .jsx files)
 *   Layer 3: Prettier overrides (disable conflicting rules)
 *
 * Each layer can add, modify, or disable rules from previous layers.
 *
 * RULE SEVERITY LEVELS:
 * ─────────────────────
 *   'off'   or 0 — Rule is disabled
 *   'warn'  or 1 — Shows yellow warning (does not fail build)
 *   'error' or 2 — Shows red error (fails build in CI)
 */

import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettierConfig from 'eslint-config-prettier';

export default [
  // ──────────────────────────────────────────
  // LAYER 0: Global ignores
  // ──────────────────────────────────────────
  // Files and folders that ESLint should completely skip.
  // This is the equivalent of the old .eslintignore file.
  {
    ignores: [
      'dist/**',           // Production build output
      'build/**',          // Alternative build output
      'node_modules/**',   // Dependencies (never lint third-party code)
      'coverage/**',       // Test coverage reports
      '.firebase/**',      // Firebase deployment cache
      '*.config.js',       // Config files at root level (vite, postcss, tailwind)
    ],
  },

  // ──────────────────────────────────────────
  // LAYER 1: Base JavaScript rules
  // ──────────────────────────────────────────
  // These apply to ALL .js and .jsx files.
  {
    files: ['**/*.{js,jsx}'],

    // Start with ESLint's recommended rules as our foundation.
    // This includes ~30 rules that catch common JavaScript bugs:
    // - no-undef (using undefined variables)
    // - no-unused-vars (declared but never read)
    // - no-dupe-keys (duplicate object keys)
    // - no-unreachable (code after return statements)
    // - and many more
    ...js.configs.recommended,

    languageOptions: {
      // ECMAScript version — use the latest JavaScript features
      ecmaVersion: 2024,

      // Source type — we use ES modules (import/export)
      sourceType: 'module',

      // Global variables — tell ESLint what globals exist
      // so it does not report "window is not defined"
      globals: {
        ...globals.browser,  // window, document, console, fetch, etc.
        ...globals.es2024,   // Promise, Map, Set, Symbol, etc.
      },

      // Parser options for JSX support
      parserOptions: {
        ecmaFeatures: {
          jsx: true,          // Enable JSX parsing
        },
      },
    },

    // ──────────────────────────────────────────
    // PLUGINS — Additional rule sets
    // ──────────────────────────────────────────
    plugins: {
      // React Hooks plugin — enforces Rules of Hooks
      'react-hooks': reactHooks,

      // React Refresh plugin — ensures HMR compatibility
      'react-refresh': reactRefresh,

      // JSX Accessibility plugin — catches a11y violations
      'jsx-a11y': jsxA11y,
    },

    // ──────────────────────────────────────────
    // RULES — Our customized rule configuration
    // ──────────────────────────────────────────
    rules: {
      // ── REACT HOOKS RULES ─────────────────
      // These are CRITICAL. They prevent the most common React bugs.

      // Spread all recommended react-hooks rules
      ...reactHooks.configs.recommended.rules,

      // react-refresh: Only warn (not error) for non-component exports
      // This allows exporting constants and utilities alongside components
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // ── JSX ACCESSIBILITY RULES ────────────
      // Spread all recommended accessibility rules
      ...jsxA11y.configs.recommended.rules,

      // ── JAVASCRIPT QUALITY RULES ──────────

      /**
       * no-unused-vars — Detect declared but unused variables
       *
       * WHY: Unused variables indicate dead code or incomplete refactoring.
       * They clutter the codebase and confuse other developers.
       *
       * Configuration:
       * - argsIgnorePattern: '^_' → Allows _unused params (convention for
       *   intentionally unused parameters, e.g., (_event, index) => ...)
       * - varsIgnorePattern: '^_' → Same for variables
       * - destructuredArrayIgnorePattern: '^_' → Allows const [_, second] = arr
       * - caughtErrors: 'none' → Allows unused catch(error) parameters
       */
      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          caughtErrors: 'none',
        },
      ],

      /**
       * no-console — Warn about console.log statements
       *
       * WHY: console.log is for debugging. It should not ship to production.
       * console.warn and console.error are allowed because they serve
       * a purpose in production (error reporting, deprecation notices).
       *
       * We use 'warn' not 'error' so you can use console.log during
       * development without being blocked. Before deploying, clean them up.
       */
      'no-console': [
        'warn',
        {
          allow: ['warn', 'error', 'info'],
        },
      ],

      /**
       * prefer-const — Use const when a variable is never reassigned
       *
       * WHY: const communicates INTENT — "this value will never change."
       * It makes code easier to reason about. If you see `let`, you know
       * the value WILL change somewhere below.
       *
       * let count = 0;  ← ESLint: "count is never reassigned. Use const."
       * const count = 0; ← Correct (if you never do count = something)
       */
      'prefer-const': 'warn',

      /**
       * no-var — Disallow var declarations
       *
       * WHY: var has function-scoping and hoisting behavior that causes
       * subtle bugs. let and const have block-scoping (predictable).
       * There is zero reason to use var in modern JavaScript.
       */
      'no-var': 'error',

      /**
       * eqeqeq — Require strict equality (=== and !==)
       *
       * WHY: == does type coercion which causes unexpected behavior:
       *   0 == ''    → true  (wat?)
       *   1 == '1'   → true  (string coerced to number)
       *   null == undefined → true (special case)
       *
       * === does NO coercion — values must be the same type AND value.
       * This is ALWAYS what you want.
       *
       * 'smart' option allows == null (which catches both null and undefined)
       */
      'eqeqeq': ['error', 'smart'],

      /**
       * no-nested-ternary — Disallow nested ternary expressions
       *
       * WHY: Nested ternaries are extremely hard to read:
       *   const x = a ? b ? c : d : e;  ← What does this mean?
       *
       * Use if/else or early returns instead.
       */
      'no-nested-ternary': 'warn',

      /**
       * no-duplicate-imports — Disallow duplicate imports from same module
       *
       * WHY: Multiple import lines from the same module are messy:
       *   import { useState } from 'react';
       *   import { useEffect } from 'react';  ← Merge into one line
       *
       * Better:
       *   import { useState, useEffect } from 'react';
       */
      'no-duplicate-imports': 'error',

      /**
       * no-template-curly-in-string — Catch template literal mistakes
       *
       * WHY: Catches this common mistake:
       *   const msg = 'Hello ${name}';  ← Regular string, ${} is literal text!
       *
       * You probably meant:
       *   const msg = `Hello ${name}`;  ← Template literal with backticks
       */
      'no-template-curly-in-string': 'error',

      /**
       * no-unneeded-ternary — Disallow unnecessary ternaries
       *
       * WHY: Catches redundant patterns:
       *   const isActive = value ? true : false;  ← Just use: const isActive = !!value;
       *   const x = condition ? condition : fallback; ← Just use: const x = condition || fallback;
       */
      'no-unneeded-ternary': 'warn',

      /**
       * prefer-template — Prefer template literals over string concatenation
       *
       * WHY: Template literals are more readable:
       *   ❌ 'Hello ' + name + ', you have ' + count + ' items'
       *   ✅ `Hello ${name}, you have ${count} items`
       */
      'prefer-template': 'warn',

      /**
       * no-throw-literal — Require throwing Error objects
       *
       * WHY: Throwing strings loses the stack trace:
       *   ❌ throw 'Something went wrong';
       *   ✅ throw new Error('Something went wrong');
       *
       * Error objects include a stack trace that helps debug WHERE
       * the error occurred. String throws give you nothing.
       */
      'no-throw-literal': 'error',

      /**
       * curly — Require braces around all control flow blocks
       *
       * WHY: Braceless if/else is a source of subtle bugs:
       *   if (condition)
       *     doA();
       *     doB();  ← This ALWAYS runs! It is NOT inside the if.
       *
       * With braces, this is impossible:
       *   if (condition) {
       *     doA();
       *     doB();  ← Clearly inside the if block
       *   }
       */
      'curly': ['warn', 'all'],
    },

    // ──────────────────────────────────────────
    // SETTINGS — Plugin configuration
    // ──────────────────────────────────────────
    settings: {
      react: {
        // Automatically detect the React version
        // This helps react-specific rules make version-appropriate decisions
        version: 'detect',
      },
    },
  },

  // ──────────────────────────────────────────
  // LAYER 2: Prettier override (MUST be last)
  // ──────────────────────────────────────────
  // This spreads eslint-config-prettier which disables ALL ESLint
  // rules that could conflict with Prettier's formatting.
  //
  // WHY must this be LAST?
  // It works by overriding rules from previous layers.
  // If it came first, later layers could re-enable conflicting rules.
  prettierConfig,
];