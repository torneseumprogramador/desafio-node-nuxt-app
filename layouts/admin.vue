<script setup>
  import { Head } from '#components'
</script>

<template>
    <div>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous">
      </Head>
      
      <header data-bs-theme="dark">
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div class="container-fluid">
            <NuxtLink class="navbar-brand" to="/admin">Carousel</NuxtLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <ul class="navbar-nav me-auto mb-2 mb-md-0">
                <li class="nav-item">
                  <NuxtLink class="nav-link" :class="{ active: $route.path === '/admin' }" to="/admin">Home</NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink class="nav-link" :class="{ active: $route.path === '/admin/sobre' }" to="/admin/sobre">Sobre</NuxtLink>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </header>
  
      <main class="py-5 bg-light" style="margin-top: 50px;">
        <div class="container">
          <slot />
        </div>
      </main>
    </div>
</template>

<style>
    body {
        background-color: #f8f9fa;
    }
</style>
  