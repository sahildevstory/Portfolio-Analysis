export interface Stock {
  symbol: string;
  name: string;
  quantity: number;
  avgPrice: number;
  currentPrice: number;
  sector: string;
  marketCap: string;
  exchange: string;
  value: number;
  gainLoss: number;
  gainLossPercent: number;
}

export interface AllocationData {
  value: number;
  percentage: number;
}

export interface PortfolioAllocation {
  bySector: Record<string, AllocationData>;
  byMarketCap: Record<string, AllocationData>;
}

export interface PerformanceData {
  timeline: Array<{
    date: string;
    portfolio: number;
    nifty50: number;
    gold: number;
  }>;
  returns: {
    portfolio: { "1month": number; "3months": number; "1year": number };
    nifty50: { "1month": number; "3months": number; "1year": number };
    gold: { "1month": number; "3months": number; "1year": number };
  };
}

export interface PortfolioSummary {
  totalValue: number;
  totalInvested: number;
  totalGainLoss: number;
  totalGainLossPercent: number;
  topPerformer: {
    symbol: string;
    name: string;
    gainPercent: number;
  };
  worstPerformer: {
    symbol: string;
    name: string;
    gainPercent: number;
  };
  diversificationScore: number;
  riskLevel: string;
  holdingsCount: number;
}