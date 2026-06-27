import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  TrendingUp,
  Package,
  Users,
  Smartphone,
  Receipt,
  BarChart3,
  ChevronRight,
  Star,
} from "lucide-react"

export default function Page() {
  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-18px) rotate(1deg); }
          66% { transform: translateY(-8px) rotate(-1deg); }
        }
        @keyframes blob {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-right {
          from { opacity: 0; transform: translateX(-24px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes count-in {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes status-flow {
          0%, 20% { opacity: 0.3; }
          30%, 70% { opacity: 1; }
          80%, 100% { opacity: 0.3; }
        }
        @keyframes tick {
          0% { transform: scale(0) rotate(-45deg); opacity: 0; }
          60% { transform: scale(1.2) rotate(5deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes dash {
          from { stroke-dashoffset: 100; }
          to { stroke-dashoffset: 0; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-blob { animation: blob 8s ease-in-out infinite; }
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
          background-size: 200% 100%;
          animation: shimmer 2.5s linear infinite;
        }
        .animate-fade-up { animation: fade-up 0.7s ease-out both; }
        .animate-slide-right { animation: slide-right 0.6s ease-out both; }
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient-shift 6s ease infinite;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }
        .glass {
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(24px);
          border: 1px solid rgba(255,255,255,0.08);
        }
        .glass-light {
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.5);
        }
        .glow-indigo { box-shadow: 0 0 60px rgba(79,70,229,0.25); }
        .glow-emerald { box-shadow: 0 0 60px rgba(16,185,129,0.2); }
        .text-gradient {
          background: linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .text-gradient-indigo {
          background: linear-gradient(135deg, #818cf8 0%, #c084fc 50%, #38bdf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 64px rgba(79,70,229,0.2);
        }
        .pulse-dot::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: #10b981;
          animation: pulse-ring 1.8s ease-out infinite;
        }
        .nav-link { color: rgba(255,255,255,0.6); transition: color 0.2s; }
        .nav-link:hover { color: #fff; }
        .footer-link { color: rgba(255,255,255,0.35); transition: color 0.2s; }
        .footer-link:hover { color: rgba(255,255,255,0.8); }
        .nav-blur {
          background: rgba(8, 8, 20, 0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .section-line {
          background: linear-gradient(90deg, transparent, rgba(79,70,229,0.4), transparent);
        }
        .mpesa-green { color: #00a550; }
        .badge-pending { background: rgba(245, 158, 11, 0.15); color: #f59e0b; border: 1px solid rgba(245,158,11,0.3); }
        .badge-awaiting { background: rgba(59, 130, 246, 0.15); color: #60a5fa; border: 1px solid rgba(59,130,246,0.3); }
        .badge-completed { background: rgba(16, 185, 129, 0.15); color: #34d399; border: 1px solid rgba(16,185,129,0.3); }
        .badge-kra { background: rgba(239, 68, 68, 0.12); color: #f87171; border: 1px solid rgba(239,68,68,0.25); }
      `}</style>

      <div className="min-h-screen" style={{ background: '#080814', color: '#f8fafc' }}>

        {/* ── NAVIGATION ── */}
        <header className="nav-blur fixed top-0 left-0 right-0 z-50">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl" style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <path d="M16 10a4 4 0 0 1-8 0"/>
                </svg>
              </div>
              <span className="text-lg font-bold tracking-tight text-white">Dextra</span>
            </div>
            <nav className="hidden items-center gap-8 md:flex">
              {['Product','Pricing','Integrations','Docs'].map(item => (
                <a key={item} href="#" className="nav-link text-sm font-medium">
                  {item}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <a href="#" className="nav-link hidden text-sm font-medium md:block">Sign in</a>
              <button className="rounded-lg px-4 py-2 text-sm font-semibold text-white transition-all hover:scale-105" style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)' }}>
                Get started free
              </button>
            </div>
          </div>
        </header>

        {/* ── HERO ── */}
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-20">
          {/* Background orbs */}
          <div className="animate-blob absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, #4f46e5 0%, transparent 70%)', filter: 'blur(80px)' }} />
          <div className="animate-blob absolute right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full opacity-15"
            style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)', filter: 'blur(80px)', animationDelay: '3s' }} />
          <div className="animate-blob absolute right-1/3 top-1/3 h-[300px] w-[300px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #0ea5e9 0%, transparent 70%)', filter: 'blur(60px)', animationDelay: '5s' }} />

          <div className="relative z-10 mx-auto max-w-5xl text-center">
            {/* Badge */}
            <div className="animate-fade-up mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium"
              style={{ background: 'rgba(79,70,229,0.15)', border: '1px solid rgba(79,70,229,0.3)', color: '#a5b4fc' }}>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ background: '#818cf8' }}></span>
                <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: '#4f46e5' }}></span>
              </span>
              Built for East Africa · M-Pesa native · KRA eTIMS compliant
            </div>

            {/* Headline */}
            <h1 className="animate-fade-up delay-100 mb-6 text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="text-white">The POS platform</span>
              <br />
              <span className="text-gradient-indigo">your shop deserves.</span>
            </h1>

            <p className="animate-fade-up delay-200 mx-auto mb-10 max-w-2xl text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Sell via cash or M-Pesa, track inventory to the unit, file VAT with KRA automatically, and watch your shops from anywhere — all from one beautifully simple platform.
            </p>

            <div className="animate-fade-up delay-300 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <button className="flex items-center gap-2 rounded-xl px-7 py-3.5 text-base font-semibold text-white shadow-2xl transition-all hover:scale-105 hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', boxShadow: '0 8px 32px rgba(79,70,229,0.4)' }}>
                Start free — no card needed
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="flex items-center gap-2 rounded-xl px-7 py-3.5 text-base font-semibold transition-all hover:scale-105"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.85)' }}>
                Watch 2-min demo
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </button>
            </div>

            {/* Stat pills */}
            <div className="animate-fade-up delay-500 mt-16 flex flex-wrap justify-center gap-4">
              {[
                { label: 'Shops active', value: '1,200+' },
                { label: 'Sales processed daily', value: '28K+' },
                { label: 'KRA filings automated', value: '100%' },
                { label: 'Payment methods', value: '4' },
              ].map((s) => (
                <div key={s.label} className="glass rounded-2xl px-6 py-4 text-center">
                  <div className="text-2xl font-bold text-white">{s.value}</div>
                  <div className="mt-0.5 text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero dashboard mockup */}
          <div className="animate-fade-up delay-700 animate-float relative z-10 mx-auto mt-20 w-full max-w-4xl">
            <div className="glass rounded-3xl p-1 glow-indigo">
              <div className="rounded-[22px] p-6" style={{ background: '#0f0f23' }}>
                {/* Top bar */}
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.4)' }}>Nairobi Junction Store</p>
                    <p className="text-xl font-bold text-white">KES 84,500 <span className="text-sm font-normal" style={{ color: '#34d399' }}>▲ 12% today</span></p>
                  </div>
                  <div className="flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold" style={{ background: 'rgba(16,185,129,0.15)', color: '#34d399', border: '1px solid rgba(16,185,129,0.3)' }}>
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full" style={{ background: '#10b981', opacity: 0.75 }}></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: '#10b981' }}></span>
                    </span>
                    Live
                  </div>
                </div>
                {/* Sparkline bars */}
                <div className="mb-6 flex h-16 items-end gap-1.5">
                  {[35, 55, 42, 78, 65, 90, 100].map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm transition-all"
                      style={{ height: `${h}%`, background: i === 6 ? 'linear-gradient(to top, #4f46e5, #818cf8)' : 'rgba(79,70,229,0.25)' }} />
                  ))}
                </div>
                {/* Mini cards row */}
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { label: 'Sales', value: '47', delta: '↑ 8%', color: '#a5b4fc' },
                    { label: 'Avg Basket', value: 'KES 1,797', delta: '↓ 2%', color: '#a5b4fc' },
                    { label: 'Margin', value: '23%', delta: '↑ 1.2pp', color: '#34d399' },
                    { label: 'Pending', value: '3', delta: 'M-Pesa', color: '#fbbf24' },
                  ].map(c => (
                    <div key={c.label} className="rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <p className="mb-1 text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{c.label}</p>
                      <p className="text-sm font-bold text-white">{c.value}</p>
                      <p className="mt-0.5 text-xs" style={{ color: c.color }}>{c.delta}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST STRIP ── */}
        <div className="section-line h-px" />
        <section className="py-12 px-6">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-8 text-sm font-medium tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Trusted by shops across East Africa
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {['Nairobi Junction', 'Westlands Mart', 'Kisumu Trade', 'Coast Retail', 'Kampala Goods', 'Dar Express'].map(name => (
                <span key={name} className="text-sm font-semibold" style={{ color: 'rgba(255,255,255,0.2)' }}>{name}</span>
              ))}
            </div>
          </div>
        </section>
        <div className="section-line h-px" />

        {/* ── CHAPTER 1: SELL ── */}
        <section className="relative overflow-hidden px-6 py-32">
          <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #00a550 0%, transparent 70%)', filter: 'blur(80px)' }} />
          <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
            {/* Left: copy */}
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest" style={{ color: '#818cf8' }}>01 — Sell</p>
              <h2 className="mb-6 text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl">
                Your next sale is<br /><span className="text-gradient-indigo">three taps away.</span>
              </h2>
              <p className="mb-8 text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Cash or M-Pesa — the customer chooses, Dextra handles. STK push goes out automatically, stock deducts on confirmation, the receipt is printed. You never chase a payment again.
              </p>
              <ul className="space-y-3">
                {[
                  'M-Pesa STK push with 3-minute auto-timeout',
                  'Paybill & Buy Goods manual confirmation',
                  'Cash sales complete in under 1 second',
                  'Auto-retry with corrected phone number',
                ].map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: '#10b981' }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            {/* Right: sale flow visualization */}
            <div className="space-y-3">
              {/* Sale created */}
              <div className="card-hover glass rounded-2xl p-5">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl" style={{ background: 'rgba(79,70,229,0.2)' }}>
                      <svg className="h-5 w-5" style={{ color: '#818cf8' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Sale created</p>
                      <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>2 items · KES 2,400</p>
                    </div>
                  </div>
                  <span className="badge-pending rounded-full px-2.5 py-0.5 text-xs font-semibold">PENDING</span>
                </div>
                <div className="flex gap-2">
                  <span className="rounded-lg px-2.5 py-1 text-xs" style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.5)' }}>Maize Flour 2kg × 1</span>
                  <span className="rounded-lg px-2.5 py-1 text-xs" style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.5)' }}>Cooking Oil × 2</span>
                </div>
              </div>
              {/* STK Push */}
              <div className="card-hover glass rounded-2xl p-5" style={{ border: '1px solid rgba(0,165,80,0.2)' }}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl" style={{ background: 'rgba(0,165,80,0.15)' }}>
                      <Smartphone className="h-5 w-5" style={{ color: '#00a550' }} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">M-Pesa STK push sent</p>
                      <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>+254 712 *** 678 · Awaiting PIN</p>
                    </div>
                  </div>
                  <span className="badge-awaiting rounded-full px-2.5 py-0.5 text-xs font-semibold">AWAITING</span>
                </div>
              </div>
              {/* Completed */}
              <div className="card-hover rounded-2xl p-5" style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.25)' }}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl" style={{ background: 'rgba(16,185,129,0.2)' }}>
                      <CheckCircle className="h-5 w-5" style={{ color: '#10b981' }} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Payment confirmed</p>
                      <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Ref: QGH3K7PLMN · Stock deducted</p>
                    </div>
                  </div>
                  <span className="badge-completed rounded-full px-2.5 py-0.5 text-xs font-semibold">COMPLETED</span>
                </div>
              </div>
              {/* Receipt */}
              <div className="card-hover glass rounded-2xl p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl" style={{ background: 'rgba(79,70,229,0.2)' }}>
                    <Receipt className="h-5 w-5" style={{ color: '#818cf8' }} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-white">Receipt #1,247 issued</p>
                    <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>KRA CUIN: KRA20240001247 · Queued for eTIMS</p>
                  </div>
                  <span className="badge-kra rounded-full px-2.5 py-0.5 text-xs font-semibold">KRA</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CHAPTER 2: INVENTORY ── */}
        <section className="relative overflow-hidden px-6 py-32" style={{ background: 'rgba(255,255,255,0.015)' }}>
          <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #f59e0b 0%, transparent 70%)', filter: 'blur(80px)' }} />
          <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
            {/* Left: inventory mockup */}
            <div className="space-y-4">
              <div className="glass rounded-2xl p-5">
                <p className="mb-4 text-sm font-semibold text-white">Stock Levels — Westlands Store</p>
                <div className="space-y-3">
                  {[
                    { name: 'Maize Flour 2kg', sku: 'MF-2KG', qty: 142, wac: 'KES 98.50', status: 'ok' },
                    { name: 'Cooking Oil 1L', sku: 'CO-1L', qty: 23, wac: 'KES 210.00', status: 'low' },
                    { name: 'Sugar 1kg', sku: 'SG-1KG', qty: 0, wac: 'KES 145.00', status: 'out' },
                  ].map(p => (
                    <div key={p.sku} className="flex items-center justify-between rounded-xl px-4 py-3"
                      style={{ background: 'rgba(255,255,255,0.04)' }}>
                      <div>
                        <p className="text-sm font-medium text-white">{p.name}</p>
                        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>{p.sku} · WAC {p.wac}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold" style={{ color: p.status === 'ok' ? '#34d399' : p.status === 'low' ? '#fbbf24' : '#f87171' }}>{p.qty} units</p>
                        <p className="text-xs capitalize" style={{ color: 'rgba(255,255,255,0.3)' }}>{p.status === 'ok' ? 'In stock' : p.status === 'low' ? 'Low stock' : 'Out of stock'}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* WAC formula card */}
              <div className="glass rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl" style={{ background: 'rgba(245,158,11,0.2)' }}>
                    <BarChart3 className="h-5 w-5" style={{ color: '#fbbf24' }} />
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-semibold text-white">Weighted Average Cost engine</p>
                    <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                      Every restock recalculates WAC. Every sale snapshot preserves the cost at that moment — so your margin reports never lie, even after restocking at a different price.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Right: copy */}
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest" style={{ color: '#fbbf24' }}>02 — Inventory</p>
              <h2 className="mb-6 text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl">
                Always know<br /><span style={{ color: '#fbbf24' }}>what you have.</span>
              </h2>
              <p className="mb-8 text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Stock deducts the moment a sale completes — not before, not after. Restock, damage, and adjustment movements create a permanent audit trail you can never erase.
              </p>
              <ul className="space-y-3">
                {[
                  'Weighted Average Cost recalculated on every restock',
                  'Cost snapshot on every sale item for accurate margins',
                  'Void any movement — reversal entry keeps the trail clean',
                  'Low-stock alerts before you run out',
                ].map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: '#fbbf24' }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── CHAPTER 3: TAX ── */}
        <section className="relative overflow-hidden px-6 py-32">
          <div className="absolute inset-0 opacity-5"
            style={{ background: 'linear-gradient(45deg, #ef4444 0%, transparent 60%)' }} />
          <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
            {/* Left: copy */}
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest" style={{ color: '#f87171' }}>03 — Tax Compliance</p>
              <h2 className="mb-6 text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl">
                Every sale files<br /><span style={{ color: '#f87171' }}>itself with KRA.</span>
              </h2>
              <p className="mb-8 text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                For VAT-registered shops in Kenya, every completed sale is automatically submitted to KRA via eTIMS OSCU — in the background, while your cashier is already serving the next customer.
              </p>
              <ul className="space-y-3">
                {[
                  'KRA eTIMS VSCU integration, fully automated',
                  'CUIN number on every receipt for customer verification',
                  '3 automatic retries on KRA API failure',
                  'Credentials encrypted at rest — AES-256-GCM',
                ].map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    <Shield className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: '#f87171' }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            {/* Right: receipt mockup */}
            <div>
              <div className="card-hover glass rounded-2xl p-6" style={{ maxWidth: 360, margin: '0 auto', border: '1px solid rgba(239,68,68,0.2)' }}>
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-white">Dextra POS</p>
                    <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Receipt #001247</p>
                  </div>
                  <span className="badge-kra rounded-full px-3 py-1 text-xs font-bold">VAT INVOICE</span>
                </div>
                <div className="mb-4 space-y-2 text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  <div className="flex justify-between"><span>Maize Flour 2kg</span><span>KES 220.00</span></div>
                  <div className="flex justify-between"><span>Cooking Oil 1L × 2</span><span>KES 420.00</span></div>
                  <div className="my-2 border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }} />
                  <div className="flex justify-between text-white"><span className="font-semibold">Total</span><span className="font-bold">KES 640.00</span></div>
                  <div className="flex justify-between" style={{ color: '#f87171' }}><span>VAT (16%)</span><span>KES 88.28</span></div>
                </div>
                <div className="rounded-xl p-3" style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}>
                  <div className="flex items-center gap-2 mb-1">
                    <Shield className="h-3.5 w-3.5" style={{ color: '#f87171' }} />
                    <p className="text-xs font-semibold" style={{ color: '#f87171' }}>KRA Verified</p>
                  </div>
                  <p className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.5)' }}>CUIN: KRA20240001247</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>Filed automatically · 0.4s after sale</p>
                </div>
                <div className="mt-4 flex items-center gap-2 rounded-xl p-3" style={{ background: 'rgba(16,185,129,0.1)' }}>
                  <Zap className="h-4 w-4" style={{ color: '#34d399' }} />
                  <p className="text-xs" style={{ color: '#34d399' }}>Submitted to eTIMS OSCU · No action required</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CHAPTER 4: ANYWHERE ── */}
        <section className="relative overflow-hidden px-6 py-32" style={{ background: 'rgba(255,255,255,0.015)' }}>
          <div className="absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #4f46e5 0%, transparent 70%)', filter: 'blur(80px)' }} />
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest" style={{ color: '#818cf8' }}>04 — Owner App</p>
              <h2 className="mb-6 text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl">
                Your shops,<br /><span className="text-gradient-indigo">in your pocket.</span>
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Watch sales happen in real time. Switch between shops. Ask the AI assistant why revenue dropped on Tuesday. Never be the last to know.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <TrendingUp className="h-6 w-6" />,
                  color: '#818cf8',
                  title: 'Live Revenue Feed',
                  desc: 'Sales post in real time via SSE. See every transaction the moment it completes.',
                },
                {
                  icon: <Package className="h-6 w-6" />,
                  color: '#fbbf24',
                  title: 'Inventory Alerts',
                  desc: 'FCM push when any product hits low-stock. Reorder before your cashier notices.',
                },
                {
                  icon: <Users className="h-6 w-6" />,
                  color: '#34d399',
                  title: 'Team Visibility',
                  desc: "See who's logged in, what they're selling, and how each shift is performing.",
                },
                {
                  icon: <Zap className="h-6 w-6" />,
                  color: '#f87171',
                  title: 'AI Assistant',
                  desc: 'Ask "why did Kisumu store margin drop?" and get an answer backed by your own data.',
                },
              ].map((card) => (
                <div key={card.title} className="card-hover glass rounded-2xl p-6">
                  <div className="mb-4 inline-flex rounded-xl p-2.5" style={{ background: `${card.color}22` }}>
                    <span style={{ color: card.color }}>{card.icon}</span>
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-white">{card.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CHAPTER 5: MULTI-TENANT ── */}
        <section className="relative overflow-hidden px-6 py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest" style={{ color: '#34d399' }}>05 — Scale</p>
              <h2 className="mb-6 text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl">
                One account.<br /><span style={{ color: '#34d399' }}>Every shop.</span>
              </h2>
              <p className="mb-8 text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Add branches, assign staff, set per-role permissions — each shop is fully isolated, each user gets exactly the access their role demands. Grow from one till to twenty without changing platforms.
              </p>
              <ul className="space-y-3">
                {[
                  'One user, many shops — switch with a single tap',
                  'Granular RBAC: cashier, manager, owner per shop',
                  'Audit log for every sensitive action, forever',
                  'Platform admin dashboard for managing all tenants',
                ].map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: '#34d399' }} />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <button className="flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3" style={{ color: '#34d399' }}>
                  See how multi-tenancy works <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            {/* Shop switcher mockup */}
            <div className="space-y-3">
              <p className="mb-4 text-sm font-medium" style={{ color: 'rgba(255,255,255,0.3)' }}>Switch shop</p>
              {[
                { name: 'Nairobi Junction', role: 'Owner', revenue: 'KES 84,500', active: true },
                { name: 'Westlands Mart', role: 'Manager', revenue: 'KES 41,200', active: false },
                { name: 'Kisumu Trade Centre', role: 'Owner', revenue: 'KES 29,800', active: false },
              ].map(shop => (
                <div key={shop.name} className={`card-hover flex items-center justify-between rounded-2xl p-5 transition-all ${shop.active ? '' : ''}`}
                  style={{
                    background: shop.active ? 'rgba(79,70,229,0.15)' : 'rgba(255,255,255,0.04)',
                    border: shop.active ? '1px solid rgba(79,70,229,0.4)' : '1px solid rgba(255,255,255,0.06)',
                  }}>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold text-white"
                      style={{ background: shop.active ? 'linear-gradient(135deg,#4f46e5,#7c3aed)' : 'rgba(255,255,255,0.1)' }}>
                      {shop.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{shop.name}</p>
                      <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{shop.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold" style={{ color: shop.active ? '#a5b4fc' : '#34d399' }}>{shop.revenue}</p>
                    {shop.active && <p className="text-xs" style={{ color: '#818cf8' }}>Active</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURE GRID ── */}
        <section className="px-6 py-20" style={{ background: 'rgba(255,255,255,0.015)' }}>
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-extrabold text-white">Everything you need to run a serious shop</h2>
              <p className="text-base" style={{ color: 'rgba(255,255,255,0.45)' }}>Not a feature checklist. A coherent system built around how retail actually works.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {[
                { icon: '💳', label: 'Cash & M-Pesa' },
                { icon: '📊', label: 'WAC Inventory' },
                { icon: '🧾', label: 'KRA eTIMS Filing' },
                { icon: '👥', label: 'Multi-Tenant RBAC' },
                { icon: '📱', label: 'Owner Mobile App' },
                { icon: '🔔', label: 'Real-time via SSE' },
                { icon: '📦', label: 'Product Catalog' },
                { icon: '🤝', label: 'Customer CRM' },
                { icon: '🔍', label: 'Audit Logs' },
                { icon: '📈', label: 'Analytics Dashboard' },
                { icon: '🔒', label: 'JWT + Session RBAC' },
                { icon: '⚡', label: 'BullMQ Job Queues' },
              ].map(f => (
                <div key={f.label} className="card-hover glass flex items-center gap-3 rounded-xl p-4">
                  <span className="text-xl">{f.icon}</span>
                  <span className="text-sm font-medium text-white">{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIAL ── */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <div className="card-hover glass rounded-3xl p-10 text-center glow-indigo">
              <div className="mb-6 flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" style={{ color: '#fbbf24' }} />
                ))}
              </div>
              <blockquote className="mb-8 text-2xl font-medium leading-relaxed text-white">
                "I used to call the store every hour to check sales. Now I just open Dextra on my phone. My cashiers stopped skimming the moment they knew I could see every transaction live."
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ background: 'linear-gradient(135deg,#4f46e5,#7c3aed)' }}>JM</div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-white">James M.</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Owner, 3 shops across Nairobi</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl"
            style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #2e1065 40%, #0c4a6e 100%)', position: 'relative' }}>
            {/* Orbs */}
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full opacity-20"
              style={{ background: 'radial-gradient(circle, #818cf8 0%, transparent 70%)', filter: 'blur(40px)' }} />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full opacity-20"
              style={{ background: 'radial-gradient(circle, #0ea5e9 0%, transparent 70%)', filter: 'blur(40px)' }} />
            <div className="relative z-10 px-10 py-16 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest" style={{ color: '#a5b4fc' }}>Start today</p>
              <h2 className="mb-6 text-4xl font-extrabold text-white sm:text-5xl">
                Your shop is waiting<br />for a smarter system.
              </h2>
              <p className="mx-auto mb-10 max-w-xl text-lg" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Set up in under 15 minutes. M-Pesa live on your first day. KRA credentials take 5 minutes. No lock-in.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <button className="flex items-center gap-2 rounded-xl px-8 py-4 text-base font-bold text-white shadow-2xl transition-all hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', boxShadow: '0 8px 40px rgba(79,70,229,0.5)' }}>
                  Open your free account
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button className="flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold transition-all hover:scale-105"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'white' }}>
                  Talk to the team
                </button>
              </div>
              <p className="mt-6 text-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>No credit card · Free for your first 30 days</p>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="grid grid-cols-2 gap-12 md:grid-cols-5">
              <div className="col-span-2 md:col-span-2">
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg" style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                      <line x1="3" y1="6" x2="21" y2="6"/>
                      <path d="M16 10a4 4 0 0 1-8 0"/>
                    </svg>
                  </div>
                  <span className="font-bold text-white">Dextra</span>
                </div>
                <p className="mb-6 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  The modern POS platform built for East African retail. M-Pesa native. KRA compliant. Owner-first.
                </p>
                <div className="flex gap-3">
                  {['KE', 'UG', 'TZ'].map(c => (
                    <span key={c} className="rounded-lg px-2.5 py-1 text-xs font-semibold" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.4)' }}>{c}</span>
                  ))}
                </div>
              </div>
              {[
                { title: 'Product', links: ['Dashboard', 'Inventory', 'M-Pesa Payments', 'KRA eTIMS', 'Owner App'] },
                { title: 'Company', links: ['About Dextra', 'Blog', 'Careers', 'Press'] },
                { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Security', 'GDPR'] },
              ].map(col => (
                <div key={col.title}>
                  <p className="mb-4 text-sm font-semibold text-white">{col.title}</p>
                  <ul className="space-y-2.5">
                    {col.links.map(link => (
                      <li key={link}>
                        <a href="#" className="footer-link text-sm">{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.25)' }}>© 2026 Dextra Technologies. All rights reserved.</p>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.2)' }}>Built for East Africa · Nairobi, Kenya 🇰🇪</p>
            </div>
          </div>
        </footer>

      </div>
    </>
  )
}
