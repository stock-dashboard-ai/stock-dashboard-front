"use client";

import { ComposedChart, Line, Area, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { PriceData } from "@/types";
import { useMemo } from "react";

interface StockChartProps {
  data: PriceData;
}

const BarRender = (props: any) => {
  const { x, y, width, height, index } = props;
  const color = index % 2 === 0 ? "#ef4444" : "#21c55e";
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={color}
        opacity={1}
      />
    </g>
  );
};

export default function StockChart({ data }: StockChartProps) {
  const chartData = useMemo(() => {
    if (!data || !data.dates || data.dates.length === 0) {
      return [];
    }
    // 막대 그래프 높이를 가격의 2-5% 정도로 스케일링
    const maxPrice = Math.max(...(data.closes || [0]));
    const volumeScale = maxPrice * 0.33;

    return data.dates.map((date, index) => ({
      date,
      price: data.closes?.[index] || 0,
      volume: (data.volumes?.[index] || 0) * volumeScale / Math.max(...(data.volumes || [1])),
    }));
  }, [data]);

  if (!chartData || chartData.length === 0) {
    return <div className="w-full h-full flex items-center justify-center text-[#6a7c9f]">데이터 로딩 중...</div>;
  }

  return (
    <div className="w-full h-full" style={{ outline: "none" }}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={chartData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#21c55e" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#21c55e" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#1a3a6a"
            vertical={false}
          />
          <XAxis
            dataKey="date"
            stroke="#6a7c9f"
            style={{ fontSize: "12px" }}
            tickFormatter={(date) => {
              // 날짜 형식이 "YYYY-MM-DD" 또는 "MM/DD" 등 다양할 수 있으므로
              if (typeof date === 'string') {
                return date.replace(/\d{4}-/, '').replace(/\/\d{4}/, '');
              }
              return date;
            }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#111f3d",
              border: "1px solid #1a3a6a",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "#ffffff" }}
            formatter={(value, name, props) => {
              if (name === "price" && props.color === "#21c55e") {
                return [`$${value?.toLocaleString()}`, "Price"];
              }
              return null;
            }}
            wrapperStyle={{ outline: "none" }}
          />
          <Bar
            dataKey="volume"
            isAnimationActive={false}
            shape={<BarRender />}
          />
          <Area
            type="linear"
            dataKey="price"
            fill="url(#colorPrice)"
            stroke="none"
            isAnimationActive={false}
          />
          <Line
            type="linear"
            dataKey="price"
            stroke="#21c55e"
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
