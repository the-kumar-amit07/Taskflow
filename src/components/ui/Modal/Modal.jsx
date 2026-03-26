// FILE: src/components/ui/Modal/Modal.jsx

/**
 * Modal Component
 *
 * A reusable, accessible modal dialog using React Portal.
 *
 * WHY React Portal?
 * Modals need to render ON TOP of everything else in the page.
 * If a modal is rendered inside a component with overflow:hidden
 * or a low z-index, it gets clipped or hidden. Portals render
 * the modal directly under <body>, bypassing all parent CSS.
 *
 * Accessibility features:
 * - Focus trap (Tab key stays within modal)
 * - Escape key closes modal
 * - Background click closes modal
 * - aria-modal="true"
 * - Focus returns to trigger element on close
 *
 * Will be implemented in Step 17.
 */

export default function Modal({ children }) {
  return <div>{children}</div>;
}
