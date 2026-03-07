/* eslint-disable no-unused-vars */
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
 *

 */

import { Component } from "react";

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return <div>Something went wrong.Please refresh the page.</div>;
        }
        return this.props.children;
    }
}