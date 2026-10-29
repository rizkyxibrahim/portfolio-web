<template>
  <Vertical>
    <PageTitle title="Dashboard" />
    <div class="card p-6">
      <h2 class="text-xl font-semibold text-default-900 mb-2">Selamat datang, Muhammad Rizky Ibrahim</h2>
      <p class="text-default-500">Ini adalah panel privat. Hanya Anda yang memiliki akses.</p>
    </div>
  </Vertical>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports'
import Vertical from '../../layouts/vertical.vue'
import PageTitle from '../../components/PageTitle.vue'

definePageMeta({
  middleware: 'auth',
})
</script>
