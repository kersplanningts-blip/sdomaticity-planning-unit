"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  {
    district: "Mati Central",
    learners: 18500,
  },
  {
    district: "Mati North",
    learners: 12300,
  },
  {
    district: "Mati South",
    learners: 9800,
  },
  {
    district: "Private",
    learners: 1177,
  },
];

export default function DistrictChart() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-2xl font-bold text-blue-900 mb-6">
        Learners by District
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          layout="vertical"
          data={data}
        >

          <XAxis type="number" />

          <YAxis
            type="category"
            dataKey="district"
          />

          <Tooltip />

          <Bar
            dataKey="learners"
            radius={[0,8,8,0]}
          />

        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}