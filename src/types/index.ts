export interface FinanceData {
    id: number;
    name: string;
    isCurrent?: boolean;
    plusOrMinus: "+" | "-";
    ratio: number;
    price_chart: PriceChart[];
    anal_rating: AnalRating;
    earning_data?: EarningData;
    consensus_target?: ConsensusTarget;
    financial_snapshot?: FinancialSnapshot;
    news_section?: NewsSection;
    mda_summary?: MDASummary;
}

export interface PriceChart {
    type: "1M" | "3M" | "6M" | "1Y",
    datas: PriceData[]
}

export interface PriceData {
    date: string;
    price: number;
    volume?: number;
}

export interface AnalRating {
    buy: number;
    hold: number;
    sell: number;
}

export interface EPSData {
    quarter: string;
    actual: number;
    expected: number;
}

export interface EarningData {
    eps: EPSData[];
}

export interface AnalystRating {
    name: string;
    rating: "Buy" | "Overweight" | "Neutral" | "Underweight" | "Sell";
    target_price: number;
}

export interface ConsensusTarget {
    current_price: number;
    target_price: number;
    high_target: number;
    low_target: number;
    analyst_ratings: AnalystRating[];
}

export interface FinancialMetric {
    label: string;
    value: string;
}

export interface FinancialSnapshot {
    metrics: FinancialMetric[];
}

export interface NewsItem {
    title: string;
    date: string;
    source: string;
    sentiment?: "positive" | "neutral" | "negative";
}

export interface NewsSection {
    news: NewsItem[];
}

export interface MDASummaryItem {
    description: string;
}

export interface MDASummary {
    items: MDASummaryItem[];
}

export interface ChatMessage {
    message_id: number;
    user: "user" | "assistant";
    content: string;
}