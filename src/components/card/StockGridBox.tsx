"use client";

import { useState } from "react";
import { FinanceData } from "@/types";
import StockChartTabs from "../chart/StockChartTabs";
import StockChart from "../chart/StockChart";

type ChartPeriod = "1M" | "3M" | "6M" | "1Y";

export default function StockGridBox({ financeData, className }: { financeData: FinanceData[], className: string }) {
  const currentStock = financeData.find((stock) => stock.isCurrent);
  const [activePeriod, setActivePeriod] = useState<ChartPeriod>("1M");

  if (!currentStock) return null;

  const chartData = currentStock.price_chart.find(
    (chart) => chart.type === activePeriod
  );

  return (
    <div className={`w-full relative h-full p-[20px] bg-[#0d1f34] border border-[#111f3d] rounded-[12px] flex flex-col overflow-hidden ${className}`}>
      {/* Header */}
      <div className="mb-[20px] flex items-center gap-[8px]">
        <h2 className="text-[18px] font-[600] text-[#ffffff] mb-[4px]">
          {currentStock.name} Corp.
        </h2>
        <p className="text-[12px] text-[#6a7c9f] px-[8px] py-[4px] bg-[#0f1f3c] rounded-[8px]">SemiConductors AI</p>
      </div>

      {/* Tab Section */}
      <div className="absolute right-[20px] top-[20px]">
        <StockChartTabs activePeriod={activePeriod} onPeriodChange={setActivePeriod} />
      </div>

      {/* Chart Section */}
      <div className="flex-1 overflow-hidden">
        {chartData && <StockChart data={chartData.datas} />}
      </div>
    </div>
  );
}
