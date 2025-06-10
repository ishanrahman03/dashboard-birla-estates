import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';

interface GaugeChartProps {
  title: string;
  value: number;
  target?: number;
  min?: number;
  max?: number;
  className?: string;
}

export const GaugeChart: React.FC<GaugeChartProps> = ({
  title,
  value,
  target = 54,
  min = 0,
  max = 100,
  className,
}) => {
  // Calculate the angle for the gauge (from -90 to 90 degrees)
  const angle = ((value - min) / (max - min)) * 180 - 90;
  
  // Calculate target angle
  const targetAngle = ((target - min) / (max - min)) * 180 - 90;

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative w-64 h-32 mx-auto">
          {/* Background arc */}
          <svg className="w-full h-full" viewBox="0 0 200 100">
            <path
              d="M20 90 A 80 80 0 0 1 180 90"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="20"
              strokeLinecap="round"
            />
            {/* Value arc */}
            <path
              d={`M20 90 A 80 80 0 ${angle > 0 ? "0 1" : "0 0"} ${
                100 + 80 * Math.cos((angle * Math.PI) / 180)
              } ${90 + 80 * Math.sin((angle * Math.PI) / 180)}`}
              fill="none"
              stroke="#4f46e5"
              strokeWidth="20"
              strokeLinecap="round"
            />
            {/* Target marker */}
            <line
              x1={100 + 70 * Math.cos((targetAngle * Math.PI) / 180)}
              y1={90 + 70 * Math.sin((targetAngle * Math.PI) / 180)}
              x2={100 + 90 * Math.cos((targetAngle * Math.PI) / 180)}
              y2={90 + 90 * Math.sin((targetAngle * Math.PI) / 180)}
              stroke="#ef4444"
              strokeWidth="2"
            />
            {/* Value text */}
            <text
              x="100"
              y="70"
              textAnchor="middle"
              className="text-4xl font-bold"
              fill="currentColor"
            >
              {value.toFixed(1)}%
            </text>
          </svg>
          
          {/* Min/Max labels */}
          <div className="absolute bottom-0 left-0 text-sm text-gray-500">{min}%</div>
          <div className="absolute bottom-0 right-0 text-sm text-gray-500">{max}%</div>
        </div>
      </CardContent>
    </Card>
  );
};