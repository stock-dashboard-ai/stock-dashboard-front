import { NewFinanceData } from "@/types";
import EarningChart from "../chart/EarningChart";

export default function EarningEPS({ data, className, isLoading }: { data: NewFinanceData, className: string, isLoading: boolean }) {
    if (!data.earning_data || data.earning_data.estimates.length === 0) {
        if (isLoading) {
            return (
                <div className={`${className} bg-[#0d1f34] border border-[#111f3d] rounded-[12px] p-[20px] box-border flex flex-col`}>
                    <h2 className="text-[#c0d4ee] text-[14px] font-[700] mb-[20px]">어닝 EPS - 실적 vs 예상</h2>
                    <div className="flex-1 flex items-center justify-center">
                        <div className="flex flex-col items-center gap-[12px]">
                            <div className="w-[30px] h-[30px] border-3 border-[#1a3a6a] border-t-[#3b7bf0] rounded-full animate-spin" />
                            <p className="text-[12px] text-[#6a7c9f]">데이터 로딩 중...</p>
                        </div>
                    </div>
                </div>
            );
        }
        return null;
    }

    return (
        <div className={`${className} bg-[#0d1f34] border border-[#111f3d] rounded-[12px] p-[20px] box-border flex flex-col`}>
            <h2 className="text-[#c0d4ee] text-[14px] font-[700] mb-[20px]">어닝 EPS - 예상 vs 성장률</h2>
            <div className="flex-1 overflow-hidden">
                <EarningChart data={data.earning_data.estimates} />
            </div>
        </div>
    );
}