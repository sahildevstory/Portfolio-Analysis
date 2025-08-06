import { Stock, PortfolioAllocation, PerformanceData, PortfolioSummary } from '../types/portfolio';

// const API_BASE = 'http://localhost:3001/api';
const API_BASE = 'https://portfolio-analysis-dashboard-er4g.onrender.com/api';


export async function fetchHoldings(): Promise<Stock[]> {
  const response = await fetch(`${API_BASE}/portfolio/holdings`);
  if (!response.ok) {
    throw new Error('Failed to fetch holdings');
  }
  return response.json();
}

export async function fetchAllocation(): Promise<PortfolioAllocation> {
  const response = await fetch(`${API_BASE}/portfolio/allocation`);
  if (!response.ok) {
    throw new Error('Failed to fetch allocation');
  }
  return response.json();
}

export async function fetchPerformance(): Promise<PerformanceData> {
  const response = await fetch(`${API_BASE}/portfolio/performance`);
  if (!response.ok) {
    throw new Error('Failed to fetch performance');
  }
  return response.json();
}

export async function fetchSummary(): Promise<PortfolioSummary> {
  const response = await fetch(`${API_BASE}/portfolio/summary`);
  if (!response.ok) {
    throw new Error('Failed to fetch summary');
  }
  return response.json();
}