// src/router/guards/authGuard.js
const isAuthRoute = (routeName) => routeName === 'auth'
const isPublicRoute = (route) => route.meta?.public === true
const requiresAuth = (route) => !isPublicRoute(route)

export const handleAuthNavigation = (to, auth) => {
  // Block authenticated users from auth page
  if (isAuthRoute(to.name) && auth.isAdminAuthenticated) {
    return { name: 'home' }
  }

  // Allow public routes
  if (isPublicRoute(to)) {
    return true
  }

  // Redirect unauthenticated users from protected routes
  if (requiresAuth(to) && !auth.isAdminAuthenticated) {
    return { name: 'auth' }
  }

  return true
}
