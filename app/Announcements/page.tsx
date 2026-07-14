export default function AnnouncementsPage() {
  const announcements = [
    {
      date: "July 14, 2026",
      category: "Division Memorandum",
      title: "Submission of Updated School Improvement Plan (SIP) and Annual Implementation Plan (AIP)",
      description:
        "All school heads are requested to submit the updated SIP and AIP documents for review, consolidation, and division-level monitoring.",
      status: "New",
    },
    {
      date: "July 10, 2026",
      category: "Data Management",
      title: "Quarter 1 EBEIS Data Validation and Correction",
      description:
        "Schools are advised to validate learner enrolment, personnel, classroom, and facility data before the scheduled division consolidation.",
      status: "Ongoing",
    },
    {
      date: "July 8, 2026",
      category: "Planning and Research",
      title: "Call for Research Proposals for School Year 2026–2027",
      description:
        "Teachers, school leaders, and personnel are encouraged to submit action research proposals aligned with division priorities.",
      status: "Open",
    },
    {
      date: "July 4, 2026",
      category: "Monitoring",
      title: "Schedule of School-Based Monitoring and Technical Assistance",
      description:
        "The Planning Unit will conduct monitoring visits and provide technical assistance to schools based on the approved schedule.",
      status: "Posted",
    },
  ];

  const badgeStyles: Record<string, string> = {
    New: "bg-red-100 text-red-700",
    Ongoing: "bg-amber-100 text-amber-700",
    Open: "bg-emerald-100 text-emerald-700",
    Posted: "bg-blue-100 text-blue-700",
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Page heading */}
      <section className="border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-100">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
            Schools Division Office of Mati City
          </p>

          <h1 className="mt-3 text-4xl font-bold text-blue-950 md:text-5xl">
            Announcements
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Stay informed about memoranda, planning activities, data
            submissions, research opportunities, and other division updates.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Quick links */}
        <div className="mb-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-slate-500">
              Latest Updates
            </p>
            <p className="mt-2 text-3xl font-bold text-blue-900">
              {announcements.length}
            </p>
          </div>

          <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-slate-500">
              This Month
            </p>
            <p className="mt-2 text-3xl font-bold text-blue-900">12</p>
          </div>

          <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-slate-500">
              Active Notices
            </p>
            <p className="mt-2 text-3xl font-bold text-blue-900">3</p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
          {/* Announcement list */}
          <div>
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                  Latest Updates
                </p>
                <h2 className="mt-1 text-2xl font-bold text-blue-950">
                  Recent announcements
                </h2>
              </div>

              <button className="w-fit rounded-lg border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-800 transition hover:bg-blue-50">
                View all announcements
              </button>
            </div>

            <div className="space-y-5">
              {announcements.map((announcement) => (
                <article
                  key={announcement.title}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${
                        badgeStyles[announcement.status]
                      }`}
                    >
                      {announcement.status}
                    </span>

                    <span className="text-sm font-medium text-blue-700">
                      {announcement.category}
                    </span>

                    <span className="text-sm text-slate-400">•</span>

                    <time className="text-sm text-slate-500">
                      {announcement.date}
                    </time>
                  </div>

                  <h3 className="mt-4 text-xl font-bold leading-7 text-blue-950">
                    {announcement.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {announcement.description}
                  </p>

                  <button className="mt-5 text-sm font-bold text-blue-700 transition hover:text-blue-950">
                    Read full announcement →
                  </button>
                </article>
              ))}
            </div>
          </div>

          {/* Side panel */}
          <aside className="space-y-6">
            <div className="rounded-xl bg-blue-900 p-6 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-200">
                Important Reminder
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Keep your school submissions updated.
              </h3>

              <p className="mt-3 text-sm leading-7 text-blue-100">
                Ensure that reports and planning documents are submitted on or
                before their required deadlines.
              </p>

              <button className="mt-5 rounded-lg bg-white px-4 py-2 text-sm font-bold text-blue-900 transition hover:bg-blue-100">
                View submission schedule
              </button>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                Categories
              </p>

              <div className="mt-4 space-y-3">
                {[
                  "Division Memorandum",
                  "Data Management",
                  "Planning and Research",
                  "Monitoring and Evaluation",
                ].map((category) => (
                  <button
                    key={category}
                    className="flex w-full items-center justify-between border-b border-slate-100 pb-3 text-left text-sm font-medium text-slate-600 transition hover:text-blue-700"
                  >
                    {category}
                    <span className="text-blue-700">→</span>
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}