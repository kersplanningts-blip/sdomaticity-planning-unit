import Link from "next/link";
import { FolderOpen } from "lucide-react";

const schoolYears = [
  "2017-2018",
  "2018-2019",
  "2019-2020",
  "2020-2021",
  "2021-2022",
  "2022-2023",
  "2023-2024",
  "2024-2025",
];

export default function KPIPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold text-blue-900">
        RXI - Mati City KPI
      </h1>

      <p className="mt-2 text-gray-600">
        Select a School Year to view the KPI files.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        {schoolYears.map((year) => (
          <Link
            key={year}
            href={`/Downloads/kpi/${year}`}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg hover:border-blue-600"
          >
            <FolderOpen className="h-12 w-12 text-blue-700" />

            <h2 className="mt-4 text-xl font-bold">
              SY {year}
            </h2>

            <p className="mt-2 text-sm text-slate-600">
              View KPI Files
            </p>
          </Link>
        ))}

      </div>

    </main>
  );
}