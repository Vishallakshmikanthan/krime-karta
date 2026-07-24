import React from 'react';
import { Link } from 'react-router-dom';

const AiPatrolRecommendationCenter = () => {
  return (
    <>
      <div className="bg-surface text-on-surface font-body-md min-h-screen flex">
{/* SideNavBar */}
<nav className="hidden md:flex w-[280px] h-screen flex-col sticky top-0 bg-surface border-r border-outline-variant py-md z-40">
<div className="px-md mb-lg">
<div className="flex items-center gap-sm">
<img className="w-10 h-10 object-contain rounded-full border border-outline-variant" data-alt="The official circular emblem of the Karnataka Police, featuring the state crest and motto in a high-contrast, formal style. Set against a clean white background, reflecting a professional government document aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsN9bIUg5Krk_SOGwfFaS_SsDcWwP4Yg7BkRzG7kdXT2VvDV4_G4VSixlMv50hi6aaFL046O2ziIWNrsBm1KBj3QoRWHhPCtquYGpQDhrHYwQYetkI5I1z3hZQgtvyhpR4ZY1NCgUx1XrAMG0VZtGEWdk51H9nYo1lRfmTuBIhbfOerOUIdr9ngQd_r1CvEYDZnoXr5nCCjUh4vnQhMS1KnVrWEmKnYh3gu-iykomKGrc4inWghRqGdqVzZL7Y2jOUBJFUce_CYDKd"/>
<div>
<h1 className="font-headline-md text-headline-md font-bold text-primary">KrimeKartā</h1>
<p className="font-label-md text-label-md text-on-surface-variant">Law Enforcement Intel</p>
</div>
</div>
</div>
<div className="flex-1 overflow-y-auto space-y-xs px-xs">
<Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors mx-2 rounded-lg" to="/dashboard">
<span className="material-symbols-outlined text-[20px]">dashboard</span>
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
<Link className="flex items-center gap-3 px-4 py-3 bg-primary text-on-primary rounded-lg mx-2 transform scale-[0.98] transition-transform duration-150" to="/ai-patrol">
<span className="material-symbols-outlined text-[20px] fill">auto_awesome</span>
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
</div>
<div className="px-md mt-auto pt-md border-t border-outline-variant space-y-xs">
<button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm">
<span className="material-symbols-outlined text-[18px]">emergency</span>
                Emergency Dispatch
            </button>
<div className="pt-sm space-y-xs">
<Link className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container-high transition-colors mx-2 rounded-lg" to="/command-center">
<span className="material-symbols-outlined text-[20px]">verified_user</span>
<span className="font-label-md text-label-md">System Status</span>
</Link>
<a className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container-high transition-colors mx-2 rounded-lg" href="#">
<span className="material-symbols-outlined text-[20px]">settings</span>
<span className="font-label-md text-label-md">Settings</span>
</a>
</div>
</div>
</nav>
{/* Main Content Area */}
<main className="flex-1 flex flex-col min-h-screen">
{/* TopAppBar (Mobile Only) */}
<header className="md:hidden flex justify-between items-center w-full h-16 px-md sticky top-0 z-50 bg-surface border-b border-outline-variant">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-on-surface-variant" id="mobile-menu-btn">menu</span>
<span className="font-headline-sm text-headline-sm font-bold text-primary">KrimeKartā</span>
</div>
<div className="flex items-center gap-sm">
<button className="text-on-surface-variant hover:bg-surface-container-low rounded-full p-2 transition-colors">
<span className="material-symbols-outlined text-[24px]">notifications</span>
</button>
<img className="w-8 h-8 rounded-full border border-outline-variant object-cover" data-alt="A small, professional headshot of an Indian police officer in uniform. The lighting is studio-quality and formal, fitting for an enterprise law enforcement portal. Warm ivory background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuABfF_H64XAJAWSK_Cp6b99PgpVXKXhbppjYsTIqabn7uKrXLpiCeXCS7xYb-Cramd0MSI__2r-rLWkWcAvgh-Jq7sIYumrkdY7YNun23wPg1U64liV8e6oBbXRvwJfTbBcldVYH8cbnFLF9XIFFNfHORxzlhR7EbP4m1dcOKOHxuQbLLIEqjvMlgHI-yWdCWdQYndtp8kK7FquglGo5JgQqWaHJQRCawGxyd8fi_Af8avrtl8g7o-vobI_pMapLie04NwwiIPA-VaL"/>
</div>
</header>
<div className="flex-1 p-4 md:p-gutter max-w-container-max mx-auto w-full flex flex-col xl:flex-row gap-gutter">
{/* Main Canvas: AI Recommendations */}
<div className="flex-1 space-y-gutter">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-outline-variant pb-sm">
<div>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-1">AI Recommendation Center</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Intelligent patrol deployment analysis based on real-time spatial data and historical trends.</p>
</div>
<div className="mt-4 md:mt-0 flex items-center gap-2 bg-surface-container px-3 py-1.5 rounded-lg border border-outline-variant">
<span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim">schedule</span>
<span className="font-data-mono text-data-mono text-on-surface-variant">Last Update: Just now</span>
</div>
</div>
<div className="space-y-sm">
{/* Recommendation Card 1 */}
<article className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-error"></div>
<div className="flex flex-col lg:flex-row gap-md justify-between">
<div className="flex-1 space-y-md">
<div className="flex items-start justify-between">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="bg-error-container text-on-error-container px-2 py-0.5 rounded font-label-md text-label-md uppercase tracking-wider">High Priority</span>
<span className="font-data-mono text-data-mono text-on-surface-variant">ID: REC-2023-8891</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Deploy 2 Mobile Units</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">location_on</span>
                                            Sector 4, Near Majestic Transport Hub
                                        </p>
</div>
<div className="text-right">
<div className="font-display text-display text-error">94</div>
<div className="font-label-md text-label-md text-on-surface-variant uppercase">Risk Score</div>
</div>
</div>
<div className="bg-surface p-sm rounded border border-outline-variant">
<h4 className="font-label-md text-label-md text-on-surface-variant mb-2 uppercase tracking-wider">AI Reasoning</h4>
<p className="font-body-md text-body-md text-on-surface">Spike in reported petty theft incidents over the last 4 hours correlating with historical patterns during major festive transit periods. Confidence level is exceptionally high due to cross-referenced CCTV density and recent tip-offs.</p>
</div>
</div>
<div className="lg:w-64 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-outline-variant pt-md lg:pt-0 lg:pl-md">
<div className="space-y-3">
<div>
<div className="flex justify-between font-label-md text-label-md mb-1">
<span className="text-on-surface-variant">Confidence Level</span>
<span className="text-on-surface">88%</span>
</div>
<div className="h-1.5 w-full bg-surface-variant rounded-full overflow-hidden">
<div className="h-full bg-primary" style={{width: "88%"}}></div>
</div>
</div>
<div className="flex items-center gap-2 text-sm font-data-mono text-on-surface-variant">
<span className="material-symbols-outlined text-[16px]">group</span>
                                        Req: 4 Officers
                                    </div>
</div>
<div className="flex gap-2 mt-sm lg:mt-0">
<button className="flex-1 bg-primary hover:bg-primary-container text-on-primary py-2 px-3 rounded font-label-md text-label-md transition-colors flex justify-center items-center gap-1">
<span className="material-symbols-outlined text-[18px]">check</span> Approve
                                    </button>
<button className="bg-surface border border-outline-variant hover:bg-surface-container-low text-on-surface py-2 px-3 rounded font-label-md text-label-md transition-colors">
                                        Reject
                                    </button>
<button className="text-on-surface-variant hover:text-primary transition-colors p-2">
<span className="material-symbols-outlined">edit</span>
</button>
</div>
</div>
</div>
</article>
{/* Recommendation Card 2 */}
<article className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-tertiary-fixed-dim"></div>
<div className="flex flex-col lg:flex-row gap-md justify-between">
<div className="flex-1 space-y-md">
<div className="flex items-start justify-between">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded font-label-md text-label-md uppercase tracking-wider">Medium Priority</span>
<span className="font-data-mono text-data-mono text-on-surface-variant">ID: REC-2023-8892</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Increase Foot Patrol</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">location_on</span>
                                            Commercial Street Market Area
                                        </p>
</div>
<div className="text-right">
<div className="font-display text-display text-on-surface">62</div>
<div className="font-label-md text-label-md text-on-surface-variant uppercase">Risk Score</div>
</div>
</div>
<div className="bg-surface p-sm rounded border border-outline-variant">
<h4 className="font-label-md text-label-md text-on-surface-variant mb-2 uppercase tracking-wider">AI Reasoning</h4>
<p className="font-body-md text-body-md text-on-surface">Anticipated crowd density increase based on weather patterns (clear skies after rain) and end-of-month salary disbursements. Historical data suggests a moderate increase in nuisance reports under these conditions.</p>
</div>
</div>
<div className="lg:w-64 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-outline-variant pt-md lg:pt-0 lg:pl-md">
<div className="space-y-3">
<div>
<div className="flex justify-between font-label-md text-label-md mb-1">
<span className="text-on-surface-variant">Confidence Level</span>
<span className="text-on-surface">74%</span>
</div>
<div className="h-1.5 w-full bg-surface-variant rounded-full overflow-hidden">
<div className="h-full bg-tertiary-fixed-dim" style={{width: "74%"}}></div>
</div>
</div>
<div className="flex items-center gap-2 text-sm font-data-mono text-on-surface-variant">
<span className="material-symbols-outlined text-[16px]">group</span>
                                        Req: 2 Officers
                                    </div>
</div>
<div className="flex gap-2 mt-sm lg:mt-0">
<button className="flex-1 bg-surface border border-primary text-primary hover:bg-surface-container-low py-2 px-3 rounded font-label-md text-label-md transition-colors flex justify-center items-center gap-1">
<span className="material-symbols-outlined text-[18px]">check</span> Approve
                                    </button>
<button className="bg-surface border border-outline-variant hover:bg-surface-container-low text-on-surface py-2 px-3 rounded font-label-md text-label-md transition-colors">
                                        Reject
                                    </button>
<button className="text-on-surface-variant hover:text-primary transition-colors p-2">
<span className="material-symbols-outlined">edit</span>
</button>
</div>
</div>
</div>
</article>
</div>
</div>
{/* Sidebar: Historical & Feedback */}
<aside className="w-full xl:w-80 space-y-gutter">
{/* Historical Comparison */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-sm shadow-sm">
<h3 className="font-headline-sm text-headline-sm text-on-surface border-b border-outline-variant pb-2 mb-sm flex items-center gap-2">
<span className="material-symbols-outlined">history</span>
                        Historical Efficacy
                    </h3>
<div className="space-y-sm">
<div className="p-xs bg-surface border border-outline-variant rounded">
<div className="text-label-md text-on-surface-variant uppercase mb-1">Similar Deployments (30 Days)</div>
<div className="flex items-baseline gap-2">
<span className="font-headline-md text-headline-md text-primary">84%</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Incident Prevention Rate</span>
</div>
</div>
<div className="w-full h-32 bg-surface border border-outline-variant rounded flex items-end p-2 gap-1 justify-between">
{/* Simulated Bar Chart */}
<div className="w-1/6 bg-surface-variant rounded-t" style={{height: "40%"}}></div>
<div className="w-1/6 bg-surface-variant rounded-t" style={{height: "60%"}}></div>
<div className="w-1/6 bg-surface-variant rounded-t" style={{height: "30%"}}></div>
<div className="w-1/6 bg-surface-variant rounded-t" style={{height: "80%"}}></div>
<div className="w-1/6 bg-tertiary-fixed-dim rounded-t" style={{height: "90%"}}></div>
</div>
<div className="text-center font-label-md text-label-md text-on-surface-variant">Effectiveness Trend over Weeks</div>
</div>
</div>
{/* Officer Feedback Feed */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-sm shadow-sm">
<h3 className="font-headline-sm text-headline-sm text-on-surface border-b border-outline-variant pb-2 mb-sm flex items-center gap-2">
<span className="material-symbols-outlined">forum</span>
                        Field Feedback
                    </h3>
<div className="space-y-3 overflow-y-auto max-h-64 pr-2">
<div className="text-sm">
<div className="flex items-center gap-2 mb-1">
<span className="font-label-md text-label-md text-on-surface">Sgt. Ramesh K.</span>
<span className="text-xs text-on-surface-variant font-data-mono">10:42 AM</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant bg-surface p-2 rounded border border-outline-variant">"AI recommendation for Sector 4 was spot on. Intercepted two individuals matching the historical profile."</p>
</div>
<div className="text-sm">
<div className="flex items-center gap-2 mb-1">
<span className="font-label-md text-label-md text-on-surface">Insp. Patil</span>
<span className="text-xs text-on-surface-variant font-data-mono">Yesterday</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant bg-surface p-2 rounded border border-outline-variant">"Commercial St. prediction was slightly early, crowds peaked an hour later than anticipated. Adjusting feedback loop."</p>
</div>
</div>
<div className="mt-sm pt-sm border-t border-outline-variant">
<input className="w-full bg-surface border border-outline-variant rounded p-2 text-sm font-body-sm focus:ring-2 focus:ring-secondary-fixed focus:border-secondary-fixed outline-none" placeholder="Add field observation..." type="text"/>
</div>
</div>
</aside>
</div>
{/* Footer */}
<footer className="mt-auto w-full py-sm px-lg bg-surface-container-lowest border-t border-outline-variant flex flex-col md:flex-row justify-between items-center z-40 relative">
<span className="font-label-md text-label-md font-bold text-primary mb-2 md:mb-0">Karnataka Police Intelligence Platform. All Rights Reserved. Official Use Only.</span>
<div className="flex gap-4">
<a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Data Source Attributions</a>
<a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
<Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" to="/command-center">System Status</Link>
</div>
</footer>
</main>
</div>
    </>
  );
};

export default AiPatrolRecommendationCenter;
