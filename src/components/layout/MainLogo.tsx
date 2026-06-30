import { GrGraphQl } from "react-icons/gr";

export default function MainLogo() {
    return (
        <div id="mainLogo" className="flex items-center gap-[8px] sm:gap-[10px] md:gap-[12px] flex-shrink-0">
            <div id="mainLogoBox" className="w-[32px] h-[32px] sm:w-[34px] sm:h-[34px] md:w-[36px] md:h-[36px] rounded-[4px] sm:rounded-[5px] md:rounded-[6px] bg-linear-to-b from-[#3b7bf0] to-[#2254c8] flex justify-center items-center pt-[2px] flex-shrink-0">
                <GrGraphQl size={18} color={"#fff"} />
            </div>
            <span className="text-[12px] sm:text-[13px] md:text-[14px] text-[#fff] font-bold tracking-[-1px] whitespace-nowrap">Stock Finance AI</span>
        </div>
    )
}