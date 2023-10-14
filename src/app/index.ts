import { createApp } from 'vue'
import App from './App.vue'
import { pinia } from './providers'

export const app = createApp(App).use(pinia)
