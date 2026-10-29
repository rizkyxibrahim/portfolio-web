<template>
  <Vertical>
    <PageTitle title="Profil" />
    <div class="card p-6">
      <div v-if="auth.loading" class="text-default-500">Memuat profil...</div>
      <div v-else-if="auth.user" class="flex items-center gap-6">
        <img :src="auth.user.profile_photo_url || '/avatar-1.png'" alt="avatar" class="size-20 rounded-full" />
        <div>
          <h2 class="text-xl font-semibold text-default-900">{{ auth.user.name }}</h2>
          <p class="text-default-500">@{{ auth.user.username }}</p>
          <p class="text-default-500">{{ auth.user.email }}</p>
          <p class="text-default-500">{{ auth.user.phone }}</p>
        </div>
      </div>
      <p v-else class="text-default-500">Profil tidak tersedia.</p>
    </div>
  </Vertical>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports'
import { onMounted } from '#imports'
import Vertical from '../../layouts/vertical.vue'
import PageTitle from '../../components/PageTitle.vue'
import { useAuthStore } from '~/stores/auth'

const auth = useAuthStore()

onMounted(async () => {
  if (!auth.user) {
    await auth.fetchProfile()
  }
})

definePageMeta({
  middleware: 'auth',
})
</script>
