"use client";

import { SlGraph } from "react-icons/sl";
import { IoMdHome } from "react-icons/io";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdGrid4X4 } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { PiGraphThin } from "react-icons/pi";
import { BsChatDotsFill } from "react-icons/bs";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AsideHeader() {
    const pathname = usePathname();

    const navigation = [
        {
            id: 1,
            icon: <IoMdHome size={24} />,
            name: "대시보드 홈",
            path: "/"
        },
        {
            id: 2,
            icon: <MdGrid4X4 size={24} />,
            name: "퀀트 종목 분석",
            path: "/analyze"
        },
        {
            id: 3,
            icon: <IoNewspaperOutline size={24} />,
            name: "뉴스 피드",
            path: "/news-feed"
        },
        {
            id: 4,
            icon: <FaStar size={24} />,
            name: "DART 공시 조회",
            path: "/dart"
        },
        {
            id: 5,
            icon: <PiGraphThin size={24} />,
            name: "관제사 경쟁사 그래프",
            path: "/graph"
        },
        {
            id: 6,
            icon: <BsChatDotsFill size={24} />,
            name: "AI 브리핑",
            path: "/ai-brief"
        }
    ]

    return (
        <header className="relative bg-[#091628] w-[280px] box-border h-screen border-r border-[#112140]">
            <div id="logoPart" className="flex items-center gap-[8px] px-[16px] py-[20px] border-b border-[#112140]">
                <div id="logo" className="w-[38px] h-[38px] rounded-[8px] bg-linear-to-b from-[#366ce0] to-[#2c63d7] flex justify-center items-center">
                    <SlGraph color={"#fff"} />
                </div>
                <div id="logoInfo" className="flex flex-col">
                    <span className="text-white tracking-[-1px] font-[800] text-[18px]">스토크 AI</span>
                    <span className="text-[#3a5a88] text-[12px]">투자 분석 대시보드</span>
                </div>
            </div>
            <nav className="px-[16px] py-[10px] flex flex-col gap-[15px]">
                {
                    navigation.map((nav: any) => (
                        <Link href={nav.path} key={nav.id} className={`flex items-center gap-[10px] text-[#3a5a88] p-[10px] ${pathname === nav.path ? "text-[#7aabf0] bg-[#1a3a6a] rounded-[14px]" : ""}`}>
                            {nav.icon}
                            <span className="mt-[2px]">{nav.name}</span>
                        </Link>
                    ))
                }
            </nav>
            <div id="userInfo" className="w-full h-[100px] absolute bottom-0 left-0 border-t border-[#112140] px-[16px] flex items-center gap-[10px]">
                <div id="profile" className="w-[34px] h-[34px] rounded-full bg-[#142845] text-[#6aabf0] font-[700] flex justify-center items-center border border-[#3471d6]">김</div>
                <div id="info" className="flex flex-col justify-center">
                    <span className="text-[#c0d4ee] font-[700]">김주식</span>
                    <span className="text-[14px] text-[#3a5a88]">개인 투자자</span>
                </div>
                <span className="absolute right-[16px] block px-[14px] py-[3px] rounded-[18px] border border-[#22c55e] text-[#22c55e] text-[14px]">LIVE</span>
            </div>
        </header>
    )
}