import { NewFinanceData } from "@/types";
import StockGridBox from "../card/StockGridBox";
import AnalysisRating from "../analysis/AnalysisRating";
import EarningEPS from "../card/EarningEPS";
import FinancialSnapshotSection from "../card/FinancialSnapshotSection";
import NewsSection from "../card/NewsSection";
import MDASummarySection from "../card/MDASummarySection";
import AiChatSection from "../ai-chat/AiChatSection";

export default function MainContents({ newFinanceData, isLoading }: { newFinanceData: NewFinanceData; isLoading: boolean }) {
  return (
    <div id="mainContents" className="w-full h-[calc(100vh-66px)] p-[20px] box-border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] overflow-auto relative" style={{ gridAutoRows: 'minmax(300px, auto)' }}>
      {/* Stock Price Chart - Full width on mobile, 2 cols on md, 2 cols on lg */}
      <StockGridBox newFinanceData={newFinanceData} className={'col-span-1 md:col-span-2 lg:col-span-2'} isLoading={isLoading} />

      {/* Analysis Rating - Full width on mobile, 1 col on md, 1 col on lg */}
      <AnalysisRating data={newFinanceData} className={'col-span-1 md:col-span-1 lg:col-span-1'} isLoading={isLoading} />

      {/* Earning EPS - Full width on mobile, 1 col on md, 1 col on lg */}
      <EarningEPS data={newFinanceData} className={'col-span-1 md:col-span-1 lg:col-span-1'} isLoading={isLoading} />

      {/* Financial Snapshot - Full width on mobile, 1 col on md, 1 col on lg */}
      <FinancialSnapshotSection data={newFinanceData} className={'col-span-1 md:col-span-1 lg:col-span-1'} isLoading={isLoading} />

      {/* News Section - Full width on mobile, 2 cols on md, 1 col on lg */}
      <NewsSection data={newFinanceData} className={'col-span-1 md:col-span-2 lg:col-span-1'} isLoading={isLoading} />

      {/* MD&A Summary - Full width on mobile, full width on md, 2 cols on lg */}
      <MDASummarySection data={newFinanceData} className={'col-span-1 md:col-span-2 lg:col-span-2'} isLoading={isLoading} />

      {/* AI Chat Section - Fixed position on all screens */}
      <AiChatSection data={newFinanceData} />
    </div>
  );
}
