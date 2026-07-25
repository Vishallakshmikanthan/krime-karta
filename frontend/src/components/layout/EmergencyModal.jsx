import React, { useState } from 'react';
import { useAppStore } from '../../store/useStore';

export default function EmergencyModal({ onClose }) {
  const { selectedDistrict } = useAppStore();
  const [sector, setSector] = useState('Sector 4 - Commercial Hub');
  const [units, setUnits] = useState(4);
  const [priority, setPriority] = useState('CRITICAL');
  const [dispatched, setDispatched] = useState(false);

  const handleDispatch = (e) => {
    e.preventDefault();
    setDispatched(true);
    setTimeout(() => {
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 bg-red-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900 border-2 border-red-600 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden text-slate-100 animate-in fade-in zoom-in-95 duration-200">
        <div className="p-4 bg-red-900/90 border-b border-red-700 flex justify-between items-center">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-white animate-pulse">emergency</span>
            EMERGENCY PATROL DISPATCH PROTOCOL
          </h3>
          <button onClick={onClose} className="text-red-200 hover:text-white text-lg">✕</button>
        </div>

        {dispatched ? (
          <div className="p-8 text-center space-y-3">
            <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 border border-emerald-500 rounded-full flex items-center justify-center text-2xl mx-auto animate-bounce">
              ✓
            </div>
            <h4 className="text-base font-bold text-emerald-400">PATROL UNITS DISPATCHED!</h4>
            <p className="text-xs text-slate-300">
              {units} Mobile Tactical Units dispatched to <strong>{sector}</strong> ({selectedDistrict}). High-priority radio vector issued.
            </p>
          </div>
        ) : (
          <form onSubmit={handleDispatch} className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Target Sector / Location</label>
              <select
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-xs text-white"
              >
                <option value="Sector 4 - Commercial Hub">Sector 4 - Commercial Hub</option>
                <option value="Sector 1 - Upparpet HQ Corridor">Sector 1 - Upparpet HQ Corridor</option>
                <option value="Sector 7 - Majestic Metro Transit">Sector 7 - Majestic Metro Transit</option>
                <option value="Sector 9 - Indiranagar Market Area">Sector 9 - Indiranagar Market Area</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Units Required</label>
                <input
                  type="number"
                  min="1"
                  max="12"
                  value={units}
                  onChange={(e) => setUnits(Number(e.target.value))}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-xs text-white text-center font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Priority Rating</label>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-xs text-red-400 font-bold"
                >
                  <option value="CRITICAL">CRITICAL (Code Red)</option>
                  <option value="HIGH">HIGH (Code Yellow)</option>
                  <option value="MEDIUM">MEDIUM (Code Blue)</option>
                </select>
              </div>
            </div>

            <div className="p-3 bg-red-950/40 border border-red-800/60 rounded-lg text-[11px] text-red-300">
              ⚠️ Warning: Emergency override will re-route nearest active patrol cars and trigger high-density alert on field officer mobile terminals.
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-lg shadow flex items-center gap-1"
              >
                <span>Confirm & Dispatch Units</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
