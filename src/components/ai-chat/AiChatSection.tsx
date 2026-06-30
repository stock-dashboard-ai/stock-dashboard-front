"use client";

import { useState } from 'react';
import { NewFinanceData } from "@/types";
import AiChatBox from "./AiChatBox";
import { BsChatSquareText } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

interface AiChatSectionProps {
  data: NewFinanceData;
  className?: string;
}

export default function AiChatSection({
  data,
  className,
}: AiChatSectionProps) {
  const [chatOpen, setChatOpen] = useState<boolean>(false);

  return (
    <>
      {chatOpen && (
        <div
          className={`${className ?? ""} bg-[#0d1f34] border border-[#111f3d] rounded-[12px] flex flex-col overflow-hidden fixed bottom-[20px] sm:bottom-[40px] md:bottom-[100px] right-[20px] sm:right-[30px] md:right-[40px] w-[calc(100%-40px)] sm:w-[380px] md:w-[400px] h-[500px] max-h-[80vh] z-20`}
        >
          <AiChatBox stockName={data.financeName} />
        </div>
      )}
      <button
        className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] md:w-[50px] md:h-[50px] rounded-full bg-gradient-to-b from-[#3b7bf0] to-[#5b3bf0] flex justify-center items-center cursor-pointer fixed bottom-[20px] sm:bottom-[40px] md:bottom-[100px] right-[20px] sm:right-[30px] md:right-[40px] z-30 hover:shadow-lg transition-shadow"
        onClick={() => setChatOpen(prev => !prev)}
      >
        {chatOpen ? <AiOutlineClose size={16} className="sm:hidden" color={"#fff"} /> : <BsChatSquareText size={16} className="sm:hidden" color={"#fff"} />}
        {chatOpen ? <AiOutlineClose size={18} className="hidden sm:block md:hidden" color={"#fff"} /> : <BsChatSquareText size={18} className="hidden sm:block md:hidden" color={"#fff"} />}
        {chatOpen ? <AiOutlineClose size={20} className="hidden md:block" color={"#fff"} /> : <BsChatSquareText size={20} className="hidden md:block" color={"#fff"} />}
      </button>
    </>
  );
}
