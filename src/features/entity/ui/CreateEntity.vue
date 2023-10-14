<script setup lang="ts">
import { useEntityStore } from '@/entities/entity'
import { Button, Dropdown } from '@/shared/ui'
import { ref, computed, type Ref } from 'vue'
import { EntityOptions } from '@/shared/api'

const chosen = ref<Ref<EntityOptions> | null>(null)
const disabled = computed(() => chosen.value === null)
const options = Object.values(EntityOptions)
const store = useEntityStore()
</script>

<template>
  <div class="container">
    <h3 class="title">Создание сущности</h3>
    <Dropdown style="width: 200px" :options="options" @select="chosen = $event" />
    <Button
      @click="
        chosen &&
          store.createEntity(
            Object.keys(EntityOptions)[options.indexOf(chosen)] as keyof EntityOptions
          )
      "
      :loading="store.isEntityLoading"
      :disabled="disabled"
    >
      Создать
    </Button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .title {
    color: var(--accent-color);
    font-weight: var(--font-bold);
    font-size: var(--font-large);
  }
}
</style>
