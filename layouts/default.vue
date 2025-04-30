<script setup>
  import { Head } from '#components'
</script>

<template>
    <div>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous">
      </Head>
      
      <header class="d-flex justify-content-between p-3 border-bottom">
        <div class="container d-flex align-items-center justify-content-between">
          <NuxtLink to="/" class="text-decoration-none"><strong>Home</strong></NuxtLink>
          <nav>
            <NuxtLink to="/produtos" class="me-3">Produtos</NuxtLink>
            <NuxtLink to="/sobre" class="me-3">Sobre</NuxtLink>
            <NuxtLink to="/admin" class="me-3">Admin</NuxtLink>
          </nav>
        </div>
      </header>
  
      <main class="container py-5">
        <slot />
      </main>
  
      <footer class="py-5 bg-light mt-auto border-top">
        <div class="container">
          <div class="row">
            <div class="col">
              <h5>Features</h5>
              <ul class="list-unstyled">
                <li><a href="#">Cool stuff</a></li>
                <li><a href="#">Team feature</a></li>
              </ul>
            </div>
            <div class="col">
              <h5>Resources</h5>
              <ul class="list-unstyled">
                <li><a href="#">Resource</a></li>
                <li><a href="#">Another resource</a></li>
              </ul>
            </div>
            <div class="col">
              <h5>About</h5>
              <ul class="list-unstyled">
                <li><a href="#">Team</a></li>
                <li><a href="#">Locations</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
</template>
  

<style>
  .bg-blue-500 {
    background-color: #0d6efd !important;
  }
  .bg-blue-400 {
    background-color: #60a5fa !important;
  }
  .bg-cyan-400 {
    background-color: #22d3ee !important;
  }
  .bg-orange-400 {
    background-color: #fb923c !important;
  }
</style>
