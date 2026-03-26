// FILE: src/components/ui/Spinner/Spinner.jsx

/**
 * Spinner Component
 *
 * A simple loading spinner for use inside buttons and
 * small inline loading indicators. For page-level loading,
 * prefer Skeleton components.
 *
 * Will be implemented alongside other UI components.
 */

export default function Spinner({ size = 'md' }) {
  const sizeClasses = {
    sm: 'h4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
  };

  return (
    <div
      role="status"
      aria-label="loading"
      className={sizeClasses[size] || sizeClasses.md}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
