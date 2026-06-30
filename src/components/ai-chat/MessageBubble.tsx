import { FaCircleCheck } from "react-icons/fa6";
import { ChatMessage } from "@/types";

interface MessageBubbleProps {
  message: ChatMessage;
}

const getSourceLabel = (source: string) => {
  const sourceMap: { [key: string]: string } = {
    analyst: "분석가 평점",
    financials: "재무정보",
    mda: "MD&A",
    news: "뉴스",
    price: "가격 데이터",
    earnings: "어닝 데이터",
  };
  return sourceMap[source] || source;
};

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.user === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-[10px] sm:mb-[12px] gap-[6px] sm:gap-[8px]`}>
      {!isUser && (
        <div className="w-[20px] sm:w-[22px] md:w-[24px] h-[20px] sm:h-[22px] md:h-[24px] rounded-full bg-[#3b7bf0] flex items-center justify-center flex-shrink-0 mt-[2px] sm:mt-[3px] md:mt-[4px]">
          <FaCircleCheck color="white" size={12} />
        </div>
      )}
      <div className={`max-w-[75%] sm:max-w-[70%] ${isUser ? "flex flex-col items-end" : ""}`}>
        <div
          className={`px-[10px] sm:px-[12px] md:px-[14px] py-[8px] sm:py-[9px] md:py-[10px] rounded-[6px] sm:rounded-[7px] md:rounded-[8px] ${
            isUser
              ? "bg-[#1a3a6a] text-[#ffffff]"
              : "bg-[#111f3d] text-[#c0d4ee]"
          }`}
        >
          <p className="text-[12px] sm:text-[13px] font-[500] leading-[1.5] whitespace-pre-wrap">
            {message.content}
          </p>
        </div>

        {!isUser && message.sources && message.sources.length > 0 && (
          <div className="mt-[6px] sm:mt-[8px] text-[9px] sm:text-[10px] text-[#6a7c9f]">
            <p className="mb-[2px] sm:mb-[3px]">📚 출처: {message.sources.map(getSourceLabel).join(", ")}</p>
            {message.chunks_used && (
              <p>📊 {message.chunks_used}개 청크 사용</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
