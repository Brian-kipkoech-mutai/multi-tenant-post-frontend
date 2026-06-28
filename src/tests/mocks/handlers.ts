import { http, HttpResponse } from 'msw'

const BASE = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000'

export const handlers = [
  http.post(`${BASE}/auth/login`, () =>
    HttpResponse.json({ accessToken: 'mock-access-token', message: 'Login successful' }),
  ),

  http.post(`${BASE}/auth/signup`, () =>
    HttpResponse.json({ accessToken: 'mock-access-token', message: 'Account created' }),
  ),

  http.get(`${BASE}/auth/logout`, () =>
    HttpResponse.json({ message: 'Logged out' }),
  ),

  http.get(`${BASE}/auth/refresh-token`, () =>
    HttpResponse.json({ accessToken: 'mock-access-token', message: 'Refreshed' }),
  ),
]
