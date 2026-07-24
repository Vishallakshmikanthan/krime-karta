import React from 'react';
import { Link } from 'react-router-dom';
import { useApiResource } from '../hooks/useApiResource';

const AdvancedNetworkIntelligenceAnalysis = () => {
  const { data } = useApiResource('/network/graph', networkFallback);
  const selected = data.selected || networkFallback.selected;

  return (
    <>
      <div className="bg-surface text-on-surface font-body-md min-h-screen flex flex-col antialiased">
{/* TopAppBar */}
<header className="bg-surface dark:bg-surface-dim docked full-width top-0 border-b border-outline-variant dark:border-outline flat no shadows flex justify-between items-center w-full px-md h-16 shrink-0 z-50">
<div className="flex items-center gap-4">
{/* Mobile Menu Toggle */}
<button className="md:hidden text-on-surface-variant hover:bg-surface-container-high transition-colors p-2 rounded-full cursor-pointer active:opacity-80">
<span className="material-symbols-outlined" data-icon="menu">menu</span>
</button>
<h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim">KSP Intel Platform</h1>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]" data-icon="search">search</span>
<input className="pl-10 pr-4 py-1.5 bg-surface-container-lowest border border-outline-variant rounded-full text-body-sm focus:outline-none focus:ring-2 focus:ring-[#C89B3C] focus:border-transparent w-64" placeholder="Search Intel Database..." type="text"/>
</div>
<div className="flex items-center gap-2">
<button aria-label="notifications" className="text-on-surface-variant hover:bg-surface-container-high transition-colors p-2 rounded-full cursor-pointer active:opacity-80 relative">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
<span className="absolute top-1 right-2 w-2 h-2 bg-error rounded-full"></span>
</button>
<button aria-label="settings" className="text-on-surface-variant hover:bg-surface-container-high transition-colors p-2 rounded-full cursor-pointer active:opacity-80">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
<button aria-label="help" className="text-on-surface-variant hover:bg-surface-container-high transition-colors p-2 rounded-full cursor-pointer active:opacity-80">
<span className="material-symbols-outlined" data-icon="help">help</span>
</button>
<div className="ml-2 w-8 h-8 rounded-full bg-surface-container overflow-hidden border border-outline-variant cursor-pointer">
<img alt="Officer Profile" className="w-full h-full object-cover" data-alt="Professional headshot of a police officer in uniform against a neutral grey background, high resolution, standard ID photo style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADm2fIhLIqvpTmDXRWzaQI7OB_EHqKvmj-dzr04IrwArUg6Az-yToE8HOQmPiitbC46TbeiDjRIYxlSk8C_wL9yfciBS4zxvhUSZiJVWZsQ-t1vlskEj1AuLaWzkVHDuITkjqz9dihXD5mlGFOrsTkmRVBSXDEQEyT8GwjVnBgUGTXmx8pDnJPRP65qxnqEpcCHzuAU6zVwfVCA10-9TkhsUSCErSIvPR4p5LlzZ5ujs-wkWJbwfoALDeKtcqrU7D7n5DseHhiduJ2"/>
</div>
</div>
</div>
</header>
<div className="flex flex-1 overflow-hidden h-[calc(100vh-64px)]">
{/* SideNavBar (Hidden on Mobile) */}
<nav className="hidden md:flex flex-col h-full py-md bg-surface-container-low dark:bg-surface-container fixed left-0 top-16 h-[calc(100vh-64px)] w-[280px] border-r border-outline-variant dark:border-outline flat no shadows z-40 shrink-0">
<div className="px-md mb-6 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center border border-outline-variant">
<img alt="Karnataka Police Emblem" className="w-8 h-8 object-contain" data-alt="Karnataka State Police Emblem, detailed golden crest on a clean background, official government logo style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEhWn5MOGC0Wkl6QdqBC9j2fI_GlO6vabEdlEtRWgeAJMG9TbaBuximUxbQoRU-DxIbtfVakZ_Abyf6xXvJQ8EtpsX28baDSHFqdTTwZGFziSoaCriq_dB-0ZIor5N4l7f_OqtYd-OGsKJOMzyPDE12Dk38ITXPWsaOZ4ruX3-x0CZSz8IvBBeTJg_9TPm-K2avo9aeqvSq5TD9UZUXWaW5qLDYVCEAxYEebw1Mvq05j21nK_8JO5WgMHRLyxBBmh-o-6GEJNUCawL"/>
</div>
<div>
<h2 className="font-headline-sm text-headline-sm font-bold text-primary">KSP Intel</h2>
<p className="font-label-md text-label-md text-on-surface-variant">Intelligence Division</p>
</div>
</div>
<div className="px-md mb-6">
<button className="w-full bg-primary text-on-primary font-body-sm font-semibold py-2 px-4 rounded flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined text-[18px]" data-icon="add">add</span>
                    New Investigation
                </button>
</div>
<div className="flex-1 overflow-y-auto">
<ul className="space-y-1">
<li>
<a className="text-on-surface-variant hover:bg-surface-container-highest hover:bg-secondary-container dark:hover:bg-secondary-fixed-dim mx-2 my-1 rounded-lg px-4 py-2 flex items-center gap-3 transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined" data-icon="map">map</span>
<span className="font-label-md text-label-md">GIS Maps</span>
</a>
</li>
<li>
<a className="bg-primary text-on-primary rounded-lg mx-2 my-1 px-4 py-2 flex items-center gap-3 transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined" data-icon="psychology" data-weight="fill">psychology</span>
<span className="font-label-md text-label-md">AI Modules</span>
</a>
</li>
<li>
<a className="text-on-surface-variant hover:bg-surface-container-highest hover:bg-secondary-container dark:hover:bg-secondary-fixed-dim mx-2 my-1 rounded-lg px-4 py-2 flex items-center gap-3 transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined" data-icon="visibility">visibility</span>
<span className="font-label-md text-label-md">Intelligence</span>
</a>
</li>
<li>
<Link className="text-on-surface-variant hover:bg-surface-container-highest hover:bg-secondary-container dark:hover:bg-secondary-fixed-dim mx-2 my-1 rounded-lg px-4 py-2 flex items-center gap-3 transition-all duration-200 ease-in-out" to="/criminal-intelligence">
<span className="material-symbols-outlined" data-icon="description">description</span>
<span className="font-label-md text-label-md">Reports</span>
</Link>
</li>
<li>
<a className="text-on-surface-variant hover:bg-surface-container-highest hover:bg-secondary-container dark:hover:bg-secondary-fixed-dim mx-2 my-1 rounded-lg px-4 py-2 flex items-center gap-3 transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined" data-icon="groups">groups</span>
<span className="font-label-md text-label-md">Personnel</span>
</a>
</li>
</ul>
</div>
<div className="mt-auto pt-4 border-t border-outline-variant mx-4">
<ul className="space-y-1">
<li>
<a className="text-on-surface-variant hover:bg-surface-container-highest hover:bg-secondary-container dark:hover:bg-secondary-fixed-dim mx-2 my-1 rounded-lg px-4 py-2 flex items-center gap-3 transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="font-label-md text-label-md">Settings</span>
</a>
</li>
<li>
<a className="text-on-surface-variant hover:bg-surface-container-highest hover:bg-secondary-container dark:hover:bg-secondary-fixed-dim mx-2 my-1 rounded-lg px-4 py-2 flex items-center gap-3 transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
<span className="font-label-md text-label-md">Log Out</span>
</a>
</li>
</ul>
</div>
</nav>
{/* Main Content Area */}
<main className="flex-1 md:ml-[280px] bg-surface-container-lowest overflow-hidden flex flex-col relative">
{/* Context Header */}
<div className="px-md py-4 border-b border-outline-variant flex justify-between items-center bg-surface shrink-0 z-20">
<div>
<div className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md mb-1">
<span>AI Modules</span>
<span className="material-symbols-outlined text-[14px]" data-icon="chevron_right">chevron_right</span>
<span>Network Analysis</span>
</div>
<h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">{data.operation}</h2>
</div>
<div className="flex gap-2">
<button className="px-3 py-1.5 border border-outline-variant rounded font-label-md text-label-md hover:bg-surface-container-low flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]" data-icon="download">download</span> Export
                    </button>
<button className="px-3 py-1.5 border border-outline-variant rounded font-label-md text-label-md hover:bg-surface-container-low flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]" data-icon="share">share</span> Share
                    </button>
</div>
</div>
{/* Workspace Layout */}
<div className="flex flex-1 overflow-hidden relative">
{/* Left Panel: Filters */}
<aside className="w-64 bg-surface border-r border-outline-variant flex flex-col shrink-0 overflow-y-auto z-20 absolute md:relative h-full transform -translate-x-full md:translate-x-0 transition-transform bg-white/90 backdrop-blur">
<div className="p-4 border-b border-outline-variant">
<h3 className="font-body-md font-semibold mb-3 flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]" data-icon="filter_list">filter_list</span>
                            Relationship Filters
                        </h3>
<div className="space-y-4">
<div>
<label className="font-label-md text-label-md text-on-surface-variant block mb-2">Connection Type</label>
<div className="space-y-2">
<label className="flex items-center gap-2 cursor-pointer">
<input checked="" className="form-checkbox text-primary rounded border-outline-variant focus:ring-primary" type="checkbox"/>
<span className="font-body-sm text-on-surface">Family</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input checked="" className="form-checkbox text-primary rounded border-outline-variant focus:ring-primary" type="checkbox"/>
<span className="font-body-sm text-on-surface">Accomplice</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input checked="" className="form-checkbox text-[#C89B3C] rounded border-outline-variant focus:ring-[#C89B3C]" type="checkbox"/>
<span className="font-body-sm text-on-surface">Financial</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="form-checkbox text-secondary rounded border-outline-variant focus:ring-secondary" type="checkbox"/>
<span className="font-body-sm text-on-surface">Communication</span>
</label>
</div>
</div>
<hr className="border-outline-variant"/>
<div>
<label className="font-label-md text-label-md text-on-surface-variant block mb-2">Risk Level</label>
<div className="flex gap-2">
<button className="px-2 py-1 bg-error-container text-on-error-container rounded text-xs font-semibold flex-1 border border-transparent">High</button>
<button className="px-2 py-1 bg-surface-container text-on-surface rounded text-xs font-semibold flex-1 border border-outline-variant opacity-50">Med</button>
<button className="px-2 py-1 bg-surface-container text-on-surface rounded text-xs font-semibold flex-1 border border-outline-variant opacity-50">Low</button>
</div>
</div>
</div>
</div>
</aside>
{/* Center Canvas: Node Graph Visualization */}
<div className="flex-1 bg-surface-bright relative overflow-hidden flex flex-col justify-between" id="graph-container">
{/* Graph Tools */}
<div className="absolute top-4 left-4 z-10 flex gap-2">
<button className="w-8 h-8 bg-surface-container-lowest border border-outline-variant rounded flex items-center justify-center hover:bg-surface-container-low shadow-sm">
<span className="material-symbols-outlined text-[18px]" data-icon="zoom_in">zoom_in</span>
</button>
<button className="w-8 h-8 bg-surface-container-lowest border border-outline-variant rounded flex items-center justify-center hover:bg-surface-container-low shadow-sm">
<span className="material-symbols-outlined text-[18px]" data-icon="zoom_out">zoom_out</span>
</button>
<button className="w-8 h-8 bg-surface-container-lowest border border-outline-variant rounded flex items-center justify-center hover:bg-surface-container-low shadow-sm">
<span className="material-symbols-outlined text-[18px]" data-icon="center_focus_strong">center_focus_strong</span>
</button>
</div>
{/* Graph Canvas (Simulated with CSS/HTML for demonstration) */}
<div className="relative w-full h-full min-h-[400px]">
{/* Edges */}
<div className="edge" style={{width: "150px", left: "35%", top: "25%", transform: "rotate(45deg)"}}></div>
<div className="edge" style={{width: "120px", left: "50%", top: "40%", transform: "rotate(-25deg)"}}></div>
<div className="edge" style={{width: "180px", left: "45%", top: "60%", transform: "rotate(-70deg)"}}></div>
<div className="edge" style={{width: "220px", left: "25%", top: "50%", transform: "rotate(-15deg)", backgroundColor: "#e0b14f", borderBottom: "2px dashed #C89B3C"}}></div>
{/* Nodes */}
<div className="node node-sub1 shadow-sm" title="Rajesh Kumar - Accomplice">
<span className="material-symbols-outlined text-[18px]" data-icon="person">person</span>
</div>
<div className="node node-sub2 shadow-sm" title="Venkatesh S. - Accomplice">
<span className="material-symbols-outlined text-[18px]" data-icon="person">person</span>
</div>
<div className="node node-sub3 shadow-sm" title="Suresh B. - Family">
<span className="material-symbols-outlined text-[18px]" data-icon="group">group</span>
</div>
<div className="node node-sub4 shadow-sm" title="Hawala Node - Financial">
<span className="material-symbols-outlined text-[18px]" data-icon="payments">payments</span>
</div>
<div className="node node-main shadow-md ring-4 ring-error-container" title="Target: M. Reddy">
<span className="material-symbols-outlined text-[24px]" data-icon="target">target</span>
</div>
</div>
{/* Bottom: Timeline Slider */}
<div className="h-24 bg-surface/90 backdrop-blur border-t border-outline-variant px-md py-3 flex flex-col justify-center shrink-0 z-20">
<div className="flex justify-between items-center mb-1">
<span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]" data-icon="history">history</span>
                                Network Evolution
                            </span>
<span className="font-data-mono text-data-mono text-primary font-bold">Oct 2023 - Present</span>
</div>
<div className="timeline-track">
<div className="timeline-marker" style={{left: "10%"}}></div>
<div className="timeline-marker" style={{left: "30%"}}></div>
<div className="timeline-marker" style={{left: "60%"}}></div>
<div className="timeline-marker" style={{left: "85%"}}></div>
<div className="timeline-progress"></div>
<div className="timeline-thumb"></div>
</div>
<div className="flex justify-between mt-2 font-label-md text-[10px] text-on-surface-variant">
<span>Jan '23</span>
<span>Jun '23</span>
<span>Jan '24</span>
<span>Today</span>
</div>
</div>
</div>
{/* Right Panel: Node Details */}
<aside className="w-80 bg-surface border-l border-outline-variant flex flex-col shrink-0 overflow-y-auto z-20">
<div className="p-4 border-b border-outline-variant bg-surface-container-lowest sticky top-0">
<div className="flex justify-between items-start mb-4">
<h3 className="font-body-md font-semibold">Entity Details</h3>
<button className="text-on-surface-variant hover:text-on-surface">
<span className="material-symbols-outlined text-[18px]" data-icon="close">close</span>
</button>
</div>
<div className="flex items-center gap-4 mb-4">
<div className="w-16 h-16 rounded border border-error bg-error-container overflow-hidden shrink-0">
<img alt="Suspect Photo" className="w-full h-full object-cover" data-alt="Mugshot style photograph of a middle-aged suspect, serious expression, high contrast lighting, neutral background, official police record style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCVT7gnmWtgAsyMx6EyNxyi-dYMp133pdsyIICBxVdfsDkm7Hc26ZwDrLu2oBDanYN_TVD4kwzwr-wb2vEDlxdH6-bQClG_JnvfC5D9mtXhNPXAQZq1WeRhgG9N2jSdyiGYsEag1AsInKJHti4Eq1rYkn2L9XZZVabAW3ogwSWrjP3eKwYbmQRH9rnxKPZINk8SXuSKIvBOpatTM3EFKhBY1gmMSdiMQJh_dLAdyYljUDzgtTE9-rMrBSIASJUPHYJQ-TmTknc40Wa"/>
</div>
<div>
<h4 className="font-headline-sm text-[16px] font-bold text-on-surface leading-tight mb-1">{selected.name}</h4>
<span className="inline-block px-2 py-0.5 bg-error-container text-on-error-container rounded text-[10px] font-bold tracking-wider uppercase">{selected.risk} Risk</span>
</div>
</div>
</div>
<div className="p-4 space-y-6">
{/* Identity Data */}
<div>
<h5 className="font-label-md text-label-md text-on-surface-variant mb-2 uppercase tracking-wider">Identity Overview</h5>
<div className="space-y-3 font-body-sm">
<div className="grid grid-cols-3 gap-2">
<div className="text-on-surface-variant">ID Ref:</div>
<div className="col-span-2 font-data-mono">{selected.id}</div>
</div>
<div className="grid grid-cols-3 gap-2">
<div className="text-on-surface-variant">Aliases:</div>
<div className="col-span-2">{selected.aliases?.map((alias) => `"${alias}"`).join(', ')}</div>
</div>
<div className="grid grid-cols-3 gap-2">
<div className="text-on-surface-variant">Status:</div>
<div className="col-span-2 text-error font-semibold">{selected.status}</div>
</div>
</div>
</div>
{/* Associated Cases (Bento-ish Grid) */}
<div>
<h5 className="font-label-md text-label-md text-on-surface-variant mb-2 uppercase tracking-wider">Associated Cases</h5>
<div className="grid grid-cols-1 gap-2">
<div className="p-3 bg-surface-container-lowest border border-outline-variant rounded">
<div className="flex justify-between items-center mb-1">
<span className="font-data-mono text-[12px] text-primary">{selected.cases?.[0] || 'FIR 142/2023'}</span>
<span className="material-symbols-outlined text-[14px] text-on-surface-variant" data-icon="open_in_new">open_in_new</span>
</div>
<div className="font-body-sm text-[13px]">Smuggling - Sandalwood</div>
</div>
<div className="p-3 bg-surface-container-lowest border border-outline-variant rounded">
<div className="flex justify-between items-center mb-1">
<span className="font-data-mono text-[12px] text-primary">{selected.cases?.[1] || 'FIR 089/2024'}</span>
<span className="material-symbols-outlined text-[14px] text-on-surface-variant" data-icon="open_in_new">open_in_new</span>
</div>
<div className="font-body-sm text-[13px]">Hawala Transactions</div>
</div>
</div>
</div>
</div>
<div className="mt-auto p-4 border-t border-outline-variant">
<button className="w-full bg-surface-container text-on-surface border border-outline-variant font-body-sm font-semibold py-2 px-4 rounded hover:bg-surface-container-high transition-colors">
                            View Full Dossier
                        </button>
</div>
</aside>
</div>
</main>
</div>
</div>
    </>
  );
};

export default AdvancedNetworkIntelligenceAnalysis;

const networkFallback = {
  operation: 'Operation Red Sandalwood',
  selected: {
    id: 'KSP-2024-89A',
    name: 'M. Reddy',
    aliases: ['Anna', 'RM'],
    risk: 'High',
    status: 'Active Warrant',
    cases: ['FIR 142/2023', 'FIR 089/2024']
  }
};
