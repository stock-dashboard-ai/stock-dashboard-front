export interface NewFinanceData {
    financeName: string;
    priceData: {
        "1M": PriceData;
        "3M": PriceData;
        "6M": PriceData;
        "1Y": PriceData;
    }
    analist_rating: AnalistRating;
    consensus_target?: ConsensusTarget;
    earning_data?: EarningData;
    financial_snapshot?: FinancialSnapshot;
    news_section?: NewsSection;
    mda_summary?: MDASummary;
}

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
    dates: string[];
    closes: number[];
    volumes: number[];
}

export interface AnalistRating {
    strong_buy: number;
    buy: number;
    hold: number;
    sell: number;
    strong_sell: number;
}

export interface EPSEstimate {
    period: string;
    avg: number;
    low: number;
    high: number;
    yearAgoEps: number;
    numberOfAnalysts: number;
    growth: number;
    currency: string;
}

export interface EarningData {
    estimates: EPSEstimate[];
}

export interface AnalystRating {
    name: string;
    rating: "Buy" | "Overweight" | "Neutral" | "Underweight" | "Sell";
    target_price: number;
}

export interface ConsensusTarget {
    current: number;
    low: number;
    mean: number;
    high: number;
    median: number;
}

export interface FinancialSnapshot {
    eps: number;
    name: string;
    sector: string;
    "52w_low": number;
    revenue: number;
    "52w_high": number;
    pe_ratio: number;
    forward_pe: number;
    market_cap: number;
    profit_margin: number;
    dividend_yield: number;
}

export interface NewsArticle {
    title: string;
    publisher: string;
    date: string;
    url: string;
}

export interface NewsSection {
    articles: NewsArticle[];
}

export interface MDASummary {
    filing_date: string;
    preview: string;
    full_text: string;
}

export interface ChatMessage {
    message_id: number;
    user: "user" | "assistant";
    content: string;
    sources?: string[];
    chunks_used?: number;
}

export interface ChatRequest {
    ticker: string;
    query: string;
    session_id: string;
}

export interface ChatResponse {
    answer: string;
    sources: string[];
    chunks_used: number;
}

