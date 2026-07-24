import React from 'react';
import { Link } from 'react-router-dom';
import { useApiResource } from '../hooks/useApiResource';

const StrategicAnalytics = () => {
  const { data } = useApiResource('/analytics/summary', analyticsFallback);
  const topCategories = data.byCategory.length ? data.byCategory : analyticsFallback.byCategory;
  const summary = data.executiveSummary;

  return (
    <>
      <div className="bg-background text-on-background font-body-md h-screen overflow-hidden flex selection:bg-primary selection:text-on-primary">
{/* JSON: SideNavBar */}
<aside className="w-[280px] h-screen flex flex-col sticky top-0 border-r border-outline-variant dark:border-outline bg-surface dark:bg-surface-dim z-40 flex-shrink-0 hidden md:flex">
<div className="flex items-center gap-sm px-md py-lg border-b border-outline-variant dark:border-outline">
<div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
<img className="w-8 h-8 object-contain rounded-full" data-alt="A highly detailed, professional crest or emblem serving as a police department logo, styled with traditional gold and dark red hues, clean vector-like design suitable for a modern enterprise interface. Soft, even lighting highlights the metallic sheen of the emblem against a neutral background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRPegHjijY-CsNE9oH5CqMZ0XwdhbjEVVECNMbiD9P990KuYFR0Rdu57zjzJZ9V6c5pRpsNPQ_Y1Z79oDU2KRTi4aJk5N_dssYd8OCMLkSPYm7SZKKXMBxm-S30pJ0suHxYOB21dnzPsU6L34XgH2tBGeq8QCfoSRdg8_rAycNxVoHTtHJ5y35dkN0ehVY7u-1Or88M7gBbUPiIATEh9j-VH9RqhxChLv3N3oYbpqTv_jtfXKwIttVDw"/>
</div>
<div className="flex flex-col">
<span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed truncate">KrimeKartā</span>
<span className="font-label-md text-label-md text-on-surface-variant truncate">Law Enforcement Intel</span>
</div>
</div>
<nav className="flex-1 overflow-y-auto py-md flex flex-col gap-xs">
{/* Active: Analytics */}
<Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-surface hover:bg-surface-container-high transition-colors mx-2 rounded-lg" to="/dashboard">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-surface hover:bg-surface-container-high transition-colors mx-2 rounded-lg" to="/geospatial-map">
<span className="material-symbols-outlined">map</span>
<span className="font-label-md text-label-md">Crime Map</span>
</Link>
{/* ACTIVE TAB */}
<Link className="flex items-center gap-3 px-4 py-3 bg-primary text-on-primary rounded-lg mx-2 scale-[0.98] transition-transform duration-150" to="/strategic-analytics">
<span className="material-symbols-outlined fill-icon">query_stats</span>
<span className="font-label-md text-label-md">Analytics</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-surface hover:bg-surface-container-high transition-colors mx-2 rounded-lg" to="/ai-patrol">
<span className="material-symbols-outlined">auto_awesome</span>
<span className="font-label-md text-label-md">AI Patrol</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-surface hover:bg-surface-container-high transition-colors mx-2 rounded-lg" to="/advanced-network">
<span className="material-symbols-outlined">hub</span>
<span className="font-label-md text-label-md">Network Analysis</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-surface hover:bg-surface-container-high transition-colors mx-2 rounded-lg" to="/national-crime-records">
<span className="material-symbols-outlined">description</span>
<span className="font-label-md text-label-md">Records</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-surface hover:bg-surface-container-high transition-colors mx-2 rounded-lg" to="/criminal-intelligence">
<span className="material-symbols-outlined">summarize</span>
<span className="font-label-md text-label-md">Reports</span>
</Link>
</nav>
<div className="p-md mt-auto border-t border-outline-variant dark:border-outline flex flex-col gap-sm">
<button className="w-full py-2 px-4 bg-primary text-on-primary font-label-md text-label-md rounded hover:bg-primary-fixed-variant transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[18px]">emergency</span>
                Emergency Dispatch
            </button>
<div className="flex flex-col gap-xs mt-sm">
<Link className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container-high transition-colors mx-2 rounded-lg" to="/command-center">
<span className="material-symbols-outlined text-[18px]">verified_user</span>
<span className="font-label-md text-label-md">System Status</span>
</Link>
<a className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container-high transition-colors mx-2 rounded-lg" href="#">
<span className="material-symbols-outlined text-[18px]">settings</span>
<span className="font-label-md text-label-md">Settings</span>
</a>
</div>
</div>
</aside>
{/* Main Content Area */}
<div className="flex-1 flex flex-col h-full overflow-hidden bg-background">
{/* JSON: TopAppBar (Mobile Only - Desktop nav is side) */}
<header className="flex md:hidden justify-between items-center w-full h-16 px-md sticky top-0 z-50 bg-surface dark:bg-surface-dim border-b border-outline-variant dark:border-outline">
<div className="flex items-center gap-sm">
<button className="text-on-surface hover:bg-surface-container-low p-2 rounded-full">
<span className="material-symbols-outlined">menu</span>
</button>
<span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">KrimeKartā</span>
</div>
<div className="flex items-center gap-2">
<button className="text-on-surface-variant p-2 hover:bg-surface-container-low rounded-full">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="text-on-surface-variant p-2 hover:bg-surface-container-low rounded-full">
<img className="w-8 h-8 rounded-full object-cover" data-alt="A small, professional circular avatar portrait of a law enforcement officer in a clean, high-key lighting setup. The background is a crisp, modern off-white, conveying an enterprise software aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtqhSDfm7d4Wr1T9diJ8AcM3psj3K-RIZYvcUb3FOpPjYsMXkAsDaIqsd7rt_VAyF93VL1_tgqWYyotqJtw3ucBO_lHd9kp0N2wot5FQlrM1HPx1GGyKH9z-gIQ-oP_Y42LT1pm0AVfcFbXHagmZlkfpiLaXPHE0EaCUEmqWh6-UsQwC95Kc0J8bV199j_Bs9R6OlVg1jALKtFJaJ6sgu_p6RcMIcXFuMEWIMyFvBRkyBZe4VCOWQ0Uw"/>
</button>
</div>
</header>
{/* TopAppBar Actions (Desktop specific header area for main content) */}
<header className="hidden md:flex justify-between items-center w-full h-16 px-xl sticky top-0 z-30 bg-surface/90 backdrop-blur-sm border-b border-outline-variant">
<h1 className="font-headline-sm text-headline-sm text-on-surface">Crime Analytics</h1>
<div className="flex items-center gap-4">
{/* Search */}
<div className="relative hidden lg:flex items-center w-64">
<span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-[18px]">search</span>
<input className="w-full h-9 pl-10 pr-3 bg-surface-container-lowest border border-outline-variant rounded font-body-sm text-body-sm focus:ring-2 focus:ring-tertiary-fixed-dim focus:border-transparent outline-none transition-all placeholder:text-on-surface-variant/50" placeholder="Search analytics..." type="text"/>
</div>
<button className="text-on-surface-variant hover:bg-surface-container-high p-2 rounded-full transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="flex items-center gap-2 hover:bg-surface-container-high p-1 pr-3 rounded-full transition-colors border border-outline-variant bg-surface-container-lowest">
<img className="w-7 h-7 rounded-full object-cover" data-alt="A small, professional circular avatar portrait of a law enforcement officer in a clean, high-key lighting setup. The background is a crisp, modern off-white, conveying an enterprise software aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfNbN65yDAlh3g-4bTkw8I-g7UR6qDkwlpWrCiw5-uzu-xQafgnicXQfB1Uqp0cApcoTrOed6497xJy1XPAfaYJz17YVctVm6fv15S9I9impgPqBGNTg24SKvHwH7NU8b_mpSQRryjDD83zlIBDh15cDQbk13Ms2wFH9DlWxKEZd4ZH6vqMf3JApiG9SFNWWUagfK3zuB4k-v32EBv0jPke2pA2UdL6eQgcMu2GROeCD9r9Za09VXamQ"/>
<span className="font-label-md text-label-md text-on-surface">ID: 49201</span>
</button>
</div>
</header>
{/* Scrollable Content */}
<main className="flex-1 overflow-y-auto p-4 md:p-xl flex flex-col gap-lg">
{/* Filters & Header Section */}
<section className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 bg-surface-container-lowest p-md border border-outline-variant rounded-lg">
<div>
<h2 className="font-headline-md text-headline-lg-mobile md:text-headline-md text-on-background">Statistical Overview</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Detailed breakdown of incident reports and patterns across jurisdictions.</p>
</div>
<div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
{/* Date Picker Mock */}
<div className="flex items-center gap-2 bg-surface p-2 border border-outline-variant rounded flex-1 lg:flex-none min-w-[200px]">
<span className="material-symbols-outlined text-on-surface-variant text-[18px]">calendar_today</span>
<select className="bg-transparent font-data-mono text-data-mono text-on-surface w-full outline-none appearance-none cursor-pointer border-none p-0 focus:ring-0">
<option>Q3 2023 (Jul - Sep)</option>
<option>Q2 2023 (Apr - Jun)</option>
<option>YTD 2023</option>
</select>
<span className="material-symbols-outlined text-on-surface-variant text-[18px]">arrow_drop_down</span>
</div>
{/* District Dropdown */}
<div className="flex items-center gap-2 bg-surface p-2 border border-outline-variant rounded flex-1 lg:flex-none min-w-[160px]">
<span className="material-symbols-outlined text-on-surface-variant text-[18px]">location_on</span>
<select className="bg-transparent font-data-mono text-data-mono text-on-surface w-full outline-none appearance-none cursor-pointer border-none p-0 focus:ring-0">
<option>All Districts</option>
<option>Bengaluru Urban</option>
<option>Mysuru</option>
<option>Hubballi-Dharwad</option>
</select>
<span className="material-symbols-outlined text-on-surface-variant text-[18px]">arrow_drop_down</span>
</div>
<button className="bg-secondary text-on-secondary p-2 rounded hover:bg-secondary/90 transition-colors flex items-center justify-center h-full">
<span className="material-symbols-outlined">download</span>
</button>
</div>
</section>
{/* Grid Layout for Charts & Insights */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
{/* Main Charts Area (Left/Center 8 cols) */}
<div className="lg:col-span-8 flex flex-col gap-lg">
{/* Trend Analysis (Area Chart) */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md flex flex-col">
<div className="flex justify-between items-center mb-md border-b border-outline-variant pb-2">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Incident Trend Analysis</h3>
<span className="font-label-md text-label-md bg-surface-container p-1 px-2 rounded text-on-surface-variant">Weekly Aggregation</span>
</div>
<div className="w-full h-[300px] relative">
<canvas id="trendChart"></canvas>
</div>
</div>
{/* Lower Grid: District Comparison & Category Treemap */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
{/* District Comparison (Bar Chart) */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md flex flex-col">
<div className="mb-md border-b border-outline-variant pb-2">
<h3 className="font-headline-sm text-headline-sm text-on-surface">District Comparison</h3>
</div>
<div className="w-full h-[250px] relative">
<canvas id="districtChart"></canvas>
</div>
</div>
{/* Category Breakdown (Treemap mock using divs for strict UI control) */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md flex flex-col">
<div className="mb-md border-b border-outline-variant pb-2">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Category Breakdown</h3>
</div>
<div className="w-full h-[250px] flex flex-col gap-1">
<div className="flex gap-1 h-3/5">
<div className="bg-secondary-container text-on-secondary-container w-2/3 p-2 rounded-sm flex flex-col justify-between border border-outline-variant/30 hover:opacity-90 cursor-default">
<span className="font-label-md text-label-md">Property Crime</span>
<span className="font-data-mono text-data-mono font-bold text-lg">{topCategories[0]?.pct || 42}%</span>
</div>
<div className="bg-surface-variant text-on-surface-variant w-1/3 p-2 rounded-sm flex flex-col justify-between border border-outline-variant/30 hover:opacity-90 cursor-default">
<span className="font-label-md text-label-md">Cyber</span>
<span className="font-data-mono text-data-mono font-bold text-lg">{topCategories[1]?.pct || 21}%</span>
</div>
</div>
<div className="flex gap-1 h-2/5">
<div className="bg-tertiary-container text-on-tertiary-container w-1/2 p-2 rounded-sm flex flex-col justify-between border border-outline-variant/30 hover:opacity-90 cursor-default">
<span className="font-label-md text-label-md">Violent</span>
<span className="font-data-mono text-data-mono font-bold">{topCategories[2]?.pct || 18}%</span>
</div>
<div className="flex gap-1 w-1/2">
<div className="bg-surface-container-high text-on-surface-variant w-3/5 p-2 rounded-sm flex flex-col justify-between border border-outline-variant/30 hover:opacity-90 cursor-default">
<span className="font-label-md text-[10px] uppercase tracking-wider">Narcotics</span>
<span className="font-data-mono text-data-mono font-bold">{topCategories[3]?.pct || 11}%</span>
</div>
<div className="bg-surface text-on-surface w-2/5 p-2 rounded-sm flex flex-col justify-between border border-outline-variant/30 hover:opacity-90 cursor-default">
<span className="font-label-md text-[10px] uppercase tracking-wider">Other</span>
<span className="font-data-mono text-data-mono font-bold">{topCategories[4]?.pct || 8}%</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
{/* Right Sidebar (4 cols): AI Insights */}
<div className="lg:col-span-4 flex flex-col h-full">
<div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-0 flex flex-col h-full sticky top-0 overflow-hidden">
<div className="bg-secondary-container p-md border-b border-outline-variant flex items-center gap-3">
<span className="material-symbols-outlined text-tertiary-container">auto_awesome</span>
<h3 className="font-headline-sm text-headline-sm text-on-secondary-container">AI Executive Summary</h3>
</div>
<div className="p-md flex flex-col gap-md overflow-y-auto">
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                                {summary.headline}
                            </p>
{/* Insight Item */}
<div className="border-l-2 border-primary pl-3 py-1">
<h4 className="font-label-md text-label-md text-on-surface flex items-center gap-2 mb-1">
<span className="material-symbols-outlined text-[16px] text-primary">trending_up</span>
                                    {summary.insights[0]?.title || 'Spike in Cyber Fraud'}
                                </h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                                    {summary.insights[0]?.body}
                                </p>
</div>
{/* Insight Item */}
<div className="border-l-2 border-tertiary-fixed-dim pl-3 py-1">
<h4 className="font-label-md text-label-md text-on-surface flex items-center gap-2 mb-1">
<span className="material-symbols-outlined text-[16px] text-tertiary">location_searching</span>
                                    {summary.insights[1]?.title || 'Property Crime Shift'}
                                </h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                                    {summary.insights[1]?.body}
                                </p>
</div>
{/* Actionable Recommendation */}
<div className="bg-surface-container p-3 rounded border border-outline-variant/50 mt-2">
<h4 className="font-label-md text-label-md text-on-surface mb-2 border-b border-outline-variant/50 pb-1">Recommended Deployment</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-3">
                                    {summary.recommendation}
                                </p>
<button className="w-full py-1.5 px-3 bg-surface-container-highest border border-outline-variant text-on-surface font-label-md text-label-md rounded hover:bg-surface-dim transition-colors text-center">
                                    Generate Full Briefing
                                </button>
</div>
</div>
</div>
</div>
</div>
{/* JSON: Footer */}
<footer className="w-full py-sm mt-auto border-t border-outline-variant dark:border-outline bg-surface-container-lowest dark:bg-surface-container flex flex-col md:flex-row justify-between items-center px-lg shrink-0">
<span className="font-label-md text-label-md font-bold text-primary mb-2 md:mb-0">KrimeKartā</span>
<div className="flex items-center gap-4">
<a className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-surface hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">Data Source Attributions</a>
<a className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-surface hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">Privacy Policy</a>
<Link className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-surface hover:text-primary dark:hover:text-primary-fixed transition-colors" to="/command-center">System Status</Link>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-2 md:mt-0 text-center md:text-right">Karnataka Police Intelligence Platform. All Rights Reserved. Official Use Only.</span>
</footer>
</main>
</div>
{/* Chart.js Initialization */}

</div>
    </>
  );
};

export default StrategicAnalytics;

const analyticsFallback = {
  byCategory: [
    { category: 'Property Crime', pct: 42 },
    { category: 'Cyber', pct: 21 },
    { category: 'Violent', pct: 18 },
    { category: 'Narcotics', pct: 11 },
    { category: 'Other', pct: 8 }
  ],
  executiveSummary: {
    headline: 'Analysis indicates deviations from historical baselines in the central districts.',
    insights: [
      { title: 'Spike in Cyber Fraud', body: 'Reported phishing incidents are concentrated in IT corridors.' },
      { title: 'Property Crime Shift', body: 'Vehicle thefts have migrated from urban centers to transit hubs.' }
    ],
    recommendation: 'Increase nocturnal visible patrols and launch digital fraud awareness.'
  }
};
