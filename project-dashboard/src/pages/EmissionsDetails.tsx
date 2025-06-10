import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Cloud, TrendingUp, AlertCircle, Target } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { ESGKpiCard } from '../components/dashboard/ESGKpiCard';
import { TimeSeriesChart } from '../components/dashboard/TimeSeriesChart';
import { BreakdownChart } from '../components/dashboard/BreakdownChart';
import { MetricsTable } from '../components/dashboard/MetricsTable';
import { GaugeChart } from '../components/dashboard/GaugeChart';
import { 
  esgKpiData,
  emissionsData,
  projectsData 
} from '../data/esgData';

export const EmissionsDetails: React.FC = () => {
  const navigate = useNavigate();
  const emissionsKpis = esgKpiData.filter(kpi => kpi.category === 'emissions');

  const emissionsMetricsForTable = emissionsKpis.map(kpi => ({
    id: kpi.id,
    name: kpi.name,
    value: kpi.currentValue,
    unit: kpi.unit,
    trend: kpi.change > 0 ? 'up' : kpi.change < 0 ? 'down' : 'stable' as const,
    trendValue: Math.abs(kpi.change),
    status: kpi.isPositive ? 'good' : 'warning' as const,
    target: kpi.target
  }));

  // Calculate total emissions
  const totalScope1 = 368;
  const totalScope2 = 2558;
  const totalEmissions = totalScope1 + totalScope2;

  const emissionsBreakdown = [
    { name: 'Scope 1 (Direct)', value: totalScope1, color: '#f59e0b' },
    { name: 'Scope 2 (Indirect)', value: totalScope2, color: '#ef4444' }
  ];

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
                <Cloud className="text-red-500" size={24} />
                <h1 className="text-2xl font-bold">Emissions Management</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {emissionsKpis.map((kpi) => (
            <ESGKpiCard key={kpi.id} data={kpi} />
          ))}
        </div>

        {/* Key Insights */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="text-blue-500" />
              Key Emissions Insights
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
                    <span>46% reduction in GHG intensity achieved</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>2,440 tCO₂ avoided through green materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>Climate risk assessments for 100% of projects</span>
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
                    <span>Achieve net-zero emissions by 2050</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-0.5">•</span>
                    <span>Reduce Scope 2 emissions through renewable energy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-0.5">•</span>
                    <span>Implement carbon offset programs</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <TimeSeriesChart
            title="Monthly GHG Emissions Trend"
            data={emissionsData}
            dataKeys={['Scope1', 'Scope2', 'Total']}
            colors={['#f59e0b', '#ef4444', '#7c3aed']}
            units={['tCO₂e', 'tCO₂e', 'tCO₂e']}
          />
          <BreakdownChart
            title="Emissions by Scope (FY 2023-24)"
            data={emissionsBreakdown}
            unit="tCO₂e"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Carbon Reduction Initiatives</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h5 className="font-semibold">Green Building Design</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Energy-efficient designs reducing operational emissions by 40%
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h5 className="font-semibold">Low-Carbon Materials</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    GGBS substitution avoiding 2,440 tCO₂ annually
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h5 className="font-semibold">Electric Vehicle Fleet</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Transitioning to 50% EV fleet by 2025
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h5 className="font-semibold">Carbon Offset Programs</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Tree plantation offsetting 500 tCO₂ annually
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Project-wise Emissions */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Project-wise Emissions Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Project</th>
                    <th className="text-right py-2">Scope 1</th>
                    <th className="text-right py-2">Scope 2</th>
                    <th className="text-right py-2">Total (tCO₂e)</th>
                    <th className="text-right py-2">Intensity</th>
                    <th className="text-right py-2">CO₂ Avoided</th>
                  </tr>
                </thead>
                <tbody>
                  {projectsData.map(project => (
                    <tr key={project.id} className="border-b">
                      <td className="py-2">{project.name}</td>
                      <td className="text-right">{project.emissionsMetrics.scope1}</td>
                      <td className="text-right">{project.emissionsMetrics.scope2}</td>
                      <td className="text-right">{project.emissionsMetrics.totalEmissions}</td>
                      <td className="text-right">{project.emissionsMetrics.ghgIntensity}</td>
                      <td className="text-right text-green-600">{project.emissionsMetrics.co2Avoided}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Net Zero Roadmap */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Net Zero Emissions Roadmap</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
                <span className="font-medium">2025: 50% Emissions Reduction</span>
                <span className="text-sm text-gray-600">Enhanced renewable energy</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
                <span className="font-medium">2030: 70% Emissions Reduction</span>
                <span className="text-sm text-gray-600">Carbon neutral operations</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
                <span className="font-medium">2040: 90% Emissions Reduction</span>
                <span className="text-sm text-gray-600">Scope 3 emissions addressed</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded">
                <span className="font-medium">2050: Net Zero Achievement</span>
                <span className="text-sm text-green-600">Complete carbon neutrality</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Metrics Table */}
        <MetricsTable 
          metrics={emissionsMetricsForTable} 
          title="Detailed Emissions Metrics"
        />
      </div>
    </div>
  );
};