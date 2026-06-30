import { FinanceData } from "@/types";
import StockGridBox from "../card/StockGridBox";
import AnalysisRating from "../analysis/AnalysisRating";
import EarningEPS from "../card/EarningEPS";
import FinancialSnapshotSection from "../card/FinancialSnapshotSection";
import NewsSection from "../card/NewsSection";
import MDASummarySection from "../card/MDASummarySection";
import AiChatSection from "../ai-chat/AiChatSection";

export default function MainContents({ financeData }: { financeData: FinanceData[] }) {
  return (
    <div id="mainContents" className="w-full h-[calc(100vh-66px)] p-[20px] box-border grid grid-cols-3 grid-rows-3 gap-[16px] overflow-auto">
      <StockGridBox financeData={financeData} className={'col-span-2 row-span-1'} />
      <AnalysisRating data={financeData} className={'col-span-1 row-span-2'} />
      <EarningEPS data={financeData} className={'col-span-1 row-span-1'} />
      <FinancialSnapshotSection financeData={financeData} className={'col-span-1 row-span-1'} />
      <NewsSection financeData={financeData} className={'col-span-1 row-span-1'} />
      <MDASummarySection financeData={financeData} className={'col-span-2 row-span-1'} />
      <AiChatSection data={financeData} />
    </div>
  );
}
