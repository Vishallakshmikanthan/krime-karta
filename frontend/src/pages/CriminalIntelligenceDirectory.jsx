import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';

export default function CriminalIntelligenceDirectory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedSuspect, setSelectedSuspect] = useState(null);

  const [criminals] = useState([
    {
      id: 'CRIM-001',
      name: "Wilson Garden Naga",
      alias: "Supari & Contract Boss",
      category: "Syndicate Boss",
      riskScore: 0.98,
      centrality: 0.88,
      casesLinked: 18,
      primaryDistrict: "Central & East Bengaluru",
      background: "Accused in multiple high-profile murder, extortion, and contract killing (supari) cases. Highly active in prison-network operations.",
      status: "ACTIVE ROWDY SHEET / CCB RAIDS",
      legalStatus: "Active rowdy sheet; subjected to regular CCB raids and Goonda Act monitoring."
    },
    {
      id: 'CRIM-002',
      name: "Cycle Ravi",
      alias: "Land & Arms Syndicate Lead",
      category: "Armed Extortion",
      riskScore: 0.94,
      centrality: 0.76,
      casesLinked: 14,
      primaryDistrict: "West Bengaluru",
      background: "Specializes in armed extortion, illegal land settlements, and weapon hoarding across western subdivisions.",
      status: "ACTIVE SURVEILLANCE",
      legalStatus: "Monitored under active rowdy-sheet surveillance; face of multiple preventive detentions."
    },
    {
      id: 'CRIM-003',
      name: "Double Meter Mohan",
      alias: "Meter Interest Extortionist",
      category: "Micro-Finance Extortion",
      riskScore: 0.88,
      centrality: 0.65,
      casesLinked: 11,
      primaryDistrict: "South Bengaluru",
      background: "Known for running aggressive micro-finance extortion rings and illegal, forceful real estate evictions.",
      status: "POLICE COUNSELLING & RAIDS",
      legalStatus: "Subjected to routine preventive police counselling and house raids."
    },
    {
      id: 'CRIM-004',
      name: "Bomb Naga (Nagaraj)",
      alias: "Hawala & Laundering Kingpin",
      category: "Money Laundering",
      riskScore: 0.96,
      centrality: 0.82,
      casesLinked: 16,
      primaryDistrict: "Sriramapura / North Bengaluru",
      background: "Operates massive money laundering networks, currency exchanges, and illegal real estate extortion rackets.",
      status: "FINANCIAL SURVEILLANCE (EOW)",
      legalStatus: "Active rowdy sheet; under tight financial and movement surveillance by Economic Offences Wing (EOW)."
    },
    {
      id: 'CRIM-005',
      name: "Kunigal Giri",
      alias: "Highway Dacoity Chief",
      category: "Highway Dacoity",
      riskScore: 0.92,
      centrality: 0.71,
      casesLinked: 15,
      primaryDistrict: "Tumakuru / Bengaluru Outer",
      background: "Head of organized highway robbery, inter-district dacoity, and contract extraction rings.",
      status: "INTER-DISTRICT SURVEILLANCE (ARS)",
      legalStatus: "Regularly arrested and under strict surveillance by inter-district Anti-Rowdy Squads (ARS)."
    },
    {
      id: 'CRIM-006',
      name: "Slum Bharatha",
      alias: "Turf Enforcer & Extortionist",
      category: "Turf Intimidation",
      riskScore: 0.86,
      centrality: 0.62,
      casesLinked: 10,
      primaryDistrict: "South Bengaluru",
      background: "Notorious for physical assaults, localized turf extortion, and continuous public intimidation.",
      status: "GOONDA ACT & EXTERNMENT",
      legalStatus: "Frequently targeted under the Goonda Act and emergency externment proceedings."
    },
    {
      id: 'CRIM-007',
      name: "Welding Kumar",
      alias: "Arms Possession Operative",
      category: "Illegal Firearms",
      riskScore: 0.89,
      centrality: 0.68,
      casesLinked: 12,
      primaryDistrict: "North Bengaluru",
      background: "Engaged in severe arms possession, real estate threats, and aggressive neighborhood intimidation.",
      status: "MOVEMENT MONITORING",
      legalStatus: "Placed under strict movement monitoring; targeted during localized police crackdowns."
    },
    {
      id: 'CRIM-008',
      name: "Hebbagodi Satisha",
      alias: "Sand & Industrial Extortionist",
      category: "Industrial Extortion",
      riskScore: 0.87,
      centrality: 0.69,
      casesLinked: 13,
      primaryDistrict: "Electronic City / Bengaluru South",
      background: "Operates real estate land grabbing, industrial construction extortion, and illegal sand transportation rackets.",
      status: "EXTERNMENT ORDERS",
      legalStatus: "Listed as active; face of multiple recent precinct-level externment orders."
    }
  ]);

  const filteredCriminals = criminals.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.alias.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.primaryDistrict.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'ALL' || c.category.toUpperCase().includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex h-screen bg-surface text-on-surface font-body-md overflow-hidden antialiased">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header title="Karnataka Criminal Intelligence Directory & Rowdy Sheet Registry" />

        <main className="flex-1 overflow-y-auto p-6 space-y-6 bg-surface-bright">
          {/* Header Controls */}
          <div className="bg-surface-container-lowest border border-outline-variant p-5 rounded-xl shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-xl font-bold text-on-surface flex items-center gap-2">
                👤 Authenticated Rowdy Sheeters & Dons Registry
              </h2>
              <p className="text-sm text-on-surface-variant">Official Karnataka State Crime Records Bureau (SCRB) & CCB tracked syndicate heads and repeat offenders.</p>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Name, District, Alias, ID..."
                className="bg-surface border border-outline-variant rounded-lg px-3 py-2 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary flex-1 md:w-64"
              />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-surface border border-outline-variant rounded-lg px-3 py-2 text-sm text-on-surface focus:outline-none focus:border-primary"
              >
                <option value="ALL">All Categories</option>
                <option value="SYNDICATE">Syndicate Leaders</option>
                <option value="EXTORTION">Extortion & Land</option>
                <option value="MONEY">Money Laundering</option>
                <option value="DACOITY">Highway Dacoity</option>
                <option value="FIREARMS">Illegal Firearms</option>
              </select>
            </div>
          </div>

          {/* Authenticated Dossier Table View */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm overflow-x-auto">
            <h3 className="text-base font-bold text-on-surface mb-4 flex items-center gap-2">
              📜 Active Rowdy-Sheet & Dons Intelligence Index (2026 Legal Status)
            </h3>
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-surface-container-low text-on-surface-variant text-xs uppercase font-mono border-b border-outline-variant">
                  <th className="p-3">ID / Name</th>
                  <th className="p-3">Operative Area / District</th>
                  <th className="p-3">Criminal Background & Activities</th>
                  <th className="p-3">2026 Police Status</th>
                  <th className="p-3 text-right">Risk Score</th>
                  <th className="p-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/60">
                {filteredCriminals.map((c) => (
                  <tr key={c.id} className="hover:bg-surface-container-low/50 transition-colors">
                    <td className="p-3 font-medium">
                      <div className="text-primary font-mono text-xs font-bold">{c.id}</div>
                      <div className="font-bold text-on-surface text-base">{c.name}</div>
                      <div className="text-xs text-on-surface-variant">Alias: {c.alias}</div>
                    </td>
                    <td className="p-3">
                      <span className="font-semibold text-on-surface">{c.primaryDistrict}</span>
                      <div className="text-xs text-on-surface-variant">{c.category}</div>
                    </td>
                    <td className="p-3 text-xs text-on-surface max-w-xs leading-snug">
                      {c.background}
                    </td>
                    <td className="p-3">
                      <span className="inline-block bg-error-container text-on-error-container text-[11px] font-bold px-2 py-1 rounded border border-error/30">
                        {c.legalStatus}
                      </span>
                    </td>
                    <td className="p-3 text-right font-mono font-bold text-error">
                      {Math.round(c.riskScore * 100)}%
                    </td>
                    <td className="p-3 text-center">
                      <button
                        onClick={() => setSelectedSuspect(c)}
                        className="px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary text-xs font-bold rounded border border-primary/30 transition-colors"
                      >
                        View Dossier
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cards View */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            {filteredCriminals.map((c) => (
              <div key={c.id} className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm space-y-3 flex flex-col justify-between hover:border-outline transition-all">
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-xs text-primary font-bold">{c.id}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded shadow-sm bg-error-container text-on-error-container border border-error/30">
                      {c.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-on-surface">{c.name}</h3>
                  <p className="text-xs text-on-surface-variant">District: <strong className="text-on-surface">{c.primaryDistrict}</strong></p>

                  <div className="p-3 bg-surface-container-low rounded-lg border border-outline-variant text-xs space-y-1.5 mt-2">
                    <div className="flex justify-between text-on-surface-variant">
                      <span>Risk Index:</span>
                      <strong className="text-error">{Math.round(c.riskScore * 100)}%</strong>
                    </div>
                    <div className="flex justify-between text-on-surface-variant">
                      <span>Centrality:</span>
                      <strong className="text-primary">{c.centrality}</strong>
                    </div>
                    <div className="flex justify-between text-on-surface-variant">
                      <span>Linked FIRs:</span>
                      <strong className="text-on-surface">{c.casesLinked}</strong>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedSuspect(c)}
                  className="w-full bg-surface-container-high hover:bg-surface-dim text-on-surface text-xs font-bold py-2 rounded-lg transition-colors border border-outline-variant mt-2 shadow-sm"
                >
                  Full Dossier
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Suspect Profile Modal */}
      {selectedSuspect && (
        <div className="fixed inset-0 bg-on-surface/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl w-full max-w-xl shadow-2xl p-6 text-on-surface space-y-4">
            <div className="flex justify-between items-center border-b border-outline-variant pb-3">
              <h3 className="text-lg font-bold text-on-surface flex items-center gap-2">
                👤 Authenticated Intelligence File: {selectedSuspect.name} ({selectedSuspect.id})
              </h3>
              <button onClick={() => setSelectedSuspect(null)} className="text-on-surface-variant hover:text-on-surface p-1">✕</button>
            </div>

            <div className="space-y-3 text-sm">
              <div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant space-y-2 text-on-surface">
                <p><strong className="text-on-surface-variant">Name / Alias:</strong> {selectedSuspect.name} ({selectedSuspect.alias})</p>
                <p><strong className="text-on-surface-variant">Primary Operative Area:</strong> {selectedSuspect.primaryDistrict}</p>
                <p><strong className="text-on-surface-variant">Criminal Category:</strong> {selectedSuspect.category}</p>
                <p><strong className="text-on-surface-variant">Activities & Background:</strong> {selectedSuspect.background}</p>
                <p><strong className="text-on-surface-variant">2026 Police Status:</strong> <strong className="text-error">{selectedSuspect.legalStatus}</strong></p>
              </div>

              <div className="p-3 bg-error-container border border-error/40 rounded-lg text-on-error-container text-xs font-medium">
                ⚠️ Advisory: High risk profile ({Math.round(selectedSuspect.riskScore * 100)}% Risk, Centrality {selectedSuspect.centrality}). Subject to routine CCB raids, BNSS Sec 129 bond execution, and Goonda Act monitoring.
              </div>
            </div>

            <div className="flex justify-end pt-3 border-t border-outline-variant">
              <button onClick={() => setSelectedSuspect(null)} className="px-5 py-2 bg-primary text-on-primary font-bold rounded-lg text-sm shadow-sm hover:opacity-90">
                Close Intelligence Dossier
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
