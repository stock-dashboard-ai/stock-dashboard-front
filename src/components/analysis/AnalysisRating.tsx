import { FinanceData } from "@/types";
import ConsensusTarget from "./ConsensusTarget";

export default function AnalysisRating({ className, data }: { className: string, data: FinanceData[] }) {
    const currentData = data.find(item => item.isCurrent);

    if (!currentData) return null;

    const all = currentData.anal_rating.buy + currentData.anal_rating.hold + currentData.anal_rating.sell;

    const buyPercent = (currentData.anal_rating.buy / all) * 100;
    const holdPercent = (currentData.anal_rating.hold / all) * 100;
    const sellPercent = (currentData.anal_rating.sell / all) * 100;

    return (
        <div className={`${className} relative bg-[#0d1f34] rounded-[12px] p-[20px] overflow-y-auto`}>
            <h2 className="text-[#c0d4ee] text-[14px] font-[700] mb-[20px]">에널리스트 레이팅</h2>
            <div className="bar w-full h-[10px] bg-black rounded-[8px] overflow-hidden flex mb-[20px]">
                <div className="h-full bg-[#22c55e]" style={{ width: `${buyPercent}%` }}></div>
                <div className="h-full bg-[#f59e5b]" style={{ width: `${holdPercent}%` }}></div>
                <div className="h-full bg-[#ef4444]" style={{ width: `${sellPercent}%` }}></div>
            </div>
            <div className="flex justify-between items-center font-[800] mb-[36px]">
                <span className="text-[#22c55e] text-[12px]">매수 {currentData.anal_rating.buy} ({buyPercent.toFixed(1)}%)</span>
                <span className="text-[#f59e5b] text-[12px]">홀드 {currentData.anal_rating.hold} ({holdPercent.toFixed(1)}%)</span>
                <span className="text-[#ef4444] text-[12px]">매도 {currentData.anal_rating.sell} ({sellPercent.toFixed(1)}%)</span>
            </div>

            {/* Consensus Target */}
            {currentData.consensus_target && (
                <ConsensusTarget data={currentData.consensus_target} />
            )}
        </div>
    );
}