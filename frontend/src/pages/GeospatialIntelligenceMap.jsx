import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useApiResource } from '../hooks/useApiResource';
import GeospatialMap from '../components/maps/GeospatialMap';
import { fetchHotspots } from '../services/apiClient';

const geoFallback = { hotspots: [], alerts: [] };

const GeospatialIntelligenceMap = () => {
  useApiResource('/gis/overview', geoFallback);
  const [hotspots, setHotspots] = useState([]);

  useEffect(() => {
    fetchHotspots('Bengaluru Central', 48).then(res => {
      if (res && res.predictions) setHotspots(res.predictions);
    });
  }, []);

  return (
    <div className="bg-background text-on-background font-body-md h-screen overflow-hidden flex">
      {/* SideNavBar */}
      <nav className="hidden md:flex w-[280px] h-screen flex-col sticky top-0 bg-surface dark:bg-surface-dim border-r border-outline-variant dark:border-outline flex-shrink-0 z-50 py-md">
        <div className="px-4 mb-6 flex items-center gap-3">
          <img alt="Karnataka Police Emblem" className="w-10 h-10 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtEM3hyQX4oBXCm-UR3XFxl3gr-BR0ffkf9ljU4CACoIMpRNEEz9ZHChDXQvDqukOnRWJzPudtjMMOVbDf0wzqUY9LrINvioz-YIfhcwba7GhAAyOYwOjHK5vBg1LySvD6XysGltRxOa__xg-TY1h0fXxcd7groGCjBymGQSjoI6876EgGZmvCzoSIYEZzxF7bzdsqa1Ew_tgOow2dmvrD6tTIpzWmYpBUIJUlQJtYlKkg4vwCbbS39A"/>
          <div>
            <h1 className="font-headline-md text-lg font-bold text-primary">KrimeKartā</h1>
            <p className="text-xs text-on-surface-variant">Law Enforcement Intel</p>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto space-y-1">
          <Link className="flex items-center gap-3 px-4 py-2.5 text-on-surface-variant hover:bg-surface-container-high mx-2 rounded-lg text-sm" to="/dashboard">
            <span className="material-symbols-outlined">dashboard</span>
            <span>Dashboard</span>
          </Link>
          <Link className="flex items-center gap-3 px-4 py-2.5 bg-primary text-on-primary rounded-lg mx-2 text-sm font-semibold" to="/geospatial-map">
            <span className="material-symbols-outlined">map</span>
            <span>Crime Map</span>
          </Link>
          <Link className="flex items-center gap-3 px-4 py-2.5 text-on-surface-variant hover:bg-surface-container-high mx-2 rounded-lg text-sm" to="/strategic-analytics">
            <span className="material-symbols-outlined">query_stats</span>
            <span>Analytics</span>
          </Link>
          <Link className="flex items-center gap-3 px-4 py-2.5 text-on-surface-variant hover:bg-surface-container-high mx-2 rounded-lg text-sm" to="/ai-patrol">
            <span className="material-symbols-outlined">auto_awesome</span>
            <span>AI Patrol</span>
          </Link>
          <Link className="flex items-center gap-3 px-4 py-2.5 text-on-surface-variant hover:bg-surface-container-high mx-2 rounded-lg text-sm" to="/advanced-network">
            <span className="material-symbols-outlined">hub</span>
            <span>Network Analysis</span>
          </Link>
          <Link className="flex items-center gap-3 px-4 py-2.5 text-on-surface-variant hover:bg-surface-container-high mx-2 rounded-lg text-sm" to="/national-crime-records">
            <span className="material-symbols-outlined">description</span>
            <span>Records</span>
          </Link>
        </div>
      </nav>

      {/* Main Map View Area */}
      <main className="flex-1 h-full w-full p-4 overflow-y-auto bg-surface-container flex flex-col">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-xl font-bold text-on-surface flex items-center gap-2">
            🗺️ Geospatial Intelligence Map — Bengaluru Central
            <span className="bg-red-500/10 text-red-600 text-xs px-2.5 py-1 rounded font-semibold border border-red-500/20">
              XGBoost Spatial Heatmap Active
            </span>
          </h2>
          <Link to="/ai-patrol" className="bg-primary text-on-primary text-xs font-semibold px-3 py-1.5 rounded flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">local_police</span> Patrol Route Generator
          </Link>
        </div>
        <div className="flex-1 w-full h-full min-h-[500px]">
          <GeospatialMap hotspots={hotspots} _district="Bengaluru Central" />
        </div>
      </main>
    </div>
  );
};

export default GeospatialIntelligenceMap;
