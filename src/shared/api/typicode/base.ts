import axios from 'axios'

const LOCAL_STORAGE_TOKEN_KEY = 'access_token'

const MAIN_DOMAIN = import.meta.env.VITE_PRODUCTION_API
// const LOCALHOST_DOMAIN = 'http://localhost:3000'

const authInstance = axios.create({
  baseURL: MAIN_DOMAIN,
  headers: {
    'Content-Type': 'application/json',
    'X-Client-Id': import.meta.env.VITE_X_CLIENT_ID
  },
  method: 'GET'
})

export const instance = axios.create({
  baseURL: `${MAIN_DOMAIN}/entity`,
  headers: {
    'Content-Type': 'application/json'
  }
})

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Обработка ошибки отправки запроса. В случае ошибки пытаемся обновить access token
instance.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = { ...error.config }
    originalRequest._isRetry = true
    console.log(error)
    if (error && !error.config._isRetry) {
      //.response.status === 401 && error.config &&
      try {
        const response = await authInstance.get('/oauth')
        localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, response.data.access_token)
        localStorage.setItem(import.meta.env.VITE_LOCAL_STORAGE_DOMAIN_KEY, response.data.base_domain)
        return instance.request(originalRequest)
      } catch (e) {
        console.log('Auth error')
      }
    }
    throw error
  }
)
