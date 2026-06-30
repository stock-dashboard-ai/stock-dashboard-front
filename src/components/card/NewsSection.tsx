import { NewFinanceData } from "@/types";
import NewsItem from "./NewsItem";

interface NewsSectionProps {
  data: NewFinanceData;
  className: string;
  isLoading: boolean;
}

export default function NewsSection({
  data,
  className,
  isLoading,
}: NewsSectionProps) {
  if (isLoading || !data.news_section || data.news_section.articles.length === 0) {
    return (
      <div
        className={`${className} bg-[#0d1f34] border border-[#111f3d] rounded-[12px] p-[20px] flex flex-col overflow-hidden`}
      >
        <h2 className="text-[#c0d4ee] text-[14px] font-[700] mb-[16px]">
          최신 뉴스
        </h2>

        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col gap-[12px]">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="border-b border-[#111f3d] pb-[12px]">
                <div className="h-[16px] bg-[#1a3a6a] rounded-[6px] mb-[8px] animate-pulse" />
                <div className="h-[12px] bg-[#1a3a6a] rounded-[6px] w-[80px] animate-pulse" />
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
      <h2 className="text-[#c0d4ee] text-[14px] font-[700] mb-[16px]">
        최신 뉴스
      </h2>

      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col gap-[0px]">
          {data.news_section.articles.map((newsItem, index) => (
            <NewsItem key={index} item={newsItem} />
          ))}
        </div>
      </div>
    </div>
  );
}
