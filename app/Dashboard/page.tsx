type DataTableProps = {
  headers: string[];
  rows: string[][];
};

function DataTable({ headers, rows }: DataTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full min-w-[900px] border-collapse text-sm">
        <thead className="bg-[#1FAEB0] text-white">
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="whitespace-pre-line border-r border-cyan-700 px-4 py-4 text-center text-base font-bold last:border-r-0"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b border-slate-200 last:border-b-0 hover:bg-slate-50"
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={`${rowIndex}-${cellIndex}`}
                  className={`whitespace-pre-line border-r border-slate-200 px-4 py-4 align-top leading-6 last:border-r-0 ${
                    cellIndex === 0
                      ? "text-center text-base font-semibold text-slate-800"
                      : "text-center text-slate-700"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function DashboardPage() {
  const kpiRows = [
    [
      "Net Enrollment Rate",
      "Kinder – 72.91%\nElem – 93.89%\nJHS – 91.47%\nSHS – 72.12%",
      "Kinder – 83.66%\nElem – 92.89%\nJHS – 83.97%\nSHS – 70.49%",
      "Kinder – 10.75\nElem – (-1.00)\nJHS – (-7.50)\nSHS – (-1.63)",
      "Above Target\nBelow Target\nBelow Target\nBelow Target",
      "Kinder – 74.20%\nElem – 95.56%\nJHS – 92.62%\nSHS – 76.29%",
    ],
    [
      "Completion Rate",
      "Elem – 100%\nJHS – 99.97%\nSHS – 99.42%",
      "Elem – 94.15%\nJHS – 82.00%\nSHS – 77.97%",
      "Elem – (-5.85)\nJHS – (-17.97)\nSHS – (-21.45)",
      "Below Target\nBelow Target\nBelow Target",
      "Elem – 100%\nJHS – 78.19%\nSHS – 99.61%",
    ],
    [
      "Retention Rate",
      "Elem – 100%\nSec – 100%",
      "Elem – 97.73%\nSec – 96.27%",
      "Elem – (-2.27)\nSec – (-3.73)",
      "Below Target\nBelow Target",
      "Elem – 100%\nSec – 100%",
    ],
    [
      "School Leaver Rate",
      "Elem – 0.00%\nSec – 0.10%",
      "Elem – 0.82%\nSec – 4.56%",
      "Elem – 0.82\nSec – 4.46",
      "Below Target\nBelow Target",
      "Elem – 0.00%\nSec – 0.00%",
    ],
  ];

  const assessmentRows = [
    [
      "NAT 6",
      "2024",
      "44.09%\nMPS: 75.00",
      "13.15%\nMPS: 43.95",
      "(30.94%)\nMPS (31.05)",
      "Below target",
      "65.04%\nMPS: 75.00",
    ],
    [
      "NAT 10",
      "2022",
      "52.82%\nMPS: 75.00",
      "0.29%\nMPS: 34.68",
      "(52.53%)\nMPS (40.32)",
      "Below target",
      "69.41%\nMPS: 75.00",
    ],
    [
      "NAT 12",
      "2025",
      "54.14%\nMPS: 75.00",
      "0.00%\nMPS – 37.15",
      "(54.14%)\nMPS (37.85)",
      "Below target",
      "59.42%\nMPS: 75.00",
    ],
    [
      "CRLA",
      "2026",
      "75.00%",
      "7.93% (BOSY)",
      "67.07%",
      "Below target",
      "75.00%",
    ],
    [
      "RMA",
      "2025",
      "75.00%",
      "32.10%",
      "(42.90%)",
      "Below target",
      "75.00%",
    ],
    [
      "PHIL-IRI",
      "2026",
      "75.00%",
      "14.71% (Fil BOSY)\n8.17 (Eng BOSY)",
      "60.29 (Filipino)\n66.83 (English)",
      "Below target",
      "75.00%",
    ],
    [
      "ELLNA",
      "2025",
      "55.07%\nMPS: 75.00",
      "7.39%\nMPS – 47.10",
      "(47.68%)\nMPS (27.90)",
      "Below target",
      "65.04%\nMPS: 75.00",
    ],
  ];

  const securityRows = [
    [
      "Security Personnel",
      "Absence, insufficiency, or inadequacy of watchmen, security guards, and gate personnel.",
      "Request, hire, deploy, or fund additional watchmen and security guards.",
      "Requests remain pending due to funding, staffing, or LGU constraints.",
    ],
    [
      "Perimeter Security",
      "Lack, incompletion, or deterioration of perimeter fences and gates.",
      "Construct, repair, strengthen, or temporarily secure school boundaries.",
      "Fence improvement is recognized as an immediate priority but constrained by resources.",
    ],
    [
      "Security Monitoring and Surveillance",
      "Absence of CCTV, metal detectors, guardhouses, and security mechanisms.",
      "Install CCTV, use metal detectors, improve screening, and strengthen access control.",
      "Schools are implementing temporary monitoring strategies while awaiting resources.",
    ],
    [
      "Infrastructure Safety",
      "Cracks, exposed wiring, and earthquake-related damage repair.",
      "Conduct inspections, report damages, and implement repair and rehabilitation works.",
      "Facilities require inclusion in repair schedules.",
    ],
    [
      "Learner Behavior and Protection",
      "Aggression, bullying, and behavioral concerns affecting learner and teacher safety.",
      "Strengthen classroom management, counseling, parent engagement, and child protection measures.",
      "Protective measures should be sustained.",
    ],
    [
      "Safe Access and Evacuation",
      "Steep pathways and limited exits.",
      "Construct alternative exits and improve pathways.",
      "Immediate Action Needed",
    ],
  ];

  const issuesRows = [
    [
      "Low Learner Performance in Achievement Tests",
      "Low learning achievement and reduced attainment of learning competencies",
      "Strengthen instructional support through GaBAy (Guro at Bata Aalalayan)\n• Enhance assessment-driven teaching strategies\n• Conduct regular learning monitoring\n• Provide teacher capacity-building activities",
    ],
    [
      "School Safety and Security Concerns (security guard, fence, CCTV etc.)",
      "Increased security risks, unauthorized entry, theft, and threats to learner safety.",
      "• Augment security personnel\n• Improve perimeter security\n• Install CCTV\n• Strengthen stakeholder partnerships",
    ],
    [
      "Funding and Budget Constraints",
      "Delayed implementation of priority programs and limited school resources",
      "• Mobilize resources through LGU support, stakeholder partnerships, PTA assistance, and community fundraising\n• Prioritize budget allocation for critical needs",
    ],
  ];

  const menuItems = [
    ["Figures", "#figures"],
    ["KPI", "#kpi"],
    ["KPI Factors", "#kpi-factors"],
    ["Assessment", "#assessment"],
    ["Assessment Actions", "#assessment-actions"],
    ["Budget", "#budget"],
    ["Security Audit", "#security"],
    ["Issues", "#issues"],
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900 md:px-8">
      <div className="mx-auto max-w-[1500px] space-y-10">
        {/* Clickable menu */}
        <nav className="sticky top-0 z-30 -mx-4 overflow-x-auto border-y border-slate-200 bg-white/95 px-4 py-3 shadow-sm backdrop-blur md:-mx-8 md:px-8">
          <div className="mx-auto flex w-max min-w-full max-w-[1500px] gap-2">
            {menuItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="whitespace-nowrap rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-800 transition hover:bg-blue-800 hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>

        {/* Figures */}
        <section id="figures" className="scroll-mt-24">
          <div className="mb-6 text-center">
            <h1 className="mt-4 text-4xl font-black tracking-[0.12em] text-slate-950 md:text-6xl">
              FIGURES
            </h1>
            <p className="mt-2 text-slate-600">as of April 2026</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <article className="overflow-hidden rounded-2xl border border-cyan-200 bg-white shadow-sm">
              <div className="bg-gradient-to-r from-cyan-600 to-teal-500 p-6 text-white">
                <p className="text-sm font-bold uppercase tracking-[0.15em]">
                  Enrolment Quick Count
                </p>
                <p className="mt-2 text-5xl font-black italic">41,694</p>
                <p className="mt-1 text-sm text-cyan-50">as of July 7, 2026</p>
              </div>

              <div className="grid grid-cols-2 divide-x divide-y divide-slate-200 text-center sm:grid-cols-4">
                {[
                  ["Key Stage 1", "12,629"],
                  ["Key Stage 2", "10,023"],
                  ["Junior High", "12,569"],
                  ["Senior High", "11,264"],
                ].map(([label, value]) => (
                  <div key={label} className="p-4">
                    <p className="text-sm font-semibold text-slate-500">
                      {label}
                    </p>
                    <p className="mt-2 text-2xl font-black italic text-slate-900">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <article className="overflow-hidden rounded-2xl border border-fuchsia-200 bg-white shadow-sm">
              <div className="bg-gradient-to-r from-fuchsia-700 to-pink-600 p-6 text-white">
                <p className="text-sm font-bold uppercase tracking-[0.15em]">
                  Personnel
                </p>
                <p className="mt-2 text-5xl font-black italic">2,017</p>
                <p className="mt-1 text-sm text-pink-100">
                  as of April 30, 2026
                </p>
              </div>

              <div className="grid grid-cols-3 divide-x divide-slate-200 text-center">
                {[
                  ["Teaching", "1,630"],
                  ["Teaching Related", "161"],
                  ["Non-Teaching", "226"],
                ].map(([label, value]) => (
                  <div key={label} className="p-4">
                    <p className="text-sm font-semibold text-slate-500">
                      {label}
                    </p>
                    <p className="mt-2 text-2xl font-black italic text-slate-900">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <article className="overflow-hidden rounded-2xl border border-orange-200 bg-white shadow-sm">
              <div className="bg-gradient-to-r from-orange-500 to-amber-400 p-6 text-white">
                <p className="text-sm font-bold uppercase tracking-[0.15em]">
                  Schools
                </p>
                <p className="mt-2 text-5xl font-black italic">83</p>
                <div className="mt-3 flex gap-5 text-sm font-semibold">
                  <span>Public: 72</span>
                  <span>Private: 11</span>
                </div>
              </div>

              <div className="grid grid-cols-3 divide-x divide-slate-200 text-center">
                <div className="p-4">
                  <p className="text-sm font-semibold text-slate-500">
                    Elementary
                  </p>
                  <p className="mt-2 text-lg font-black text-slate-900">
                    47 Public
                  </p>
                  <p className="text-lg font-black text-slate-900">8 Private</p>
                </div>

                <div className="p-4">
                  <p className="text-sm font-semibold text-slate-500">
                    Secondary
                  </p>
                  <p className="mt-2 text-lg font-black text-slate-900">
                    18 Public
                  </p>
                  <p className="text-lg font-black text-slate-900">
                    10 Private
                  </p>
                </div>

                <div className="p-4">
                  <p className="text-sm font-semibold text-slate-500">
                    Integrated
                  </p>
                  <p className="mt-2 text-lg font-black text-slate-900">
                    7 Public
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* KPI */}
        <section id="kpi" className="scroll-mt-24">
          <div className="mb-6 text-center">
            <h2 className="mt-3 text-3xl font-black tracking-[0.08em] text-slate-950 md:text-5xl">
              KEY PERFORMANCE INDICATORS
            </h2>
          </div>

          <DataTable
            headers={[
              "KPI",
              "Target FY 2025\n(REDP 2023–2028 StratObjectives)",
              "Accomplishment\nFY 2025",
              "Balance/Gap to\nCY 2025 Target",
              "Status\n(Above Target, On track, Below target)",
              "Target FY 2026\n(REDP 2023–2028 StratObjectives)",
            ]}
            rows={kpiRows}
          />
        </section>

        {/* KPI factors */}
        <section
          id="kpi-factors"
          className="scroll-mt-24 rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
        >
          <h2 className="text-2xl font-bold text-blue-950 md:text-3xl">
            Top 3 Hindering Factors or Facilitating Measures of the Met and
            Unmet Target
          </h2>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-emerald-50 p-6">
              <h3 className="text-xl font-bold text-emerald-900">
                Facilitating Factors
              </h3>
              <ol className="mt-4 list-decimal space-y-3 pl-6 text-lg leading-8 text-slate-700">
                <li>Stakeholder support and partnerships</li>
                <li>
                  Learner support and retention initiatives
                  <span className="italic">
                    {" "}
                    (guidance services, remediation programs, etc.)
                  </span>
                </li>
                <li>
                  Enrollment campaigns
                  <span className="italic"> (social media)</span> and learner
                  tracking
                </li>
              </ol>
            </div>

            <div className="rounded-xl bg-rose-50 p-6">
              <h3 className="text-xl font-bold text-rose-900">
                Hindering Factors
              </h3>
              <ol className="mt-4 list-decimal space-y-3 pl-6 text-lg leading-8 text-slate-700">
                <li>
                  Socioeconomic and family-related barriers
                  <span className="block italic">
                    (financial hardship, migration, family responsibilities,
                    limited parental support)
                  </span>
                </li>
                <li>Attendance and behavioral concerns</li>
                <li>Academic challenges</li>
              </ol>
            </div>
          </div>
        </section>

        {/* National assessment */}
        <section id="assessment" className="scroll-mt-24">
          <div className="mb-6 text-center">
            <h2 className="mt-3 text-3xl font-black tracking-[0.08em] text-slate-950 md:text-5xl">
              NATIONAL ASSESSMENT PERFORMANCE
            </h2>
          </div>

          <DataTable
            headers={[
              "Type of Assessment",
              "Latest Available Data",
              "Target FY 2025",
              "Accomplishment FY 2025",
              "Balance/Gap to CY 2025 Target",
              "Status\n(Above Target, On track, Below target)",
              "Target FY 2026",
            ]}
            rows={assessmentRows}
          />
        </section>

        {/* Assessment action plan */}
        <section
          id="assessment-actions"
          className="scroll-mt-24 rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
        >
          <h2 className="text-2xl font-bold text-blue-950 md:text-3xl">
            National Assessment Performance: Priority Actions
          </h2>

          <div className="mt-7 overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse">
              <thead className="bg-orange-500 text-white">
                <tr>
                  <th className="border border-orange-600 px-5 py-4 text-left text-lg">
                    Top Hindering Factor
                  </th>
                  <th className="border border-orange-600 px-5 py-4 text-left text-lg">
                    Guro at Bata Aalalayan (GaBAy)-Driven Plan of Action
                  </th>
                </tr>
              </thead>

              <tbody className="text-base leading-7">
                <tr>
                  <td className="border border-slate-200 p-5 font-bold">
                    1. Persistent learning gaps in foundational competencies
                  </td>
                  <td className="border border-slate-200 bg-orange-50 p-5">
                    Scale up the <b>GaBAy Program</b> by prioritizing learners
                    below proficiency for structured literacy, numeracy, and
                    competency recovery sessions with regular progress
                    monitoring.
                  </td>
                </tr>

                <tr>
                  <td className="border border-slate-200 p-5 font-bold">
                    2. Limited translation of assessment results into focused
                    interventions
                  </td>
                  <td className="border border-slate-200 bg-orange-50 p-5">
                    <b>Institutionalize GaBAy Intervention Planning</b> by
                    requiring every school to use national and division
                    assessment results to develop competency-based GaBAy
                    intervention plans targeting least-mastered skills.
                  </td>
                </tr>

                <tr>
                  <td className="border border-slate-200 p-5 font-bold">
                    3. Inconsistent improvement in instructional delivery
                    across schools
                  </td>
                  <td className="border border-slate-200 bg-orange-50 p-5">
                    <b>
                      Strengthen GaBAy implementation through differentiated
                      technical assistance
                    </b>
                    , focusing on schools with the largest performance gaps,
                    while tracking implementation fidelity and learner gains
                    through consistent weekly monitoring.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Budget */}
        <section id="budget" className="scroll-mt-24">
          <div className="mb-6 text-center">
            <h2 className="mt-3 text-3xl font-black tracking-[0.08em] text-slate-950 md:text-5xl">
              Budget Utilization Report, FY 2026
            </h2>
            <p className="mt-2 text-slate-600">as of June 30, 2026</p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full min-w-[900px] border-collapse text-base">
              <thead className="bg-cyan-700 text-white">
                <tr>
                  {[
                    "Appropriation",
                    "Allotment",
                    "Obligation",
                    "Disbursement",
                    "Committed Actions",
                  ].map((heading) => (
                    <th
                      key={heading}
                      className="border-r border-cyan-800 px-5 py-3 text-center text-lg last:border-r-0"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-slate-300">
                  <td className="p-4 font-bold">Continuing Fund</td>
                  <td className="p-4 text-right">100,000,000</td>
                  <td className="p-4 text-right">80%</td>
                  <td className="p-4 text-right">70%</td>
                  <td
                    rowSpan={8}
                    className="w-[32%] border-l border-slate-300 p-6 text-center text-lg italic leading-8"
                  >
                    Generate quarterly balances per program, projects and
                    activities (PPA) for the program owners to monitor their
                    balances.
                  </td>
                </tr>

                <tr className="border-b border-slate-300">
                  <td className="p-3 italic">PS</td>
                  <td className="p-3" />
                  <td className="p-3" />
                  <td className="p-3" />
                </tr>

                <tr className="border-b border-slate-300">
                  <td className="p-3 italic">MOOE</td>
                  <td className="p-3 text-right">15,429,927.27</td>
                  <td className="p-3 text-right">62.17%</td>
                  <td className="p-3 text-right">27.22%</td>
                </tr>

                <tr className="border-b border-slate-300">
                  <td className="p-3 italic">Capital Outlay</td>
                  <td className="p-3 text-right">343,200.00</td>
                  <td className="p-3 text-right">83.33%</td>
                  <td className="p-3 text-right">50%</td>
                </tr>

                <tr className="border-b border-slate-300">
                  <td className="p-4 font-bold">Current Fund</td>
                  <td className="p-4 text-right">100,000,000.00</td>
                  <td className="p-4 text-right">80%</td>
                  <td className="p-4 text-right">70%</td>
                </tr>

                <tr className="border-b border-slate-300">
                  <td className="p-3 italic">PS</td>
                  <td className="p-3 text-right">1,226,525,457.23</td>
                  <td className="p-3 text-right">52.57%</td>
                  <td className="p-3 text-right">48.68%</td>
                </tr>

                <tr className="border-b border-slate-300">
                  <td className="p-3 italic">MOOE</td>
                  <td className="p-3 text-right">115,949,000.00</td>
                  <td className="p-3 text-right">70.72%</td>
                  <td className="p-3 text-right">43.17%</td>
                </tr>

                <tr>
                  <td className="p-3 italic">Capital Outlay</td>
                  <td className="p-3 text-right">-</td>
                  <td className="p-3 text-right">-</td>
                  <td className="p-3 text-right">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Security audit */}
        <section id="security" className="scroll-mt-24">
          <div className="mb-6 text-center">
            <h2 className="mt-3 text-3xl font-black tracking-[0.08em] text-slate-950 md:text-5xl">
              SCHOOL SECURITY AUDIT REPORT
            </h2>
          </div>

          <DataTable
            headers={[
              "Area of Concern",
              "Findings",
              "Plan of Action",
              "Remarks",
            ]}
            rows={securityRows}
          />
        </section>

        {/* Issues */}
        <section id="issues" className="scroll-mt-24">
          <div className="mb-6 text-center">
            <h2 className="mt-3 text-3xl font-black tracking-[0.08em] text-slate-950 md:text-5xl">
              TOP 3 ISSUES AND CHALLENGES
            </h2>
          </div>

          <DataTable
            headers={[
              "Issue / Challenges",
              "Risks/Implications to Learners and School Operations",
              "Recommended Actions/Interventions",
            ]}
            rows={issuesRows}
          />
        </section>
      </div>
    </main>
  );
}