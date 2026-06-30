interface AnalystRatingItemProps {
  name: string;
  rating: "Buy" | "Overweight" | "Neutral" | "Underweight" | "Sell";
  target_price: number;
  color: string;
}

export default function AnalystRatingItem({
  name,
  rating,
  target_price,
  color,
}: AnalystRatingItemProps) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[#6a7c9f] text-[14px] font-[600]">{name}</span>
      <div className="flex items-center gap-[12px]">
        <span style={{ color }} className="text-[14px] font-[700]">
          {rating}
        </span>
        <span className="text-[#ffffff] text-[14px] font-[700] min-w-[50px] text-right">
          ${target_price}
        </span>
      </div>
    </div>
  );
}
