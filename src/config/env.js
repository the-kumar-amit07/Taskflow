// FILE: src/config/env.js

/**
 * Environment Variable Validation
 *
 * Validates that all required environment variables exist
 * at application startup. If any are missing, the app
 * fails FAST with a clear error message.
 *
 * WHY validate env vars?
 * Without validation, a missing Firebase API key causes a cryptic
 * error deep in the Firebase SDK. With validation, you get:
 * "Missing required environment variable: VITE_FIREBASE_API_KEY"
 *
 * The app crashes immediately with a clear message instead of
 * partially loading and then failing mysteriously.
 *
 * This is called "fail fast" — a principle used at every major
 * tech company. If something is wrong, fail immediately and clearly.
 *
 */

