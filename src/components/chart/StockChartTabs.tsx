type ChartPeriod = "1M" | "3M" | "6M" | "1Y";

interface StockChartTabsProps {
  activePeriod: ChartPeriod;
  onPeriodChange: (period: ChartPeriod) => void;
}

export default function StockChartTabs({
  activePeriod,
  onPeriodChange,
}: StockChartTabsProps) {
  const periods: ChartPeriod[] = ["1M", "3M", "6M", "1Y"];

  return (
    <div className="flex gap-[8px]">
      {periods.map((period) => (
        <button
          key={period}
          onClick={() => onPeriodChange(period)}
          className={`px-[12px] py-[6px] rounded-[6px] text-[12px] font-[600] cursor-pointer transition-all ${
            activePeriod === period
              ? "bg-[#1a3a6a] border border-[#224a7f] text-[#fff]"
              : "bg-[#111f3d] border border-[#1a3a6a] text-[#6a7c9f] hover:bg-[#1a3a6a]"
          }`}
        >
          {period}
        </button>
      ))}
    </div>
  );
}
