export const useAuth = () => {
  const isAuthenticated = () => {
    if (process.client) {
      return !!localStorage.getItem('token')
    }
    return false
  }

  const getToken = () => {
    if (process.client) {
      return localStorage.getItem('token')
    }
    return null
  }

  const logout = () => {
    if (process.client) {
      localStorage.removeItem('token')
      return navigateTo('/admin/login')
    }
  }

  return {
    isAuthenticated,
    getToken,
    logout
  }
} 