import React from 'react';
import { Link } from 'react-router-dom';

const DashboardOverview = () => {
  return (
    <>
      <div className="bg-background text-on-surface flex flex-col md:flex-row min-h-screen">
{/* Side Navigation (Desktop) */}
<aside className="hidden md:flex flex-col w-[280px] h-screen sticky top-0 bg-surface border-r border-outline-variant py-md flex-shrink-0 z-40">
<div className="px-md mb-8 flex items-center gap-3">
<img className="w-10 h-10 object-contain rounded-full border border-outline-variant bg-white" data-alt="Official Karnataka Police Emblem, high-contrast, professional, detailed insignia, authoritative law enforcement theme, clean background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwUpqwGJHTAQCzZSn4_zbm8BdsvQnim8bkJiNhLLkszJb9oEM2mITmiiD82Yb0lSB8dwmK5MZ0GAKIBWdfJOB3zvXWKxva_7S3q4DJv837mFUS76bk8dpIUaGfje_aBumr4ug6M4BAYkHYrtNCYZM2lb1ooh4bPDpVgeqXFnGEMcaAui0BYEDyz_qMkADfWHMQdSvKTanKW7gZ9sO266_Q8ot-t8vFM8b-AMpyZsYWRBUh_AVgDH_99Q"/>
<div>
<h1 className="font-headline-md text-headline-md font-bold text-primary">KrimeKartā</h1>
<p className="font-label-md text-label-md text-on-surface-variant">Law Enforcement Intel</p>
</div>
</div>
<nav className="flex-1 flex flex-col gap-1">
<Link className="flex items-center gap-3 px-4 py-3 bg-primary text-on-primary rounded-lg mx-2 scale-[0.98] transition-transform duration-150" to="/dashboard">
<span className="material-symbols-outlined fill text-[20px]">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors mx-2 rounded-lg" to="/geospatial-map">
<span className="material-symbols-outlined text-[20px]">map</span>
<span className="font-label-md text-label-md">Crime Map</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors mx-2 rounded-lg" to="/strategic-analytics">
<span className="material-symbols-outlined text-[20px]">query_stats</span>
<span className="font-label-md text-label-md">Analytics</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors mx-2 rounded-lg" to="/ai-patrol">
<span className="material-symbols-outlined text-[20px]">auto_awesome</span>
<span className="font-label-md text-label-md">AI Patrol</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors mx-2 rounded-lg" to="/advanced-network">
<span className="material-symbols-outlined text-[20px]">hub</span>
<span className="font-label-md text-label-md">Network Analysis</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors mx-2 rounded-lg" to="/national-crime-records">
<span className="material-symbols-outlined text-[20px]">description</span>
<span className="font-label-md text-label-md">Records</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors mx-2 rounded-lg" to="/criminal-intelligence">
<span className="material-symbols-outlined text-[20px]">summarize</span>
<span className="font-label-md text-label-md">Reports</span>
</Link>
</nav>
<div className="px-md mt-auto flex flex-col gap-3">
<button className="w-full bg-primary-container text-on-primary-container py-2 rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined text-[18px]">emergency</span>
                Emergency Dispatch
            </button>
<div className="h-px bg-outline-variant w-full my-2"></div>
<Link className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg" to="/command-center">
<span className="material-symbols-outlined text-[20px]">verified_user</span>
<span className="font-label-md text-label-md">System Status</span>
</Link>
<a className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg" href="#">
<span className="material-symbols-outlined text-[20px]">settings</span>
<span className="font-label-md text-label-md">Settings</span>
</a>
</div>
</aside>
{/* Main Content Area */}
<main className="flex-1 flex flex-col min-w-0 bg-surface-container-lowest">
{/* Top App Bar (Mobile Nav / Desktop Header) */}
<header className="flex justify-between items-center w-full h-16 px-md sticky top-0 z-30 bg-surface border-b border-outline-variant">
{/* Mobile Menu Toggle & Brand */}
<div className="flex items-center gap-4 md:hidden">
<button className="text-on-surface-variant hover:bg-surface-container-low p-2 rounded-full transition-colors">
<span className="material-symbols-outlined">menu</span>
</button>
<span className="font-headline-sm text-headline-sm font-bold text-primary">KrimeKartā</span>
</div>
<div className="hidden md:flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight">Command Center</span>
</div>
{/* Actions */}
<div className="flex items-center gap-2">
<button className="text-on-surface-variant hover:bg-surface-container-low p-2 rounded-full transition-colors relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
</button>
<button className="text-on-surface-variant hover:bg-surface-container-low p-2 rounded-full transition-colors">
<span className="material-symbols-outlined">account_circle</span>
</button>
</div>
</header>
<div className="p-md lg:p-xl flex-1 max-w-container-max mx-auto w-full space-y-lg">
{/* KPI Row */}
<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
<div className="bg-surface-container-lowest border border-outline-variant rounded p-sm flex flex-col justify-between">
<div className="flex items-start justify-between mb-2">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Total Crimes (24h)</span>
<span className="material-symbols-outlined text-secondary text-[20px]">gavel</span>
</div>
<div className="flex items-end gap-2">
<span className="font-data-mono text-[32px] leading-tight font-bold text-on-surface">142</span>
<span className="font-label-md text-label-md text-primary flex items-center mb-1">
<span className="material-symbols-outlined text-[14px]">arrow_upward</span> 12%
                        </span>
</div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant rounded p-sm flex flex-col justify-between relative overflow-hidden">
<div className="absolute inset-0 bg-error/5 border-l-4 border-error"></div>
<div className="relative z-10 flex items-start justify-between mb-2">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">AI Risk Level</span>
<span className="material-symbols-outlined text-error text-[20px]">warning</span>
</div>
<div className="relative z-10 flex items-end gap-2">
<span className="font-data-mono text-[32px] leading-tight font-bold text-error">ELEVATED</span>
</div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant rounded p-sm flex flex-col justify-between">
<div className="flex items-start justify-between mb-2">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Active Patrols</span>
<span className="material-symbols-outlined text-secondary text-[20px]">local_police</span>
</div>
<div className="flex items-end gap-2">
<span className="font-data-mono text-[32px] leading-tight font-bold text-on-surface">87</span>
<span className="font-label-md text-label-md text-secondary flex items-center mb-1">
                            of 120 units
                        </span>
</div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant rounded p-sm flex flex-col justify-between">
<div className="flex items-start justify-between mb-2">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Resolved Cases</span>
<span className="material-symbols-outlined text-secondary text-[20px]">task_alt</span>
</div>
<div className="flex items-end gap-2">
<span className="font-data-mono text-[32px] leading-tight font-bold text-on-surface">45</span>
<span className="font-label-md text-label-md text-on-secondary-container flex items-center mb-1">
<span className="material-symbols-outlined text-[14px]">arrow_upward</span> 5%
                        </span>
</div>
</div>
</section>
{/* Main Bento Grid */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-md">
{/* Chart Section */}
<div className="lg:col-span-8 bg-surface-container-lowest border border-outline-variant rounded p-md flex flex-col h-[400px]">
<div className="flex justify-between items-center mb-4">
<h2 className="font-headline-sm text-headline-sm text-on-surface">7-Day Crime Trends</h2>
<button className="font-label-md text-label-md text-primary hover:underline flex items-center gap-1">
                            View Full Report <span className="material-symbols-outlined text-[16px]">chevron_right</span>
</button>
</div>
<div className="flex-1 w-full relative">
{/* Mock SVG Chart */}
<svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 300">
{/* Grid lines */}
<line className="chart-grid" x1="0" x2="800" y1="50" y2="50"></line>
<line className="chart-grid" x1="0" x2="800" y1="125" y2="125"></line>
<line className="chart-grid" x1="0" x2="800" y1="200" y2="200"></line>
<line className="chart-grid" x1="0" x2="800" y1="275" y2="275"></line>
{/* Line */}
<path className="chart-line" d="M 0 250 L 100 220 L 200 180 L 300 240 L 400 150 L 500 120 L 600 160 L 700 80 L 800 110"></path>
{/* Data points */}
<circle cx="100" cy="220" fill="#8c1d18" r="4"></circle>
<circle cx="200" cy="180" fill="#8c1d18" r="4"></circle>
<circle cx="300" cy="240" fill="#8c1d18" r="4"></circle>
<circle cx="400" cy="150" fill="#8c1d18" r="4"></circle>
<circle cx="500" cy="120" fill="#8c1d18" r="4"></circle>
<circle cx="600" cy="160" fill="#8c1d18" r="4"></circle>
<circle cx="700" cy="80" fill="#8c1d18" r="4"></circle>
<circle cx="800" cy="110" fill="#8c1d18" r="4"></circle>
</svg>
{/* X Axis Labels */}
<div className="absolute bottom-0 left-0 w-full flex justify-between font-data-mono text-[10px] text-on-surface-variant pt-2">
<span>Mon</span>
<span>Tue</span>
<span>Wed</span>
<span>Thu</span>
<span>Fri</span>
<span>Sat</span>
<span>Sun</span>
</div>
</div>
</div>
{/* Heatmap Preview */}
<div className="lg:col-span-4 bg-surface-container-lowest border border-outline-variant rounded p-sm flex flex-col h-[400px]">
<div className="flex justify-between items-center mb-3 px-2 pt-2">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Density Heatmap</h2>
<span className="material-symbols-outlined text-secondary">explore</span>
</div>
<div className="flex-1 rounded border border-outline-variant overflow-hidden relative">
<img className="w-full h-full object-cover" data-alt="A detailed, high-contrast digital map interface of Karnataka state, showing a heat map visualization with deep reds and crisp whites, utilitarian professional law enforcement dashboard style, clean and authoritative aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvMDkoWPQWnOhFJt0HUp0yA0kZtD10NtE-HvyyuX9jdxQQSQ8oxoyectTHp8FhuboJdTGduGT4GSfSs9Fx5Hc8qVH3wh-kWSVLQMQVZ6yJCpj4pzcAUY6A9HfxDv8tMJGUqDr-PSwotphSEVCys2ixILn0xzlaJ1Uz5Iuq6_PmLNM0XRlrrhB0AUTqU5UFSfLXW11U8Jb0JJWPViNHKHqgUTRCjl04C0zQZ9LPWkcYntz9OPE1Ikp8tQ"/>
<div className="absolute bottom-2 right-2 bg-surface-container-lowest/90 backdrop-blur border border-outline-variant px-2 py-1 rounded font-data-mono text-[10px] text-on-surface">
                            Live Feed Active
                        </div>
</div>
</div>
</div>
{/* Bottom Row */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-md">
{/* AI Alerts Panel */}
<div className="bg-surface-container-lowest border border-outline-variant rounded p-md flex flex-col">
<div className="flex justify-between items-center mb-4 pb-2 border-b border-outline-variant">
<h2 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-primary">campaign</span>
                            Priority Hotspots
                        </h2>
<span className="font-label-md text-label-md bg-error/10 text-error px-2 py-1 rounded">3 Critical</span>
</div>
<ul className="space-y-3">
<li className="flex items-start gap-3 p-3 bg-surface border border-outline-variant rounded hover:border-primary transition-colors cursor-pointer">
<div className="mt-1">
<span className="material-symbols-outlined text-error fill text-[20px]">error</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-center">
<span className="font-body-md text-body-md font-bold text-on-surface">Shivajinagar Market</span>
<span className="font-data-mono text-data-mono text-error">94% Confidence</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Predicted spike in petty theft next 2 hours based on historical match event.</p>
</div>
</li>
<li className="flex items-start gap-3 p-3 bg-surface border border-outline-variant rounded hover:border-primary transition-colors cursor-pointer">
<div className="mt-1">
<span className="material-symbols-outlined text-on-tertiary-container text-[20px]">warning</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-center">
<span className="font-body-md text-body-md font-bold text-on-surface">Indiranagar 100ft Rd</span>
<span className="font-data-mono text-data-mono text-on-tertiary-container">82% Confidence</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Anomalous traffic pattern detected. Potential organized gathering.</p>
</div>
</li>
<li className="flex items-start gap-3 p-3 bg-surface border border-outline-variant rounded hover:border-primary transition-colors cursor-pointer">
<div className="mt-1">
<span className="material-symbols-outlined text-on-tertiary-container text-[20px]">warning</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-center">
<span className="font-body-md text-body-md font-bold text-on-surface">Koramangala Block 5</span>
<span className="font-data-mono text-data-mono text-on-tertiary-container">78% Confidence</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Recurring late-night disturbance reports clustered in sector 4B.</p>
</div>
</li>
</ul>
</div>
{/* District Summary Table */}
<div className="bg-surface-container-lowest border border-outline-variant rounded flex flex-col overflow-hidden">
<div className="p-md pb-2">
<h2 className="font-headline-sm text-headline-sm text-on-surface">District Summaries</h2>
</div>
<div className="overflow-x-auto w-full">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-[#F3E9D2] border-y border-outline-variant">
<th className="px-4 py-2 font-data-mono text-[12px] font-bold text-on-surface uppercase">District</th>
<th className="px-4 py-2 font-data-mono text-[12px] font-bold text-on-surface uppercase text-right">Total Incidents</th>
<th className="px-4 py-2 font-data-mono text-[12px] font-bold text-on-surface uppercase text-right">Active Units</th>
<th className="px-4 py-2 font-data-mono text-[12px] font-bold text-on-surface uppercase text-center">Status</th>
</tr>
</thead>
<tbody className="font-data-mono text-data-mono text-on-surface">
<tr className="border-b border-outline-variant bg-surface-container-lowest">
<td className="px-4 py-3">Bangalore Central</td>
<td className="px-4 py-3 text-right">45</td>
<td className="px-4 py-3 text-right">24</td>
<td className="px-4 py-3 text-center"><span className="w-2 h-2 rounded-full bg-error inline-block"></span></td>
</tr>
<tr className="border-b border-outline-variant bg-surface">
<td className="px-4 py-3">Mysuru City</td>
<td className="px-4 py-3 text-right">18</td>
<td className="px-4 py-3 text-right">12</td>
<td className="px-4 py-3 text-center"><span className="w-2 h-2 rounded-full bg-on-tertiary-container inline-block"></span></td>
</tr>
<tr className="border-b border-outline-variant bg-surface-container-lowest">
<td className="px-4 py-3">Mangaluru</td>
<td className="px-4 py-3 text-right">12</td>
<td className="px-4 py-3 text-right">8</td>
<td className="px-4 py-3 text-center"><span className="w-2 h-2 rounded-full bg-secondary inline-block"></span></td>
</tr>
<tr className="border-b border-outline-variant bg-surface">
<td className="px-4 py-3">Hubballi-Dharwad</td>
<td className="px-4 py-3 text-right">9</td>
<td className="px-4 py-3 text-right">6</td>
<td className="px-4 py-3 text-center"><span className="w-2 h-2 rounded-full bg-secondary inline-block"></span></td>
</tr>
<tr className="bg-surface-container-lowest">
<td className="px-4 py-3">Belagavi</td>
<td className="px-4 py-3 text-right">7</td>
<td className="px-4 py-3 text-right">5</td>
<td className="px-4 py-3 text-center"><span className="w-2 h-2 rounded-full bg-secondary inline-block"></span></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
{/* Footer */}
<footer className="w-full py-sm border-t border-outline-variant bg-surface-container-lowest flex flex-col md:flex-row justify-between items-center px-lg mt-auto">
<div className="font-label-md text-label-md font-bold text-primary mb-2 md:mb-0">
                KrimeKartā
            </div>
<div className="font-body-sm text-body-sm text-secondary text-center md:text-left mb-2 md:mb-0">
                Karnataka Police Intelligence Platform. All Rights Reserved. Official Use Only.
            </div>
<div className="flex gap-4">
<a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Data Source Attributions</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
<Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" to="/command-center">System Status</Link>
</div>
</footer>
</main>
</div>
    </>
  );
};

export default DashboardOverview;
