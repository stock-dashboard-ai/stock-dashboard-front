import { ConsensusTarget as ConsensusTargetType } from "@/types";

interface ConsensusTargetProps {
  data: ConsensusTargetType;
  isLoading?: boolean;
}

export default function ConsensusTarget({ data, isLoading = false }: ConsensusTargetProps) {
  // 데이터 유효성 확인
  const hasValidData = data && data.mean > 0 && data.current > 0 && data.high > data.low;

  if (!hasValidData) {
    return isLoading ? (
      <div className="flex flex-col gap-[24px]">
        {/* Price Header Skeleton */}
        <div>
          <p className="text-[#6a7c9f] text-[12px] font-[600] mb-[8px]">컨센서스 목표주가</p>
          <div className="h-[40px] bg-[#1a3a6a] rounded-[6px] mb-[8px] animate-pulse" />
          <div className="h-[20px] bg-[#1a3a6a] rounded-[6px] w-[150px] animate-pulse" />
        </div>

        {/* Price Range Skeleton */}
        <div>
          <div className="flex justify-between mb-[8px]">
            <div className="h-[12px] bg-[#1a3a6a] rounded-[6px] w-[60px] animate-pulse" />
            <div className="h-[12px] bg-[#1a3a6a] rounded-[6px] w-[60px] animate-pulse" />
          </div>
          <div className="h-[6px] bg-[#1a3a6a] rounded-[3px] animate-pulse" />
        </div>

        {/* Price Information Skeleton */}
        <div className="flex flex-col gap-[8px]">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex justify-between items-center">
              <div className="h-[12px] bg-[#1a3a6a] rounded-[6px] w-[60px] animate-pulse" />
              <div className="h-[12px] bg-[#1a3a6a] rounded-[6px] w-[80px] animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    ) : null;
  }

  const minPrice = data.low;
  const maxPrice = data.high;
  const range = maxPrice - minPrice;
  const currentPosition = ((data.current - minPrice) / range) * 100;
  const meanPosition = ((data.mean - minPrice) / range) * 100;
  const medianPosition = ((data.median - minPrice) / range) * 100;

  const updownPercent = ((data.mean - data.current) / data.current) * 100;

  const SkeletonLoader = () => (
    <div className="flex flex-col gap-[24px]">
      {/* Price Header Skeleton */}
      <div>
        <p className="text-[#6a7c9f] text-[12px] font-[600] mb-[8px]">컨센서스 목표주가</p>
        <div className="h-[40px] bg-[#1a3a6a] rounded-[6px] mb-[8px] animate-pulse" />
        <div className="h-[20px] bg-[#1a3a6a] rounded-[6px] w-[150px] animate-pulse" />
      </div>

      {/* Price Range Skeleton */}
      <div>
        <div className="flex justify-between mb-[8px]">
          <div className="h-[12px] bg-[#1a3a6a] rounded-[6px] w-[60px] animate-pulse" />
          <div className="h-[12px] bg-[#1a3a6a] rounded-[6px] w-[60px] animate-pulse" />
        </div>
        <div className="h-[6px] bg-[#1a3a6a] rounded-[3px] animate-pulse" />
      </div>

      {/* Price Information Skeleton */}
      <div className="flex flex-col gap-[8px]">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex justify-between items-center">
            <div className="h-[12px] bg-[#1a3a6a] rounded-[6px] w-[60px] animate-pulse" />
            <div className="h-[12px] bg-[#1a3a6a] rounded-[6px] w-[80px] animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );

  if (isLoading) {
    return <SkeletonLoader />;
  }

  return (
    <div className="flex flex-col gap-[24px]">
      {/* Price Header */}
      <div>
        <p className="text-[#6a7c9f] text-[12px] font-[600] mb-[8px]">컨센서스 목표주가</p>
        <h3 className="text-[#ffffff] text-[32px] font-[700] mb-[4px]">
          ${data.mean.toLocaleString('en-US', { maximumFractionDigits: 2 })}
        </h3>
        <p className={`${updownPercent >= 0 ? 'text-[#21c55e]' : 'text-[#ef4444]'} text-[14px] font-[600]`}>
          {updownPercent >= 0 ? '▲' : '▼'} {Math.abs(updownPercent).toFixed(1)}% {updownPercent >= 0 ? '상승하도' : '하락하도'}
        </p>
      </div>

      {/* Price Range Visualization */}
      <div>
        <div className="flex justify-between mb-[8px] text-[#6a7c9f] text-[12px]">
          <span>저점 ${data.low.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
          <span>고점 ${data.high.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
        </div>
        <div className="relative h-[6px] bg-[#1a3a6a] rounded-[3px] overflow-hidden">
          {/* Background bar */}
          <div className="absolute w-full h-full bg-[#1a3a6a]" />
          {/* Current price marker */}
          <div
            className="absolute w-[2px] h-full bg-[#ffffff]"
            style={{ left: `${currentPosition}%` }}
          />
          {/* Mean price marker */}
          <div
            className="absolute w-[12px] h-full bg-[#21c55e] rounded-[2px]"
            style={{ left: `${meanPosition}%`, transform: "translateX(-50%)" }}
          />
          {/* Median price marker */}
          <div
            className="absolute w-[8px] h-full bg-[#f59e5b] rounded-[2px]"
            style={{ left: `${medianPosition}%`, transform: "translateX(-50%)" }}
          />
        </div>
      </div>

      {/* Price Information */}
      <div className="flex flex-col gap-[8px]">
        <div className="flex justify-between items-center text-[12px]">
          <span className="text-[#6a7c9f]">현재가</span>
          <span className="text-[#ffffff] font-[600]">${data.current.toLocaleString('en-US', { maximumFractionDigits: 2 })}</span>
        </div>
        <div className="flex justify-between items-center text-[12px]">
          <span className="text-[#6a7c9f]">평균 목표가</span>
          <span className="text-[#21c55e] font-[600]">${data.mean.toLocaleString('en-US', { maximumFractionDigits: 2 })}</span>
        </div>
        <div className="flex justify-between items-center text-[12px]">
          <span className="text-[#6a7c9f]">중앙값</span>
          <span className="text-[#f59e5b] font-[600]">${data.median.toLocaleString('en-US', { maximumFractionDigits: 2 })}</span>
        </div>
      </div>
    </div>
  );
}
