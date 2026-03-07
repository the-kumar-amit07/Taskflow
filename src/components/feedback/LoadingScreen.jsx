
// FILE: src/components/feedback/LoadingScreen.jsx

/**
 * Loading Screen Component
 *
 * Full-page loading screen shown while:
 * - The app is checking authentication status
 * - Initial data is loading
 * - A route is lazy-loading
 *
 * This is the first thing users see when the app boots.
 * It should look polished — first impressions matter.
 *
 * Will be implemented alongside the auth system.
 */

export default function LoadingScreen() {
    return (
        <div role="status" aria-label="loading application">
            <h1>404</h1>
            <p>Page not found</p>
        </div>
    )
}