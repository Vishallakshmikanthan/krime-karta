import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useApiResource } from '../hooks/useApiResource';
import SyndicateGraph from '../components/graphs/SyndicateGraph';
import { fetchNetworkGraph } from '../services/apiClient';

const networkFallback = { nodes: [], edges: [] };

const AdvancedNetworkIntelligenceAnalysis = () => {
  useApiResource('/network/graph', networkFallback);
  const [graphData, setGraphData] = useState(null);

  useEffect(() => {
    fetchNetworkGraph('Bengaluru Central').then(res => setGraphData(res));
  }, []);

  return (
    <div className="bg-surface text-on-surface font-body-md min-h-screen flex flex-col antialiased">
      {/* TopAppBar */}
      <header className="bg-surface border-b border-outline-variant flex justify-between items-center w-full px-4 h-16 shrink-0 z-50">
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="text-primary font-bold text-lg">KSP Intel Platform</Link>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Link to="/geospatial-map" className="hover:text-primary">Crime Map</Link>
          <Link to="/advanced-network" className="font-bold text-primary">Syndicate Network</Link>
          <Link to="/ai-patrol" className="hover:text-primary">AI Patrol</Link>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden h-[calc(100vh-64px)]">
        {/* Navigation Sidebar */}
        <nav className="hidden md:flex flex-col py-4 bg-surface-container-low w-[240px] border-r border-outline-variant shrink-0">
          <div className="px-4 mb-4 font-bold text-primary text-base">Syndicate Explorer</div>
          <div className="space-y-1 px-2">
            <Link className="flex items-center gap-2 px-3 py-2 text-sm text-on-surface hover:bg-surface-container-high rounded" to="/dashboard">
              <span className="material-symbols-outlined text-[18px]">dashboard</span> Dashboard
            </Link>
            <Link className="flex items-center gap-2 px-3 py-2 text-sm text-on-surface hover:bg-surface-container-high rounded" to="/geospatial-map">
              <span className="material-symbols-outlined text-[18px]">map</span> Crime Map
            </Link>
            <Link className="flex items-center gap-2 px-3 py-2 text-sm bg-primary text-on-primary font-semibold rounded" to="/advanced-network">
              <span className="material-symbols-outlined text-[18px]">hub</span> Network Analysis
            </Link>
            <Link className="flex items-center gap-2 px-3 py-2 text-sm text-on-surface hover:bg-surface-container-high rounded" to="/ai-patrol">
              <span className="material-symbols-outlined text-[18px]">auto_awesome</span> AI Patrol
            </Link>
          </div>
        </nav>

        {/* Network Graph Container */}
        <main className="flex-1 bg-surface-bright p-6 overflow-y-auto flex flex-col">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-on-surface flex items-center gap-2">
              🌐 Syndicate Intelligence & NetworkX Centrality Explorer
            </h2>
          </div>
          <div className="flex-1">
            <SyndicateGraph graphData={graphData} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdvancedNetworkIntelligenceAnalysis;
