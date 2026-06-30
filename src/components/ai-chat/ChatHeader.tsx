import { FaCheck } from "react-icons/fa";

interface ChatHeaderProps {
  stockName: string;
}

export default function ChatHeader({ stockName }: ChatHeaderProps) {
  return (
    <div className="flex items-center gap-[10px] mb-[16px]">
      <div className="w-[26px] h-[26px] rounded-full bg-gradient-to-b from-[#3b7bf0] to-[#6b4bf0] flex justify-center items-center">
        <FaCheck color="white" size={12} />
      </div>
      <div className="flex flex-col">
        <span className="text-[#c0d4ee] text-[14px] font-[700]">
          {stockName} RAG 분석챗
        </span>
        <span className="text-[#3a5a88] text-[12px]">
          대시보드 데이터 기반 질의응답
        </span>
      </div>
    </div>
  );
}
