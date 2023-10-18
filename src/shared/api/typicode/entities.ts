import type { AxiosPromise } from "axios"
import { instance } from "./base"

// Роут для создания сущности
export const createEntity = (url: string): AxiosPromise => {
    return instance.post(url, [])
}
