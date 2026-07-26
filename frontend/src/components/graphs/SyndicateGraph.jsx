import React, { useState } from 'react';

export default function SyndicateGraph({ graphData }) {
  const [selectedNode, setSelectedNode] = useState(null);

  if (!graphData || !graphData.nodes) {
    return <div className="p-4 text-center text-gray-500">Loading Network Graph...</div>;
  }

  // Precomputed node positions for 8 authentic rowdies/dons
  const positions = [
    { x: 45, y: 25 }, // CRIM-001: Wilson Garden Naga
    { x: 25, y: 20 }, // CRIM-002: Cycle Ravi
    { x: 70, y: 30 }, // CRIM-003: Double Meter Mohan
    { x: 50, y: 60 }, // CRIM-004: Bomb Naga
    { x: 18, y: 65 }, // CRIM-005: Kunigal Giri
    { x: 80, y: 65 }, // CRIM-006: Slum Bharatha
    { x: 30, y: 75 }, // CRIM-007: Welding Kumar
    { x: 72, y: 80 }  // CRIM-008: Hebbagodi Satisha
  ];

  return (
    <div className="bg-surface-container border border-outline-variant rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-on-surface">Authenticated Karnataka Syndicate Graph</h3>
          <p className="text-xs text-on-surface-variant">NetworkX Centrality Analysis & Leadership Bridges (SCRB 2026 Database)</p>
        </div>
        <div className="flex gap-2">
          {graphData.top_syndicate_bridges?.map((bridge, idx) => (
            <span key={idx} className="bg-red-500/10 text-red-700 text-xs px-2.5 py-1 rounded-full font-semibold border border-red-500/20">
              👑 Key Bridge: {bridge}
            </span>
          ))}
        </div>
      </div>

      <div className="relative w-full h-[480px] bg-slate-950 rounded-lg overflow-hidden border border-slate-800 flex items-center justify-center">
        {/* SVG Edges */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {graphData.edges.map((edge, idx) => {
            const sourceIdx = graphData.nodes.findIndex(n => n.id === edge.source);
            const targetIdx = graphData.nodes.findIndex(n => n.id === edge.target);
            if (sourceIdx === -1 || targetIdx === -1) return null;

            const x1 = `${positions[sourceIdx % positions.length].x}%`;
            const y1 = `${positions[sourceIdx % positions.length].y}%`;
            const x2 = `${positions[targetIdx % positions.length].x}%`;
            const y2 = `${positions[targetIdx % positions.length].y}%`;

            return (
              <g key={idx}>
                <line
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#ef4444"
                  strokeWidth={edge.weight * 2.5}
                  strokeDasharray={edge.relationship === 'FINANCIAL_NEXUS' ? '4,4' : undefined}
                  opacity={0.75}
                />
              </g>
            );
          })}
        </svg>

        {/* Nodes */}
        {graphData.nodes.map((node, idx) => {
          const pos = positions[idx % positions.length];
          const isSelected = selectedNode?.id === node.id;
          const isBoss = node.category?.includes('Boss') || node.risk_score > 0.90;

          return (
            <div
              key={node.id}
              onClick={() => setSelectedNode(node)}
              style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-200 ${
                isSelected ? 'scale-125 z-30 ring-4 ring-amber-400' : 'hover:scale-110 z-20'
              }`}
            >
              <div className={`flex flex-col items-center justify-center rounded-full text-white font-bold text-xs shadow-lg p-2 border-2 ${
                isBoss ? 'w-14 h-14 bg-red-700 border-red-400' : 'w-12 h-12 bg-slate-700 border-slate-500'
              }`}>
                {node.id.substring(5)}
              </div>
              <div className="mt-1 bg-slate-900/95 text-slate-100 text-[10px] px-2 py-0.5 rounded shadow text-center whitespace-nowrap border border-slate-700 font-semibold">
                {node.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Node Details Drawer */}
      {selectedNode && (
        <div className="mt-4 p-4 bg-slate-900 border border-slate-800 rounded-lg text-slate-200 space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-sm text-white flex items-center gap-2">
              👤 {selectedNode.label} ({selectedNode.id})
              <span className="bg-red-900/50 text-red-300 text-xs px-2 py-0.5 rounded border border-red-700">
                {selectedNode.category}
              </span>
            </h4>
            <button
              onClick={() => setSelectedNode(null)}
              className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1 rounded font-medium"
            >
              Close
            </button>
          </div>
          <p className="text-xs text-slate-300">
            <strong>Operative Area:</strong> {selectedNode.district} | <strong>Betweenness Centrality:</strong> <span className="text-amber-400 font-mono font-bold">{selectedNode.centrality}</span> | <strong>Risk Rating:</strong> <span className="text-red-400 font-mono font-bold">{Math.round(selectedNode.risk_score * 100)}%</span>
          </p>
          <p className="text-xs text-slate-300 bg-slate-950 p-2 rounded border border-slate-800">
            <strong>Background & Activities:</strong> {selectedNode.background}
          </p>
          <p className="text-xs text-amber-300 font-medium">
            <strong>2026 Police Status:</strong> {selectedNode.status}
          </p>
        </div>
      )}
    </div>
  );
}
