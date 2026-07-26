import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';

export default function CommandCenterOperations() {
  const systemMetrics = [
    { name: 'FastAPI / Python Backend', status: 'HEALTHY', latency: '14 ms', uptime: '99.98%', load: 45 },
    { name: 'PostgreSQL 16 + PostGIS', status: 'ONLINE', latency: '4 ms', uptime: '100.0%', load: 30 },
    { name: 'XGBoost ML Hotspot Engine', status: 'ACTIVE', latency: '28 ms', uptime: '99.92%', load: 78 },
    { name: 'NetworkX Graph Service', status: 'ACTIVE', latency: '18 ms', uptime: '99.95%', load: 60 },
  ];

  const liveAlerts = [
    { type: 'CRITICAL', time: '08:52:10', message: 'Geofence Breach: Category A Rowdy (Vikram Gowda) detected near Majestic. ARS Strike Team Alerted.', source: 'LPR Camera 4' },
    { type: 'HIGH', time: '08:45:00', message: 'Anomaly: 300% spike in MV Theft reports in Whitefield. Deploying CAR reserve.', source: 'CCTNS Sync' },
    { type: 'MEDIUM', time: '08:30:15', message: 'Cyber Fraud Alert: 1930 Helpline received 15 calls for Job Fraud. Routed to CEN Police Station.', source: '1930 API' },
  ];

  const liveAuditLogs = [
    { time: '08:12:04', user: 'DCP Ananya Rao (CCB)', action: 'Queried CCB Organized Crime Wing (OCW) Dossier for Wilson Garden Naga', ip: '10.24.102.4' },
    { time: '08:05:18', user: 'Insp. Gowda (ARS)', action: 'Anti-Rowdy Squad (ARS) issued BNSS Sec 129 Bond Over Proceeding for Cycle Ravi', ip: '10.24.102.18' },
    { time: '07:50:33', user: 'Cmdr. Patil (Garuda)', action: 'Garuda Force deployed for tactical operation simulation', ip: '10.24.102.32' },
    { time: '07:15:22', user: 'SFPB Desk', action: 'State Finger Print Bureau (SFPB) confirmed cross-district match for dacoity case', ip: '10.24.102.11' },
    { time: '06:42:10', user: 'EOW Analyst', action: 'Economic Offences Wing (EOW) flagged major hawala transaction via CEN node', ip: '10.24.102.9' }
  ];

  const renderLoadBar = (load) => {
    let color = 'bg-primary';
    if (load > 85) color = 'bg-error';
    else if (load > 60) color = 'bg-orange-500';

    return (
      <div className="w-full bg-surface-container-high rounded-full h-1.5 mt-2">
        <div className={`${color} h-1.5 rounded-full`} style={{ width: `${load}%` }}></div>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-surface text-on-surface font-body-md overflow-hidden antialiased">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header title="Command Center Operations" />

        <main className="flex-1 overflow-y-auto p-6 space-y-6 bg-surface-bright">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-surface-container-lowest border border-outline-variant p-5 rounded-xl shadow-sm gap-4">
            <div>
              <h2 className="text-xl font-bold text-on-surface flex items-center gap-2">
                🛡️ KrimeKartā Strategic Command Center
              </h2>
              <p className="text-sm text-on-surface-variant">Live operations monitoring, system health, and high-priority dispatches.</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-error/10 text-error border border-error/20 px-3 py-1.5 rounded-lg text-xs font-bold font-mono shadow-sm">
                <span className="w-2 h-2 rounded-full bg-error animate-ping"></span>
                ACTIVE INCIDENTS: 3
              </div>
              <div className="flex items-center gap-2 bg-primary-container text-on-primary-container border border-primary/20 px-3 py-1.5 rounded-lg text-xs font-bold font-mono shadow-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                SYSTEM HEALTHY
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Active Alerts - Spans 2 columns on large */}
            <div className="lg:col-span-2 bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm">
              <h3 className="text-base font-bold text-on-surface mb-4 flex items-center gap-2">
                🚨 High-Priority Active Alerts
              </h3>
              <div className="space-y-3">
                {liveAlerts.map((alert, idx) => (
                  <div key={idx} className={`p-4 rounded-lg border-l-4 shadow-sm flex flex-col md:flex-row gap-4 items-start md:items-center justify-between ${
                    alert.type === 'CRITICAL' ? 'bg-error/10 border-error' :
                    alert.type === 'HIGH' ? 'bg-orange-500/10 border-orange-500' : 'bg-yellow-500/10 border-yellow-500'
                  }`}>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded text-white ${
                          alert.type === 'CRITICAL' ? 'bg-error' :
                          alert.type === 'HIGH' ? 'bg-orange-500' : 'bg-yellow-500'
                        }`}>{alert.type}</span>
                        <span className="text-xs font-mono text-on-surface-variant">{alert.time}</span>
                      </div>
                      <p className="text-sm font-bold text-on-surface">{alert.message}</p>
                    </div>
                    <div className="shrink-0 text-xs font-bold text-on-surface-variant">
                      Source: {alert.source}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* System Health */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm">
               <h3 className="text-base font-bold text-on-surface mb-4">Core Infrastructure</h3>
               <div className="space-y-4">
                 {systemMetrics.map((m, idx) => (
                   <div key={idx} className="bg-surface-container-low border border-outline-variant rounded-lg p-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-xs">{m.name}</span>
                        <span className="text-[10px] text-primary font-bold">{m.status}</span>
                      </div>
                      <div className="flex justify-between text-[10px] text-on-surface-variant mb-2">
                        <span>Latency: {m.latency}</span>
                        <span>Uptime: {m.uptime}</span>
                      </div>
                      <div className="text-[10px] font-bold mt-2">CPU/Memory Load: {m.load}%</div>
                      {renderLoadBar(m.load)}
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* Audit Logs Section */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm">
            <h3 className="text-base font-bold text-on-surface mb-4 flex items-center gap-2">
              📜 Real-time System Audit Stream
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-on-surface">
                <thead className="bg-surface-container-low text-on-surface-variant font-bold uppercase text-[10px] border-b border-outline-variant">
                  <tr>
                    <th className="p-3">Timestamp</th>
                    <th className="p-3">Authenticated User</th>
                    <th className="p-3">Executed Action</th>
                    <th className="p-3">Terminal IP</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  {liveAuditLogs.map((log, idx) => (
                    <tr key={idx} className="hover:bg-surface-container-low transition-colors">
                      <td className="p-3 font-mono text-primary font-bold">{log.time}</td>
                      <td className="p-3 font-bold text-on-surface">{log.user}</td>
                      <td className="p-3 text-on-surface-variant text-xs">{log.action}</td>
                      <td className="p-3 font-mono text-on-surface-variant text-xs">{log.ip}</td>
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
