import { Logo } from '@/components/logo'

const columns = [
  {
    title: 'Office',
    links: ['About the Office', 'Organizational Chart', 'Mandate & Functions', 'Careers'],
  },
  {
    title: 'Resources',
    links: ['Enrollment Data', 'Research Repository', 'Downloads', 'Data Library'],
  },
  {
    title: 'Government',
    links: ['DepEd Central', 'Official Gazette', 'Transparency Seal', 'Freedom of Information'],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <Logo />
              <div className="leading-tight">
                <p className="font-display text-sm font-extrabold tracking-tight text-background">
                  Planning &amp; Research Office
                </p>
                <p className="text-[11px] text-background/60">Department of Education</p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-background/70">
              Advancing evidence-based planning, policy research, and education
              data management for quality basic education across the Philippines.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-sm font-bold text-background">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#home"
                      className="text-sm text-background/70 transition-colors hover:text-accent"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-background/15 pt-6 text-xs text-background/60 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Department of Education — Planning and Research Office. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#home" className="hover:text-accent">Privacy Policy</a>
            <a href="#home" className="hover:text-accent">Terms of Use</a>
            <a href="#contact" className="hover:text-accent">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
