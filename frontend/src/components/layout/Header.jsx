import React, { useState } from 'react';
import { useAppStore } from '../../store/useStore';
import { Link } from 'react-router-dom';

export default function Header({ title = 'Karnataka State Police Intelligence Platform' }) {
  const { selectedDistrict, setSelectedDistrict } = useAppStore();
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const notifications = [
    { id: 1, text: 'CRITICAL: High robbery risk predicted in Bengaluru Central Sector 4.', time: '2 mins ago', type: 'urgent' },
    { id: 2, text: 'NetworkX Alert: Syndicate bridge node Rajan Varma active in Mysuru.', time: '14 mins ago', type: 'info' },
    { id: 3, text: 'FIR 142/2024 evidence payload updated by Inspector Patil.', time: '1 hour ago', type: 'update' }
  ];

  return (
    <header className="bg-surface border-b border-outline-variant flex justify-between items-center w-full px-6 h-16 shrink-0 z-50 select-none">
      <div className="flex items-center gap-4">
        <Link to="/dashboard" className="text-primary font-bold text-lg hidden sm:block">
          {title}
        </Link>
        <Link to="/dashboard" className="text-primary font-bold text-lg sm:hidden">
          KSP Intel
        </Link>
      </div>

      <div className="flex items-center gap-4">
        {/* District Selector */}
        <div className="hidden md:flex items-center gap-2 bg-surface-container-low border border-outline-variant rounded-lg px-3 py-1.5 text-sm">
          <span className="text-on-surface-variant font-medium">District:</span>
          <select
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
            className="bg-transparent text-primary font-bold focus:outline-none cursor-pointer"
          >
            <option value="Bengaluru Central" className="bg-surface text-on-surface">Bengaluru Central</option>
            <option value="Mysuru City" className="bg-surface text-on-surface">Mysuru City</option>
            <option value="Mangaluru" className="bg-surface text-on-surface">Mangaluru</option>
            <option value="Hubballi-Dharwad" className="bg-surface text-on-surface">Hubballi-Dharwad</option>
            <option value="Belagavi" className="bg-surface text-on-surface">Belagavi</option>
          </select>
        </div>

        {/* Global Search Bar */}
        <div className="relative hidden lg:block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FIR, Suspect..."
            className="bg-surface-container-lowest border border-outline-variant text-on-surface pl-9 pr-4 py-1.5 rounded-lg text-sm w-56 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>

        {/* Notifications Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 rounded-lg hover:bg-surface-container-high text-on-surface-variant transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">notifications</span>
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-error rounded-full animate-pulse"></span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-surface-container-lowest border border-outline-variant rounded-xl shadow-xl z-50 overflow-hidden">
              <div className="p-3 bg-surface-container-low border-b border-outline-variant flex justify-between items-center">
                <span className="font-bold text-sm text-on-surface">Live Intelligence Alerts</span>
                <span className="text-[10px] bg-error-container text-on-error-container px-2 py-0.5 rounded font-semibold">3 New</span>
              </div>
              <div className="divide-y divide-outline-variant max-h-64 overflow-y-auto">
                {notifications.map((n) => (
                  <div key={n.id} className="p-3 hover:bg-surface-container-low transition-colors">
                    <p className="text-sm text-on-surface font-medium">{n.text}</p>
                    <span className="text-xs text-on-surface-variant mt-1 block">{n.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* User Profile Badge */}
        <div className="flex items-center gap-2 pl-4 border-l border-outline-variant">
          <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-sm">
            SP
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-bold text-on-surface">DCP Ananya Rao</p>
            <p className="text-[10px] text-on-surface-variant uppercase font-semibold">Superintendent</p>
          </div>
        </div>
      </div>
    </header>
  );
}
