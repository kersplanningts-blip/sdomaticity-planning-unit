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
      <section className="bg-gradient-to-br from-blue-950 via-blue-800 to-sky-700">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-200">
            Department of Education
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
            Schools Division Office of Mati City
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Committed to delivering accessible, inclusive, and quality basic
            education for every learner in the City of Mati.
          </p>
        </div>
      </section>

      {/* Profile */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              Division Profile
            </p>
            <h2 className="mt-3 text-3xl font-bold text-blue-950 md:text-4xl">
              Serving the learners of Mati City
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>
              The Schools Division Office of Mati City is a field office of the
              Department of Education responsible for overseeing public schools
              and educational programs within the City of Mati.
            </p>

            <p>
              We work with school leaders, teachers, learners, parents, local
              government units, and community partners to create learning
              environments where every learner can thrive.
            </p>

            <p>
              Through responsive governance, effective programs, and
              data-informed decision-making, the division continuously works to
              improve access, quality, and equity in basic education.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-xl border border-blue-100 bg-blue-50 p-6">
            <p className="text-sm font-semibold text-slate-500">
              Public Schools
            </p>
            <p className="mt-3 text-4xl font-bold text-blue-950">72</p>
          </article>

          <article className="rounded-xl border border-blue-100 bg-blue-50 p-6">
            <p className="text-sm font-semibold text-slate-500">Quick Count Learners</p>
            <p className="mt-3 text-4xl font-bold text-blue-950">41,694</p>
          </article>

          <article className="rounded-xl border border-blue-100 bg-blue-50 p-6">
            <p className="text-sm font-semibold text-slate-500">
              Teaching Personnel
            </p>
            <p className="mt-3 text-4xl font-bold text-blue-950"> 1,791</p>
          </article>

          <article className="rounded-xl border border-blue-100 bg-blue-50 p-6">
            <p className="text-sm font-semibold text-slate-500">
              Barangays Served
            </p>
            <p className="mt-3 text-4xl font-bold text-blue-950">26</p>
          </article>
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

      {/* Offices */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              Our Offices
            </p>
            <h2 className="mt-3 text-3xl font-bold text-blue-950 md:text-4xl">
              Working together for quality education
            </h2>
          </div>

          <p className="max-w-md text-slate-600">
            Our offices work together to provide strategic leadership and
            responsive support to all schools in the division.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {offices.map((office, index) => (
            <article
              key={office.title}
              className="rounded-xl border border-slate-200 bg-white p-7 transition hover:border-blue-300 hover:shadow-md"
            >
              <span className="text-sm font-bold text-blue-400">
                0{index + 1}
              </span>
              <h3 className="mt-4 text-xl font-bold text-blue-950">
                {office.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                {office.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-blue-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              Leadership
            </p>
            <h2 className="mt-3 text-3xl font-bold text-blue-950 md:text-4xl">
              Division Management Team
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Dedicated leaders working to ensure responsive and effective
              education services for every school and learner.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {leaders.map((leader) => (
              <article
                key={leader.position}
                className="rounded-xl bg-white p-7 text-center shadow-sm"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-800 text-xl font-extrabold text-white">
                  {leader.initials}
                </div>

                <h3 className="mt-5 text-lg font-bold text-blue-950">
                  {leader.name}
                </h3>

                <p className="mt-2 text-sm font-medium text-blue-700">
                  {leader.position}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

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