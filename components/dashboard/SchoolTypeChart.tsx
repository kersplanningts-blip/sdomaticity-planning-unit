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
    name: "Public",
    value: 79,
  },
  {
    name: "Private",
    value: 4,
  },
];

const COLORS = [
  "#2563EB",
  "#F59E0B",
];

export default function SchoolTypeChart() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-2xl font-bold text-blue-900 mb-6">
        School Type
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={60}
            outerRadius={110}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
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