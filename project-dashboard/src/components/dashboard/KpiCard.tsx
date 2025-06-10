import React from 'react';
import { Card, CardContent } from '../ui/Card';
import { TrendingUp, TrendingDown, Activity, ArrowRight } from 'lucide-react';
import { KpiData } from '../../types/data';
import { formatNumber, formatChange, getChangeColorClass } from '../../utils/formatters';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { Button } from '../ui/Button';

interface KpiCardProps {
  data: KpiData;
  className?: string;
  onClick?: () => void;
}

export const KpiCard: React.FC<KpiCardProps> = ({ data, className, onClick }) => {
  const { id, name, unit, currentValue, change, isPositive, monthlyData, insight } = data;
  
  const showDetailsButton = id === 'power-cementitious';

  return (
    <Card className={className}>
      <CardContent>
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{name}</p>
            <div className="flex items-baseline">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mr-2">
                {formatNumber(currentValue)}
              </h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">{unit}</span>
            </div>
          </div>
          <div className={`p-2 rounded-full ${isPositive ? 'bg-green-100 dark:bg-green-900' : 'bg-red-100 dark:bg-red-900'}`}>
            {isPositive ? (
              <TrendingUp size={20} className="text-green-600 dark:text-green-400" />
            ) : (
              <TrendingDown size={20} className="text-red-600 dark:text-red-400" />
            )}
          </div>
        </div>
        
        <div className="h-12 mt-4 mb-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyData}>
              <Line 
                type="monotone"
                dataKey="value"
                stroke={isPositive ? '#10b981' : '#ef4444'}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-2 border-t border-gray-100 dark:border-gray-800 pt-2">
          <p className="text-sm text-gray-600 dark:text-gray-300">{insight}</p>
        </div>
        
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center">
            {change > 0 ? (
              <TrendingUp size={16} className="text-green-600 dark:text-green-400 mr-1" />
            ) : (
              <TrendingDown size={16} className="text-red-600 dark:text-red-400 mr-1" />
            )}
            <span className={getChangeColorClass(change, isPositive)}>
              {formatChange(change)}
            </span>
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
            <Activity size={14} className="mr-1" />
            vs FY 23-24
          </span>
        </div>

        {showDetailsButton && (
          <Button
            variant="outline"
            className="w-full mt-4 flex items-center justify-center gap-2"
            onClick={onClick}
          >
            View Details
            <ArrowRight size={16} />
          </Button>
        )}
      </CardContent>
    </Card>
  );
};