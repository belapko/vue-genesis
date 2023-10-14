<script setup lang="ts">
import { EntitiesList } from '@/entities/entity';
import { CreateEntity } from '@/features/entity'

</script>

<template>
  <div class="content">
    <CreateEntity />
    <EntitiesList />
  </div>
</template>

<style scoped lang="scss">
.content {
  height: 100%;
  display: flex;
  gap: 5rem;
  align-items: center;
  justify-content: center;
}
</style>
