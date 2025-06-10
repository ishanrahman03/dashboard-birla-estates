export interface MonthlyData {
  month: string;
  value: number;
}

export interface KpiData {
  id: string;
  name: string;
  unit: string;
  currentValue: number;
  previousValue: number;
  change: number;
  isPositive: boolean;
  monthlyData: MonthlyData[];
  insight: string;
}

export interface ChartData {
  month: string;
  [key: string]: string | number;
}

export interface ComponentBreakdown {
  id: string;
  name: string;
  value: number;
  color: string;
}

export interface DataPoint {
  month: string;
  [key: string]: string | number;
}

export interface BreakdownData {
  category: string;
  value: number;
  color: string;
}

export interface FilterOptions {
  startMonth: string;
  endMonth: string;
  metrics: string[];
}

export interface KpiMetric {
  id: string;
  name: string;
  unit: string;
  description: string;
  target?: number;
  goodDirection: 'up' | 'down';
}