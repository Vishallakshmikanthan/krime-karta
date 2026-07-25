import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';

export default function AiPatrolRecommendationCenter() {
  const [recommendations, setRecommendations] = useState([
    {
      id: 'REC-2026-8891',
      sector: 'Bengaluru Central - Commercial St',
      riskScore: 0.89,
      factors: ['History of late-night theft', 'Low illumination identified', 'Syndicate activity proxy'],
      status: 'PENDING_REVIEW'
    },
    {
      id: 'REC-2026-8892',
      sector: 'Mysuru City - Industrial Hub',
      riskScore: 0.94,
      factors: ['Isolation Forest Anomaly', 'Repeated trespassing alerts', 'High-value asset proximity'],
      status: 'APPROVED'
    }
  ]);

  const [newNote, setNewNote] = useState('');

  const handleDecision = (id, decision) => {
    setRecommendations(prev => prev.map(rec => 
      rec.id === id ? { ...rec, status: decision === 'APPROVE' ? 'APPROVED' : 'REJECTED' } : rec
    ));
  };

  return (
    <div className="flex h-screen bg-surface text-on-surface font-body-md overflow-hidden antialiased">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header title="AI Patrol & Field Resource Allocation" />

        <main className="flex-1 overflow-y-auto p-6 space-y-6 bg-surface-bright">
          <div className="bg-surface-container-lowest border border-outline-variant p-5 rounded-xl shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-xl font-bold text-on-surface flex items-center gap-2">
                🤖 AI Patrol Recommendation Center
              </h2>
              <p className="text-sm text-on-surface-variant">XGBoost & SHAP-powered tactical deployment directives awaiting human commander review.</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-error-container text-on-error-container text-xs font-bold px-3 py-1.5 rounded shadow border border-error/20">
                1 Pending Review
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Directives Column */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-on-surface">Tactical Directives Queue</h3>
              {recommendations.map(rec => (
                <div key={rec.id} className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-on-surface text-base">{rec.sector}</h4>
                      <span className="font-mono text-xs text-on-surface-variant">Directive ID: {rec.id}</span>
                    </div>
                    <span className={`text-xs font-bold px-2 py-1 rounded shadow-sm ${
                      rec.status === 'PENDING_REVIEW' ? 'bg-surface-container-high text-on-surface border border-outline-variant' :
                      rec.status === 'APPROVED' ? 'bg-primary-container text-on-primary-container border border-primary/20' :
                      'bg-error-container text-on-error-container border border-error/20'
                    }`}>
                      {rec.status === 'PENDING_REVIEW' ? '⏳ PENDING' : rec.status === 'APPROVED' ? '✓ DISPATCHED' : '✕ REJECTED'}
                    </span>
                  </div>

                  <div className="bg-surface-container-low p-3 rounded border border-outline-variant text-sm">
                    <p className="text-on-surface-variant font-bold mb-1">SHAP Risk Factors:</p>
                    <ul className="list-disc pl-4 text-on-surface space-y-1">
                      {rec.factors.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                  </div>

                  {rec.status === 'PENDING_REVIEW' && (
                    <div className="flex gap-3 mt-2">
                      <button onClick={() => handleDecision(rec.id, 'APPROVE')} className="flex-1 bg-primary text-on-primary font-bold py-2 rounded shadow-sm hover:bg-primary-container hover:text-on-primary-container transition-colors">
                        Approve & Dispatch Unit
                      </button>
                      <button onClick={() => handleDecision(rec.id, 'REJECT')} className="flex-1 bg-surface-container-high text-on-surface font-bold py-2 rounded shadow-sm border border-outline-variant hover:bg-surface-dim transition-colors">
                        Reject / Overrule AI
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Field Observation Column */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm h-fit">
              <h3 className="text-base font-bold text-on-surface mb-4">Log Field Observation Intel</h3>
              <p className="text-sm text-on-surface-variant mb-4">Input on-the-ground intelligence to retrain the XGBoost forecasting model for future shifts.</p>
              
              <textarea 
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                placeholder="E.g., Suspicious activity near warehouse cluster in Sector 4. Require enhanced lighting..."
                className="w-full bg-surface border border-outline-variant rounded-lg p-3 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary h-32 mb-4"
              ></textarea>
              
              <button 
                onClick={() => setNewNote('')}
                className="w-full bg-primary text-on-primary font-bold py-2.5 rounded shadow-sm hover:bg-primary-container hover:text-on-primary-container transition-colors"
              >
                Submit Field Intelligence
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
