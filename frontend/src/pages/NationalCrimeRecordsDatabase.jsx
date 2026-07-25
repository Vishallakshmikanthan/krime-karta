import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';

export default function NationalCrimeRecordsDatabase() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('ALL');
  
  const [records, _setRecords] = useState([
    { id: 'FIR-2024-142', title: 'Commercial St Armed Robbery', date: '2024-10-12', status: 'ACTIVE_INVESTIGATION', category: 'Armed Robbery', district: 'Bengaluru Central', primarySuspect: 'Rajan Don Varma', assignedTo: 'Insp. Patil' },
    { id: 'FIR-2024-089', title: 'Electronic City Cyber Fraud Syndicate', date: '2024-09-04', status: 'ARREST_WARRANT_ISSUED', category: 'Cyber Fraud', district: 'Bengaluru South', primarySuspect: 'Unknown', assignedTo: 'DCP Rao' },
    { id: 'FIR-2024-211', title: 'Mysuru Highway Narcotics Transit', date: '2024-10-18', status: 'CLOSED_CONVICTED', category: 'Narcotics', district: 'Mysuru City', primarySuspect: 'Anil Hawala Mehta', assignedTo: 'Sgt. Ramesh' }
  ]);

  const [selectedFIR, setSelectedFIR] = useState(null);
  const [showNewFIRModal, setShowNewFIRModal] = useState(false);

  const filteredRecords = records.filter(r => {
    const matchesSearch = r.title.toLowerCase().includes(searchQuery.toLowerCase()) || r.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === 'ALL' || r.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex h-screen bg-surface text-on-surface font-body-md overflow-hidden antialiased">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header title="National Crime Records Database (NCRB)" />

        <main className="flex-1 overflow-y-auto p-6 space-y-6 bg-surface-bright">
          <div className="bg-surface-container-lowest border border-outline-variant p-5 rounded-xl shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-xl font-bold text-on-surface flex items-center gap-2">
                📂 Active FIR & Case Dossier Repository
              </h2>
              <p className="text-sm text-on-surface-variant">Centralized database for First Information Reports, evidence payloads, and suspect tracking.</p>
            </div>

            <button onClick={() => setShowNewFIRModal(true)} className="bg-primary text-on-primary font-bold px-4 py-2 rounded shadow-sm hover:bg-primary-container hover:text-on-primary-container transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px]">add_circle</span>
              File New FIR
            </button>
          </div>

          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm overflow-hidden">
            <div className="p-4 border-b border-outline-variant bg-surface-container-low flex flex-col sm:flex-row gap-4 justify-between items-center">
              <div className="relative w-full sm:w-96">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search FIR ID, Title, or Suspect..."
                  className="w-full bg-surface border border-outline-variant rounded-lg pl-9 pr-3 py-2 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              <select 
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="bg-surface border border-outline-variant rounded-lg px-3 py-2 text-sm text-on-surface focus:outline-none focus:border-primary w-full sm:w-auto"
              >
                <option value="ALL">All Case Statuses</option>
                <option value="ACTIVE_INVESTIGATION">Active Investigation</option>
                <option value="ARREST_WARRANT_ISSUED">Arrest Warrant Issued</option>
                <option value="CLOSED_CONVICTED">Closed - Convicted</option>
              </select>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-on-surface">
                <thead className="bg-surface-container-high text-on-surface-variant font-bold uppercase text-[10px] border-b border-outline-variant">
                  <tr>
                    <th className="p-4">FIR Number</th>
                    <th className="p-4">Case Title & Category</th>
                    <th className="p-4">Jurisdiction</th>
                    <th className="p-4">Primary Suspect</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  {filteredRecords.map((record) => (
                    <tr key={record.id} className="hover:bg-surface-container-low transition-colors">
                      <td className="p-4 font-mono font-bold text-primary">{record.id}</td>
                      <td className="p-4">
                        <p className="font-bold">{record.title}</p>
                        <p className="text-xs text-on-surface-variant">{record.category} • {record.date}</p>
                      </td>
                      <td className="p-4 text-on-surface-variant font-medium">{record.district}</td>
                      <td className="p-4">{record.primarySuspect}</td>
                      <td className="p-4">
                        <span className={`text-[10px] font-bold px-2 py-1 rounded shadow-sm ${
                          record.status === 'ACTIVE_INVESTIGATION' ? 'bg-error-container text-on-error-container border border-error/20' :
                          record.status === 'CLOSED_CONVICTED' ? 'bg-surface-container-high text-on-surface border border-outline-variant' :
                          'bg-primary-container text-on-primary-container border border-primary/20'
                        }`}>
                          {record.status.replace(/_/g, ' ')}
                        </span>
                      </td>
                      <td className="p-4">
                        <button onClick={() => setSelectedFIR(record)} className="text-primary hover:text-on-primary-container font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                          View Dossier <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
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

      {/* View FIR Dossier Modal */}
      {selectedFIR && (
        <div className="fixed inset-0 bg-on-surface/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl w-full max-w-2xl shadow-2xl p-6 text-on-surface space-y-6">
            <div className="flex justify-between items-center border-b border-outline-variant pb-4">
              <div>
                <h3 className="text-lg font-bold">Case Dossier: {selectedFIR.title}</h3>
                <p className="text-sm font-mono text-primary font-bold">{selectedFIR.id}</p>
              </div>
              <button onClick={() => setSelectedFIR(null)} className="text-on-surface-variant hover:text-on-surface p-1">✕</button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-3">
                <p><span className="text-on-surface-variant font-bold">Date Filed:</span> {selectedFIR.date}</p>
                <p><span className="text-on-surface-variant font-bold">Category:</span> {selectedFIR.category}</p>
                <p><span className="text-on-surface-variant font-bold">Jurisdiction:</span> {selectedFIR.district}</p>
              </div>
              <div className="space-y-3">
                <p><span className="text-on-surface-variant font-bold">Lead Officer:</span> {selectedFIR.assignedTo}</p>
                <p><span className="text-on-surface-variant font-bold">Primary Suspect:</span> <span className="font-bold text-error">{selectedFIR.primarySuspect}</span></p>
                <p><span className="text-on-surface-variant font-bold">Status:</span> {selectedFIR.status.replace(/_/g, ' ')}</p>
              </div>
            </div>

            <div className="bg-surface-container-low p-4 rounded border border-outline-variant">
              <h4 className="font-bold text-sm mb-2 text-on-surface">Initial Report Summary</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Incident reported at approximately 22:45 HRS. Suspects armed with crude weapons intercepted a logistics transit vehicle. 
                NetworkX centrality indicates likely linkage to the Rajan Varma syndicate operations.
              </p>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-outline-variant">
              <button onClick={() => setSelectedFIR(null)} className="px-4 py-2 bg-surface-container-high hover:bg-surface-dim text-on-surface font-bold rounded-lg text-sm border border-outline-variant transition-colors">
                Close Dossier
              </button>
              <button className="px-4 py-2 bg-primary hover:bg-primary-container text-on-primary hover:text-on-primary-container font-bold rounded-lg text-sm transition-colors shadow-sm">
                Update Case Status
              </button>
            </div>
          </div>
        </div>
      )}

      {/* New FIR Modal */}
      {showNewFIRModal && (
        <div className="fixed inset-0 bg-on-surface/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl w-full max-w-lg shadow-2xl p-6 text-on-surface space-y-4">
            <div className="flex justify-between items-center border-b border-outline-variant pb-3">
              <h3 className="text-lg font-bold">File New First Information Report (FIR)</h3>
              <button onClick={() => setShowNewFIRModal(false)} className="text-on-surface-variant hover:text-on-surface">✕</button>
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">Case Title</label>
                <input type="text" className="w-full bg-surface border border-outline-variant rounded-lg px-3 py-2 text-on-surface focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Enter concise case title..." />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">Category</label>
                  <select className="w-full bg-surface border border-outline-variant rounded-lg px-3 py-2 text-on-surface focus:outline-none focus:ring-1 focus:ring-primary">
                    <option>Armed Robbery</option>
                    <option>Cyber Fraud</option>
                    <option>Narcotics</option>
                    <option>Assault</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">District</label>
                  <select className="w-full bg-surface border border-outline-variant rounded-lg px-3 py-2 text-on-surface focus:outline-none focus:ring-1 focus:ring-primary">
                    <option>Bengaluru Central</option>
                    <option>Mysuru City</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">Incident Summary</label>
                <textarea className="w-full bg-surface border border-outline-variant rounded-lg px-3 py-2 text-on-surface focus:outline-none focus:ring-1 focus:ring-primary h-24" placeholder="Detailed description of the incident..."></textarea>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-outline-variant">
              <button onClick={() => setShowNewFIRModal(false)} className="px-4 py-2 bg-surface-container-high hover:bg-surface-dim text-on-surface font-bold rounded-lg text-sm border border-outline-variant transition-colors">
                Cancel
              </button>
              <button onClick={() => setShowNewFIRModal(false)} className="px-4 py-2 bg-primary hover:bg-primary-container text-on-primary hover:text-on-primary-container font-bold rounded-lg text-sm transition-colors shadow-sm">
                Submit FIR Record
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
