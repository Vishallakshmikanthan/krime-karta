import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';

export default function StrategicAnalytics() {
  const [timeRange, setTimeRange] = useState('30d');

  const crimeCategories = [
    { category: 'Theft/Burglary', count: 124, trend: '+5%' },
    { category: 'Assault', count: 85, trend: '-2%' },
    { category: 'Cyber Fraud', count: 67, trend: '+12%' },
    { category: 'Narcotics', count: 42, trend: '-8%' },
    { category: 'Homicide', count: 3, trend: '0%' }
  ];

  const districts = [
    { name: 'Bengaluru Central', incidents: 342, cleared: 289, rate: '84.5%' },
    { name: 'Mysuru City', incidents: 156, cleared: 142, rate: '91.0%' },
    { name: 'Mangaluru', incidents: 112, cleared: 98, rate: '87.5%' },
    { name: 'Hubballi-Dharwad', incidents: 89, cleared: 71, rate: '79.7%' }
  ];

  const peakHours = [
    { hour: '00:00 - 04:00', risk: 'HIGH', label: 'Night Watch Critical' },
    { hour: '04:00 - 08:00', risk: 'LOW', label: 'Morning Commute' },
    { hour: '08:00 - 12:00', risk: 'MEDIUM', label: 'Commercial Activity' },
    { hour: '12:00 - 16:00', risk: 'LOW', label: 'Afternoon Lull' },
    { hour: '16:00 - 20:00', risk: 'HIGH', label: 'Evening Peak' },
    { hour: '20:00 - 00:00', risk: 'CRITICAL', label: 'Late Night Vulnerability' }
  ];

  return (
    <div className="flex h-screen bg-surface text-on-surface font-body-md overflow-hidden antialiased">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header title="Strategic Analytics & Macro Patterns" />

        <main className="flex-1 overflow-y-auto p-6 space-y-6 bg-surface-bright">
          <div className="bg-surface-container-lowest border border-outline-variant p-5 rounded-xl shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-xl font-bold text-on-surface flex items-center gap-2">
                📈 Strategic Analytics & Macro Crime Patterns
              </h2>
              <p className="text-sm text-on-surface-variant">Data-driven insights across jurisdictions and crime typologies.</p>
            </div>

            <div className="flex items-center gap-2 bg-surface-container-low border border-outline-variant rounded-lg p-1">
              {['7d', '30d', '90d', '1y'].map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-4 py-1.5 text-sm font-bold rounded-md transition-colors ${
                    timeRange === range ? 'bg-primary text-on-primary' : 'text-on-surface hover:bg-surface-container-high'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Crime Categories Bar Chart */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm">
              <h3 className="text-base font-bold text-on-surface mb-4">Crime Category Distribution</h3>
              <div className="space-y-4">
                {crimeCategories.map((cat, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-bold text-on-surface">{cat.category}</span>
                      <span className="text-on-surface-variant">
                        {cat.count} cases <span className={`text-xs ml-2 ${cat.trend.startsWith('+') ? 'text-error' : 'text-primary'}`}>({cat.trend})</span>
                      </span>
                    </div>
                    <div className="w-full bg-surface-container-high rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: `${Math.min((cat.count / 150) * 100, 100)}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Peak Hours Matrix */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm">
              <h3 className="text-base font-bold text-on-surface mb-4">Temporal Peak Hour Risk Matrix</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {peakHours.map((slot, idx) => (
                  <div key={idx} className={`p-3 rounded-lg border flex flex-col gap-1 ${
                    slot.risk === 'CRITICAL' ? 'bg-error-container border-error text-on-error-container' :
                    slot.risk === 'HIGH' ? 'bg-primary-container border-primary text-on-primary-container' :
                    slot.risk === 'MEDIUM' ? 'bg-surface-container-highest border-outline-variant text-on-surface' :
                    'bg-surface-container-low border-outline-variant text-on-surface-variant'
                  }`}>
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-xs font-bold">{slot.hour}</span>
                      <span className="text-[10px] uppercase font-bold tracking-wider">{slot.risk}</span>
                    </div>
                    <span className="text-xs">{slot.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Inter-District Clearance Table */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm">
            <h3 className="text-base font-bold text-on-surface mb-4">Inter-District Clearance Rates</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-on-surface">
                <thead className="bg-surface-container-low text-on-surface-variant font-bold uppercase text-xs border-b border-outline-variant">
                  <tr>
                    <th className="p-3">District Jurisdiction</th>
                    <th className="p-3">Reported Incidents</th>
                    <th className="p-3">Cases Cleared / Closed</th>
                    <th className="p-3">Clearance Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  {districts.map((d, idx) => (
                    <tr key={idx} className="hover:bg-surface-container-low transition-colors">
                      <td className="p-3 font-bold">{d.name}</td>
                      <td className="p-3">{d.incidents}</td>
                      <td className="p-3 text-primary">{d.cleared}</td>
                      <td className="p-3 font-mono font-bold">{d.rate}</td>
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
