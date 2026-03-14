// FILE: src/config/env.js

/**
 * Environment Variable Validation
 *
 * Validates that all required environment variables exist
 * at application startup. If any are missing, the app
 * fails FAST with a clear error message.
 *
 * WHY validate env vars?
 * Without validation, a missing Firebase API key causes a cryptic
 * error deep in the Firebase SDK. With validation, you get:
 * "Missing required environment variable: VITE_FIREBASE_API_KEY"
 *
 * The app crashes immediately with a clear message instead of
 * partially loading and then failing mysteriously.
 *
 * This is called "fail fast" — a principle used at every major
 * tech company. If something is wrong, fail immediately and clearly.
 *
 */

/**
 * Environment Variable Validation
 *
 * This module validates that all required environment variables
 * are present and correctly formatted when the application starts.
 *
 * WHY THIS EXISTS:
 * ─────────────────
 * Without validation, a missing VITE_FIREBASE_API_KEY causes this:
 *   "TypeError: Cannot read properties of undefined"
 *   ...deep inside the Firebase SDK, 3 levels of abstraction away
 *
 * With validation, you get this instead:
 *   "❌ Missing required environment variable: VITE_FIREBASE_API_KEY
 *    → Add it to your .env.local file. See .env.example for reference."
 *
 * This is the "fail fast" principle — if something is fundamentally
 * wrong (missing config), crash immediately with a clear message
 * instead of partially working and failing mysteriously later.
 *
 * WHEN THIS RUNS:
 * ─────────────────
 * This module is imported at the top of firebase.js (Step 11).
 * Since firebase.js is imported by service files, which are imported
 * by Redux slices, which are imported by the store, which is imported
 * by main.jsx — this validation runs BEFORE anything renders.
 *
 * HOW VITE ENV VARS WORK:
 * ─────────────────────────
 * Vite replaces import.meta.env.VITE_* with actual values at BUILD TIME.
 * This means:
 * - In development: values come from .env.local
 * - In production:  values come from the build environment (Vercel, Netlify)
 * - Variables WITHOUT the VITE_ prefix are NOT available in browser code
 * - import.meta.env.MODE is 'development' or 'production'
 * - import.meta.env.DEV is true in development
 * - import.meta.env.PROD is true in production

 * Required environment variables and their descriptions.
 * Each entry documents what the variable is for, making this
 * file serve double duty as documentation.
 *
 * @type {Array<{key: string, description: string, required: boolean}>}
 */
const ENV_SCHEMA = [
    {
        key: "VITE_FIREBASE_API_KEY",
        description: "Firebase API key from Firebase Console → Project Settings",
        required:true,
    },
    {
        key: "VITE_FIREBASE_AUTH_DOMAIN",
        description: "Firebase Auth domain (e.g., your-project.firebaseapp.com)",
        required:true,
    },
    {
        key: "VITE_FIREBASE_PROJECT_ID",
        description: "Firebase project ID from Firebase Console → Project Settings",
        required:true,
    },
    {
        key: "VITE_FIREBASE_STORAGE_BUCKET",
        description: "Firebase Storage bucket (e.g., your-project.appspot.com)",
        required:true
    },
    {
        key: "VITE_FIREBASE_MESSAGING_SENDER_ID",
        description: "Firebase Messaging sender ID from Firebase Console → Project Settings",
        required:true,
    },
    {
        key: "VITE_FIREBASE_APP_ID",
        description: "Firebase app ID for your web application",
        required:true,
    },
    {
        key: "VITE_FIREBASE_MEASUREMENT_ID",
        description: "Firebase measurement ID for analytics (optional)",
        required:false,
    },
    {
        key: "VITE_APP_NAME",
        description: "Name of the application (used in UI and logs)",
        required:false,
    },
    {
        key: "VITE_APP_URL",
        description: "Base URL of the application (used for API calls)",
        required:false,
    }
]


/**
 * Validates all required environment variables are present.
 * Throws an error with a detailed message if any are missing.
 *
 * @throws {Error} If any required environment variable is missing
 * @returns {void}
 */

function validateEnv() {
    const missing = ENV_SCHEMA
                    .filter((variable) => variable.required)
                    .filter((variable) => {
                        const value = import.meta.env[variable.key];
                        return !value || value.startsWith("placeholder");
                    });
    if (missing.length > 0) {
        const missingList = missing
                            .map((variable) => `❎ ${variable.key} \n -> ${ variable.description }`)
                            .join("\n\n");
        if (import.meta.env.DEV) {
                console.warn(
                `\n⚠️  MISSING ENVIRONMENT VARIABLES\n` +
                `${'═'.repeat(50)}\n\n` +
                `The following required environment variables are missing or contain placeholder values:\n\n` +
                `${missingList}\n\n` +
                `${'─'.repeat(50)}\n` +
                `HOW TO FIX:\n` +
                `1. Copy .env.example to .env.local:\n` +
                `   cp .env.example .env.local\n\n` +
                `2. Fill in the real values from Firebase Console\n` +
                `   (Firebase Console → Project Settings → Your apps)\n\n` +
                `3. Restart the dev server (npm run dev)\n` +
                `${'═'.repeat(50)}\n`
                );
                return;
        }
        // In production, throw an error — the app cannot work without config
        throw new Error(
            `Missing required environment variables:\n${missingList}\n\n` +
            `Ensure all required variables are set in your deployment environment.`
        );
    }
}

/**
 * Validated environment configuration object.
 *
 * WHY export a config object instead of using import.meta.env directly?
 *
 * 1. CENTRALIZATION — All env vars are accessed from one place.
 *    If a variable name changes, you update ONE file.
 *
 * 2. VALIDATION — This module validates before exporting.
 *    Any import of this module triggers validation.
 *
 * 3. AUTOCOMPLETION — IDE can autocomplete env.firebase.apiKey
 *    but cannot autocomplete import.meta.env.VITE_FIREBASE_API_KEY
 *
 * 4. ABSTRACTION — Components do not need to know the env var names.
 *    They just import { env } from '@/config/env' and use env.firebase.apiKey
 *
 * Usage:
 *   import { env } from '@/config/env';
 *   console.log(env.firebase.apiKey);
 *   console.log(env.app.name);
 */

// Run validation when this module is first imported
validateEnv();

export const env = {
    firebase: {
        apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
        authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
        storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
        appId: import.meta.env.VITE_FIREBASE_APP_ID,
        measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
    },
    app: {
        name: import.meta.env.VITE_APP_NAME || 'TaskFlow',
        url: import.meta.env.VITE_APP_URL || 'http://localhost:5173',
    },
    // Vite built-in environment info
    isDevelopment: import.meta.env.DEV,
    isProduction: import.meta.env.PROD,
    mode: import.meta.env.MODE,
};