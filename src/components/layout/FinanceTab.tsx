import { FinanceData } from "@/types";

export default function FinanceTab({ financeData, changeFinanceData }: { financeData: FinanceData[], changeFinanceData: (data: FinanceData[]) => void }) {
    const onButton = (idIndex: number) => {
        changeFinanceData(financeData.map((finance: FinanceData) => {
            return { ...finance, isCurrent: finance.id === idIndex }
        }))
    }

    return (
        <div id="financeTab" className="flex items-center gap-[4px]">
            {financeData.map((finance: FinanceData) => (
                <button key={finance.id} className={`text-[14px] font-[800] px-[10px] py-[6px] rounded-[6px] cursor-pointer ${finance.isCurrent ? "bg-[#1a3a6a] border border-[#224a7f] text-[#fff]" : "bg-[#091628] text-[#3a5a88] border border-[#111f3d]"}`} onClick={() => onButton(finance.id)}>
                    <span>{finance.name}</span>
                    <span className={`ml-[6px] ${finance.plusOrMinus === "+" ? "text-[#21c55e]" : "text-[#3483fa]"}`}>{finance.plusOrMinus}{finance.ratio}%</span>
                </button>
            ))}
        </div>
    )
}