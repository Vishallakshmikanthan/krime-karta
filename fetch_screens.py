import json
import urllib.request
import os
import re

json_path = r'C:\Users\Lenovo\.gemini\antigravity-ide\brain\cbcbcacb-9d3c-4aa7-aaf7-d04b6d2c274a\.system_generated\steps\15\output.txt'
output_dir = r'C:\Users\Lenovo\Downloads\krime-karta\frontend\src\pages'
css_file = r'C:\Users\Lenovo\Downloads\krime-karta\frontend\src\index.css'

os.makedirs(output_dir, exist_ok=True)

with open(json_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

collected_styles = []

for idx, screen in enumerate(data.get('screens', [])):
    title = screen.get('title', f'Screen_{idx}')
    
    comp_name = re.sub(r'[^a-zA-Z0-9]', '', title.replace('KrimeKartā - ', '').title())
    if not comp_name:
        comp_name = f'Screen{idx}'
    
    if comp_name[0].isdigit():
        if comp_name.startswith('2Fa'):
            comp_name = 'TwoFa' + comp_name[3:]
        else:
            comp_name = 'Screen' + comp_name
        
    html_info = screen.get('htmlCode', {})
    download_url = html_info.get('downloadUrl')
    
    if download_url:
        safe_title = title.encode('ascii', 'ignore').decode()
        print(f"Downloading {safe_title} as {comp_name}...")
        try:
            req = urllib.request.Request(download_url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req) as response:
                html_content = response.read().decode('utf-8')
            
            # Extract styles
            styles = re.findall(r'<style[^>]*>(.*?)</style>', html_content, re.DOTALL | re.IGNORECASE)
            for style in styles:
                if style.strip() not in collected_styles:
                    collected_styles.append(style.strip())
            
            # Extract body content and classes
            body_match = re.search(r'<body([^>]*)>(.*?)</body>', html_content, re.DOTALL | re.IGNORECASE)
            if body_match:
                body_attrs = body_match.group(1)
                inner_html = body_match.group(2).strip()
                class_match = re.search(r'class=["\']([^"\']+)["\']', body_attrs, re.IGNORECASE)
                body_class = class_match.group(1) if class_match else ""
                
                if body_class:
                    inner_html = f'<div className="{body_class}">\n{inner_html}\n</div>'
            else:
                inner_html = html_content
                
            # Basic conversion to JSX
            jsx_content = inner_html.replace('class=', 'className=').replace('for=', 'htmlFor=').replace('<!--', '{/*').replace('-->', '*/}')
            jsx_content = jsx_content.replace('maxlength=', 'maxLength=').replace('onsubmit=', 'onSubmit=')
            
            # Convert inline styles to React objects
            def style_to_object(match):
                style_str = match.group(1)
                parts = style_str.split(';')
                style_obj = []
                for part in parts:
                    part = part.strip()
                    if not part: continue
                    if ':' in part:
                        k, v = part.split(':', 1)
                        k = k.strip()
                        v = v.strip()
                        # camelCase the key
                        k_camel = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), k)
                        # escape single quotes in value or use double quotes
                        v_escaped = v.replace('"', '\\"')
                        style_obj.append(f"{k_camel}: \"{v_escaped}\"")
                return "style={{" + ", ".join(style_obj) + "}}"
            
            jsx_content = re.sub(r'style="([^"]*)"', style_to_object, jsx_content)
            
            # Remove script tags
            jsx_content = re.sub(r'<script.*?</script>', '', jsx_content, flags=re.DOTALL | re.IGNORECASE)

            
            # Handle self closing tags
            jsx_content = re.sub(r'<(img|input|hr|br|meta|link)([^>]*?)(?<!/)>', r'<\1\2 />', jsx_content)
            
            # Fix SVG attributes
            svg_attrs = {
                'clip-path': 'clipPath',
                'clip-rule': 'clipRule',
                'fill-opacity': 'fillOpacity',
                'fill-rule': 'fillRule',
                'stroke-dasharray': 'strokeDasharray',
                'stroke-linecap': 'strokeLinecap',
                'stroke-linejoin': 'strokeLinejoin',
                'stroke-width': 'strokeWidth',
                'stroke-opacity': 'strokeOpacity',
                'viewbox': 'viewBox',
                'preserveaspectratio': 'preserveAspectRatio',
                'stroke-dashoffset': 'strokeDashoffset'
            }
            
            for old_attr, new_attr in svg_attrs.items():
                jsx_content = re.sub(rf'\b{old_attr}=', f'{new_attr}=', jsx_content, flags=re.IGNORECASE)
                
            file_content = f"""import React from 'react';

const {comp_name} = () => {{
  return (
    <>
      {jsx_content}
    </>
  );
}};

export default {comp_name};
"""
            with open(os.path.join(output_dir, f'{comp_name}.jsx'), 'w', encoding='utf-8') as f:
                f.write(file_content)
            print(f"Saved {comp_name}.jsx")
        except Exception as e:
            print(f"Error downloading {safe_title}: {e}")
    else:
        safe_title = title.encode('ascii', 'ignore').decode()
        print(f"No HTML download URL for {safe_title}")

# Write all collected styles to index.css
if collected_styles:
    print(f"Appending collected styles to {css_file}")
    with open(css_file, 'a', encoding='utf-8') as f:
        f.write('\n/* Extracted Styles from Stitch Screens */\n')
        for style in collected_styles:
            f.write(style + '\n')

print("Done downloading screens.")
