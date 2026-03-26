// FILE: src/components/feedback/NotFound.jsx

/**
 * 404 Not Found Component
 *
 * Shown when a user navigates to a URL that does not exist.
 * Includes a link to go back to the dashboard.
 *
 * Will be implemented alongside routing (Step 14).
 */

export default function NotFound() {
  return (
    <div role="alert">
      <h1>404</h1>
      <p>Page not found</p>
    </div>
  );
}
