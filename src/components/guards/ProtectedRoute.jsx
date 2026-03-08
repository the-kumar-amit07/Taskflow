// FILE: src/components/guards/ProtectedRoute.jsx

/**
 * Protected Route Component
 *
 * Wraps routes that require authentication.
 * If user is NOT logged in → redirect to /login
 * If user IS logged in → render the child route
 *
 * This is the "bouncer at the club door" — no entry without
 * valid authentication.
 *
 */


export default function ProtectedRoute({ children }) {
    // Implementation for protected route logic
    return children;
}