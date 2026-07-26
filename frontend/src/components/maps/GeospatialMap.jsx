import React, { useState, useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, CircleMarker, Polyline, Polygon, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const stationIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const patrolIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [20, 32],
  iconAnchor: [10, 32],
  popupAnchor: [1, -28],
  shadowSize: [32, 32]
});

const regionalHotspotsData = [
  {
    name: "Bengaluru Division",
    center: [12.9716, 77.5946],
    radius: 12000,
    color: '#ba1a1a', // Red
    type: "Organized Syndicate Hub",
    neighborhoods: "Sriramapura, Shivajinagar, Wilson Garden, Cottonpet, Kalasipalyam, Kamakshipalya, KG Halli",
    characteristics: "High incidence of extortion, real estate land grabbing, cyber fraud, and corporate-muscle syndicates.",
    surveillance: "6,210 active rowdies"
  },
  {
    name: "Mangaluru",
    center: [12.8654, 74.8426],
    radius: 9000,
    color: '#ba1a1a',
    type: "Organized Syndicate Hub",
    neighborhoods: "Coastal transit routes",
    characteristics: "Historical entry point for underworld operations, highly organized communal gang structures.",
    surveillance: "Active Surveillance Pool Maintained"
  },
  {
    name: "Kalaburagi Division",
    center: [17.3297, 76.8343],
    radius: 10000,
    color: '#f97316',
    type: "Violent Crime & Factions",
    neighborhoods: "Station Bazar, Chowk, Raghavendra Nagar",
    characteristics: "Factional violence, arms possession, property theft, evening chain-snatching.",
    surveillance: "1,475 active rowdies"
  },
  {
    name: "Belagavi",
    center: [15.8497, 74.4977],
    radius: 8000,
    color: '#f97316',
    type: "Violent Crime & Factions",
    neighborhoods: "Belagavi City & Suburbs",
    characteristics: "Retaliatory murders and property disputes. High rate of externment orders.",
    surveillance: "Active Surveillance Pool Maintained"
  },
  {
    name: "Hubballi-Dharwad",
    center: [15.3647, 75.1240],
    radius: 8000,
    color: '#f97316',
    type: "Violent Crime & Factions",
    neighborhoods: "Hubballi-Dharwad twin cities",
    characteristics: "Retaliatory factional violence and organized bodily offenses.",
    surveillance: "Active Surveillance Pool Maintained"
  },
  {
    name: "Bengaluru South / Ramanagara",
    center: [12.7150, 77.2812],
    radius: 11000,
    color: '#6b7280',
    type: "Resource & Highway Crime",
    neighborhoods: "Bidadi, Channapatna, Magadi borders",
    characteristics: "Illegal stone-quarrying mafias, violent highway robberies, rural land-dispute enforcement.",
    surveillance: "952 active rowdies"
  },
  {
    name: "Hassan",
    center: [13.0033, 76.1004],
    radius: 9000,
    color: '#6b7280',
    type: "Resource & Highway Crime",
    neighborhoods: "Hassan City limits",
    characteristics: "Inter-district dacoity, sand-mining smuggling, highway cargo thefts.",
    surveillance: "883 active rowdies"
  },
  {
    name: "Tumakuru",
    center: [13.3409, 77.1005],
    radius: 9000,
    color: '#6b7280',
    type: "Resource & Highway Crime",
    neighborhoods: "Kunigal, Tumakuru highways",
    characteristics: "Strategic transit corridors for smuggling and highway robbery/dacoity.",
    surveillance: "856 active rowdies"
  }
];

// Generates an irregular polygon to look more realistic than a perfect circle
function generateIrregularPolygon(center, radiusInMeters, seedString, numPoints = 14) {
  const [lat, lng] = center;
  const points = [];
  const R = 6378137; // Earth radius in meters
  
  let seed = 0;
  for (let i = 0; i < seedString.length; i++) {
    seed = seedString.charCodeAt(i) + ((seed << 5) - seed);
  }

  const random = () => {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };

  for (let i = 0; i < numPoints; i++) {
    const angle = (i * 360) / numPoints;
    const r = radiusInMeters * (0.6 + random() * 0.7); // vary radius between 60% and 130%
    const dLat = r * Math.cos((angle * Math.PI) / 180) / R;
    const dLng = r * Math.sin((angle * Math.PI) / 180) / (R * Math.cos((lat * Math.PI) / 180));
    points.push([lat + dLat * (180 / Math.PI), lng + dLng * (180 / Math.PI)]);
  }
  return points;
}

const districtCoordinates = {
  "Bengaluru Central": [12.9716, 77.5946],
  "Mysuru City": [12.2958, 76.6394],
  "Mangaluru": [12.8654, 74.8426],
  "Hubballi-Dharwad": [15.3647, 75.1240],
  "Belagavi": [15.8497, 74.4977]
};

function MapController({ district }) {
  const map = useMap();
  
  useEffect(() => {
    if (district && districtCoordinates[district]) {
      map.flyTo(districtCoordinates[district], 10, {
        animate: true,
        duration: 1.5
      });
    } else {
      map.flyTo([15.3173, 75.7139], 7, { animate: true, duration: 1.5 });
    }
  }, [district, map]);
  
  return null;
}

export default function GeospatialMap({ hotspots = [], _district = 'Bengaluru Central', onSelectCell, onSelectZone }) {
  const center = [15.3173, 75.7139]; 
  const karnatakaBounds = [
    [11.5, 74.0],
    [18.5, 78.5]
  ];

  // State to simulate "Live" data updates
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTick(prev => prev + 1);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  // Pre-calculate geofences
  const geofences = useMemo(() => {
    return regionalHotspotsData.map(zone => ({
      ...zone,
      polygon: generateIrregularPolygon(zone.center, zone.radius, zone.name)
    }));
  }, []);

  // Generate some "Live" moving patrols around hotspots
  const livePatrols = useMemo(() => {
    const patrols = [];
    hotspots.forEach((h, i) => {
      if (i % 3 === 0) { // Only put patrols on some hotspots
        // Move patrol in a small circle around the hotspot
        const t = tick * 0.2 + i;
        const latOffset = Math.sin(t) * 0.005;
        const lngOffset = Math.cos(t) * 0.005;
        const squads = ['CCB (Central Crime Branch)', 'ARS (Anti-Rowdy Squad)', 'Garuda Force', 'KSRP Battalion', 'CAR Unit', 'OCW Surveillance', 'ATS Response Team'];
        patrols.push({
          id: `patrol-${i}`,
          lat: h.latitude + latOffset,
          lng: h.longitude + lngOffset,
          unit: `${squads[i % squads.length]} - ${i}`
        });
      }
    });
    return patrols;
  }, [hotspots, tick]);

  const [mapTheme, setMapTheme] = useState('dark');
  const toggleTheme = () => setMapTheme(prev => prev === 'dark' ? 'light' : 'dark');

  return (
    <div className="absolute inset-0 w-full h-full z-0 relative">
      {/* Theme Toggle Button */}
      <div className="absolute top-4 right-4 z-[1000]">
        <button
          onClick={toggleTheme}
          className="bg-surface text-on-surface p-2 rounded shadow-md border border-outline-variant hover:bg-surface-container-low transition flex items-center justify-center"
          title={`Switch to ${mapTheme === 'dark' ? 'Light' : 'Dark'} Mode`}
        >
          <span className="material-symbols-outlined text-[18px]">
            {mapTheme === 'dark' ? 'light_mode' : 'dark_mode'}
          </span>
        </button>
      </div>

      <MapContainer
        center={center}
        zoom={7}
        minZoom={6}
        maxBounds={karnatakaBounds}
        maxBoundsViscosity={1.0}
        scrollWheelZoom={true}
        style={{ width: '100%', height: '100%', zIndex: 0, background: '#1a1a1a' }}
      >
        <MapController district={_district} />
        {/* Theme-based tile layer */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
          url={`https://{s}.basemaps.cartocdn.com/${mapTheme === 'dark' ? 'dark_all' : 'light_all'}/{z}/{x}/{y}{r}.png`}
        />

        {/* Render State-Wide Irregular Geofencing Zones */}
        {geofences.map((zone, idx) => {
          // Add a pulsing effect to opacity based on the tick for "live" feel
          const opacityPulse = 0.2 + (Math.sin(tick * 0.5 + idx) * 0.05);

          return (
            <Polygon
              key={`zone-${idx}`}
              positions={zone.polygon}
              eventHandlers={{
                click: () => {
                  if (onSelectZone) onSelectZone(zone.name);
                }
              }}
              pathOptions={{
                color: zone.color,
                fillColor: zone.color,
                fillOpacity: opacityPulse,
                weight: 2,
                dashArray: '5, 5'
              }}
            >
              <Popup>
                <div className="p-2 min-w-[220px] text-gray-900 bg-white rounded shadow">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-200 pb-2">
                    <span className="material-symbols-outlined text-[20px]" style={{ color: zone.color }}>security</span>
                    <span className="font-bold text-sm uppercase tracking-wider">{zone.name}</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <p><span className="font-bold text-gray-500">Zone Type:</span> <span style={{ color: zone.color }} className="font-bold">{zone.type}</span></p>
                    <p><span className="font-bold text-gray-500">Hotspots:</span> {zone.neighborhoods}</p>
                    <p><span className="font-bold text-gray-500">Modus Operandi:</span> {zone.characteristics}</p>
                    <div className="mt-2 pt-2 border-t border-gray-200 font-bold text-red-600 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">warning</span>
                      Surveillance: {zone.surveillance}
                    </div>
                  </div>
                </div>
              </Popup>
            </Polygon>
          );
        })}

        {/* Render Live Hotspots with pulsing sizes */}
        {hotspots.map((point) => {
          const color = point.risk_level === 'CRITICAL' ? '#ba1a1a' :
                        point.risk_level === 'HIGH' ? '#f97316' :
                        point.risk_level === 'MEDIUM' ? '#eab308' : '#22c55e';
          
          // Pulsing radius based on risk level
          const baseRadius = point.risk_score * 24 + 10;
          const pulse = point.risk_level === 'CRITICAL' ? Math.sin(tick) * 4 : 0;

          return (
            <CircleMarker
              key={point.cell_id}
              center={[point.latitude, point.longitude]}
              radius={baseRadius + pulse}
              pathOptions={{
                color: color,
                fillColor: color,
                fillOpacity: 0.4,
                weight: point.is_anomaly ? 3 : 1,
                dashArray: point.is_anomaly ? '4, 4' : undefined
              }}
              eventHandlers={{
                click: () => onSelectCell && onSelectCell(point.cell_id)
              }}
            >
              <Popup>
                <div className="p-2 min-w-[200px] text-gray-900">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-bold text-sm">{point.cell_id}</span>
                    <span className={`text-xs px-2 py-0.5 rounded font-semibold text-white ${point.risk_level === 'CRITICAL' ? 'bg-red-600' : 'bg-orange-500'}`}>
                      {point.risk_level} ({Math.round(point.risk_score * 100)}%)
                    </span>
                  </div>
                  {point.is_anomaly && (
                    <p className="text-xs font-bold text-red-600 mb-1">⚠️ Isolation Forest Anomaly Detected</p>
                  )}
                  <p className="text-xs text-gray-600 mb-1 font-medium">Top Risk Factors:</p>
                  <ul className="text-xs list-disc pl-4 space-y-0.5">
                    {point.top_risk_factors.map((rf, idx) => (
                      <li key={idx}>{rf.factor} (+{Math.round(rf.weight * 100)}%)</li>
                    ))}
                  </ul>
                  <div className="mt-2 pt-2 border-t border-gray-200 text-xs font-bold text-blue-600">
                    Recommended Patrol Units: {point.recommended_patrols}
                  </div>
                </div>
              </Popup>
            </CircleMarker>
          );
        })}

        {/* Live Moving Patrols */}
        {livePatrols.map(patrol => (
          <Marker 
            key={patrol.id} 
            position={[patrol.lat, patrol.lng]} 
            icon={patrolIcon}
          >
            <Popup>
              <div className="p-1 text-gray-900">
                <p className="font-bold text-sm text-green-700">🟢 Live Patrol: {patrol.unit}</p>
                <p className="text-xs text-gray-600">Status: Active Reconnaissance</p>
                <p className="text-xs text-gray-400">Lat: {patrol.lat.toFixed(4)}, Lng: {patrol.lng.toFixed(4)}</p>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Fixed Station HQ */}
        <Marker position={[12.9779, 77.5713]} icon={stationIcon}>
          <Popup>
            <div className="p-1 text-gray-900">
              <p className="font-bold text-sm text-blue-700">HQ: Upparpet Police Station</p>
              <p className="text-xs text-gray-600">Command Sector 1 - Active Dispatch</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

