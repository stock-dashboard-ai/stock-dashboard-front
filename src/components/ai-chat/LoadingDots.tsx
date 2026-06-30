export default function LoadingDots() {
  return (
    <div className="flex justify-start mb-[12px] gap-[8px]">
      <div className="w-[24px] h-[24px] rounded-full bg-[#3b7bf0] flex-shrink-0" />
      <div className="bg-[#111f3d] px-[12px] py-[10px] rounded-[8px]">
        <div className="flex gap-[4px]">
          <div className="w-[8px] h-[8px] bg-[#6a7c9f] rounded-full animate-bounce" />
          <div
            className="w-[8px] h-[8px] bg-[#6a7c9f] rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          />
          <div
            className="w-[8px] h-[8px] bg-[#6a7c9f] rounded-full animate-bounce"
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </div>
    </div>
  );
}
