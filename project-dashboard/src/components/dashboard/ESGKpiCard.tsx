import React from 'react';
import { Card, CardContent } from '../ui/Card';
import { TrendingUp, TrendingDown, Minus, Zap, Droplet, Recycle, Cloud, Package, Target } from 'lucide-react';
import { ESGKpiData } from '../../types/esg';
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';

interface ESGKpiCardProps {
  data: ESGKpiData;
  onClick?: () => void;
}

const iconMap: { [key: string]: React.ComponentType<any> } = {
  Zap,
  Leaf: Zap,
  Droplet,
  Recycle,
  Cloud,
  Package
};

export const ESGKpiCard: React.FC<ESGKpiCardProps> = ({ data, onClick }) => {
  const Icon = data.icon ? iconMap[data.icon] : Target;
  const isPositiveGood = data.category === 'energy' && data.id.includes('renewable') || 
                         data.category === 'waste' && data.id.includes('diversion') ||
                         data.category === 'material' && data.id.includes('green');
  
  const trend = data.change > 0 ? 'up' : data.change < 0 ? 'down' : 'neutral';
  const isGoodTrend = isPositiveGood ? trend === 'up' : trend === 'down';

  const progressPercentage = data.target ? (data.currentValue / data.target) * 100 : 0;

  return (
    <Card 
      className={`hover:shadow-lg transition-all duration-200 cursor-pointer border-l-4 ${
        data.color ? `border-l-[${data.color}]` : 'border-l-gray-400'
      }`}
      onClick={onClick}
      style={{ borderLeftColor: data.color }}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div 
              className="p-3 rounded-lg"
              style={{ backgroundColor: `${data.color}20` }}
            >
              <Icon 
                size={24} 
                style={{ color: data.color }}
              />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {data.name}
              </h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {data.currentValue}
                <span className="text-base font-normal text-gray-500 ml-1">
                  {data.unit}
                </span>
              </p>
            </div>
          </div>
          
          <div className="text-right">
            <div className={`flex items-center gap-1 ${
              isGoodTrend ? 'text-green-600' : 'text-red-600'
            }`}>
              {trend === 'up' ? (
                <TrendingUp size={20} />
              ) : trend === 'down' ? (
                <TrendingDown size={20} />
              ) : (
                <Minus size={20} className="text-gray-500" />
              )}
              <span className="font-semibold">
                {Math.abs(data.change).toFixed(1)}%
              </span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              vs last year
            </p>
          </div>
        </div>

        {/* Mini sparkline chart */}
        <div className="h-12 -mx-2 mb-3">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data.monthlyData}>
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload[0]) {
                    return (
                      <div className="bg-gray-900 text-white p-2 rounded text-xs">
                        {payload[0].payload.month}: {payload[0].value} {data.unit}
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke={data.color || '#6b7280'}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Target progress */}
        {data.target && (
          <div className="mb-3">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-gray-500">Target Progress</span>
              <span className="text-xs font-medium">
                {data.currentValue} / {data.target} {data.unit}
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${Math.min(progressPercentage, 100)}%`,
                  backgroundColor: progressPercentage >= 100 ? '#10b981' : data.color
                }}
              />
            </div>
          </div>
        )}

        {/* Insight */}
        <p className="text-xs text-gray-600 dark:text-gray-400 italic">
          {data.insight}
        </p>
      </CardContent>
    </Card>
  );
};