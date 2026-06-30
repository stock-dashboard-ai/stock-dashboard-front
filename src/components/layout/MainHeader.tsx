import { Dispatch, SetStateAction } from "react";
import MainLogo from "./MainLogo";
import FinanceTab from "./FinanceTab";
import { NewFinanceData } from "@/types";


export default function MainHeader({ financeData, changeFinanceData }: { financeData: NewFinanceData; changeFinanceData: Dispatch<SetStateAction<NewFinanceData>> }): React.JSX.Element {

    return (
        <div id="mainHeader" className="w-full h-auto min-h-[66px] bg-[#0a1628] border-b border-[#111f3d] px-[12px] sm:px-[16px] md:px-[20px] py-[12px] sm:py-[14px] md:py-[16px] box-border flex flex-col sm:flex-row items-start sm:items-center gap-[12px] sm:gap-[16px] md:gap-[20px]">
            <MainLogo />
            <FinanceTab financeData={financeData} changeFinanceData={changeFinanceData} />
        </div>
    )
}