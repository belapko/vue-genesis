<script setup lang="ts">
import { useEntityStore } from '../model/store'
import EntityItem from './EntityItem.vue'

const store = useEntityStore()
</script>

<template>
  <ul class="table">
    <h3 class="title">Список сущностей</h3>
    <li class="tableItem" v-for="(entity, index) in store.entitiesList" :key="index">
      <EntityItem :id="entity.id" :name="entity.name" />
    </li>
  </ul>
</template>

<style scoped lang="scss">
.table {
  border: 2px solid var(--accent-color);
  border-radius: 1rem;
  padding: 1rem 3rem;
  height: 60vh;
  overflow: scroll;

  .title {
    color: var(--accent-color);
    font-weight: var(--font-bold);
    font-size: var(--font-large);
  }

  .tableItem {
    padding: 1rem 0px;
  }
}
</style>
