import { Users, School, GraduationCap, CheckCircle2, BarChart3 } from 'lucide-react'

const kpis = [
  { icon: School, label: 'Total schools', value: '83', delta: 'Public and Private Schools' },
  { icon: Users, label: 'Total Quick Count learners', value: '41,777', delta: '99% vs SY 2025-2026 Enrollment' },
  { icon: GraduationCap, label: 'Total teachers', value: '1,641', delta: 'PSIPOP as of April 30, 2026' },
  { icon: CheckCircle2, label: 'Quick count status', value: '100%', delta: 'Schools reported' },
]

const byLevel = [
  { level: 'Kindergarten', value: 4.6, max: 26 },
  { level: 'Elementary', value: 25.8, max: 26 },
  { level: 'Junior High', value: 18.2, max: 26 },
  { level: 'Senior High', value: 5.7, max: 26 },
]

const byDistrict = [
  { district: 'Mati North District', share: 24.1 },
  { district: 'Mati South District', share: 21.7 },
  { district: 'Mati East District', share: 19.3 },
  { district: 'Mati West District', share: 18.4 },
  { district: 'Mati Central District', share: 16.5 },
]

export function EnrollmentDashboard() {
  return (
    <section
      id="dashboard"
      className="border-b border-border bg-primary py-20 text-primary-foreground md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <span className="h-px w-6 bg-accent" />
            Planning dashboard
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-balance md:text-4xl">
            Division at a glance, SY 2026&ndash;2027
          </h2>
          <p className="mt-3 text-base leading-relaxed text-pretty text-primary-foreground/75">
            Consolidated figures for the Schools Division of Mati City from the
            Learner Information System. Updated as of the latest quick count.
          </p>
        </div>

        {/* KPI cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map((k) => {
            const Icon = k.icon
            return (
              <div
                key={k.label}
                className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-5 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-primary-foreground/70">{k.label}</span>
                  <Icon className="size-5 text-accent" />
                </div>
                <p className="mt-3 font-display text-3xl font-extrabold tracking-tight">
                  {k.value}
                </p>
                <p className="mt-1 text-xs text-accent">{k.delta}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-5">
          {/* Bar chart by level */}
          <div className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 lg:col-span-3">
            <h3 className="font-display text-lg font-bold">Enrollment by level (in thousands)</h3>
            <div className="mt-8 flex h-56 items-end justify-between gap-3 sm:gap-6">
              {byLevel.map((b) => (
                <div key={b.level} className="flex h-full flex-1 flex-col items-center justify-end gap-3">
                  <span className="text-sm font-bold">{b.value}</span>
                  <div className="flex w-full flex-1 items-end">
                    <div
                      className="w-full rounded-t-md bg-accent transition-all"
                      style={{ height: `${(b.value / b.max) * 100}%` }}
                    />
                  </div>
                  <span className="text-center text-[11px] leading-tight text-primary-foreground/70">
                    {b.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* District shares */}
          <div className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 lg:col-span-2">
            <h3 className="font-display text-lg font-bold">Learners by district</h3>
            <ul className="mt-6 space-y-4">
              {byDistrict.map((d) => (
                <li key={d.district}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-primary-foreground/80">{d.district}</span>
                    <span className="font-semibold">{d.share}%</span>
                  </div>
                  <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-primary-foreground/15">
                    <div
                      className="h-full rounded-full bg-accent"
                      style={{ width: `${(d.share / 24.1) * 100}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Chart placeholder area */}
        <div className="mt-6 flex min-h-48 flex-col items-center justify-center rounded-xl border border-dashed border-primary-foreground/25 bg-primary-foreground/5 p-8 text-center">
          <BarChart3 className="size-8 text-accent" />
          <p className="mt-3 font-display text-base font-bold">
            Interactive trend charts coming soon
          </p>
          <p className="mt-1 max-w-md text-sm text-primary-foreground/70">
            This space is reserved for enrollment trends, gross/net enrollment
            rates, and completion analytics once data pipelines are connected.
          </p>
        </div>
      </div>
    </section>
  )
}
