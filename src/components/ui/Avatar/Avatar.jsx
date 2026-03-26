// FILE: src/components/ui/Avatar/Avatar.jsx

/**
 * Avatar Component
 *
 * Displays user profile images with fallback to initials.
 * Supports multiple sizes and a status indicator.
 *
 */

export default function Avatar({ name, src, size = 'md' }) {
  return (
    <div aria-level={name} className={`avatar avatar-${size}`}>
      {src ? <img src={src} alt={name} /> : <span>{name.charAt(0)}</span>}
    </div>
  );
}
