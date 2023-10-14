<script setup lang="ts">
import { type Entity } from '@/shared/api'

defineProps<Entity>()
</script>

<template>
  <p><span class="title">id: </span>{{ id }}</p>
  <p><span class="title">Название: </span>{{ name }}</p>
</template>

<style scoped lang="scss">
.title {
  font-weight: var(--font-semibold);
}
</style>
