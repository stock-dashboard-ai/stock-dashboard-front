import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa";

export default function MainHeader({ title }: { title: string }) {

    return (
        <div id="mainHeader" className="w-full h-[80px] bg-[#091628] border-b border-[#122040] px-[26px] box-border flex justify-between items-center">
            <div id="titlePart" className="flex flex-col gap-[5px]">
                <h2 className="text-[#dfecfc] text-[20px] font-[700]">{title}</h2>
                <span className="text-[14px] text-[#3a5a88]">2026년 6월 24일 수요일</span>
            </div>
            <div id="right" className="flex items-center gap-[20px]">
                <div id="searchInput" className="w-[300px] h-[40px] bg-[#06101e] rounded-[8px] border border-[#1a3058] flex items-center gap-[10px] box-border px-[20px]">
                    <button className="w-[28px] h-[28px] flex jusitfy-center items-center">
                        <IoSearch size={20} color={"#fff"} />
                    </button>
                    <input type="text" className="flex-1 h-full outline-none text-white text-[14px]" placeholder="종목 증시 검색" />
                </div>
                <button className="w-[38px] h-[38px] bg-[#06101e] rounded-[10px] border border-[#1a3058] flex justify-center items-center cursor-pointer">
                    <FaBell size={15} color={"#fff"} />
                </button>
            </div>
        </div>
    )
}