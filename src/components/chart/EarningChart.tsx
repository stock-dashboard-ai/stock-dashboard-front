"use client";

import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { EPSData } from "@/types";

interface EarningChartProps {
  data: EPSData[];
}

export default function EarningChart({ data }: EarningChartProps) {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#1a3a6a"
            vertical={false}
          />
          <XAxis
            dataKey="quarter"
            stroke="#6a7c9f"
            style={{ fontSize: "12px" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#111f3d",
              border: "1px solid #1a3a6a",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "#ffffff" }}
            formatter={(value) => `$${value}`}
            cursor={{ fill: "transparent" }}
          />
          <Legend
            wrapperStyle={{ color: "#6a7c9f", fontSize: "12px" }}
          />
          <Bar
            dataKey="actual"
            fill="#21c55e"
            name="실적"
            radius={[4, 4, 0, 0]}
            isAnimationActive={false}
          />
          <Bar
            dataKey="expected"
            fill="#3483fa"
            name="예상"
            radius={[4, 4, 0, 0]}
            isAnimationActive={false}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
