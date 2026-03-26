// FILE: src/App.jsx

/**
 * App Component — The Root of the Component Tree
 *
 * This is the top-level component that every other component
 * in our application will be a child of.
 *
 * Right now, it is intentionally simple — just a placeholder.
 * As we build the application, this component will grow to include:
 * - Redux Provider (state management)
 * - React Router (routing)
 * - Auth state observer
 * - Toast notification container
 * - Error boundary
 */

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface-sunken">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-content-primary">TaskFlow</h1>
        <p className="mt-2 text-content-secondary">
          Project foundation is ready. Let&apos;s build something great.
        </p>
      </div>
    </div>
  );
}

export default App;
