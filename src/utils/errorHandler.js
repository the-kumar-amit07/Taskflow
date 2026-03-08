// FILE: src/utils/errorHandler.js

/**
 * Centralized Error Handler
 *
 * Processes errors from Firebase and other sources into
 * user-friendly messages. Also handles error logging.
 *
 * WHY centralized error handling?
 * - Firebase errors have cryptic codes like 'auth/popup-closed-by-user'
 * - Users should see "Login was cancelled" not the error code
 * - We want consistent error handling across the entire app
 * - We might want to log errors to a service (Sentry, LogRocket)
 *
 * Example:
 *   Input:  { code: 'permission-denied' }
 *   Output: 'You do not have permission to perform this action.'
 *
 * Will be implemented alongside the auth service.
 */
