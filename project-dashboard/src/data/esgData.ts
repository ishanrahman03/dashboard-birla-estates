import { ESGKpiData, ProjectData, SmartAlert, ESGTarget, ChartDataPoint, WaterBalanceData } from '../types/esg';

// Main KPI Data based on Birla Estates ESG Report 2023-24
export const esgKpiData: ESGKpiData[] = [
  {
    id: 'total-energy',
    name: 'Total Energy Consumption',
    unit: 'GWh',
    currentValue: 85.4,
    previousValue: 92.3,
    change: -7.5,
    isPositive: true,
    category: 'energy',
    color: '#10b981',
    icon: 'Zap',
    monthlyData: [
      { month: 'Apr', value: 7.8 },
      { month: 'May', value: 7.2 },
      { month: 'Jun', value: 6.9 },
      { month: 'Jul', value: 6.5 },
      { month: 'Aug', value: 6.8 },
      { month: 'Sep', value: 7.1 },
      { month: 'Oct', value: 7.4 },
      { month: 'Nov', value: 7.0 },
      { month: 'Dec', value: 7.3 },
      { month: 'Jan', value: 7.1 },
      { month: 'Feb', value: 6.8 },
      { month: 'Mar', value: 7.5 },
    ],
    insight: 'Energy consumption reduced by 7.5% YoY through efficiency initiatives',
    target: 80.0
  },
  {
    id: 'renewable-share',
    name: 'Renewable Energy Share',
    unit: '%',
    currentValue: 17,
    previousValue: 12,
    change: 41.7,
    isPositive: true,
    category: 'energy',
    color: '#22c55e',
    icon: 'Leaf',
    monthlyData: [
      { month: 'Apr', value: 12 },
      { month: 'May', value: 13 },
      { month: 'Jun', value: 14 },
      { month: 'Jul', value: 15 },
      { month: 'Aug', value: 16 },
      { month: 'Sep', value: 16 },
      { month: 'Oct', value: 17 },
      { month: 'Nov', value: 17 },
      { month: 'Dec', value: 18 },
      { month: 'Jan', value: 18 },
      { month: 'Feb', value: 17 },
      { month: 'Mar', value: 17 },
    ],
    insight: '100% green power achieved at Birla Aurora project',
    target: 25
  },
  {
    id: 'water-intensity',
    name: 'Water Intensity',
    unit: 'kL/m²',
    currentValue: 0.63,
    previousValue: 0.71,
    change: -11.3,
    isPositive: true,
    category: 'water',
    color: '#3b82f6',
    icon: 'Droplet',
    monthlyData: [
      { month: 'Apr', value: 0.68 },
      { month: 'May', value: 0.66 },
      { month: 'Jun', value: 0.65 },
      { month: 'Jul', value: 0.64 },
      { month: 'Aug', value: 0.63 },
      { month: 'Sep', value: 0.62 },
      { month: 'Oct', value: 0.62 },
      { month: 'Nov', value: 0.63 },
      { month: 'Dec', value: 0.63 },
      { month: 'Jan', value: 0.64 },
      { month: 'Feb', value: 0.63 },
      { month: 'Mar', value: 0.63 },
    ],
    insight: '4.3 million liters of water reused through STP systems',
    target: 0.55
  },
  {
    id: 'waste-diversion',
    name: 'Waste Diversion Rate',
    unit: '%',
    currentValue: 78,
    previousValue: 65,
    change: 20.0,
    isPositive: true,
    category: 'waste',
    color: '#f59e0b',
    icon: 'Recycle',
    monthlyData: [
      { month: 'Apr', value: 65 },
      { month: 'May', value: 68 },
      { month: 'Jun', value: 70 },
      { month: 'Jul', value: 72 },
      { month: 'Aug', value: 74 },
      { month: 'Sep', value: 75 },
      { month: 'Oct', value: 76 },
      { month: 'Nov', value: 77 },
      { month: 'Dec', value: 78 },
      { month: 'Jan', value: 78 },
      { month: 'Feb', value: 78 },
      { month: 'Mar', value: 78 },
    ],
    insight: '83 tons of organic waste converted to compost',
    target: 90
  },
  {
    id: 'ghg-intensity',
    name: 'GHG Intensity',
    unit: 'tCO₂e/m²',
    currentValue: 0.02,
    previousValue: 0.037,
    change: -46.0,
    isPositive: true,
    category: 'emissions',
    color: '#ef4444',
    icon: 'Cloud',
    monthlyData: [
      { month: 'Apr', value: 0.035 },
      { month: 'May', value: 0.032 },
      { month: 'Jun', value: 0.030 },
      { month: 'Jul', value: 0.028 },
      { month: 'Aug', value: 0.026 },
      { month: 'Sep', value: 0.024 },
      { month: 'Oct', value: 0.022 },
      { month: 'Nov', value: 0.021 },
      { month: 'Dec', value: 0.020 },
      { month: 'Jan', value: 0.020 },
      { month: 'Feb', value: 0.020 },
      { month: 'Mar', value: 0.020 },
    ],
    insight: '2,440 tCO₂ avoided through green materials',
    target: 0.015
  },
  {
    id: 'green-materials',
    name: 'Green Materials Usage',
    unit: '%',
    currentValue: 35,
    previousValue: 28,
    change: 25.0,
    isPositive: true,
    category: 'material',
    color: '#8b5cf6',
    icon: 'Package',
    monthlyData: [
      { month: 'Apr', value: 28 },
      { month: 'May', value: 29 },
      { month: 'Jun', value: 30 },
      { month: 'Jul', value: 31 },
      { month: 'Aug', value: 32 },
      { month: 'Sep', value: 33 },
      { month: 'Oct', value: 34 },
      { month: 'Nov', value: 34 },
      { month: 'Dec', value: 35 },
      { month: 'Jan', value: 35 },
      { month: 'Feb', value: 35 },
      { month: 'Mar', value: 35 },
    ],
    insight: 'GGBS substitution reducing embodied carbon significantly',
    target: 50
  }
];

// Energy source breakdown data
export const energySourceData: ChartDataPoint[] = [
  { name: 'Grid Electricity', value: 70.9, color: '#94a3b8' },
  { name: 'Solar Power', value: 12.1, color: '#facc15' },
  { name: 'Wind Power', value: 4.9, color: '#60a5fa' },
  { name: 'DG Sets', value: 12.1, color: '#f87171' }
];

// Monthly energy consumption by source
export const monthlyEnergyData: ChartDataPoint[] = [
  { month: 'Apr', Grid: 5.8, Solar: 1.2, Wind: 0.4, DG: 0.4 },
  { month: 'May', Grid: 5.4, Solar: 1.3, Wind: 0.3, DG: 0.2 },
  { month: 'Jun', Grid: 5.0, Solar: 1.4, Wind: 0.3, DG: 0.2 },
  { month: 'Jul', Grid: 4.6, Solar: 1.5, Wind: 0.3, DG: 0.1 },
  { month: 'Aug', Grid: 4.8, Solar: 1.5, Wind: 0.4, DG: 0.1 },
  { month: 'Sep', Grid: 5.0, Solar: 1.6, Wind: 0.4, DG: 0.1 },
  { month: 'Oct', Grid: 5.2, Solar: 1.6, Wind: 0.4, DG: 0.2 },
  { month: 'Nov', Grid: 4.9, Solar: 1.6, Wind: 0.4, DG: 0.1 },
  { month: 'Dec', Grid: 5.1, Solar: 1.6, Wind: 0.4, DG: 0.2 },
  { month: 'Jan', Grid: 4.9, Solar: 1.6, Wind: 0.4, DG: 0.2 },
  { month: 'Feb', Grid: 4.7, Solar: 1.6, Wind: 0.4, DG: 0.1 },
  { month: 'Mar', Grid: 5.2, Solar: 1.7, Wind: 0.4, DG: 0.2 }
];

// Water balance data for Sankey diagram
export const waterBalanceData: WaterBalanceData = {
  nodes: [
    { name: 'Fresh Water', color: '#3b82f6' },
    { name: 'Recycled Water', color: '#10b981' },
    { name: 'Rainwater', color: '#06b6d4' },
    { name: 'Construction', color: '#f59e0b' },
    { name: 'Domestic', color: '#8b5cf6' },
    { name: 'Landscaping', color: '#22c55e' },
    { name: 'STP', color: '#14b8a6' },
    { name: 'Reuse', color: '#10b981' }
  ],
  links: [
    { source: 'Fresh Water', target: 'Construction', value: 45 },
    { source: 'Fresh Water', target: 'Domestic', value: 30 },
    { source: 'Recycled Water', target: 'Construction', value: 15 },
    { source: 'Recycled Water', target: 'Landscaping', value: 10 },
    { source: 'Rainwater', target: 'Landscaping', value: 5 },
    { source: 'Domestic', target: 'STP', value: 25 },
    { source: 'STP', target: 'Reuse', value: 23 },
    { source: 'Reuse', target: 'Recycled Water', value: 23 }
  ]
};

// Waste breakdown data
export const wasteBreakdownData: ChartDataPoint[] = [
  { name: 'C&D Waste', value: 4820, percentage: 91.8, color: '#64748b' },
  { name: 'Organic Waste', value: 83, percentage: 1.6, color: '#22c55e' },
  { name: 'Recyclables', value: 240, percentage: 4.6, color: '#3b82f6' },
  { name: 'Hazardous', value: 65, percentage: 1.2, color: '#ef4444' },
  { name: 'E-Waste', value: 45, percentage: 0.8, color: '#a855f7' }
];

// Emissions data
export const emissionsData: ChartDataPoint[] = [
  { month: 'Apr', Scope1: 35, Scope2: 245, Total: 280 },
  { month: 'May', Scope1: 33, Scope2: 235, Total: 268 },
  { month: 'Jun', Scope1: 32, Scope2: 225, Total: 257 },
  { month: 'Jul', Scope1: 31, Scope2: 215, Total: 246 },
  { month: 'Aug', Scope1: 30, Scope2: 210, Total: 240 },
  { month: 'Sep', Scope1: 30, Scope2: 205, Total: 235 },
  { month: 'Oct', Scope1: 31, Scope2: 215, Total: 246 },
  { month: 'Nov', Scope1: 31, Scope2: 210, Total: 241 },
  { month: 'Dec', Scope1: 32, Scope2: 215, Total: 247 },
  { month: 'Jan', Scope1: 30, Scope2: 210, Total: 240 },
  { month: 'Feb', Scope1: 28, Scope2: 205, Total: 233 },
  { month: 'Mar', Scope1: 25, Scope2: 190, Total: 215 }
];

// Project-wise data
export const projectsData: ProjectData[] = [
  {
    id: 'birla-aurora',
    name: 'Birla Aurora',
    location: 'Santacruz, Mumbai',
    area: 125000,
    status: 'construction',
    certifications: ['IGBC Gold', 'WELL Certified'],
    energyMetrics: {
      totalEnergy: 12.5,
      energyIntensity: 0.10,
      renewableShare: 100,
      renewableEnergy: 12.5,
      sitesOnGreenPower: 1,
      powerFactor: 0.95
    },
    waterMetrics: {
      totalWaterConsumed: 78.75,
      waterIntensity: 0.63,
      recycledWater: 35,
      recycledWaterPercent: 44.4,
      rainwaterHarvested: 15,
      rainwaterPotential: 30
    },
    wasteMetrics: {
      totalWaste: 850,
      constructionDebris: 780,
      organicWaste: 15,
      hazardousWaste: 10,
      eWaste: 5,
      wasteRecycled: 663,
      diversionRate: 78
    },
    emissionsMetrics: {
      scope1: 45,
      scope2: 0,
      totalEmissions: 45,
      ghgIntensity: 0.00036,
      co2Avoided: 450,
      yearOverYearReduction: 100
    },
    materialMetrics: {
      recycledMaterialPercent: 45,
      greenMaterialPercent: 65,
      embodiedCarbon: 350,
      cementReplaced: 35,
      materialsWithEPD: 40,
      co2AvoidedByMaterials: 450
    },
    climateRiskScore: 2.5
  },
  {
    id: 'birla-niyaara',
    name: 'Birla Niyaara',
    location: 'Worli, Mumbai',
    area: 180000,
    status: 'construction',
    certifications: ['IGBC Platinum', 'EDGE Advanced'],
    energyMetrics: {
      totalEnergy: 18.0,
      energyIntensity: 0.10,
      renewableShare: 25,
      renewableEnergy: 4.5,
      sitesOnGreenPower: 0,
      powerFactor: 0.92
    },
    waterMetrics: {
      totalWaterConsumed: 108,
      waterIntensity: 0.60,
      recycledWater: 45,
      recycledWaterPercent: 41.7,
      rainwaterHarvested: 20,
      rainwaterPotential: 45
    },
    wasteMetrics: {
      totalWaste: 1200,
      constructionDebris: 1100,
      organicWaste: 20,
      hazardousWaste: 15,
      eWaste: 8,
      wasteRecycled: 960,
      diversionRate: 80
    },
    emissionsMetrics: {
      scope1: 60,
      scope2: 380,
      totalEmissions: 440,
      ghgIntensity: 0.0024,
      co2Avoided: 680,
      yearOverYearReduction: 35
    },
    materialMetrics: {
      recycledMaterialPercent: 38,
      greenMaterialPercent: 55,
      embodiedCarbon: 380,
      cementReplaced: 40,
      materialsWithEPD: 35,
      co2AvoidedByMaterials: 680
    },
    climateRiskScore: 3.2
  },
  {
    id: 'birla-vanya',
    name: 'Birla Vanya',
    location: 'Kalyan, Mumbai',
    area: 350000,
    status: 'planning',
    certifications: ['IGBC Pre-certified Gold'],
    energyMetrics: {
      totalEnergy: 28.0,
      energyIntensity: 0.08,
      renewableShare: 15,
      renewableEnergy: 4.2,
      sitesOnGreenPower: 0,
      powerFactor: 0.90
    },
    waterMetrics: {
      totalWaterConsumed: 220.5,
      waterIntensity: 0.63,
      recycledWater: 88,
      recycledWaterPercent: 40,
      rainwaterHarvested: 35,
      rainwaterPotential: 80
    },
    wasteMetrics: {
      totalWaste: 2200,
      constructionDebris: 2000,
      organicWaste: 35,
      hazardousWaste: 25,
      eWaste: 15,
      wasteRecycled: 1650,
      diversionRate: 75
    },
    emissionsMetrics: {
      scope1: 120,
      scope2: 850,
      totalEmissions: 970,
      ghgIntensity: 0.0028,
      co2Avoided: 850,
      yearOverYearReduction: 20
    },
    materialMetrics: {
      recycledMaterialPercent: 30,
      greenMaterialPercent: 45,
      embodiedCarbon: 420,
      cementReplaced: 25,
      materialsWithEPD: 25,
      co2AvoidedByMaterials: 850
    },
    climateRiskScore: 4.1
  }
];

// Smart alerts
export const smartAlerts: SmartAlert[] = [
  {
    id: 'alert-1',
    type: 'success',
    category: 'energy',
    message: 'Birla Aurora achieved 100% renewable energy target',
    timestamp: new Date('2024-03-15T10:30:00'),
    projectId: 'birla-aurora',
    actionRequired: false,
    priority: 'low'
  },
  {
    id: 'alert-2',
    type: 'warning',
    category: 'water',
    message: 'STP reuse at Worli site dropped below 75% threshold',
    timestamp: new Date('2024-03-14T14:20:00'),
    projectId: 'birla-niyaara',
    actionRequired: true,
    priority: 'medium'
  },
  {
    id: 'alert-3',
    type: 'info',
    category: 'waste',
    message: 'Monthly C&D recycling target exceeded by 15%',
    timestamp: new Date('2024-03-13T09:15:00'),
    actionRequired: false,
    priority: 'low'
  },
  {
    id: 'alert-4',
    type: 'error',
    category: 'emissions',
    message: 'PM2.5 levels exceeded 75 µg/m³ at Kalyan site',
    timestamp: new Date('2024-03-12T16:45:00'),
    projectId: 'birla-vanya',
    actionRequired: true,
    priority: 'high'
  },
  {
    id: 'alert-5',
    type: 'warning',
    category: 'material',
    message: 'GGBS substitution below 30% target in recent batch',
    timestamp: new Date('2024-03-11T11:00:00'),
    actionRequired: true,
    priority: 'medium'
  }
];

// ESG targets
export const esgTargets: ESGTarget[] = [
  {
    metric: 'Renewable Energy',
    target: 50,
    unit: '%',
    deadline: '2030',
    currentProgress: 17
  },
  {
    metric: 'Water Intensity',
    target: 0.45,
    unit: 'kL/m²',
    deadline: '2025',
    currentProgress: 0.63
  },
  {
    metric: 'Zero Waste to Landfill',
    target: 100,
    unit: '%',
    deadline: '2030',
    currentProgress: 78
  },
  {
    metric: 'Net Zero Emissions',
    target: 0,
    unit: 'tCO₂e',
    deadline: '2050',
    currentProgress: 2926
  },
  {
    metric: 'Green Building Certifications',
    target: 100,
    unit: '%',
    deadline: '2025',
    currentProgress: 100
  }
];

// Material type distribution
export const materialTypeData: ChartDataPoint[] = [
  { name: 'Concrete', value: 35, green: 12, conventional: 23 },
  { name: 'Steel', value: 25, green: 8, conventional: 17 },
  { name: 'Glass', value: 15, green: 10, conventional: 5 },
  { name: 'Wood', value: 10, green: 9, conventional: 1 },
  { name: 'Aluminum', value: 8, green: 3, conventional: 5 },
  { name: 'Others', value: 7, green: 3, conventional: 4 }
];

// Site-wise performance heatmap data
export const performanceHeatmapData = [
  { site: 'Birla Aurora', energy: 95, water: 88, waste: 78, emissions: 98, materials: 85 },
  { site: 'Birla Niyaara', energy: 75, water: 82, waste: 80, emissions: 65, materials: 78 },
  { site: 'Birla Vanya', energy: 65, water: 75, waste: 75, emissions: 55, materials: 65 },
  { site: 'Birla Navya', energy: 80, water: 85, waste: 82, emissions: 70, materials: 72 },
  { site: 'Birla Alokya', energy: 70, water: 78, waste: 85, emissions: 60, materials: 68 }
];