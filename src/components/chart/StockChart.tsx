"use client";

import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { PriceData } from "@/types";

interface StockChartProps {
  data: PriceData[];
}

const BarRender = (props: any) => {
  const { fill, x, y, width, height, payload, index } = props;
  const color = index % 2 === 0 ? "#ef4444" : "#21c55e"; // 빨간색, 초록색 교대로
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
  // 막대 그래프 높이를 price 값의 일정 비율로 설정
  const priceMax = Math.max(...data.map(d => d.price));
  const chartData = data.map((item, index) => ({
    ...item,
    volume: (item.price / priceMax) * priceMax * 0.15, // price에 비례하여 높이 설정
    index,
  }));

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
