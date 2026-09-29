import {
  BarChart3,
  Database,
  ClipboardCheck,
  HandHelping,
  FileBarChart,
  FileText,
} from "lucide-react";
import Image from "next/image";
import OrganizationalChart from "@/components/about/OrganizationalChart";
const teamMembers = [
  {
    name: "Dr. Winnie E. Batoon, CESO V",
    position: "Schools Division Superintendent",
    image: "/team/sds.jpg",
  },
  {
    name: "Name of ASDS",
    position: "Assistant Schools Division Superintendent",
    image: "/team/asds.jpg",
  },
  {
    name: "Name of Planning Officer",
    position: "Planning Officer",
    image: "/team/planning-officer.jpg",
  },
  {
    name: "Name of Administrative Support",
    position: "Administrative Support",
    image: "/team/admin-support.jpg",
  },
];
export default function AboutUsPage() {
  const offices = [
    {
      title: "Office of the Schools Division Superintendent",
      description:
        "Provides overall leadership, direction, and supervision in the delivery of quality basic education.",
    },
    {
      title: "Curriculum Implementation Division",
      description:
        "Supports schools in improving teaching, learning, and learner achievement.",
    },
    {
      title: "School Governance and Operations Division",
      description:
        "Ensures effective school operations, governance, and support services.",
    },
    {
      title: "Planning and Research Unit",
      description:
        "Leads data-informed planning, monitoring, research, and performance reporting.",
    },
  ];

  const leaders = [
    {
      name: "Name of Schools Division Superintendent",
      position: "Schools Division Superintendent",
      initials: "SDS",
    },
    {
      name: "Name of Assistant Schools Division Superintendent",
      position: "Assistant Schools Division Superintendent",
      initials: "ASDS",
    },
    {
      name: "Name of Planning Officer",
      position: "Planning Officer",
      initials: "PO",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Hero */}
     <section
  className="relative bg-cover bg-center"
  style={{
    backgroundImage: "url('/planning-unit.jpg')",
  }}
>
  <div className="absolute inset-0 bg-blue-950/65"></div>
  <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

    <div className="grid lg:grid-cols-2 gap-20 items-start">

      {/* LEFT SIDE */}
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-300">
          Schools Division Office of Mati City
        </p>

        <h1 className="mt-4 text-6xl font-extrabold text-white">
          Planning Unit
        </h1>
      </div>

      {/* RIGHT SIDE */}
      <div className="space-y-6 text-lg leading-8 text-blue-100">

        <p>
          The Planning Unit is responsible for coordinating planning
          activities, policy implementation, educational statistics, and
          data management within the Schools Division Office of Mati City.
        </p>

        <p>
          It supports school heads and district offices by providing
          reliable data, technical assistance, monitoring tools, and
          planning guidelines.
        </p>

        <p>
          The unit oversees the collection, validation, analysis, and
          reporting of educational data through systems such as LIS,
          BEIS, Quick Count, School Profiles, and KPIs.
        </p>

        <p>
          Through evidence-based planning, the unit helps ensure that
          decisions and resource allocations respond to the actual needs
          of schools and learners.
        </p>

      </div>

    </div>

  </div>
</section>

      {/* Vision Mission */}
      <section className="bg-slate-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              Our Direction
            </p>
            <h2 className="mt-3 text-3xl font-bold text-blue-950 md:text-4xl">
              Guided by the DepEd Vision and Mission
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl bg-blue-900 p-8 text-white shadow-lg">
              <p className="text-sm font-bold uppercase tracking-[0.17em] text-blue-200">
                Vision
              </p>
              <p className="mt-5 text-2xl font-semibold leading-9">
                We dream of Filipinos who passionately love their country and
                whose values and competencies enable them to realize their full
                potential and contribute meaningfully to building the nation.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.17em] text-blue-700">
                Mission
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                To protect and promote the right of every Filipino to quality,
                equitable, culture-based, and complete basic education where
                learners learn in a child-friendly, gender-sensitive, safe, and
                motivating environment.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Planning Unit Functions */}

<section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

  <div className="text-center">

    <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
      Core Functions
    </p>

    <h2 className="mt-3 text-4xl font-bold text-blue-950">
      What the Planning Unit Does
    </h2>

    <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
      The Planning Unit provides planning, monitoring, data management,
      and technical support to schools and offices throughout the division.
    </p>

  </div>

  <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

    <article className="rounded-2xl border p-8 shadow-sm hover:shadow-lg transition">

<div className="mb-5 inline-flex rounded-2xl bg-blue-100 p-4">
  <BarChart3 className="h-8 w-8 text-blue-700" />
</div>

      <h3 className="text-xl font-bold text-blue-900">
        Educational Planning
      </h3>

      <p className="mt-4 text-slate-600">
        Prepares annual plans, investment plans, and development
        strategies for the Schools Division Office.
      </p>

    </article>

    <article className="rounded-2xl border p-8 shadow-sm hover:shadow-lg transition">

<div className="mb-5 inline-flex rounded-2xl bg-green-100 p-4">
  <Database className="h-8 w-8 text-green-700" />
</div>

      <h3 className="text-xl font-bold text-blue-900">
        Data Management
      </h3>

      <p className="mt-4 text-slate-600">
        Manages educational databases including LIS, BEIS,
        Quick Count, eSF7, NSBI, School Profiles and a lot more!.
      </p>

    </article>

    <article className="rounded-2xl border p-8 shadow-sm hover:shadow-lg transition">

<div className="mb-5 inline-flex rounded-2xl bg-yellow-100 p-4">
  <ClipboardCheck className="h-8 w-8 text-yellow-700" />
</div>

      <h3 className="text-xl font-bold text-blue-900">
        Monitoring & Evaluation
      </h3>

      <p className="mt-4 text-slate-600">
        Monitors school performance and evaluates programs using
        reliable educational indicators.
      </p>

    </article>

    <article className="rounded-2xl border p-8 shadow-sm hover:shadow-lg transition">

<div className="mb-5 inline-flex rounded-2xl bg-purple-100 p-4">
  <HandHelping className="h-8 w-8 text-purple-700" />
</div>

      <h3 className="text-xl font-bold text-blue-900">
        Technical Assistance
      </h3>

      <p className="mt-4 text-slate-600">
        Provides technical support and planning assistance to
        districts and schools.
      </p>

    </article>

    <article className="rounded-2xl border p-8 shadow-sm hover:shadow-lg transition">

<div className="mb-5 inline-flex rounded-2xl bg-red-100 p-4">
  <FileBarChart className="h-8 w-8 text-red-700" />
</div>

      <h3 className="text-xl font-bold text-blue-900">
        Performance Reporting
      </h3>

      <p className="mt-4 text-slate-600">
        Consolidates reports, KPIs, and educational statistics for
        evidence-based decision making.
      </p>

    </article>

    <article className="rounded-2xl border p-8 shadow-sm hover:shadow-lg transition">

<div className="mb-5 inline-flex rounded-2xl bg-cyan-100 p-4">
  <FileText className="h-8 w-8 text-cyan-700" />
</div>

      <h3 className="text-xl font-bold text-blue-900">
        Policy Support
      </h3>

      <p className="mt-4 text-slate-600">
        Supports division management through policy analysis,
        planning guidelines, and strategic recommendations.
      </p>

    </article>

  </div>

</section>

{/* Organizational Structure */}
<OrganizationalChart />

      {/* Closing */}
      <section className="bg-blue-950 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-200">
            Together, we move forward
          </p>

          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-bold text-white md:text-4xl">
            Every learner deserves a brighter future.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            The Schools Division Office of Mati City remains committed to
            building stronger schools, empowered educators, and successful
            learners.
          </p>
        </div>
      </section>
    </main>
  );
}