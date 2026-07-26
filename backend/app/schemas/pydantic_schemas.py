from typing import List, Optional, Any
from datetime import datetime
from pydantic import BaseModel, Field, ConfigDict

class Token(BaseModel):
    access_token: str
    token_type: str
    user_id: int
    role: str
    username: str

class TokenData(BaseModel):
    username: Optional[str] = None
    role: Optional[str] = None

class UserLogin(BaseModel):
    username: str
    password: str

class UserCreate(BaseModel):
    username: str
    email: str
    password: str
    role: str = "ANALYST"
    district: str = "Bengaluru Central"

class UserResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: int
    username: str
    email: str
    role: str
    district: str
    is_active: bool

class CrimeRecordSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    fir_number: str
    title: str
    crime_type: str
    crime_category: Optional[str] = None
    priority: str = "MEDIUM"
    status: str = "UNDER_INVESTIGATION"
    latitude: float
    longitude: float
    location_name: str
    district: str
    station_name: str
    fir_date: Optional[datetime] = None
    description: Optional[str] = None
    suspects: int = 0
    arrests: int = 0
    documents: int = 0
    risk_score: Optional[float] = None

class CrimeRecordCreate(BaseModel):
    fir_number: Optional[str] = None
    title: str
    crime_type: str
    crime_category: Optional[str] = None
    priority: str = "MEDIUM"
    status: str = "UNDER_REVIEW"
    latitude: float
    longitude: float
    location_name: str
    district: str = "Bengaluru Central"
    station_name: str = "Unassigned Station"
    fir_date: Optional[datetime] = None
    description: Optional[str] = None
    suspects: int = 0
    arrests: int = 0
    documents: int = 0

class PaginatedCrimeRecords(BaseModel):
    items: List[CrimeRecordSchema]
    total: int
    page: int
    limit: int

class GeoJSONFeature(BaseModel):
    type: str = "Feature"
    geometry: dict
    properties: dict

class GeoJSONCollection(BaseModel):
    type: str = "FeatureCollection"
    features: List[GeoJSONFeature]

class HotspotPredictRequest(BaseModel):
    district: str = "Bengaluru Central"
    time_window_hours: int = 48
    min_confidence: float = 0.50

class HotspotPoint(BaseModel):
    cell_id: str
    latitude: float
    longitude: float
    risk_score: float
    risk_level: str
    is_anomaly: bool
    top_risk_factors: List[dict]
    recommended_patrols: int

class HotspotPredictResponse(BaseModel):
    district: str
    total_cells_analyzed: int
    high_risk_hotspots: int
    anomalous_clusters: int
    timestamp: str
    predictions: List[HotspotPoint]

class GraphNode(BaseModel):
    id: str
    label: str
    category: str
    risk_score: float
    centrality: float
    cases_linked: int

class GraphEdge(BaseModel):
    source: str
    target: str
    relationship: str
    weight: float

class NetworkGraphResponse(BaseModel):
    district: str
    total_nodes: int
    total_edges: int
    top_syndicate_bridges: List[str]
    nodes: List[GraphNode]
    edges: List[GraphEdge]

class BriefingRequest(BaseModel):
    district: str = "Bengaluru Central"
    period: str = "24h"

class ExecutiveBriefingResponse(BaseModel):
    district: str
    period: str
    executive_summary: str
    threat_assessment: str
    actionable_directives: List[str]
    model_version: str
    generated_at: str
