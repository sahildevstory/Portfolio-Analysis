import React, { useState, useEffect } from 'react';
import { BarChart3, RefreshCw, AlertCircle } from 'lucide-react';
import { OverviewCards } from './components/OverviewCards';
import { AllocationCharts } from './components/AllocationCharts';
import { HoldingsTable } from './components/HoldingsTable';
import { PerformanceChart } from './components/PerformanceChart';
import { TopPerformers } from './components/TopPerformers';
import { fetchHoldings, fetchAllocation, fetchPerformance, fetchSummary } from './services/api';
import { Stock, PortfolioAllocation, PerformanceData, PortfolioSummary } from './types/portfolio';

function App() {
  const [holdings, setHoldings] = useState<Stock[] | null>(null);
  const [allocation, setAllocation] = useState<PortfolioAllocation | null>(null);
  const [performance, setPerformance] = useState<PerformanceData | null>(null);
  const [summary, setSummary] = useState<PortfolioSummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const loadData = async (isRefresh = false) => {
    try {
      if (isRefresh) setRefreshing(true);
      else setLoading(true);
      
      setError(null);

      const [holdingsData, allocationData, performanceData, summaryData] = await Promise.all([
        fetchHoldings(),
        fetchAllocation(),
        fetchPerformance(),
        fetchSummary()
      ]);

      setHoldings(holdingsData);
      setAllocation(allocationData);
      setPerformance(performanceData);
      setSummary(summaryData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load portfolio data');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center p-8">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Error Loading Portfolio</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => loadData()}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">Portfolio Analytics</h1>
            </div>
            <button
              onClick={() => loadData(true)}
              disabled={refreshing}
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <OverviewCards summary={summary} loading={loading} />
        <AllocationCharts allocation={allocation} loading={loading} />
        <PerformanceChart performance={performance} loading={loading} />
        <HoldingsTable holdings={holdings} loading={loading} />
        <TopPerformers summary={summary} loading={loading} />
      </main>
    </div>
  );
}

export default App;