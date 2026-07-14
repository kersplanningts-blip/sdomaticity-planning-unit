import { Clock, MapPin } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const activities = [
  {
    month: 'JUL',
    day: '08',
    title: 'Regional Planning Convergence Workshop',
    time: '9:00 AM – 4:00 PM',
    location: 'DepEd Central Office, Pasig City',
    type: 'Workshop',
  },
  {
    month: 'JUL',
    day: '15',
    title: 'Learner Information System Snapshot Cut-off',
    time: 'All day',
    location: 'Nationwide (Online)',
    type: 'Deadline',
  },
  {
    month: 'JUL',
    day: '22',
    title: 'Basic Education Research Forum',
    time: '1:00 PM – 5:00 PM',
    location: 'Hybrid · Zoom & Bulwagan Hall',
    type: 'Forum',
  },
  {
    month: 'AUG',
    day: '05',
    title: 'Division Annual Implementation Review',
    time: '8:30 AM – 12:00 NN',
    location: 'Per Division Office',
    type: 'Review',
  },
]

export function CalendarActivities() {
  return (
    <section id="calendar" className="border-b border-border bg-background py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Calendar"
          title="Calendar of activities"
          description="Upcoming workshops, deadlines, and engagements for the planning community."
        />

        <ul className="mt-12 divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
          {activities.map((e) => (
            <li key={e.title}>
              <a
                href="#calendar"
                className="group flex flex-col gap-4 p-5 transition-colors hover:bg-secondary/50 sm:flex-row sm:items-center"
              >
                <div className="flex size-16 shrink-0 flex-col items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary-foreground/80">
                    {e.month}
                  </span>
                  <span className="font-display text-2xl font-extrabold leading-none">
                    {e.day}
                  </span>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-accent/20 px-2.5 py-0.5 text-xs font-semibold text-accent-foreground">
                      {e.type}
                    </span>
                  </div>
                  <h3 className="mt-1.5 font-display text-lg font-bold text-foreground group-hover:text-primary">
                    {e.title}
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Clock className="size-4" />
                      {e.time}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="size-4" />
                      {e.location}
                    </span>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
