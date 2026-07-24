import React from 'react';
import { Link } from 'react-router-dom';

const CommandCenterOperations = () => {
  return (
    <>
      <div className="font-body-md text-body-md text-on-background flex h-screen overflow-hidden antialiased">
{/* SideNavBar */}
<aside className="hidden md:flex w-[280px] h-screen flex-col sticky top-0 border-r border-outline-variant bg-surface flex-shrink-0 z-40">
{/* Header */}
<div className="p-md border-b border-outline-variant flex items-center gap-3">
<img alt="Karnataka Police Emblem" className="w-10 h-10 object-contain" data-alt="A highly detailed illustration of an official police crest or emblem suitable for a government intelligence platform. It features intricate line work in dark crimson and gold, displaying authority and precision on a crisp white background. The aesthetic is institutional, formal, and slightly modernized for a digital context." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf2XFqkr7O9doRlcZJdpz8vrMthYCUb0griI0xRmwU7bCGh7VqGjBaUVK400jMUZD5V6VI_j65AsIK8IFdNL-L05c5-WGNBPmj_kQ59Ffp9y2IXUPB3NdzsuPSnI4M9qB-jdRRnPfWCzHm17UHDDXkUTCLMGq3Z0OHekBFA_hKWeLSebF3vxyDW5eQ12WxW76NbsJ9WdOUMP-XHbaqUidFCvdgHwB-ER4O94LiVc7iUs3qDoOTXm_pV2-adVQo5s114YE3wFgVoeVv"/>
<div>
<h1 className="font-headline-md text-headline-md font-bold text-primary">KrimeKartā</h1>
<p className="font-label-md text-label-md text-on-surface-variant">Law Enforcement Intel</p>
</div>
</div>
{/* Navigation Tabs */}
<nav className="flex flex-col h-full py-md overflow-y-auto scrollbar-hide flex-grow">
{/* Active Tab: Dashboard */}
<Link className="flex items-center gap-3 px-4 py-3 bg-primary text-on-primary rounded-lg mx-2 scale-[0.98] transition-transform duration-150 mb-1" to="/dashboard">
<span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors mx-2 rounded-lg mb-1" to="/geospatial-map">
<span className="material-symbols-outlined">map</span>
<span className="font-label-md text-label-md">Crime Map</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors mx-2 rounded-lg mb-1" to="/strategic-analytics">
<span className="material-symbols-outlined">query_stats</span>
<span className="font-label-md text-label-md">Analytics</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors mx-2 rounded-lg mb-1" to="/ai-patrol">
<span className="material-symbols-outlined">auto_awesome</span>
<span className="font-label-md text-label-md">AI Patrol</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors mx-2 rounded-lg mb-1" to="/advanced-network">
<span className="material-symbols-outlined">hub</span>
<span className="font-label-md text-label-md">Network Analysis</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors mx-2 rounded-lg mb-1" to="/national-crime-records">
<span className="material-symbols-outlined">description</span>
<span className="font-label-md text-label-md">Records</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors mx-2 rounded-lg mb-1" to="/criminal-intelligence">
<span className="material-symbols-outlined">summarize</span>
<span className="font-label-md text-label-md">Reports</span>
</Link>
<div className="mt-auto pt-4 border-t border-outline-variant mx-4">
<Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors -mx-2 rounded-lg mb-1" to="/command-center">
<span className="material-symbols-outlined">verified_user</span>
<span className="font-label-md text-label-md">System Status</span>
</Link>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors -mx-2 rounded-lg" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="font-label-md text-label-md">Settings</span>
</a>
</div>
</nav>
{/* CTA */}
<div className="p-4 border-t border-outline-variant bg-surface-container-lowest">
<button className="w-full bg-primary-container text-on-primary py-2 rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[18px]">local_police</span>
                Emergency Dispatch
            </button>
</div>
</aside>
{/* Main Content Area */}
<main className="flex-1 flex flex-col h-screen overflow-hidden">
{/* TopAppBar (Mobile Only - Simplified for this context, normally would be the full component) */}
<header className="md:hidden flex justify-between items-center w-full h-16 px-sm border-b border-outline-variant bg-surface sticky top-0 z-50">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary">menu</span>
<span className="font-headline-md text-headline-md font-bold text-primary">KrimeKartā</span>
</div>
<div className="flex gap-2">
<button className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<img alt="Officer Profile" className="w-8 h-8 rounded-full border border-outline-variant" data-alt="A professional headshot of a police intelligence officer in uniform, looking focused. The lighting is bright and clean, typical of an official ID badge photo. The background is a stark, neutral white to maintain the formal, high-contrast aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnDwnASUWUdH1X0qiC7Q67NNAGhCYgs5Uitu_0d9zwcFezbkK89rYeXFCMRHcl9LY6d4ddFPSctSmMEGIqqjukvPPBagzbCw7DbPpOdGUI0fr6nfZtGxMRJpqW_wEeNwxggRm8hpm3YPDIUiidmFbp2OmSLrRO61l9syL6YZMsmQ_g7BSkBhnEc4FMG4psRW82rBpBB0WZA1fIzn67UkTIFHhesNgNJJVjWCRD1Kj_jfucQ0rYxHEJbOq69NUGF_F0vcSaoRg29-Kc"/>
</div>
</header>
{/* Page Header */}
<div className="px-md py-4 border-b border-outline-variant bg-surface-container-lowest flex flex-col md:flex-row justify-between items-start md:items-center gap-4 flex-shrink-0">
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Command Center</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Live Operational Overview • District 7 • Real-time Monitoring Active</p>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 bg-error-container px-3 py-1.5 rounded text-on-error-container font-label-md text-label-md border border-outline-variant">
<div className="w-2 h-2 rounded-full status-dot-critical"></div>
                    DEFCON 3 ACTIVE
                </div>
<span className="font-data-mono text-data-mono text-on-surface-variant px-2">14:03:22 IST</span>
</div>
</div>
{/* Bento Grid Layout */}
<div className="flex-1 overflow-y-auto p-md bg-background">
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter max-w-[1440px] mx-auto">
{/* Left Column (Live Feed & Alerts) - 4 cols */}
<div className="md:col-span-4 flex flex-col gap-gutter">
{/* Emergency Alerts */}
<section className="card-surface-1 flex flex-col h-[200px]">
<div className="px-4 py-2 border-b border-outline-variant bg-table-header flex justify-between items-center">
<h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-error">warning</span>
                                Priority Alerts
                            </h3>
<span className="bg-error text-on-error text-[10px] font-bold px-2 py-0.5 rounded-full">2 NEW</span>
</div>
<div className="p-0 overflow-y-auto flex-1">
<div className="p-3 border-b border-outline-variant bg-[#fff5f5] hover:bg-error-container cursor-pointer transition-colors">
<div className="flex justify-between items-start mb-1">
<span className="font-label-md text-label-md text-error">CODE RED - ROBBERY</span>
<span className="font-data-mono text-[10px] text-on-surface-variant">T-02m</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface leading-tight">Armed robbery reported at MG Road Jewelry District. Multiple suspects armed.</p>
<div className="mt-2 flex gap-2">
<span className="text-[10px] border border-outline-variant px-1 rounded text-on-surface-variant">Unit 41 Responding</span>
</div>
</div>
<div className="p-3 border-b border-outline-variant hover:bg-surface-container-low cursor-pointer transition-colors">
<div className="flex justify-between items-start mb-1">
<span className="font-label-md text-label-md text-on-tertiary-container">AMBER ALERT - SECTOR 4</span>
<span className="font-data-mono text-[10px] text-on-surface-variant">T-15m</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface leading-tight">Missing child last seen near Central Station. Description broadcasted to all active units.</p>
</div>
</div>
</section>
{/* Live Incident Feed */}
<section className="card-surface-1 flex flex-col flex-1 min-h-[400px]">
<div className="px-4 py-2 border-b border-outline-variant bg-table-header flex justify-between items-center">
<h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider">Live Incident Feed</h3>
<button className="text-primary hover:underline font-label-md text-label-md">Filter</button>
</div>
<div className="p-0 overflow-y-auto flex-1">
{/* Feed Item */}
<div className="p-3 border-b border-outline-variant hover:bg-surface-container-low flex gap-3">
<div className="flex flex-col items-center mt-1">
<span className="material-symbols-outlined text-[16px] text-primary">gavel</span>
<div className="w-px h-full bg-outline-variant mt-1"></div>
</div>
<div className="flex-1 pb-2">
<div className="flex justify-between items-baseline mb-0.5">
<span className="font-label-md text-label-md text-on-surface">Assault - Grade 2</span>
<span className="font-data-mono text-[10px] text-on-surface-variant">13:45</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-1">Altercation reported outside pub in Indiranagar. Patrol en route.</p>
<span className="inline-block bg-surface-container px-1.5 py-0.5 rounded font-data-mono text-[10px] text-secondary">INC-8894</span>
</div>
</div>
{/* Feed Item */}
<div className="p-3 border-b border-outline-variant hover:bg-surface-container-low flex gap-3">
<div className="flex flex-col items-center mt-1">
<span className="material-symbols-outlined text-[16px] text-secondary">directions_car</span>
<div className="w-px h-full bg-outline-variant mt-1"></div>
</div>
<div className="flex-1 pb-2">
<div className="flex justify-between items-baseline mb-0.5">
<span className="font-label-md text-label-md text-on-surface">Traffic Collision - Major</span>
<span className="font-data-mono text-[10px] text-on-surface-variant">13:12</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-1">Multi-vehicle collision on Ring Road. Ambulance dispatched.</p>
<span className="inline-block bg-surface-container px-1.5 py-0.5 rounded font-data-mono text-[10px] text-secondary">INC-8893</span>
</div>
</div>
{/* Feed Item */}
<div className="p-3 border-b border-outline-variant hover:bg-surface-container-low flex gap-3">
<div className="flex flex-col items-center mt-1">
<span className="material-symbols-outlined text-[16px] text-secondary">storefront</span>
<div className="w-px h-full bg-outline-variant mt-1"></div>
</div>
<div className="flex-1 pb-2">
<div className="flex justify-between items-baseline mb-0.5">
<span className="font-label-md text-label-md text-on-surface">Suspicious Activity</span>
<span className="font-data-mono text-[10px] text-on-surface-variant">12:30</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-1">Unattended bag reported near market square. Bomb squad notified.</p>
<span className="inline-block bg-surface-container px-1.5 py-0.5 rounded font-data-mono text-[10px] text-secondary">INC-8892</span>
</div>
</div>
{/* Feed Item */}
<div className="p-3 hover:bg-surface-container-low flex gap-3 opacity-70">
<div className="flex flex-col items-center mt-1">
<span className="material-symbols-outlined text-[16px] text-secondary">campaign</span>
</div>
<div className="flex-1 pb-2">
<div className="flex justify-between items-baseline mb-0.5">
<span className="font-label-md text-label-md text-on-surface">Noise Complaint</span>
<span className="font-data-mono text-[10px] text-on-surface-variant">11:15</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-1">Resolved: Warning issued to residents.</p>
<span className="inline-block bg-surface-container px-1.5 py-0.5 rounded font-data-mono text-[10px] text-secondary">INC-8891 (CLOSED)</span>
</div>
</div>
</div>
</section>
</div>
{/* Center Column (GIS Map & KPIs) - 5 cols */}
<div className="md:col-span-5 flex flex-col gap-gutter">
{/* GIS Heatmap */}
<section className="card-surface-1 flex flex-col h-[400px] relative overflow-hidden">
<div className="absolute inset-0 bg-surface-variant flex items-center justify-center">
{/* Placeholder for map visualization */}
<img alt="City Heatmap" className="w-full h-full object-cover opacity-90" data-alt="A top-down digital map view of an urban city grid (Bangalore style), styled like a high-tech government intelligence heatmap. The map is rendered in high-contrast light mode: clean white roads against faint beige terrain. There are glowing red and amber 'hotspots' or clusters indicating crime density, with a few sharp geometric UI overlays like targeting reticles or data nodes. The aesthetic is clean, professional, and slightly futuristic but grounded in reality." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBosec8AMe_2USgJI93QVXx0C1xd0ohIfTdm0gNVtAeNWjyD6ObiL3n55TwGO01j-nTVRvd6mlwHv1X-hhkNc0CI4MmTetmt6jzxliTH6M_FX85c9m9-fsDfWq091IMaQ3z80fiGjWx8ohN-9CF0frJ2UIBnOnV_15sO0ey3nNFiGwk6x3Rdc83O24yeoVI24ArN65dM87kT2gD6_CXfv58v1DdEg4hYS7JJuWhHxng7lzwKzLfWXiKmKQ6hM5ryp3RYsk-Q_4uO_NZ"/>
{/* Overlay UI elements on map */}
<div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-sm border border-outline-variant p-2 rounded shadow-sm">
<span className="font-label-md text-[10px] uppercase text-on-surface block mb-1">Density Filter</span>
<div className="flex gap-1">
<div className="w-3 h-3 bg-error rounded-sm"></div>
<div className="w-3 h-3 bg-tertiary-container rounded-sm"></div>
<div className="w-3 h-3 bg-secondary-container rounded-sm"></div>
</div>
</div>
<div className="absolute bottom-4 right-4 bg-surface/90 backdrop-blur-sm border border-outline-variant p-2 rounded shadow-sm flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span className="font-data-mono text-[10px] text-on-surface">LIVE SAT LINK</span>
</div>
</div>
</section>
{/* District Health KPIs */}
<section className="grid grid-cols-2 gap-4">
<div className="card-surface-1 p-4 flex flex-col justify-between">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wide">Patrol Coverage</span>
<div className="mt-2 flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-on-surface">84%</span>
<span className="text-primary text-body-sm font-semibold flex items-center"><span className="material-symbols-outlined text-[14px]">arrow_downward</span> 2%</span>
</div>
<div className="w-full bg-surface-container mt-3 h-1.5 rounded-full overflow-hidden">
<div className="bg-secondary h-full w-[84%]"></div>
</div>
</div>
<div className="card-surface-1 p-4 flex flex-col justify-between">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wide">Avg Response Time</span>
<div className="mt-2 flex items-baseline gap-2">
<span className="font-data-mono text-headline-lg text-on-surface">04:12</span>
<span className="text-secondary text-body-sm font-semibold">min</span>
</div>
<p className="font-body-sm text-[10px] text-on-surface-variant mt-2 border-t border-outline-variant pt-1">Target: &lt; 05:00 min</p>
</div>
<div className="card-surface-1 p-4 col-span-2">
<div className="flex justify-between items-center mb-3">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wide">Arrest vs Incident Ratio (24H)</span>
<span className="font-data-mono text-body-sm text-on-surface">68 / 112</span>
</div>
{/* Simple Bar Chart Placeholder */}
<div className="flex items-end gap-1 h-16 w-full px-2 border-b border-outline-variant border-l">
<div className="w-1/6 bg-secondary-container h-[40%] hover:bg-secondary transition-colors cursor-crosshair relative group">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-[10px] px-1 py-0.5 rounded hidden group-hover:block">12</div>
</div>
<div className="w-1/6 bg-secondary-container h-[60%] hover:bg-secondary transition-colors cursor-crosshair"></div>
<div className="w-1/6 bg-secondary-container h-[30%] hover:bg-secondary transition-colors cursor-crosshair"></div>
<div className="w-1/6 bg-primary-container h-[90%] hover:bg-primary transition-colors cursor-crosshair"></div>
<div className="w-1/6 bg-secondary-container h-[50%] hover:bg-secondary transition-colors cursor-crosshair"></div>
<div className="w-1/6 bg-secondary-container h-[70%] hover:bg-secondary transition-colors cursor-crosshair"></div>
</div>
<div className="flex justify-between text-[8px] font-data-mono text-on-surface-variant mt-1 px-2">
<span>00:00</span>
<span>04:00</span>
<span>08:00</span>
<span>12:00</span>
<span>16:00</span>
<span>20:00</span>
</div>
</div>
</section>
</div>
{/* Right Column (Active Units) - 3 cols */}
<div className="md:col-span-3 flex flex-col gap-gutter">
<section className="card-surface-1 flex flex-col h-full">
<div className="px-4 py-3 border-b border-outline-variant bg-table-header flex justify-between items-center">
<h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider">Unit Status</h3>
<span className="font-data-mono text-[10px] bg-surface-container px-1.5 py-0.5 border border-outline-variant rounded">12 ACTIVE</span>
</div>
<div className="p-3 bg-surface border-b border-outline-variant">
<input className="w-full h-8 text-body-sm px-2 border border-outline-variant rounded bg-surface-container-lowest focus:ring-2 focus:ring-tertiary-container focus:border-tertiary-container transition-all" placeholder="Search Callsign..." type="text"/>
</div>
<div className="p-0 overflow-y-auto flex-1 bg-surface-bright">
{/* Unit Category: Responding */}
<div className="px-3 py-1 bg-surface-container-highest border-b border-outline-variant font-label-md text-[10px] text-on-surface-variant uppercase">Responding (3)</div>
<div className="p-3 border-b border-outline-variant flex items-center justify-between hover:bg-surface-container-low cursor-pointer">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full status-dot-critical"></div>
<span className="font-data-mono text-body-sm font-bold text-on-surface">U-41</span>
</div>
<span className="font-body-sm text-[10px] text-error border border-error px-1 rounded">Code Red</span>
</div>
<div className="p-3 border-b border-outline-variant flex items-center justify-between hover:bg-surface-container-low cursor-pointer">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full status-dot-active"></div>
<span className="font-data-mono text-body-sm font-bold text-on-surface">U-22</span>
</div>
<span className="font-body-sm text-[10px] text-primary border border-outline-variant px-1 rounded">En Route</span>
</div>
<div className="p-3 border-b border-outline-variant flex items-center justify-between hover:bg-surface-container-low cursor-pointer">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full status-dot-active"></div>
<span className="font-data-mono text-body-sm font-bold text-on-surface">K9-01</span>
</div>
<span className="font-body-sm text-[10px] text-primary border border-outline-variant px-1 rounded">En Route</span>
</div>
{/* Unit Category: Patrol */}
<div className="px-3 py-1 bg-surface-container-highest border-b border-outline-variant font-label-md text-[10px] text-on-surface-variant uppercase mt-2">Active Patrol (7)</div>
<div className="p-3 border-b border-outline-variant flex items-center justify-between hover:bg-surface-container-low cursor-pointer">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full status-dot-standby"></div>
<span className="font-data-mono text-body-sm font-bold text-on-surface">U-15</span>
</div>
<span className="font-body-sm text-[10px] text-on-surface-variant">Sector 3</span>
</div>
<div className="p-3 border-b border-outline-variant flex items-center justify-between hover:bg-surface-container-low cursor-pointer">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full status-dot-standby"></div>
<span className="font-data-mono text-body-sm font-bold text-on-surface">U-18</span>
</div>
<span className="font-body-sm text-[10px] text-on-surface-variant">Sector 4</span>
</div>
<div className="p-3 border-b border-outline-variant flex items-center justify-between hover:bg-surface-container-low cursor-pointer opacity-50">
<div className="flex items-center gap-2">
<div className="w-2 h-2 border border-outline-variant rounded-full"></div>
<span className="font-data-mono text-body-sm font-bold text-on-surface">U-09</span>
</div>
<span className="font-body-sm text-[10px] text-on-surface-variant">Offline</span>
</div>
</div>
</section>
</div>
</div>
</div>
</main>
</div>
    </>
  );
};

export default CommandCenterOperations;
