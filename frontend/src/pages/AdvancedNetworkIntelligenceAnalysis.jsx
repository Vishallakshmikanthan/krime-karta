import React, { useState, useEffect } from 'react';
import { useApiResource } from '../hooks/useApiResource';
import SyndicateGraph from '../components/graphs/SyndicateGraph';
import { fetchNetworkGraph } from '../services/apiClient';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';

const networkFallback = { nodes: [], edges: [] };

export default function AdvancedNetworkIntelligenceAnalysis() {
  useApiResource('/network/graph', networkFallback);
  const [graphData, setGraphData] = useState(null);

  useEffect(() => {
    fetchNetworkGraph('Bengaluru Central').then(res => setGraphData(res));
  }, []);

  return (
    <div className="flex h-screen bg-surface text-on-surface font-body-md overflow-hidden antialiased">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header title="KSP Intel Platform - Syndicate Network Analysis" />

        <main className="flex-1 overflow-y-auto p-6 flex flex-col bg-surface-bright">
          <div className="mb-4 flex items-center justify-between shrink-0">
            <h2 className="text-xl font-bold text-on-surface flex items-center gap-2">
              🌐 Syndicate Intelligence & NetworkX Centrality Explorer
            </h2>
          </div>
          
          <div className="flex-1 min-h-[500px]">
            <SyndicateGraph graphData={graphData} />
          </div>
        </main>
      </div>
    </div>
  );
}
