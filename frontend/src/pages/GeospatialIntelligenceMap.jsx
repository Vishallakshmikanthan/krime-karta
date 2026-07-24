import React from 'react';
import { Link } from 'react-router-dom';

const GeospatialIntelligenceMap = () => {
  return (
    <>
      <div className="bg-background text-on-background font-body-md h-full overflow-hidden flex">
{/* SideNavBar */}
<nav className="hidden md:flex w-[280px] h-screen flex-col sticky top-0 bg-surface dark:bg-surface-dim border-r border-outline-variant dark:border-outline flex-shrink-0 z-50 py-md">
{/* Header */}
<div className="px-md mb-8 flex items-center gap-4">
<img alt="Karnataka Police Emblem" className="w-12 h-12 object-contain" data-alt="Karnataka Police official emblem, gold and red colors, intricate details, highly professional government style, centered on white background, sharp focus, 8k resolution, photorealistic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtEM3hyQX4oBXCm-UR3XFxl3gr-BR0ffkf9ljU4CACoIMpRNEEz9ZHChDXQvDqukOnRWJzPudtjMMOVbDf0wzqUY9LrINvioz-YIfhcwba7GhAAyOYwOjHK5vBg1LySvD6XysGltRxOa__xg-TY1h0fXxcd7groGCjBymGQSjoI6876EgGZmvCzoSIYEZzxF7bzdsqa1Ew_tgOow2dmvrD6tTIpzWmYpBUIJUlQJtYlKkg4vwCbbS39A"/>
<div>
<h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">KrimeKartā</h1>
<p className="font-label-md text-label-md text-on-surface-variant">Law Enforcement Intel</p>
</div>
</div>
{/* Navigation Links */}
<div className="flex-1 overflow-y-auto space-y-2">
<Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-surface hover:bg-surface-container-high dark:hover:bg-surface-variant transition-colors mx-2 rounded-lg" to="/dashboard">
<span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 bg-primary text-on-primary rounded-lg mx-2 scale-[0.98] transition-transform duration-150" to="/geospatial-map">
<span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>map</span>
<span className="font-label-md text-label-md">Crime Map</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-surface hover:bg-surface-container-high dark:hover:bg-surface-variant transition-colors mx-2 rounded-lg" to="/strategic-analytics">
<span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>query_stats</span>
<span className="font-label-md text-label-md">Analytics</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-surface hover:bg-surface-container-high dark:hover:bg-surface-variant transition-colors mx-2 rounded-lg" to="/ai-patrol">
<span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>auto_awesome</span>
<span className="font-label-md text-label-md">AI Patrol</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-surface hover:bg-surface-container-high dark:hover:bg-surface-variant transition-colors mx-2 rounded-lg" to="/advanced-network">
<span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>hub</span>
<span className="font-label-md text-label-md">Network Analysis</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-surface hover:bg-surface-container-high dark:hover:bg-surface-variant transition-colors mx-2 rounded-lg" to="/national-crime-records">
<span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>description</span>
<span className="font-label-md text-label-md">Records</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-surface hover:bg-surface-container-high dark:hover:bg-surface-variant transition-colors mx-2 rounded-lg" to="/criminal-intelligence">
<span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>summarize</span>
<span className="font-label-md text-label-md">Reports</span>
</Link>
</div>
{/* CTA & Footer */}
<div className="px-md mt-auto space-y-4 pt-4 border-t border-outline-variant dark:border-outline mx-2">
<button className="w-full bg-primary-container text-on-primary-container font-label-md text-label-md py-2 px-4 rounded hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[18px]">emergency</span> Emergency Dispatch
            </button>
<div className="flex flex-col gap-2">
<Link className="flex items-center gap-3 text-on-surface-variant dark:text-on-surface hover:text-primary transition-colors py-1" to="/command-center">
<span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 0"}}>verified_user</span>
<span className="font-body-sm text-body-sm">System Status</span>
</Link>
<a className="flex items-center gap-3 text-on-surface-variant dark:text-on-surface hover:text-primary transition-colors py-1" href="#">
<span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 0"}}>settings</span>
<span className="font-body-sm text-body-sm">Settings</span>
</a>
</div>
</div>
</nav>
{/* Main Content Area (Map) */}
<main className="flex-1 relative bg-surface-container h-full w-full">
{/* Interactive Map Background */}
<div className="absolute inset-0 z-0">
<div className="bg-cover bg-center w-full h-full opacity-80 mix-blend-multiply" data-alt="A highly detailed top-down GIS map of Bengaluru city, earth tones, muted beige and olive colors, intricate street networks, distinct district boundaries, stylized government intelligence mapping style, minimal text, soft diffused lighting, no clouds, crisp lines." data-location="Bengaluru" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDerXkgtatozSy6u8IhdmfTpguJFrWF4PM78PONJZZwSxAgcfkk1cOS9219kUWt6r9FAd4ml8pRqu11Z_XS-SpQzfIWh7dPrNs3Jp71qRLLrfFsbdwLuS_svZnA_RSsc-DCcNiHqcas6EruBlef34Coik2ttOsbK_w04FIg1NyaCLZ6GhAy_fOW5j6VS9VL5GL6NPIKRo11FEP2CyGndDgC85-xZdVwib5WBF1GNkl9cyZMOLypX_VYRg')"}}></div>
{/* Simulated Map Overlay for Grid/Texture */}
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA0MCAwIEwgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNDAsIDExMywgMTA5LCAwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
{/* Map Markers (Simulated) */}
<div className="absolute top-[30%] left-[40%] group cursor-pointer">
<div className="w-4 h-4 bg-error rounded-full border-2 border-surface shadow-[0_0_10px_rgba(186,26,26,0.5)] animate-pulse"></div>
</div>
<div className="absolute top-[45%] left-[55%] group cursor-pointer">
<div className="w-3 h-3 bg-tertiary-fixed-dim rounded-full border-2 border-surface"></div>
</div>
<div className="absolute top-[60%] left-[35%] group cursor-pointer">
<div className="w-3 h-3 bg-secondary rounded-full border-2 border-surface"></div>
</div>
<div className="absolute top-[25%] left-[65%] group cursor-pointer">
<div className="w-4 h-4 bg-error rounded-full border-2 border-surface shadow-[0_0_10px_rgba(186,26,26,0.5)] animate-pulse"></div>
</div>
{/* Hotspot Area Overlay */}
<div className="absolute top-[25%] left-[35%] w-64 h-64 bg-error/10 rounded-full blur-3xl pointer-events-none"></div>
</div>
{/* TopAppBar (Floating over map) */}
<header className="absolute top-0 left-0 right-0 z-40 bg-surface/90 backdrop-blur-md border-b border-outline-variant flex justify-between items-center h-16 px-md md:hidden">
<h1 className="font-headline-md text-headline-md font-bold text-primary">KrimeKartā</h1>
<div className="flex gap-4">
<button className="text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined">search</span></button>
<button className="text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined">menu</span></button>
</div>
</header>
{/* UI Overlays */}
<div className="absolute inset-0 z-10 pointer-events-none p-4 md:p-6 flex flex-col md:flex-row justify-between pt-20 md:pt-6">
{/* Left Panel: Filters */}
<div className="pointer-events-auto w-full md:w-[320px] glass-panel rounded-lg flex flex-col h-fit max-h-[calc(100vh-120px)] shadow-[0_4px_24px_rgba(0,0,0,0.05)]">
<div className="p-4 border-b border-outline-variant bg-surface">
<h2 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined">filter_list</span>
                        Intelligence Filters
                    </h2>
</div>
<div className="p-4 overflow-y-auto flex-1 space-y-6">
{/* Crime Type */}
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-2">Crime Type</label>
<div className="space-y-2">
<label className="flex items-center gap-2 cursor-pointer group">
<input checked="" className="form-checkbox text-primary rounded border-outline focus:ring-tertiary-fixed-dim focus:ring-2 focus:ring-offset-0" type="checkbox"/>
<span className="font-body-sm text-body-sm text-on-surface group-hover:text-primary transition-colors">Violent Crimes</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<input checked="" className="form-checkbox text-primary rounded border-outline focus:ring-tertiary-fixed-dim focus:ring-2 focus:ring-offset-0" type="checkbox"/>
<span className="font-body-sm text-body-sm text-on-surface group-hover:text-primary transition-colors">Property Crimes</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<input className="form-checkbox text-primary rounded border-outline focus:ring-tertiary-fixed-dim focus:ring-2 focus:ring-offset-0" type="checkbox"/>
<span className="font-body-sm text-body-sm text-on-surface group-hover:text-primary transition-colors">Cyber Crime</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<input className="form-checkbox text-primary rounded border-outline focus:ring-tertiary-fixed-dim focus:ring-2 focus:ring-offset-0" type="checkbox"/>
<span className="font-body-sm text-body-sm text-on-surface group-hover:text-primary transition-colors">Traffic Violations</span>
</label>
</div>
</div>
{/* Time of Day */}
<div className="border-t border-outline-variant pt-4">
<label className="block font-label-md text-label-md text-on-surface-variant mb-3">Time Window</label>
<div className="grid grid-cols-2 gap-2">
<button className="bg-primary text-on-primary font-label-md text-label-md py-2 rounded text-center">Night (20:00 - 06:00)</button>
<button className="bg-surface-container-high text-on-surface font-label-md text-label-md py-2 rounded text-center border border-outline-variant hover:bg-surface-variant transition-colors">Day (06:00 - 20:00)</button>
</div>
</div>
{/* Status */}
<div className="border-t border-outline-variant pt-4">
<label className="block font-label-md text-label-md text-on-surface-variant mb-2">Status</label>
<select className="w-full bg-surface border border-outline rounded p-2 font-body-sm text-body-sm focus:ring-tertiary-fixed-dim focus:ring-2 focus:border-tertiary-fixed-dim outline-none">
<option>Active Investigations</option>
<option>Closed Cases</option>
<option>Cold Cases</option>
</select>
</div>
</div>
</div>
{/* Right Panel: Analytics Overlay (Floating) */}
<div className="hidden md:flex pointer-events-auto w-[360px] flex-col gap-4">
{/* Active Hotspot Card */}
<div className="glass-panel rounded-lg shadow-[0_4px_24px_rgba(0,0,0,0.1)] overflow-hidden">
<div className="bg-secondary-container p-3 border-b border-outline-variant flex justify-between items-center">
<h3 className="font-label-md text-label-md text-on-secondary-container uppercase tracking-wider flex items-center gap-2">
<span className="material-symbols-outlined text-error text-[18px]">warning</span>
                            Active Hotspot Focus
                        </h3>
<span className="bg-error text-on-error px-2 py-0.5 rounded text-[10px] font-bold">CRITICAL</span>
</div>
<div className="p-4 bg-surface">
<h4 className="font-headline-sm text-headline-sm text-on-surface mb-1">Sector 4 - Commercial Dist.</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-4">Elevated activity detected in the last 12 hours. Primarily property-related incidents.</p>
<div className="grid grid-cols-2 gap-4 mb-4">
<div className="bg-surface-container-low p-3 rounded border border-outline-variant">
<div className="font-label-md text-label-md text-on-surface-variant mb-1">Risk Score</div>
<div className="font-headline-md text-headline-md text-error flex items-baseline gap-1">
                                    84 <span className="font-body-sm text-body-sm text-on-surface-variant">/100</span>
</div>
</div>
<div className="bg-surface-container-low p-3 rounded border border-outline-variant">
<div className="font-label-md text-label-md text-on-surface-variant mb-1">Incidents (24h)</div>
<div className="font-headline-md text-headline-md text-on-surface">
                                    12
                                </div>
</div>
</div>
<button className="w-full border border-primary text-primary font-label-md text-label-md py-2 rounded hover:bg-primary hover:text-on-primary transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[18px]">policy</span> Deploy Patrol Unit
                        </button>
</div>
</div>
{/* Recent Alerts */}
<div className="glass-panel rounded-lg shadow-[0_4px_24px_rgba(0,0,0,0.1)] flex-1 overflow-y-auto max-h-[300px]">
<div className="p-3 border-b border-outline-variant bg-surface sticky top-0">
<h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Live Intel Feed</h3>
</div>
<ul className="divide-y divide-outline-variant">
<li className="p-3 hover:bg-surface-container-low transition-colors cursor-pointer flex gap-3">
<div className="mt-1"><span className="material-symbols-outlined text-error text-[18px]">local_police</span></div>
<div>
<div className="font-data-mono text-data-mono text-on-surface">INC-8892</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Suspicious activity reported near Central Bank branch.</div>
<div className="font-label-md text-[10px] text-tertiary mt-1">2 MINS AGO</div>
</div>
</li>
<li className="p-3 hover:bg-surface-container-low transition-colors cursor-pointer flex gap-3">
<div className="mt-1"><span className="material-symbols-outlined text-tertiary-fixed-dim text-[18px]">directions_car</span></div>
<div>
<div className="font-data-mono text-data-mono text-on-surface">TRF-4011</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Vehicle matching BOLO description flagged on ANPR camera 42.</div>
<div className="font-label-md text-[10px] text-tertiary mt-1">15 MINS AGO</div>
</div>
</li>
</ul>
</div>
</div>
</div>
{/* Bottom Panel: Timeline Scrubber */}
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-auto w-[90%] md:w-[600px] glass-panel rounded-lg p-4 shadow-[0_4px_24px_rgba(0,0,0,0.1)] flex flex-col gap-2">
<div className="flex justify-between items-center mb-1">
<span className="font-label-md text-label-md text-on-surface-variant uppercase">Historical Playback</span>
<span className="font-data-mono text-data-mono text-primary font-bold">OCT 24, 2023 - 22:00</span>
</div>
<div className="flex items-center gap-4">
<button className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center hover:opacity-90 flex-shrink-0">
<span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>play_arrow</span>
</button>
<div className="flex-1 relative h-6 flex items-center group cursor-pointer">
{/* Track */}
<div className="absolute w-full h-1 bg-outline-variant rounded-full"></div>
{/* Progress */}
<div className="absolute h-1 bg-primary rounded-full w-[70%]"></div>
{/* Scrubber handle */}
<div className="absolute h-4 w-4 bg-white border-2 border-primary rounded-full left-[70%] -translate-x-1/2 shadow-sm group-hover:scale-125 transition-transform"></div>
{/* Tick marks */}
<div className="absolute w-full flex justify-between px-1 top-4">
<span className="text-[10px] text-on-surface-variant">18:00</span>
<span className="text-[10px] text-on-surface-variant">20:00</span>
<span className="text-[10px] text-on-surface-variant font-bold text-primary">22:00</span>
<span className="text-[10px] text-on-surface-variant">00:00</span>
<span className="text-[10px] text-on-surface-variant">02:00</span>
</div>
</div>
<button className="text-on-surface-variant hover:text-primary transition-colors flex-shrink-0">
<span className="material-symbols-outlined text-[20px]">calendar_month</span>
</button>
</div>
</div>
{/* Map Controls (Zoom, etc.) */}
<div className="absolute right-6 bottom-32 z-20 pointer-events-auto flex flex-col gap-2">
<button className="w-10 h-10 bg-surface rounded shadow border border-outline-variant flex items-center justify-center text-on-surface hover:text-primary hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined">add</span>
</button>
<button className="w-10 h-10 bg-surface rounded shadow border border-outline-variant flex items-center justify-center text-on-surface hover:text-primary hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined">remove</span>
</button>
<button className="w-10 h-10 bg-surface rounded shadow border border-outline-variant flex items-center justify-center text-on-surface hover:text-primary hover:bg-surface-container-low transition-colors mt-2">
<span className="material-symbols-outlined">my_location</span>
</button>
<button className="w-10 h-10 bg-surface rounded shadow border border-outline-variant flex items-center justify-center text-on-surface hover:text-primary hover:bg-surface-container-low transition-colors mt-2" title="Layers">
<span className="material-symbols-outlined">layers</span>
</button>
</div>
</main>
</div>
    </>
  );
};

export default GeospatialIntelligenceMap;
