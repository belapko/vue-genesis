<script setup lang="ts">
import { EntitiesList, useEntityStore } from '@/entities/entity';
import { CreateEntity } from '@/features/entity'

const store = useEntityStore();
</script>

<template>
  <div class="content">
    <CreateEntity />
    <EntitiesList v-if="store.entitiesList.length" />
  </div>
</template>

<style scoped lang="scss">
.content {
  padding: 1rem;
  height: 100%;
  display: flex;
  gap: 5rem;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 480px) {
  .content {
    flex-direction: column;
  }
}
</style>
