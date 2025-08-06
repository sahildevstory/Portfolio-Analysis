import React from 'react';
import { TrendingUp, TrendingDown, Shield, Target } from 'lucide-react';
import { PortfolioSummary } from '../types/portfolio';

interface TopPerformersProps {
  summary: PortfolioSummary | null;
  loading: boolean;
}

export function TopPerformers({ summary, loading }: TopPerformersProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-6 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>
        ))}
      </div>
    );
  }

  if (!summary) return null;

  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case 'low': return 'text-green-600 bg-green-50';
      case 'moderate': return 'text-yellow-600 bg-yellow-50';
      case 'high': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getDiversificationColor = (score: number) => {
    if (score >= 8) return 'text-green-600 bg-green-50';
    if (score >= 6) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-medium text-gray-500">Top Performer</h4>
          <div className="p-2 bg-green-50 rounded-lg">
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{summary.topPerformer.symbol}</h3>
        <p className="text-sm text-gray-600 mb-2">{summary.topPerformer.name}</p>
        <p className="text-2xl font-bold text-green-600">+{summary.topPerformer.gainPercent}%</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-medium text-gray-500">Worst Performer</h4>
          <div className="p-2 bg-red-50 rounded-lg">
            <TrendingDown className="w-5 h-5 text-red-600" />
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{summary.worstPerformer.symbol}</h3>
        <p className="text-sm text-gray-600 mb-2">{summary.worstPerformer.name}</p>
        <p className="text-2xl font-bold text-red-600">{summary.worstPerformer.gainPercent}%</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-medium text-gray-500">Diversification Score</h4>
          <div className={`p-2 rounded-lg ${getDiversificationColor(summary.diversificationScore)}`}>
            <Target className="w-5 h-5" />
          </div>
        </div>
        <p className="text-2xl font-bold text-gray-900 mb-2">{summary.diversificationScore}/10</p>
        <p className="text-sm text-gray-600">
          {summary.diversificationScore >= 8 ? 'Well Diversified' : 
           summary.diversificationScore >= 6 ? 'Moderately Diversified' : 'Needs Diversification'}
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-medium text-gray-500">Risk Level</h4>
          <div className={`p-2 rounded-lg ${getRiskColor(summary.riskLevel)}`}>
            <Shield className="w-5 h-5" />
          </div>
        </div>
        <p className="text-2xl font-bold text-gray-900 mb-2">{summary.riskLevel}</p>
        <p className="text-sm text-gray-600">
          Based on portfolio volatility and sector concentration
        </p>
      </div>
    </div>
  );
}