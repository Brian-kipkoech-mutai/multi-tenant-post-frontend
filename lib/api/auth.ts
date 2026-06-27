import { apiClient } from './client'
import type { AuthResponse, LoginDto, RegisterDto } from '@/lib/types/auth.types'

export const authApi = {
  login: (dto: LoginDto): Promise<AuthResponse> =>
    apiClient.post<AuthResponse>('/auth/login', dto).then((r) => r.data),

  register: (dto: RegisterDto): Promise<AuthResponse> =>
    apiClient.post<AuthResponse>('/auth/signup', dto).then((r) => r.data),

  logout: (): Promise<{ message: string }> =>
    apiClient.get<{ message: string }>('/auth/logout').then((r) => r.data),

  refreshToken: (): Promise<AuthResponse> =>
    apiClient.get<AuthResponse>('/auth/refresh-token').then((r) => r.data),
}
