import { FinanceData } from "@/types";

interface FinancialSnapshotSectionProps {
  financeData: FinanceData[];
  className: string;
}

export default function FinancialSnapshotSection({
  financeData,
  className,
}: FinancialSnapshotSectionProps) {
  const currentData = financeData.find((item) => item.isCurrent);

  if (!currentData || !currentData.financial_snapshot) return null;

  return (
    <div
      className={`${className} bg-[#0d1f34] border border-[#111f3d] rounded-[12px] p-[20px]`}
    >
      <h2 className="text-[#c0d4ee] text-[14px] font-[700] mb-[20px]">
        재무 스냅샷
      </h2>

      <div className="flex flex-col gap-[16px]">
        {currentData.financial_snapshot.metrics.map((metric, index) => (
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
