import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';
import GeospatialMap from '../components/maps/GeospatialMap';
import ErrorBoundary from '../components/layout/ErrorBoundary';
import { fetchHotspots, fetchBriefing } from '../services/apiClient';

export default function DashboardOverview() {
  const [hotspots, setHotspots] = useState([]);
  const [briefing, setBriefing] = useState(null);

  useEffect(() => {
    fetchHotspots('Bengaluru City', 48).then((res) => {
      if (res && res.predictions) setHotspots(res.predictions);
    });
    fetchBriefing('Bengaluru City').then((res) => {
      if (res) setBriefing(res);
    });
  }, []);

  const kpis = {
    totalCrimesH1: '106,417',
    bengaluruIpcShare: '25.9%',
    aiRiskLevel: 'HIGH (SCRB 2026)',
    activeRowdies: 8,
    activePatrols: 1195,
    patrolFleet: 3159,
    preventiveBonds: '5,137'
  };

  const trendDays = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const trendValues = [17634, 16740, 18882, 17420, 17828, 17853];

  return (
    <div className="flex h-screen bg-surface text-on-surface font-body-md overflow-hidden antialiased">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header title="KrimeKartā Executive Dashboard — Karnataka SCRB Command Center" />

        <main className="flex-1 overflow-y-auto p-6 space-y-6 bg-surface-bright">
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
                <span className="text-[11px] font-bold uppercase tracking-wider">Logged Patrol Fleet</span>
                <span className="material-symbols-outlined text-primary text-[20px]">local_police</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-on-surface">{kpis.activePatrols}</span>
                <span className="text-xs font-bold text-on-surface-variant">of {kpis.patrolFleet} vehicles</span>
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
                  <GeospatialMap hotspots={hotspots} _district="Bengaluru City" />
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
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm h-48">
                <h3 className="text-sm font-bold text-on-surface mb-3">Monthly Cognizable Crimes (Jan – Jun 2026)</h3>
                <div className="flex items-end justify-between gap-2 h-28 pt-2 px-2">
                  {trendValues.map((val, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-1 flex-1 h-full justify-end">
                      <div
                        className="w-full bg-primary/80 hover:bg-primary rounded-t transition-all"
                        style={{ height: `${(val / 20000) * 100}%` }}
                      ></div>
                      <span className="text-[10px] text-on-surface-variant font-mono">{trendDays[idx]} ({Math.round(val/1000)}k)</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
