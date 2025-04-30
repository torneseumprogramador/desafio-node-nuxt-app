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

  const getUsuario = () => {
    if (process.client) {
      return JSON.parse(localStorage.getItem('usuario') || '{}')
    }
    return null
  }

  const logout = () => {
    if (process.client) {
      localStorage.removeItem('token')
      return navigateTo('/admin/login')
    }
  }

  const getAuthHeaders = () => {
    const token = getToken()
    return {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
  }

  return {
    isAuthenticated,
    getToken,
    getUsuario,
    logout,
    getAuthHeaders
  }
} 