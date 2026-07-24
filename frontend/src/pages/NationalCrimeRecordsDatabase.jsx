import React from 'react';
import { Link } from 'react-router-dom';
import { useApiResource } from '../hooks/useApiResource';

const NationalCrimeRecordsDatabase = () => {
  const { data } = useApiResource('/crimes?limit=25', { items: [], total: 1204, page: 1, limit: 25 });
  const visibleCount = data.items.length || 24;

  return (
    <>
      <div className="bg-surface text-on-surface font-body-md antialiased overflow-hidden selection:bg-tertiary-fixed-dim selection:text-on-tertiary-fixed-variant">
<div className="flex h-screen w-full">
{/* JSON Component: SideNavBar */}
<nav className="fixed left-0 top-0 h-screen w-72 bg-surface-container-low border-r border-outline-variant flex flex-col py-md z-30 transition-all duration-200 ease-in-out hidden md:flex">
{/* Header */}
<div className="px-md mb-xl flex items-center gap-sm">
<div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center border border-outline-variant overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="A macro photography shot of a highly detailed, embossed brass emblem of the Karnataka Police, featuring the state crest. Lighting is dramatic and directional, highlighting the metallic texture and institutional authority. High-contrast, utilitarian aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA9a-YbpqqkMKEMskytZwfUkUcY4u8UznnwGxxK1Vg9RinhSDYHv5K1uNpvgVVBes0_3svM9f-iqiSUAan9rcuRSDgwLX0TQ94awbG4a1s8zenCrPalQCiaGSQ63Y6dryEcd0RYgY4q_uXoNp0l6VWS-VHVSg0ZPd3xwDew-cm6nrrWBfVB0vumkSfz5TkeWW-6LK2T0VVS5hYoGgvlflJ9smVmh-i6fPKzAQCG0JZ1nNl2F2psBQT-bUxGaIdLBTi3HUwtRaup6sb"/>
</div>
<div>
<h2 className="font-headline-sm text-headline-sm font-bold text-primary">KSP Intel</h2>
<p className="font-label-md text-label-md text-on-surface-variant">Intelligence Division</p>
</div>
</div>
{/* Main Tabs */}
<div className="flex-1 flex flex-col gap-base px-sm">
<a className="flex items-center gap-sm px-sm py-xs text-on-surface-variant hover:bg-surface-container-highest mx-2 my-1 rounded-lg transition-colors" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="map">map</span>
<span className="font-label-md text-label-md">GIS Maps</span>
</a>
<a className="flex items-center gap-sm px-sm py-xs text-on-surface-variant hover:bg-surface-container-highest mx-2 my-1 rounded-lg transition-colors" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="psychology">psychology</span>
<span className="font-label-md text-label-md">AI Modules</span>
</a>
{/* Active Tab: Mapping 'Crime Records' intent to 'Intelligence' */}
<a className="flex items-center gap-sm px-sm py-xs bg-primary text-on-primary rounded-lg mx-2 my-1 shadow-sm" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="visibility" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>visibility</span>
<span className="font-label-md text-label-md">Intelligence</span>
</a>
<Link className="flex items-center gap-sm px-sm py-xs text-on-surface-variant hover:bg-surface-container-highest mx-2 my-1 rounded-lg transition-colors" to="/criminal-intelligence">
<span className="material-symbols-outlined text-[20px]" data-icon="description">description</span>
<span className="font-label-md text-label-md">Reports</span>
</Link>
<a className="flex items-center gap-sm px-sm py-xs text-on-surface-variant hover:bg-surface-container-highest mx-2 my-1 rounded-lg transition-colors" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="groups">groups</span>
<span className="font-label-md text-label-md">Personnel</span>
</a>
</div>
{/* CTA */}
<div className="px-md mt-auto mb-lg">
<button className="w-full flex items-center justify-center gap-xs px-sm py-xs bg-primary text-on-primary rounded hover:bg-on-primary-fixed-variant transition-colors font-label-md text-label-md">
<span className="material-symbols-outlined text-[18px]">add</span>
                New Investigation
            </button>
</div>
{/* Footer Tabs */}
<div className="flex flex-col gap-base px-sm pt-sm border-t border-outline-variant mx-md">
<a className="flex items-center gap-sm px-sm py-xs text-on-surface-variant hover:bg-surface-container-highest rounded-lg transition-colors" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="settings">settings</span>
<span className="font-label-md text-label-md">Settings</span>
</a>
<a className="flex items-center gap-sm px-sm py-xs text-on-surface-variant hover:bg-surface-container-highest rounded-lg transition-colors" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="logout">logout</span>
<span className="font-label-md text-label-md">Log Out</span>
</a>
</div>
</nav>
{/* Main Content Canvas */}
<div className="flex-1 flex flex-col min-w-0 md:pl-72 h-screen bg-surface relative">
{/* JSON Component: TopAppBar */}
<header className="flex justify-between items-center w-full px-md h-16 bg-surface border-b border-outline-variant sticky top-0 z-20">
{/* Search on Left */}
<div className="flex items-center w-96 relative">
<span className="material-symbols-outlined absolute left-sm text-on-surface-variant text-[20px]">search</span>
<input className="w-full pl-xl pr-sm py-xs bg-surface-container-lowest border border-outline-variant rounded focus:ring-2 focus:ring-tertiary-fixed-dim focus:border-transparent font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant transition-shadow" placeholder="Global Search..." type="text"/>
</div>
{/* Trailing Icons */}
<div className="flex items-center gap-xs">
<button className="p-xs text-on-surface-variant hover:bg-surface-container-high rounded transition-colors cursor-pointer active:opacity-80 relative">
<span className="material-symbols-outlined text-[20px]" data-icon="notifications">notifications</span>
<span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
</button>
<button className="p-xs text-on-surface-variant hover:bg-surface-container-high rounded transition-colors cursor-pointer active:opacity-80">
<span className="material-symbols-outlined text-[20px]" data-icon="settings">settings</span>
</button>
<button className="p-xs text-on-surface-variant hover:bg-surface-container-high rounded transition-colors cursor-pointer active:opacity-80">
<span className="material-symbols-outlined text-[20px]" data-icon="help">help</span>
</button>
<div className="w-8 h-8 rounded-full bg-surface-variant border border-outline-variant overflow-hidden ml-sm cursor-pointer hover:ring-2 hover:ring-primary transition-all">
<img className="w-full h-full object-cover" data-alt="A high-contrast, black and white portrait photo of a senior intelligence officer in uniform. Lighting is harsh and cinematic, evoking a serious, government institutional mood. The background is a stark, textured gray wall." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-BJTDOAsXIBV9OeoDwimWa4FzmGeM83gEs4cmZJV7-kwy9jaUWAzDZ7aHk186d96AEiFDf33RSYhynR5-hWG0u-2Mb4sDNdLKadj9zSZa7l3QEUbnUIuKT7METJwBmd0oN12XhSgfEilNw99Nu14dhsR5E4-aJt2m_gXKVAHVbsloHjBz6z1afKlX6O7-8PunsueS5Ell2j7UL1IrS-qmCFuZbTZYPSPyvrsfaSulYABkVW8vIIC7mqOAC7JezOWO4-hptXLMq2vf"/>
</div>
</div>
</header>
{/* Main Workspace (Dense Data Container) */}
<main className="flex-1 overflow-hidden flex flex-col p-md gap-md">
{/* Header & Bulk Actions */}
<div className="flex justify-between items-end shrink-0">
<div>
<h1 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">Crime Records</h1>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Manage and analyze intelligence reports and case files.</p>
</div>
<div className="flex gap-sm">
<button className="flex items-center gap-base px-sm py-xs border border-primary text-primary rounded font-label-md text-label-md hover:bg-primary-fixed transition-colors">
<span className="material-symbols-outlined text-[18px]">print</span> Print Report
                    </button>
<button className="flex items-center gap-base px-sm py-xs bg-primary text-on-primary rounded font-label-md text-label-md hover:opacity-90 shadow-sm transition-opacity">
<span className="material-symbols-outlined text-[18px]">download</span> Export CSV
                    </button>
</div>
</div>
{/* Complex Filters (Bento/Toolbar style) */}
<div className="bg-surface-container-lowest border border-outline-variant rounded p-sm flex flex-wrap gap-sm items-end shrink-0 shadow-sm">
{/* Data Range Picker */}
<div className="flex flex-col gap-base">
<label className="font-label-md text-label-md text-on-surface-variant">Date Range</label>
<div className="flex items-center gap-2 border border-outline-variant rounded px-2 py-1 bg-surface-container-lowest focus-within:ring-2 focus-within:ring-tertiary-fixed-dim">
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">calendar_today</span>
<input className="border-none bg-transparent p-0 text-body-sm font-data-mono text-on-surface focus:ring-0 w-[120px]" type="date"/>
<span className="text-on-surface-variant">-</span>
<input className="border-none bg-transparent p-0 text-body-sm font-data-mono text-on-surface focus:ring-0 w-[120px]" type="date"/>
</div>
</div>
{/* Crime Category Filter */}
<div className="flex flex-col gap-base min-w-[200px]">
<label className="font-label-md text-label-md text-on-surface-variant">Crime Category</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-on-surface-variant text-[16px]">category</span>
<select className="w-full pl-8 pr-sm py-1.5 border border-outline-variant rounded bg-surface-container-lowest focus:ring-2 focus:ring-tertiary-fixed-dim font-body-sm text-body-sm text-on-surface appearance-none">
<option>All Categories</option>
<option>Narcotics (NDPS)</option>
<option>Cyber Crime</option>
<option>Organized Crime</option>
<option>Financial Fraud</option>
</select>
<span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-on-surface-variant text-[16px] pointer-events-none">arrow_drop_down</span>
</div>
</div>
{/* Police Station Filter */}
<div className="flex flex-col gap-base min-w-[200px]">
<label className="font-label-md text-label-md text-on-surface-variant">Jurisdiction / Station</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-on-surface-variant text-[16px]">local_police</span>
<select className="w-full pl-8 pr-sm py-1.5 border border-outline-variant rounded bg-surface-container-lowest focus:ring-2 focus:ring-tertiary-fixed-dim font-body-sm text-body-sm text-on-surface appearance-none">
<option>Statewide Search</option>
<option>Bengaluru Central</option>
<option>Mysuru South</option>
<option>Hubballi-Dharwad</option>
</select>
<span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-on-surface-variant text-[16px] pointer-events-none">arrow_drop_down</span>
</div>
</div>
{/* Filter Actions */}
<div className="ml-auto flex items-center gap-2">
<button className="p-1.5 text-on-surface-variant hover:bg-surface-container-high rounded transition-colors border border-transparent hover:border-outline-variant" title="Clear Filters">
<span className="material-symbols-outlined text-[20px]">filter_alt_off</span>
</button>
<button className="flex items-center gap-1 px-sm py-1.5 bg-surface-container-high border border-outline-variant text-on-surface rounded font-label-md text-label-md hover:bg-surface-container-highest transition-colors">
<span className="material-symbols-outlined text-[16px]">filter_list</span> Apply Filters
                    </button>
</div>
</div>
{/* Dense Data Table Container (SAP Fiori / PowerBI aesthetic) */}
<div className="bg-surface-container-lowest border border-outline-variant rounded flex-1 flex flex-col overflow-hidden shadow-sm">
{/* Table Header/Toolbar inner */}
<div className="flex justify-between items-center px-sm py-xs border-b border-outline-variant bg-surface-container-lowest">
<span className="font-label-md text-label-md text-on-surface-variant">Showing {visibleCount} of {data.total.toLocaleString()} records</span>
<div className="flex gap-2">
<button className="p-1 text-on-surface-variant hover:bg-surface-container hover:text-primary rounded transition-colors"><span className="material-symbols-outlined text-[18px]">view_column</span></button>
<button className="p-1 text-on-surface-variant hover:bg-surface-container hover:text-primary rounded transition-colors"><span className="material-symbols-outlined text-[18px]">refresh</span></button>
</div>
</div>
<div className="flex-1 overflow-auto relative">
<table className="w-full text-left border-collapse min-w-[1000px]">
{/* Sticky Header - Sandalwood Beige logic via secondary-fixed */}
<thead className="sticky top-0 bg-secondary-fixed z-10 shadow-[0_1px_0_0_#D8D2C4]">
<tr>
<th className="py-2 px-sm font-data-mono text-data-mono text-on-secondary-fixed-variant uppercase tracking-wider w-12 text-center border-r border-outline-variant/30">
<input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox"/>
</th>
<th className="py-2 px-sm font-data-mono text-data-mono text-on-secondary-fixed-variant uppercase tracking-wider w-32 cursor-pointer hover:bg-secondary-fixed-dim transition-colors group">
<div className="flex items-center gap-1">Record ID <span className="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100">arrow_downward</span></div>
</th>
<th className="py-2 px-sm font-data-mono text-data-mono text-on-secondary-fixed-variant uppercase tracking-wider w-24">Date</th>
<th className="py-2 px-sm font-data-mono text-data-mono text-on-secondary-fixed-variant uppercase tracking-wider w-28">Priority</th>
<th className="py-2 px-sm font-data-mono text-data-mono text-on-secondary-fixed-variant uppercase tracking-wider w-40">Category</th>
<th className="py-2 px-sm font-data-mono text-data-mono text-on-secondary-fixed-variant uppercase tracking-wider">Subject / Location</th>
<th className="py-2 px-sm font-data-mono text-data-mono text-on-secondary-fixed-variant uppercase tracking-wider w-32">Status</th>
<th className="py-2 px-sm font-data-mono text-data-mono text-on-secondary-fixed-variant uppercase tracking-wider w-16 text-center">Preview</th>
</tr>
</thead>
<tbody className="font-body-sm text-body-sm text-on-surface divide-y divide-outline-variant bg-surface-container-lowest">
{/* Row 1: High Priority, Expanded */}
<tr className="hover:bg-surface-container-low transition-colors bg-surface-container-low/50 border-l-4 border-l-error cursor-pointer">
<td className="py-2 px-sm text-center border-r border-outline-variant/30">
<input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox"/>
</td>
<td className="py-2 px-sm font-data-mono text-primary font-medium">CR-24-9012</td>
<td className="py-2 px-sm font-data-mono text-on-surface-variant">2024-10-24</td>
<td className="py-2 px-sm">
<span className="inline-flex items-center px-1.5 py-0.5 rounded-sm bg-error-container text-on-error-container font-label-md text-label-md uppercase tracking-wider border border-error/20">High</span>
</td>
<td className="py-2 px-sm font-medium">Narcotics (NDPS)</td>
<td className="py-2 px-sm">
<div className="truncate w-[250px]" title="Operation Red Dawn - Intercepted shipment at Border Checkpost B.">Operation Red Dawn - Intercepted shipment at Border Checkpost B.</div>
</td>
<td className="py-2 px-sm">
<span className="flex items-center gap-1 text-tertiary-container"><span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim"></span> Active Invest.</span>
</td>
<td className="py-2 px-sm text-center">
<button className="p-1 rounded bg-surface-container-highest text-on-surface-variant" title="Collapse Preview">
<span className="material-symbols-outlined text-[20px] rotate-180 transition-transform">keyboard_arrow_down</span>
</button>
</td>
</tr>
{/* Row 1: Expanded Evidence Preview Panel */}
<tr className="bg-surface-container-lowest border-b-2 border-outline-variant">
<td className="p-0" colSpan="8">
<div className="p-md bg-surface-container-low border-l-4 border-l-error inset-shadow-sm flex gap-md">
{/* Mini Bento Grid for Preview */}
<div className="w-64 shrink-0 flex flex-col gap-2">
<h4 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Primary Evidence</h4>
<div className="grid grid-cols-2 gap-2">
<div className="aspect-square bg-surface border border-outline-variant rounded p-1 overflow-hidden relative group">
<img className="w-full h-full object-cover rounded-sm group-hover:scale-105 transition-transform" data-alt="A clinical, brightly lit evidence photo showing small transparent plastic bags containing a white crystalline substance, laid out on a sterile metal table next to an evidence marker 'A'. Government forensic style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoOmC6RId_JK0BJgxCvtfTTUSAZ4H7FDifq4GTGutmpLd6zehpw0RQG6JeABStFr_p_ToKLddip3vA4rcxaLBXLNsf8SanVUBRUgKudHDw9603GVAaF4M95f5ATeWJ8u7CpkXCnk_K0FTH13lrxcRZRwnTbzdjmiRM7sL3ePOOYqww6CZZaA4eJNB8HbntCJuaHiEAKQFsxMgKeL_3grnSFiUX374eZMWvkWCJC-r5MeImCzsdlHv237QQSGCdtmWvknVl7fQO8dWs"/>
</div>
<div className="aspect-square bg-surface border border-outline-variant rounded p-1 overflow-hidden relative group">
<img className="w-full h-full object-cover rounded-sm group-hover:scale-105 transition-transform" data-alt="A gritty surveillance camera still showing a dark-colored SUV at a toll booth at night. The license plate is partially obscured by glare. High-contrast, utilitarian security footage aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9xRx_M_QD-qbdwR9VP5_6DteWuW2ACex5Lt6hpKIOOqzAa7chrktWD7LysqZaeRyLULfCj4dfCzzZiLDcDXj6cKp3JA4tbVi5J2KAigqrCTiqjnB7cJoTtZXubjkPlbiXfQluXNBaJ0nZUorsPOokT6Gy-W3aG0OHOF2hT-M9x-cPQQbeT4_Mov3HuZOcsFcK5VTE4rJ5juCBb5gbAhBuSZDWnG46sTN8Er3kUTU7JhivJ57EbxYXgr2iuvzWUCku11OR55RY88oh"/>
</div>
</div>
<button className="text-primary font-label-md text-label-md text-left hover:underline flex items-center gap-1 mt-1"><span className="material-symbols-outlined text-[14px]">open_in_new</span> View Case File</button>
</div>
<div className="flex-1 flex flex-col gap-sm pl-md border-l border-outline-variant/50">
<div>
<h4 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-1">Intelligence Summary</h4>
<p className="font-body-sm text-body-sm text-on-surface leading-relaxed">
                                                    Surveillance team intercepted vehicle KA-01-MJ-4091 based on tip-off. Preliminary field test confirms suspected contraband (Schedule I). Suspect #1 (Driver) currently detained at Hubballi Central. Awaiting forensic lab report to confirm quantity and exact chemical composition. Link to organized syndicate 'Shadow' suspected based on packaging markers.
                                                </p>
</div>
<div className="flex gap-4 mt-auto">
<div className="bg-surface border border-outline-variant rounded px-2 py-1 flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">person</span>
<span className="font-data-mono text-data-mono text-on-surface">Suspects: 2</span>
</div>
<div className="bg-surface border border-outline-variant rounded px-2 py-1 flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">gavel</span>
<span className="font-data-mono text-data-mono text-on-surface">Arrests: 1</span>
</div>
<div className="bg-surface border border-outline-variant rounded px-2 py-1 flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">attach_file</span>
<span className="font-data-mono text-data-mono text-on-surface">Docs: 4</span>
</div>
</div>
</div>
</div>
</td>
</tr>
{/* Row 2: Medium Priority */}
<tr className="hover:bg-surface-container-low transition-colors cursor-pointer group">
<td className="py-2 px-sm text-center border-r border-outline-variant/30">
<input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox"/>
</td>
<td className="py-2 px-sm font-data-mono text-primary font-medium group-hover:underline">CR-24-9011</td>
<td className="py-2 px-sm font-data-mono text-on-surface-variant">2024-10-23</td>
<td className="py-2 px-sm">
<span className="inline-flex items-center px-1.5 py-0.5 rounded-sm bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-md text-label-md uppercase tracking-wider border border-tertiary-fixed-dim/20">Med</span>
</td>
<td className="py-2 px-sm font-medium">Cyber Crime</td>
<td className="py-2 px-sm">
<div className="truncate w-[250px]" title="Phishing syndicate targeting state pension portal.">Phishing syndicate targeting state pension portal.</div>
</td>
<td className="py-2 px-sm">
<span className="flex items-center gap-1 text-on-surface-variant"><span className="w-1.5 h-1.5 rounded-full bg-surface-dim"></span> Under Review</span>
</td>
<td className="py-2 px-sm text-center">
<button className="p-1 rounded hover:bg-surface-container-high text-on-surface-variant" title="Expand Preview">
<span className="material-symbols-outlined text-[20px] transition-transform">keyboard_arrow_down</span>
</button>
</td>
</tr>
{/* Row 3: Low Priority */}
<tr className="hover:bg-surface-container-low transition-colors cursor-pointer group bg-surface">
<td className="py-2 px-sm text-center border-r border-outline-variant/30">
<input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox"/>
</td>
<td className="py-2 px-sm font-data-mono text-primary font-medium group-hover:underline">CR-24-9008</td>
<td className="py-2 px-sm font-data-mono text-on-surface-variant">2024-10-21</td>
<td className="py-2 px-sm">
<span className="inline-flex items-center px-1.5 py-0.5 rounded-sm bg-surface-container-high text-on-surface-variant font-label-md text-label-md uppercase tracking-wider border border-outline-variant/50">Low</span>
</td>
<td className="py-2 px-sm font-medium">Financial Fraud</td>
<td className="py-2 px-sm">
<div className="truncate w-[250px]" title="ATM skimming device found at MG Road branch.">ATM skimming device found at MG Road branch.</div>
</td>
<td className="py-2 px-sm">
<span className="flex items-center gap-1 text-secondary"><span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed"></span> Closed/Archived</span>
</td>
<td className="py-2 px-sm text-center">
<button className="p-1 rounded hover:bg-surface-container-high text-on-surface-variant" title="Expand Preview">
<span className="material-symbols-outlined text-[20px] transition-transform">keyboard_arrow_down</span>
</button>
</td>
</tr>
{/* Row 4: High Priority */}
<tr className="hover:bg-surface-container-low transition-colors border-l-4 border-l-error cursor-pointer group">
<td className="py-2 px-sm text-center border-r border-outline-variant/30">
<input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox"/>
</td>
<td className="py-2 px-sm font-data-mono text-primary font-medium group-hover:underline">CR-24-8995</td>
<td className="py-2 px-sm font-data-mono text-on-surface-variant">2024-10-18</td>
<td className="py-2 px-sm">
<span className="inline-flex items-center px-1.5 py-0.5 rounded-sm bg-error-container text-on-error-container font-label-md text-label-md uppercase tracking-wider border border-error/20">High</span>
</td>
<td className="py-2 px-sm font-medium">Organized Crime</td>
<td className="py-2 px-sm">
<div className="truncate w-[250px]" title="Extortion racket operating in industrial sector phase 2.">Extortion racket operating in industrial sector phase 2.</div>
</td>
<td className="py-2 px-sm">
<span className="flex items-center gap-1 text-tertiary-container"><span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim"></span> Active Invest.</span>
</td>
<td className="py-2 px-sm text-center">
<button className="p-1 rounded hover:bg-surface-container-high text-on-surface-variant" title="Expand Preview">
<span className="material-symbols-outlined text-[20px] transition-transform">keyboard_arrow_down</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
{/* Table Pagination/Footer */}
<div className="border-t border-outline-variant bg-surface-container-lowest px-sm py-2 flex justify-between items-center">
<div className="font-label-md text-label-md text-on-surface-variant">
                        Rows per page: 
                        <select className="ml-1 border-none bg-transparent py-0 pl-1 pr-6 text-on-surface focus:ring-0 cursor-pointer font-data-mono">
<option>25</option>
<option>50</option>
<option>100</option>
</select>
</div>
<div className="flex items-center gap-4 font-label-md text-label-md text-on-surface-variant">
<span>1-{visibleCount} of {data.total.toLocaleString()}</span>
<div className="flex gap-1">
<button className="p-1 rounded hover:bg-surface-container-high disabled:opacity-50" disabled=""><span className="material-symbols-outlined text-[18px]">chevron_left</span></button>
<button className="p-1 rounded hover:bg-surface-container-high"><span className="material-symbols-outlined text-[18px]">chevron_right</span></button>
</div>
</div>
</div>
</div>
</main>
{/* JSON Component: Footer */}
<footer className="flex justify-between items-center w-full py-xs px-md border-t border-outline-variant bg-surface-container-lowest shrink-0">
<div className="font-label-md text-label-md text-secondary dark:text-secondary-fixed-dim">
                © 2024 Karnataka State Police - Intelligence Division. FOR OFFICIAL USE ONLY.
            </div>
<div className="flex gap-md font-label-md text-label-md">
<a className="text-on-surface-variant hover:text-primary underline transition-opacity duration-150" href="#">Privacy Policy</a>
<a className="text-on-surface-variant hover:text-primary underline transition-opacity duration-150" href="#">Security Protocol</a>
<a className="text-on-surface-variant hover:text-primary underline transition-opacity duration-150" href="#">Support</a>
</div>
</footer>
</div>
</div>

</div>
    </>
  );
};

export default NationalCrimeRecordsDatabase;
