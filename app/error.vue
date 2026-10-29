<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold mb-2">{{ error?.statusCode || 404 }}</h1>
      <p class="text-default-500 mb-4">{{ error?.message || 'Halaman tidak ditemukan' }}</p>
      <NuxtLink to="/" class="btn bg-primary text-white">Kembali</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ error?: any }>()
</script>
