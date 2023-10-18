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
      // Пытаемя создать сущность. В случае успеха добавляем в стор {id, название} новой сущности
      const { data } = await typicodeApi.entities.createEntity(
        `${localStorage.getItem(import.meta.env.VITE_LOCAL_STORAGE_DOMAIN_KEY) || ''}/${url as string}`
      )
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
