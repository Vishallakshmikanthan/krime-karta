import React, { useState, useEffect, useRef, useMemo } from 'react';

export default function SyndicateGraph({ graphData, district }) {
  const canvasRef = useRef(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('SPOTLIGHT'); // 'SPOTLIGHT' or 'FILTER'
  const [draggingNode, setDraggingNode] = useState(null);

  // Parse nodes & edges from props
  const { nodesData, edgesData } = useMemo(() => {
    if (!graphData || !graphData.nodes) return { nodesData: [], edgesData: [] };

    let nodes = graphData.nodes;
    let edges = graphData.edges;

    if (viewMode === 'FILTER' && district && district !== 'ALL') {
      nodes = nodes.filter(n => n.isDistrictMatch);
      const activeIds = new Set(nodes.map(n => n.id));
      edges = edges.filter(e => activeIds.has(e.source) && activeIds.has(e.target));
    }

    return { nodesData: nodes, edgesData: edges };
  }, [graphData, district, viewMode]);

  // Filtered nodes by search
  const filteredNodes = useMemo(() => {
    if (!searchQuery.trim()) return nodesData;
    return nodesData.filter(n => 
      n.label.toLowerCase().includes(searchQuery.toLowerCase()) || 
      (n.alias && n.alias.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [nodesData, searchQuery]);

  // Force simulation physics state
  const physicsNodesRef = useRef([]);
  const animFrameRef = useRef(null);
  const mousePosRef = useRef({ x: 0, y: 0 });

  // Initialize physics nodes
  useEffect(() => {
    if (!filteredNodes.length) return;

    const width = 1000;
    const height = 650;
    const center = { x: width / 2, y: height / 2 };

    physicsNodesRef.current = filteredNodes.map((n, idx) => {
      const angle = (idx / filteredNodes.length) * 2 * Math.PI;
      const radius = 120 + (idx % 3) * 80;
      return {
        ...n,
        x: center.x + radius * Math.cos(angle) + (Math.random() - 0.5) * 40,
        y: center.y + radius * Math.sin(angle) + (Math.random() - 0.5) * 40,
        vx: 0,
        vy: 0,
        radius: n.category === 'Syndicate Boss' ? 10 : 7
      };
    });
  }, [filteredNodes]);

  // Main Canvas Render & Physics Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let isRunning = true;

    const nodeMap = {};
    physicsNodesRef.current.forEach(n => { nodeMap[n.id] = n; });

    // Pre-calculate edge connections for fast lookup
    const connectedPairs = new Set();
    edgesData.forEach(e => {
      connectedPairs.add(`${e.source}-${e.target}`);
      connectedPairs.add(`${e.target}-${e.source}`);
    });

    const activeNodeId = hoveredNode?.id || selectedNode?.id;

    const stepPhysicsAndRender = () => {
      if (!isRunning) return;

      const width = canvas.width;
      const height = canvas.height;
      const center = { x: width / 2, y: height / 2 };

      const nodes = physicsNodesRef.current;

      // 1. Force Physics Simulation Step
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];

        // Central gravity pull
        const dxCenter = center.x - n1.x;
        const dyCenter = center.y - n1.y;
        n1.vx += dxCenter * 0.0004;
        n1.vy += dyCenter * 0.0004;

        // Node-to-node repulsion
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n2.x - n1.x;
          const dy = n2.y - n1.y;
          const distSq = dx * dx + dy * dy + 0.1;
          const dist = Math.sqrt(distSq);

          if (dist < 220) {
            const force = (220 - dist) / dist * 0.25;
            const fx = (dx / dist) * force;
            const fy = (dy / dist) * force;

            n1.vx -= fx;
            n1.vy -= fy;
            n2.vx += fx;
            n2.vy += fy;
          }
        }
      }

      // Spring attraction along edges
      edgesData.forEach(e => {
        const n1 = nodeMap[e.source];
        const n2 = nodeMap[e.target];
        if (n1 && n2) {
          const dx = n2.x - n1.x;
          const dy = n2.y - n1.y;
          const dist = Math.sqrt(dx * dx + dy * dy) + 0.1;
          const desiredDist = 110;
          const force = (dist - desiredDist) * 0.003;

          const fx = (dx / dist) * force;
          const fy = (dy / dist) * force;

          n1.vx += fx;
          n1.vy += fy;
          n2.vx -= fx;
          n2.vy -= fy;
        }
      });

      // Update positions and apply friction
      nodes.forEach(n => {
        if (draggingNode && draggingNode.id === n.id) {
          n.x = mousePosRef.current.x;
          n.y = mousePosRef.current.y;
          n.vx = 0;
          n.vy = 0;
        } else {
          n.vx *= 0.86;
          n.vy *= 0.86;
          n.x += n.vx;
          n.y += n.vy;

          // Boundary bounds
          n.x = Math.max(30, Math.min(width - 30, n.x));
          n.y = Math.max(30, Math.min(height - 30, n.y));
        }
      });

      // 2. Render Canvas
      ctx.clearRect(0, 0, width, height);

      // Deep obsidian background
      const bgGrad = ctx.createRadialGradient(center.x, center.y, 50, center.x, center.y, width / 1.2);
      bgGrad.addColorStop(0, '#fcf9f8');
      bgGrad.addColorStop(1, '#f6f3f2');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Subtle background constellation radar circles
      ctx.strokeStyle = '#e5e2e1';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(center.x, center.y, 140, 0, Math.PI * 2);
      ctx.arc(center.x, center.y, 260, 0, Math.PI * 2);
      ctx.arc(center.x, center.y, 380, 0, Math.PI * 2);
      ctx.stroke();

      // Render Edges
      edgesData.forEach(e => {
        const n1 = nodeMap[e.source];
        const n2 = nodeMap[e.target];
        if (!n1 || !n2) return;

        const isConnectedToActive = activeNodeId && (e.source === activeNodeId || e.target === activeNodeId);
        const isDimmed = activeNodeId && !isConnectedToActive;

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(n1.x, n1.y);
        ctx.lineTo(n2.x, n2.y);

        if (isConnectedToActive) {
          ctx.strokeStyle = '#8c1d18';
          ctx.lineWidth = 2.5;
          ctx.globalAlpha = 0.95;
          ctx.shadowColor = '#8c1d18';
          ctx.shadowBlur = 8;
        } else if (isDimmed) {
          ctx.strokeStyle = '#dfbfbb';
          ctx.lineWidth = 0.8;
          ctx.globalAlpha = 0.25;
        } else {
          ctx.strokeStyle = (n1.isDistrictMatch || n2.isDistrictMatch) ? '#8c1d18' : '#645e4c';
          ctx.lineWidth = 1.2;
          ctx.globalAlpha = 0.45;
        }

        ctx.stroke();
        ctx.restore();
      });

      // Render Nodes
      nodes.forEach(n => {
        const isSelected = selectedNode?.id === n.id;
        const isHovered = hoveredNode?.id === n.id;
        const isConnected = activeNodeId && (n.id === activeNodeId || connectedPairs.has(`${activeNodeId}-${n.id}`));
        const isDimmed = activeNodeId && !isConnected;

        ctx.save();
        ctx.globalAlpha = isDimmed ? 0.25 : 1.0;

        // Outer District Pulsing Aura
        if (n.isDistrictMatch && district !== 'ALL') {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius + 7, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(140, 29, 24, 0.1)';
          ctx.fill();
          ctx.strokeStyle = '#8c1d18';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        // Selected / Hovered Highlight Aura
        if (isSelected || isHovered) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius + 9, 0, Math.PI * 2);
          ctx.strokeStyle = '#e0b14f';
          ctx.lineWidth = 2.5;
          ctx.stroke();
        }

        // Glowing Node Body
        ctx.beginPath();
        ctx.arc(n.x, n.y, isSelected || isHovered ? n.radius + 3 : n.radius, 0, Math.PI * 2);
        const nodeColor = n.category === 'Syndicate Boss' ? '#8c1d18' : (n.isDistrictMatch ? '#6b0105' : '#645e4c');
        ctx.fillStyle = nodeColor;
        ctx.shadowColor = nodeColor;
        ctx.shadowBlur = isSelected || isHovered ? 16 : 10;
        ctx.fill();

        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Node Label Text
        ctx.shadowBlur = 0;
        ctx.font = isSelected || isHovered ? 'bold 11px Inter, sans-serif' : '10px Inter, sans-serif';
        ctx.fillStyle = isSelected || isHovered ? '#8c1d18' : (n.isDistrictMatch ? '#1b1b1c' : '#58413e');
        ctx.fillText(n.alias || n.label, n.x + n.radius + 5, n.y + 3);

        ctx.restore();
      });

      animFrameRef.current = requestAnimationFrame(stepPhysicsAndRender);
    };

    animFrameRef.current = requestAnimationFrame(stepPhysicsAndRender);

    return () => {
      isRunning = false;
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [edgesData, hoveredNode, selectedNode, district, draggingNode]);

  // Canvas Mouse Interactivity
  const handleMouseMove = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / rect.width);
    const y = (e.clientY - rect.top) * (canvas.height / rect.height);
    mousePosRef.current = { x, y };

    // Check hovered node
    const found = physicsNodesRef.current.find(n => {
      const dx = n.x - x;
      const dy = n.y - y;
      return Math.sqrt(dx * dx + dy * dy) <= n.radius + 8;
    });

    setHoveredNode(found || null);
    canvas.style.cursor = found ? 'pointer' : 'default';
  };

  const handleMouseDown = (e) => {
    if (hoveredNode) {
      setDraggingNode(hoveredNode);
      setSelectedNode(hoveredNode);
    }
  };

  const handleMouseUp = () => {
    setDraggingNode(null);
  };

  const districtMatchesCount = useMemo(() => {
    if (!graphData?.nodes) return 0;
    return graphData.nodes.filter(n => n.isDistrictMatch).length;
  }, [graphData]);

  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-lg space-y-4 text-on-surface select-none">
      {/* Header Bar */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-outline-variant pb-4">
        <div>
          <h3 className="text-xl font-bold text-on-surface flex items-center gap-2 font-mono">
            🕸️ Karnataka 50-Rowdy Underworld Constellation Graph
          </h3>
          <p className="text-xs text-on-surface-variant mt-1">
            Displaying <strong className="text-primary-container font-bold">{graphData?.total_nodes || 50} Interconnected Rowdies & Dons</strong> • <strong className="text-secondary font-bold">{graphData?.total_edges || 110} Factional & Financial Links</strong>
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1 bg-surface-container-low border border-outline-variant p-1 rounded-lg">
            <button
              onClick={() => setViewMode('SPOTLIGHT')}
              className={`px-3 py-1 text-xs font-bold rounded-md transition-colors ${
                viewMode === 'SPOTLIGHT' ? 'bg-primary-container text-on-primary shadow' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              👑 Spotlight District ({districtMatchesCount})
            </button>
            <button
              onClick={() => setViewMode('FILTER')}
              className={`px-3 py-1 text-xs font-bold rounded-md transition-colors ${
                viewMode === 'FILTER' ? 'bg-secondary text-on-secondary shadow' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              🔍 Filter Subgraph
            </button>
          </div>

          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Rowdy / Alias..."
              className="bg-surface-container-low border border-outline-variant rounded-lg pl-3 pr-3 py-1.5 text-xs text-on-surface placeholder-on-surface-variant focus:outline-none focus:border-primary-container w-48"
            />
          </div>
        </div>
      </div>

      {/* Main Canvas Graph */}
      <div className="relative w-full h-[620px] bg-surface rounded-xl overflow-hidden border border-outline-variant shadow-inner">
        <canvas
          ref={canvasRef}
          width={1000}
          height={650}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          className="w-full h-full block"
        />

        {/* Legend Overlay */}
        <div className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-md p-3 rounded-lg border border-outline-variant text-[11px] space-y-1.5 text-on-surface-variant shadow-sm">
          <div className="font-bold text-on-surface text-xs mb-1">Graph Legend</div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#8c1d18] shadow-sm shadow-[#8c1d18]"></span>
            <span>Target District Rowdy ({district})</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#6b0105] shadow-sm shadow-[#6b0105]"></span>
            <span>Syndicate Boss / Kingpin</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#645e4c]"></span>
            <span>Interstate Operative</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-0.5 bg-[#dfbfbb]"></span>
            <span>Connected Gang Nexus</span>
          </div>
        </div>
      </div>

      {/* Selected Node Dossier Drawer */}
      {selectedNode && (
        <div className="p-4 bg-surface-container-lowest border border-outline-variant rounded-xl text-on-surface space-y-3 shadow-xl">
          <div className="flex items-center justify-between border-b border-outline-variant pb-2">
            <div>
              <h4 className="font-bold text-base text-on-surface flex items-center gap-2 font-mono">
                👤 {selectedNode.label} {selectedNode.alias && <span className="text-tertiary text-sm font-normal">("{selectedNode.alias}")</span>}
                <span className="bg-primary-container text-on-primary text-[10px] font-bold px-2 py-0.5 rounded border border-primary uppercase">
                  {selectedNode.category}
                </span>
              </h4>
              <p className="text-xs text-on-surface-variant mt-0.5">
                Era: <strong className="text-on-surface">{selectedNode.era}</strong> | Operative Territory: <strong className="text-on-surface">{selectedNode.district}</strong>
              </p>
            </div>
            <button
              onClick={() => setSelectedNode(null)}
              className="text-xs bg-surface-container-high hover:bg-surface-container-highest text-on-surface px-3 py-1 rounded font-bold transition-colors"
            >
              ✕ Close Dossier
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="bg-surface-container-low p-2.5 rounded border border-outline-variant">
              <span className="text-on-surface-variant block text-[10px] font-bold uppercase">NetworkX Centrality Score</span>
              <span className="text-tertiary font-mono text-base font-bold">{selectedNode.centrality}</span>
            </div>

            <div className="bg-surface-container-low p-2.5 rounded border border-outline-variant">
              <span className="text-on-surface-variant block text-[10px] font-bold uppercase">State Crime Risk Rating</span>
              <span className="text-primary-container font-mono text-base font-bold">{Math.round(selectedNode.risk_score * 100)}% Risk Index</span>
            </div>

            <div className="bg-surface-container-low p-2.5 rounded border border-outline-variant">
              <span className="text-on-surface-variant block text-[10px] font-bold uppercase">2026 Legal & Surveillance Status</span>
              <span className="inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded border bg-error text-on-error border-error">
                {selectedNode.status}
              </span>
            </div>
          </div>

          <div className="bg-surface-container-low p-3 rounded border border-outline-variant">
            <h5 className="text-xs font-bold text-on-surface mb-1 uppercase tracking-wider">Primary Criminal Background & Gang Network History</h5>
            <p className="text-xs text-on-surface leading-relaxed">
              {selectedNode.background}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
