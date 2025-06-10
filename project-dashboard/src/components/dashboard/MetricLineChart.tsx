import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';
import { formatNumber } from '../../utils/formatters';

interface MetricLineChartProps {
  title: string;
  data: any[];
  dataKey: string;
  color?: string;
  target?: number;
  yAxisLabel?: string;
  className?: string;
}

export const MetricLineChart: React.FC<MetricLineChartProps> = ({
  title,
  data,
  dataKey,
  color = '#4f46e5',
  target,
  yAxisLabel,
  className,
}) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="month" 
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                label={yAxisLabel ? { 
                  value: yAxisLabel, 
                  angle: -90, 
                  position: 'insideLeft',
                  style: { textAnchor: 'middle' }
                } : undefined}
              />
              <Tooltip
                formatter={(value: number) => formatNumber(value)}
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '4px',
                }}
              />
              {target && (
                <ReferenceLine 
                  y={target} 
                  stroke="#ef4444" 
                  strokeDasharray="3 3"
                  label={{ 
                    value: 'Target', 
                    position: 'right',
                    fill: '#ef4444',
                    fontSize: 12
                  }}
                />
              )}
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke={color}
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};