import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js';
import { PortfolioAllocation } from '../types/portfolio';

ChartJS.register(ArcElement, Tooltip, Legend);

interface AllocationChartsProps {
  allocation: PortfolioAllocation | null;
  loading: boolean;
}

export function AllocationCharts({ allocation, loading }: AllocationChartsProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="h-6 bg-gray-200 rounded mb-4 w-1/2"></div>
            <div className="h-64 bg-gray-200 rounded animate-pulse"></div>
          </div>
        ))}
      </div>
    );
  }

  if (!allocation) return null;

  const sectorColors = [
    '#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6',
    '#06B6D4', '#F97316', '#84CC16', '#EC4899', '#6B7280'
  ];

  const marketCapColors = ['#3B82F6', '#10B981', '#F59E0B'];

  const sectorData = {
    labels: Object.keys(allocation.bySector),
    datasets: [{
      data: Object.values(allocation.bySector).map(s => s.percentage),
      backgroundColor: sectorColors.slice(0, Object.keys(allocation.bySector).length),
      borderWidth: 2,
      borderColor: '#ffffff'
    }]
  };

  const marketCapData = {
    labels: Object.keys(allocation.byMarketCap),
    datasets: [{
      data: Object.values(allocation.byMarketCap).map(m => m.percentage),
      backgroundColor: marketCapColors.slice(0, Object.keys(allocation.byMarketCap).length),
      borderWidth: 2,
      borderColor: '#ffffff'
    }]
  };

  const chartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          padding: 20,
          usePointStyle: true
        }
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || '';
            const value = context.parsed;
            const sector = allocation.bySector[label] || allocation.byMarketCap[label];
            if (sector) {
              return `${label}: ${value}% (₹${(sector.value / 100000).toFixed(1)}L)`;
            }
            return `${label}: ${value}%`;
          }
        }
      }
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h3 className="text-lg font-semibold mb-6 text-gray-800">Sector Allocation</h3>
        <div className="h-64">
          <Doughnut data={sectorData} options={chartOptions} />
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h3 className="text-lg font-semibold mb-6 text-gray-800">Market Cap Allocation</h3>
        <div className="h-64">
          <Doughnut data={marketCapData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}