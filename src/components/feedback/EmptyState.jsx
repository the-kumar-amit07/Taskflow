// FILE: src/components/feedback/EmptyState.jsx

/**
 * Empty State Component
 *
 * Displayed when a list/page has no content.
 * Examples:
 * - "No boards yet. Create your first board!"
 * - "No cards in this list. Add a card to get started."
 *
 * Good empty states:
 * 1. Tell the user WHY it is empty
 * 2. Tell the user HOW to fill it
 * 3. Include a call-to-action button
 * 4. Use an illustration or icon for visual appeal
 *
 */

export default function EmptyState({title, description, action}) {
    return (
        <div role="status">
            <h2>{title}</h2>
            {description && <p>{description}</p>}
            {action}
        </div>
    )
}