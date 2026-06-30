import { GrGraphQl } from "react-icons/gr";

export default function MainLogo() {
    return (
        <div id="mainLogo" className="flex items-center gap-[12px]">
            <div id="mainLogoBox" className="w-[36px] h-[36px] rounded-[6px] bg-linear-to-b from-[#3b7bf0] to-[#2254c8] flex justify-center items-center pt-[2px]">
                <GrGraphQl size={20} color={"#fff"} />
            </div>
            <span className="text-[#fff] font-bold tracking-[-1px]">Stock Finance AI</span>
        </div>
    )
}