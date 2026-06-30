import { NewFinanceData } from "@/types";
import ConsensusTarget from "./ConsensusTarget";

export default function AnalysisRating({ className, data, isLoading }: { className: string, data: NewFinanceData, isLoading: boolean }) {

    const all = data.analist_rating.buy + data.analist_rating.hold + data.analist_rating.sell;

    const buyPercent = all > 0 ? (data.analist_rating.buy / all) * 100 : 0;
    const holdPercent = all > 0 ? (data.analist_rating.hold / all) * 100 : 0;
    const sellPercent = all > 0 ? (data.analist_rating.sell / all) * 100 : 0;

    return (
        <div className={`${className} relative bg-[#0d1f34] rounded-[12px] p-[20px] overflow-y-auto`}>
            <h2 className="text-[#c0d4ee] text-[14px] font-[700] mb-[20px]">에널리스트 레이팅</h2>

            {isLoading ? (
                <div className="flex flex-col items-center justify-center h-[200px]">
                    <div className="w-[30px] h-[30px] border-3 border-[#1a3a6a] border-t-[#3b7bf0] rounded-full animate-spin mb-[12px]" />
                    <p className="text-[12px] text-[#6a7c9f]">데이터 로딩 중...</p>
                </div>
            ) : (
                <>
                    <div className="bar w-full h-[10px] bg-black rounded-[8px] overflow-hidden flex mb-[20px]">
                        <div className="h-full bg-[#22c55e]" style={{ width: `${buyPercent}%` }}></div>
                        <div className="h-full bg-[#f59e5b]" style={{ width: `${holdPercent}%` }}></div>
                        <div className="h-full bg-[#ef4444]" style={{ width: `${sellPercent}%` }}></div>
                    </div>
                    <div className="flex justify-between items-center font-[800] mb-[36px]">
                        <span className="text-[#22c55e] text-[12px]">매수 {data.analist_rating.buy} ({buyPercent.toFixed(1)}%)</span>
                        <span className="text-[#f59e5b] text-[12px]">홀드 {data.analist_rating.hold} ({holdPercent.toFixed(1)}%)</span>
                        <span className="text-[#ef4444] text-[12px]">매도 {data.analist_rating.sell} ({sellPercent.toFixed(1)}%)</span>
                    </div>
                </>
            )}

            {data.consensus_target && (
                <ConsensusTarget data={data.consensus_target} isLoading={isLoading} />
            )}
        </div>
    );
}