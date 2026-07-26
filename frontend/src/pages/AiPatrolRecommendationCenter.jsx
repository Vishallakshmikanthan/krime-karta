import React, { useState, useEffect } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';
import { useAppStore } from '../store/useStore';

export default function AiPatrolRecommendationCenter() {
  const { selectedDistrict, setSelectedDistrict } = useAppStore();

  // District-specific highly simulated real-world Karnataka CCTNS crime records & patrol directives
  const karnatakaPatrolData = {
    'Belagavi': [
      {
        id: 'PATROL-BLG-101',
        sector: 'Belagavi Market & APMC Yard Sector (Precinct 1)',
        crimeCategory: 'Murder & Extortion (Sec 103 BNS)',
        riskScore: 0.96,
        primarySuspects: 'Bhimagouda & Auto Venkatesh',
        cctnsFirRef: 'FIR-2026-01031 (Belagavi Market PS)',
        shapFactors: [
          '42% NH-48 Maharashtra-Karnataka border checkpost risk',
          '3 active externment order violations by Bhimagouda syndicate',
          '12 CCTNS nocturnal commercial burglaries recorded in 14 days'
        ],
        recommendedUnits: '2 ERSS-112 Mobile Patrols + 1 KSRP Battalion Platoon',
        status: 'PENDING_REVIEW'
      },
      {
        id: 'PATROL-BLG-102',
        sector: 'Camp PS & Khanapur Forest Corridor (Precinct 2)',
        crimeCategory: 'Highway Dacoity (Sec 310 BNS)',
        riskScore: 0.92,
        primarySuspects: 'Girish & Gowda',
        cctnsFirRef: 'FIR-2026-01033 (Camp PS)',
        shapFactors: [
          '38% sugarcane & timber cargo truck robbery risk on state highway',
          'BNSS Sec 126 preventive bond default by Girish gang',
          'ERSS-112 emergency call spike between 23:00 and 03:00 hrs'
        ],
        recommendedUnits: '1 ARS Highway Interceptor + 2 CAR Patrol Units',
        status: 'APPROVED'
      },
      {
        id: 'PATROL-BLG-103',
        sector: 'Shahapur Industrial Belt & Distillery Zone',
        crimeCategory: 'Organized Bootlegging & Union Intimidation',
        riskScore: 0.88,
        primarySuspects: 'V. Anand & Putta',
        cctnsFirRef: 'FIR-2026-01036 (Shahapur PS)',
        shapFactors: [
          '31% industrial worker extortion & illicit spirits distribution',
          'CCTNS assault FIR cluster near trade union office',
          'ANPR camera match on unflagged contraband transit pickup'
        ],
        recommendedUnits: '1 CCB Anti-Rowdy Squad Unit',
        status: 'PENDING_REVIEW'
      }
    ],

    'Bengaluru Central': [
      {
        id: 'PATROL-BLR-201',
        sector: 'Upparpet, Sriramapura & Gandhinagar Sector',
        crimeCategory: 'Contract Execution & Hawala Money Laundering',
        riskScore: 0.98,
        primarySuspects: 'Wilson Garden Naga & Bomb Naga',
        cctnsFirRef: 'FIR-2026-01001 (Upparpet PS)',
        shapFactors: [
          '48% commercial real estate dispute & supari execution threat',
          '6 active CCB OCW dossiers linked to Sriramapura cash-hoarding',
          'High-density bullion & jeweler extortion leads near Majestic'
        ],
        recommendedUnits: '2 CCB OCW Strike Teams + 2 KSRP Patrol Units',
        status: 'PENDING_REVIEW'
      },
      {
        id: 'PATROL-BLR-202',
        sector: 'Commercial Street & Shivajinagar Corridor',
        crimeCategory: 'Armed Extortion & Trade Protection Rackets',
        riskScore: 0.94,
        primarySuspects: 'Silent Sunil & Ishtiaq Pehalwan',
        cctnsFirRef: 'FIR-2026-01002 (Commercial St PS)',
        shapFactors: [
          '40% high-value merchant extortion & financial deposit scam leads',
          '1930 Helpline cyber fraud correlation with Shivajinagar nodes',
          'Night market surveillance alert on history-sheeter movement'
        ],
        recommendedUnits: '2 ERSS-112 Rapid Action Patrols',
        status: 'APPROVED'
      },
      {
        id: 'PATROL-BLR-203',
        sector: 'West Bengaluru (Kamakshipalya & Rajajinagar)',
        crimeCategory: 'Illegal Firearms & Property Extortion',
        riskScore: 0.91,
        primarySuspects: 'Cycle Ravi & Auto Shiva',
        cctnsFirRef: 'FIR-2026-01003 (Indiranagar / West PS)',
        shapFactors: [
          '35% illicit arms procurement & safehouse retention leads',
          'BNSS Sec 129 bond over enforcement order issued',
          'ANPR camera match on getaway vehicle near western ring road'
        ],
        recommendedUnits: '1 ARS Tactical Patrol Unit + 1 CAR Squad',
        status: 'PENDING_REVIEW'
      }
    ],

    'Mangaluru': [
      {
        id: 'PATROL-MNG-301',
        sector: 'Panambur Port & Coastal Highway Corridor',
        crimeCategory: 'Contraband Movement & Cross-Border Safehouses',
        riskScore: 0.95,
        primarySuspects: 'Muthappa Rai Faction & Malayali Ajith',
        cctnsFirRef: 'FIR-2026-01060 (Panambur PS)',
        shapFactors: [
          '45% coastal logistics contraband handoff & safehouse network',
          'Cross-border Kerala-Karnataka protection racket alert',
          'CCTNS FIR cluster under NDPS & Arms Act'
        ],
        recommendedUnits: '1 Marine Police Coastal Patrol + 2 ERSS Units',
        status: 'PENDING_REVIEW'
      },
      {
        id: 'PATROL-MNG-302',
        sector: 'Mangaluru North & Kadri Commercial Sector',
        crimeCategory: 'Extortion & Protection Tax',
        riskScore: 0.89,
        primarySuspects: 'Koli Faiyaz Faction & Tanveer',
        cctnsFirRef: 'FIR-2026-01061 (Kadri PS)',
        shapFactors: [
          '37% retail merchant extortion & slaughterhouse protection tax',
          '8 CCTNS assault FIRs recorded during night shifts',
          'High night-time commercial burglary risk'
        ],
        recommendedUnits: '1 CCB Special Recon Squad',
        status: 'APPROVED'
      }
    ],

    'Hubballi-Dharwad': [
      {
        id: 'PATROL-HBL-401',
        sector: 'Hubballi Central APMC & NH-48 Bypass Corridor',
        crimeCategory: 'Interstate Cargo Dacoity (Sec 310 BNS)',
        riskScore: 0.97,
        primarySuspects: 'Kunigal Giri & Girish',
        cctnsFirRef: 'FIR-2026-01080 (Hubballi Central PS)',
        shapFactors: [
          '52% interstate logistics truck interception & armed robbery',
          '36% fatal crash corridor on NH-48 Tumakuru-Hubballi bypass',
          'CCTNS dacoity FIRs with recurring vehicle MO'
        ],
        recommendedUnits: '2 Highway Interceptor Patrols + 1 KSRP Platoon',
        status: 'PENDING_REVIEW'
      },
      {
        id: 'PATROL-HBL-402',
        sector: 'Dharwad Suburbs & Marketplace Corridor',
        crimeCategory: 'Retaliatory Factional Clashes',
        riskScore: 0.90,
        primarySuspects: 'Thimma & Naveen',
        cctnsFirRef: 'FIR-2026-01082 (Dharwad Town PS)',
        shapFactors: [
          '41% marketplace turf clash & physical assault risk',
          'BNSS 129 bond default by Thimma history-sheet squad',
          'ERSS 112 emergency calls logged near transit depot'
        ],
        recommendedUnits: '1 ARS Strike Unit + 1 ERSS Patrol',
        status: 'APPROVED'
      }
    ],

    'Mysuru City': [
      {
        id: 'PATROL-MYS-501',
        sector: 'Devaraja Market & Mysuru South Industrial Belt',
        crimeCategory: 'Predatory Microfinance & Land Eviction',
        riskScore: 0.93,
        primarySuspects: 'Double Meter Mohan & Hebbagodi Satisha',
        cctnsFirRef: 'FIR-2026-01090 (Devaraja PS)',
        shapFactors: [
          '44% illegal high-interest loan sharking & violent eviction',
          '14 CCTNS intimidation complaints lodged by local traders',
          'Industrial transport extortion leads near Mysuru South'
        ],
        recommendedUnits: '2 ERSS-112 Mobile Patrols + 1 ARS Unit',
        status: 'PENDING_REVIEW'
      },
      {
        id: 'PATROL-MYS-502',
        sector: 'Bidadi & Ramanagara Quarrying Corridor',
        crimeCategory: 'Sand Mining Extortion & Highway Robbery',
        riskScore: 0.89,
        primarySuspects: 'Ramappa & Deva',
        cctnsFirRef: 'FIR-2026-01092 (Mysuru Outer PS)',
        shapFactors: [
          '39% illegal stone-quarrying muscle enforcement & extortion',
          'Night highway robbery leads on Mysuru-Bengaluru Expressway',
          'ANPR vehicle tracking match on unregistered tipper trucks'
        ],
        recommendedUnits: '1 CAR Highway Recon Squad',
        status: 'APPROVED'
      }
    ]
  };

  const currentDirectives = karnatakaPatrolData[selectedDistrict] || karnatakaPatrolData['Belagavi'];

  const [directivesState, setDirectivesState] = useState(currentDirectives);
  const [newObservation, setNewObservation] = useState('');
  const [dispatchToast, setDispatchToast] = useState('');

  useEffect(() => {
    setDirectivesState(karnatakaPatrolData[selectedDistrict] || karnatakaPatrolData['Belagavi']);
  }, [selectedDistrict]);

  const handleDecision = (id, decision) => {
    setDirectivesState(prev => prev.map(dir => {
      if (dir.id === id) {
        const newStatus = decision === 'APPROVE' ? 'APPROVED' : 'REJECTED';
        if (decision === 'APPROVE') {
          setDispatchToast(`✅ ERSS Patrol Directive ${id} Approved! Dispatched ${dir.recommendedUnits} to ${dir.sector}.`);
          setTimeout(() => setDispatchToast(''), 5000);
        }
        return { ...dir, status: newStatus };
      }
      return dir;
    }));
  };

  const handleAddObservation = () => {
    if (!newObservation.trim()) return;

    // Create a new simulated patrol directive based on officer input
    const newDir = {
      id: `PATROL-FIELD-${Math.floor(Math.random() * 800) + 100}`,
      sector: `${selectedDistrict} - Officer Field Recon Beat`,
      crimeCategory: 'Field Recon Intelligence',
      riskScore: 0.95,
      primarySuspects: 'Tagged Rowdy Sheeter Surveillance Pool',
      cctnsFirRef: `CCTNS-LOG-2026-${Math.floor(Math.random() * 9000) + 1000}`,
      shapFactors: [
        `Field Logged Observation: "${newObservation}"`,
        'XGBoost Risk Matrix re-calibrated via live officer feed',
        'BNSS Sec 126/129 preventive surveillance triggered'
      ],
      recommendedUnits: '1 ERSS-112 Mobile Unit + 1 CCB ARS Squad',
      status: 'PENDING_REVIEW'
    };

    setDirectivesState(prev => [newDir, ...prev]);
    setNewObservation('');
    setDispatchToast(`✨ Field Observation Logged & XGBoost Patrol Model Re-Calibrated for ${selectedDistrict}!`);
    setTimeout(() => setDispatchToast(''), 4000);
  };

  const pendingCount = directivesState.filter(d => d.status === 'PENDING_REVIEW').length;

  return (
    <div className="flex h-screen bg-surface text-on-surface font-body-md overflow-hidden antialiased">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header title="AI Patrol & Field Resource Allocation — Karnataka Police ERSS-112" />

        <main className="flex-1 overflow-y-auto p-6 space-y-6 bg-surface-bright">

          {/* Toast Notification Banner */}
          {dispatchToast && (
            <div className="bg-primary-container text-on-primary-container border border-primary/30 p-3 rounded-xl shadow-md text-xs font-bold flex items-center justify-between animate-bounce">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                <span>{dispatchToast}</span>
              </div>
              <button onClick={() => setDispatchToast('')} className="text-on-primary-container text-sm font-bold">✕</button>
            </div>
          )}

          {/* Top Control Banner */}
          <div className="bg-surface-container-lowest border border-outline-variant p-5 rounded-xl shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-xl font-bold text-on-surface flex items-center gap-2">
                🤖 AI Patrol Recommendation & Shift Directives (SCRB 2026 Engine)
              </h2>
              <p className="text-sm text-on-surface-variant">
                XGBoost spatio-temporal risk forecasting & SHAP feature-weighted patrol directives for CCB & station commanders in <strong className="text-primary">{selectedDistrict}</strong>.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-surface-container-low text-on-surface-variant text-xs font-bold px-3 py-1.5 rounded border border-outline-variant">
                Target Zone: <strong className="text-on-surface">{selectedDistrict}</strong>
              </span>
              <span className={`text-xs font-bold px-3 py-1.5 rounded shadow border ${
                pendingCount > 0 ? 'bg-error-container text-on-error-container border-error/20' : 'bg-primary-container text-on-primary-container border-primary/20'
              }`}>
                {pendingCount} Directives Pending Review
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

            {/* Directives Column (Spans 8 columns) */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-base font-bold text-on-surface flex items-center gap-2">
                  <span>🚔 Tactical Patrol Directives Queue — {selectedDistrict}</span>
                </h3>
                <span className="text-xs text-on-surface-variant font-medium">
                  {directivesState.length} Active Directives
                </span>
              </div>

              {directivesState.map(rec => (
                <div key={rec.id} className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded border border-primary/20">
                          {rec.crimeCategory}
                        </span>
                        <span className="text-xs font-mono text-on-surface-variant">ID: {rec.id}</span>
                      </div>
                      <h4 className="font-bold text-on-surface text-base">{rec.sector}</h4>
                      <p className="text-xs text-on-surface-variant mt-0.5 font-medium">
                        CCTNS Record: <strong className="text-on-surface">{rec.cctnsFirRef}</strong> | Rowdy Suspects: <strong className="text-error">{rec.primarySuspects}</strong>
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded shadow-sm ${
                        rec.status === 'PENDING_REVIEW' ? 'bg-surface-container-high text-on-surface border border-outline-variant' :
                        rec.status === 'APPROVED' ? 'bg-primary-container text-on-primary-container border border-primary/20' :
                        'bg-error-container text-on-error-container border border-error/20'
                      }`}>
                        {rec.status === 'PENDING_REVIEW' ? '⏳ PENDING REVIEW' : rec.status === 'APPROVED' ? '✓ DISPATCHED' : '✕ OVERRULED'}
                      </span>
                      <span className="text-[11px] font-mono text-error font-bold">
                        XGBoost Risk: {Math.round(rec.riskScore * 100)}%
                      </span>
                    </div>
                  </div>

                  {/* SHAP Risk Factors Box */}
                  <div className="bg-surface-container-low p-3.5 rounded-lg border border-outline-variant text-xs space-y-2">
                    <div className="flex justify-between items-center text-on-surface-variant font-bold text-[11px] uppercase tracking-wider">
                      <span>SHAP Risk Factors & CCTNS Indicators:</span>
                      <span>Recommended Field Force</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="md:col-span-2">
                        <ul className="list-disc pl-4 text-on-surface space-y-1 text-xs">
                          {rec.shapFactors.map((f, i) => <li key={i}>{f}</li>)}
                        </ul>
                      </div>
                      <div className="bg-surface-container-lowest p-2.5 rounded border border-outline-variant flex flex-col justify-center text-center">
                        <span className="text-[10px] text-on-surface-variant uppercase font-bold">Patrol Allocation</span>
                        <span className="text-xs font-bold text-primary mt-1">{rec.recommendedUnits}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Controls */}
                  {rec.status === 'PENDING_REVIEW' ? (
                    <div className="flex gap-3 mt-1">
                      <button 
                        onClick={() => handleDecision(rec.id, 'APPROVE')} 
                        className="flex-1 bg-primary text-on-primary font-bold py-2.5 rounded-lg text-xs shadow-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-1"
                      >
                        <span className="material-symbols-outlined text-[16px]">local_police</span>
                        Approve & Dispatch Tactical Units ({rec.recommendedUnits.split('+')[0]})
                      </button>
                      <button 
                        onClick={() => handleDecision(rec.id, 'REJECT')} 
                        className="px-4 bg-surface-container-high text-on-surface font-bold py-2.5 rounded-lg text-xs border border-outline-variant hover:bg-surface-dim transition-colors"
                      >
                        Overrule AI
                      </button>
                    </div>
                  ) : rec.status === 'APPROVED' && (
                    <div className="flex items-center justify-between text-xs text-primary font-bold bg-primary-container/40 p-2 rounded border border-primary/20">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">check_circle</span>
                        Tactical Patrol Unit Active in Sector: {rec.recommendedUnits}
                      </span>
                      <span className="text-[10px] font-mono">ERSS-112 Dispatched</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Field Observation & CCTNS Log Column (Spans 4 columns) */}
            <div className="lg:col-span-4 space-y-6">

              {/* Log CCTNS Field Intelligence */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm space-y-4">
                <h3 className="text-base font-bold text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">edit_note</span>
                  Log CCTNS Field Intelligence
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Input precinct-level intelligence (CCTV sightings, rowdy movement alerts, ANPR hits, BNSS bond violations) to re-calibrate XGBoost patrol optimization models in real-time.
                </p>
                
                <textarea 
                  value={newObservation}
                  onChange={(e) => setNewObservation(e.target.value)}
                  placeholder={`E.g., ${selectedDistrict} Rowdy associate movement observed near precinct commercial corridor. Request ERSS unit 112 reinforcement...`}
                  className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 text-xs text-on-surface focus:outline-none focus:ring-1 focus:ring-primary h-36 resize-none"
                ></textarea>
                
                <button 
                  onClick={handleAddObservation}
                  className="w-full bg-primary text-on-primary font-bold py-2.5 rounded-lg text-xs shadow-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-1"
                >
                  <span className="material-symbols-outlined text-[16px]">send</span>
                  Submit Field Intelligence & Re-Calibrate
                </button>
              </div>

              {/* XGBoost Feature Importance Explanation Card */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm space-y-3">
                <h4 className="text-xs font-bold text-on-surface uppercase tracking-wider">XGBoost SHAP Feature Weights</h4>
                
                <div className="space-y-2 text-xs">
                  <div>
                    <div className="flex justify-between text-[11px] font-bold text-on-surface mb-1">
                      <span>Rowdy Sheet History (+42%)</span>
                      <span className="text-primary font-mono">0.42</span>
                    </div>
                    <div className="w-full bg-surface-container-high rounded-full h-1.5">
                      <div className="bg-primary h-1.5 rounded-full" style={{ width: '84%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] font-bold text-on-surface mb-1">
                      <span>Highway Transit Risk (+38%)</span>
                      <span className="text-orange-600 font-mono">0.38</span>
                    </div>
                    <div className="w-full bg-surface-container-high rounded-full h-1.5">
                      <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: '76%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] font-bold text-on-surface mb-1">
                      <span>Night-Shift Patrol Gap (+31%)</span>
                      <span className="text-yellow-600 font-mono">0.31</span>
                    </div>
                    <div className="w-full bg-surface-container-high rounded-full h-1.5">
                      <div className="bg-yellow-500 h-1.5 rounded-full" style={{ width: '62%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-on-surface-variant border-t border-outline-variant">
                  SCRB 2026 Model Accuracy: <strong className="text-primary font-mono">94.8% AUC-ROC</strong>
                </div>
              </div>

            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
