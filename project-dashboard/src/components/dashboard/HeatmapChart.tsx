import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { formatNumber } from '../../utils/formatters';

interface HeatmapChartProps {
  title: string;
  data?: {
    metric: string;
    values: number[];
  }[];
  months?: string[];
  className?: string;
}

export const HeatmapChart: React.FC<HeatmapChartProps> = ({
  title,
  data = [],
  months = [],
  className,
}) => {
  // Validate data structure
  const validData = data?.filter(row => row && Array.isArray(row.values)) ?? [];
  const validMonths = months?.filter(month => month) ?? [];

  const getColor = (value: number) => {
    // Color scale from purple (low) to yellow (high)
    const allValues = validData?.flatMap(d => d.values) || [];
    const minValue = allValues.length ? Math.min(...allValues) : 0;
    const maxValue = allValues.length ? Math.max(...allValues) : 0;
    const ratio = maxValue !== minValue ? (value - minValue) / (maxValue - minValue) : 0;
    
    // Interpolate between purple and yellow
    const r = Math.round(128 + (127 * ratio));
    const g = Math.round(0 + (255 * ratio));
    const b = Math.round(128 - (128 * ratio));
    
    return `rgb(${r},${g},${b})`;
  };

  if (!validData.length || !validMonths.length) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-gray-500">No data available</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="px-2 py-1 text-left text-sm font-medium text-gray-500">Metric</th>
                {validMonths.map(month => (
                  <th key={month} className="px-2 py-1 text-center text-sm font-medium text-gray-500">
                    {month.substring(0, 3)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {validData.map((row, i) => (
                <tr key={i}>
                  <td className="px-2 py-1 text-sm text-gray-700 dark:text-gray-300">
                    {row.metric}
                  </td>
                  {(row.values || []).map((value, j) => (
                    <td
                      key={j}
                      className="px-2 py-1 text-center"
                      style={{ backgroundColor: getColor(value) }}
                    >
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {formatNumber(value, 1)}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};