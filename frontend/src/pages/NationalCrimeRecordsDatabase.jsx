import React, { useState, useEffect } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';
import { fetchCrimeRecords, createCrimeRecord } from '../services/apiClient';

export default function NationalCrimeRecordsDatabase() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('ALL');
  
  const [records, setRecords] = useState([]);
  
  useEffect(() => {
    fetchCrimeRecords().then(data => {
      if (data && data.length > 0) {
        setRecords(data);
      }
    });
  }, []);

  const [selectedFIR, setSelectedFIR] = useState(null);
  const [showNewFIRModal, setShowNewFIRModal] = useState(false);
  const [newFIRTitle, setNewFIRTitle] = useState('');
  const [newFIRCategory, setNewFIRCategory] = useState('Murder & Extortion (Sec 103 BNS)');
  const [newFIRDistrict, setNewFIRDistrict] = useState('Bengaluru City (Central)');

  const handleSubmitNewFIR = async () => {
    const newRecord = {
      id: `FIR-2026-${Math.floor(Math.random() * 90000) + 10000}`,
      title: newFIRTitle,
      date: new Date().toISOString().split('T')[0],
      status: 'ACTIVE_INVESTIGATION',
      category: newFIRCategory,
      district: newFIRDistrict,
      primarySuspect: 'Unknown',
      assignedTo: 'Assigned Pending'
    };
    
    try {
      await createCrimeRecord(newRecord);
      setRecords(prev => [...prev, newRecord]);
      setShowNewFIRModal(false);
      setNewFIRTitle('');
    } catch (err) {
      console.error(err);
    }
  };

  const filteredRecords = records.filter(r => {
    const matchesSearch = r.title.toLowerCase().includes(searchQuery.toLowerCase()) || r.id.toLowerCase().includes(searchQuery.toLowerCase()) || r.primarySuspect.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === 'ALL' || r.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex h-screen bg-surface text-on-surface font-body-md overflow-hidden antialiased">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header title="National & Karnataka State Crime Records Database (CCTNS Sync)" />

        <main className="flex-1 overflow-y-auto p-6 space-y-6 bg-surface-bright">
          <div className="bg-surface-container-lowest border border-outline-variant p-5 rounded-xl shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-xl font-bold text-on-surface flex items-center gap-2">
                📂 Authenticated CCTNS FIR & Case Dossier Repository (2026)
              </h2>
              <p className="text-sm text-on-surface-variant">Synchronized with Karnataka State Crime Records Bureau (SCRB) filings & CCB intelligence reports.</p>
            </div>

            <button onClick={() => setShowNewFIRModal(true)} className="bg-primary text-on-primary font-bold px-4 py-2 rounded shadow-sm hover:bg-primary-container hover:text-on-primary-container transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px]">add_circle</span>
              File New FIR Record
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
                  placeholder="Search FIR ID, Title, or Suspect Name..."
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
                <option value="GOONDA_ACT_PROCEEDINGS">Goonda Act Proceedings</option>
                <option value="EXTERNMENT_ORDER_SERVED">Externment Order Served</option>
              </select>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-on-surface">
                <thead className="bg-surface-container-high text-on-surface-variant font-bold uppercase text-[10px] border-b border-outline-variant">
                  <tr>
                    <th className="p-4">CCTNS FIR Number</th>
                    <th className="p-4">Case Title & Statutory Category</th>
                    <th className="p-4">Jurisdiction</th>
                    <th className="p-4">Primary Suspect / Rowdy Sheeter</th>
                    <th className="p-4">Legal Status (2026)</th>
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
                      <td className="p-4 font-bold text-error">{record.primarySuspect}</td>
                      <td className="p-4">
                        <span className={`text-[10px] font-bold px-2 py-1 rounded shadow-sm ${
                          record.status === 'ACTIVE_INVESTIGATION' ? 'bg-error-container text-on-error-container border border-error/20' :
                          record.status === 'ARREST_WARRANT_ISSUED' ? 'bg-error-container text-on-error-container border border-error/40' :
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
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl w-full max-w-2xl shadow-2xl p-6 text-on-surface space-y-5">
            <div className="flex justify-between items-center border-b border-outline-variant pb-3">
              <div>
                <h3 className="text-lg font-bold">CCTNS Case Dossier: {selectedFIR.title}</h3>
                <p className="text-sm font-mono text-primary font-bold">{selectedFIR.id}</p>
              </div>
              <button onClick={() => setSelectedFIR(null)} className="text-on-surface-variant hover:text-on-surface p-1">✕</button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <p><span className="text-on-surface-variant font-bold">Date Filed:</span> {selectedFIR.date}</p>
                <p><span className="text-on-surface-variant font-bold">Statutory Head:</span> {selectedFIR.category}</p>
                <p><span className="text-on-surface-variant font-bold">Jurisdiction:</span> {selectedFIR.district}</p>
              </div>
              <div className="space-y-2">
                <p><span className="text-on-surface-variant font-bold">Investigating Unit:</span> {selectedFIR.assignedTo}</p>
                <p><span className="text-on-surface-variant font-bold">Primary Rowdy Sheeter:</span> <span className="font-bold text-error">{selectedFIR.primarySuspect}</span></p>
                <p><span className="text-on-surface-variant font-bold">2026 Legal Status:</span> {selectedFIR.status.replace(/_/g, ' ')}</p>
              </div>
            </div>

            <div className="bg-surface-container-low p-4 rounded border border-outline-variant">
              <h4 className="font-bold text-sm mb-2 text-on-surface">SCRB Official Case Narrative</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Incident logged in CCTNS repository. Target suspect ({selectedFIR.primarySuspect}) is listed under active CCB rowdy-sheet surveillance and subject to BNSS Sec 126/129 preventive bond proceedings. NetworkX centrality analysis indicates active crime syndicate linkage across {selectedFIR.district}.
              </p>
            </div>

            <div className="flex justify-end gap-3 pt-3 border-t border-outline-variant">
              <button onClick={() => setSelectedFIR(null)} className="px-4 py-2 bg-surface-container-high hover:bg-surface-dim text-on-surface font-bold rounded-lg text-xs border border-outline-variant">
                Close Dossier
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
              <h3 className="text-lg font-bold">File New CCTNS FIR Record</h3>
              <button onClick={() => setShowNewFIRModal(false)} className="text-on-surface-variant hover:text-on-surface">✕</button>
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">Case Title</label>
                <input type="text" value={newFIRTitle} onChange={(e) => setNewFIRTitle(e.target.value)} className="w-full bg-surface border border-outline-variant rounded-lg px-3 py-2 text-on-surface focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Enter case title..." />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">Category</label>
                  <select value={newFIRCategory} onChange={(e) => setNewFIRCategory(e.target.value)} className="w-full bg-surface border border-outline-variant rounded-lg px-3 py-2 text-on-surface focus:outline-none focus:ring-1 focus:ring-primary">
                    <option>Murder & Extortion (Sec 103 BNS)</option>
                    <option>Armed Extortion & Arms Act</option>
                    <option>Highway Dacoity (Sec 310 BNS)</option>
                    <option>Cyber Fraud (IT Act)</option>
                    <option>NDPS Act (Narcotics)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">District</label>
                  <select value={newFIRDistrict} onChange={(e) => setNewFIRDistrict(e.target.value)} className="w-full bg-surface border border-outline-variant rounded-lg px-3 py-2 text-on-surface focus:outline-none focus:ring-1 focus:ring-primary">
                    <option>Bengaluru City (Central)</option>
                    <option>West Bengaluru</option>
                    <option>Tumakuru District</option>
                    <option>Belagavi District</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-outline-variant">
              <button onClick={() => setShowNewFIRModal(false)} className="px-4 py-2 bg-surface-container-high text-on-surface font-bold rounded-lg text-sm border border-outline-variant">
                Cancel
              </button>
              <button onClick={handleSubmitNewFIR} className="px-4 py-2 bg-primary text-on-primary font-bold rounded-lg text-sm shadow-sm">
                Submit CCTNS Record
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
