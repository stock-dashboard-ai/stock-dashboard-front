import { NewsItem as NewsItemType } from "@/types";

export default function NewsItem({ item }: { item: NewsItemType }) {
  const getSentimentColor = (sentiment?: string) => {
    switch (sentiment) {
      case "positive":
        return "#21c55e";
      case "negative":
        return "#ef4444";
      case "neutral":
      default:
        return "#6a7c9f";
    }
  };

  return (
    <div className="pb-[16px]">
      <div className="flex items-start justify-between gap-[12px]">
        <div className="flex-1">
          <h4 className="text-[#ffffff] text-[13px] font-[600] mb-[8px] line-clamp-2">
            {item.title}
          </h4>
          <div className="flex items-center gap-[8px]">
            <span className="text-[#6a7c9f] text-[11px]">{item.date}</span>
            <span className="text-[#6a7c9f] text-[11px]">•</span>
            <span className="text-[#6a7c9f] text-[11px]">{item.source}</span>
          </div>
        </div>
        {item.sentiment && (
          <div
            className="min-w-fit px-[8px] py-[4px] rounded-[4px] text-[11px] font-[600]"
            style={{ color: getSentimentColor(item.sentiment), backgroundColor: `${getSentimentColor(item.sentiment)}20` }}
          >
            {item.sentiment === "positive" ? "긍정" : item.sentiment === "negative" ? "부정" : "중립"}
          </div>
        )}
      </div>
    </div>
  );
}
