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
    <div role="status" aria-label="Loading application">
      <p>Loading TaskFlow...</p>
    </div>
  );
}
