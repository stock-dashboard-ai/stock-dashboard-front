"use client";

import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { EPSEstimate } from "@/types";
import { useMemo } from "react";

interface EarningChartProps {
  data: EPSEstimate[];
}

const PeriodLabel: { [key: string]: string } = {
  "0q": "Current Q",
  "+1q": "Next Q",
  "0y": "Current Y",
  "+1y": "Next Y",
};

export default function EarningChart({ data }: EarningChartProps) {
  const chartData = useMemo(() => {
    return data.map((item) => ({
      period: PeriodLabel[item.period] || item.period,
      originalPeriod: item.period,
      avg: Number(item.avg.toFixed(2)),
      growth: Number((item.growth * 100).toFixed(1)),
      numberOfAnalysts: item.numberOfAnalysts,
    }));
  }, [data]);

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#1a3a6a"
            vertical={false}
          />
          <XAxis
            dataKey="period"
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
            formatter={(value, name) => {
              if (name === "avg") return [`$${value}`, "평균 EPS"];
              if (name === "growth") return [`${value}%`, "성장률"];
              return value;
            }}
            cursor={{ fill: "transparent" }}
          />
          <Legend
            wrapperStyle={{ color: "#6a7c9f", fontSize: "12px" }}
          />
          <Bar
            dataKey="avg"
            fill="#21c55e"
            name="평균 EPS"
            radius={[4, 4, 0, 0]}
            isAnimationActive={false}
          />
          <Bar
            dataKey="growth"
            fill="#3483fa"
            name="성장률 (%)"
            radius={[4, 4, 0, 0]}
            isAnimationActive={false}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
