import {
  Users,
  Database,
  FileText,
  ClipboardList,
  FolderOpen,
  LifeBuoy,
  ArrowRight,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const links = [
  {
    icon: Users,
    title: 'Learner Information System (LIS)',
    description: 'Access enrollment encoding and learner records management.',
  },
  {
    icon: Database,
    title: 'Enhanced Basic Education Information System (EBEIS)',
    description: 'School profiles, personnel, and facilities data reporting.',
  },
  {
    icon: FileText,
    title: 'DepEd Memoranda',
    description: 'Official orders, advisories, and issuances from DepEd.',
  },
  {
    icon: ClipboardList,
    title: 'School Forms',
    description: 'Standard school forms and reporting templates.',
  },
  {
    icon: FolderOpen,
    title: 'Google Drive Repository',
    description: 'Shared planning documents, datasets, and resources.',
  },
  {
    icon: LifeBuoy,
    title: 'Help Desk',
    description: 'Technical assistance and support for schools and offices.',
  },
]

export function QuickLinks() {
  return (
    <section id="quick-links" className="border-b border-border bg-secondary/40 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Quick links"
          title="Everything you need, one click away"
          description="Fast access to the tools, datasets, and documents most requested by planners and school heads."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((l) => {
            const Icon = l.icon
            return (
              <a
                key={l.title}
                href="#downloads"
                className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-5" />
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-base font-bold text-foreground">
                      {l.title}
                    </h3>
                    <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {l.description}
                  </p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
