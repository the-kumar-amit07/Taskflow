// FILE: src/components/ui/Tooltip/Tooltip.jsx

/**
 * Tooltip Component
 *
 * Shows additional information on hover/focus.
 * Used for icon-only buttons, truncated text, and help text.
 *
 * Will be implemented alongside other UI components.
 */

export default function Tooltip({ children, content }) {
  return (
    <div role="tooltip" aria-label={content} title={content}>
      {children}
    </div>
  );
}
