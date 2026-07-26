import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';

export default function AiPatrolRecommendationCenter() {
  const [recommendations, setRecommendations] = useState([
    {
      id: 'REC-2026-8891',
      sector: 'Bengaluru City (Central) - Supari & Extortion Sector',
      riskScore: 0.96,
      factors: ['Active Rowdy Sheet Presence (Wilson Garden Naga Network)', 'High-volume Commercial Burglary & Night Theft', 'CCB Special Unit Advisory'],
      status: 'PENDING_REVIEW'
    },
    {
      id: 'REC-2026-8892',
      sector: 'NH-48 Tumakuru Highway Corridor - Dacoity Patrol',
      riskScore: 0.94,
      factors: ['Highway Dacoity Risk (Kunigal Giri Syndicate Area)', '36% Statewide Fatal Crash Corridor (NH-48)', 'Night ERSS-112 Interceptor Patrol Required'],
      status: 'APPROVED'
    },
    {
      id: 'REC-2026-8893',
      sector: 'West Bengaluru - Armed Land Settlement Beat',
      riskScore: 0.91,
      factors: ['Active Rowdy Surveillance (Cycle Ravi Network)', 'Illegal Weapon Hoarding Reports', 'BNSS Sec 129 Bond Verification'],
      status: 'PENDING_REVIEW'
    },
    {
      id: 'REC-2026-8894',
      sector: 'Electronic City / Bengaluru South - Sand & Industrial Belt',
      riskScore: 0.88,
      factors: ['Industrial Construction Extortion (Hebbagodi Satisha)', 'Precinct Externment Order Enforcement', 'Heavy Vehicle Sand Transport Audit'],
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
        <Header title="AI Patrol & Field Resource Allocation — Karnataka Police ERSS-112" />

        <main className="flex-1 overflow-y-auto p-6 space-y-6 bg-surface-bright">
          <div className="bg-surface-container-lowest border border-outline-variant p-5 rounded-xl shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-xl font-bold text-on-surface flex items-center gap-2">
                🤖 AI Patrol Recommendation & Shift Directives (SCRB 2026 Engine)
              </h2>
              <p className="text-sm text-on-surface-variant">XGBoost spatio-temporal risk forecasting & SHAP feature-weighted patrol directives for CCB & station commanders.</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-error-container text-on-error-container text-xs font-bold px-3 py-1.5 rounded shadow border border-error/20">
                2 Directives Pending Review
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Directives Column */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-on-surface">Tactical Patrol Directives Queue</h3>
              {recommendations.map(rec => (
                <div key={rec.id} className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-on-surface text-base">{rec.sector}</h4>
                      <span className="font-mono text-xs text-on-surface-variant">Directive ID: {rec.id}</span>
                    </div>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded shadow-sm ${
                      rec.status === 'PENDING_REVIEW' ? 'bg-surface-container-high text-on-surface border border-outline-variant' :
                      rec.status === 'APPROVED' ? 'bg-primary-container text-on-primary-container border border-primary/20' :
                      'bg-error-container text-on-error-container border border-error/20'
                    }`}>
                      {rec.status === 'PENDING_REVIEW' ? '⏳ PENDING COMMANDER REVIEW' : rec.status === 'APPROVED' ? '✓ ERSS DISPATCHED' : '✕ OVERRULED'}
                    </span>
                  </div>

                  <div className="bg-surface-container-low p-3.5 rounded border border-outline-variant text-xs space-y-1">
                    <p className="text-on-surface-variant font-bold mb-1">SHAP Risk Factors & SCRB Indicators:</p>
                    <ul className="list-disc pl-4 text-on-surface space-y-1">
                      {rec.factors.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                  </div>

                  {rec.status === 'PENDING_REVIEW' && (
                    <div className="flex gap-3 mt-1">
                      <button onClick={() => handleDecision(rec.id, 'APPROVE')} className="flex-1 bg-primary text-on-primary font-bold py-2 rounded text-xs shadow-sm hover:opacity-90 transition-opacity">
                        Approve & Dispatch Unit
                      </button>
                      <button onClick={() => handleDecision(rec.id, 'REJECT')} className="flex-1 bg-surface-container-high text-on-surface font-bold py-2 rounded text-xs border border-outline-variant hover:bg-surface-dim transition-colors">
                        Overrule AI Directive
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Field Observation Column */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm h-fit space-y-4">
              <h3 className="text-base font-bold text-on-surface">Log Field Intelligence & Rowdy Observations</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Input precinct-level intelligence (CCTV sightings, rowdy movement alerts, BNSS bond violations) to re-calibrate XGBoost patrol optimization models.
              </p>
              
              <textarea 
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                placeholder="E.g., Wilson Garden Naga associate movement observed near East Division commercial corridor. Request ERSS unit 112 reinforcement..."
                className="w-full bg-surface border border-outline-variant rounded-lg p-3 text-xs text-on-surface focus:outline-none focus:ring-1 focus:ring-primary h-36"
              ></textarea>
              
              <button 
                onClick={() => setNewNote('')}
                className="w-full bg-primary text-on-primary font-bold py-2.5 rounded text-xs shadow-sm hover:opacity-90 transition-opacity"
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
