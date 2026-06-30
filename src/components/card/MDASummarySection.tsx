import { NewFinanceData } from "@/types";

interface MDASummarySectionProps {
  data: NewFinanceData;
  className: string;
  isLoading: boolean;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' });
};

export default function MDASummarySection({
  data,
  className,
  isLoading,
}: MDASummarySectionProps) {
  if (isLoading || !data.mda_summary || !data.mda_summary.preview) {
    return (
      <div
        className={`${className} bg-[#0d1f34] border border-[#111f3d] rounded-[12px] p-[20px] flex flex-col overflow-hidden`}
      >
        <h2 className="text-[#c0d4ee] text-[14px] font-[700] mb-[16px]">
          MD&A 요약
        </h2>

        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col gap-[12px]">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="space-y-[8px]">
                <div className="h-[16px] bg-[#1a3a6a] rounded-[6px] w-full animate-pulse" />
                <div className="h-[16px] bg-[#1a3a6a] rounded-[6px] w-[90%] animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${className} bg-[#0d1f34] border border-[#111f3d] rounded-[12px] p-[20px] flex flex-col overflow-hidden`}
    >
      <div className="flex items-center justify-between mb-[16px]">
        <h2 className="text-[#c0d4ee] text-[14px] font-[700]">
          MD&A 요약
        </h2>
        <span className="text-[#6a7c9f] text-[11px]">
          {formatDate(data.mda_summary.filing_date)}
        </span>
      </div>

      <div className="flex-1 overflow-y-auto pr-[8px]">
        <p className="text-[#5a7a9a] text-[13px] leading-[1.6] whitespace-pre-wrap">
          {data.mda_summary.preview}
        </p>
      </div>
    </div>
  );
}
