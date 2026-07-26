import re

with open("frontend/src/components/graphs/SyndicateGraph.jsx", "r", encoding="utf-8") as f:
    content = f.read()

# Replace canvas colors
content = content.replace(
    "bgGrad.addColorStop(0, '#0d1322');\n      bgGrad.addColorStop(1, '#060911');",
    "bgGrad.addColorStop(0, '#fcf9f8');\n      bgGrad.addColorStop(1, '#f6f3f2');"
)
content = content.replace("ctx.strokeStyle = '#1e293b';", "ctx.strokeStyle = '#e5e2e1';")

content = content.replace("ctx.strokeStyle = '#38bdf8';", "ctx.strokeStyle = '#8c1d18';")
content = content.replace("ctx.shadowColor = '#06b6d4';", "ctx.shadowColor = '#8c1d18';")
content = content.replace("ctx.strokeStyle = '#334155';", "ctx.strokeStyle = '#dfbfbb';")
content = content.replace("ctx.strokeStyle = (n1.isDistrictMatch || n2.isDistrictMatch) ? '#ec4899' : '#0284c7';", "ctx.strokeStyle = (n1.isDistrictMatch || n2.isDistrictMatch) ? '#8c1d18' : '#645e4c';")
content = content.replace("ctx.globalAlpha = 0.15;", "ctx.globalAlpha = 0.25;")

content = content.replace("ctx.fillStyle = 'rgba(236, 72, 153, 0.2)';", "ctx.fillStyle = 'rgba(140, 29, 24, 0.1)';")
content = content.replace("ctx.strokeStyle = '#f43f5e';", "ctx.strokeStyle = '#8c1d18';")
content = content.replace("ctx.strokeStyle = '#fbbf24';", "ctx.strokeStyle = '#e0b14f';")

content = content.replace(
    "ctx.fillStyle = n.color || '#06b6d4';\n        ctx.shadowColor = n.color || '#06b6d4';",
    "const nodeColor = n.category === 'Syndicate Boss' ? '#8c1d18' : (n.isDistrictMatch ? '#6b0105' : '#645e4c');\n        ctx.fillStyle = nodeColor;\n        ctx.shadowColor = nodeColor;"
)
content = content.replace("ctx.strokeStyle = '#f8fafc';", "ctx.strokeStyle = '#ffffff';")
content = content.replace("ctx.fillStyle = isSelected || isHovered ? '#fbbf24' : (n.isDistrictMatch ? '#ffffff' : '#cbd5e1');", "ctx.fillStyle = isSelected || isHovered ? '#8c1d18' : (n.isDistrictMatch ? '#1b1b1c' : '#58413e');")

# Replace Tailwind classes
replacements = [
    ("bg-slate-950 border border-slate-800 rounded-xl p-5 shadow-2xl space-y-4 text-slate-100 select-none", "bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-lg space-y-4 text-on-surface select-none"),
    ("border-slate-800 pb-4", "border-outline-variant pb-4"),
    ("text-white flex items-center gap-2", "text-on-surface flex items-center gap-2"),
    ("text-white flex items-center", "text-on-surface flex items-center"),
    ("text-slate-400 mt-1", "text-on-surface-variant mt-1"),
    ("text-pink-400 font-bold", "text-primary-container font-bold"),
    ("text-cyan-400 font-bold", "text-secondary font-bold"),
    ("bg-slate-900 border border-slate-800 p-1 rounded-lg", "bg-surface-container-low border border-outline-variant p-1 rounded-lg"),
    ("bg-pink-600 text-white shadow", "bg-primary-container text-on-primary shadow"),
    ("text-slate-400 hover:text-slate-200", "text-on-surface-variant hover:text-on-surface"),
    ("bg-cyan-600 text-white shadow", "bg-secondary text-on-secondary shadow"),
    ("bg-slate-900 border border-slate-800 rounded-lg pl-3 pr-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 w-48", "bg-surface-container-low border border-outline-variant rounded-lg pl-3 pr-3 py-1.5 text-xs text-on-surface placeholder-on-surface-variant focus:outline-none focus:border-primary-container w-48"),
    ("bg-slate-950 rounded-xl overflow-hidden border border-slate-800 shadow-inner", "bg-surface rounded-xl overflow-hidden border border-outline-variant shadow-inner"),
    ("bg-slate-900/90 backdrop-blur-md p-3 rounded-lg border border-slate-800 text-[11px] space-y-1.5 text-slate-300", "bg-surface-container-lowest/90 backdrop-blur-md p-3 rounded-lg border border-outline-variant text-[11px] space-y-1.5 text-on-surface-variant shadow-sm"),
    ("font-bold text-white text-xs mb-1", "font-bold text-on-surface text-xs mb-1"),
    ("bg-pink-500 shadow-sm shadow-pink-500", "bg-[#8c1d18] shadow-sm shadow-[#8c1d18]"),
    ("bg-cyan-400 shadow-sm shadow-cyan-400", "bg-[#6b0105] shadow-sm shadow-[#6b0105]"),
    ("bg-emerald-400", "bg-[#645e4c]"),
    ("bg-sky-400", "bg-[#dfbfbb]"),
    ("bg-slate-900 border border-slate-800 rounded-xl text-slate-200 space-y-3 shadow-2xl", "bg-surface-container-lowest border border-outline-variant rounded-xl text-on-surface space-y-3 shadow-xl"),
    ("border-slate-800 pb-2", "border-outline-variant pb-2"),
    ("text-amber-400 text-sm", "text-tertiary text-sm"),
    ("bg-pink-950 text-pink-300 text-[10px] font-bold px-2 py-0.5 rounded border border-pink-700 uppercase", "bg-primary-container text-on-primary text-[10px] font-bold px-2 py-0.5 rounded border border-primary uppercase"),
    ("text-slate-400 mt-0.5", "text-on-surface-variant mt-0.5"),
    ("text-slate-200", "text-on-surface"),
    ("bg-slate-800 hover:bg-slate-700 text-slate-300", "bg-surface-container-high hover:bg-surface-container-highest text-on-surface"),
    ("bg-slate-950 p-2.5 rounded border border-slate-800", "bg-surface-container-low p-2.5 rounded border border-outline-variant"),
    ("text-slate-400 block text-[10px]", "text-on-surface-variant block text-[10px]"),
    ("text-amber-400 font-mono text-base font-bold", "text-tertiary font-mono text-base font-bold"),
    ("text-pink-400 font-mono text-base font-bold", "text-primary-container font-mono text-base font-bold"),
    ("bg-red-950/80 text-red-300 border-red-700", "bg-error text-on-error border-error"),
    ("bg-slate-950 p-3 rounded border border-slate-800", "bg-surface-container-low p-3 rounded border border-outline-variant"),
    ("text-slate-300 mb-1", "text-on-surface mb-1"),
    ("text-slate-300 leading-relaxed", "text-on-surface leading-relaxed")
]

for old_str, new_str in replacements:
    content = content.replace(old_str, new_str)

with open("frontend/src/components/graphs/SyndicateGraph.jsx", "w", encoding="utf-8") as f:
    f.write(content)
