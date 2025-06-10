import React from 'react';
import { 
  Home, 
  BarChart, 
  LineChart, 
  PieChart, 
  Zap, 
  Settings,
  ChevronLeft,
  ChevronRight,
  TrendingUp
} from 'lucide-react';
import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  path?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  isCollapsed, 
  toggleSidebar, 
  activeTab,
  setActiveTab
}) => {
  const navigate = useNavigate();
  
  const navItems: NavItem[] = [
    { id: 'overview', label: 'Overview', icon: <Home size={18} />, path: '/' },
    { id: 'analysis', label: 'KPI Analysis', icon: <TrendingUp size={18} />, path: '/analysis' },
    { id: 'power', label: 'Power Consumption', icon: <LineChart size={18} /> },
    { id: 'heat', label: 'Heat Consumption', icon: <BarChart size={18} /> },
    { id: 'energy', label: 'Energy Mix', icon: <PieChart size={18} /> },
    { id: 'efficiency', label: 'Efficiency', icon: <Zap size={18} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={18} /> },
  ];

  const handleNavigation = (item: NavItem) => {
    setActiveTab(item.id);
    if (item.path) {
      navigate(item.path);
    }
  };

  return (
    <aside 
      className={`${
        isCollapsed ? 'w-16' : 'w-64'
      } h-screen bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-all duration-300 fixed top-0 left-0 z-20 pt-16`}
    >
      <div className="p-4 flex flex-col h-full">
        <div className="flex items-center justify-end mb-6">
          <Button
            variant="ghost"
            size="sm"
            className="p-1"
            onClick={toggleSidebar}
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </Button>
        </div>
        
        <nav className="space-y-1 flex-1">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className={`w-full justify-${isCollapsed ? 'center' : 'start'} ${
                activeTab === item.id 
                  ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-200' 
                  : 'text-gray-700 dark:text-gray-300'
              }`}
              onClick={() => handleNavigation(item)}
              aria-label={item.label}
            >
              <span className="flex items-center">
                {item.icon}
                {!isCollapsed && <span className="ml-3">{item.label}</span>}
              </span>
            </Button>
          ))}
        </nav>
        
        <div className="border-t border-gray-200 dark:border-gray-800 pt-4 mt-auto">
          {!isCollapsed && (
            <div className="text-xs text-gray-500 dark:text-gray-400">
              <p>Last updated:</p>
              <p className="font-medium">March 15, 2025</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};