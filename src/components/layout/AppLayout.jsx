// FILE: src/components/layout/AppLayout.jsx

/**
 * App Layout Component
 *
 * The main layout wrapper for authenticated pages.
 * Provides the consistent structure:
 *
 * ┌──────────────────────────────────────┐
 * │            Top Navbar                │
 * ├──────────┬───────────────────────────┤
 * │          │                           │
 * │ Sidebar  │      Content Area         │
 * │          │                           │
 * │          │   (pages render here      │
 * │          │    via React Router       │
 * │          │    <Outlet />)            │
 * │          │                           │
 * └──────────┴───────────────────────────┘
 *
 * Will be implemented in Step 25.
 */

export default function AppLayout({ children }) {
  return <div>{children}</div>;
}
