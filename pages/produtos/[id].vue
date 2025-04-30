<template>
  <div>
    <h1>Detalhes do Produto</h1>
    
    <div v-if="produto" class="card">
      <img :src="produto.urlImagem" class="card-img-top" :alt="produto.nome" style="max-width: 300px;">
      <div class="card-body">
        <h5 class="card-title">{{ produto.nome }}</h5>
        <p class="card-text">{{ produto.descricao }}</p>
        <p class="card-text">
          <strong>Preço:</strong> R$ {{ produto.preco }}
        </p>
        <p class="card-text">
          <strong>Categoria:</strong>
          <span :class="produto.categoria.cor" class="badge">
            {{ produto.categoria.nome }}
          </span>
        </p>
        <NuxtLink to="/produtos" class="btn btn-secondary">Voltar para lista</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const config = useRuntimeConfig()

const { data: produto } = await useFetch(`${config.public.apiBaseUrl}/produtos/${route.params.id}`)
</script> 