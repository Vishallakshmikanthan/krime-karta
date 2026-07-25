import React, { useState, useEffect } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';
import GeospatialMap from '../components/maps/GeospatialMap';
import ErrorBoundary from '../components/layout/ErrorBoundary';
import { fetchHotspots } from '../services/apiClient';

export default function GeospatialIntelligenceMap() {
  const [hotspots, setHotspots] = useState([]);
  const [selectedCell, setSelectedCell] = useState(null);

  useEffect(() => {
    fetchHotspots('Bengaluru Central', 48).then((res) => {
      if (res && res.predictions) setHotspots(res.predictions);
    });
  }, []);

  const activeHotspot = hotspots.find(h => h.cell_id === selectedCell);

  return (
    <div className="flex h-screen bg-surface text-on-surface font-body-md overflow-hidden antialiased">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header title="Geospatial Intelligence Map" />

        <main className="flex-1 flex flex-col p-6 bg-surface-bright h-full relative">
          <div className="bg-surface-container-lowest border border-outline-variant p-4 rounded-xl shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4 shrink-0">
            <div>
              <h2 className="text-xl font-bold text-on-surface flex items-center gap-2">
                🗺️ Crime Risk Hotspots
              </h2>
              <p className="text-sm text-on-surface-variant">Live XGBoost spatio-temporal risk forecasting and anomaly clustering.</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                <span className="w-3 h-3 rounded-full bg-[#ba1a1a]"></span> Critical
                <span className="w-3 h-3 rounded-full bg-[#f97316]"></span> High
                <span className="w-3 h-3 rounded-full bg-[#eab308]"></span> Medium
              </div>
              <button className="bg-primary-container text-on-primary-container text-sm font-bold px-4 py-2 rounded shadow-sm hover:bg-primary hover:text-on-primary transition-colors">
                Run Model Inference
              </button>
            </div>
          </div>

          {/* Map Area */}
          <div className="flex-1 bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm relative overflow-hidden h-[calc(100vh-180px)]">
            <ErrorBoundary>
              <GeospatialMap hotspots={hotspots} onSelectCell={setSelectedCell} />
            </ErrorBoundary>
          </div>

          {/* Side Panel for Selected Hotspot */}
          {activeHotspot && (
            <div className="absolute top-28 right-10 w-80 bg-surface-container-lowest border border-outline-variant rounded-xl shadow-2xl p-5 z-40">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-sm font-bold text-on-surface">Target Sector: {activeHotspot.cell_id}</h3>
                <button onClick={() => setSelectedCell(null)} className="text-on-surface-variant hover:text-on-surface">✕</button>
              </div>

              <div className="space-y-3">
                <div className="bg-surface-container-low p-3 rounded border border-outline-variant flex justify-between items-center">
                  <span className="text-sm text-on-surface-variant font-bold">XGBoost Risk Score</span>
                  <span className={`text-sm font-black ${activeHotspot.risk_level === 'CRITICAL' ? 'text-error' : 'text-orange-500'}`}>
                    {Math.round(activeHotspot.risk_score * 100)}%
                  </span>
                </div>

                {activeHotspot.is_anomaly && (
                  <div className="p-2 bg-error-container text-on-error-container border border-error/20 rounded text-xs font-bold">
                    ⚠️ Detected by Isolation Forest as a severe crime spike anomaly.
                  </div>
                )}

                <div>
                  <h4 className="text-xs font-bold text-on-surface-variant mb-2">Primary SHAP Risk Vectors:</h4>
                  <ul className="text-sm text-on-surface list-disc pl-4 space-y-1">
                    {activeHotspot.top_risk_factors.map((factor, idx) => (
                      <li key={idx}>
                        {factor.factor} <span className="text-error font-bold">(+{Math.round(factor.weight * 100)}%)</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full mt-4 bg-primary text-on-primary py-2 rounded font-bold text-sm hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm">
                  Dispatch Tactical Unit ({activeHotspot.recommended_patrols} units recommended)
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
