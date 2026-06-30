"use client";

import { useState } from "react";
import MainHeader from "@/components/layout/MainHeader";
import MainContents from "@/components/layout/MainContents";
import { FINANCE_DATA } from "@/constants/constants";
import { FinanceData } from "@/types";


export default function HomePage() {
  const [financeData, setFinanceData] = useState<FinanceData[]>(FINANCE_DATA)

  return (
    <div className="w-full h-screen flex flex-col bg-[#0a1628]">
      <MainHeader financeData={financeData} changeFinanceData={(fd: FinanceData[]) => setFinanceData(fd)} />
      <MainContents financeData={financeData} />
    </div>
  )
}
