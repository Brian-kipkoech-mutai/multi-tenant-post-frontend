# CLAUDE.md — Dextra Frontend

> **Engineering Motto**
> Premium, purposeful, East Africa-native. Every pixel should feel like it was built for a shop owner in Nairobi who expects the same quality as a Fortune 500 SaaS. No defaults. No generics. No compromises. Code should read as if it will be maintained by a different senior engineer tomorrow.

---

## What This System Is

Dextra is a **multi-tenant point-of-sale platform** built for East African retail. Target users:

- **Shop owners** — one or many shops across Kenya, Uganda, Tanzania. Need visibility, control, trust.
- **Managers** — day-to-day oversight, inventory, staff.
- **Cashiers** — speed is everything. One wrong tap costs money.
- **Platform admins** — Dextra staff managing tenants and subscriptions.

The product has two fundamentally different zones:

| Zone | Feel | Examples |
|---|---|---|
| **Marketing** | Storytelling, cinematic, premium brand | Landing, Pricing, Integrations, Docs |
| **App / Dashboard** | Functional clarity, data-dense, fast | POS, Inventory, Reports, Settings |

**Both must feel premium.** Only the animation density and emotional tone differ.

---

## Tech Stack

| Layer | Tool | Notes |
|---|---|---|
| Framework | Next.js 16 (App Router, RSC) | |
| Styling | Tailwind CSS v4 | shadcn CSS variable system |
| Components | shadcn/ui (radix-nova) | `shadcn` CLI |
| Icons | lucide-react | `h-4 w-4` / `h-5 w-5` default |
| Animations (marketing) | Framer Motion | `whileInView`, `AnimatePresence`, layout |
| 3D / particle effects | Three.js + `@react-three/fiber` + `@react-three/drei` | Hero backgrounds, premium moments |
| HTTP client | Axios | Typed instance with interceptors |
| Form validation | React Hook Form + Zod | All form inputs |
| State management | React context / Zustand (if complexity warrants) | |
| Fonts | Inter (sans) + Geist Mono (code/data) | |
| Theme | dark-first; `next-themes` | |
| Testing | Vitest + React Testing Library + Playwright | See Testing section |
| Package manager | pnpm | |
| Type checking | `tsc --noEmit` | `pnpm typecheck` |
| Linting | ESLint + Prettier | `pnpm lint` / `pnpm format` |

---

## Dev Commands

```bash
pnpm dev          # Next.js dev server (Turbopack)
pnpm build        # Production build
pnpm start        # Start production build locally
pnpm typecheck    # tsc --noEmit — must pass before any commit
pnpm lint         # ESLint
pnpm format       # Prettier
pnpm test         # Vitest unit + integration tests
pnpm test:watch   # Vitest watch mode
pnpm test:e2e     # Playwright end-to-end tests
pnpm test:cov     # Vitest with coverage report
```

The backend API runs separately at `http://localhost:3000` by default. Set `NEXT_PUBLIC_API_URL` in `.env.local`.

---

## Installing Key Libraries

```bash
# Animation
pnpm add framer-motion

# 3D
pnpm add three @react-three/fiber @react-three/drei
pnpm add -D @types/three

# HTTP client
pnpm add axios

# Forms
pnpm add react-hook-form zod @hookform/resolvers

# Testing
pnpm add -D vitest @vitest/ui @testing-library/react @testing-library/user-event
pnpm add -D @testing-library/jest-dom jsdom @vitejs/plugin-react
pnpm add -D playwright @playwright/test msw

# shadcn components (add as needed)
pnpm dlx shadcn@latest add card input label separator alert badge form
pnpm dlx shadcn@latest add table tabs dialog sheet dropdown-menu command
pnpm dlx shadcn@latest add skeleton avatar tooltip popover scroll-area
```

---

## Visual Language — Brand Identity

### Color Palette

The design lives in dark space. Background is `#080814`. Every color decision descends from this.

| Role | Hex / Tailwind | Usage |
|---|---|---|
| Background deep | `#080814` / `bg-[#080814]` | Page base |
| Surface | `bg-white/[0.04]` | Cards, panels |
| Surface elevated | `bg-white/[0.07]` | Modals, dropdowns |
| Border subtle | `border-white/[0.08]` | Card borders |
| Border active | `border-indigo-600/35` | Selected state |
| Primary brand | `from-indigo-600 to-violet-700` | CTAs, gradient fill |
| Primary muted | `text-indigo-400` / `#818cf8` | Labels, icons |
| Emerald success | `text-emerald-400` / `#34d399` | Live, completed, in-stock |
| Amber warning | `text-amber-400` / `#fbbf24` | Low stock, pending, inventory |
| Red danger / KRA | `text-red-400` / `#f87171` | Errors, KRA badges, failures |
| M-Pesa green | `#00a550` | M-Pesa UI only — not a general color |
| Foreground strong | `text-white` | Headlines, values |
| Foreground medium | `text-white/60` | Body copy |
| Foreground muted | `text-white/35` | Metadata, labels |
| Foreground ghost | `text-white/20` | Disabled, decorative |

Never introduce new primary colors. Extend via opacity variants of existing tokens.

### Typography Scale

- **Hero headline**: `text-5xl` → `text-7xl`, `font-extrabold`, `tracking-tight`, `leading-[1.08]`
- **Section headline**: `text-4xl` → `text-5xl`, `font-extrabold`, `leading-[1.12]`
- **Sub-headline**: `text-2xl` → `text-3xl`, `font-bold`
- **Body large**: `text-lg leading-relaxed text-white/55`
- **Body**: `text-sm` → `text-base leading-relaxed`
- **Caption / label**: `text-xs font-medium tracking-widest uppercase`
- **Mono / data**: `font-mono text-xs` for codes (CUIN, SKUs, refs, amounts)

### Gradients

```typescript
// Primary CTA gradient (use as Tailwind classes)
'bg-gradient-to-br from-indigo-600 to-violet-700'

// Text gradient — brand accent (CSS variable via globals.css)
'.text-gradient-brand' // applied via globals.css utility class

// Section background gradient
'bg-gradient-to-br from-[#1e1b4b] via-[#2e1065] to-[#0c4a6e]'
```

### Glassmorphism

```css
/* Use the .glass utility class defined in globals.css */
/* Tailwind equivalent: bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] */
```

### Glow / Shadow

```css
/* Indigo glow — hero card, primary CTA */
.glow-indigo { box-shadow: 0 0 60px rgba(79,70,229,0.25); }

/* Emerald glow — success state */
.glow-emerald { box-shadow: 0 0 60px rgba(16,185,129,0.2); }

/* CTA button glow (via Tailwind) */
shadow-[0_8px_32px_rgba(79,70,229,0.4)]
```

---

## Animation Strategy

### Reduced Motion — Non-Negotiable

All animations must check `prefers-reduced-motion`. Use the `useReducedMotion` hook from Framer Motion:

```typescript
// In every animated component
import { useReducedMotion } from 'framer-motion'

const prefersReduced = useReducedMotion()

// Pass to motion elements
<motion.div
  variants={prefersReduced ? {} : fadeUp}
  transition={prefersReduced ? { duration: 0 } : undefined}
/>
```

### Zone 1 — Marketing Pages (Framer Motion)

Every section animates in on scroll. Use `whileInView` with `viewport={{ once: true, margin: '-80px' }}`.

#### Core Variants (all live in `lib/animations.ts`)

```typescript
export const EASE_EXPO = [0.22, 1, 0.36, 1] as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_EXPO } },
}

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE_EXPO } },
}

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE_EXPO } },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: EASE_EXPO } },
}

export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}
```

#### Usage Pattern

```tsx
<motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-80px' }}
  variants={stagger}
>
  <motion.h2 variants={fadeUp}>Headline</motion.h2>
  <motion.p variants={fadeUp}>Body</motion.p>
  {items.map((item) => (
    <motion.div key={item.id} variants={fadeUp}>{item.content}</motion.div>
  ))}
</motion.section>
```

#### Hero Floating Card

```tsx
<motion.div
  animate={{ y: [0, -12, 0] }}
  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
>
  {/* dashboard mockup */}
</motion.div>
```

#### Card Hover

```tsx
<motion.div
  whileHover={{ y: -6, boxShadow: '0 24px 64px rgba(79,70,229,0.2)' }}
  transition={{ duration: 0.2, ease: 'easeOut' }}
>
```

#### Button Micro-interactions

```tsx
<motion.button
  whileHover={{ scale: 1.04 }}
  whileTap={{ scale: 0.97 }}
>
```

#### Ambient Animations (CSS — not Framer Motion)

Background orbs, blob morphing, shimmer effects — use CSS keyframes defined in `globals.css`. These don't need JS.

### Zone 2 — Three.js

Use Three.js only where CSS/Framer Motion can't achieve the desired depth.

**Appropriate uses:**
- Hero particle field (400–600 small points drifting in dark space)
- Pricing page rotating wireframe sphere or torus
- One "wow" moment per marketing page maximum

**Rules — every Three.js component must follow:**
1. Always `'use client'`
2. Always `dynamic(() => import(...), { ssr: false })` at the call site
3. `frameloop="demand"` or cap at 30fps on mobile
4. `Suspense` with solid-color matching fallback
5. Disable entirely if `useReducedMotion()` returns true
6. Cap WebGL context — one canvas per page

```tsx
// app/page.tsx (server component) calling a Three.js component
const HeroParticles = dynamic(() => import('@/components/three/hero-particles'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#080814]" />,
})
```

```tsx
// components/three/hero-particles.tsx
'use client'
import { Canvas } from '@react-three/fiber'
import { useReducedMotion } from 'framer-motion'

export default function HeroParticles() {
  const prefersReduced = useReducedMotion()
  if (prefersReduced) return null
  return (
    <Canvas frameloop="demand" camera={{ position: [0, 0, 5] }}>
      {/* particle system */}
    </Canvas>
  )
}
```

### Zone 3 — Dashboard (functional only)

- **No** entrance animations on tables, list views, detail panels
- **Yes** to shadcn `Skeleton` replacing content on load
- **Yes** to `transition-colors duration-150` on interactive state changes
- **Yes** to chart mount animations via Recharts/shadcn chart built-ins
- **Yes** to `AnimatePresence` for modals, sheets, toasts (shadcn handles these)
- **Never** stagger-animate a table of 50 rows

---

## Component Strategy — shadcn First

**Rule**: if shadcn has it, use it. Never rebuild from scratch what shadcn provides.

### shadcn Component Map

| Need | Component |
|---|---|
| Data containers | `Card`, `CardHeader`, `CardContent`, `CardFooter` |
| Tables | `Table`, `TableHeader`, `TableRow`, `TableCell`, `TableBody` |
| Status labels | `Badge` |
| Forms | `Form`, `FormField`, `FormItem`, `FormLabel`, `FormControl`, `FormMessage` |
| Text inputs | `Input`, `Textarea` |
| Selects | `Select`, `SelectTrigger`, `SelectContent`, `SelectItem` |
| Checkboxes / toggles | `Checkbox`, `Switch` |
| Navigation | `NavigationMenu`, `Sidebar`, `Breadcrumb` |
| Notifications | `Sonner` (toast), `Alert`, `AlertDialog` |
| Overlays | `Dialog`, `Sheet`, `Drawer` |
| Loading | `Skeleton` |
| Charts | `ChartContainer`, `ChartTooltip` (Recharts wrappers) |
| Actions menu | `DropdownMenu` |
| Command palette | `Command` |
| Dates | `Calendar`, date-picker composition |
| Progress | `Progress` |
| Avatars | `Avatar`, `AvatarImage`, `AvatarFallback` |
| Tabs | `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent` |
| Scroll | `ScrollArea` |
| Hints | `Tooltip`, `TooltipContent`, `TooltipProvider` |
| Dividers | `Separator` |

### Adding shadcn components

```bash
pnpm dlx shadcn@latest add <component-name>
```

Never edit `@/components/ui/*` directly. Wrap in `@/components/` with your variants.

### Custom Wrappers Pattern

```typescript
// components/dashboard/stat-card.tsx
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface StatCardProps {
  label: string
  value: string
  delta?: string
  trend?: 'up' | 'down' | 'neutral'
  className?: string
}

export function StatCard({ label, value, delta, trend, className }: StatCardProps) { ... }
```

### Button Variants (extend `components/ui/button.tsx`)

```typescript
brand: "bg-gradient-to-br from-indigo-600 to-violet-700 text-white shadow-lg shadow-indigo-600/30 hover:opacity-90 active:scale-[0.98] transition-all",
ghost_white: "text-white/75 hover:text-white hover:bg-white/10 border border-white/15",
```

---

## HTTP Client — Axios

All API communication goes through a typed Axios instance. Never use raw `fetch()` inside a component.

### Instance Setup (`lib/api/client.ts`)

```typescript
import axios from 'axios'
import type { AxiosError, InternalAxiosRequestConfig } from 'axios'
import { API_BASE_URL } from '@/lib/constants'

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
  timeout: 10_000,
})

// Response interceptor — auto-refresh on 401
apiClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const original = error.config as InternalAxiosRequestConfig & { _retry?: boolean }
    if (error.response?.status === 401 && !original._retry) {
      original._retry = true
      try {
        await axios.get(`${API_BASE_URL}/auth/refresh-token`, { withCredentials: true })
        return apiClient(original)
      } catch {
        window.location.href = '/login'
      }
    }
    return Promise.reject(error)
  }
)
```

### Domain API Modules (`lib/api/<domain>.ts`)

```typescript
// lib/api/auth.ts
import { apiClient } from './client'
import type { LoginDto, RegisterDto, AuthResponse } from '@/lib/types/auth.types'

export const authApi = {
  login: (dto: LoginDto) =>
    apiClient.post<AuthResponse>('/auth/login', dto).then((r) => r.data),

  register: (dto: RegisterDto) =>
    apiClient.post<AuthResponse>('/auth/signup', dto).then((r) => r.data),

  logout: () =>
    apiClient.get('/auth/logout').then((r) => r.data),

  refreshToken: () =>
    apiClient.get<AuthResponse>('/auth/refresh-token').then((r) => r.data),
}
```

### Error Handling

Axios errors have structured responses from the backend (`{ statusCode, message, error }`):

```typescript
import type { AxiosError } from 'axios'

export function extractApiError(err: unknown): string {
  const axiosErr = err as AxiosError<{ message: string | string[] }>
  const msg = axiosErr.response?.data?.message
  if (!msg) return 'Something went wrong. Please try again.'
  return Array.isArray(msg) ? msg[0] : msg
}
```

---

## Form Validation — React Hook Form + Zod

Every user-facing form uses `react-hook-form` with a `zod` schema. No manual validation in components.

```typescript
// Standard pattern
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const schema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})

type FormValues = z.infer<typeof schema>

function MyForm() {
  const form = useForm<FormValues>({ resolver: zodResolver(schema) })

  const onSubmit = async (values: FormValues) => { ... }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
```

---

## Testing — Production Standard

This is a production application. Tests are not optional.

### Stack

| Tool | Purpose |
|---|---|
| **Vitest** | Unit and integration tests (fast, native ESM, ts) |
| **React Testing Library** | Component rendering and user interaction |
| **@testing-library/user-event** | Realistic user input simulation |
| **MSW (Mock Service Worker)** | Mock API responses in tests |
| **Playwright** | End-to-end browser tests |

### Setup Files

```
vitest.config.ts          # Vitest configuration
src/tests/setup.ts        # Global test setup (@testing-library/jest-dom)
src/tests/mocks/          # MSW handlers
e2e/                      # Playwright E2E tests
```

### vitest.config.ts

```typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/tests/setup.ts'],
    coverage: {
      reporter: ['text', 'lcov'],
      exclude: ['node_modules', 'e2e', '.next'],
    },
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, '.') },
  },
})
```

### What to Test

| What | Test type | Tool |
|---|---|---|
| Utility functions (`formatKES`, `extractApiError`, etc.) | Unit | Vitest |
| Zod schemas (auth, forms) | Unit | Vitest |
| Custom hooks (`useReducedMotion`, `useShop`) | Unit | Vitest + RTL |
| Form components (login, register) | Integration | RTL + MSW |
| Dashboard stat cards, tables | Component | RTL |
| Auth flow (login → redirect) | E2E | Playwright |
| POS sale flow | E2E | Playwright |

### Test File Naming

- Unit: `lib/utils.test.ts`, `lib/schemas/auth.schema.test.ts`
- Component: `components/dashboard/stat-card.test.tsx`
- Hook: `hooks/use-shop.test.ts`
- E2E: `e2e/auth.spec.ts`, `e2e/sales.spec.ts`

### Example Component Test

```typescript
// components/dashboard/stat-card.test.tsx
import { render, screen } from '@testing-library/react'
import { StatCard } from './stat-card'

describe('StatCard', () => {
  it('renders value and label', () => {
    render(<StatCard label="Sales Today" value="KES 84,500" trend="up" delta="+12%" />)
    expect(screen.getByText('Sales Today')).toBeInTheDocument()
    expect(screen.getByText('KES 84,500')).toBeInTheDocument()
  })

  it('shows upward trend indicator', () => {
    render(<StatCard label="Revenue" value="KES 10,000" trend="up" delta="+5%" />)
    expect(screen.getByText('+5%')).toBeInTheDocument()
  })
})
```

### Example API Mock (MSW)

```typescript
// src/tests/mocks/handlers.ts
import { http, HttpResponse } from 'msw'
import { API_BASE_URL } from '@/lib/constants'

export const handlers = [
  http.post(`${API_BASE_URL}/auth/login`, () =>
    HttpResponse.json({ accessToken: 'mock-token', message: 'Login successful' })
  ),
]
```

### Coverage Requirements

- Utilities: **90%+**
- Components: **70%+**
- API layer: **80%+** (via MSW)
- E2E: all critical user flows (login, create sale, view dashboard)

---

## Architecture — Domain-Driven Folder Structure

```
app/
  (marketing)/              # Marketing pages — animations on, storytelling
    page.tsx                # Home / Landing (thin orchestrator)
    pricing/page.tsx
    integrations/page.tsx
    docs/[slug]/page.tsx

  (auth)/                   # Unauthenticated flows
    layout.tsx              # Centered dark layout
    login/page.tsx
    register/page.tsx

  (app)/                    # Authenticated app shell
    layout.tsx              # Sidebar + top nav — functional, minimal animation
    dashboard/page.tsx
    sales/
      page.tsx
      new/page.tsx
      [saleId]/page.tsx
    inventory/
      page.tsx
      [productId]/page.tsx
    customers/page.tsx
    reports/page.tsx
    settings/
      page.tsx
      billing/page.tsx
      team/page.tsx

  api/                      # Route handlers (Next.js API routes if needed)

components/
  ui/                       # shadcn generated — do NOT edit directly
  marketing/                # Marketing-only: hero, nav, chapters, footer
  dashboard/                # App-zone: stat cards, tables, charts
  three/                    # Three.js canvases — 'use client', SSR disabled always
  shared/                   # Used in both zones: Logo, PageHeader, StatusBadge

lib/
  api/                      # Axios domain modules
    client.ts               # Axios instance + interceptors
    auth.ts                 # authApi object
    sales.ts                # salesApi object
    inventory.ts            # inventoryApi object
    customers.ts
    payments.ts
  types/                    # TypeScript interfaces mirroring backend DTOs
    auth.types.ts
    sale.types.ts
    product.types.ts
    user.types.ts
    payment.types.ts
  schemas/                  # Zod schemas (form validation)
    auth.schema.ts
    sale.schema.ts
  utils.ts                  # cn(), formatKES(), formatDate(), extractApiError()
  constants.ts              # API_BASE_URL, app-wide constants
  animations.ts             # Framer Motion variant presets

hooks/
  use-shop.ts               # Active shop from JWT/context
  use-reduced-motion.ts     # Wraps Framer Motion's useReducedMotion
  use-sse.ts                # Server-Sent Events for live sale feed
  use-debounce.ts

src/
  tests/
    setup.ts                # Global test setup
    mocks/
      handlers.ts           # MSW handlers
      server.ts             # MSW server setup

e2e/                        # Playwright E2E specs
  auth.spec.ts
  sales.spec.ts
```

---

## TypeScript — Strict Rules

```json
// tsconfig.json must have:
{
  "compilerOptions": {
    "strict": true
  }
}
```

1. **No `any`** — ever. If typing a third-party library, use `unknown` + type guard.
2. **No `@ts-ignore`** — fix the root cause.
3. **No `as unknown as X`** unless wrapping untyped third-party code with a well-understood type.
4. **Explicit return types** on all exported functions: `function formatKES(amount: string | number): string`.
5. **Named interfaces for all component props** — no inline anonymous object types.
6. **Discriminated unions** for state, not multiple booleans.

```typescript
// WRONG
const [isLoading, isError, isSuccess] = [false, false, true]

// CORRECT
type LoadState = 'idle' | 'loading' | 'success' | 'error'
const [state, setState] = useState<LoadState>('idle')
```

7. **`as const` objects** for string literals — never raw strings for status/role values.
8. **All backend response types in `lib/types/`** — never inline anonymous shapes for API data.

---

## Responsive Design — Required

Every component must work at all breakpoints. Tailwind breakpoints used:

| Breakpoint | Width | Applies to |
|---|---|---|
| `sm` | 640px | Small phones |
| `md` | 768px | Tablets, phablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large monitors |

Rules:
- Mobile-first: base styles are mobile, override up with `md:`, `lg:`, etc.
- Navigation: hamburger/sheet on mobile, full nav on `md:`
- Grid layouts: `grid-cols-1` → `md:grid-cols-2` → `lg:grid-cols-4`
- Hero: `text-5xl` → `sm:text-6xl` → `lg:text-7xl`
- All padding scales: `px-4` → `md:px-6` → `lg:px-8`
- Hero dashboard mockup: hidden on `sm`, visible on `md:`
- Chapter two-column layouts: stack on mobile (`grid-cols-1`), side-by-side on `lg:`

Test on:
- 375px (iPhone SE)
- 768px (iPad)
- 1280px (laptop)
- 1920px (monitor)

---

## API Layer — Axios Patterns

### All API calls go through `lib/api/<domain>.ts`

Never `axios.get()` or `fetch()` inline in a component.

### RSC data fetching (server components)

```typescript
// app/(app)/sales/page.tsx — server component
import { salesApi } from '@/lib/api/sales'

export default async function SalesPage() {
  const { data, total } = await salesApi.list({ limit: 20, offset: 0 })
  return <SalesTable data={data} total={total} />
}
```

For server components, import the axios client directly — cookies are forwarded via `headers()` from `next/headers`.

### Client component data fetching

For client components that need to refetch (live data, search, filters), use `useState` + `useEffect` or SWR if added.

---

## Marketing Pages — Storytelling Rules

The landing page tells a story in chapters:

1. **Hero** — Problem statement and brand promise
2. **01 — Sell** — M-Pesa + cash flow, 3-tap checkout
3. **02 — Inventory** — WAC engine, real-time stock
4. **03 — Tax** — KRA eTIMS auto-filing
5. **04 — Owner App** — Real-time visibility from anywhere
6. **05 — Scale** — Multi-shop, RBAC, grow without switching

Each chapter:
- Has a numbered label (`01 — Sell`)
- Has a chapter-specific accent color
- Two-column layout alternating: copy left/right
- Visual = in-product mockup (not a screenshot, not a generic graphic)
- Animates in via Framer Motion `whileInView` stagger

Copy principles:
- Short sentences. Active voice.
- Speak to the owner, not the developer.
- Use East African context by name: M-Pesa, KRA, WAC, STK push, eTIMS, CUIN.
- Never: "robust", "powerful", "seamless", "next-level", "game-changer".

---

## Dashboard Design Rules

### Layout

- Fixed shadcn `Sidebar` with `SidebarProvider`
- Content area: `max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8`
- Page header: `h1` + optional actions in a `flex items-center justify-between` row
- shadcn `Separator` between page header and content

### Data Display

- KPI row at top: shadcn `Card` × 4 in a responsive grid
- Main content: `Table` or `ChartContainer`
- Filters: `flex flex-wrap gap-3` above the table
- Pagination below: `flex items-center justify-between`

### Density

- `text-sm` default, `text-xs` for metadata
- `p-3` / `p-4` in table rows, not `p-6`
- `gap-4` between cards on dashboard, not `gap-8`

### Status Badges

Use the `StatusBadge` wrapper component from `components/shared/status-badge.tsx` which maps backend status enums to shadcn `Badge` styling:

```typescript
type SaleStatus = 'PENDING' | 'COMPLETED' | 'FAILED' | 'CANCELLED' | 'RETURNED'
// Maps to: amber / emerald / red / muted / muted
```

---

## Currency Formatting

All amounts displayed in KES. Format at display layer only — never store formatted strings.

```typescript
// lib/utils.ts
export function formatKES(amount: string | number): string {
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    minimumFractionDigits: 2,
  }).format(Number(amount))
}
```

Never `KES ${amount}` string interpolation anywhere. Always `formatKES()`.

---

## Accessibility

- All interactive elements keyboard-navigable
- `alt` text on all images
- Color never the only state indicator — always pair with text/icon
- `aria-label` on icon-only buttons
- `prefers-reduced-motion` disables all JS animations (Framer Motion + Three.js)
- Focus ring visible at all times (`focus-visible:ring-2 focus-visible:ring-indigo-500`)

---

## Security Rules

1. **Never expose tokens in URLs** — cookies only for auth tokens
2. **Never log auth tokens or user PII** — even in dev console
3. **Sanitize user content** before rendering as `dangerouslySetInnerHTML` (avoid it entirely when possible)
4. **Environment variables** prefixed `NEXT_PUBLIC_` are public — no secrets there
5. **CSRF** — the backend uses cookie-based tokens with `SameSite`; no extra CSRF token needed on API calls

---

## Code Quality Checklist

Before marking any UI task complete:

- [ ] `pnpm typecheck` — zero errors
- [ ] `pnpm lint` — zero warnings
- [ ] `pnpm test` — all tests pass
- [ ] shadcn component used where one exists — no bespoke rebuilds
- [ ] Marketing page: Framer Motion `whileInView` on every section + `useReducedMotion` check
- [ ] Dashboard: no entrance animations, Skeleton on load
- [ ] All colors from brand palette — no arbitrary hex outside the defined palette
- [ ] `formatKES()` for all monetary display
- [ ] Responsive: stacks correctly on 375px, 768px, 1280px
- [ ] `prefers-reduced-motion` respected for all animations
- [ ] Three.js: `dynamic()` + `ssr: false` + `Suspense` fallback
- [ ] No `any`, no `@ts-ignore`, no raw `fetch()`/`axios` in components
- [ ] Zod schema for all forms
- [ ] Test file exists for new utilities and components
- [ ] Axios errors extracted via `extractApiError()` — no raw `.message` access
