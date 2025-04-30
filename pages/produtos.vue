<template>
  <div>
    <h1>Lista de Produtos</h1>
    
    <div class="table-responsive">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>Imagem</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Categoria</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="produto in produtos.data" :key="produto.id">
            <td>
              <img :src="produto.urlImagem" class="img-thumbnail" style="max-width: 100px;" :alt="produto.nome">
            </td>
            <td>{{ produto.nome }}</td>
            <td>{{ produto.descricao }}</td>
            <td>R$ {{ produto.preco }}</td>
            <td>
              <span :class="produto.categoria.cor" class="badge">
                {{ produto.categoria.nome }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <nav aria-label="Navegação de páginas" class="mt-4">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: !produtos.meta.previousPageUrl }">
          <a class="page-link" href="#" @click.prevent="mudarPagina(produtos.meta.currentPage - 1)">Anterior</a>
        </li>
        <li class="page-item" v-for="page in produtos.meta.lastPage" :key="page" 
            :class="{ active: page === produtos.meta.currentPage }">
          <a class="page-link" href="#" @click.prevent="mudarPagina(page)">{{ page }}</a>
        </li>
        <li class="page-item" :class="{ disabled: !produtos.meta.nextPageUrl }">
          <a class="page-link" href="#" @click.prevent="mudarPagina(produtos.meta.currentPage + 1)">Próximo</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
const { data: produtos } = await useFetch(`${config.public.apiBaseUrl}/produtos`)

const mudarPagina = async (pagina) => {
  const { data: novosProdutos } = await useFetch(`${config.public.apiBaseUrl}/produtos?page=${pagina}`)
  produtos.value = novosProdutos.value
}
</script>