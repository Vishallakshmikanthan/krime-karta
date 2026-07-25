import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';

export default function CriminalIntelligenceDirectory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedSuspect, setSelectedSuspect] = useState(null);

  const [criminals, _setCriminals] = useState([
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
    <div className="flex h-screen bg-surface text-on-surface font-body-md overflow-hidden antialiased">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header title="Criminal Intelligence Directory & Syndicate Registry" />

        <main className="flex-1 overflow-y-auto p-6 space-y-6 bg-surface-bright">
          {/* Header Controls */}
          <div className="bg-surface-container-lowest border border-outline-variant p-5 rounded-xl shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-xl font-bold text-on-surface flex items-center gap-2">
                👤 Known Criminal Entity Dossiers
              </h2>
              <p className="text-sm text-on-surface-variant">National Crime Records Bureau (NCRB) tracked syndicate bosses, lieutenants, and financial conduits.</p>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Name, Alias, ID..."
                className="bg-surface border border-outline-variant rounded-lg px-3 py-2 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary flex-1 md:w-60"
              />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-surface border border-outline-variant rounded-lg px-3 py-2 text-sm text-on-surface focus:outline-none focus:border-primary"
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
              <div key={c.id} className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm space-y-3 flex flex-col justify-between hover:border-outline transition-all">
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-sm text-primary font-bold">{c.id}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded shadow-sm ${
                      c.status === 'WANTED' ? 'bg-error-container text-on-error-container border border-error/30' :
                      c.status === 'ARRESTED' ? 'bg-surface-container-high text-on-surface border border-outline-variant' : 'bg-primary-container text-on-primary-container border border-primary/30'
                    }`}>
                      {c.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-on-surface">{c.name}</h3>
                  <p className="text-sm text-on-surface-variant">Alias: <strong className="text-on-surface">{c.alias}</strong></p>

                  <div className="p-3 bg-surface-container-low rounded-lg border border-outline-variant text-sm space-y-1.5 mt-3">
                    <div className="flex justify-between text-on-surface-variant">
                      <span>Risk Rating:</span>
                      <strong className="text-error">{Math.round(c.riskScore * 100)}%</strong>
                    </div>
                    <div className="flex justify-between text-on-surface-variant">
                      <span>Network Centrality:</span>
                      <strong className="text-primary">{c.centrality}</strong>
                    </div>
                    <div className="flex justify-between text-on-surface-variant">
                      <span>Linked FIR Cases:</span>
                      <strong className="text-on-surface">{c.casesLinked}</strong>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedSuspect(c)}
                  className="w-full bg-surface-container-high hover:bg-surface-dim text-on-surface text-sm font-bold py-2 rounded-lg transition-colors border border-outline-variant mt-4 shadow-sm"
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
        <div className="fixed inset-0 bg-on-surface/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl w-full max-w-lg shadow-2xl p-6 text-on-surface space-y-4">
            <div className="flex justify-between items-center border-b border-outline-variant pb-4">
              <h3 className="text-lg font-bold text-on-surface">
                👤 Suspect Dossier: {selectedSuspect.name} ({selectedSuspect.id})
              </h3>
              <button onClick={() => setSelectedSuspect(null)} className="text-on-surface-variant hover:text-on-surface p-1">✕</button>
            </div>

            <div className="space-y-4 text-sm">
              <div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant space-y-2 text-on-surface">
                <p><strong className="text-on-surface-variant">Primary Alias:</strong> {selectedSuspect.alias}</p>
                <p><strong className="text-on-surface-variant">Role / Category:</strong> {selectedSuspect.category}</p>
                <p><strong className="text-on-surface-variant">Primary Jurisdiction:</strong> {selectedSuspect.primaryDistrict}</p>
                <p><strong className="text-on-surface-variant">Last Known Location:</strong> {selectedSuspect.lastSeen}</p>
                <p><strong className="text-on-surface-variant">Custody Status:</strong> <strong className={selectedSuspect.status === 'WANTED' ? 'text-error' : 'text-primary'}>{selectedSuspect.status}</strong></p>
              </div>

              <div className="p-3 bg-error-container border border-error/40 rounded-lg text-on-error-container text-sm font-medium">
                ⚠️ Advisory: Suspect possesses high NetworkX centrality ({selectedSuspect.centrality}). Avoid solo apprehension; coordinate with armed tactical unit.
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-outline-variant">
              <button onClick={() => setSelectedSuspect(null)} className="px-5 py-2.5 bg-primary hover:bg-primary-container text-on-primary hover:text-on-primary-container font-bold rounded-lg text-sm shadow-sm transition-colors">
                Close Intelligence File
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
