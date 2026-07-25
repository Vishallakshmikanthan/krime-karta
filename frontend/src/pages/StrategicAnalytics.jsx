import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';

export default function StrategicAnalytics() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedTimeRange, setSelectedTimeRange] = useState('30d');

  const crimeCategoryData = [
    { name: 'Commercial Robbery & Theft', count: 142, pct: 38, color: 'bg-red-500' },
    { name: 'Cyber Crime & Financial Fraud', count: 98, pct: 26, color: 'bg-amber-500' },
    { name: 'Aggravated Assault', count: 64, pct: 17, color: 'bg-orange-500' },
    { name: 'Narcotics (NDPS)', count: 42, pct: 11, color: 'bg-indigo-500' },
    { name: 'Vehicle Theft', count: 30, pct: 8, color: 'bg-emerald-500' }
  ];

  const districtComparison = [
    { district: 'Bengaluru Central', incidents: 342, risk: 'HIGH', clearance: '84%' },
    { district: 'Mysuru City', incidents: 184, risk: 'ELEVATED', clearance: '91%' },
    { district: 'Mangaluru', incidents: 128, risk: 'MODERATE', clearance: '88%' },
    { district: 'Hubballi-Dharwad', incidents: 156, risk: 'ELEVATED', clearance: '79%' },
    { district: 'Belagavi', incidents: 94, risk: 'STABLE', clearance: '94%' }
  ];

  const hourlyHeatmap = [
    { hour: '00:00 - 04:00', risk: 'CRITICAL', val: 92 },
    { hour: '04:00 - 08:00', risk: 'LOW', val: 24 },
    { hour: '08:00 - 12:00', risk: 'MEDIUM', val: 48 },
    { hour: '12:00 - 16:00', risk: 'MEDIUM', val: 56 },
    { hour: '16:00 - 20:00', risk: 'HIGH', val: 78 },
    { hour: '20:00 - 24:00', risk: 'CRITICAL', val: 89 }
  ];

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden font-sans">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header title="Strategic Analytics & Crime Intelligence" />

        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-sm gap-4">
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                📊 Macro Crime Pattern Analytics
              </h2>
              <p className="text-xs text-slate-400">Statistical distribution across crime categories, peak operational hours, and district resolution rates.</p>
            </div>

            <div className="flex items-center gap-3">
              <select
                value={selectedTimeRange}
                onChange={(e) => setSelectedTimeRange(e.target.value)}
                className="bg-slate-800 border border-slate-700 text-white text-xs font-bold px-3 py-2 rounded-lg cursor-pointer"
              >
                <option value="7d">Past 7 Days</option>
                <option value="30d">Past 30 Days</option>
                <option value="90d">Past 90 Days</option>
                <option value="1y">Past 1 Year</option>
              </select>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-slate-800 border border-slate-700 text-white text-xs font-bold px-3 py-2 rounded-lg cursor-pointer"
              >
                <option value="ALL">All Categories</option>
                <option value="ROBBERY">Robbery & Theft</option>
                <option value="CYBER">Cyber Crime</option>
                <option value="ASSAULT">Assault</option>
                <option value="NARCOTICS">Narcotics</option>
              </select>
            </div>
          </div>

          {/* Analytics Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Category Breakdown (Bar Distribution) */}
            <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-white flex items-center justify-between">
                <span>Crime Breakdown by Category</span>
                <span className="text-xs text-amber-400 font-mono">Total Cases: 374</span>
              </h3>

              <div className="space-y-3">
                {crimeCategoryData.map((cat, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold text-slate-300">
                      <span>{cat.name}</span>
                      <span>{cat.count} cases ({cat.pct}%)</span>
                    </div>
                    <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-800">
                      <div className={`h-full ${cat.color} transition-all duration-500`} style={{ width: `${cat.pct}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Peak Crime Hour Matrix */}
            <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>🕒 Temporal Peak Hour Matrix</span>
              </h3>

              <div className="space-y-2.5">
                {hourlyHeatmap.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2.5 bg-slate-950/60 rounded-lg border border-slate-800 text-xs">
                    <span className="font-mono text-slate-300 font-bold">{item.hour}</span>
                    <div className="flex items-center gap-3">
                      <div className="w-24 bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${
                            item.risk === 'CRITICAL' ? 'bg-red-500' : item.risk === 'HIGH' ? 'bg-orange-500' : 'bg-amber-500'
                          }`}
                          style={{ width: `${item.val}%` }}
                        ></div>
                      </div>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        item.risk === 'CRITICAL' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-amber-500/20 text-amber-400'
                      }`}>
                        {item.risk}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* District Comparison Table */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm">
            <h3 className="text-base font-bold text-white mb-4">Inter-District Crime & Clearance Comparison</h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-950 text-slate-400 font-bold uppercase text-[10px] border-b border-slate-800">
                  <tr>
                    <th className="p-3">District Command</th>
                    <th className="p-3">Total Reported Incidents</th>
                    <th className="p-3">AI Risk Level</th>
                    <th className="p-3">FIR Clearance Rate</th>
                    <th className="p-3">Operational Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {districtComparison.map((d, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/50 transition-colors">
                      <td className="p-3 font-bold text-white">{d.district}</td>
                      <td className="p-3 font-mono">{d.incidents} cases</td>
                      <td className="p-3">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          d.risk === 'HIGH' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-emerald-500/20 text-emerald-400'
                        }`}>
                          {d.risk}
                        </span>
                      </td>
                      <td className="p-3 font-bold text-emerald-400">{d.clearance}</td>
                      <td className="p-3 font-semibold text-slate-400">ACTIVE PATROLS RUNNING</td>
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
