// FILE: src/lib/firebase.js

/**
 * Firebase Configuration & Initialization
 *
 * This file initializes the Firebase app and exports
 * the service instances (auth, firestore, storage)
 * that the rest of the application uses.
 *
 * CRITICAL RULES:
 * 1. Use Firebase v9+ MODULAR SDK (tree-shakeable)
 * 2. Never import from 'firebase/compat' (legacy, bloated)
 * 3. Environment variables for all config values
 * 4. Initialize each service only ONCE
 *

 */

