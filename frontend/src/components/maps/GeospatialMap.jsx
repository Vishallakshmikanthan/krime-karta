import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, CircleMarker, Polyline, Circle } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Explicitly importing CSS to prevent white screen

const stationIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
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
    color: '#ba1a1a', // Red
    type: "Organized Syndicate Hub",
    neighborhoods: "Coastal transit routes",
    characteristics: "Historical entry point for underworld operations, highly organized communal gang structures.",
    surveillance: "Active Surveillance Pool Maintained"
  },
  {
    name: "Kalaburagi Division",
    center: [17.3297, 76.8343],
    radius: 10000,
    color: '#f97316', // Orange
    type: "Violent Crime & Factions",
    neighborhoods: "Station Bazar, Chowk, Raghavendra Nagar",
    characteristics: "Factional violence, arms possession, property theft, evening chain-snatching.",
    surveillance: "1,475 active rowdies"
  },
  {
    name: "Belagavi",
    center: [15.8497, 74.4977],
    radius: 8000,
    color: '#f97316', // Orange
    type: "Violent Crime & Factions",
    neighborhoods: "Belagavi City & Suburbs",
    characteristics: "Retaliatory murders and property disputes. High rate of externment orders.",
    surveillance: "Active Surveillance Pool Maintained"
  },
  {
    name: "Hubballi-Dharwad",
    center: [15.3647, 75.1240],
    radius: 8000,
    color: '#f97316', // Orange
    type: "Violent Crime & Factions",
    neighborhoods: "Hubballi-Dharwad twin cities",
    characteristics: "Retaliatory factional violence and organized bodily offenses.",
    surveillance: "Active Surveillance Pool Maintained"
  },
  {
    name: "Bengaluru South / Ramanagara",
    center: [12.7150, 77.2812],
    radius: 11000,
    color: '#6b7280', // Gray
    type: "Resource & Highway Crime",
    neighborhoods: "Bidadi, Channapatna, Magadi borders",
    characteristics: "Illegal stone-quarrying mafias, violent highway robberies, rural land-dispute enforcement.",
    surveillance: "952 active rowdies"
  },
  {
    name: "Hassan",
    center: [13.0033, 76.1004],
    radius: 9000,
    color: '#6b7280', // Gray
    type: "Resource & Highway Crime",
    neighborhoods: "Hassan City limits",
    characteristics: "Inter-district dacoity, sand-mining smuggling, highway cargo thefts.",
    surveillance: "883 active rowdies"
  },
  {
    name: "Tumakuru",
    center: [13.3409, 77.1005],
    radius: 9000,
    color: '#6b7280', // Gray
    type: "Resource & Highway Crime",
    neighborhoods: "Kunigal, Tumakuru highways",
    characteristics: "Strategic transit corridors for smuggling and highway robbery/dacoity.",
    surveillance: "856 active rowdies"
  }
];

export default function GeospatialMap({ hotspots = [], _district = 'Bengaluru Central', onSelectCell }) {
  // Center map on Karnataka to show all divisions
  const center = [15.3173, 75.7139]; 

  const patrolRoute = [
    [12.9716, 77.5946],
    [12.9750, 77.5990],
    [12.9800, 77.6050],
    [12.9680, 77.5890],
    [12.9716, 77.5946]
  ];

  // Restrict map to Karnataka bounds
  const karnatakaBounds = [
    [11.5, 74.0], // South-West coordinates
    [18.5, 78.5]  // North-East coordinates
  ];

  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <MapContainer
        center={center}
        zoom={7}
        minZoom={6}
        maxBounds={karnatakaBounds}
        maxBoundsViscosity={1.0}
        scrollWheelZoom={true}
        style={{ width: '100%', height: '100%', zIndex: 0 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />

        {/* Render State-Wide Geofencing Zones */}
        {regionalHotspotsData.map((zone, idx) => (
          <Circle
            key={`zone-${idx}`}
            center={zone.center}
            radius={zone.radius}
            pathOptions={{
              color: zone.color,
              fillColor: zone.color,
              fillOpacity: 0.2,
              weight: 2,
              dashArray: '5, 5'
            }}
          >
            <Popup>
              <div className="p-2 min-w-[220px] text-on-surface">
                <div className="flex items-center gap-2 mb-2 border-b border-outline-variant pb-2">
                  <span className="material-symbols-outlined text-[20px]" style={{ color: zone.color }}>gpp_bad</span>
                  <span className="font-bold text-sm uppercase tracking-wider">{zone.name}</span>
                </div>
                <div className="space-y-2 text-xs">
                  <p><span className="font-bold text-on-surface-variant">Zone Type:</span> <span style={{ color: zone.color }} className="font-bold">{zone.type}</span></p>
                  <p><span className="font-bold text-on-surface-variant">Hotspots:</span> {zone.neighborhoods}</p>
                  <p><span className="font-bold text-on-surface-variant">Modus Operandi:</span> {zone.characteristics}</p>
                  <div className="mt-2 pt-2 border-t border-outline-variant font-bold text-error flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">warning</span>
                    Surveillance: {zone.surveillance}
                  </div>
                </div>
              </div>
            </Popup>
          </Circle>
        ))}

        {hotspots.map((point) => {
          const color = point.risk_level === 'CRITICAL' ? '#ba1a1a' :
                        point.risk_level === 'HIGH' ? '#f97316' :
                        point.risk_level === 'MEDIUM' ? '#eab308' : '#22c55e';
          return (
            <CircleMarker
              key={point.cell_id}
              center={[point.latitude, point.longitude]}
              radius={point.risk_score * 24 + 10}
              pathOptions={{
                color: color,
                fillColor: color,
                fillOpacity: 0.35,
                weight: point.is_anomaly ? 3 : 1,
                dashArray: point.is_anomaly ? '4, 4' : undefined
              }}
              eventHandlers={{
                click: () => onSelectCell && onSelectCell(point.cell_id)
              }}
            >
              <Popup>
                <div className="p-2 min-w-[200px] text-on-surface">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-bold text-sm">{point.cell_id}</span>
                    <span className={`text-xs px-2 py-0.5 rounded font-semibold text-white ${point.risk_level === 'CRITICAL' ? 'bg-error' : 'bg-orange-500'}`}>
                      {point.risk_level} ({Math.round(point.risk_score * 100)}%)
                    </span>
                  </div>
                  {point.is_anomaly && (
                    <p className="text-xs font-bold text-error mb-1">⚠️ Isolation Forest Crime Spike Anomaly</p>
                  )}
                  <p className="text-xs text-on-surface-variant mb-1 font-medium">Top Risk Factors:</p>
                  <ul className="text-xs list-disc pl-4 space-y-0.5">
                    {point.top_risk_factors.map((rf, idx) => (
                      <li key={idx}>{rf.factor} (+{Math.round(rf.weight * 100)}%)</li>
                    ))}
                  </ul>
                  <div className="mt-2 pt-2 border-t border-outline-variant text-xs font-bold text-primary">
                    Recommended Patrol Units: {point.recommended_patrols}
                  </div>
                </div>
              </Popup>
            </CircleMarker>
          );
        })}

        <Polyline
          positions={patrolRoute}
          pathOptions={{ color: '#8c1d18', weight: 4, opacity: 0.85, dashArray: '8, 8' }}
        />

        <Marker position={[12.9779, 77.5713]} icon={stationIcon}>
          <Popup>
            <div className="p-1 text-on-surface">
              <p className="font-bold text-sm">Upparpet Police HQ</p>
              <p className="text-xs text-on-surface-variant">Active Units: 8 | Command Sector 1</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

