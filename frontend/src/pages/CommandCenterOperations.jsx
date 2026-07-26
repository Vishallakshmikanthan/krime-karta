import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';

export default function CommandCenterOperations() {
  const systemMetrics = [
    { name: 'FastAPI Production Backend (Port 8000)', status: 'HEALTHY', latency: '14 ms', uptime: '99.98%' },
    { name: 'PostgreSQL 16 + PostGIS Spatial Engine', status: 'ONLINE', latency: '4 ms', uptime: '100.0%' },
    { name: 'XGBoost ML Hotspot Inference Engine', status: 'ACTIVE', latency: '28 ms', uptime: '99.92%' },
    { name: 'NetworkX Rowdy & Syndicate Graph Service', status: 'ACTIVE', latency: '18 ms', uptime: '99.95%' },
    { name: 'Gemini 2.0 Flash SCRB Briefing Engine', status: 'ONLINE', latency: '120 ms', uptime: '99.85%' },
    { name: 'CCTNS Sync & Emergency ERSS-112 Stream', status: 'HEALTHY', latency: '2 ms', uptime: '100.0%' }
  ];

  const liveAuditLogs = [
    { time: '08:12:04', user: 'DCP Ananya Rao (CCB)', action: 'Queried CCB Rowdy-Sheet Dossier for Wilson Garden Naga', ip: '10.24.102.4' },
    { time: '08:05:18', user: 'Insp. Gowda (West Div)', action: 'Issued BNSS Sec 129 Bond Over Proceeding for Cycle Ravi', ip: '10.24.102.18' },
    { time: '07:50:33', user: 'SP Outer Range', action: 'Approved Inter-District Highway Patrol Route for Kunigal Giri Dacoity Zone', ip: '10.24.102.32' },
    { time: '07:35:10', user: 'System Telemetry', action: 'Synchronized H1 2026 SCRB District Crime Data (106,417 Records)', ip: '127.0.0.1' },
    { time: '07:15:22', user: 'Sub-Divisional Officer', action: 'Applied Externment Notice for Hebbagodi Satisha (Electronic City)', ip: '10.24.102.50' }
  ];

  return (
    <div className="flex h-screen bg-surface text-on-surface font-body-md overflow-hidden antialiased">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header title="Karnataka Command Center & System Infrastructure Operations" />

        <main className="flex-1 overflow-y-auto p-6 space-y-6 bg-surface-bright">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-surface-container-lowest border border-outline-variant p-5 rounded-xl shadow-sm gap-4">
            <div>
              <h2 className="text-xl font-bold text-on-surface flex items-center gap-2">
                🛡️ Karnataka Police Command Center Infrastructure & CCTNS Telemetry
              </h2>
              <p className="text-sm text-on-surface-variant">Real-time health monitoring of FastAPI backend services, PostGIS spatial database, ML microservices, and audit streams.</p>
            </div>

            <div className="flex items-center gap-2 bg-primary-container text-on-primary-container border border-primary/20 px-3 py-1.5 rounded-lg text-xs font-bold font-mono shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
              CCTNS SYNC OPERATIONAL
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systemMetrics.map((m, idx) => (
              <div key={idx} className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="text-sm font-bold text-on-surface pr-2">{m.name}</h3>
                  <span className="bg-surface-container-high text-on-surface border border-outline-variant text-[10px] font-bold px-2 py-0.5 rounded">
                    {m.status}
                  </span>
                </div>

                <div className="flex justify-between text-xs text-on-surface-variant pt-2 border-t border-outline-variant">
                  <span>API Latency: <strong className="text-on-surface">{m.latency}</strong></span>
                  <span>Uptime SLA: <strong className="text-primary">{m.uptime}</strong></span>
                </div>
              </div>
            ))}
          </div>

          {/* Audit Logs Section */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm">
            <h3 className="text-base font-bold text-on-surface mb-4 flex items-center gap-2">
              📜 Real-time System Audit & Security Event Stream (Karnataka SCRB Telemetry)
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-on-surface">
                <thead className="bg-surface-container-low text-on-surface-variant font-bold uppercase text-[10px] border-b border-outline-variant">
                  <tr>
                    <th className="p-3">Timestamp</th>
                    <th className="p-3">Authenticated Police User</th>
                    <th className="p-3">Executed Action / Rowdy Sheet Operation</th>
                    <th className="p-3">Terminal IP</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  {liveAuditLogs.map((log, idx) => (
                    <tr key={idx} className="hover:bg-surface-container-low transition-colors">
                      <td className="p-3 font-mono text-primary font-bold">{log.time}</td>
                      <td className="p-3 font-bold text-on-surface">{log.user}</td>
                      <td className="p-3 text-on-surface-variant">{log.action}</td>
                      <td className="p-3 font-mono text-on-surface-variant">{log.ip}</td>
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
