import { defineStore } from 'pinia'
import { ref } from 'vue'
import { EntityOptions, type Entity } from '@/shared/api'
import { typicodeApi } from '@/shared/api'

export const useEntityStore = defineStore('companies', () => {
  const isEntityLoading = ref<boolean>(false)
  const entitiesList = ref<Array<Entity>>([])

  async function createEntity(url: keyof EntityOptions) {
    isEntityLoading.value = true
    try {
      const { data } = await typicodeApi.entities.createEntity(url)
      const id: number = data
      entitiesList.value = [
        ...entitiesList.value,
        { name: EntityOptions[url as keyof typeof EntityOptions], id }
      ]
    } finally {
      isEntityLoading.value = false
    }
  }

  return { isEntityLoading, entitiesList, createEntity }
})
