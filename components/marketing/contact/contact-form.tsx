'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, useReducedMotion } from 'framer-motion'
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { fadeUp, stagger } from '@/lib/animations'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Enter a valid email address'),
  company: z.string().optional(),
  category: z.enum(['sales', 'support', 'billing', 'partnership', 'press', 'other'], {
    required_error: 'Please select a topic',
  }),
  message: z.string().min(20, 'Message must be at least 20 characters').max(2000, 'Message too long'),
})

type ContactFormValues = z.infer<typeof contactSchema>

type SubmitState = 'idle' | 'loading' | 'success' | 'error'

const CATEGORIES = [
  { value: 'sales', label: 'Sales & Pricing' },
  { value: 'support', label: 'Technical Support' },
  { value: 'billing', label: 'Billing & Subscriptions' },
  { value: 'partnership', label: 'Partnership & Integrations' },
  { value: 'press', label: 'Press & Media' },
  { value: 'other', label: 'Other' },
] as const

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const reduced = useReducedMotion()

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      message: '',
    },
  })

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitState('loading')
    try {
      // Placeholder: replace with apiClient call when backend endpoint is ready
      await new Promise<void>((resolve) => setTimeout(resolve, 1400))
      console.info('Contact form submission:', values)
      setSubmitState('success')
      form.reset()
    } catch {
      setSubmitState('error')
    }
  }

  return (
    <section className="px-4 py-8 md:px-6 md:py-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={reduced ? {} : stagger}
        className="mx-auto max-w-7xl"
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_480px] xl:grid-cols-[1fr_520px]">
          {/* Left — copy */}
          <motion.div variants={reduced ? {} : fadeUp} className="flex flex-col justify-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-indigo-400">
              Send a message
            </p>
            <h2 className="mb-5 text-3xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-4xl">
              Tell us what
              <br />
              you&apos;re working on.
            </h2>
            <p className="mb-8 max-w-md text-base leading-relaxed text-white/50">
              A short message is all it takes. We respond to every inquiry — no bots, no automated
              deflection. A Dextra team member will reply directly.
            </p>

            {/* Trust signals */}
            <div className="space-y-3">
              {[
                'No sales pressure — we match the right plan to your shop',
                'M-Pesa and KRA setup help included for free',
                'We operate in Kenya, Uganda, and Tanzania',
              ].map((point) => (
                <div key={point} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <span className="text-sm text-white/50">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form card */}
          <motion.div
            variants={reduced ? {} : fadeUp}
            className="rounded-2xl p-6 md:p-8"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {submitState === 'success' ? (
              <motion.div
                initial={reduced ? {} : { opacity: 0, scale: 0.95 }}
                animate={reduced ? {} : { opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center py-10 text-center"
              >
                <div
                  className="mb-5 flex h-16 w-16 items-center justify-center rounded-full"
                  style={{ background: 'rgba(52,211,153,0.12)' }}
                >
                  <CheckCircle2 className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Message sent</h3>
                <p className="mb-6 text-sm leading-relaxed text-white/50">
                  We&apos;ve received your message and will respond within our published SLA. Check
                  your inbox — and spam just in case.
                </p>
                <Button
                  variant="ghost_white"
                  size="sm"
                  onClick={() => setSubmitState('idle')}
                >
                  Send another message
                </Button>
              </motion.div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    {/* Name */}
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-semibold uppercase tracking-wide text-white/50">
                            Full name
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Wanjiku Kamau"
                              className="border-white/10 bg-white/[0.04] text-white placeholder:text-white/20 focus-visible:ring-indigo-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Company */}
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-semibold uppercase tracking-wide text-white/50">
                            Company{' '}
                            <span className="normal-case text-white/25">(optional)</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Nairobi Mart Ltd"
                              className="border-white/10 bg-white/[0.04] text-white placeholder:text-white/20 focus-visible:ring-indigo-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-semibold uppercase tracking-wide text-white/50">
                          Work email
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="wanjiku@nairobimart.co.ke"
                            className="border-white/10 bg-white/[0.04] text-white placeholder:text-white/20 focus-visible:ring-indigo-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Category */}
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-semibold uppercase tracking-wide text-white/50">
                          Topic
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="border-white/10 bg-white/[0.04] text-white focus:ring-indigo-500 data-[placeholder]:text-white/25">
                              <SelectValue placeholder="What can we help with?" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent
                            className="border-white/10"
                            style={{ background: '#13131f', color: '#f8fafc' }}
                          >
                            {CATEGORIES.map(({ value, label }) => (
                              <SelectItem
                                key={value}
                                value={value}
                                className="cursor-pointer text-white/80 focus:bg-white/[0.06] focus:text-white"
                              >
                                {label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Message */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-semibold uppercase tracking-wide text-white/50">
                          Message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            rows={5}
                            placeholder="Tell us about your shops, your current setup, and what you're trying to solve..."
                            className="resize-none border-white/10 bg-white/[0.04] text-white placeholder:text-white/20 focus-visible:ring-indigo-500"
                          />
                        </FormControl>
                        <div className="flex items-center justify-between">
                          <FormMessage />
                          <span className="ml-auto text-xs text-white/20">
                            {field.value?.length ?? 0}/2000
                          </span>
                        </div>
                      </FormItem>
                    )}
                  />

                  {submitState === 'error' && (
                    <div
                      className="flex items-center gap-2.5 rounded-lg px-4 py-3 text-sm text-red-400"
                      style={{ background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.2)' }}
                    >
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      Something went wrong. Try WhatsApp or email directly.
                    </div>
                  )}

                  <motion.div whileHover={reduced ? {} : { scale: 1.02 }} whileTap={reduced ? {} : { scale: 0.98 }}>
                    <Button
                      type="submit"
                      variant="brand"
                      size="lg"
                      disabled={submitState === 'loading'}
                      className="w-full gap-2 font-bold shadow-[0_8px_32px_rgba(79,70,229,0.35)]"
                    >
                      {submitState === 'loading' ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send message
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </motion.div>

                  <p className="text-center text-xs text-white/25">
                    We respond within our published SLAs · No spam, ever
                  </p>
                </form>
              </Form>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
