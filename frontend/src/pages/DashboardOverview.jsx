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
    fetchHotspots('Bengaluru Central', 48).then((res) => {
      if (res && res.predictions) setHotspots(res.predictions);
    });
    fetchBriefing('Bengaluru Central').then((res) => {
      if (res) setBriefing(res);
    });
  }, []);

  const kpis = {
    totalCrimes24h: 342,
    crimeChangePct: 14.2,
    aiRiskLevel: 'ELEVATED',
    activePatrols: 24,
    patrolCapacity: 30,
    resolvedCases: 289,
    resolvedChangePct: 8.5
  };

  const trendDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const trendValues = [42, 38, 55, 48, 62, 75, 68];

  return (
    <div className="flex h-screen bg-surface text-on-surface font-body-md overflow-hidden antialiased">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header title="KrimeKartā Executive Dashboard" />

        <main className="flex-1 overflow-y-auto p-6 space-y-6 bg-surface-bright">
          {/* KPI Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between text-on-surface-variant mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider">Total Incidents (24h)</span>
                <span className="material-symbols-outlined text-primary text-[20px]">gavel</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-on-surface">{kpis.totalCrimes24h}</span>
                <span className="text-xs font-bold text-error flex items-center">
                  ↑ {kpis.crimeChangePct}% vs prev wk
                </span>
              </div>
            </div>

            <div className="bg-error-container border border-error/20 rounded-xl p-4 shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div className="flex items-center justify-between text-on-error-container mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider">AI Risk Assessment</span>
                <span className="material-symbols-outlined text-error text-[20px]">warning</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-error">{kpis.aiRiskLevel}</span>
                <span className="text-[10px] text-on-error-container/70 font-mono">XGBoost Score: 0.88</span>
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between text-on-surface-variant mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider">Active Patrol Units</span>
                <span className="material-symbols-outlined text-primary text-[20px]">local_police</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-on-surface">{kpis.activePatrols}</span>
                <span className="text-xs font-bold text-on-surface-variant">of {kpis.patrolCapacity} assigned</span>
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between text-on-surface-variant mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider">Cases Resolved</span>
                <span className="material-symbols-outlined text-primary text-[20px]">task_alt</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-on-surface">{kpis.resolvedCases}</span>
                <span className="text-xs font-bold text-primary flex items-center">
                  ↑ {kpis.resolvedChangePct}% clearance
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
                  🗺️ Live Geospatial Hotspot Map (Bengaluru Central)
                </h3>
                <Link to="/geospatial-map" className="text-xs text-primary hover:underline font-bold flex items-center gap-1">
                  Full Map View →
                </Link>
              </div>
              <div className="flex-1 w-full relative rounded-lg overflow-hidden border border-outline-variant z-10">
                <ErrorBoundary>
                  <GeospatialMap hotspots={hotspots} _district="Bengaluru Central" />
                </ErrorBoundary>
              </div>
            </div>

            {/* AI Executive Intelligence Briefing & Trends (Right Column) */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between h-[550px]">
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm flex-1 flex flex-col overflow-hidden">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-sm font-bold text-on-surface flex items-center gap-2">
                    🤖 Gemini 2.0 Flash Executive Briefing
                  </h3>
                  <span className="text-[10px] bg-primary-container text-on-primary-container font-bold px-2 py-0.5 rounded">
                    LIVE INTEL
                  </span>
                </div>

                {briefing ? (
                  <div className="space-y-3 text-xs overflow-y-auto pr-2 flex-1">
                    <p className="text-on-surface bg-surface-container-low p-3 rounded-lg border border-outline-variant font-body leading-relaxed">
                      {briefing.executive_summary}
                    </p>

                    <div className="mt-4">
                      <span className="text-[10px] uppercase font-bold text-on-surface-variant block mb-2">
                        Commander Operational Directives:
                      </span>
                      <ul className="space-y-2 list-disc pl-4 text-on-surface">
                        {briefing.actionable_directives.map((dir, idx) => (
                          <li key={idx} className="leading-tight">{dir}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-on-surface-variant">Loading AI Briefing...</p>
                )}
              </div>

              {/* 7-Day Crime Trends Chart */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm h-48">
                <h3 className="text-sm font-bold text-on-surface mb-3">Weekly Crime Volume Trend</h3>
                <div className="flex items-end justify-between gap-2 h-28 pt-2 px-2">
                  {trendValues.map((val, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-1 flex-1 h-full justify-end">
                      <div
                        className="w-full bg-primary/80 hover:bg-primary rounded-t transition-all"
                        style={{ height: `${(val / 80) * 100}%` }}
                      ></div>
                      <span className="text-[10px] text-on-surface-variant font-mono">{trendDays[idx]}</span>
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
