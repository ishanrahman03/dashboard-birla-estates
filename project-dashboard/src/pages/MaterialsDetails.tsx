import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Package, TrendingUp, AlertCircle, Target } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { ESGKpiCard } from '../components/dashboard/ESGKpiCard';
import { BreakdownChart } from '../components/dashboard/BreakdownChart';
import { StackedBarChart } from '../components/dashboard/StackedBarChart';
import { MetricsTable } from '../components/dashboard/MetricsTable';
import { GaugeChart } from '../components/dashboard/GaugeChart';
import { 
  esgKpiData,
  materialTypeData,
  projectsData 
} from '../data/esgData';

export const MaterialsDetails: React.FC = () => {
  const navigate = useNavigate();
  const materialsKpis = esgKpiData.filter(kpi => kpi.category === 'material');

  const materialsMetricsForTable = materialsKpis.map(kpi => ({
    id: kpi.id,
    name: kpi.name,
    value: kpi.currentValue,
    unit: kpi.unit,
    trend: kpi.change > 0 ? 'up' : kpi.change < 0 ? 'down' : 'stable' as const,
    trendValue: Math.abs(kpi.change),
    status: kpi.isPositive ? 'good' : 'warning' as const,
    target: kpi.target
  }));

  const materialCategories = [
    { name: 'Certified Wood', value: 85, color: '#22c55e' },
    { name: 'Recycled Steel', value: 40, color: '#3b82f6' },
    { name: 'Low-Carbon Concrete', value: 65, color: '#8b5cf6' },
    { name: 'Sustainable Glass', value: 75, color: '#06b6d4' },
    { name: 'EPD Materials', value: 35, color: '#f59e0b' }
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
                <Package className="text-purple-500" size={24} />
                <h1 className="text-2xl font-bold">Sustainable Materials</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {materialsKpis.map((kpi) => (
            <ESGKpiCard key={kpi.id} data={kpi} />
          ))}
        </div>

        {/* Key Insights */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="text-blue-500" />
              Key Materials Insights
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
                    <span>35% green materials usage achieved</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>GGBS substitution avoiding 2,440 tCO₂</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>Birla Niyaara embodied carbon tool piloted</span>
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
                    <span>Achieve 50% green materials by 2025</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-0.5">•</span>
                    <span>100% materials with EPD by 2030</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-0.5">•</span>
                    <span>Reduce embodied carbon by 40%</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <StackedBarChart
            title="Material Type Distribution"
            data={materialTypeData}
            dataKeys={['green', 'conventional']}
            colors={['#10b981', '#94a3b8']}
          />
          <BreakdownChart
            title="Sustainable Material Categories"
            data={materialCategories}
            unit="%"
          />
        </div>

        {/* Embodied Carbon Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Embodied Carbon Reduction Strategies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h5 className="font-semibold">GGBS/Fly Ash Substitution</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    40% cement replacement reducing 2,440 tCO₂ annually
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h5 className="font-semibold">Recycled Aggregates</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    25% recycled content in concrete mixes
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h5 className="font-semibold">Local Sourcing</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    80% materials sourced within 500km radius
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h5 className="font-semibold">Modular Construction</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Prefabrication reducing waste by 30%
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex items-center justify-center">
            <GaugeChart
              value={350}
              max={600}
              label="Avg. Embodied Carbon"
              unit="kgCO₂e/m²"
              color="#8b5cf6"
            />
          </div>
        </div>

        {/* Project-wise Material Performance */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Project-wise Sustainable Material Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Project</th>
                    <th className="text-right py-2">Green Materials %</th>
                    <th className="text-right py-2">Recycled %</th>
                    <th className="text-right py-2">EPD Materials %</th>
                    <th className="text-right py-2">Embodied Carbon</th>
                    <th className="text-right py-2">CO₂ Avoided</th>
                  </tr>
                </thead>
                <tbody>
                  {projectsData.map(project => (
                    <tr key={project.id} className="border-b">
                      <td className="py-2">{project.name}</td>
                      <td className="text-right">{project.materialMetrics.greenMaterialPercent}%</td>
                      <td className="text-right">{project.materialMetrics.recycledMaterialPercent}%</td>
                      <td className="text-right">{project.materialMetrics.materialsWithEPD}%</td>
                      <td className="text-right">{project.materialMetrics.embodiedCarbon} kgCO₂e/m²</td>
                      <td className="text-right text-green-600">{project.materialMetrics.co2AvoidedByMaterials} t</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Material Certification Status */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Material Certification & Standards</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded">
                <div className="text-3xl font-bold text-green-600">100%</div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">FSC Certified Wood</p>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded">
                <div className="text-3xl font-bold text-blue-600">85%</div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">BIS Certified Steel</p>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded">
                <div className="text-3xl font-bold text-purple-600">35%</div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Materials with EPD</p>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded">
                <div className="text-3xl font-bold text-orange-600">60%</div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Low VOC Materials</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Metrics Table */}
        <MetricsTable 
          metrics={materialsMetricsForTable} 
          title="Detailed Material Sustainability Metrics"
        />
      </div>
    </div>
  );
};