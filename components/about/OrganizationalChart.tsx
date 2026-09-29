import Image from "next/image";

const team = [
  {
    name: "Dr. Winnie E. Batoon, CESO V",
    position: "Schools Division Superintendent",
    image: "/team/sds.jpg",
  },
  {
    name: "Elma A. Prudente, CESE",
    position: "OIC-Assistant Schools Division Superintendent",
    image: "/team/asds.png",
  },
  {
    name: "Ivy Rose R. Limpio",
    position: "Planning Officer III",
    image: "/team/planning-officer.jpg",
  },
  {
    name: "Name of Admin Aide VI",
    position: "Admin Aide VI",
    image: "/team/pdo.jpg",
  },
  {
    name: "Kerstie Lynn V. Manuay",
    position: "Administrative Support",
    image: "/team/admin-support.png",
  },
];

function PersonCard({
  name,
  position,
  image,
}: {
  name: string;
  position: string;
  image: string;
}) {
  return (
    <div className="flex flex-col items-center rounded-2xl bg-white p-6 shadow-lg border border-slate-200 w-72 hover:-translate-y-1 hover:shadow-xl transition">
      <Image
        src={image}
        alt={name}
        width={120}
        height={120}
        className="rounded-full object-cover border-4 border-blue-100"
      />

      <h3 className="mt-5 text-center text-lg font-bold text-blue-950">
        {name}
      </h3>

      <p className="mt-2 text-center text-blue-700">
        {position}
      </p>
    </div>
  );
}

export default function OrganizationalChart() {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <p className="uppercase tracking-[0.2em] text-blue-700 font-bold text-sm">
          Meet Our Team
        </p>

        <h2 className="text-4xl font-bold text-blue-950 mt-3">
          Organizational Structure
        </h2>

        <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
          The Planning Unit is composed of dedicated professionals working
          together to provide planning, monitoring, data management, and
          technical assistance to schools across the division.
        </p>
      </div>

      <div className="flex flex-col items-center gap-8">

        <PersonCard {...team[0]} />

        <div className="h-10 w-1 bg-blue-300"></div>

        <PersonCard {...team[1]} />

        <div className="h-10 w-1 bg-blue-300"></div>

        <PersonCard {...team[2]} />

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-10">
          <PersonCard {...team[3]} />
          <PersonCard {...team[4]} />
        </div>

      </div>
    </section>
  );
}