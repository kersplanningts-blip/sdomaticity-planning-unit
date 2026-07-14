import { Download, FileText, FileSpreadsheet, FileBarChart, ClipboardList } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const files = [
  {
    icon: ClipboardList,
    title: 'School Forms Package (SF1–SF10)',
    meta: 'ZIP · 2.6 MB · Forms',
  },
  {
    icon: FileText,
    title: 'Division Memorandum Compilation',
    meta: 'PDF · 3.4 MB · Memoranda',
  },
  {
    icon: FileSpreadsheet,
    title: 'Annual Implementation Plan Template',
    meta: 'XLSX · 1.1 MB · Template',
  },
  {
    icon: FileBarChart,
    title: 'Basic Education Statistics Fact Sheet',
    meta: 'PDF · 2.1 MB · Planning Document',
  },
  {
    icon: FileSpreadsheet,
    title: 'Enrollment Data Workbook',
    meta: 'XLSX · 1.9 MB · Template',
  },
  {
    icon: FileText,
    title: 'Division Education Development Plan',
    meta: 'PDF · 4.2 MB · Planning Document',
  },
]

export function Downloads() {
  return (
    <section id="downloads" className="border-b border-border bg-secondary/40 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Resources"
          title="Downloads"
          description="Official templates, datasets, and reports ready for offline use."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {files.map((f) => {
            const Icon = f.icon
            return (
              <a
                key={f.title}
                href="#downloads"
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate font-display text-sm font-bold text-foreground group-hover:text-primary">
                    {f.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">{f.meta}</p>
                </div>
                <Download className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
