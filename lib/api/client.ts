import axios from 'axios'
import type { AxiosError, InternalAxiosRequestConfig } from 'axios'
import { API_BASE_URL } from '@/lib/constants'

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
  timeout: 10_000,
})

apiClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const original = error.config as InternalAxiosRequestConfig & { _retry?: boolean }

    // Skip refresh for auth endpoints — a 401 on login/signup is a user error, not a token expiry
    const isAuthEndpoint = original?.url?.startsWith('/auth/')
    if (error.response?.status === 401 && !original?._retry && !isAuthEndpoint) {
      original._retry = true
      try {
        await axios.get(`${API_BASE_URL}/auth/refresh-token`, { withCredentials: true })
        return apiClient(original)
      } catch {
        if (typeof window !== 'undefined') {
          window.location.href = '/login'
        }
      }
    }

    return Promise.reject(error)
  },
)
