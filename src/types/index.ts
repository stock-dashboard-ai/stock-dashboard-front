/**
 * Shared TypeScript types and interfaces for the application.
 */

// --- API Response Types ---

export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
  error?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

// --- Stock / Finance Domain Types ---

export interface StockQuote {
  symbol: string
  name: string
  price: number
  change: number
  changePercent: number
  volume: number
  marketCap: number
  high52w: number
  low52w: number
  updatedAt: string
}

export interface StockHistoricalData {
  date: string
  open: number
  high: number
  low: number
  close: number
  volume: number
}

export interface PortfolioItem {
  id: string
  symbol: string
  quantity: number
  averageCost: number
  currentPrice: number
  totalValue: number
  unrealizedPnL: number
  unrealizedPnLPercent: number
}

// --- UI / Component Types ---

export type SortDirection = 'asc' | 'desc'

export interface SortConfig<T = string> {
  key: T
  direction: SortDirection
}

export interface SelectOption<T = string> {
  label: string
  value: T
  disabled?: boolean
}

// --- Utility Types ---

export type Nullable<T> = T | null
export type Optional<T> = T | undefined
export type AsyncFn<T = void, A extends unknown[] = []> = (...args: A) => Promise<T>
