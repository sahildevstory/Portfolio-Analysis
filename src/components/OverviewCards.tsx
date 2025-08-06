import React from 'react';
import { TrendingUp, TrendingDown, Wallet, BarChart3 } from 'lucide-react';
import { PortfolioSummary } from '../types/portfolio';

interface OverviewCardsProps {
  summary: PortfolioSummary | null;
  loading: boolean;
}

export function OverviewCards({ summary, loading }: OverviewCardsProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm border animate-pulse">
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-8 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    );
  }

  if (!summary) return null;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      notation: 'compact',
      maximumFractionDigits: 1
    }).format(value);
  };

  const cards = [
    {
      title: 'Total Portfolio Value',
      value: formatCurrency(summary.totalValue),
      subtitle: '',
      icon: Wallet,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Total Gain/Loss',
      value: formatCurrency(summary.totalGainLoss),
      subtitle: `${summary.totalGainLossPercent > 0 ? '+' : ''}${summary.totalGainLossPercent}%`,
      icon: summary.totalGainLoss >= 0 ? TrendingUp : TrendingDown,
      color: summary.totalGainLoss >= 0 ? 'text-green-600' : 'text-red-600',
      bgColor: summary.totalGainLoss >= 0 ? 'bg-green-50' : 'bg-red-50'
    },
    {
      title: 'Investment Returns',
      value: `${summary.totalGainLossPercent > 0 ? '+' : ''}${summary.totalGainLossPercent.toFixed(1)}%`,
      subtitle: `vs Initial Investment`,
      icon: BarChart3,
      color: summary.totalGainLossPercent >= 0 ? 'text-green-600' : 'text-red-600',
      bgColor: summary.totalGainLossPercent >= 0 ? 'bg-green-50' : 'bg-red-50'
    },
    {
      title: 'Holdings',
      value: summary?.holdingsCount?.toString() ?? "0",
      subtitle: `${summary.riskLevel} Risk`,
      icon: BarChart3,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {cards.map((card, index) => {
        const IconComponent = card.icon;
        return (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${card.bgColor}`}>
                <IconComponent className={`w-6 h-6 ${card.color}`} />
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-500 mb-1">{card.title}</h3>
            <p className={`text-2xl font-bold mb-1 ${card.color}`}>{card.value}</p>
            {card.subtitle && card.subtitle.length > 0 && (
              <p className="text-sm text-gray-600">{card.subtitle}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}