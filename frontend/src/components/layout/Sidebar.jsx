import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: 'dashboard' },
    { name: 'Crime Map', path: '/geospatial-map', icon: 'map' },
    { name: 'Analytics', path: '/strategic-analytics', icon: 'query_stats' },
    { name: 'AI Patrol', path: '/ai-patrol', icon: 'auto_awesome' },
    { name: 'Network Analysis', path: '/advanced-network', icon: 'hub' },
    { name: 'Crime Records', path: '/national-crime-records', icon: 'description' },
    { name: 'Intel Reports', path: '/criminal-intelligence', icon: 'summarize' }
  ];

  return (
    <nav className="hidden md:flex flex-col py-4 bg-surface-container-low w-[240px] border-r border-outline-variant shrink-0 h-full overflow-y-auto">
      <div className="px-4 mb-4 font-bold text-primary text-base">KSP Explorer</div>
      <div className="space-y-1 px-2 flex-1">
        {navItems.map((item) => {
          const isActive = location.pathname.includes(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-2 px-3 py-2 text-sm rounded transition-colors ${
                isActive 
                  ? 'bg-primary text-on-primary font-semibold' 
                  : 'text-on-surface hover:bg-surface-container-high'
              }`}
            >
              <span className={`material-symbols-outlined text-[18px] ${isActive ? 'fill-icon' : ''}`}>
                {item.icon}
              </span>
              {item.name}
            </Link>
          );
        })}
      </div>

      <div className="px-2 mt-4 pt-4 border-t border-outline-variant">
        <Link
          to="/command-center"
          className={`flex items-center gap-2 px-3 py-2 text-sm rounded transition-colors ${
            location.pathname.includes('/command-center')
              ? 'bg-primary text-on-primary font-semibold'
              : 'text-on-surface hover:bg-surface-container-high'
          }`}
        >
          <span className="material-symbols-outlined text-[18px]">admin_panel_settings</span>
          Command Center
        </Link>
      </div>
    </nav>
  );
}
