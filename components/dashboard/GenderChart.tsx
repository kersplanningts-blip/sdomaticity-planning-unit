"use client";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Male",
    value: 21130,
  },
  {
    name: "Female",
    value: 20647,
  },
];

const COLORS = ["#2563EB", "#EC4899"];

export default function GenderChart() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-2xl font-bold text-blue-900 mb-6">
        Learners by Gender
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={120}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />

          <Legend />

        </PieChart>
      </ResponsiveContainer>

    </div>
  );
}