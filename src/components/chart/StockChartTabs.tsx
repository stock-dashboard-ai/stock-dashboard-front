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
    <div className="flex gap-[6px] sm:gap-[8px]">
      {periods.map((period) => (
        <button
          key={period}
          onClick={() => onPeriodChange(period)}
          className={`px-[8px] sm:px-[10px] md:px-[12px] py-[4px] sm:py-[5px] md:py-[6px] rounded-[4px] sm:rounded-[5px] md:rounded-[6px] text-[10px] sm:text-[11px] md:text-[12px] font-[600] cursor-pointer transition-all whitespace-nowrap ${
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
