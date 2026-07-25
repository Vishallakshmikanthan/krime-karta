import React, { useState } from 'react';
import { useAppStore } from '../../store/useStore';

export default function SettingsModal({ onClose }) {
  const { selectedDistrict, setSelectedDistrict } = useAppStore();
  const [theme, setTheme] = useState('dark');
  const [apiUrl, setApiUrl] = useState(import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/v1');
  const [mfaEnabled, setMfaEnabled] = useState(true);
  const [savedNotice, setSavedNotice] = useState(false);

  const handleSave = () => {
    setSavedNotice(true);
    setTimeout(() => {
      setSavedNotice(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden text-slate-100 animate-in fade-in zoom-in-95 duration-200">
        <div className="p-5 bg-slate-800/90 border-b border-slate-700 flex justify-between items-center">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-amber-400">settings</span>
            KrimeKartā Platform Configuration
          </h3>
          <button onClick={onClose} className="text-slate-400 hover:text-white text-lg">✕</button>
        </div>

        <div className="p-6 space-y-5">
          {/* Active Jurisdiction */}
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-2">Active Police Jurisdiction / District</label>
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:ring-1 focus:ring-amber-400"
            >
              <option value="Bengaluru Central">Bengaluru Central Command</option>
              <option value="Mysuru City">Mysuru City Sector</option>
              <option value="Mangaluru">Mangaluru Coastal Division</option>
              <option value="Hubballi-Dharwad">Hubballi-Dharwad Unit</option>
              <option value="Belagavi">Belagavi Border Division</option>
            </select>
          </div>

          {/* Interface Theme */}
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-2">Interface Color Mode</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setTheme('dark')}
                className={`p-3 rounded-lg border text-xs font-semibold text-center flex items-center justify-center gap-2 ${
                  theme === 'dark' ? 'bg-amber-500/10 border-amber-400 text-amber-400' : 'bg-slate-800 border-slate-700 text-slate-400'
                }`}
              >
                🌙 Dark Command Navy
              </button>
              <button
                onClick={() => setTheme('light')}
                className={`p-3 rounded-lg border text-xs font-semibold text-center flex items-center justify-center gap-2 ${
                  theme === 'light' ? 'bg-amber-500/10 border-amber-400 text-amber-400' : 'bg-slate-800 border-slate-700 text-slate-400'
                }`}
              >
                ☀️ Tactical High Contrast
              </button>
            </div>
          </div>

          {/* Backend API Target */}
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-2">FastAPI Microservice Endpoint</label>
            <input
              type="text"
              value={apiUrl}
              onChange={(e) => setApiUrl(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-xs text-slate-200 font-mono focus:ring-1 focus:ring-amber-400"
            />
          </div>

          {/* 2FA Security Switch */}
          <div className="flex items-center justify-between p-3 bg-slate-800/60 rounded-lg border border-slate-700">
            <div>
              <p className="text-xs font-bold text-white">2FA OTP Authentication Enforcement</p>
              <p className="text-[11px] text-slate-400">Require MFA verification for officer login sessions</p>
            </div>
            <input
              type="checkbox"
              checked={mfaEnabled}
              onChange={(e) => setMfaEnabled(e.target.checked)}
              className="w-4 h-4 accent-amber-500 rounded cursor-pointer"
            />
          </div>

          {savedNotice && (
            <div className="p-3 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-lg text-xs font-bold text-center">
              ✓ Platform Settings Saved Successfully!
            </div>
          )}
        </div>

        <div className="p-4 bg-slate-800/90 border-t border-slate-700 flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 text-xs font-bold rounded-lg">
            Cancel
          </button>
          <button onClick={handleSave} className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-lg shadow">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
