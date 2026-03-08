// FILE: src/services/realtimeService.js

/**
 * Firestore Real-time Listener Manager
 *
 * Manages onSnapshot listener subscriptions.
 *
 * WHY a centralized listener manager?
 * - Listeners must be unsubscribed when components unmount
 * - Forgetting to unsubscribe causes memory leaks
 * - Multiple components might listen to the same data
 * - We need to track active listeners for debugging
 *
 * This service provides subscribe/unsubscribe functions
 * that handle cleanup automatically.
 *
 */

// Placeholder — will be implemented later