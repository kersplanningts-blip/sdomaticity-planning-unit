import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Button } from '@/components/ui/button'

const details = [
  {
    icon: MapPin,
    label: 'Office address',
    value: 'Planning Service, DepEd Complex, Meralco Ave., Pasig City 1600',
  },
  {
    icon: Phone,
    label: 'Trunkline',
    value: '(02) 8633-7228 · loc. 2401',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'planning.research@deped.gov.ph',
  },
  {
    icon: Clock,
    label: 'Office hours',
    value: 'Monday to Friday · 8:00 AM – 5:00 PM',
  },
]

export function Contact() {
  return (
    <section id="contact" className="bg-background py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Get in touch"
          title="Contact information"
          description="Reach the Planning and Research Office for data requests, research coordination, and technical assistance."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Contact details */}
          <div className="grid gap-4 sm:grid-cols-2">
            {details.map((d) => {
              const Icon = d.icon
              return (
                <div
                  key={d.label}
                  className="rounded-xl border border-border bg-card p-5"
                >
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {d.label}
                  </p>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-foreground">
                    {d.value}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Simple inquiry form */}
          <form className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-display text-lg font-bold text-foreground">
              Send an inquiry
            </h3>
            <div className="mt-5 grid gap-4">
              <div className="grid gap-2 sm:grid-cols-2">
                <div className="grid gap-1.5">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Full name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Juan Dela Cruz"
                    className="h-10 rounded-md border border-input bg-background px-3 text-sm outline-none ring-ring/30 focus:border-primary focus:ring-2"
                  />
                </div>
                <div className="grid gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@deped.gov.ph"
                    className="h-10 rounded-md border border-input bg-background px-3 text-sm outline-none ring-ring/30 focus:border-primary focus:ring-2"
                  />
                </div>
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Data request / research coordination"
                  className="h-10 rounded-md border border-input bg-background px-3 text-sm outline-none ring-ring/30 focus:border-primary focus:ring-2"
                />
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="How can we help you?"
                  className="rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-ring/30 focus:border-primary focus:ring-2"
                />
              </div>
              <Button type="submit" className="h-11 w-full px-6 text-base sm:w-auto">
                Submit inquiry
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
