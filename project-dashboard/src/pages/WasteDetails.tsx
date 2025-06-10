import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Recycle, TrendingUp, AlertCircle, Target } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { ESGKpiCard } from '../components/dashboard/ESGKpiCard';
import { BreakdownChart } from '../components/dashboard/BreakdownChart';
import { StackedBarChart } from '../components/dashboard/StackedBarChart';
import { MetricsTable } from '../components/dashboard/MetricsTable';
import { 
  esgKpiData,
  wasteBreakdownData,
  projectsData 
} from '../data/esgData';

export const WasteDetails: React.FC = () => {
  const navigate = useNavigate();
  const wasteKpis = esgKpiData.filter(kpi => kpi.category === 'waste');

  const wasteMetricsForTable = wasteKpis.map(kpi => ({
    id: kpi.id,
    name: kpi.name,
    value: kpi.currentValue,
    unit: kpi.unit,
    trend: kpi.change > 0 ? 'up' : kpi.change < 0 ? 'down' : 'stable' as const,
    trendValue: Math.abs(kpi.change),
    status: kpi.isPositive ? 'good' : 'warning' as const,
    target: kpi.target
  }));

  // Generate monthly waste data
  const monthlyWasteData = Array.from({ length: 12 }, (_, i) => ({
    month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i],
    'C&D': 400 + Math.random() * 100,
    'Organic': 6 + Math.random() * 3,
    'Recyclables': 18 + Math.random() * 5,
    'Hazardous': 4 + Math.random() * 2,
    'E-Waste': 3 + Math.random() * 2
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
                <Recycle className="text-orange-500" size={24} />
                <h1 className="text-2xl font-bold">Waste Management</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {wasteKpis.map((kpi) => (
            <ESGKpiCard key={kpi.id} data={kpi} />
          ))}
        </div>

        {/* Key Insights */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="text-blue-500" />
              Key Waste Management Insights
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
                    <span>78% waste diversion rate achieved in FY 2023-24</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>83 tons of organic waste converted to compost</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>240 tons of materials recycled and reused</span>
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
                    <span>Achieve zero waste to landfill by 2030</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-0.5">•</span>
                    <span>Increase C&D waste recycling to 95%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-0.5">•</span>
                    <span>Implement material recovery facilities at all sites</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <BreakdownChart
            title="Waste Stream Composition (FY 2023-24)"
            data={wasteBreakdownData}
            unit="tons"
          />
          <StackedBarChart
            title="Monthly Waste Generation Trends"
            data={monthlyWasteData}
            dataKeys={['C&D', 'Organic', 'Recyclables', 'Hazardous', 'E-Waste']}
            colors={['#64748b', '#22c55e', '#3b82f6', '#ef4444', '#a855f7']}
          />
        </div>

        {/* Waste Management Practices */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Circular Economy Initiatives</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-gray-500 pl-4">
                  <h5 className="font-semibold">C&D Waste Recycling</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    On-site crushers processing debris into aggregates
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h5 className="font-semibold">Organic Waste Composting</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    100% organic waste converted to compost for landscaping
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h5 className="font-semibold">Material Recovery</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Segregation at source achieving 85% recovery rate
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h5 className="font-semibold">E-Waste Management</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Certified vendors ensuring 100% responsible disposal
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Project-wise Waste Metrics */}
          <Card>
            <CardHeader>
              <CardTitle>Project-wise Waste Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Project</th>
                      <th className="text-right py-2">Total Waste (t)</th>
                      <th className="text-right py-2">Diversion Rate</th>
                      <th className="text-right py-2">Recycled (t)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projectsData.map(project => (
                      <tr key={project.id} className="border-b">
                        <td className="py-2">{project.name}</td>
                        <td className="text-right">{project.wasteMetrics.totalWaste.toLocaleString()}</td>
                        <td className="text-right">{project.wasteMetrics.diversionRate}%</td>
                        <td className="text-right">{project.wasteMetrics.wasteRecycled.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Zero Waste Roadmap */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Zero Waste to Landfill Roadmap</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
                <span className="font-medium">2024: Enhanced Segregation</span>
                <span className="text-sm text-gray-600">85% diversion target</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
                <span className="font-medium">2026: Material Recovery Facilities</span>
                <span className="text-sm text-gray-600">90% diversion target</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
                <span className="font-medium">2028: Advanced Processing</span>
                <span className="text-sm text-gray-600">95% diversion target</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded">
                <span className="font-medium">2030: Zero Waste Achievement</span>
                <span className="text-sm text-green-600">100% diversion target</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Metrics Table */}
        <MetricsTable 
          metrics={wasteMetricsForTable} 
          title="Detailed Waste Metrics"
        />
      </div>
    </div>
  );
};