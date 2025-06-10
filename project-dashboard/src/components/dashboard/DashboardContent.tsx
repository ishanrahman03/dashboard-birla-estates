import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ESGKpiCard } from './ESGKpiCard';
import { TimeSeriesChart } from './TimeSeriesChart';
import { BreakdownChart } from './BreakdownChart';
import { StackedBarChart } from './StackedBarChart';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { 
  Activity, Target, TrendingUp, AlertCircle, CheckCircle2, 
  XCircle, Info, Zap, Droplet, Recycle, Cloud, Package,
  Calendar, Bell, ArrowRight
} from 'lucide-react';
import {
  esgKpiData,
  monthlyEnergyData,
  energySourceData,
  wasteBreakdownData,
  emissionsData,
  smartAlerts,
  esgTargets,
  projectsData
} from '../../data/esgData';
import { SmartAlert } from '../../types/esg';

interface DashboardContentProps {
  activeTab: string;
  selectedProject: string;
}

export const DashboardContent: React.FC<DashboardContentProps> = ({ activeTab, selectedProject }) => {
  const navigate = useNavigate();

  // Filter projects based on selection
  const filteredProjects = useMemo(() => {
    if (selectedProject === 'all') {
      return projectsData;
    } else if (selectedProject === 'commercial') {
      return projectsData.filter(p => p.type === 'commercial');
    } else if (selectedProject === 'residential') {
      return projectsData.filter(p => p.type === 'residential');
    } else {
      return projectsData.filter(p => p.id === selectedProject);
    }
  }, [selectedProject]);

  // Filter data based on selected project
  const filteredKpiData = useMemo(() => {
    if (selectedProject === 'all') {
      return esgKpiData;
    }
    // In a real app, this would filter based on project-specific data
    return esgKpiData;
  }, [selectedProject]);

  const handleCardClick = (category: string) => {
    navigate(`/${category}`);
  };

  const renderAlertIcon = (type: SmartAlert['type']) => {
    switch (type) {
      case 'success':
        return <CheckCircle2 size={16} className="text-green-500" />;
      case 'warning':
        return <AlertCircle size={16} className="text-yellow-500" />;
      case 'error':
        return <XCircle size={16} className="text-red-500" />;
      case 'info':
        return <Info size={16} className="text-blue-500" />;
    }
  };

  const renderInsightsPanel = () => (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="text-blue-500" />
            Smart Alerts & Insights
          </div>
          <Badge variant="secondary">{smartAlerts.length} Active</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {smartAlerts.map((alert) => (
            <div
              key={alert.id}
              className={`p-3 rounded-lg border flex items-start gap-3 ${
                alert.type === 'error' ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800' :
                alert.type === 'warning' ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800' :
                alert.type === 'success' ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' :
                'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
              }`}
            >
              {renderAlertIcon(alert.type)}
              <div className="flex-1">
                <p className="text-sm font-medium">{alert.message}</p>
                {alert.projectId && (
                  <p className="text-xs text-gray-500 mt-1">
                    Project: {filteredProjects.find(p => p.id === alert.projectId)?.name || projectsData.find(p => p.id === alert.projectId)?.name}
                  </p>
                )}
              </div>
              {alert.actionRequired && (
                <button className="text-xs text-blue-600 hover:text-blue-700 flex items-center gap-1">
                  Action <ArrowRight size={12} />
                </button>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const renderTargetsProgress = () => (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="text-green-500" />
          ESG Targets Progress
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {esgTargets.map((target) => {
            const progress = (target.currentProgress / target.target) * 100;
            return (
              <div key={target.metric}>
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <p className="text-sm font-medium">{target.metric}</p>
                    <p className="text-xs text-gray-500">Target: {target.target}{target.unit} by {target.deadline}</p>
                  </div>
                  <span className="text-sm font-semibold">
                    {progress.toFixed(1)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${Math.min(progress, 100)}%`,
                      backgroundColor: progress >= 75 ? '#10b981' : progress >= 50 ? '#f59e0b' : '#ef4444'
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {filteredKpiData.map((kpi) => (
                <ESGKpiCard 
                  key={kpi.id} 
                  data={kpi} 
                  onClick={() => handleCardClick(kpi.category)}
                />
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {renderInsightsPanel()}
              {renderTargetsProgress()}
            </div>
          </>
        );

      case 'energy':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {filteredKpiData.filter(kpi => kpi.category === 'energy').map((kpi) => (
                <ESGKpiCard 
                  key={kpi.id} 
                  data={kpi} 
                  onClick={() => handleCardClick('energy')}
                />
              ))}
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <TimeSeriesChart
                title="Energy Consumption Trends"
                data={monthlyEnergyData}
                dataKeys={['Grid', 'Solar', 'Wind', 'DG']}
                colors={['#94a3b8', '#facc15', '#60a5fa', '#f87171']}
                units={['GWh', 'GWh', 'GWh', 'GWh']}
              />
              <StackedBarChart
                title="Project-wise Energy Consumption"
                data={filteredProjects.map(p => ({
                  name: p.name,
                  'Grid Energy': p.energyMetrics.totalEnergy * (1 - p.energyMetrics.renewableShare / 100),
                  'Renewable Energy': p.energyMetrics.totalEnergy * (p.energyMetrics.renewableShare / 100)
                }))}
                dataKeys={['Grid Energy', 'Renewable Energy']}
                colors={['#94a3b8', '#10b981']}
              />
            </div>
          </>
        );
        
      case 'water':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {filteredKpiData.filter(kpi => kpi.category === 'water').map((kpi) => (
                <ESGKpiCard 
                  key={kpi.id} 
                  data={kpi} 
                  onClick={() => handleCardClick('water')}
                />
              ))}
            </div>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Water Balance & Flow</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  100% STP & RO-reject water reuse systems implemented across all sites
                </p>
              </CardContent>
            </Card>
          </>
        );
        
      case 'waste':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {filteredKpiData.filter(kpi => kpi.category === 'waste').map((kpi) => (
                <ESGKpiCard 
                  key={kpi.id} 
                  data={kpi} 
                  onClick={() => handleCardClick('waste')}
                />
              ))}
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <BreakdownChart
                title="Waste Composition Analysis"
                data={wasteBreakdownData}
                unit="tons"
              />
              <StackedBarChart
                title="Monthly Waste Generation"
                data={Array.from({ length: 12 }, (_, i) => ({
                  month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i],
                  'C&D': 400 + Math.random() * 100,
                  'Organic': 6 + Math.random() * 3,
                  'Recyclables': 18 + Math.random() * 5,
                  'Hazardous': 4 + Math.random() * 2
                }))}
                dataKeys={['C&D', 'Organic', 'Recyclables', 'Hazardous']}
                colors={['#64748b', '#22c55e', '#3b82f6', '#ef4444']}
              />
            </div>
          </>
        );
        
      case 'emissions':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {filteredKpiData.filter(kpi => kpi.category === 'emissions').map((kpi) => (
                <ESGKpiCard 
                  key={kpi.id} 
                  data={kpi} 
                  onClick={() => handleCardClick('emissions')}
                />
              ))}
            </div>
            
            <div className="grid grid-cols-1 gap-6 mb-6">
              <TimeSeriesChart
                title="Scope 1 & 2 Emissions Breakdown"
                data={emissionsData}
                dataKeys={['Scope1', 'Scope2', 'Total']}
                colors={['#f59e0b', '#ef4444', '#7c3aed']}
                units={['tCO₂e', 'tCO₂e', 'tCO₂e']}
              />
            </div>
          </>
        );
        
      case 'materials':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {filteredKpiData.filter(kpi => kpi.category === 'material').map((kpi) => (
                <ESGKpiCard 
                  key={kpi.id} 
                  data={kpi} 
                  onClick={() => handleCardClick('materials')}
                />
              ))}
            </div>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Embodied Carbon Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Birla Niyaara embodied-carbon tool pilot showing 2,440 tCO₂ avoided through GGBS substitution
                </p>
              </CardContent>
            </Card>
          </>
        );
        
      default:
        return (
          <div className="flex items-center justify-center h-96">
            <p className="text-gray-500 dark:text-gray-400">Select a tab to view data</p>
          </div>
        );
    }
  };

  return (
    <div className="p-6">
      {renderContent()}
    </div>
  );
};