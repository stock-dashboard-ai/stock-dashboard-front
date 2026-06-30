import { FinanceData } from "@/types";
import NewsItem from "./NewsItem";

interface NewsSectionProps {
  financeData: FinanceData[];
  className: string;
}

export default function NewsSection({
  financeData,
  className,
}: NewsSectionProps) {
  const currentData = financeData.find((item) => item.isCurrent);

  if (!currentData || !currentData.news_section) return null;

  return (
    <div
      className={`${className} bg-[#0d1f34] border border-[#111f3d] rounded-[12px] p-[20px] flex flex-col overflow-hidden`}
    >
      <h2 className="text-[#c0d4ee] text-[14px] font-[700] mb-[16px]">
        최신 뉴스
      </h2>

      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col gap-[0px]">
          {currentData.news_section.news.map((newsItem, index) => (
            <NewsItem key={index} item={newsItem} />
          ))}
        </div>
      </div>
    </div>
  );
}
