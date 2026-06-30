import MainLogo from "./MainLogo";
import FinanceTab from "./FinanceTab";
import { FinanceData } from "@/types";

export default function MainHeader({ financeData, changeFinanceData }: { financeData: FinanceData[]; changeFinanceData: (data: FinanceData[]) => void }) {

    return (
        <div id="mainHeader" className="w-full h-[66px] bg-[#0a1628] border-b border-[#111f3d] px-[20px] py-[16px] box-border flex items-center gap-[20px]">
            <MainLogo />
            <FinanceTab financeData={financeData} changeFinanceData={changeFinanceData} />
        </div>
    )
}