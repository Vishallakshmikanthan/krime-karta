import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';

export default function CriminalIntelligenceDirectory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedSuspect, setSelectedSuspect] = useState(null);

  const [criminals, setCriminals] = useState([
    {
      id: 'CRIM-001',
      name: "Rajan 'Don' Varma",
      alias: 'Kingpin / Don',
      category: 'Syndicate Boss',
      riskScore: 0.98,
      centrality: 0.75,
      casesLinked: 14,
      primaryDistrict: 'Bengaluru Central',
      status: 'WANTED',
      lastSeen: 'Commercial Corridor, Sector 4'
    },
    {
      id: 'CRIM-002',
      name: "Vikram 'Snake' Gowda",
      alias: 'Operations Lead',
      category: 'Syndicate Lieutenant',
      riskScore: 0.89,
      centrality: 0.62,
      casesLinked: 9,
      primaryDistrict: 'Bengaluru Central',
      status: 'UNDER_SURVEILLANCE',
      lastSeen: 'Majestic Metro Transit Area'
    },
    {
      id: 'CRIM-003',
      name: "Anil 'Hawala' Mehta",
      alias: 'Financial Handler',
      category: 'Money Laundering',
      riskScore: 0.84,
      centrality: 0.51,
      casesLinked: 7,
      primaryDistrict: 'Mysuru City',
      status: 'WANTED',
      lastSeen: 'Mysuru Commercial Hub'
    },
    {
      id: 'CRIM-004',
      name: "Suresh 'Bhai' Patil",
      alias: 'Enforcement Chief',
      category: 'Armed Robbery',
      riskScore: 0.91,
      centrality: 0.58,
      casesLinked: 11,
      primaryDistrict: 'Bengaluru Central',
      status: 'ARRESTED',
      lastSeen: 'Central Prison Custody'
    }
  ]);

  const filteredCriminals = criminals.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.alias.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'ALL' || c.category.toUpperCase().includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden font-sans">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header title="Criminal Intelligence Directory & Syndicate Registry" />

        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Header Controls */}
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                👤 Known Criminal Entity Dossiers
              </h2>
              <p className="text-xs text-slate-400">National Crime Records Bureau (NCRB) tracked syndicate bosses, lieutenants, and financial conduits.</p>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Name, Alias, ID..."
                className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400 flex-1 md:w-60"
              />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white"
              >
                <option value="ALL">All Categories</option>
                <option value="SYNDICATE">Syndicate Leaders</option>
                <option value="MONEY">Money Laundering</option>
                <option value="ARMED">Armed Robbery</option>
              </select>
            </div>
          </div>

          {/* Criminal Dossier Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCriminals.map((c) => (
              <div key={c.id} className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm space-y-3 flex flex-col justify-between hover:border-slate-700 transition-all">
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-xs text-amber-400 font-bold">{c.id}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      c.status === 'WANTED' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                      c.status === 'ARRESTED' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
                    }`}>
                      {c.status}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white">{c.name}</h3>
                  <p className="text-xs text-slate-400">Alias: <strong className="text-slate-200">{c.alias}</strong></p>

                  <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800/80 text-xs space-y-1">
                    <div className="flex justify-between text-slate-400">
                      <span>Risk Rating:</span>
                      <strong className="text-red-400">{Math.round(c.riskScore * 100)}%</strong>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Network Centrality:</span>
                      <strong className="text-yellow-400">{c.centrality}</strong>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Linked FIR Cases:</span>
                      <strong className="text-white">{c.casesLinked}</strong>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedSuspect(c)}
                  className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold py-2 rounded-lg transition-colors border border-slate-700 mt-2"
                >
                  View Full Intelligence File
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Suspect Profile Modal */}
      {selectedSuspect && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-lg shadow-2xl p-6 text-slate-100 space-y-4">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white">
                👤 Suspect Dossier: {selectedSuspect.name} ({selectedSuspect.id})
              </h3>
              <button onClick={() => setSelectedSuspect(null)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-1 text-slate-300">
                <p><strong>Primary Alias:</strong> {selectedSuspect.alias}</p>
                <p><strong>Role / Category:</strong> {selectedSuspect.category}</p>
                <p><strong>Primary Jurisdiction:</strong> {selectedSuspect.primaryDistrict}</p>
                <p><strong>Last Known Location:</strong> {selectedSuspect.lastSeen}</p>
                <p><strong>Custody Status:</strong> <strong className="text-red-400">{selectedSuspect.status}</strong></p>
              </div>

              <div className="p-3 bg-red-950/20 border border-red-800/40 rounded-lg text-red-300">
                ⚠️ Advisory: Suspect possesses high NetworkX centrality ({selectedSuspect.centrality}). Avoid solo apprehension; coordinate with armed tactical unit.
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button onClick={() => setSelectedSuspect(null)} className="px-4 py-2 bg-slate-800 text-white font-bold rounded-lg text-xs">
                Close Intelligence File
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
