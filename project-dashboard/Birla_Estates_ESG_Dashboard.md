
# Birla Estates ESG Dashboard Design (Based on 2023-24 ESG Report)

## A. KPIs Disclosed by Birla Estates

| Theme              | KPI now reported                                                                 | 2023-24 value                                      | Notes                                           |
|-------------------|----------------------------------------------------------------------------------|---------------------------------------------------|-------------------------------------------------|
| **Energy Consumption** | • Total energy used (kWh)  
• Energy intensity (kWh / m² constructed)  
• % energy from renewable sources  
• Renewable-energy generated/ procured (MWh)  
• Sites on 100 % green power | 85.4 GWh total  
0.04→0.02 tCO₂e / m² (proxy)  
17 % renewables; 100 % at Birla Aurora | Separate figures for FY-23 & FY-24 shown |
| **Water Consumption**  | • Total water consumed (kL)  
• Water intensity (kL / m²)  
• Recycled / reused water (kL & %)  
• Rain-water harvesting potential (kL/yr) | Intensity 0.63 kL / m²  
4.3 million L reused  
30 million L RWH potential | 100 % STP & RO-reject reuse set-ups |
| **Waste Generation**   | • Total waste generated (t)  
• Break-up – C&D, organic, hazardous, e-waste  
• Waste recycled / diverted (t & %) | 5 253 t total  
83 t organic → compost  
240 t recycled | Zero-landfill 2030 target |
| **Air Emissions**      | • Scope 1 & 2 GHG (tCO₂e)  
• GHG-intensity (tCO₂e / m²)  
• % reduction YoY  
• CO₂ avoided by green materials (t) | Scope 1 368 t; Scope 2 2 558 t  
Intensity 0.02 t/m² (-46 % YoY)  
2 440 t CO₂ avoided | Climate-risk assessments for 100 % projects |
| **Material Usage**     | • % cement replaced with GGBS / Fly-ash  
• Embodied-carbon assessment status  
• t CO₂e avoided via low-carbon materials | GGBS substitution → 2 440 t CO₂ avoided | Birla Niyaara embodied-carbon tool pilot |

## B. Recommended Dashboard Metrics

| Pillar      | KPI Cards (Always-visible) | Trend/Drill-down Charts | Smart Alerts |
|-------------|----------------------------|--------------------------|--------------|
| **Energy**  | • Total energy (kWh)  
• Renewable share %  
• Energy intensity (kWh / m²)  
• Site-level power-factor | • 12-month line chart  
• Stacked energy source bar  
• Sankey flow from source → use | • “Project X crossed 90 % RE target”  
• “Cooling-tower VFD saved 20 % this month” |
| **Water**   | • Fresh-water withdrawal (kL)  
• Recycled water %  
• RWH harvested (kL) | • Heat-map of daily usage  
• Water balance diagram | • “STP reuse dropped below 75 %”  
• “Bengaluru site at 90 % bore-well limit” |
| **Waste**   | • Total waste (t)  
• Diversion rate %  
• Organic waste composted (t) | • Waste stream pie  
• C&D reuse bar | • “C&D recycling lagging 2030 target” |
| **Emissions** | • Scope 1, 2 (tCO₂e)  
• GHG-intensity (kg CO₂e / ft²)  
• CO₂ avoided (t)  
• Real-time AQI | • YoY emissions waterfall  
• Asset risk radar | • “Worli diesel +15 % vs last week”  
• “PM2.5 spike > 75 µg/m³” |
| **Material** | • % recycled / green material  
• Embodied-carbon (kg CO₂e/m²)  
• Timber/steel with EPDs % | • Cement-substitution bar  
• Embodied-carbon trend | • “Batch-plant GGBS < 30 % today”  
• “Embodied carbon 5 % over target” |

## C. Dashboard Layout (UX Perspective)

1. **Hero Band**  
   - Four KPI cards: Energy, Water, Waste, Emissions  
   - Color-coded status (Green/Amber/Red)
   - Click-to-expand

2. **Left Rail**  
   - Filters: Project, Timeline, Unit toggle  
   - Scenario: Actual / Target / Forecast

3. **Central Canvas (Tabs)**  
   - **Overview Tab:** KPI sparkline, progress rings, top assets  
   - **Detail Tabs:** KPI gauges + charts (2-column layout)  

4. **Drill-through Views**  
   - Project details: Photo, certifications, climate-risk, O&M  

5. **Insights Drawer**  
   - AI-generated narratives: performance alerts, ROI actions  
   - Email/task-share options  

6. **Mobile Version**  
   - Vertical scroll of KPIs  
   - Floating alerts  

## D. Rationale

- KPIs directly match those Birla Estates already tracks
- Compatible with GRESB, BRSR, SBTi frameworks
- Combines snapshot for leadership with drill-down for ops
- Enables data-to-action transition with smart Agentic AI insights
- Intuitive UI for both HQ and site-level users
