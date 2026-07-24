import React from 'react';
import { Link } from 'react-router-dom';

const CriminalIntelligenceDirectory = () => {
  return (
    <>
      <div className="bg-surface text-on-surface font-body-md h-screen w-full flex overflow-hidden antialiased">
{/* SideNavBar */}
<nav className="bg-surface-container-low fixed left-0 top-0 h-screen w-72 border-r border-outline-variant flex flex-col py-md z-40 hidden md:flex shrink-0">
{/* Header */}
<div className="px-md mb-xl flex items-center gap-sm">
<img className="w-10 h-10 object-contain rounded-full border border-outline-variant" data-alt="A highly detailed vector illustration of a traditional Indian state police emblem featuring the national lions, rendered in a strict duotone gold and dark red color palette suitable for a high-security government digital interface. Sharp lines, no gradient." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwnFCuK3GV4j1CQ8ovxOo3Dd3D9WXnaeCkZxp4EUWDIgVtSLN_8sWaohBXhtjdglzbs6j1wnWBy24cIuOB9M_r98nyNPl1OXljyG_4cW-nlkKnEubl0AizljrHTUVkTBfoS4NpuEzCrzj8o8ktDDBnEUz9nJI8ymiheVNfXPdcyEXRW8XROle9ePU3T_le-IIK1pvR9YSXVm2v5e8jEkQA7-Q_bUo-bVlyGrW9r25zTBFCdV9NBVtWMqMs80p-pjBYtTRnRXhVxHIS"/>
<div>
<h1 className="font-headline-sm text-headline-sm font-bold text-primary">KSP Intel</h1>
<p className="font-label-md text-label-md text-on-surface-variant">Intelligence Division</p>
</div>
</div>
{/* CTA */}
<div className="px-md mb-md">
<button className="w-full bg-primary text-on-primary font-label-md text-label-md py-xs rounded flex justify-center items-center gap-xs hover:bg-primary-container transition-colors">
<span className="material-symbols-outlined text-[18px]">add</span>
                New Investigation
            </button>
</div>
{/* Main Tabs */}
<div className="flex-1 overflow-y-auto px-xs space-y-1">
<a className="flex items-center gap-sm px-sm py-xs text-on-surface-variant hover:bg-surface-container-highest mx-2 my-1 rounded-lg transition-all duration-200 ease-in-out font-label-md text-label-md" href="#">
<span className="material-symbols-outlined text-[20px]">map</span>
                GIS Maps
            </a>
<a className="flex items-center gap-sm px-sm py-xs text-on-surface-variant hover:bg-surface-container-highest mx-2 my-1 rounded-lg transition-all duration-200 ease-in-out font-label-md text-label-md" href="#">
<span className="material-symbols-outlined text-[20px]">psychology</span>
                AI Modules
            </a>
<a className="flex items-center gap-sm px-sm py-xs bg-primary text-on-primary rounded-lg mx-2 my-1 transition-all duration-200 ease-in-out font-label-md text-label-md" href="#">
<span className="material-symbols-outlined text-[20px] icon-fill">visibility</span>
                Intelligence
            </a>
<a className="flex items-center gap-sm px-sm py-xs text-on-surface-variant hover:bg-surface-container-highest mx-2 my-1 rounded-lg transition-all duration-200 ease-in-out font-label-md text-label-md" href="#">
<span className="material-symbols-outlined text-[20px]">description</span>
                Reports
            </a>
<a className="flex items-center gap-sm px-sm py-xs text-on-surface-variant hover:bg-surface-container-highest mx-2 my-1 rounded-lg transition-all duration-200 ease-in-out font-label-md text-label-md" href="#">
<span className="material-symbols-outlined text-[20px]">groups</span>
                Personnel
            </a>
</div>
{/* Footer Tabs */}
<div className="mt-auto px-xs border-t border-outline-variant pt-sm space-y-1">
<a className="flex items-center gap-sm px-sm py-xs text-on-surface-variant hover:bg-surface-container-highest mx-2 my-1 rounded-lg transition-all duration-200 ease-in-out font-label-md text-label-md" href="#">
<span className="material-symbols-outlined text-[20px]">settings</span>
                Settings
            </a>
<a className="flex items-center gap-sm px-sm py-xs text-on-surface-variant hover:bg-surface-container-highest mx-2 my-1 rounded-lg transition-all duration-200 ease-in-out font-label-md text-label-md" href="#">
<span className="material-symbols-outlined text-[20px]">logout</span>
                Log Out
            </a>
</div>
</nav>
{/* Main Content Wrapper */}
<div className="flex-1 flex flex-col md:ml-72 min-h-screen relative">
{/* TopAppBar */}
<header className="bg-surface flex justify-between items-center w-full px-md h-16 border-b border-outline-variant sticky top-0 z-30 shrink-0">
{/* Search Bar On Left */}
<div className="flex-1 max-w-md">
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-sm text-on-surface-variant text-[20px]">search</span>
<input className="w-full pl-xl pr-sm py-xs bg-surface-container-lowest border border-outline-variant rounded focus:outline-none focus:border-tertiary-fixed focus:ring-1 focus:ring-tertiary-fixed font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant transition-colors" placeholder="Global Search (Entities, Cases, Officers)..." type="text"/>
</div>
</div>
{/* Title/Brand (Center Mobile, Hidden Desktop to avoid clutter with sidebar) */}
<div className="hidden md:flex flex-1 justify-center">
<span className="font-headline-md text-headline-md font-bold text-primary">KSP Intel Platform</span>
</div>
{/* Trailing Icons */}
<div className="flex-1 flex justify-end items-center gap-sm">
<button className="p-xs text-on-surface-variant hover:bg-surface-container-high transition-colors rounded cursor-pointer active:opacity-80 flex items-center justify-center">
<span className="material-symbols-outlined text-[24px]">notifications</span>
</button>
<button className="p-xs text-on-surface-variant hover:bg-surface-container-high transition-colors rounded cursor-pointer active:opacity-80 flex items-center justify-center">
<span className="material-symbols-outlined text-[24px]">settings</span>
</button>
<button className="p-xs text-on-surface-variant hover:bg-surface-container-high transition-colors rounded cursor-pointer active:opacity-80 flex items-center justify-center">
<span className="material-symbols-outlined text-[24px]">help</span>
</button>
<div className="w-8 h-8 rounded-full border border-outline-variant overflow-hidden ml-xs cursor-pointer">
<img alt="Officer Profile" className="w-full h-full object-cover" data-alt="A professional headshot of an Indian law enforcement officer in standard khaki uniform. Serious expression, neutral grey background, high resolution, soft studio lighting conveying authority and trust." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9yoRJcvJuQlU_j4NJ97Z1InJiXjafIWUqgYKLDDv14nTXy2t4_wWP8xD-2AVqNf-78eEip5MDt9Z58n9OBfT6fwDG4zQkoEuznRwcTrDBeKgSwmQ-bwP4Fg93FhpPRKU9K1hXiSqIJzEd8xADzkZqdvzYtN1TWXbIGcOBJuAaPVYHJxaiWs5ukxPZ_ULM35snY8uSguMCotl81DfwScyuoYDiBRcmRKJNkCkVhcyS28N3Vl8MVJcuq036tsYESPaL3i1ggR_57GrR"/>
</div>
</div>
</header>
{/* Page Content Canvas */}
<main className="flex-1 overflow-y-auto p-md md:p-gutter flex flex-col gap-gutter bg-surface">
{/* Page Header */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-md border-b border-outline-variant pb-sm">
<div>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Criminal Directory</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Consolidated intelligence database of known entities and associates.</p>
</div>
<div className="flex items-center gap-sm">
<button className="px-sm py-xs bg-surface-container-lowest border border-outline-variant text-on-surface font-label-md text-label-md rounded flex items-center gap-xs hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined text-[18px]">download</span>
                        Export List
                    </button>
<button className="px-sm py-xs bg-primary text-on-primary font-label-md text-label-md rounded flex items-center gap-xs hover:bg-primary-container transition-colors shadow-sm">
<span className="material-symbols-outlined text-[18px]">person_add</span>
                        Add Entity
                    </button>
</div>
</div>
{/* Advanced Filters Bar */}
<div className="bg-surface-container-lowest border border-outline-variant rounded flex flex-col md:flex-row items-center gap-sm p-sm">
<div className="flex items-center gap-xs text-on-surface-variant font-label-md text-label-md shrink-0 pr-sm border-r border-outline-variant">
<span className="material-symbols-outlined text-[20px]">filter_list</span>
                    FILTERS
                </div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-sm w-full">
<div className="flex flex-col gap-base">
<label className="font-label-md text-label-md text-on-surface-variant uppercase text-[10px]">Crime Category</label>
<select className="w-full bg-surface border border-outline-variant rounded px-xs py-xs font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-primary">
<option>All Categories</option>
<option>Organized Crime</option>
<option>Narcotics</option>
<option>Financial Fraud</option>
<option>Cybercrime</option>
</select>
</div>
<div className="flex flex-col gap-base">
<label className="font-label-md text-label-md text-on-surface-variant uppercase text-[10px]">District</label>
<select className="w-full bg-surface border border-outline-variant rounded px-xs py-xs font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-primary">
<option>All Districts</option>
<option>Bengaluru Urban</option>
<option>Mysuru</option>
<option>Mangaluru</option>
<option>Hubballi</option>
</select>
</div>
<div className="flex flex-col gap-base">
<label className="font-label-md text-label-md text-on-surface-variant uppercase text-[10px]">Risk Level</label>
<select className="w-full bg-surface border border-outline-variant rounded px-xs py-xs font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-primary">
<option>All Levels</option>
<option>High Risk</option>
<option>Medium Risk</option>
<option>Low Risk</option>
</select>
</div>
<div className="flex flex-col gap-base justify-end">
<div className="relative w-full">
<span className="material-symbols-outlined absolute left-xs top-1/2 -translate-y-1/2 text-on-surface-variant text-[16px]">search</span>
<input className="w-full pl-xl pr-sm py-xs bg-surface border border-outline-variant rounded focus:outline-none focus:border-primary font-body-sm text-body-sm text-on-surface" placeholder="Filter by Name/ID..." type="text"/>
</div>
</div>
</div>
</div>
{/* Data Table Section */}
<div className="bg-surface-container-lowest border border-outline-variant rounded flex flex-col overflow-hidden shadow-sm">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse min-w-[900px]">
<thead className="bg-secondary-container border-b border-outline-variant sticky top-0">
<tr>
<th className="p-sm font-data-mono text-data-mono text-on-surface uppercase tracking-wider w-16 text-center">Photo</th>
<th className="p-sm font-data-mono text-data-mono text-on-surface uppercase tracking-wider">Name &amp; Aliases</th>
<th className="p-sm font-data-mono text-data-mono text-on-surface uppercase tracking-wider">ID Number</th>
<th className="p-sm font-data-mono text-data-mono text-on-surface uppercase tracking-wider">Risk Level</th>
<th className="p-sm font-data-mono text-data-mono text-on-surface uppercase tracking-wider">Last Known Location</th>
<th className="p-sm font-data-mono text-data-mono text-on-surface uppercase tracking-wider">Status</th>
<th className="p-sm font-data-mono text-data-mono text-on-surface uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant bg-surface-container-lowest">
{/* Row 1 */}
<tr className="hover:bg-surface-container-low transition-colors group cursor-pointer">
<td className="p-sm align-middle text-center">
<img className="w-10 h-10 object-cover rounded mx-auto border border-outline-variant grayscale" data-alt="A mugshot-style low-resolution photograph of an individual, neutral expression, against a plain gray background. The image should look like an official law enforcement file photo, slightly grainy, desaturated." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOcXq633FC-GDQrtKaBJYgcZjqSV6rucVkEkTk2B5INQ-11q5FvMLl5GWtGwcdF-2wprNBJL-XFe4kWzu4dq9RrH2W5rQZdBrd5PvwO43EUHJiTu-OPKWyagNeeUKL-TULr_jm6e3TGD6af-ArOthztiGxzu1sORRbLa1tJKACo_l7IkX02shGtoIc66bRunILTLBti0VlY3D8ujCEEpe6UlVoB7KL9GSj5vr7c08Q_uuSUpelOFm8VjPJ67MDxepROph9mM1iZJx0"/>
</td>
<td className="p-sm align-middle">
<div className="font-label-md text-label-md text-on-surface text-[14px]">Ravi Kumar</div>
<div className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">Alias: "Billa"</div>
</td>
<td className="p-sm align-middle font-data-mono text-data-mono text-on-surface-variant">
                                    KSP-2023-8901
                                </td>
<td className="p-sm align-middle">
<span className="inline-flex items-center px-2 py-1 rounded bg-error-container text-on-error-container font-label-md text-[10px] uppercase tracking-wide border border-error/20">
                                        High
                                    </span>
</td>
<td className="p-sm align-middle font-body-sm text-body-sm text-on-surface">
                                    Shivajinagar, Bengaluru
                                </td>
<td className="p-sm align-middle">
<div className="flex items-center gap-xs font-body-sm text-body-sm text-primary">
<div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                                        Active
                                    </div>
</td>
<td className="p-sm align-middle text-right">
<button className="text-on-surface-variant hover:text-primary transition-colors p-xs rounded hover:bg-surface-container-highest opacity-0 group-hover:opacity-100 focus:opacity-100">
<span className="material-symbols-outlined text-[20px]">chevron_right</span>
</button>
</td>
</tr>
{/* Row 2 */}
<tr className="hover:bg-surface-container-low transition-colors group cursor-pointer">
<td className="p-sm align-middle text-center">
<img className="w-10 h-10 object-cover rounded mx-auto border border-outline-variant grayscale" data-alt="A mugshot-style low-resolution photograph of a middle-aged male, neutral expression, against a plain gray background. The image should look like an official law enforcement file photo, slightly grainy, desaturated." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJv5u66p9JooUJJu8kIHfQvFPjECmNoPgCl5V-D3AbM5ZyoxFAuVT0T29oG7-MqOLAa9daG8-__aAsr5d15CUiE7F4aLGJN0Dm11lkrRem3Y3ZLAP82MzbVc8QtFfDtZVmLSsnMv-AmASJsfSkqGuLKNlkKpDBIX2fM05LpmG2Ylrj5F1j-78XYKFjV78Wzkv8vXBG-1CYzjvOf2VPETHOsliUkg2rNAJMoDdbo6qQ0vkHwyWuSafwjVCf2fyRuZZe6ryRfM-VoR5r"/>
</td>
<td className="p-sm align-middle">
<div className="font-label-md text-label-md text-on-surface text-[14px]">Syed Abbas</div>
<div className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">Alias: "Anna"</div>
</td>
<td className="p-sm align-middle font-data-mono text-data-mono text-on-surface-variant">
                                    KSP-2021-4432
                                </td>
<td className="p-sm align-middle">
<span className="inline-flex items-center px-2 py-1 rounded bg-surface-variant text-on-surface-variant font-label-md text-[10px] uppercase tracking-wide border border-outline-variant">
                                        Low
                                    </span>
</td>
<td className="p-sm align-middle font-body-sm text-body-sm text-on-surface">
                                    Central Prison, Parappana Agrahara
                                </td>
<td className="p-sm align-middle">
<div className="flex items-center gap-xs font-body-sm text-body-sm text-on-surface-variant">
<div className="w-2 h-2 rounded-full bg-outline"></div>
                                        In Custody
                                    </div>
</td>
<td className="p-sm align-middle text-right">
<button className="text-on-surface-variant hover:text-primary transition-colors p-xs rounded hover:bg-surface-container-highest opacity-0 group-hover:opacity-100 focus:opacity-100">
<span className="material-symbols-outlined text-[20px]">chevron_right</span>
</button>
</td>
</tr>
{/* Row 3 */}
<tr className="hover:bg-surface-container-low transition-colors group cursor-pointer">
<td className="p-sm align-middle text-center">
<div className="w-10 h-10 rounded bg-surface-container-highest border border-outline-variant mx-auto flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined text-[20px]">person</span>
</div>
</td>
<td className="p-sm align-middle">
<div className="font-label-md text-label-md text-on-surface text-[14px]">Unknown Entity</div>
<div className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">Linked to Case #992</div>
</td>
<td className="p-sm align-middle font-data-mono text-data-mono text-on-surface-variant">
                                    PENDING-ID
                                </td>
<td className="p-sm align-middle">
<span className="inline-flex items-center px-2 py-1 rounded bg-tertiary-container text-on-tertiary-container font-label-md text-[10px] uppercase tracking-wide border border-tertiary/20">
                                        Medium
                                    </span>
</td>
<td className="p-sm align-middle font-body-sm text-body-sm text-on-surface text-on-surface-variant italic">
                                    Location Unknown
                                </td>
<td className="p-sm align-middle">
<div className="flex items-center gap-xs font-body-sm text-body-sm text-primary">
<div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                                        Active
                                    </div>
</td>
<td className="p-sm align-middle text-right">
<button className="text-on-surface-variant hover:text-primary transition-colors p-xs rounded hover:bg-surface-container-highest opacity-0 group-hover:opacity-100 focus:opacity-100">
<span className="material-symbols-outlined text-[20px]">chevron_right</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
{/* Table Pagination/Footer */}
<div className="bg-surface border-t border-outline-variant p-sm flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant">
<div>Showing 1 to 3 of 1,245 entries</div>
<div className="flex items-center gap-xs">
<button className="p-xs rounded hover:bg-surface-container-highest border border-outline-variant bg-surface-container-lowest disabled:opacity-50 flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]">chevron_left</span>
</button>
<button className="p-xs rounded hover:bg-surface-container-highest border border-outline-variant bg-surface-container-lowest flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</div>
</div>
</div>
</main>
</div>
</div>
    </>
  );
};

export default CriminalIntelligenceDirectory;
