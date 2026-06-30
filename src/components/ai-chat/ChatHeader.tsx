import { FaCheck } from "react-icons/fa";

interface ChatHeaderProps {
  stockName: string;
}

export default function ChatHeader({ stockName }: ChatHeaderProps) {
  return (
    <div className="flex items-start sm:items-center gap-[8px] sm:gap-[10px] mb-[12px] sm:mb-[14px] md:mb-[16px] pb-[12px] sm:pb-[14px] md:pb-[16px] border-b border-[#111f3d]">
      <div className="w-[24px] sm:w-[25px] md:w-[26px] h-[24px] sm:h-[25px] md:h-[26px] rounded-full bg-gradient-to-b from-[#3b7bf0] to-[#6b4bf0] flex justify-center items-center flex-shrink-0">
        <FaCheck color="white" size={10} />
      </div>
      <div className="flex flex-col gap-[2px] min-w-0">
        <span className="text-[#c0d4ee] text-[12px] sm:text-[13px] md:text-[14px] font-[700] truncate">
          {stockName} RAG 분석챗
        </span>
        <span className="text-[#3a5a88] text-[10px] sm:text-[11px] md:text-[12px] truncate">
          대시보드 데이터 기반 질의응답
        </span>
      </div>
    </div>
  );
}
