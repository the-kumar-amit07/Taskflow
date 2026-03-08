// FILE: src/hooks/useDebounce.js

/**
 * useDebounce Hook
 *
 * Delays updating a value until the user stops changing it
 * for a specified duration. Essential for search inputs —
 * without debouncing, every keystroke would trigger a database query.
 *
 * Example: User types "project" in search box.
 * Without debounce: 7 queries fired (p, pr, pro, proj, proje, projec, project)
 * With debounce (300ms): 1 query fired ("project") after user stops typing
 *
 * Will be implemented alongside search functionality.
 */

// Placeholder — will be implemented later