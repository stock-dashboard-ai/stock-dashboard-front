"use client";

import { useState } from "react";
import { NewFinanceData } from "@/types";
import StockChartTabs from "../chart/StockChartTabs";
import StockChart from "../chart/StockChart";

type ChartPeriod = "1M" | "3M" | "6M" | "1Y";

export default function StockGridBox({ newFinanceData, className, isLoading }: { newFinanceData: NewFinanceData, className: string, isLoading: boolean }) {
  const [activePeriod, setActivePeriod] = useState<ChartPeriod>("1M");


  return (
    <div className={`w-full relative h-full p-[20px] bg-[#0d1f34] border border-[#111f3d] rounded-[12px] flex flex-col overflow-hidden ${className}`}>
      {/* Header */}
      <div className="mb-[20px] flex items-center gap-[8px]">
        <h2 className="text-[18px] font-[600] text-[#ffffff] mb-[4px]">
          {newFinanceData.financeName} Corp.
        </h2>
        <p className="text-[12px] text-[#6a7c9f] px-[8px] py-[4px] bg-[#0f1f3c] rounded-[8px]">SemiConductors AI</p>
      </div>

      {/* Tab Section */}
      <div className="absolute right-[20px] top-[20px]">
        <StockChartTabs activePeriod={activePeriod} onPeriodChange={setActivePeriod} />
      </div>

      {/* Chart Section */}
      <div className="flex-1 overflow-hidden relative">
        {isLoading && (
          <div className="absolute inset-0 bg-[#0d1f34]/80 flex items-center justify-center z-10 rounded-[8px]">
            <div className="flex flex-col items-center gap-[12px]">
              <div className="w-[40px] h-[40px] border-4 border-[#1a3a6a] border-t-[#3b7bf0] rounded-full animate-spin" />
              <p className="text-[14px] text-[#6a7c9f]">데이터 로딩 중...</p>
            </div>
          </div>
        )}
        {newFinanceData.priceData && <StockChart data={newFinanceData.priceData[activePeriod]} />}
      </div>
    </div>
  );
}
