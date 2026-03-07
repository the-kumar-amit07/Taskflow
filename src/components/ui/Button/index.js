// FILE: src/components/ui/Button/index.js

/**
 * Barrel Export for Button Component
 *
 * WHY barrel exports?
 *
 * Without barrel export:
 *   import Button from '../../../components/ui/Button/Button';
 *
 * With barrel export:
 *   import { Button } from '../../../components/ui/Button';
 *
 * Even better (with path aliases we set up in Step 7):
 *   import { Button } from '@/components/ui/Button';
 *
 * Barrel exports let you control the "public API" of a folder.
 * Only what you export from index.js is available to consumers.
 * Internal implementation details stay hidden.
 *
 * This is the same pattern used in npm packages — when you
 * import from 'react', you are importing from React's index.js.
 */

export { default as Button } from './Button';