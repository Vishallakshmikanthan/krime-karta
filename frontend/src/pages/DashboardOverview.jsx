import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';
import GeospatialMap from '../components/maps/GeospatialMap';
import ErrorBoundary from '../components/layout/ErrorBoundary';
import { fetchHotspots, fetchBriefing } from '../services/apiClient';
import { useAppStore } from '../store/useStore';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export default function DashboardOverview() {
  const [hotspots, setHotspots] = useState([]);
  const [briefing, setBriefing] = useState(null);
  const { selectedDistrict } = useAppStore();

  useEffect(() => {
    fetchHotspots(selectedDistrict, 48).then((res) => {
      if (res && res.predictions) setHotspots(res.predictions);
    });
    fetchBriefing(selectedDistrict).then((res) => {
      if (res) setBriefing(res);
    });
  }, [selectedDistrict]);

  const kpis = {
    totalCrimesH1: '106,417',
    bengaluruIpcShare: '25.9%',
    aiRiskLevel: 'HIGH (SCRB 2026)',
    activeRowdies: 8,
    activePatrols: 1195,
    patrolFleet: 3159,
    preventiveBonds: '5,137'
  };

  const chartData = [
    { name: 'Jan', value: 17634 },
    { name: 'Feb', value: 16740 },
    { name: 'Mar', value: 18882 },
    { name: 'Apr', value: 17420 },
    { name: 'May', value: 17828 },
    { name: 'Jun', value: 17853 },
  ];

  return (
    <div className="flex h-screen bg-surface text-on-surface font-body-md overflow-hidden antialiased">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header title="KrimeKartā Executive Dashboard — Karnataka SCRB Command Center" />

        <main className="flex-1 overflow-y-auto p-6 relative z-0 flex flex-col bg-surface-bright">
          {/* Background Emblems */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-[-1]"
            style={{
              backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Seal_of_Karnataka.svg/1200px-Seal_of_Karnataka.svg.png'), url('https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Karnataka_Police_Logo.svg/1200px-Karnataka_Police_Logo.svg.png')`,
              backgroundPosition: 'left 5% center, right 5% center',
              backgroundRepeat: 'no-repeat, no-repeat',
              backgroundSize: '400px, 450px'
            }}
          />
          
          <div className="space-y-6 flex-1 flex flex-col">
            {/* KPI Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between text-on-surface-variant mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider">H1 2026 State Crimes</span>
                <span className="material-symbols-outlined text-primary text-[20px]">gavel</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-on-surface">{kpis.totalCrimesH1}</span>
                <span className="text-xs font-bold text-error flex items-center">
                  71.1K IPC + 35.3K SLL
                </span>
              </div>
            </div>

            <div className="bg-error-container border border-error/20 rounded-xl p-4 shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div className="flex items-center justify-between text-on-error-container mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider">State AI Risk Index</span>
                <span className="material-symbols-outlined text-error text-[20px]">warning</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-error">{kpis.aiRiskLevel}</span>
                <span className="text-[10px] text-on-error-container/70 font-mono">Blr IPC Share: {kpis.bengaluruIpcShare}</span>
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between text-on-surface-variant mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider">Active Tactical & Patrol Units</span>
                <span className="material-symbols-outlined text-primary text-[20px]">local_police</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-on-surface">{kpis.activePatrols}</span>
                <span className="text-xs font-bold text-on-surface-variant">of {kpis.patrolFleet} deployed (KSRP/CAR)</span>
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between text-on-surface-variant mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider">BNSS 126-129 Rowdy Bonds</span>
                <span className="material-symbols-outlined text-primary text-[20px]">task_alt</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-on-surface">{kpis.preventiveBonds}</span>
                <span className="text-xs font-bold text-primary flex items-center">
                  Monthly Rowdy Sheeter Bonds
                </span>
              </div>
            </div>
          </div>

          {/* Main Content: Real GIS Map & Trends */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Real GIS Leaflet Map (Left Column) */}
            <div className="lg:col-span-7 bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm flex flex-col h-[550px]">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-base font-bold text-on-surface flex items-center gap-2">
                  🗺️ Live Geospatial Hotspot Map (Bengaluru City & District Networks)
                </h3>
                <Link to="/geospatial-map" className="text-xs text-primary hover:underline font-bold flex items-center gap-1">
                  Full Map View →
                </Link>
              </div>
              <div className="flex-1 w-full relative rounded-lg overflow-hidden border border-outline-variant z-10">
                <ErrorBoundary>
                  <GeospatialMap hotspots={hotspots} _district={selectedDistrict} />
                </ErrorBoundary>
              </div>
            </div>

            {/* AI Executive Intelligence Briefing & Trends (Right Column) */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between h-[550px]">
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm flex-1 flex flex-col overflow-hidden">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-sm font-bold text-on-surface flex items-center gap-2">
                    🤖 Gemini 2.0 Flash SCRB Executive Briefing
                  </h3>
                  <span className="text-[10px] bg-primary-container text-on-primary-container font-bold px-2 py-0.5 rounded">
                    SCRB 2026 INTEL
                  </span>
                </div>

                {briefing ? (
                  <div className="space-y-3 text-xs overflow-y-auto pr-2 flex-1">
                    <p className="text-on-surface bg-surface-container-low p-3 rounded-lg border border-outline-variant font-body leading-relaxed">
                      {briefing.executive_summary}
                    </p>

                    <div className="mt-3">
                      <span className="text-[10px] uppercase font-bold text-on-surface-variant block mb-2">
                        State Commander Directives:
                      </span>
                      <ul className="space-y-1.5 list-disc pl-4 text-on-surface">
                        {briefing.actionable_directives.map((dir, idx) => (
                          <li key={idx} className="leading-tight">{dir}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-on-surface-variant">Loading Authenticated SCRB Briefing...</p>
                )}
              </div>

              {/* Monthly Crime Trends Chart */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm h-48 flex flex-col">
                <h3 className="text-sm font-bold text-on-surface mb-3">Monthly Cognizable Crimes (Jan – Jun 2026)</h3>
                <div className="flex-1 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
                      <XAxis dataKey="name" tick={{ fontSize: 10, fill: '#6b7280' }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fontSize: 10, fill: '#6b7280' }} axisLine={false} tickLine={false} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                        itemStyle={{ color: '#fff' }}
                      />
                      <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                        {chartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={index === chartData.length - 1 ? '#ba1a1a' : '#0ea5e9'} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          {/* Police Team Status Footer */}
          <div className="bg-surface-container-low border border-outline-variant rounded-lg p-3 shadow-sm mt-auto flex items-center gap-4 shrink-0">
            <span className="material-symbols-outlined text-primary animate-pulse">radio</span>
            <span className="font-bold text-sm whitespace-nowrap text-on-surface">LIVE DISPATCH:</span>
            <div className="flex-1 overflow-hidden">
              <marquee className="text-sm text-on-surface-variant font-medium pt-1" scrollamount="5">
                🟢 CCB Unit Alpha - Deployed in Sector 4 | 🟢 ARS Team Bravo - Surveillance on Rajan Varma | 🔴 KSRP Battalion 2 - Responding to Rioting at Hubballi | 🟢 Garuda Force - Patrolling NH-44 | 🟡 Traffic Intel - Heavy congestion at Silk Board, routing patrols...
              </marquee>
            </div>
          </div>

          </div>
        </main>
      </div>
    </div>
  );
}
