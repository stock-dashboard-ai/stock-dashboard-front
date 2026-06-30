import { FaPaperPlane } from "react-icons/fa6";

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
  isLoading: boolean;
  placeholder?: string;
}

export default function ChatInput({
  value,
  onChange,
  onSubmit,
  onKeyPress,
  isLoading,
  placeholder = "NVDA 관련 질문을 입력하세요...",
}: ChatInputProps) {
  return (
    <div className="flex gap-[6px] sm:gap-[8px]">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={onKeyPress}
        placeholder={placeholder}
        className="flex-1 bg-[#111f3d] border border-[#1a3a6a] rounded-[6px] sm:rounded-[7px] md:rounded-[8px] px-[10px] sm:px-[12px] md:px-[14px] py-[6px] sm:py-[7px] md:py-[8px] text-[#ffffff] text-[11px] sm:text-[12px] placeholder-[#6a7c9f] focus:outline-none focus:border-[#224a7f] resize-none max-h-[60px]"
        rows={2}
      />
      <button
        onClick={onSubmit}
        disabled={isLoading || !value.trim()}
        className="bg-[#3483fa] hover:bg-[#2563eb] disabled:bg-[#1a3a6a] text-[#ffffff] px-[10px] sm:px-[12px] md:px-[16px] py-[6px] sm:py-[7px] md:py-[8px] rounded-[6px] sm:rounded-[7px] md:rounded-[8px] font-[600] text-[11px] sm:text-[12px] cursor-pointer transition-colors flex items-center justify-center flex-shrink-0"
      >
        <FaPaperPlane size={12} />
      </button>
    </div>
  );
}
