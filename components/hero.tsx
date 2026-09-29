import { BarChart3, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

const stats = [
  { value: '72', label: 'Public schools' },
  { value: '11', label: 'Private schools' },
  { value: '41,777', label: 'Quick Count Learners' },
  { value: '1,641', label: 'Teaching personnel' },
]

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div className="absolute inset-0">
        <img
          src="/depedfront.png"
          alt="Public school students walking outside a modern school building"
          className="size-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500-70 via-blue-400/50 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-black-100-foreground/25 bg-primary-foreground/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-black-foreground">
            <span className="size-1.5 rounded-full bg-accent" />
            Schools Division Office of Mati City
          </span>

          <h1 className="mt-6 font-display text-xl font-extrabold leading-tight tracking-tight text-balance text-blue-900-foreground md:text-5xl lg:text-9xl">
            MATI <span className="italic">D.A.T.A</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg italic leading-relaxed text-pretty text-blue-500-foreground/80">
            Dashboard for Analytics, Tracking, and Access.
          </p>

          
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-primary-foreground/15 bg-primary-foreground/10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-primary/40 p-5 backdrop-blur-sm">
              <dt className="font-display text-3xl font-extrabold tracking-tight text-primary-foreground">
                {s.value}
              </dt>
              <dd className="mt-1 text-sm leading-snug text-primary-foreground/70">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
