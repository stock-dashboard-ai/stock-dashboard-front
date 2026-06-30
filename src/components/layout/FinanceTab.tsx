import { Dispatch, SetStateAction } from "react";
import { NewFinanceData } from "@/types";

export default function FinanceTab({ financeData, changeFinanceData }: { financeData: NewFinanceData; changeFinanceData: Dispatch<SetStateAction<NewFinanceData>> }) {
    const BTN_MAP = {
        "NVDA": 1045810,
        "AAPL": 320193,
        "MSFT": 789019,
        "GOOGL": 1652044,
        "META": 1326801,
        "TSLA": 1318605,
    }

    return (
        <div id="financeTab" className="flex flex-wrap items-center gap-[6px] sm:gap-[8px] md:gap-[10px] w-full sm:w-auto">
            {Object.keys(BTN_MAP).map((ticker: string) => (
                <button
                    key={ticker}
                    className={`text-[12px] sm:text-[13px] md:text-[14px] font-[800] px-[8px] sm:px-[10px] md:px-[12px] py-[5px] sm:py-[6px] md:py-[7px] rounded-[4px] sm:rounded-[6px] cursor-pointer transition-colors ${ticker === financeData.financeName ? "bg-[#1a3a6a] border border-[#2a5a6a] text-white" : "bg-[#091628] text-[#3a5a88] border border-[#111f3d] hover:bg-[#0d1f3c]"}`}
                    onClick={() => changeFinanceData(prev => ({ ...prev, financeName: ticker }))}
                >
                    <span>{ticker}</span>
                </button>
            ))}
        </div>
    )
}