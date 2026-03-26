// FILE: src/lib/constants.js

/**
 * Application Constants
 *
 * Centralized location for all magic numbers, strings,
 * and configuration values used across the application.
 *
 * WHY constants in one file?
 * - Changing a value updates it everywhere automatically
 * - No "magic numbers" scattered in code
 * - Easy to find all configurable values
 * - Prevents typos in string comparisons
 *
 * Example: Instead of writing role === 'admin' in 15 places,
 * write role === ROLES.ADMIN. If "admin" ever changes to
 * "administrator", you update ONE place.
 */

/**
 * User roles within workspaces and boards.
 * Ordered by permission level (highest to lowest).
 */
export const ROLES = {
  OWNER: 'owner',
  ADMIN: 'admin',
  MEMBER: 'member',
  VIEWER: 'viewer',
};

/**
 * Board visibility options.
 */
export const BOARD_VISIBILITY = {
  PRIVATE: 'private',
  WORKSPACE: 'workspace',
  PUBLIC: 'public',
};

/**
 * Default board background colors.
 * These are the color options shown when creating a new board.
 */
export const BOARD_COLORS = [
  { name: 'sky', value: '#0079BF' },
  { name: 'Emerald', value: '#519839' },
  { name: 'Violet', value: '#89609E' },
  { name: 'Sunset', value: '#FF6B35' },
  { name: 'Tangerine', value: '#D29034' },
  { name: 'Crimson', value: '#B04632' },
  { name: 'Slate', value: '#4C4C4C' },
  { name: 'Ocean', value: '#0079BF' },
];

/**
 * Card label colors.
 * These are the label color options for card labels.
 */
export const LABEL_COLORS = [
  { name: 'Green', value: '#61BD4F' },
  { name: 'Yellow', value: '#F2D600' },
  { name: 'Orange', value: '#FF9F1A' },
  { name: 'Red', value: '#EB5A46' },
  { name: 'Purple', value: '#C377E0' },
  { name: 'Blue', value: '#0079BF' },
  { name: 'Teal', value: '#00C2E0' },
  { name: 'Lime', value: '#51E898' },
  { name: 'Pink', value: '#FF78CB' },
  { name: 'Black', value: '#344563' },
];

/**
 * Firestore collection names.
 * Using constants prevents typos in collection paths.
 *
 * Bad:  collection(db, 'workspaces')  ← typo-prone string
 * Good: collection(db, COLLECTIONS.WORKSPACES)  ← IDE autocomplete
 */
export const COLLECTIONS = {
  USERS: 'users',
  WORKSPACES: 'workspaces',
  WORKSPACE_MEMBERS: 'workspaceMembers',
  BOARDS: 'boards',
  BOARD_MEMBERS: 'boardMembers',
  LISTS: 'lists',
  CARDS: 'cards',
  LABELS: 'labels',
  COMMENTS: 'comments',
  CHECKLISTS: 'checklists',
  CHECKLIST_ITEMS: 'checklistItems',
  ACTIVITY_LOG: 'activityLog',
  CARD_ATTACHMENTS: 'cardAttachments',
};

/**
 * Drag and drop type identifiers.
 * Used by the drag-and-drop library to distinguish
 * between dragging lists vs. dragging cards.
 */
export const DND_TYPES = {
  LIST: 'LIST',
  CARD: 'CARD',
};

/**
 * Pagination defaults.
 */
export const PAGINATION = {
  BOARDS_PER_PAGE: 12,
  CARDS_PER_PAGE: 50,
  ACTIVITY_PER_PAGE: 20,
  COMMENTS_PER_PAGE: 20,
};

/**
 * Debounce delays (in milliseconds).
 */
export const DEBOUNCE = {
  SEARCH: 300, // 0.3 seconds
  AUTOSAVE: 200, // 0.2 seconds
  RESIZE: 150, // 0.15 seconds
};
