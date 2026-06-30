"use client";

import { useEffect, useState } from "react";
import MainHeader from "@/components/layout/MainHeader";
import MainContents from "@/components/layout/MainContents";
import { FINANCE_DATA } from "@/constants/constants";
import { AnalistRating, ConsensusTarget, EarningData, FinanceData, FinancialSnapshot, MDASummary, NewFinanceData, NewsSection, PriceData } from "@/types";
import apiClient from "@/api/apiClient";

const filterDataByDays = (data: PriceData, days: number): PriceData => {
  const now = new Date();
  const startDate = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);

  const filteredDates: string[] = [];
  const filteredCloses: number[] = [];
  const filteredVolumes: number[] = [];

  data.dates.forEach((date, index) => {
    const dateObj = new Date(date);
    if (dateObj >= startDate) {
      filteredDates.push(date);
      filteredCloses.push(data.closes[index]);
      filteredVolumes.push(data.volumes[index]);
    }
  });

  return {
    dates: filteredDates,
    closes: filteredCloses,
    volumes: filteredVolumes,
  };
};

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false)

  const [newFinanceData, setNewFinanceData] = useState<NewFinanceData>({
    financeName: 'NVDA',
    priceData: {
      "1M": { dates: [], closes: [], volumes: [] },
      "3M": { dates: [], closes: [], volumes: [] },
      "6M": { dates: [], closes: [], volumes: [] },
      "1Y": { dates: [], closes: [], volumes: [] },
    },
    analist_rating: {
      "strong_buy": 0,
      "buy": 0,
      "hold": 0,
      "sell": 0,
      "strong_sell": 0,
    },
    consensus_target: {
      current: 0,
      low: 0,
      mean: 0,
      high: 0,
      median: 0,
    },
    earning_data: {
      estimates: []
    },
    financial_snapshot: {
      eps: 0,
      name: '',
      sector: '',
      "52w_low": 0,
      revenue: 0,
      "52w_high": 0,
      pe_ratio: 0,
      forward_pe: 0,
      market_cap: 0,
      profit_margin: 0,
      dividend_yield: 0,
    },
    news_section: {
      articles: []
    },
    mda_summary: {
      filing_date: '',
      preview: '',
      full_text: ''
    }
  })

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [priceData, analistRating, consensusTarget, earningData, financialSnapshot, newsSection, mdaSummary] = await Promise.all([
          apiClient<PriceData>(`stock/${newFinanceData.financeName}/price`),
          apiClient<AnalistRating>(`stock/${newFinanceData.financeName}/analyst`),
          apiClient<ConsensusTarget>(`stock/${newFinanceData.financeName}/targets`),
          apiClient<EarningData>(`stock/${newFinanceData.financeName}/earnings`),
          apiClient<FinancialSnapshot>(`stock/${newFinanceData.financeName}/financials`),
          apiClient<NewsSection>(`stock/${newFinanceData.financeName}/news`),
          apiClient<MDASummary>(`stock/${newFinanceData.financeName}/mda`),
        ]);

        const priceDataMap = {
          "1M": filterDataByDays(priceData, 30),
          "3M": filterDataByDays(priceData, 90),
          "6M": filterDataByDays(priceData, 180),
          "1Y": filterDataByDays(priceData, 365),
        };

        setNewFinanceData(prev => ({
          ...prev,
          priceData: priceDataMap,
          analist_rating: analistRating,
          consensus_target: consensusTarget,
          earning_data: earningData,
          financial_snapshot: financialSnapshot,
          news_section: newsSection,
          mda_summary: mdaSummary
        }));
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData()
  }, [newFinanceData.financeName])

  return (
    <div className="w-full h-screen flex flex-col bg-[#0a1628]">
      <MainHeader financeData={newFinanceData} changeFinanceData={setNewFinanceData} />
      <MainContents newFinanceData={newFinanceData} isLoading={isLoading} />
    </div>
  )
}
