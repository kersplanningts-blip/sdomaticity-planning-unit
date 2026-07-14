import Link from "next/link";
import { kpiData } from "@/app/Downloads/data/kpi";

export default async function YearPage({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const { year } = await params;

  const folderName = `Mati_SY ${year}`;

  const files = kpiData[folderName as keyof typeof kpiData] || [];

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">

      <Link
        href="/Downloads/kpi"
        className="text-blue-700 hover:underline"
      >
        ← Back to School Years
      </Link>

      <h1 className="mt-6 text-4xl font-bold text-blue-900">
        {folderName}
      </h1>

      <p className="mt-2 text-gray-600">
        {files.length} Available Excel Files
      </p>

      <div className="mt-10 grid gap-4">

        {files.map((file) => (
          <div
            key={file}
            className="flex items-center justify-between rounded-xl border p-5 shadow-sm"
          >
            <div>
              <h2 className="font-semibold">{file}</h2>
            </div>

            <div className="flex gap-3">

  {/* View Button */}
  <a
    href={`/KPI/${folderName}/${file}`}
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-lg bg-blue-700 px-4 py-2 text-white hover:bg-blue-800"
  >
    👁 View
  </a>

  {/* Download Button */}
  <a
    href={`/KPI/${folderName}/${file}`}
    download
    className="rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700"
  >
    ⬇ Download
  </a>

</div>
          </div>
        ))}

      </div>

    </main>
  );
}