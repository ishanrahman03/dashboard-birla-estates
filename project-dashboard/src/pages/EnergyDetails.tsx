import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Zap, TrendingUp, AlertCircle, Target } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { ESGKpiCard } from '../components/dashboard/ESGKpiCard';
import { TimeSeriesChart } from '../components/dashboard/TimeSeriesChart';
import { BreakdownChart } from '../components/dashboard/BreakdownChart';
import { StackedBarChart } from '../components/dashboard/StackedBarChart';
import { MetricsTable } from '../components/dashboard/MetricsTable';
import { 
  esgKpiData, 
  monthlyEnergyData, 
  energySourceData, 
  projectsData 
} from '../data/esgData';

export const EnergyDetails: React.FC = () => {
  const navigate = useNavigate();
  const energyKpis = esgKpiData.filter(kpi => kpi.category === 'energy');

  const energyMetricsForTable = energyKpis.map(kpi => ({
    id: kpi.id,
    name: kpi.name,
    value: kpi.currentValue,
    unit: kpi.unit,
    trend: kpi.change > 0 ? 'up' : kpi.change < 0 ? 'down' : 'stable' as const,
    trendValue: Math.abs(kpi.change),
    status: kpi.isPositive ? 'good' : 'warning' as const,
    target: kpi.target
  }));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header */}
      <div className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/')}
                className="gap-2"
              >
                <ArrowLeft size={16} />
                Back to Dashboard
              </Button>
              <div className="flex items-center gap-2">
                <Zap className="text-green-500" size={24} />
                <h1 className="text-2xl font-bold">Energy Management</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {energyKpis.map((kpi) => (
            <ESGKpiCard key={kpi.id} data={kpi} />
          ))}
        </div>

        {/* Key Insights */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="text-blue-500" />
              Key Energy Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <TrendingUp className="text-green-500" size={20} />
                  Achievements
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>Birla Aurora achieved 100% renewable energy operation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>Overall energy intensity reduced from 0.04 to 0.02 tCO₂e/m²</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>17% renewable energy share achieved across portfolio</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Target className="text-orange-500" size={20} />
                  Focus Areas
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-0.5">•</span>
                    <span>Increase solar capacity at Worli and Kalyan sites</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-0.5">•</span>
                    <span>Implement VFD systems for cooling towers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-0.5">•</span>
                    <span>Target 50% renewable energy by 2030</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <TimeSeriesChart
            title="Monthly Energy Consumption Trends"
            data={monthlyEnergyData}
            dataKeys={['Grid', 'Solar', 'Wind', 'DG']}
            colors={['#94a3b8', '#facc15', '#60a5fa', '#f87171']}
            units={['GWh', 'GWh', 'GWh', 'GWh']}
          />
          <BreakdownChart
            title="Energy Source Distribution (FY 2023-24)"
            data={energySourceData}
            unit="GWh"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <StackedBarChart
            title="Project-wise Energy Performance"
            data={projectsData.map(p => ({
              name: p.name,
              'Grid Energy': Number((p.energyMetrics.totalEnergy * (1 - p.energyMetrics.renewableShare / 100)).toFixed(1)),
              'Renewable Energy': Number((p.energyMetrics.totalEnergy * (p.energyMetrics.renewableShare / 100)).toFixed(1)),
              'Energy Intensity': p.energyMetrics.energyIntensity
            }))}
            dataKeys={['Grid Energy', 'Renewable Energy']}
            colors={['#94a3b8', '#10b981']}
          />
          <Card>
            <CardHeader>
              <CardTitle>Energy Efficiency Initiatives</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h5 className="font-semibold">LED Retrofit Program</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    100% LED conversion completed, saving 2.5 GWh annually
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h5 className="font-semibold">Smart Building Management</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    IoT-based energy monitoring reducing consumption by 15%
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h5 className="font-semibold">Solar Rooftop Installation</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    2.5 MW capacity added in FY 2023-24
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Metrics Table */}
        <MetricsTable 
          metrics={energyMetricsForTable} 
          title="Detailed Energy Metrics"
        />
      </div>
    </div>
  );
};