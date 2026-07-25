export interface CrimeRecord {
  id: string | number;
  fir_number: string;
  title: string;
  category: string;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  status: string;
  latitude: number;
  longitude: number;
  location_name: string;
  district: string;
  station_name: string;
  occured_at?: string;
  description?: string;
}

export interface HotspotPoint {
  cell_id: string;
  latitude: number;
  longitude: number;
  risk_score: number;
  risk_level: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  is_anomaly: boolean;
  top_risk_factors: Array<{ factor: string; weight: number }>;
  recommended_patrols: number;
}

export interface NetworkNode {
  id: string;
  label: string;
  category: string;
  risk_score: number;
  centrality: number;
  cases_linked: number;
}

export interface NetworkEdge {
  source: string;
  target: string;
  relationship: string;
  weight: number;
}

export interface NetworkGraphData {
  district: string;
  total_nodes: number;
  total_edges: number;
  top_syndicate_bridges: string[];
  nodes: NetworkNode[];
  edges: NetworkEdge[];
}

export interface ExecutiveBriefing {
  district: string;
  period: string;
  executive_summary: string;
  threat_assessment: string;
  actionable_directives: string[];
  model_version: string;
  generated_at: string;
}
