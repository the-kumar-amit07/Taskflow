// FILE: src/components/feedback/ErrorBoundary.jsx

/**
 * Error Boundary Component
 *
 * React Error Boundaries catch JavaScript errors in their child
 * component tree, log those errors, and display a fallback UI.
 *
 * Without error boundaries, a single error in one component
 * crashes the ENTIRE application — the user sees a blank white page.
 *
 * With error boundaries, only the broken component shows an error
 * message, and the rest of the app continues working.
 *
 * IMPORTANT: Error boundaries MUST be class components.
 * React does not support error boundaries with hooks (as of React 19).
 * This is one of the very few cases where class components are still needed.
 */

import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to an error reporting service in production
    // For now, log to console
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div role="alert" className="p-6 text-center">
          <h2 className="text-lg font-semibold text-content-primary">
            Something went wrong.
          </h2>
          <p className="mt-2 text-sm text-content-secondary">
            An unexpected error occurred. Please refresh the page.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600"
          >
            Refresh Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
