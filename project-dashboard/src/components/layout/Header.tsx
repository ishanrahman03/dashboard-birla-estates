import React, { useState } from 'react';
import { Sun, Moon, Home, Zap, Droplet, Recycle, Cloud, Package, Bell, Menu } from 'lucide-react';
import { Switch } from '../ui/Switch';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Select } from '../ui/Select';
import { projectsData } from '../../data/esgData';
import birlaEstatesLogo from '../../assets/birla estates.png';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedProject: string;
  setSelectedProject: (project: string) => void;
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  path?: string;
}

export const Header: React.FC<HeaderProps> = ({ 
  isDarkMode, 
  toggleDarkMode,
  activeTab,
  setActiveTab,
  selectedProject,
  setSelectedProject
}) => {
  const navigate = useNavigate();
  const [showAlerts, setShowAlerts] = useState(false);
  
  const navItems: NavItem[] = [
    { id: 'overview', label: 'Overview', icon: <Home size={18} />, path: '/' },
    { id: 'energy', label: 'Energy', icon: <Zap size={18} />, path: '/energy' },
    { id: 'water', label: 'Water', icon: <Droplet size={18} />, path: '/water' },
    { id: 'waste', label: 'Waste', icon: <Recycle size={18} />, path: '/waste' },
    { id: 'emissions', label: 'Emissions', icon: <Cloud size={18} />, path: '/emissions' },
    { id: 'materials', label: 'Materials', icon: <Package size={18} />, path: '/materials' },
  ];

  const projectOptions = [
    { value: 'all', label: 'All Projects' },
    { value: 'commercial', label: 'Commercial Projects' },
    { value: 'residential', label: 'Residential Projects' },
    ...projectsData.map(p => ({ value: p.id, label: p.name }))
  ];

  const handleNavigation = (item: NavItem) => {
    setActiveTab(item.id);
    if (item.path) {
      navigate(item.path);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Top bar with logo and theme toggle */}
        <div className="h-16 flex items-center border-b border-gray-300 dark:border-gray-600">
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 mr-2">
            <Menu size={24} className="text-gray-600 dark:text-gray-300" />
          </button>
          
          <div className="flex items-center">
            <img 
              src={birlaEstatesLogo} 
              alt="Birla Estates" 
              className="h-10 w-auto mr-3"
            />
            <div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">Birla Estates</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 block">ESG Dashboard</span>
            </div>
          </div>

          <div className="flex-1" />
          
          <div className="flex items-center gap-4">
            <div className="relative z-20">
              <Select
                value={selectedProject}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedProject(e.target.value)}
                className="min-w-[200px]"
                options={projectOptions}
              />
            </div>
            
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                className="relative hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full p-2"
                onClick={() => setShowAlerts(!showAlerts)}
              >
                <Bell size={20} className="text-gray-600 dark:text-gray-300" />
                <Badge 
                  variant="destructive" 
                  className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs"
                >
                  3
                </Badge>
              </Button>
              
              {showAlerts && (
                <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-30">
                  <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-sm font-semibold">Notifications</h3>
                  </div>
                  <div className="max-h-[300px] overflow-y-auto">
                    {[1, 2, 3].map((_, i) => (
                      <div 
                        key={i}
                        className="p-4 border-b border-gray-200 dark:border-gray-700 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0">
                            <Bell size={16} className="text-blue-500" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-900 dark:text-gray-100">
                              Energy consumption spike detected
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                              2 hours ago
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      View all notifications
                    </Button>
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex items-center space-x-2">
              <Sun size={18} className="text-gray-600 dark:text-gray-400" />
              <Switch
                checked={isDarkMode}
                onChange={toggleDarkMode}
                id="dark-mode"
              />
              <Moon size={18} className="text-gray-600 dark:text-gray-400" />
            </div>
          </div>
        </div>

        {/* Navigation bar */}
        <div className="h-12 flex items-center border-b border-gray-300 dark:border-gray-600">
          <nav className="flex space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                className={`${
                  activeTab === item.id 
                    ? 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white' 
                    : 'text-gray-600 dark:text-gray-300'
                }`}
                onClick={() => handleNavigation(item)}
              >
                <span className="flex items-center">
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                </span>
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};