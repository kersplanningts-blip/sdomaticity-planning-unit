const announcements = [
  {
    date: "August 1, 2026",
    title: "National School Building Inventory(NSBI) OPEN FOR ENCODING",
    description:
      "NSBI Facility for SY 2025-2026 is now available for encoding.",
  },
  {
    date: "July 27, 2026",
    title: "LIS-ALS Encoding in LIS",
    description:
      "The following Learner Information System for the Alternative Learning System (LIS-ALS) facilities are now open/reopened:",
  },
  {
    date: "July 13, 2026",
    title: "BOSY Encoding in the LIS from Kindergarten to Grade 10",
    description: (
      <>
      BOSY 2026-2027 from 27 July 2026 until 30 September 2026
      <br/>
      EOSY 2025-2026 updating and finalization form 27 July 2026 to 15 August 2026
      </>
    ),
  },
];

export default function AnnouncementsPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-16">
        <div className="mx-auto max-w-6xl px-6">

          <p className="text-sm uppercase tracking-[0.2em] text-yellow-300 font-semibold">
            Planning Unit
          </p>

          <h1 className="mt-3 text-5xl font-bold text-white">
            Announcements
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-blue-100">
            Stay updated with the latest advisories, memoranda,
            reminders, and official announcements from the Planning Unit.
          </p>

        </div>

      </section>

      {/* Announcements */}
      <section className="mx-auto max-w-6xl px-6 py-14">

        <div className="grid gap-8 lg:grid-cols-3">

  {/* LEFT SIDE */}
  <div className="lg:col-span-2 space-y-8">

    {announcements.map((item, index) => (

      <article
        key={index}
        className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg"
      >
        <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
          📢 Announcement
        </span>

        <p className="mt-4 text-sm text-slate-500">
          {item.date}
        </p>

        <h2 className="mt-2 text-3xl font-bold text-blue-950">
          {item.title}
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          {item.description}
        </p>

        <button className="mt-8 text-blue-700 font-semibold hover:underline">
          Read More →
        </button>

      </article>

    ))}

  </div>

  {/* RIGHT SIDEBAR */}

  <aside className="space-y-6">
{/* Latest Memoranda */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

  <h3 className="text-xl font-bold text-blue-950">
    Latest Memoranda
  </h3>

  <div className="mt-6 space-y-5">

    <div className="border-b pb-4">
      <p className="text-xs uppercase font-semibold text-blue-600">
        July 27, 2026
      </p>

      <h4 className="mt-1 font-semibold text-slate-800 hover:text-blue-700 cursor-pointer">
        Division Memorandum No. 031, s. 2026
      </h4>
    </div>

    <div className="border-b pb-4">
      <p className="text-xs uppercase font-semibold text-blue-600">
        July 20, 2026
      </p>

      <h4 className="mt-1 font-semibold text-slate-800 hover:text-blue-700 cursor-pointer">
        Division Memorandum No. 030, s. 2026
      </h4>
    </div>

    <div>
      <p className="text-xs uppercase font-semibold text-blue-600">
        July 15, 2026
      </p>

      <h4 className="mt-1 font-semibold text-slate-800 hover:text-blue-700 cursor-pointer">
        Division Memorandum No. 029, s. 2026
      </h4>
    </div>

  </div>

  <button className="mt-6 text-blue-700 font-semibold hover:underline">
    View All →
  </button>

</div>
 <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

    <h3 className="text-xl font-bold text-blue-950">
      Upcoming Activities
    </h3>

    <div className="mt-6 space-y-5">

      <div className="flex gap-4">
        <div className="rounded-lg bg-blue-100 px-3 py-2 text-center">
          <p className="text-xs font-semibold text-blue-700">SEPT</p>
          <p className="text-lg font-bold text-blue-800">3</p>
        </div>

        <div>
          <h4 className="font-semibold text-slate-800">
            School Fair 2026
          </h4>
          <p className="text-sm text-slate-500">
            SDO Mati City & SDO Davao Oriental
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="rounded-lg bg-blue-100 px-3 py-2 text-center">
          <p className="text-xs font-semibold text-blue-700">AUG</p>
          <p className="text-lg font-bold text-blue-900">15</p>
        </div>

        <div>
          <h4 className="font-semibold text-slate-800">
            NSBI Validation
          </h4>
          <p className="text-sm text-slate-500">
            Division Planning Officer and Division Engineer
          </p>
        </div>
      </div>

    </div>

  </div>

</aside>


</div>

      </section>

    </main>
  );
}