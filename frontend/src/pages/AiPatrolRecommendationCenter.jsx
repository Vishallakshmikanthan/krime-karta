import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';

export default function AiPatrolRecommendationCenter() {
  const [recommendations, setRecommendations] = useState([
    {
      id: 'REC-2026-8891',
      priority: 'HIGH',
      action: 'Deploy 2 Mobile Patrol Units',
      location: 'Sector 4, Near Majestic Transport Hub',
      riskScore: 94,
      confidence: 88,
      requiredOfficers: 4,
      reasoning: 'Spike in reported petty theft and robbery incidents over the last 4 hours correlates with historical patterns during major transit periods. XGBoost model predicts 88% confidence incident risk.',
      status: 'pending' // 'pending' | 'approved' | 'rejected'
    },
    {
      id: 'REC-2026-8892',
      priority: 'MEDIUM',
      action: 'Increase Foot Patrol & CCTV Surveillance',
      location: 'Commercial Street Market Area',
      riskScore: 62,
      confidence: 74,
      requiredOfficers: 2,
      reasoning: 'Crowd density expected to surge after salary disbursement window. Historical data shows moderate nuisance reports under these lighting and temporal conditions.',
      status: 'pending'
    },
    {
      id: 'REC-2026-8893',
      priority: 'HIGH',
      action: 'Set Up Vehicle Checkpoint (Intercept Mode)',
      location: 'Outer Ring Road Checkpost B',
      riskScore: 86,
      confidence: 91,
      requiredOfficers: 6,
      reasoning: 'Anomalous movement pattern detected for syndicate vehicles linked to Rajan Don Varma network. Isolation Forest flagged traffic volume spike.',
      status: 'pending'
    }
  ]);

  const [fieldFeedback, setFieldFeedback] = useState([
    { id: 1, officer: 'Sgt. Ramesh K.', time: 'Today, 10:42 AM', text: 'AI recommendation for Sector 4 was accurate. Intercepted two individuals matching the historical robbery profile.' },
    { id: 2, officer: 'Insp. Patil', time: 'Yesterday, 7:45 PM', text: 'Commercial Street prediction was slightly early. Crowds peaked an hour later than anticipated.' }
  ]);

  const [newNote, setNewNote] = useState('');
  const [editingId, setEditingId] = useState(null);

  const handleDecision = (id, newStatus) => {
    setRecommendations((prev) =>
      prev.map((rec) => (rec.id === id ? { ...rec, status: newStatus } : rec))
    );
  };

  const handleAddObservation = (e) => {
    e.preventDefault();
    if (!newNote.trim()) return;
    setFieldFeedback((prev) => [
      { id: Date.now(), officer: 'DCP Ananya Rao', time: 'Just now', text: newNote },
      ...prev
    ]);
    setNewNote('');
  };

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden font-sans">
      <Sidebar />
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header title="AI Patrol Recommendation Center" />
        
        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                🤖 AI Patrol Deployment & Resource Optimization
                <span className="bg-amber-500/10 text-amber-400 text-xs px-2.5 py-1 rounded font-semibold border border-amber-500/20">
                  XGBoost + Isolation Forest Active
                </span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Real-time ML patrol directives powered by spatio-temporal risk scoring and CCTV anomaly analytics.
              </p>
            </div>
            <div className="mt-3 md:mt-0 flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-slate-300 font-mono">Model Accuracy: 92.4%</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recommendations List */}
            <div className="lg:col-span-2 space-y-4">
              {recommendations.map((rec) => (
                <div
                  key={rec.id}
                  className={`bg-slate-900 border rounded-xl p-5 shadow-sm transition-all ${
                    rec.status === 'approved'
                      ? 'border-emerald-500/50 bg-emerald-950/10'
                      : rec.status === 'rejected'
                      ? 'border-red-500/40 bg-red-950/10 opacity-75'
                      : 'border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                          rec.priority === 'HIGH' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                        }`}>
                          {rec.priority} PRIORITY
                        </span>
                        <span className="text-xs font-mono text-slate-400">ID: {rec.id}</span>
                      </div>
                      
                      <h3 className="text-base font-bold text-white">{rec.action}</h3>
                      <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                        <span className="material-symbols-outlined text-[16px] text-amber-400">location_on</span>
                        {rec.location}
                      </p>
                    </div>

                    <div className="text-right flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto">
                      <div className="text-2xl font-black text-red-400">{rec.riskScore}</div>
                      <span className="text-[10px] text-slate-400 uppercase font-bold">Risk Score</span>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-slate-950/60 rounded-lg border border-slate-800">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">AI Reasoning & Factor Attribution</span>
                    <p className="text-xs text-slate-200">{rec.reasoning}</p>
                  </div>

                  <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-800/80">
                    <div className="flex items-center gap-4 text-xs text-slate-400 w-full sm:w-auto justify-between sm:justify-start">
                      <span>Confidence: <strong className="text-emerald-400">{rec.confidence}%</strong></span>
                      <span>Officers: <strong className="text-white">{rec.requiredOfficers}</strong></span>
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                      {rec.status === 'approved' ? (
                        <div className="flex items-center gap-2">
                          <span className="bg-emerald-500/20 text-emerald-400 text-xs px-3 py-1.5 rounded-lg font-bold border border-emerald-500/40 flex items-center gap-1">
                            ✓ Patrol Dispatched
                          </span>
                          <button
                            onClick={() => handleDecision(rec.id, 'pending')}
                            className="text-xs text-slate-400 hover:text-slate-200 underline"
                          >
                            Reset
                          </button>
                        </div>
                      ) : rec.status === 'rejected' ? (
                        <div className="flex items-center gap-2">
                          <span className="bg-red-500/20 text-red-400 text-xs px-3 py-1.5 rounded-lg font-bold border border-red-500/40 flex items-center gap-1">
                            ✕ Directive Rejected
                          </span>
                          <button
                            onClick={() => handleDecision(rec.id, 'pending')}
                            className="text-xs text-slate-400 hover:text-slate-200 underline"
                          >
                            Reset
                          </button>
                        </div>
                      ) : (
                        <>
                          <button
                            onClick={() => handleDecision(rec.id, 'approved')}
                            className="flex-1 sm:flex-none bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-2 rounded-lg transition-all flex items-center justify-center gap-1 shadow"
                          >
                            <span>Approve & Deploy</span>
                          </button>
                          <button
                            onClick={() => handleDecision(rec.id, 'rejected')}
                            className="flex-1 sm:flex-none bg-slate-800 hover:bg-red-900/60 text-slate-300 hover:text-red-200 border border-slate-700 text-xs font-bold px-3 py-2 rounded-lg transition-all"
                          >
                            <span>Reject</span>
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Panel: Historical Efficacy & Field Feedback */}
            <div className="space-y-6">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm">
                <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-amber-400">history</span>
                  Historical Efficacy Metrics
                </h3>

                <div className="p-3 bg-slate-950/80 rounded-lg border border-slate-800 text-center mb-4">
                  <span className="text-2xl font-black text-emerald-400">86.4%</span>
                  <p className="text-[11px] text-slate-400 mt-0.5">Incident Prevention Rate (30 Days)</p>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span>Approved Directives:</span>
                    <strong className="text-white">42 / 48</strong>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Avg Intercept Time:</span>
                    <strong className="text-white">12.4 minutes</strong>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Officer Response Score:</span>
                    <strong className="text-emerald-400">4.8 / 5.0</strong>
                  </div>
                </div>
              </div>

              {/* Field Feedback Form & Observations */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm">
                <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-indigo-400">rate_review</span>
                  Field Officer Intelligence Log
                </h3>

                <form onSubmit={handleAddObservation} className="mb-4">
                  <textarea
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    placeholder="Add field observation or CCTV insight..."
                    rows={2}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 focus:outline-none focus:border-amber-400"
                  />
                  <button
                    type="submit"
                    className="mt-2 w-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold py-1.5 rounded-lg transition-colors"
                  >
                    Submit Field Observation
                  </button>
                </form>

                <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                  {fieldFeedback.map((fb) => (
                    <div key={fb.id} className="p-3 bg-slate-950/60 rounded-lg border border-slate-800 text-xs">
                      <div className="flex justify-between text-[11px] font-bold text-amber-400 mb-1">
                        <span>{fb.officer}</span>
                        <span className="text-slate-500 font-normal">{fb.time}</span>
                      </div>
                      <p className="text-slate-300 italic font-body">"{fb.text}"</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
