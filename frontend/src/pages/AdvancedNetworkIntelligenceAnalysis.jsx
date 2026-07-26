import React, { useState, useEffect } from 'react';
import SyndicateGraph from '../components/graphs/SyndicateGraph';
import { fetchNetworkGraph } from '../services/apiClient';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';
import { useAppStore } from '../store/useStore';

export default function AdvancedNetworkIntelligenceAnalysis() {
  const { selectedDistrict, setSelectedDistrict } = useAppStore();
  const [graphData, setGraphData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchNetworkGraph(selectedDistrict)
      .then(res => {
        setGraphData(res);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching network graph:", err);
        setLoading(false);
      });
  }, [selectedDistrict]);

  const districts = ["Bengaluru Central", "Mysuru City", "Mangaluru", "Hubballi-Dharwad", "Belagavi"];

  return (
    <div className="flex h-screen bg-surface text-on-surface font-body-md overflow-hidden antialiased">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header title="KSP Intel Platform - Syndicate Network Analysis" />

        <main className="flex-1 overflow-y-auto p-6 flex flex-col bg-surface-bright space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shrink-0 bg-surface-container-lowest p-4 rounded-xl border border-outline-variant shadow-sm">
            <div>
              <h2 className="text-xl font-bold text-on-surface flex items-center gap-2">
                🌐 Syndicate Intelligence & NetworkX Centrality Explorer
              </h2>
              <p className="text-xs text-on-surface-variant">
                Graphing 50 authentic Karnataka rowdies & dons with dynamic betweenness centrality calculation.
              </p>
            </div>

            <div className="flex items-center gap-2 bg-surface-container-low border border-outline-variant px-3 py-2 rounded-lg">
              <span className="text-xs text-on-surface-variant font-bold uppercase tracking-wider">Target District:</span>
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="bg-transparent text-primary font-bold text-sm focus:outline-none cursor-pointer"
              >
                {districts.map(d => (
                  <option key={d} value={d} className="bg-surface text-on-surface">
                    {d}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="flex-1 min-h-[550px]">
            {loading ? (
              <div className="flex items-center justify-center h-96 bg-surface rounded-xl border border-outline-variant text-on-surface-variant font-bold animate-pulse">
                Computing NetworkX Centrality Matrix for {selectedDistrict}...
              </div>
            ) : (
              <SyndicateGraph graphData={graphData} district={selectedDistrict} />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
