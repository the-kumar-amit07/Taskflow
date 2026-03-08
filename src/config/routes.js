// FILE: src/config/routes.js

/**
 * Route Path Constants
 *
 * Centralized route paths used by React Router.
 * Using constants prevents typos and makes refactoring easy.
 *
 * Bad:  <Link to="/workspace/123/boards">  ← typo-prone string
 * Good: <Link to={ROUTES.WORKSPACE_BOARDS(123)}>  ← IDE autocomplete
 */


export const ROUTES = {
    // Public routes
    LOGIN: '/login',

    // Protected routes
    HOME: '/',
    DASHBOARD: '/dashboard',

    //Workspace routes
    WORKSPACE: '/workspace/:workspaceId',
    WORKSPACE_SETTINGS:'/workspace/:workspaceId/settings',
    WORKSPACE_MEMBERS: '/workspace/:workspaceId/members',
    
    // Board routes
    BOARD: '/board/:boardId',

    // Catch-all
    NOT_FOUND:'*',
}

/**
 * Route path builder functions.
 * These replace dynamic segments with actual values.
 *
 * Example: buildPath.board('abc123') → '/board/abc123'
 */

export const buildPath = {
    workspace: (workspaceId) => `/workspace/${workspaceId}`,
    workspaceSettings: (workspaceId) => `/workspace/${workspaceId}/settings`,
    workspaceMembers: (workspaceId) => `/workspace/${workspaceId}/members`,
    board: (boardId) => `/board/${boardId}`,
};