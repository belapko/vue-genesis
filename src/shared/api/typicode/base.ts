import axios from 'axios'

const LOCAL_STORAGE_TOKEN_KEY = 'access_token'
const LOCAL_STORAGE_DOMAIN_KEY = 'base_domain'

const MAIN_DOMAIN = 'https://nest-genesis.vercel.app'
const LOCALHOST_DOMAIN = 'http://localhost:3000'

const authInstance = axios.create({
  baseURL: MAIN_DOMAIN,
  headers: {
    'Content-Type': 'application/json',
    'X-Client-Id': 31334466
  },
  method: 'GET'
})

export const instance = axios.create({
  baseURL: `${MAIN_DOMAIN}/entity/${localStorage.getItem(LOCAL_STORAGE_DOMAIN_KEY)}`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)}`
  }
})

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
        localStorage.setItem(LOCAL_STORAGE_DOMAIN_KEY, response.data.base_domain)
        return instance.request(originalRequest)
      } catch (e) {
        console.log('Auth error')
      }
    }
    throw error
  }
)
