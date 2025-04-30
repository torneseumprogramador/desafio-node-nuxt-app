<template>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card shadow-lg">
            <div class="card-body p-5">
              <h1 class="text-center mb-4">Bem-vindo ao Painel Administrativo</h1>
              <form @submit.prevent="handleLogin">
                <h2 class="h4 mb-4 text-center text-muted">Acesse sua conta</h2>

                <div v-if="error" class="alert alert-danger" role="alert">
                  {{ error }}
                </div>

                <div class="form-floating mb-3">
                  <input 
                    v-model="email"
                    type="email" 
                    class="form-control" 
                    id="floatingInput" 
                    placeholder="seu@email.com"
                    required
                  >
                  <label for="floatingInput">E-mail</label>
                </div>
                <div class="form-floating mb-3">
                  <input 
                    v-model="senha"
                    type="password" 
                    class="form-control" 
                    id="floatingPassword" 
                    placeholder="Sua senha"
                    required
                  >
                  <label for="floatingPassword">Senha</label>
                </div>

                <button class="btn btn-primary w-100 py-2 mb-3" type="submit">Entrar</button>
                <p class="text-center text-muted mt-4 mb-0">© 2024 - Sistema de Gerenciamento de Produtos</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
  definePageMeta({
    layout: 'login'
  })

  const config = useRuntimeConfig()
  const email = ref('')
  const senha = ref('')
  const error = ref('')
  const { isAuthenticated } = useAuth()

  // Verifica se já está autenticado ao carregar a página
  onMounted(() => {
    if (isAuthenticated()) {
      navigateTo('/admin')
    }
  })

  const handleLogin = async () => {
    try {
      const { data, error: fetchError } = await useFetch(`${config.public.apiBaseUrl}/auth/login`, {
        method: 'POST',
        body: {
          email: email.value,
          senha: senha.value
        }
      })

      if (fetchError.value) {
        error.value = fetchError.value.data.error || 'Erro ao fazer login. Verifique suas credenciais e tente novamente.'
        return
      }

      if (data.value) {
        localStorage.setItem('token', data.value.token)
        navigateTo('/admin')
      }
    } catch (err) {
      error.value = 'Erro ao fazer login. Verifique suas credenciais e tente novamente.'
      console.error('Erro ao fazer login:', err)
    }
  }
</script>