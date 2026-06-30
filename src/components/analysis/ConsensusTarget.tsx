import { ConsensusTarget as ConsensusTargetType } from "@/types";
import AnalystRatingItem from "./AnalystRatingItem";

interface ConsensusTargetProps {
  data: ConsensusTargetType;
}

export default function ConsensusTarget({ data }: ConsensusTargetProps) {
  const minPrice = data.low_target;
  const maxPrice = data.high_target;
  const range = maxPrice - minPrice;
  const currentPosition = ((data.current_price - minPrice) / range) * 100;
  const targetPosition = ((data.target_price - minPrice) / range) * 100;

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case "Buy":
        return "#21c55e";
      case "Overweight":
        return "#21c55e";
      case "Neutral":
        return "#f59e0b";
      case "Underweight":
        return "#ef4444";
      case "Sell":
        return "#ef4444";
      default:
        return "#6a7c9f";
    }
  };

  return (
    <div className="flex flex-col gap-[24px]">
      {/* Price Header */}
      <div>
        <p className="text-[#6a7c9f] text-[12px] font-[600] mb-[8px]">컨센서스 목표주가</p>
        <h3 className="text-[#ffffff] text-[32px] font-[700] mb-[4px]">
          ${data.current_price.toLocaleString()}
        </h3>
        <p className="text-[#21c55e] text-[14px] font-[600]">
          ▲ 14.4% 상승하도
        </p>
      </div>

      {/* Price Range Visualization */}
      <div>
        <div className="flex justify-between mb-[8px] text-[#6a7c9f] text-[12px]">
          <span>고점 ${data.high_target}</span>
          <span>저점 ${data.low_target}</span>
        </div>
        <div className="relative h-[6px] bg-[#1a3a6a] rounded-[3px] overflow-hidden">
          {/* Background bar */}
          <div className="absolute w-full h-full bg-[#1a3a6a]" />
          {/* Current price marker */}
          <div
            className="absolute w-[2px] h-full bg-[#ffffff]"
            style={{ left: `${currentPosition}%` }}
          />
          {/* Target price marker */}
          <div
            className="absolute w-[12px] h-full bg-[#21c55e] rounded-[2px]"
            style={{ left: `${targetPosition}%`, transform: "translateX(-50%)" }}
          />
        </div>
      </div>

      {/* Analyst Ratings */}
      <div>
        <p className="text-[#6a7c9f] text-[12px] font-[600] mb-[12px]">주요 기관 목표가</p>
        <div className="flex flex-col gap-[8px]">
          {data.analyst_ratings.map((analyst, index) => (
            <AnalystRatingItem
              key={index}
              name={analyst.name}
              rating={analyst.rating}
              target_price={analyst.target_price}
              color={getRatingColor(analyst.rating)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
