<template>
  <div class="container mx-auto px-6 py-20">
    <h1 class="text-3xl font-bold text-default-900 mb-4">{{ route.params.slug }}</h1>
    <p class="text-default-500">Konten artikel akan ditampilkan di sini.</p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
</script>
