"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  {
    level: "Kinder",
    learners: 2816,
  },
  {
    level: "Elementary",
    learners: 20757,
  },
  {
    level: "Junior HS",
    learners: 12572,
  },
  {
    level: "Senior HS",
    learners: 5632,
  },
];

export default function EnrollmentChart() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-2xl font-bold text-blue-900 mb-6">
        Enrollment by Level
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="level" />

          <YAxis />

          <Tooltip />

          <Bar
  dataKey="learners"
  fill="#1E4A9B"
  radius={[8,8,0,0]}
/>
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}