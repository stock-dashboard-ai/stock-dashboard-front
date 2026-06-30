import { FinanceData } from "@/types";
import EarningChart from "../chart/EarningChart";

export default function EarningEPS({ data, className }: { data: FinanceData[], className: string }) {
    const currentData = data.find((item) => item.isCurrent);

    if (!currentData || !currentData.earning_data) return null;

    return (
        <div className={`${className} bg-[#0d1f34] border border-[#111f3d] rounded-[12px] p-[20px] box-border flex flex-col`}>
            <h2 className="text-[#c0d4ee] text-[14px] font-[700] mb-[20px]">어닝 EPS - 실적 vs 예상</h2>
            <div className="flex-1 overflow-hidden">
                <EarningChart data={currentData.earning_data.eps} />
            </div>
        </div>
    );
}