import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';

export default function CommandCenterOperations() {
  const [activeTab, setActiveTab] = useState('health');

  const systemMetrics = [
    { name: 'FastAPI Microservice (Port 8000)', status: 'HEALTHY', latency: '14 ms', uptime: '99.98%' },
    { name: 'PostgreSQL 16 + PostGIS Spatial Engine', status: 'ONLINE', latency: '4 ms', uptime: '100.0%' },
    { name: 'XGBoost ML Hotspot Inference Engine', status: 'ACTIVE', latency: '28 ms', uptime: '99.92%' },
    { name: 'NetworkX Graph Centrality Service', status: 'ACTIVE', latency: '18 ms', uptime: '99.95%' },
    { name: 'Gemini 2.0 Flash AI Briefing Service', status: 'ONLINE', latency: '120 ms', uptime: '99.85%' },
    { name: 'Redis Cache & Session Queue', status: 'HEALTHY', latency: '1 ms', uptime: '100.0%' }
  ];

  const liveAuditLogs = [
    { time: '22:44:12', user: 'DCP Ananya Rao', action: 'Approved AI Patrol Directive REC-2026-8891 (Sector 4)', ip: '10.24.102.4' },
    { time: '22:40:05', user: 'Insp. Patil', action: 'Queried NetworkX Syndicate Centrality for Rajan Don Varma', ip: '10.24.102.18' },
    { time: '22:35:50', user: 'Sgt. Ramesh K.', action: 'Uploaded CCTV Field Observation for Commercial Street', ip: '10.24.102.32' },
    { time: '22:20:14', user: 'System Worker', action: 'Generated Scheduled District Intelligence Briefing (Gemini 2.0)', ip: '127.0.0.1' }
  ];

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden font-sans">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header title="Command Center & System Health Operations" />

        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-slate-900 border border-slate-800 p-5 rounded-xl shadow-sm gap-4">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                🛡️ Karnataka Police Command Center Infrastructure
              </h2>
              <p className="text-xs text-slate-400">Real-time health monitoring of FastAPI backend services, PostGIS spatial database, ML microservices, and audit logs.</p>
            </div>

            <div className="flex items-center gap-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1.5 rounded-lg text-xs font-bold font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              ALL SYSTEMS OPERATIONAL
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systemMetrics.map((m, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="text-sm font-bold text-white pr-2">{m.name}</h3>
                  <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-bold px-2 py-0.5 rounded">
                    {m.status}
                  </span>
                </div>

                <div className="flex justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
                  <span>API Latency: <strong className="text-slate-200">{m.latency}</strong></span>
                  <span>Uptime SLA: <strong className="text-emerald-400">{m.uptime}</strong></span>
                </div>
              </div>
            ))}
          </div>

          {/* Audit Logs Section */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm">
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              📜 Real-time System Audit & Security Event Stream
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-950 text-slate-400 font-bold uppercase text-[10px] border-b border-slate-800">
                  <tr>
                    <th className="p-3">Timestamp</th>
                    <th className="p-3">Authenticated User</th>
                    <th className="p-3">Executed Action / Event</th>
                    <th className="p-3">Source IP</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {liveAuditLogs.map((log, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/60 transition-colors">
                      <td className="p-3 font-mono text-amber-400 font-bold">{log.time}</td>
                      <td className="p-3 font-bold text-white">{log.user}</td>
                      <td className="p-3 text-slate-200">{log.action}</td>
                      <td className="p-3 font-mono text-slate-400">{log.ip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
