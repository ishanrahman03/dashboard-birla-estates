import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { DashboardContent } from './components/dashboard/DashboardContent';
import { EnergyDetails } from './pages/EnergyDetails';
import { WaterDetails } from './pages/WaterDetails';
import { WasteDetails } from './pages/WasteDetails';
import { EmissionsDetails } from './pages/EmissionsDetails';
import { MaterialsDetails } from './pages/MaterialsDetails';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedProject, setSelectedProject] = useState<string>('all');

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    document.title = 'Birla Estates ESG Dashboard';
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <Header 
          isDarkMode={isDarkMode} 
          toggleDarkMode={toggleDarkMode}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
        
        <main className="pt-32">
          <div className="container mx-auto px-4">
            <Routes>
              <Route path="/" element={<DashboardContent activeTab={activeTab} selectedProject={selectedProject} />} />
              <Route path="/energy" element={<EnergyDetails />} />
              <Route path="/water" element={<WaterDetails />} />
              <Route path="/waste" element={<WasteDetails />} />
              <Route path="/emissions" element={<EmissionsDetails />} />
              <Route path="/materials" element={<MaterialsDetails />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;