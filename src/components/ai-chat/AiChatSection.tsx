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
    <div
      className={`${className ?? ""} bg-[#0d1f34] border border-[#111f3d] rounded-[12px] p-[20px] flex flex-col overflow-hidden fixed bottom-[20px] right-[20px]`}
    >
      <button className="w-[50px] h-[50px] rounded-full bg-gradient-to-b from-[#3b7bf0] to-[#5b3bf0] flex justify-center items-center cursor-pointer" onClick={() => setChatOpen(prev => !prev)}>
        {chatOpen ? <AiOutlineClose size={20} color={"#fff"} /> : <BsChatSquareText size={20} color={"#fff"} />}
      </button>
      {chatOpen && <AiChatBox stockName={data.financeName} />}
    </div>
  );
}
