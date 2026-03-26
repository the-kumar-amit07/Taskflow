// FILE: src/features/auth/index.js

/**
 * Auth Feature — Public API
 *
 * This file is the ONLY entry point for the auth feature.
 * Other features should import from here, NOT from internal files.
 *
 * Good:  import { useAuth } from '@/features/auth';
 * Bad:   import { useAuth } from '@/features/auth/hooks/useAuth';
 *
 * WHY? This gives us the freedom to reorganize internal files
 * without breaking imports across the codebase. The public API
 * (this file) is the contract. Internal structure is private.
 *
 * This is the same pattern npm packages use. When you write
 * import { useState } from 'react', you are importing from
 * React's public API, not from React's internal file structure.
 *
 * Will export auth components, hooks, and utilities as they are built.
 */

// Exports will be added as components are implemented
