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

export default function Spinner({size = 'md'}) { 
    return (
        <div role="status" aria-label='loading' className={`spinner-${size}`}>
            <span>Loading...</span>
        </div>
    )
}