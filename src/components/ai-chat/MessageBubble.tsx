import { FaCircleCheck } from "react-icons/fa6";

interface MessageBubbleProps {
  content: string;
  isUser: boolean;
}

export default function MessageBubble({ content, isUser }: MessageBubbleProps) {
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-[12px] gap-[8px]`}>
      {!isUser && (
        <div className="w-[24px] h-[24px] rounded-full bg-[#3b7bf0] flex items-center justify-center flex-shrink-0 mt-[4px]">
          <FaCircleCheck color="white" size={14} />
        </div>
      )}
      <div
        className={`max-w-[70%] px-[12px] py-[10px] rounded-[8px] ${
          isUser
            ? "bg-[#1a3a6a] text-[#ffffff]"
            : "bg-[#111f3d] text-[#c0d4ee]"
        }`}
      >
        <p className="text-[13px] font-[500] leading-[1.5] whitespace-pre-wrap">
          {content}
        </p>
      </div>
    </div>
  );
}
