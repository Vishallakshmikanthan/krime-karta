import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';
import GeospatialMap from '../components/maps/GeospatialMap';
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
    <div className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden font-sans">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header title="KrimeKartā Executive Dashboard" />

        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* KPI Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider">Total Incidents (24h)</span>
                <span className="material-symbols-outlined text-amber-400 text-[20px]">gavel</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-white">{kpis.totalCrimes24h}</span>
                <span className="text-xs font-bold text-red-400 flex items-center">
                  ↑ {kpis.crimeChangePct}% vs prev wk
                </span>
              </div>
            </div>

            <div className="bg-slate-900 border border-red-500/40 rounded-xl p-4 shadow-sm flex flex-col justify-between relative overflow-hidden bg-red-950/10">
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-red-400">AI Risk Assessment</span>
                <span className="material-symbols-outlined text-red-400 text-[20px]">warning</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-red-400">{kpis.aiRiskLevel}</span>
                <span className="text-[10px] text-slate-400 font-mono">XGBoost Score: 0.88</span>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider">Active Patrol Units</span>
                <span className="material-symbols-outlined text-emerald-400 text-[20px]">local_police</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-white">{kpis.activePatrols}</span>
                <span className="text-xs font-bold text-slate-400">of {kpis.patrolCapacity} assigned</span>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider">Cases Resolved</span>
                <span className="material-symbols-outlined text-indigo-400 text-[20px]">task_alt</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-white">{kpis.resolvedCases}</span>
                <span className="text-xs font-bold text-emerald-400 flex items-center">
                  ↑ {kpis.resolvedChangePct}% clearance
                </span>
              </div>
            </div>
          </div>

          {/* Main Content: Real GIS Map & Trends */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Real GIS Leaflet Map (Left Column) */}
            <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm flex flex-col">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  🗺️ Live Geospatial Hotspot Map (Bengaluru Central)
                </h3>
                <Link to="/geospatial-map" className="text-xs text-amber-400 hover:underline font-bold flex items-center gap-1">
                  Full Map View →
                </Link>
              </div>
              <div className="flex-1 min-h-[420px] rounded-lg overflow-hidden border border-slate-800">
                <GeospatialMap hotspots={hotspots} _district="Bengaluru Central" />
              </div>
            </div>

            {/* AI Executive Intelligence Briefing & Trends (Right Column) */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    🤖 Gemini 2.0 Flash Executive Briefing
                  </h3>
                  <span className="text-[10px] bg-indigo-500/20 text-indigo-300 font-bold px-2 py-0.5 rounded">
                    LIVE INTEL
                  </span>
                </div>

                {briefing ? (
                  <div className="space-y-3 text-xs">
                    <p className="text-slate-300 bg-slate-950/70 p-3 rounded-lg border border-slate-800 font-body leading-relaxed">
                      {briefing.executive_summary}
                    </p>

                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                        Commander Operational Directives:
                      </span>
                      <ul className="space-y-1.5 list-disc pl-4 text-slate-200">
                        {briefing.actionable_directives.map((dir, idx) => (
                          <li key={idx}>{dir}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-slate-400">Loading AI Briefing...</p>
                )}
              </div>

              {/* 7-Day Crime Trends Chart */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm">
                <h3 className="text-sm font-bold text-white mb-3">Weekly Crime Volume Trend</h3>
                <div className="flex items-end justify-between gap-2 h-32 pt-4 px-2">
                  {trendValues.map((val, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-1 flex-1">
                      <div
                        className="w-full bg-red-600/80 hover:bg-red-500 rounded-t transition-all"
                        style={{ height: `${(val / 80) * 100}%` }}
                      ></div>
                      <span className="text-[10px] text-slate-400 font-mono">{trendDays[idx]}</span>
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
