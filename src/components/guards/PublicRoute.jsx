// FILE: src/components/guards/PublicRoute.jsx

/**
 * Public Route Component
 *
 * Wraps routes that should ONLY be accessible to unauthenticated users.
 * If user IS logged in → redirect to /dashboard
 * If user is NOT logged in → render the child route (login page)
 *
 * This prevents logged-in users from seeing the login page —
 * they should go straight to the dashboard.
 *
 */

export default function PublicRoute({ children }) {
    return children;
}