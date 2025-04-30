<template>
  <div class="container py-4">
    <h1 class="mb-4">Meu Perfil</h1>

    <div v-if="error" class="alert alert-danger" role="alert">
      {{ error }}
    </div>

    <div v-if="usuario" class="card">
      <div class="card-body">
        <div class="row mb-3">
          <div class="col-md-6">
            <h6 class="text-muted">Nome Completo</h6>
            <p class="h5">{{ usuario.nome }} {{ usuario.sobrenome }}</p>
          </div>
          <div class="col-md-6">
            <h6 class="text-muted">E-mail</h6>
            <p class="h5">{{ usuario.email }}</p>
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-md-6">
            <h6 class="text-muted">Documento</h6>
            <p class="h5">{{ usuario.documento }}</p>
          </div>
          <div class="col-md-6">
            <h6 class="text-muted">CEP</h6>
            <p class="h5">{{ usuario.cep }}</p>
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-12">
            <h6 class="text-muted">Endereço Completo</h6>
            <p class="h5">
              {{ usuario.endereco }}, {{ usuario.numero }}
              {{ usuario.complemento ? ` - ${usuario.complemento}` : '' }}
              <br>
              {{ usuario.bairro }} - {{ usuario.cidade }}/{{ usuario.estado }}
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <h6 class="text-muted">Cadastrado em</h6>
            <p class="h5">{{ formatarData(usuario.createdAt) }}</p>
          </div>
          <div class="col-md-6">
            <h6 class="text-muted">Última atualização</h6>
            <p class="h5">{{ formatarData(usuario.updatedAt) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin'
})

const config = useRuntimeConfig()
const { getAuthHeaders, getUsuario } = useAuth()
const usuario = ref(null)
const error = ref('')

// Formatar data
const formatarData = (data) => {
  if (!data) return ''
  return new Date(data).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

// Buscar dados do usuário
onMounted(async () => {
  try {
    const { data } = await useFetch(`${config.public.apiBaseUrl}/usuarios/perfil`, {
      ...getAuthHeaders()
    })
    
    if (data.value) {
      usuario.value = data.value
    }
  } catch (err) {
    error.value = 'Erro ao carregar dados do perfil'
    console.error(err)
  }
})
</script>