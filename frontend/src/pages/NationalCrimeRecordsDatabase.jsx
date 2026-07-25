import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';

export default function NationalCrimeRecordsDatabase() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedStatus, setSelectedStatus] = useState('ALL');
  const [activeDossier, setActiveDossier] = useState(null);
  const [showNewFirModal, setShowNewFirModal] = useState(false);

  const [records, setRecords] = useState([
    {
      fir_number: 'FIR 142/2024',
      title: 'Operation Red Dawn - Contraband Intercept',
      category: 'Narcotics (NDPS)',
      severity: 'CRITICAL',
      status: 'Active Invest.',
      date: '2026-07-24 01:40',
      district: 'Hubballi-Dharwad',
      station: 'Hubballi Central PS',
      suspects: 2,
      arrests: 1,
      officer: 'Insp. Patil',
      summary: 'Surveillance team intercepted vehicle KA-01-MJ-4091 based on tip-off. Field test confirms contraband contraband. Link to organized syndicate Shadow suspected.'
    },
    {
      fir_number: 'FIR 189/2024',
      title: 'Pension Portal Phishing Wave',
      category: 'Cyber Crime',
      severity: 'HIGH',
      status: 'Under Review',
      date: '2026-07-23 15:15',
      district: 'Bengaluru Central',
      station: 'Indiranagar PS',
      suspects: 4,
      arrests: 0,
      officer: 'Sgt. Ramesh K.',
      summary: 'Coordinated credential phishing wave detected against state pension beneficiaries. Payment mule accounts mapped to three districts.'
    },
    {
      fir_number: 'FIR 177/2024',
      title: 'Commercial Burglary at MG Road Branch',
      category: 'Financial Fraud',
      severity: 'MEDIUM',
      status: 'Closed/Archived',
      date: '2026-07-21 03:05',
      district: 'Bengaluru Central',
      station: 'Commercial Street PS',
      suspects: 1,
      arrests: 1,
      officer: 'DCP Ananya Rao',
      summary: 'Skimming device recovered from ATM terminal. Suspect identified via high-definition CCTV feed.'
    },
    {
      fir_number: 'FIR 210/2024',
      title: 'Armed Assault near Metro Station',
      category: 'Violent Crime',
      severity: 'HIGH',
      status: 'Active Invest.',
      date: '2026-07-20 22:15',
      district: 'Mysuru City',
      station: 'Mysuru South PS',
      suspects: 3,
      arrests: 2,
      officer: 'Insp. Gowda',
      summary: 'Physical altercation reported outside station exit. Weapon seized; forensic analysis in progress.'
    }
  ]);

  // Filter records dynamically
  const filteredRecords = records.filter((rec) => {
    const matchesSearch =
      rec.fir_number.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rec.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rec.district.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'ALL' || rec.category.toUpperCase().includes(selectedCategory);
    const matchesStatus = selectedStatus === 'ALL' || rec.status.toUpperCase().includes(selectedStatus);
    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden font-sans">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header title="National Crime Records Database (NCRB Registry)" />

        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Top Controls & Search Bar */}
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                📁 Crime Incident FIR Repository
              </h2>
              <p className="text-xs text-slate-400">Searchable central database of police FIR records, evidence trails, and investigative statuses.</p>
            </div>

            <button
              onClick={() => setShowNewFirModal(true)}
              className="bg-red-600 hover:bg-red-500 text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow flex items-center gap-2 transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">add</span>
              File New FIR Record
            </button>
          </div>

          {/* Filter Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-[11px] font-bold text-slate-400 mb-1">Search FIR Number / Title</label>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type FIR-142, Phishing..."
                className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-xs text-white focus:border-amber-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-400 mb-1">Filter Crime Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-xs text-white"
              >
                <option value="ALL">All Categories</option>
                <option value="NARCOTICS">Narcotics</option>
                <option value="CYBER">Cyber Crime</option>
                <option value="FINANCIAL">Financial Fraud</option>
                <option value="VIOLENT">Violent Crime</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-400 mb-1">Investigation Status</label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-xs text-white"
              >
                <option value="ALL">All Statuses</option>
                <option value="ACTIVE">Active Investigation</option>
                <option value="REVIEW">Under Review</option>
                <option value="CLOSED">Closed / Archived</option>
              </select>
            </div>
          </div>

          {/* Crime Records Data Table */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-950 text-slate-400 font-bold uppercase text-[10px] border-b border-slate-800">
                  <tr>
                    <th className="p-3.5">FIR Registration</th>
                    <th className="p-3.5">Incident Title</th>
                    <th className="p-3.5">Category</th>
                    <th className="p-3.5">Jurisdiction</th>
                    <th className="p-3.5">Status</th>
                    <th className="p-3.5">Investigating Officer</th>
                    <th className="p-3.5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {filteredRecords.map((rec, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/60 transition-colors">
                      <td className="p-3.5 font-bold font-mono text-amber-400">{rec.fir_number}</td>
                      <td className="p-3.5 font-bold text-white max-w-xs truncate">{rec.title}</td>
                      <td className="p-3.5">
                        <span className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded text-[10px] font-semibold border border-slate-700">
                          {rec.category}
                        </span>
                      </td>
                      <td className="p-3.5">{rec.district} ({rec.station})</td>
                      <td className="p-3.5">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          rec.status.includes('Active') ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                          rec.status.includes('Review') ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                          'bg-emerald-500/20 text-emerald-400'
                        }`}>
                          {rec.status}
                        </span>
                      </td>
                      <td className="p-3.5 text-slate-300 font-semibold">{rec.officer}</td>
                      <td className="p-3.5 text-right">
                        <button
                          onClick={() => setActiveDossier(rec)}
                          className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-bold px-3 py-1.5 rounded border border-slate-700 transition-colors"
                        >
                          View Dossier
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      {/* Dossier Modal */}
      {activeDossier && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-xl shadow-2xl p-6 text-slate-100 space-y-4">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                📄 FIR Case File: {activeDossier.fir_number}
              </h3>
              <button onClick={() => setActiveDossier(null)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            <div className="space-y-3 text-xs">
              <h4 className="text-sm font-bold text-amber-400">{activeDossier.title}</h4>
              <div className="grid grid-cols-2 gap-2 text-slate-300 bg-slate-950 p-3 rounded-lg border border-slate-800">
                <div><strong>Category:</strong> {activeDossier.category}</div>
                <div><strong>Jurisdiction:</strong> {activeDossier.district}</div>
                <div><strong>Date Reported:</strong> {activeDossier.date}</div>
                <div><strong>Lead Officer:</strong> {activeDossier.officer}</div>
              </div>

              <div>
                <span className="font-bold text-slate-400 block mb-1">Case Investigation Summary:</span>
                <p className="p-3 bg-slate-950 text-slate-200 rounded-lg border border-slate-800 font-body leading-relaxed">
                  {activeDossier.summary}
                </p>
              </div>
            </div>

            <div className="flex justify-end pt-3">
              <button onClick={() => setActiveDossier(null)} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-lg">
                Close Case File
              </button>
            </div>
          </div>
        </div>
      )}

      {/* New FIR Entry Modal */}
      {showNewFirModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-md shadow-2xl p-6 text-slate-100 space-y-4">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white">File New Crime FIR Record</h3>
              <button onClick={() => setShowNewFirModal(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setShowNewFirModal(false);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="block text-slate-400 font-bold mb-1">FIR Title</label>
                <input required type="text" placeholder="e.g. Commercial Robbery" className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-white" />
              </div>
              <div>
                <label className="block text-slate-400 font-bold mb-1">Category</label>
                <select className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-white">
                  <option>Robbery</option>
                  <option>Cyber Crime</option>
                  <option>Assault</option>
                  <option>Narcotics</option>
                </select>
              </div>
              <div>
                <label className="block text-slate-400 font-bold mb-1">Incident Summary</label>
                <textarea rows={3} className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-white" />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button type="button" onClick={() => setShowNewFirModal(false)} className="px-3 py-1.5 bg-slate-800 text-slate-300 rounded font-bold">Cancel</button>
                <button type="submit" className="px-4 py-1.5 bg-red-600 text-white rounded font-bold">Save FIR Record</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
