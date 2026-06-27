export interface LoginDto {
  email: string
  password: string
}

export interface RegisterDto {
  username: string
  email: string
  password: string
}

export interface AuthResponse {
  accessToken: string
  refreshToken?: string
  message: string
}
