import { Hero } from '@/components/hero'
import { Announcements } from '@/components/announcements'
import { QuickLinks } from '@/components/quick-links'
import { CalendarActivities } from '@/components/calendar-activities'
import { EnrollmentDashboard } from '@/components/enrollment-dashboard'
import { Downloads } from '@/components/downloads'
import { Contact } from '@/components/contact'

export default function Page() {
  return (
    <main>
      <Hero />
      <Announcements />
      <QuickLinks />
      <CalendarActivities />
      <EnrollmentDashboard />
      <Downloads />
      <Contact />
    </main>
  )
}