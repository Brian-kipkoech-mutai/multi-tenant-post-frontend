'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion, useReducedMotion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff, LogIn } from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Alert, AlertDescription } from '@/components/ui/alert'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Separator } from '@/components/ui/separator'

import { authApi } from '@/lib/api/auth'
import { loginSchema, type LoginFormValues } from '@/lib/schemas/auth.schema'
import { extractApiError } from '@/lib/utils'
import { ROUTES } from '@/lib/constants'
import { fadeUp, stagger } from '@/lib/animations'

export default function LoginPage() {
  const router = useRouter()
  const reduced = useReducedMotion()
  const [showPassword, setShowPassword] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  })

  const { isSubmitting } = form.formState

  async function onSubmit(values: LoginFormValues) {
    setServerError(null)
    try {
      await authApi.login(values)
      router.push(ROUTES.dashboard)
    } catch (err) {
      setServerError(extractApiError(err))
    }
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={reduced ? {} : stagger}
    >
      <Card className="border-white/[0.08] bg-white/[0.04] shadow-2xl backdrop-blur-xl">
        <CardHeader className="pb-6 text-center">
          <motion.div variants={reduced ? {} : fadeUp}>
            <CardTitle className="text-2xl font-bold text-white">Welcome back</CardTitle>
            <CardDescription className="mt-2 text-white/50">
              Sign in to manage your shops
            </CardDescription>
          </motion.div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Server error */}
          {serverError && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Alert
                variant="destructive"
                className="border-red-500/30 bg-red-500/10 text-red-400"
              >
                <AlertDescription>{serverError}</AlertDescription>
              </Alert>
            </motion.div>
          )}

          <Form {...form}>
            <motion.form
              variants={reduced ? {} : stagger}
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4"
              noValidate
            >
              {/* Email */}
              <motion.div variants={reduced ? {} : fadeUp}>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/70">Email address</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="you@yourshop.co.ke"
                          autoComplete="email"
                          className="border-white/[0.1] bg-white/[0.06] text-white placeholder:text-white/30 focus:border-indigo-500/60 focus:ring-indigo-500/20"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>

              {/* Password */}
              <motion.div variants={reduced ? {} : fadeUp}>
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between">
                        <FormLabel className="text-white/70">Password</FormLabel>
                        <Link
                          href="#"
                          className="text-xs text-indigo-400 hover:text-indigo-300"
                          tabIndex={-1}
                        >
                          Forgot password?
                        </Link>
                      </div>
                      <FormControl>
                        <div className="relative">
                          <Input
                            {...field}
                            type={showPassword ? 'text' : 'password'}
                            placeholder="••••••••"
                            autoComplete="current-password"
                            className="border-white/[0.1] bg-white/[0.06] pr-10 text-white placeholder:text-white/30 focus:border-indigo-500/60 focus:ring-indigo-500/20"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword((v) => !v)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 transition-colors hover:text-white/70"
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>

              {/* Submit */}
              <motion.div variants={reduced ? {} : fadeUp} className="pt-2">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    variant="brand"
                    className="h-11 w-full gap-2 text-base font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Signing in…
                      </>
                    ) : (
                      <>
                        <LogIn className="h-4 w-4" />
                        Sign in
                      </>
                    )}
                  </Button>
                </motion.div>
              </motion.div>
            </motion.form>
          </Form>

          {/* Divider */}
          <motion.div variants={reduced ? {} : fadeUp} className="relative">
            <Separator className="bg-white/[0.08]" />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent px-3 text-xs text-white/30">
              New to Dextra?
            </span>
          </motion.div>

          {/* Register link */}
          <motion.div variants={reduced ? {} : fadeUp}>
            <Button
              variant="ghost_white"
              className="h-11 w-full text-sm font-medium"
              asChild
            >
              <Link href={ROUTES.register}>Create a free account</Link>
            </Button>
          </motion.div>

          {/* Trust */}
          <motion.p
            variants={reduced ? {} : fadeUp}
            className="text-center text-xs text-white/25"
          >
            Free for 30 days · No credit card required
          </motion.p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
