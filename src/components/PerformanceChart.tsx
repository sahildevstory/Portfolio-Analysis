import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js';
import { PerformanceData } from '../types/portfolio';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface PerformanceChartProps {
  performance: PerformanceData | null;
  loading: boolean;
}

export function PerformanceChart({ performance, loading }: PerformanceChartProps) {
  if (loading) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-sm border mb-8">
        <div className="h-6 bg-gray-200 rounded mb-4 w-1/3"></div>
        <div className="h-80 bg-gray-200 rounded animate-pulse"></div>
      </div>
    );
  }

  if (!performance) return null;

  // Normalize data to show percentage growth from the first data point
  const firstPortfolio = performance.timeline[0].portfolio;
  const firstNifty = performance.timeline[0].nifty50;
  const firstGold = performance.timeline[0].gold;

  const chartData = {
    labels: performance.timeline.map(item => {
      const date = new Date(item.date);
      return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    }),
    datasets: [
      {
        label: 'Portfolio',
        data: performance.timeline.map(item => ((item.portfolio - firstPortfolio) / firstPortfolio) * 100),
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        fill: false
      },
      {
        label: 'Nifty 50',
        data: performance.timeline.map(item => ((item.nifty50 - firstNifty) / firstNifty) * 100),
        borderColor: '#10B981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.4,
        fill: false
      },
      {
        label: 'Gold',
        data: performance.timeline.map(item => ((item.gold - firstGold) / firstGold) * 100),
        borderColor: '#F59E0B',
        backgroundColor: 'rgba(245, 158, 11, 0.1)',
        tension: 0.4,
        fill: false
      }
    ]
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.dataset.label || '';
            const value = context.parsed.y;
            return `${label}: ${value.toFixed(1)}%`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        },
        ticks: {
          callback: (value) => `${Number(value)}%`
        }
      },
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        }
      }
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border mb-8">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-4">
        <h3 className="text-lg font-semibold text-gray-800">Performance Comparison</h3>
        
        <div className="flex flex-wrap gap-6 text-sm">
          {Object.entries(performance.returns).map(([key, returns]) => (
            <div key={key} className="text-center">
              <div className="text-gray-500 capitalize mb-1">{key === 'nifty50' ? 'Nifty 50' : key}</div>
              <div className="flex space-x-3">
                <span className={`${returns['1month'] >= 0 ? 'text-green-600' : 'text-red-600'} font-medium`}>
                  1M: {returns['1month'] > 0 ? '+' : ''}{returns['1month']}%
                </span>
                <span className={`${returns['3months'] >= 0 ? 'text-green-600' : 'text-red-600'} font-medium`}>
                  3M: {returns['3months'] > 0 ? '+' : ''}{returns['3months']}%
                </span>
                <span className={`${returns['1year'] >= 0 ? 'text-green-600' : 'text-red-600'} font-medium`}>
                  1Y: {returns['1year'] > 0 ? '+' : ''}{returns['1year']}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="h-80">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
}