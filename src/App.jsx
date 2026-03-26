// FILE: src/App.jsx

/**
 * App Component — Tailwind CSS Verification
 *
 * Temporarily using Tailwind utility classes to verify the setup.
 * If you see styled content (colors, spacing, shadows), Tailwind is working.
 * We will clean this up after verification.
 */

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface-sunken p-8">
      <div className="w-full max-w-md space-y-6 rounded-xl bg-surface p-8 shadow-lg">
        {/* App title with brand color */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-content-primary">TaskFlow</h1>
          <p className="mt-2 text-sm text-content-secondary">
            Project management for modern teams
          </p>
        </div>

        {/* Color palette test */}
        <div className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-content-tertiary">
            Design Tokens Test
          </h2>

          {/* Brand color */}
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-brand-500" />
            <span className="text-sm text-content-secondary">
              Brand (bg-brand-500)
            </span>
          </div>

          {/* Success color */}
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-success-500" />
            <span className="text-sm text-content-secondary">
              Success (bg-success-500)
            </span>
          </div>

          {/* Warning color */}
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-warning-500" />
            <span className="text-sm text-content-secondary">
              Warning (bg-warning-500)
            </span>
          </div>

          {/* Danger color */}
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-danger-500" />
            <span className="text-sm text-content-secondary">
              Danger (bg-danger-500)
            </span>
          </div>
        </div>

        {/* Shadow test */}
        <div className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-content-tertiary">
            Shadow & Animation Test
          </h2>
          <div className="rounded-lg bg-surface p-4 shadow-card transition-shadow duration-200 hover:shadow-card-hover">
            <p className="text-sm text-content-secondary">
              Hover me — I have card shadow transition
            </p>
          </div>
        </div>

        {/* Skeleton test */}
        <div className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-content-tertiary">
            Skeleton Loading Test
          </h2>
          <div className="space-y-2">
            <div className="skeleton h-4 w-3/4 rounded" />
            <div className="skeleton h-4 w-1/2 rounded" />
            <div className="skeleton h-4 w-5/6 rounded" />
          </div>
        </div>

        {/* Button-like test */}
        <div className="flex gap-3">
          <button
            type="button"
            className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-content-inverse transition-colors duration-150 hover:bg-brand-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
          >
            Primary
          </button>
          <button
            type="button"
            className="rounded-lg border border-surface-border bg-surface px-4 py-2 text-sm font-medium text-content-primary transition-colors duration-150 hover:bg-surface-sunken"
          >
            Secondary
          </button>
          <button
            type="button"
            className="rounded-lg bg-danger-500 px-4 py-2 text-sm font-medium text-content-inverse transition-colors duration-150 hover:bg-danger-600"
          >
            Danger
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-content-tertiary">
          ✅ If this page is styled with colors, shadows, and animations —
          Tailwind CSS is working correctly!
        </p>
      </div>
    </div>
  );
}

export default App;
