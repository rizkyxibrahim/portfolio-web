<template>
  <client-only>
    <Sidenav />
  </client-only>
</template>

<script setup lang="ts">
import Sidenav from '~/layouts/components/sidenav/index.vue'
import { useLayoutStore } from '~/stores/layout'

const { layout } = useLayoutStore()
</script>

