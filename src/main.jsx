// FILE: src/main.jsx

/**
 * Application Entry Point
 *
 * This is the first JavaScript file that runs when the application loads.
 * It has ONE job: mount the React application onto the DOM.
 *
 * Think of this as the "ignition key" — it starts the engine (React)
 * and connects it to the car body (the HTML page).
 *
 * WHY StrictMode?
 * - StrictMode is a React development tool (removed in production builds)
 * - It intentionally double-renders components to help you find bugs
 * - It warns about deprecated APIs and unsafe lifecycle methods
 * - It helps you find accidental side effects
 * - If your component works correctly in StrictMode, it DEFINITELY
 *   works correctly without it. It is a safety net.
 *
 * IMPORTANT: StrictMode causes components to render TWICE in development.
 * This is intentional and expected. Do NOT remove StrictMode to "fix" this.
 * Your production build will render normally (once).
 */


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'

// Get the root element from the HTML. This is where our React app will be mounted.
const rootElement = document.getElementById('root')

// Fail fast if root element is not found. This prevents silent failures and makes it clear that the HTML structure is incorrect. The app cannot run without a root element.  
if (!rootElement) {
  throw new Error(
    "Root element not found. Make sure there is a <div id='root'></div> in your index.html."
  );
}

// Create a React root and render the App component wrapped in StrictMode
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
