import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, CircleMarker, Polyline } from 'react-leaflet';
import L from 'leaflet';

const stationIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export default function GeospatialMap({ hotspots = [], _district = 'Bengaluru Central', onSelectCell }) {
  const center = [12.9716, 77.5946];

  const patrolRoute = [
    [12.9716, 77.5946],
    [12.9750, 77.5990],
    [12.9800, 77.6050],
    [12.9680, 77.5890],
    [12.9716, 77.5946]
  ];

  return (
    <div className="relative w-full h-[550px] rounded-xl overflow-hidden shadow-lg border border-outline-variant">
      <MapContainer
        center={center}
        zoom={13}
        scrollWheelZoom={true}
        style={{ width: '100%', height: '100%', backgroundColor: '#1a1d20' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />

        {hotspots.map((point) => {
          const color = point.risk_level === 'CRITICAL' ? '#dc2626' :
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
                <div className="p-2 min-w-[200px]">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-bold text-sm text-gray-900">{point.cell_id}</span>
                    <span className={`text-xs px-2 py-0.5 rounded font-semibold text-white ${point.risk_level === 'CRITICAL' ? 'bg-red-600' : 'bg-orange-500'}`}>
                      {point.risk_level} ({Math.round(point.risk_score * 100)}%)
                    </span>
                  </div>
                  {point.is_anomaly && (
                    <p className="text-xs font-bold text-red-600 mb-1">⚠️ Isolation Forest Crime Spike Anomaly</p>
                  )}
                  <p className="text-xs text-gray-600 mb-1 font-medium">Top Risk Factors:</p>
                  <ul className="text-xs text-gray-700 list-disc pl-4 space-y-0.5">
                    {point.top_risk_factors.map((rf, idx) => (
                      <li key={idx}>{rf.factor} (+{Math.round(rf.weight * 100)}%)</li>
                    ))}
                  </ul>
                  <div className="mt-2 pt-2 border-t text-xs font-bold text-indigo-700">
                    Recommended Patrol Units: {point.recommended_patrols}
                  </div>
                </div>
              </Popup>
            </CircleMarker>
          );
        })}

        <Polyline
          positions={patrolRoute}
          pathOptions={{ color: '#3b82f6', weight: 4, opacity: 0.85, dashArray: '8, 8' }}
        />

        <Marker position={[12.9779, 77.5713]} icon={stationIcon}>
          <Popup>
            <div className="p-1">
              <p className="font-bold text-sm">Upparpet Police HQ</p>
              <p className="text-xs text-gray-600">Active Units: 8 | Command Sector 1</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
