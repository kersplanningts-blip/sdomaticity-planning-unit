import Link from "next/link";
import { FolderOpen } from "lucide-react";


 

export default function DownloadsPage() {
  const files = [
    {
      title: "Incident Report",
      fileName: "IR.xlsx",
      href: "/RF/IR.xlsx",
      description: "Excel form for incident reporting.",
    },
    {
      title: "RF01 – LRN Merging",
      fileName: "RF01.xlsx",
      href: "/RF/RF01.xlsx",
      description: "Request form for Learner Reference Number merging.",
    },
    {
      title: "RF02 – LRN Reactivation",
      fileName: "RF02.xlsx",
      href: "/RF/RF02.xlsx",
      description: "Request form for reactivating a learner reference number.",
    },
    {
      title: "RF03 – Enrolment Data Issues",
      fileName: "RF03.xlsx",
      href: "/RF/RF03.xlsx",
      description: "Excel form for enrolment data issues.",
    },
    {
      title: "RF04 – Merging LRN",
      fileName: "RF04.xlsx",
      href: "/RF/RF04.xlsx",
      description: "Excel form for LRN merging requests.",
    },
    {
      title: "RF05 – UAMS and School Concerns",
      fileName: "RF05.xlsx",
      href: "/RF/RF05.xlsx",
      description: "Excel form for UAMS and school-related concerns.",
    },
    {
      title: "RF06 – Merging of School ID",
      fileName: "RF06.xlsx",
      href: "/RF/RF06.xlsx",
      description: "Excel form for School ID merging.",
    },
    {
      title: "RF07 – Reopening of Enrolment and EOSY",
      fileName: "RF07.xlsx",
      href: "/RF/RF07.xlsx",
      description: "Excel form for reopening enrolment and EOS concerns.",
    },
    {
      title: "RF08 – Transfer-Related Issue",
      fileName: "RF08.xlsx",
      href: "/RF/RF08.xlsx",
      description: "Excel form for learner transfer-related issues.",
    },
    {
      title: "RF09 – Unenrolment of Learner",
      fileName: "RF09.xlsx",
      href: "/RF/RF09.xlsx",
      description: "Excel form for learner unenrolment requests.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-800 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <section className="rounded-2xl bg-gradient-to-r from-blue-950 to-blue-700 px-8 py-14 text-white">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-200">
            Planning Unit Resources
          </p>

          <h1 className="mt-3 text-4xl font-bold md:text-5xl">Downloads</h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-blue-100">
            Download LIS request forms and Excel templates for school-related
            concerns.
          </p>
        </section>
<section className="mt-10">

  <div className="mb-6">
    <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
      Document Categories
    </p>

    <h2 className="mt-1 text-3xl font-bold text-blue-950">
      Planning Resources
    </h2>
  </div>

  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

    {/* KPI */}
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition">
      <FolderOpen className="h-12 w-12 text-blue-700" />

      <h3 className="mt-4 text-xl font-bold">
        RXI - Mati City KPI
      </h3>

      <p className="mt-2 text-slate-600">
        Key Performance Indicators organized by School Year.
      </p>

      <Link
        href="/Downloads/kpi"
        className="mt-6 inline-flex rounded-lg bg-blue-700 px-5 py-3 text-white hover:bg-blue-800"
      >
        See More →
      </Link>
    </div>

    {/* Reports */}
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition">
      <FolderOpen className="h-12 w-12 text-green-700" />

      <h3 className="mt-4 text-xl font-bold">
        Planning Reports
      </h3>

      <p className="mt-2 text-slate-600">
        Annual and quarterly planning reports.
      </p>

      <button className="mt-6 rounded-lg bg-green-700 px-5 py-3 text-white">
        Coming Soon
      </button>
    </div>

    {/* Manuals */}
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition">
      <FolderOpen className="h-12 w-12 text-orange-600" />

      <h3 className="mt-4 text-xl font-bold">
        Manuals & Guides
      </h3>

      <p className="mt-2 text-slate-600">
        User manuals, guidelines, and references.
      </p>

      <button className="mt-6 rounded-lg bg-orange-600 px-5 py-3 text-white">
        Coming Soon
      </button>
    </div>

  </div>

</section>
        <section className="mt-10">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
              Excel Files
            </p>
            <h2 className="mt-1 text-2xl font-bold text-blue-950">
              Request Forms
            </h2>
          </div>

          <div className="grid gap-3 md:grid-cols-1 lg:grid-cols-5">
            {files.map((file) => (
              <article
                key={file.fileName}
                className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-emerald-300 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="rounded-lg bg-emerald-100 px-3 py-2 text-xs font-extrabold text-emerald-700">
                    XLSX
                  </span>

                  <span className="text-xs text-slate-400">{file.fileName}</span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-blue-950">
                  {file.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                  {file.description}
                </p>

                <a
                  href={file.href}
                  download
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
                >
                  <span>📗</span>
                  Download Excel
                </a>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}