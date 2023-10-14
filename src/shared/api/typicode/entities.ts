import type { AxiosPromise } from "axios"
import { instance } from "./base"
import type { EntityOptions } from "./models"

export const createEntity = (url: keyof EntityOptions): AxiosPromise => {
    return instance.post(url as string, [])
}
