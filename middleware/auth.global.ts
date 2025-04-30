export default defineNuxtRouteMiddleware((to, from) => {
  // Não executar no servidor para evitar erros de localStorage
  if (process.server) return
  
  const token = localStorage.getItem('token')
  
  // Se não houver token e a rota começar com /admin
  if (!token && to.path.startsWith('/admin')) {
    // Redireciona para o login, exceto se já estiver na página de login
    if (to.path !== '/admin/login') {
      return navigateTo('/admin/login')
    }
  }

  // Se houver token e estiver tentando acessar o login
  if (token && to.path === '/admin/login') {
    return navigateTo('/admin')
  }
}) 