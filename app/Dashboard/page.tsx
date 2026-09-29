import {
  School,
  Users,
  GraduationCap,
  CheckCircle,
} from "lucide-react";
import EnrollmentChart from "@/components/dashboard/EnrollmentChart";
import GenderChart from "@/components/dashboard/GenderChart";
import DistrictChart from "@/components/dashboard/DistrictChart";
import SchoolTypeChart from "@/components/dashboard/SchoolTypeChart";

export default function Dashboard() { 
  const districtData = [
    { name: "Mati Central", value: 100 },
    { name: "Mati North", value: 99 },
    { name: "Mati South", value: 97 },
    { name: "Private", value: 96 },
  ];

  return (
    <div className="min-h-screen bg-[#1E4A9B] p-8">

      {/* HEADER */}
      <div className="mb-10">
        <p className="uppercase tracking-widest text-yellow-400 font-semibold text-sm">
          Planning Dashboard
        </p>

        <h1 className="text-5xl font-bold text-white mt-2">
          Division at a glance,
          <br />
          SY 2026-2027
        </h1>

        <p className="text-blue-100 mt-4 text-lg">
          Consolidated figures for the Schools Division Office of Mati City.
        </p>
        {/* FILTERS */}

<div className="mt-8 grid md:grid-cols-2 xl:grid-cols-4 gap-4">

  <div>
    <label className="block text-blue-100 mb-2">
      School Year
    </label>

    <select className="w-full rounded-lg bg-white text-gray-700 p-3">
      <option>2026-2027</option>
      <option>2025-2026</option>
      <option>2024-2025</option>
    </select>
  </div>

  <div>
    <label className="block text-blue-100 mb-2">
      District
    </label>

    <select className="w-full rounded-lg bg-white text-gray-700 p-3">
      <option>All Districts</option>
      <option>Mati Central</option>
      <option>Mati North</option>
      <option>Mati South</option>
      <option>Private</option>
    </select>
  </div>

  <div>
    <label className="block text-blue-100 mb-2">
      School Type
    </label>

    <select className="w-full rounded-lg bg-white text-gray-700 p-3">
      <option>All</option>
      <option>Public</option>
      <option>Private</option>
    </select>
  </div>

  <div>
    <label className="block text-blue-100 mb-2">
      Education Level
    </label>

    <select className="w-full rounded-lg bg-white text-gray-700 p-3">
      <option>All Levels</option>
      <option>Kindergarten</option>
      <option>Elementary</option>
      <option>Junior High</option>
      <option>Senior High</option>
    </select>
  </div>

</div>
      </div>

      {/* CARDS */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        <div className="bg-white rounded-3xl p-6 shadow-lg flex items-center gap-5">

  <div className="bg-blue-100 p-4 rounded-2xl">
    <School className="w-10 h-10 text-blue-700" />
  </div>

  <div>
    <p className="text-gray-500">
      Total Schools
    </p>

    <h2 className="text-4xl font-bold text-blue-900">
      83
    </h2>

    <p className="text-gray-500 text-sm">
      Public & Private
    </p>
  </div>

</div>

        <div className="bg-white rounded-3xl p-6 shadow-lg flex items-center gap-5">

  <div className="bg-green-100 p-4 rounded-2xl">
    <GraduationCap className="w-10 h-10 text-green-700" />
  </div>

  <div>
    <p className="text-gray-500">
      Learners
    </p>

    <h2 className="text-4xl font-bold text-blue-900">
      41,777
    </h2>

    <p className="text-gray-500 text-sm">
      Quick Count
    </p>
  </div>

</div>

        <div className="bg-white rounded-3xl p-6 shadow-lg flex items-center gap-5">

  <div className="bg-yellow-100 p-4 rounded-2xl">
    <Users className="w-10 h-10 text-yellow-600" />
  </div>

  <div>
    <p className="text-gray-500">
      Teachers
    </p>

    <h2 className="text-4xl font-bold text-blue-900">
      1,641
    </h2>

    <p className="text-gray-500 text-sm">
      PSIPOP
    </p>
  </div>

</div>

       <div className="bg-white rounded-3xl p-6 shadow-lg flex items-center gap-5">

  <div className="bg-emerald-100 p-4 rounded-2xl">
    <CheckCircle className="w-10 h-10 text-emerald-700" />
  </div>

  <div>
    <p className="text-gray-500">
      Reporting Status
    </p>

    <h2 className="text-4xl font-bold text-blue-900">
      100%
    </h2>

    <p className="text-gray-500 text-sm">
      Schools Reported
    </p>
  </div>

</div>

      </div>

      {/* CHARTS */}

      <div className="mt-8 grid xl:grid-cols-3 gap-6">

  <div className="xl:col-span-2">
    <EnrollmentChart />
  </div>

  <div>
    <GenderChart />
  </div>

</div>
<div className="mt-6 grid xl:grid-cols-3 gap-6">

  <div className="xl:col-span-2">
    <DistrictChart />
  </div>

  <div>
    <SchoolTypeChart />
  </div>

</div>


        {/* DISTRICT */}

        <div className="bg-blue-800 rounded-2xl p-6">

          <h2 className="text-2xl font-bold text-white mb-8">
            Learners by District
          </h2>

          {districtData.map((item) => (

            <div key={item.name} className="mb-6">

              <div className="flex justify-between text-white mb-2">

                <span>{item.name}</span>

                <span>{item.value}%</span>

              </div>

              <div className="bg-blue-700 rounded-full h-3">

                <div
                  className="bg-yellow-400 h-3 rounded-full"
                  style={{ width: `${item.value}%` }}
                ></div>

              </div>

            </div>

          ))}

        </div>

      </div>

  
  );
}