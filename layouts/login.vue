<script setup>
  import { Head } from '#components'
</script>

<template>
    <div>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet">
      </Head>
      
      <main>
        <div class="container">
          <slot />
        </div>
      </main>
    </div>
</template>
  