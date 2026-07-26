import React, { useState, useEffect } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';
import { useAppStore } from '../store/useStore';

export default function CommandCenterOperations() {
  const { selectedDistrict, setSelectedDistrict } = useAppStore();
  const [datumTick, setDatumTick] = useState(0);
  const [isSimulatingSweep, setIsSimulatingSweep] = useState(true);

  // Live Simulated Datum Telemetry Stream Generator
  const [telemetryPackets, setTelemetryPackets] = useState([
    { id: 'PKT-9021', channel: 'CH-01 (SIGINT)', payload: 'ANPR-CAM #104: ANPR match vehicle KA-01-MJ-9912 near Majestic', status: 'VERIFIED', latency: '2ms' },
    { id: 'PKT-9022', channel: 'CH-04 (RADAR)', payload: 'WGS84 Datum Lock: Sector 4 Geofence boundary nominal [15.8497 N, 74.4977 E]', status: 'SYNCED', latency: '4ms' },
    { id: 'PKT-9023', channel: 'CH-07 (ERSS)', payload: 'ERSS-112 SOS Dispatch #4102 routed to Belagavi Precinct Alpha', status: 'DISPATCHED', latency: '1ms' },
    { id: 'PKT-9024', channel: 'CH-09 (CCB)', payload: 'ARS Surveillance: Category A Rowdy (Wilson Garden Naga) history sheet updated', status: 'LOGGED', latency: '3ms' },
    { id: 'PKT-9025', channel: 'CH-12 (RF-NET)', payload: 'VHF Net 4: High-speed pursuit on NH-44 highway bypass cleared', status: 'ACTIVE', latency: '2ms' }
  ]);

  // Real-time telemetry tick loop
  useEffect(() => {
    if (!isSimulatingSweep) return;
    const interval = setInterval(() => {
      setDatumTick(prev => prev + 1);

      const channels = ['CH-01 (SIGINT)', 'CH-04 (RADAR)', 'CH-07 (ERSS)', 'CH-09 (CCB)', 'CH-12 (RF-NET)', 'CH-15 (ANPR)'];
      const actions = [
        `Geodetic Datum Lock: ${selectedDistrict} Sector ${1 + (datumTick % 5)} [LAT ${(12.9 + (datumTick % 7) * 0.4).toFixed(4)} N, LNG ${(75.1 + (datumTick % 5) * 0.5).toFixed(4)} E]`,
        `ANPR Camera #${1000 + (datumTick % 80)}: Verified 140 vehicles/min through ${selectedDistrict} Arterial Gate`,
        `BNSS Sec 129 Bond Verification: History-Sheeter record #${100 + (datumTick % 50)} validated`,
        `XGBoost Spatial Risk Model: Telemetry density pulse evaluated for ${selectedDistrict} (Score: ${(0.72 + (datumTick % 20) * 0.01).toFixed(2)})`,
        `CCB SigInt Radar: Frequency 446.025 MHz packet intercepted; safehouse telemetry logged`
      ];

      const newPkt = {
        id: `PKT-${9026 + datumTick}`,
        channel: channels[datumTick % channels.length],
        payload: actions[datumTick % actions.length],
        status: datumTick % 4 === 0 ? 'ALERT' : 'SYNCED',
        latency: `${1 + (datumTick % 5)}ms`
      };

      setTelemetryPackets(prev => [newPkt, ...prev.slice(0, 14)]);
    }, 1600);

    return () => clearInterval(interval);
  }, [isSimulatingSweep, datumTick, selectedDistrict]);

  const systemMetrics = [
    { name: 'FastAPI / Python Telemetry Engine', status: 'HEALTHY', latency: '14 ms', uptime: '99.98%', load: 42 },
    { name: 'PostgreSQL 16 + PostGIS Geodatabase', status: 'ONLINE', latency: '4 ms', uptime: '100.0%', load: 31 },
    { name: 'XGBoost ML Hotspot Neural Model', status: 'ACTIVE', latency: '28 ms', uptime: '99.92%', load: 74 },
    { name: 'NetworkX 50-Rowdy Graph Engine', status: 'ACTIVE', latency: '18 ms', uptime: '99.95%', load: 58 },
    { name: 'NVIDIA Nemotron-4-340B LLM API', status: 'ONLINE', latency: '120 ms', uptime: '99.99%', load: 62 }
  ];

  const liveAlerts = [
    { type: 'CRITICAL', time: '08:52:10', message: `Geofence Breach: Category A Rowdy (Vikram Gowda) detected near ${selectedDistrict} Central. ARS Strike Team Alerted.`, source: 'ANPR LPR Camera 4' },
    { type: 'HIGH', time: '08:45:00', message: `Anomaly: 300% spike in MV Theft telemetry in ${selectedDistrict} Commercial Zone. Deploying CAR reserve.`, source: 'CCTNS Sync Engine' },
    { type: 'MEDIUM', time: '08:30:15', message: `Cyber Fraud Alert: 1930 Helpline received 15 calls for UPI Fraud. Routed to CEN Station.`, source: '1930 API Gateway' }
  ];

  const liveAuditLogs = [
    { time: '08:12:04', user: 'DCP Ananya Rao (CCB)', action: `Queried CCB Organized Crime Wing (OCW) Dossier for Wilson Garden Naga in ${selectedDistrict}`, ip: '10.24.102.4' },
    { time: '08:05:18', user: 'Insp. Gowda (ARS)', action: `Anti-Rowdy Squad (ARS) issued BNSS Sec 129 Bond Over Proceeding for Cycle Ravi`, ip: '10.24.102.18' },
    { time: '07:50:33', user: 'Cmdr. Patil (Garuda)', action: `Garuda Force deployed for tactical operation simulation in ${selectedDistrict} Sector 2`, ip: '10.24.102.32' },
    { time: '07:15:22', user: 'SFPB Desk', action: `State Finger Print Bureau (SFPB) confirmed cross-district match for dacoity case`, ip: '10.24.102.11' },
    { time: '06:42:10', user: 'EOW Analyst', action: `Economic Offences Wing (EOW) flagged major hawala transaction via CEN node`, ip: '10.24.102.9' }
  ];

  const renderLoadBar = (load) => {
    let color = 'bg-primary';
    if (load > 75) color = 'bg-error';
    else if (load > 50) color = 'bg-orange-500';

    return (
      <div className="w-full bg-surface-container-high rounded-full h-1.5 mt-2">
        <div className={`${color} h-1.5 rounded-full`} style={{ width: `${load}%` }}></div>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-surface text-on-surface font-body-md overflow-hidden antialiased">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <Header title="Command Center Operations" />

        {/* TOP SIMULATED DATUM STREAM TICKER - UNIFORM STYLING */}
        <div className="bg-surface-container-lowest border-b border-outline-variant px-6 py-2.5 flex items-center justify-between text-xs text-on-surface shadow-sm z-20">
          <div className="flex items-center gap-3 overflow-hidden whitespace-nowrap">
            <span className="bg-primary-container text-on-primary-container font-bold px-2.5 py-0.5 rounded border border-primary/20 flex items-center gap-1.5 animate-pulse text-[11px]">
              <span className="material-symbols-outlined text-[14px]">radar</span>
              DATUM RECON ACTIVE
            </span>
            <span className="text-on-surface-variant font-bold text-[11px]">WGS84 EPSG:4326</span>
            <span className="text-outline-variant">|</span>
            <span className="text-primary font-bold text-[11px]">TARGET ZONE: {selectedDistrict.toUpperCase()}</span>
            <span className="text-outline-variant">|</span>
            <div className="flex items-center gap-2 font-mono text-[11px]">
              <span className="text-on-surface-variant">LAT: {(15.3173 + Math.sin(datumTick * 0.1) * 0.05).toFixed(4)}°N</span>
              <span className="text-on-surface-variant">LNG: {(75.7139 + Math.cos(datumTick * 0.1) * 0.05).toFixed(4)}°E</span>
            </div>
            <span className="text-outline-variant">|</span>
            <span className="text-on-surface-variant text-[11px]">PACKETS SYNCED: <strong className="text-primary font-mono">{1420 + datumTick}</strong></span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setIsSimulatingSweep(prev => !prev)}
              className={`px-3 py-1 rounded text-xs font-bold border transition ${
                isSimulatingSweep 
                  ? 'bg-primary text-on-primary border-primary hover:bg-primary/90' 
                  : 'bg-surface-container-low text-on-surface-variant border-outline-variant hover:bg-surface-container'
              }`}
            >
              {isSimulatingSweep ? '⏸️ Pause Sweep' : '▶️ Resume Sweep'}
            </button>
          </div>
        </div>

        {/* MAIN COMMAND CENTER OPERATIONS BOARD */}
        <main className="flex-1 overflow-y-auto p-6 space-y-6 bg-surface-bright">

          {/* Header Banner */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-surface-container-lowest border border-outline-variant p-5 rounded-xl shadow-sm gap-4">
            <div>
              <h2 className="text-xl font-bold text-on-surface flex items-center gap-2">
                🛡️ KrimeKartā Strategic Command Center
              </h2>
              <p className="text-sm text-on-surface-variant">Live operations monitoring, geodetic datum telemetry, and active dispatches.</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-error-container text-on-error-container border border-error/20 px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm">
                <span className="w-2 h-2 rounded-full bg-error animate-ping"></span>
                ACTIVE INCIDENTS: 3
              </div>
              <div className="flex items-center gap-2 bg-primary-container text-on-primary-container border border-primary/20 px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                SYSTEM HEALTHY
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

            {/* LEFT WING DATUM PANEL: SIGINT & RADAR TELEMETRY */}
            <div className="lg:col-span-3 bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm flex flex-col space-y-4">
              <div className="border-b border-outline-variant pb-2 flex items-center justify-between">
                <h3 className="text-sm font-bold text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">cell_tower</span>
                  SIGINT Datum Telemetry
                </h3>
                <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
              </div>

              {/* Radar Sweep Simulator Graphic */}
              <div className="relative w-full h-36 bg-surface-container-low rounded-lg border border-outline-variant flex items-center justify-center overflow-hidden shadow-inner">
                {/* Concentric Radar Rings */}
                <div className="absolute w-28 h-28 rounded-full border border-primary/20"></div>
                <div className="absolute w-20 h-20 rounded-full border border-primary/40"></div>
                <div className="absolute w-10 h-10 rounded-full border border-primary/60"></div>
                <div className="absolute w-full h-[1px] bg-outline-variant"></div>
                <div className="absolute h-full w-[1px] bg-outline-variant"></div>

                {/* Rotating Sweep Line */}
                <div
                  className="absolute w-1/2 h-1/2 top-0 right-0 origin-bottom-left bg-gradient-to-tr from-primary/20 to-transparent border-r border-primary/80 transition-transform duration-300"
                  style={{ transform: `rotate(${datumTick * 25}deg)` }}
                ></div>

                {/* Pulsing Target Beacons */}
                <div className="absolute top-8 right-10 w-2.5 h-2.5 rounded-full bg-error shadow-md shadow-error/50 animate-ping"></div>
                <div className="absolute bottom-6 left-12 w-2 h-2 rounded-full bg-primary"></div>
                <div className="absolute top-12 left-8 w-2 h-2 rounded-full bg-orange-500"></div>

                <span className="absolute bottom-1.5 right-2 text-[10px] font-bold text-on-surface-variant bg-surface-container-lowest px-1.5 py-0.5 rounded border border-outline-variant">
                  BEARING: {(datumTick * 17) % 360}°
                </span>
              </div>

              {/* Live Datum Stream List */}
              <div className="flex-1 overflow-hidden flex flex-col">
                <h4 className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-2">Live Telemetry Packets</h4>
                <div className="space-y-2 overflow-y-auto text-xs pr-1 flex-1">
                  {telemetryPackets.map(pkt => (
                    <div key={pkt.id} className="p-2.5 bg-surface-container-low rounded-lg border border-outline-variant space-y-1">
                      <div className="flex justify-between items-center text-[10px]">
                        <span className="font-bold text-primary">{pkt.channel}</span>
                        <span className="text-on-surface-variant font-mono">{pkt.latency}</span>
                      </div>
                      <p className="text-on-surface text-xs leading-tight">
                        {pkt.payload}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CENTER OPERATIONS BOARD: HIGH PRIORITY ALERTS & AUDIT STREAM */}
            <div className="lg:col-span-6 space-y-6 flex flex-col">

              {/* Active High-Priority Alerts */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm space-y-4">
                <h3 className="text-base font-bold text-on-surface flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    🚨 High-Priority Active Alerts
                  </span>
                  <span className="text-xs text-on-surface-variant font-medium">Live Feed</span>
                </h3>

                <div className="space-y-3">
                  {liveAlerts.map((alert, idx) => (
                    <div key={idx} className={`p-4 rounded-lg border-l-4 shadow-sm flex flex-col md:flex-row gap-4 items-start md:items-center justify-between ${
                      alert.type === 'CRITICAL' ? 'bg-error-container/30 border-error' :
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
                      <div className="shrink-0 text-xs font-bold text-on-surface-variant bg-surface-container-lowest px-2.5 py-1 rounded border border-outline-variant">
                        Source: {alert.source}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Audit Log Stream */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm flex-1 flex flex-col">
                <h3 className="text-base font-bold text-on-surface mb-4 flex items-center gap-2">
                  📜 Real-time System Audit Stream
                </h3>

                <div className="overflow-x-auto flex-1">
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
            </div>

            {/* RIGHT WING DATUM PANEL: INFRASTRUCTURE & SENSOR METRICS */}
            <div className="lg:col-span-3 bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm flex flex-col space-y-4">
              <div className="border-b border-outline-variant pb-2 flex items-center justify-between">
                <h3 className="text-sm font-bold text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">dns</span>
                  Core Infrastructure
                </h3>
                <span className="text-xs text-on-surface-variant font-bold">5 Services</span>
              </div>

              <div className="space-y-3.5 overflow-y-auto pr-1 flex-1">
                {systemMetrics.map((m, idx) => (
                  <div key={idx} className="bg-surface-container-low border border-outline-variant rounded-lg p-3 space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-xs text-on-surface">{m.name}</span>
                      <span className="text-[10px] bg-primary-container text-on-primary-container font-bold px-1.5 py-0.5 rounded">{m.status}</span>
                    </div>

                    <div className="flex justify-between text-[11px] text-on-surface-variant">
                      <span>Latency: <strong className="text-on-surface">{m.latency}</strong></span>
                      <span>Uptime: <strong className="text-on-surface">{m.uptime}</strong></span>
                    </div>

                    <div className="text-[10px] font-bold text-on-surface-variant mt-1">CPU/Memory Load: {m.load}%</div>
                    {renderLoadBar(m.load)}
                  </div>
                ))}
              </div>

              {/* Geodetic Reference Box */}
              <div className="p-3 bg-surface-container-low rounded-lg border border-outline-variant space-y-1 text-xs">
                <div className="font-bold text-on-surface uppercase tracking-wider text-[11px]">Geodetic Datum Reference</div>
                <div className="text-on-surface-variant text-[11px] leading-relaxed">
                  WGS84 EPSG:4326 Datum Alignment • Real-Time 1.6s Telemetry Stream Active
                </div>
              </div>
            </div>

          </div>

          {/* BOTTOM POLICE TEAM STATUS FOOTER - UNIFORM STYLING */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-3 shadow-sm flex items-center gap-4">
            <span className="material-symbols-outlined text-primary animate-pulse">radio</span>
            <span className="font-bold text-sm whitespace-nowrap text-on-surface">LIVE DISPATCH:</span>
            <div className="flex-1 overflow-hidden">
              <marquee className="text-sm text-on-surface-variant font-medium pt-1" scrollamount="5">
                🟢 CCB Unit Alpha - Deployed in Sector 4 | 🟢 ARS Team Bravo - Surveillance on Rajan Varma | 🔴 KSRP Battalion 2 - Responding to Rioting at Hubballi | 🟢 Garuda Force - Patrolling NH-44 | 🟡 Traffic Intel - Heavy congestion at Silk Board, routing patrols...
              </marquee>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
