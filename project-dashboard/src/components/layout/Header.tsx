import React, { useState } from 'react';
import { Sun, Moon, Home, Zap, Droplet, Recycle, Cloud, Package, Bell, Menu, Building2, Award } from 'lucide-react';
import { Switch } from '../ui/Switch';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Select } from '../ui/Select';
import { projectsData } from '../../data/esgData';

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
    { id: 'leadership', label: 'Leadership', icon: <Award size={18} />, path: '/leadership' },
    { id: 'energy', label: 'Energy', icon: <Zap size={18} />, path: '/energy' },
    { id: 'water', label: 'Water', icon: <Droplet size={18} />, path: '/water' },
    { id: 'waste', label: 'Waste', icon: <Recycle size={18} />, path: '/waste' },
    { id: 'emissions', label: 'Emissions', icon: <Cloud size={18} />, path: '/emissions' },
    { id: 'materials', label: 'Materials', icon: <Package size={18} />, path: '/materials' },
  ];

  const projectOptions = [
    { value: 'all', label: 'All Projects' },
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
            <Building2 className="h-8 w-8 text-green-600" />
            <div className="ml-3">
              <span className="text-xl font-bold text-gray-900 dark:text-white">Birla Estates</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 block">ESG Dashboard</span>
            </div>
          </div>

          <div className="flex-1" />
          
          <div className="flex items-center space-x-4">
            <Select
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
              className="w-48"
            >
              {projectOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
            
            <Button
              variant="ghost"
              size="sm"
              className="relative"
              onClick={() => setShowAlerts(!showAlerts)}
            >
              <Bell size={20} />
              <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center">
                3
              </Badge>
            </Button>
            
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