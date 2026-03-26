// FILE: src/components/ui/Skeleton/Skeleton.jsx

/**
 * Skeleton Component
 *
 * Loading placeholder that mimics the shape of content.
 * Used instead of spinners for a more polished UX.
 *
 * WHY skeletons over spinners?
 * Research shows users perceive skeleton screens as faster
 * than spinner-based loading. Skeletons give spatial context
 * ("content will appear HERE in THIS shape") while spinners
 * give no context about what is loading or where.
 *
 * Facebook, YouTube, LinkedIn, and Slack all use skeleton screens.
 *
 */

export default function Skeleton({ width, height, className = '' }) {
  return (
    <div
      className={`skeleton ${className}`}
      style={{ width, height }}
      role="status"
      aria-label="Loading"
    />
  );
}
