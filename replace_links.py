import os
import re

directory = r'frontend/src/pages'
components = [
    'DashboardOverview.jsx',
    'CommandCenterOperations.jsx',
    'GeospatialIntelligenceMap.jsx',
    'AiPatrolRecommendationCenter.jsx',
    'StrategicAnalytics.jsx',
    'AdvancedNetworkIntelligenceAnalysis.jsx',
    'NationalCrimeRecordsDatabase.jsx',
    'CriminalIntelligenceDirectory.jsx'
]

routes_map = {
    'Dashboard': '/dashboard',
    'Crime Map': '/geospatial-map',
    'Analytics': '/strategic-analytics',
    'AI Patrol': '/ai-patrol',
    'Network Analysis': '/advanced-network',
    'Records': '/national-crime-records',
    'Reports': '/criminal-intelligence',
    'System Status': '/command-center'
}

def replace_a_tags(match):
    tag_content = match.group(0)
    # Check what text is inside this <a> tag to determine the route
    for text, route in routes_map.items():
        if f'>{text}<' in tag_content:
            # Replace <a with <Link
            tag_content = tag_content.replace('<a ', '<Link ').replace('</a>', '</Link>')
            # Replace href="#" with to="route"
            tag_content = re.sub(r'href="[^"]*"', f'to="{route}"', tag_content)
            return tag_content
    return tag_content

for comp in components:
    filepath = os.path.join(directory, comp)
    if not os.path.exists(filepath):
        print(f'{comp} not found')
        continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if "import { Link } from 'react-router-dom';" not in content:
        content = content.replace("import React from 'react';", "import React from 'react';\nimport { Link } from 'react-router-dom';")
    
    # Replace navigation links
    new_content = re.sub(r'<a\b[^>]*>(.*?)</a>', replace_a_tags, content, flags=re.DOTALL)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f'Processed {comp}')
