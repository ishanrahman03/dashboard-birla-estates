export interface ESGMonthlyData {
  month: string;
  value: number;
}

export interface ESGKpiData {
  id: string;
  name: string;
  unit: string;
  currentValue: number;
  previousValue: number;
  change: number;
  isPositive: boolean;
  monthlyData: ESGMonthlyData[];
  insight: string;
  icon?: string;
  color?: string;
  target?: number;
  category: 'energy' | 'water' | 'waste' | 'emissions' | 'material';
}

export interface EnergyMetrics {
  totalEnergy: number; // kWh
  energyIntensity: number; // kWh/m²
  renewableShare: number; // %
  renewableEnergy: number; // MWh
  sitesOnGreenPower: number;
  powerFactor: number;
}

export interface WaterMetrics {
  totalWaterConsumed: number; // kL
  waterIntensity: number; // kL/m²
  recycledWater: number; // kL
  recycledWaterPercent: number; // %
  rainwaterHarvested: number; // kL
  rainwaterPotential: number; // kL/yr
}

export interface WasteMetrics {
  totalWaste: number; // tons
  constructionDebris: number; // tons
  organicWaste: number; // tons
  hazardousWaste: number; // tons
  eWaste: number; // tons
  wasteRecycled: number; // tons
  diversionRate: number; // %
}

export interface EmissionsMetrics {
  scope1: number; // tCO2e
  scope2: number; // tCO2e
  totalEmissions: number; // tCO2e
  ghgIntensity: number; // tCO2e/m²
  co2Avoided: number; // tons
  yearOverYearReduction: number; // %
  realTimeAQI?: number;
}

export interface MaterialMetrics {
  recycledMaterialPercent: number; // %
  greenMaterialPercent: number; // %
  embodiedCarbon: number; // kgCO2e/m²
  cementReplaced: number; // %
  materialsWithEPD: number; // %
  co2AvoidedByMaterials: number; // tons
}

export interface ProjectData {
  id: string;
  name: string;
  location: string;
  area: number; // m²
  status: 'planning' | 'construction' | 'completed';
  certifications: string[];
  energyMetrics: EnergyMetrics;
  waterMetrics: WaterMetrics;
  wasteMetrics: WasteMetrics;
  emissionsMetrics: EmissionsMetrics;
  materialMetrics: MaterialMetrics;
  climateRiskScore?: number;
  photo?: string;
}

export interface SmartAlert {
  id: string;
  type: 'success' | 'warning' | 'error' | 'info';
  category: 'energy' | 'water' | 'waste' | 'emissions' | 'material';
  message: string;
  timestamp: Date;
  projectId?: string;
  actionRequired?: boolean;
  priority: 'low' | 'medium' | 'high';
}

export interface ESGTarget {
  metric: string;
  target: number;
  unit: string;
  deadline: string;
  currentProgress: number;
}

export interface ChartDataPoint {
  name: string;
  [key: string]: string | number;
}

export interface SankeyLink {
  source: string;
  target: string;
  value: number;
}

export interface SankeyNode {
  name: string;
  color?: string;
}

export interface WaterBalanceData {
  nodes: SankeyNode[];
  links: SankeyLink[];
}

export interface FilterOptions {
  projects: string[];
  timeline: 'monthly' | 'quarterly' | 'yearly';
  scenario: 'actual' | 'target' | 'forecast';
  startDate?: string;
  endDate?: string;
}