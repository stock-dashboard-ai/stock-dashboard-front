import { FinanceData, MDASummaryItem } from "@/types";

interface MDASummarySectionProps {
  financeData: FinanceData[];
  className: string;
}

export default function MDASummarySection({
  financeData,
  className,
}: MDASummarySectionProps) {
  const currentData = financeData.find((item) => item.isCurrent);

  if (!currentData || !currentData.mda_summary) return null;

  return (
    <div
      className={`${className} bg-[#0d1f34] border border-[#111f3d] rounded-[12px] p-[20px] flex flex-col overflow-hidden`}
    >
      <h2 className="text-[#c0d4ee] text-[14px] font-[700] mb-[16px]">
        MD&A 요약
      </h2>

      <div className="flex-1 overflow-y-auto">
        {
          currentData.mda_summary.items.map((itm: MDASummaryItem, index: number) => (
            <p key={index} className="text-[#5a7a9a] text-[14px] mb-[30px]">{itm.description}</p>
          ))
        }
      </div>
    </div>
  );
}
