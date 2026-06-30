import { NewFinanceData } from "@/types";

interface FinancialSnapshotSectionProps {
  data: NewFinanceData;
  className: string;
  isLoading: boolean;
}

const formatNumber = (value: number, type: 'currency' | 'percentage' | 'ratio' | 'number') => {
  if (type === 'currency') {
    if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
    if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
    return `$${value.toFixed(2)}`;
  }
  if (type === 'percentage') return `${(value * 100).toFixed(2)}%`;
  if (type === 'ratio') return value.toFixed(2);
  return value.toLocaleString('en-US', { maximumFractionDigits: 2 });
};

export default function FinancialSnapshotSection({
  data,
  className,
  isLoading,
}: FinancialSnapshotSectionProps) {
  if (isLoading || !data.financial_snapshot || data.financial_snapshot.eps === 0) {
    return (
      <div
        className={`${className} bg-[#0d1f34] border border-[#111f3d] rounded-[12px] p-[20px]`}
      >
        <h2 className="text-[#c0d4ee] text-[14px] font-[700] mb-[20px]">
          재무 스냅샷
        </h2>

        <div className="flex flex-col gap-[16px]">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="h-[12px] bg-[#1a3a6a] rounded-[6px] w-[80px] animate-pulse" />
              <div className="h-[12px] bg-[#1a3a6a] rounded-[6px] w-[100px] animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  const metrics = [
    { label: "EPS", value: formatNumber(data.financial_snapshot.eps, 'number'), type: 'number' },
    { label: "시가총액", value: formatNumber(data.financial_snapshot.market_cap, 'currency'), type: 'currency' },
    { label: "P/E 비율", value: formatNumber(data.financial_snapshot.pe_ratio, 'ratio'), type: 'ratio' },
    { label: "Forward P/E", value: formatNumber(data.financial_snapshot.forward_pe, 'ratio'), type: 'ratio' },
    { label: "배당 수익률", value: formatNumber(data.financial_snapshot.dividend_yield, 'percentage'), type: 'percentage' },
    { label: "영업 이익률", value: formatNumber(data.financial_snapshot.profit_margin, 'percentage'), type: 'percentage' },
  ];

  return (
    <div
      className={`${className} bg-[#0d1f34] border border-[#111f3d] rounded-[12px] p-[20px]`}
    >
      <h2 className="text-[#c0d4ee] text-[14px] font-[700] mb-[20px]">
        재무 스냅샷
      </h2>

      <div className="flex flex-col gap-[16px]">
        {metrics.map((metric, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-[#6a7c9f] text-[13px] font-[600]">
              {metric.label}
            </span>
            <span className="text-[#ffffff] text-[13px] font-[700]">
              {metric.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
