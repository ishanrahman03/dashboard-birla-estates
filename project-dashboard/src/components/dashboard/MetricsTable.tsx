import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { formatNumber } from '../../utils/formatters';

interface MetricItem {
  id: string;
  name: string;
  unit: string;
  value: number;
  target: number;
  status: 'positive' | 'negative' | 'neutral';
}

interface MetricsTableProps {
  metrics: MetricItem[];
  className?: string;
}

export const MetricsTable: React.FC<MetricsTableProps> = ({ metrics, className }) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Key Performance Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Metric
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Value
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Target
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
              {metrics.map((metric) => (
                <tr key={metric.id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-200">
                    <div className="font-medium">{metric.name}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{metric.unit}</div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {formatNumber(metric.value)}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {formatNumber(metric.target)}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    {metric.status === 'positive' ? (
                      <div className="flex items-center text-green-600 dark:text-green-400">
                        <ArrowUpRight size={16} className="mr-1" />
                        <span>On Track</span>
                      </div>
                    ) : (
                      <div className="flex items-center text-red-600 dark:text-red-400">
                        <ArrowDownRight size={16} className="mr-1" />
                        <span>Needs Attention</span>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};