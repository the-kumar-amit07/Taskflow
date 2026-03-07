// FILE: src/components/ui/Card/Card.jsx

/**
 * Card Component (UI Primitive)
 *
 * A generic container component with border, shadow, and padding.
 * NOT the Trello card — this is a design system primitive used
 * to wrap content in a visually distinct container.
 *
 * Think of this as a "white box with a shadow" that we use to
 * group related content. The board preview on the dashboard,
 * the workspace card, and other UI elements use this.
 *
 * Will be implemented alongside other UI components.
 */

export default function Card({ children, className = '' }) {
    return <div className={className}>{children}</div>
}