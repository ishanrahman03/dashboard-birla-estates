import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../ui/Card';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  TooltipProps
} from 'recharts';
import { ChartData } from '../../types/data';
import { formatNumber } from '../../utils/formatters';
import { Select } from '../ui/Select';
import { Button } from '../ui/Button';

interface TimeSeriesChartProps {
  title: string;
  data: ChartData[];
  dataKeys: string[];
  colors: string[];
  units: string[];
  className?: string;
}

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-2 border border-gray-200 dark:border-gray-700 rounded shadow-md">
        <p className="font-medium text-gray-800 dark:text-white">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color }}>
            {entry.name}: {formatNumber(entry.value as number)}
          </p>
        ))}
      </div>
    );
  }

  return null;
};

export const TimeSeriesChart: React.FC<TimeSeriesChartProps> = ({ 
  title, 
  data, 
  dataKeys, 
  colors,
  units,
  className 
}) => {
  const [visibleKeys, setVisibleKeys] = React.useState<string[]>(dataKeys);
  const [timeRange, setTimeRange] = React.useState<string>('all');

  const handleToggleMetric = (key: string) => {
    setVisibleKeys(prev => 
      prev.includes(key) 
        ? prev.filter(k => k !== key)
        : [...prev, key]
    );
  };

  const getFilteredData = () => {
    if (timeRange === 'all') return data;
    if (timeRange === 'last6') return data.slice(data.length - 6);
    if (timeRange === 'last3') return data.slice(data.length - 3);
    return data;
  };

  const timeRangeOptions = [
    { value: 'all', label: 'All Months' },
    { value: 'last6', label: 'Last 6 Months' },
    { value: 'last3', label: 'Last 3 Months' },
  ];

  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{title}</CardTitle>
        <Select
          options={timeRangeOptions}
          value={timeRange}
          onChange={setTimeRange}
          className="w-40"
        />
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {dataKeys.map((key, index) => (
            <Button
              key={key}
              variant={visibleKeys.includes(key) ? "primary" : "outline"}
              size="sm"
              onClick={() => handleToggleMetric(key)}
              className="flex items-center gap-2"
            >
              <span 
                className="inline-block w-3 h-3 rounded-full" 
                style={{ backgroundColor: colors[index] }}
              />
              <span>{key}</span>
            </Button>
          ))}
        </div>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={getFilteredData()} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="month"
                tick={{ fontSize: 12 }}
                padding={{ left: 10, right: 10 }}
              />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} />
              {dataKeys.map((key, index) => (
                visibleKeys.includes(key) && (
                  <Line
                    key={key}
                    type="monotone"
                    dataKey={key}
                    name={`${key} (${units[index]})`}
                    stroke={colors[index % colors.length]}
                    strokeWidth={2}
                    dot={{ r: 3 }}
                    activeDot={{ r: 5 }}
                  />
                )
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
      <CardFooter className="text-xs text-gray-500">
        Click the buttons above to toggle metric visibility
      </CardFooter>
    </Card>
  );
};