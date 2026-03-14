// FILE: src/app/App.jsx

/**
 * Root Application Component
 *
 * This is the top-level component that wraps the entire application.
 * It will contain:
 * - Redux Provider (state management wrapper)
 * - Router Provider (routing wrapper)
 * - Auth state observer (check if user is logged in)
 * - Toast container (notification system)
 * - Error boundary (catch rendering errors)
 *
 * Think of this as the "main entrance" of a building — everything
 * flows through here.
 *
 * Will be fully implemented when we set up routing (Step 14)
 * and auth (Steps 30-41).
 *
 * For now, we re-export from the current src/App.jsx location.
 */

function App() {
  return (
    <div style={{padding:'2rem', fontFamily:'monospace'}}>
      <h1>TaskFlow</h1>
      <p>Project foundation is ready. Let&apos;s build something great.</p>

      <hr style={{ margin: '1rem 0' }} />
      <h2>Environment Variable Test</h2>
      <p>
        If you see &quot;placeholder&quot; values below, the .env.local file is being
        read correctly. We will replace these with real Firebase values in Step 8.
      </p>
      <ul style={{ marginTop: '1rem', lineHeight: '2' }}>
        <li><strong>MODE:</strong>{import.meta.env.MODE}</li>
        <li><strong>DEV:</strong>{import.meta.env.DEV ? 'true' : 'false'}</li>
        <li><strong>APP-NAME:</strong>{import.meta.env.VITE_APP_NAME}</li>
        <li><strong>PROJECT-ID:</strong>{import.meta.env.VITE_FIREBASE_PROJECT_ID}</li>
        <li><strong>API Key (first 10 chars)::</strong>{''}
          {import.meta.env.VITE_FIREBASE_API_KEY?.substring(0, 10)}...</li>
      </ul>
      <h2>Security Test</h2>
      <p>
        Variables WITHOUT the VITE_ prefix should be undefined.
        This proves Vite&apos;s security filtering works:
      </p>
      <ul style={{ marginTop: '1rem', lineHeight: '2' }}>
        <li>
          <strong>SECRET_KEY (no VITE_ prefix):</strong>{' '}
          {import.meta.env.SECRET_KEY || '✅ undefined (correct — not exposed)'}
        </li>
      </ul>
    </div>
  );
}

export default App;