<template>
  <div class="container mx-auto px-6 py-20">
    <h1 class="text-3xl font-bold text-default-900 mb-6">Proyek</h1>
    <div class="grid md:grid-cols-3 gap-6">
      <div v-for="p in projects" :key="p.title" class="card p-6">
        <h3 class="font-semibold text-default-900 mb-2">{{ p.title }}</h3>
        <p class="text-default-500 text-sm mb-4">{{ p.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const projects = [
  { title: 'Portfolio Web', desc: 'Website portfolio pribadi berbasis Nuxt.' },
  { title: 'Dashboard Admin', desc: 'Panel admin dengan Rizky Ibrahim template.' },
  { title: 'API Service', desc: 'Layanan backend RESTful.' },
]
</script>
