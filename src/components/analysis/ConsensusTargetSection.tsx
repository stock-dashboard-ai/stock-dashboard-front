import { FinanceData } from "@/types";
import ConsensusTarget from "./ConsensusTarget";

interface ConsensusTargetSectionProps {
  financeData: FinanceData[];
  className: string;
}

export default function ConsensusTargetSection({
  financeData,
  className,
}: ConsensusTargetSectionProps) {
  const currentData = financeData.find((item) => item.isCurrent);

  if (!currentData || !currentData.consensus_target) return null;

  return (
    <div
      className={`${className} bg-[#0d1f34] border border-[#111f3d] rounded-[12px] p-[20px]`}
    >
      <h2 className="text-[#c0d4ee] text-[14px] font-[700] mb-[20px]">
        컨센서스 목표주가
      </h2>
      <ConsensusTarget data={currentData.consensus_target} />
    </div>
  );
}
