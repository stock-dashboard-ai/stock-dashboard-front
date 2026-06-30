import { NewsArticle } from "@/types";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const dateOnly = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const todayOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const yesterdayOnly = new Date(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate());

  if (dateOnly.getTime() === todayOnly.getTime()) {
    return date.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', hour12: false });
  } else if (dateOnly.getTime() === yesterdayOnly.getTime()) {
    return '어제';
  } else {
    return date.toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' });
  }
};

export default function NewsItem({ item }: { item: NewsArticle }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="pb-[16px] border-b border-[#111f3d] last:border-b-0 hover:opacity-80 transition-opacity"
    >
      <div className="flex items-start justify-between gap-[12px]">
        <div className="flex-1">
          <h4 className="text-[#ffffff] text-[13px] font-[600] mb-[8px] line-clamp-2 hover:text-[#3b7bf0]">
            {item.title}
          </h4>
          <div className="flex items-center gap-[8px]">
            <span className="text-[#6a7c9f] text-[11px]">{formatDate(item.date)}</span>
            <span className="text-[#6a7c9f] text-[11px]">•</span>
            <span className="text-[#6a7c9f] text-[11px]">{item.publisher}</span>
          </div>
        </div>
      </div>
    </a>
  );
}
