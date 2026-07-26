import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';
import { useAppStore } from '../store/useStore';

export default function CommandCenterOperations() {
  const { selectedDistrict, setSelectedDistrict } = useAppStore();
  const [activeTab, setActiveTab] = useState('DATALOG');
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

      // Generate live datum telemetry packet
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

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 font-mono overflow-hidden antialiased select-none">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <Header title="KrimeKartā Strategic Command Center — Live Telemetry & Datum Matrix" />

        {/* TOP SIMULATED DATUM STREAM TICKER */}
        <div className="bg-slate-900 border-b border-cyan-900/60 px-4 py-1.5 flex items-center justify-between text-[11px] text-cyan-400 z-20 shadow-md">
          <div className="flex items-center gap-3 overflow-hidden whitespace-nowrap">
            <span className="bg-cyan-950 text-cyan-300 font-bold px-2 py-0.5 rounded border border-cyan-700 animate-pulse flex items-center gap-1">
              📡 DATUM RECON ACTIVE
            </span>
            <span className="text-slate-400 font-bold">WGS84 EPSG:4326</span>
            <span className="text-slate-500">|</span>
            <span className="text-emerald-400 font-bold">TARGET ZONE: {selectedDistrict.toUpperCase()}</span>
            <span className="text-slate-500">|</span>
            <div className="flex items-center gap-2">
              <span className="text-amber-400">LAT: {(15.3173 + Math.sin(datumTick * 0.1) * 0.05).toFixed(4)}°N</span>
              <span className="text-amber-400">LNG: {(75.7139 + Math.cos(datumTick * 0.1) * 0.05).toFixed(4)}°E</span>
            </div>
            <span className="text-slate-500">|</span>
            <span className="text-pink-400">PACKETS SYNCED: {1420 + datumTick}</span>
            <span className="text-slate-500">|</span>
            <span className="text-sky-300">SIGINT SPECTRUM: 446.025 MHz (AES-256 ENCRYPTED)</span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setIsSimulatingSweep(prev => !prev)}
              className={`px-2.5 py-0.5 rounded text-[10px] font-bold border transition ${
                isSimulatingSweep ? 'bg-cyan-950 text-cyan-300 border-cyan-700 hover:bg-cyan-900' : 'bg-slate-800 text-slate-400 border-slate-700'
              }`}
            >
              {isSimulatingSweep ? '⏸️ PAUSE DATUM SWEEP' : '▶️ RESUME DATUM SWEEP'}
            </button>
          </div>
        </div>

        {/* MAIN COMMAND CENTER BOARD WITH SURROUNDING SIMULATED DATUM PANELS */}
        <main className="flex-1 overflow-y-auto p-4 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-4 bg-slate-950">

          {/* LEFT WING DATUM PANEL: SIGINT & RADAR TELEMETRY */}
          <div className="lg:col-span-3 bg-slate-900/90 border border-slate-800 rounded-xl p-4 shadow-2xl flex flex-col space-y-4">
            <div className="border-b border-slate-800 pb-2 flex items-center justify-between">
              <h3 className="text-xs font-bold text-cyan-400 flex items-center gap-1.5 uppercase tracking-wider">
                📡 SIGINT Datum Telemetry
              </h3>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            </div>

            {/* Radar Sweep Simulator Graphic */}
            <div className="relative w-full h-36 bg-slate-950 rounded-lg border border-cyan-900/40 flex items-center justify-center overflow-hidden shadow-inner">
              {/* Concentric Radar Rings */}
              <div className="absolute w-28 h-28 rounded-full border border-cyan-800/40"></div>
              <div className="absolute w-20 h-20 rounded-full border border-cyan-800/60"></div>
              <div className="absolute w-10 h-10 rounded-full border border-cyan-500/80"></div>
              <div className="absolute w-full h-[1px] bg-cyan-900/60"></div>
              <div className="absolute h-full w-[1px] bg-cyan-900/60"></div>

              {/* Rotating Sweep Line */}
              <div
                className="absolute w-1/2 h-1/2 top-0 right-0 origin-bottom-left bg-gradient-to-tr from-cyan-500/20 to-transparent border-r border-cyan-400/80 transition-transform duration-300"
                style={{ transform: `rotate(${datumTick * 25}deg)` }}
              ></div>

              {/* Pulsing Target Beacons */}
              <div className="absolute top-8 right-10 w-2.5 h-2.5 rounded-full bg-pink-500 shadow-lg shadow-pink-500 animate-ping"></div>
              <div className="absolute bottom-6 left-12 w-2 h-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400"></div>
              <div className="absolute top-12 left-8 w-2 h-2 rounded-full bg-amber-400 shadow-lg shadow-amber-400"></div>

              <span className="absolute bottom-1 right-2 text-[9px] font-bold text-cyan-400 bg-slate-900/80 px-1.5 rounded">
                BEARING: {(datumTick * 17) % 360}°
              </span>
            </div>

            {/* Live Datum Stream Table */}
            <div className="flex-1 overflow-hidden flex flex-col">
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Live Datum Packet Feed</h4>
              <div className="space-y-2 overflow-y-auto text-[11px] pr-1 flex-1">
                {telemetryPackets.map(pkt => (
                  <div key={pkt.id} className="p-2 bg-slate-950 rounded border border-slate-800/80 space-y-1">
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="font-bold text-cyan-400">{pkt.channel}</span>
                      <span className="text-slate-500">{pkt.latency}</span>
                    </div>
                    <p className="text-slate-300 text-[10px] leading-tight font-sans">
                      {pkt.payload}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CENTER COMMAND CENTER OPERATIONS MAIN DASHBOARD */}
          <div className="lg:col-span-6 space-y-4 flex flex-col">

            {/* Header Banner */}
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
              <div>
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  🛡️ KrimeKartā Strategic Command Center
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Real-time operations, geodetic datum telemetry, and tactical unit response.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-red-950 text-red-300 border border-red-800 px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                  ACTIVE INCIDENTS: 3
                </div>
                <div className="bg-emerald-950 text-emerald-300 border border-emerald-800 px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  DATUM SYNC: 100%
                </div>
              </div>
            </div>

            {/* High-Priority Alerts Board */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-2xl space-y-3">
              <h3 className="text-xs font-bold text-white flex items-center justify-between uppercase tracking-wider">
                <span>🚨 High-Priority Tactical Alerts</span>
                <span className="text-[10px] text-slate-400 font-normal">Updated Live</span>
              </h3>

              <div className="space-y-2.5">
                {liveAlerts.map((alert, idx) => (
                  <div key={idx} className={`p-3 rounded-lg border-l-4 shadow-sm flex flex-col md:flex-row gap-3 items-start md:items-center justify-between ${
                    alert.type === 'CRITICAL' ? 'bg-red-950/40 border-red-600 text-red-200' :
                    alert.type === 'HIGH' ? 'bg-orange-950/40 border-orange-500 text-orange-200' : 'bg-yellow-950/40 border-yellow-500 text-yellow-200'
                  }`}>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded text-white ${
                          alert.type === 'CRITICAL' ? 'bg-red-600' :
                          alert.type === 'HIGH' ? 'bg-orange-500' : 'bg-yellow-500'
                        }`}>{alert.type}</span>
                        <span className="text-[10px] font-mono text-slate-400">{alert.time}</span>
                      </div>
                      <p className="text-xs font-bold text-white font-sans">{alert.message}</p>
                    </div>
                    <span className="shrink-0 text-[10px] font-bold text-slate-400 bg-slate-950 px-2 py-1 rounded border border-slate-800">
                      Source: {alert.source}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Audit Log Stream */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-2xl flex-1 flex flex-col">
              <h3 className="text-xs font-bold text-white mb-3 uppercase tracking-wider flex items-center gap-2">
                📜 Real-Time System Audit Stream
              </h3>

              <div className="overflow-x-auto flex-1">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-950 text-slate-400 font-bold uppercase text-[10px] border-b border-slate-800">
                    <tr>
                      <th className="p-2">Timestamp</th>
                      <th className="p-2">Authenticated User</th>
                      <th className="p-2">Executed Action</th>
                      <th className="p-2">Terminal IP</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80">
                    {liveAuditLogs.map((log, idx) => (
                      <tr key={idx} className="hover:bg-slate-850 transition-colors">
                        <td className="p-2 font-mono text-cyan-400 font-bold">{log.time}</td>
                        <td className="p-2 font-bold text-white">{log.user}</td>
                        <td className="p-2 text-slate-300 text-[11px] font-sans">{log.action}</td>
                        <td className="p-2 font-mono text-slate-400 text-[10px]">{log.ip}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* RIGHT WING DATUM PANEL: INFRASTRUCTURE & SENSOR METRICS */}
          <div className="lg:col-span-3 bg-slate-900/90 border border-slate-800 rounded-xl p-4 shadow-2xl flex flex-col space-y-4">
            <div className="border-b border-slate-800 pb-2 flex items-center justify-between">
              <h3 className="text-xs font-bold text-cyan-400 flex items-center gap-1.5 uppercase tracking-wider">
                📊 Infrastructure Telemetry
              </h3>
              <span className="text-[10px] text-slate-400 font-bold">5 Nodes</span>
            </div>

            <div className="space-y-3 overflow-y-auto pr-1 flex-1">
              {systemMetrics.map((m, idx) => (
                <div key={idx} className="bg-slate-950 border border-slate-800 rounded-lg p-2.5 space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-[11px] text-slate-200">{m.name}</span>
                    <span className="text-[9px] bg-emerald-950 text-emerald-400 px-1.5 py-0.5 rounded font-bold border border-emerald-800">{m.status}</span>
                  </div>

                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>Latency: <strong className="text-cyan-400">{m.latency}</strong></span>
                    <span>Uptime: <strong className="text-slate-200">{m.uptime}</strong></span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-[9px] text-slate-400 font-bold">
                      <span>LOAD METRIC</span>
                      <span className="text-amber-400">{m.load}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          m.load > 75 ? 'bg-red-500' : m.load > 50 ? 'bg-amber-500' : 'bg-cyan-500'
                        }`}
                        style={{ width: `${m.load}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Geodetic Datum Reference Block */}
            <div className="p-3 bg-slate-950 rounded-lg border border-cyan-900/50 space-y-1 text-[10px]">
              <div className="font-bold text-cyan-400 uppercase tracking-wider">Geodetic Datum Grid</div>
              <div className="text-slate-400 leading-tight">
                Ref Ellipsoid: WGS 84 | PostGIS SRID 4326 | Telemetry Frequency: 1.5s real-time pulse
              </div>
            </div>
          </div>

        </main>

        {/* BOTTOM DATUM TELEMETRY STATUS BAR */}
        <div className="bg-slate-900 border-t border-slate-800 px-4 py-2 flex items-center justify-between text-xs text-slate-400 z-20">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-cyan-400 text-sm animate-pulse">radar</span>
            <span className="font-bold text-white text-xs">LIVE DISPATCH:</span>
            <div className="overflow-hidden w-[600px]">
              <div className="whitespace-nowrap font-sans text-xs text-slate-300 animate-marquee">
                🟢 CCB Unit Alpha - Patrol Sector 4 | 🟢 ARS Team Bravo - Monitoring Rajan Varma | 🔴 KSRP Battalion 2 - Responding to Hubballi Riot Alert | 🟢 Garuda Force - Patrolling NH-44 Corridor
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-[11px] font-mono">
            <span className="text-slate-400">TELEMETRY SYNC: <strong className="text-emerald-400">ONLINE</strong></span>
            <span className="text-slate-400">SCRB VER: <strong className="text-cyan-400">2026.4.1</strong></span>
          </div>
        </div>

      </div>
    </div>
  );
}
