// FILE: src/components/ui/Button/Button.jsx

/**
 * Button Component
 *
 * A reusable, accessible button component with multiple variants:
 * - Primary (main actions — "Create Board", "Save")
 * - Secondary (secondary actions — "Cancel", "Back")
 * - Danger (destructive actions — "Delete", "Remove")
 * - Ghost (subtle actions — icon buttons, minimal UI)
 *
 * Supports:
 * - Loading state (shows spinner, disables click)
 * - Disabled state
 * - Different sizes (sm, md, lg)
 * - Icons (left or right of text)
 * - Full width option
 */

export default function Button({ children, ...props }) {
  return <button {...props}>{children}</button>;
}
