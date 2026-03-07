// FILE: src/components/layout/PageHeader.jsx

/**
 * Page Header Component
 *
 * Consistent header for pages showing:
 * - Page title
 * - Breadcrumbs (optional)
 * - Action buttons (optional)
 *

 */

export default function PageHeader({ title, children }) {
    return (
        <header>
            <h1>{title}</h1>
            {children}
        </header>
    )
}