interface StockGridItemProps {
  label: string;
  value: string;
  subtitle?: string;
  color?: "positive" | "negative" | "neutral";
}

export default function StockGridItem({
  label,
  value,
  subtitle,
  color = "neutral",
}: StockGridItemProps) {
  const colorClass = {
    positive: "text-[#21c55e]",
    negative: "text-[#3483fa]",
    neutral: "text-[#6a7c9f]",
  }[color];

  return (
    <div className="bg-[#111f3d] rounded-[8px] p-[16px] border border-[#1a3a6a]">
      <p className="text-[12px] text-[#6a7c9f] mb-[8px]">{label}</p>
      <p className="text-[20px] font-[700] text-[#ffffff]">{value}</p>
      {subtitle && <p className={`text-[12px] mt-[4px] ${colorClass}`}>{subtitle}</p>}
    </div>
  );
}
