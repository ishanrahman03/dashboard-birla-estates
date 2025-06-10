import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Droplet, TrendingUp, AlertCircle, Target } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { ESGKpiCard } from '../components/dashboard/ESGKpiCard';
import { TimeSeriesChart } from '../components/dashboard/TimeSeriesChart';
import { MetricsTable } from '../components/dashboard/MetricsTable';
import { 
  esgKpiData,
  projectsData 
} from '../data/esgData';

export const WaterDetails: React.FC = () => {
  const navigate = useNavigate();
  const waterKpis = esgKpiData.filter(kpi => kpi.category === 'water');

  const waterMetricsForTable = waterKpis.map(kpi => ({
    id: kpi.id,
    name: kpi.name,
    value: kpi.currentValue,
    unit: kpi.unit,
    trend: kpi.change > 0 ? 'up' : kpi.change < 0 ? 'down' : 'stable' as const,
    trendValue: Math.abs(kpi.change),
    status: kpi.isPositive ? 'good' : 'warning' as const,
    target: kpi.target
  }));

  // Generate monthly water consumption data
  const monthlyWaterData = Array.from({ length: 12 }, (_, i) => ({
    month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i],
    'Fresh Water': 180 + Math.random() * 20,
    'Recycled Water': 70 + Math.random() * 10,
    'Rainwater': 20 + Math.random() * 15
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
                <Droplet className="text-blue-500" size={24} />
                <h1 className="text-2xl font-bold">Water Management</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {waterKpis.map((kpi) => (
            <ESGKpiCard key={kpi.id} data={kpi} />
          ))}
        </div>

        {/* Key Insights */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="text-blue-500" />
              Key Water Management Insights
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
                    <span>100% STP & RO-reject water reuse systems operational</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>4.3 million liters of water reused in FY 2023-24</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>Water intensity reduced by 11.3% year-over-year</span>
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
                    <span>Enhance rainwater harvesting to reach 30 million L potential</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-0.5">•</span>
                    <span>Achieve zero fresh water for construction activities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-0.5">•</span>
                    <span>Implement smart water meters across all sites</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <TimeSeriesChart
            title="Monthly Water Consumption by Source"
            data={monthlyWaterData}
            dataKeys={['Fresh Water', 'Recycled Water', 'Rainwater']}
            colors={['#3b82f6', '#10b981', '#06b6d4']}
            units={['kL', 'kL', 'kL']}
          />
          <Card>
            <CardHeader>
              <CardTitle>Water Conservation Initiatives</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h5 className="font-semibold">Zero Discharge Systems</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    All sites equipped with STP ensuring 100% wastewater treatment
                  </p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-4">
                  <h5 className="font-semibold">Rainwater Harvesting</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    30 million L/year harvesting potential created
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h5 className="font-semibold">Low-flow Fixtures</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    40% reduction in domestic water consumption
                  </p>
                </div>
                <div className="border-l-4 border-teal-500 pl-4">
                  <h5 className="font-semibold">Dust Suppression Systems</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    100% recycled water usage for construction dust control
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Project-wise Water Metrics */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Project-wise Water Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Project</th>
                    <th className="text-right py-2">Water Intensity (kL/m²)</th>
                    <th className="text-right py-2">Recycled Water %</th>
                    <th className="text-right py-2">RWH Potential (kL)</th>
                  </tr>
                </thead>
                <tbody>
                  {projectsData.map(project => (
                    <tr key={project.id} className="border-b">
                      <td className="py-2">{project.name}</td>
                      <td className="text-right">{project.waterMetrics.waterIntensity}</td>
                      <td className="text-right">{project.waterMetrics.recycledWaterPercent}%</td>
                      <td className="text-right">{project.waterMetrics.rainwaterPotential.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Metrics Table */}
        <MetricsTable 
          metrics={waterMetricsForTable} 
          title="Detailed Water Metrics"
        />
      </div>
    </div>
  );
};