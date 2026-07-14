import { ArrowUpRight, Calendar } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Button } from '@/components/ui/button'

const announcements = [
  {
    tag: 'Announcement',
    date: 'July 13, 2026',
    title: 'The Beginning of School Year (BOSY) encoding in the LIS for Kindergarten to Grade 10 is now open from 13 July 2026 to 31 October 2026.',
    excerpt:
      'School Heads and School Planning Coordinators, please review and prepare all enrollment-related data to ensure smooth, timely encoding',
  },
  {
    tag: 'Data',
    date: 'June 18, 2026',
    title: 'Learner Information System snapshot cut-off moved to July 15',
    excerpt:
      'All schools are advised to finalize enrollment encoding before the revised system snapshot date to ensure accurate reporting.',
  },
  {
    tag: 'Research',
    date: 'June 10, 2026',
    title: 'Call for proposals: 2026 Basic Education Research Fund',
    excerpt:
      'The office invites research concept notes addressing learning recovery, dropout prevention, and school governance.',
  },
]

export function Announcements() {
  return (
    <section id="announcements" className="border-b border-border bg-background py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Newsroom"
            title="Latest announcements"
            description="Official memoranda, advisories, and updates from the Planning and Research Office."
          />
          <Button
            render={<a href="#announcements" />}
            nativeButton={false}
            variant="outline"
            className="h-10 gap-1.5 px-4"
          >
            View all updates
            <ArrowUpRight className="size-4" />
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {announcements.map((a) => (
            <a
              key={a.title}
              href="#announcements"
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">
                  {a.tag}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="size-3.5" />
                  {a.date}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold leading-snug text-balance text-foreground group-hover:text-primary">
                {a.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {a.excerpt}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Read more
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
