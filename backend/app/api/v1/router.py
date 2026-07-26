from fastapi import APIRouter, Depends, HTTPException, status
from typing import List, Dict, Any
from datetime import datetime
import hashlib
import jwt

from app.config import settings
from app.schemas.pydantic_schemas import (
    UserLogin, Token, UserResponse, HotspotPredictRequest, HotspotPredictResponse,
    NetworkGraphResponse, BriefingRequest, ExecutiveBriefingResponse, GeoJSONCollection, GeoJSONFeature
)
from app.services.ml_hotspot import hotspot_engine
from app.services.ml_shap import shap_service
from app.services.graph_service import graph_service
from app.services.gemini_service import gemini_service

api_router = APIRouter()

def hash_password(password: str) -> str:
    return hashlib.sha256((password + settings.JWT_SECRET).encode("utf-8")).hexdigest()

def verify_password(plain_password: str, hashed_password: str) -> bool:
    return hash_password(plain_password) == hashed_password

# Mock in-memory database
MOCK_USERS = {
    "admin": {
        "id": 1,
        "username": "admin",
        "email": "admin@krimekarta.gov.in",
        "hashed_password": hash_password("admin123"),
        "role": "SUPER_ADMIN",
        "district": "Bengaluru Central",
        "is_active": True
    },
    "officer": {
        "id": 2,
        "username": "officer",
        "email": "officer@krimekarta.gov.in",
        "hashed_password": hash_password("officer123"),
        "role": "FIELD_OFFICER",
        "district": "Bengaluru Central",
        "is_active": True
    }
}

@api_router.get("/health")
def health_check():
    return {
        "status": "healthy",
        "version": settings.VERSION,
        "service": "KrimeKartā Production FastAPI ML Engine",
        "timestamp": datetime.utcnow().isoformat() + "Z"
    }

@api_router.post("/auth/login", response_model=Token)
def login(user_in: UserLogin):
    user = MOCK_USERS.get(user_in.username)
    if not user or not verify_password(user_in.password, user["hashed_password"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password"
        )
    
    payload = {
        "sub": user["username"],
        "role": user["role"],
        "exp": datetime.utcnow().timestamp() + (settings.ACCESS_TOKEN_EXPIRE_MINUTES * 60)
    }
    token = jwt.encode(payload, settings.JWT_SECRET, algorithm=settings.ALGORITHM)
    
    return Token(
        access_token=token,
        token_type="bearer",
        user_id=user["id"],
        role=user["role"],
        username=user["username"]
    )

@api_router.post("/ml/predict-hotspots", response_model=HotspotPredictResponse)
def predict_hotspots(req: HotspotPredictRequest):
    predictions = hotspot_engine.predict_district_hotspots(district=req.district, time_window=req.time_window_hours)
    high_risk_count = sum(1 for p in predictions if p["risk_score"] > req.min_confidence)
    anomalies_count = sum(1 for p in predictions if p["is_anomaly"])

    return HotspotPredictResponse(
        district=req.district,
        total_cells_analyzed=len(predictions),
        high_risk_hotspots=high_risk_count,
        anomalous_clusters=anomalies_count,
        timestamp=datetime.utcnow().isoformat() + "Z",
        predictions=predictions
    )

@api_router.get("/ml/explain-cell/{cell_id}")
def explain_cell(cell_id: str):
    predictions = hotspot_engine.predict_district_hotspots()
    target = next((p for p in predictions if p["cell_id"] == cell_id), predictions[0])
    return shap_service.get_cell_explanation(target["cell_id"], target["risk_score"], target["top_risk_factors"])

@api_router.get("/network/graph", response_model=NetworkGraphResponse)
def get_network_graph(district: str = "Bengaluru Central"):
    return graph_service.analyze_network(district=district)

@api_router.post("/intelligence/briefing", response_model=ExecutiveBriefingResponse)
def get_executive_briefing(req: BriefingRequest):
    return gemini_service.generate_district_briefing(district=req.district, period=req.period)

@api_router.get("/crimes/geojson", response_model=GeoJSONCollection)
def get_crimes_geojson(district: str = "Bengaluru Central"):
    sample_crimes = [
        {"fir": "FIR-2026-00101", "title": "Night Commercial Burglary", "cat": "Robbery", "lat": 12.9716, "lng": 77.5946, "sev": "CRITICAL"},
        {"fir": "FIR-2026-00102", "title": "Armed Assault Near Metro", "cat": "Assault", "lat": 12.9750, "lng": 77.5990, "sev": "HIGH"},
        {"fir": "FIR-2026-00103", "title": "Chain Snatching Incident", "cat": "Theft", "lat": 12.9680, "lng": 77.5890, "sev": "MEDIUM"},
        {"fir": "FIR-2026-00104", "title": "Financial Fraud & Mule Hub", "cat": "Cybercrime", "lat": 12.9800, "lng": 77.6050, "sev": "HIGH"}
    ]
    
    features = []
    for c in sample_crimes:
        features.append(GeoJSONFeature(
            geometry={"type": "Point", "coordinates": [c["lng"], c["lat"]]},
            properties={"fir_number": c["fir"], "title": c["title"], "category": c["cat"], "severity": c["sev"]}
        ))
        
    return GeoJSONCollection(features=features)

MOCK_CRIME_RECORDS = [
    {
      "id": "FIR-2026-00101",
      "title": "Central Bengaluru Supari & Extortion Ring",
      "date": "2026-06-12",
      "status": "ACTIVE_INVESTIGATION",
      "category": "Murder & Extortion (Sec 103 BNS)",
      "district": "Bengaluru City (Central)",
      "primarySuspect": "Wilson Garden Naga",
      "assignedTo": "CCB Anti-Rowdy Squad"
    },
    {
      "id": "FIR-2026-00102",
      "title": "Western Subdivision Armed Land Settlement",
      "date": "2026-05-28",
      "status": "ACTIVE_INVESTIGATION",
      "category": "Armed Extortion & Arms Act",
      "district": "West Bengaluru",
      "primarySuspect": "Cycle Ravi",
      "assignedTo": "Insp. Gowda (CCB)"
    }
]

@api_router.get("/crime-records")
def get_crime_records():
    return MOCK_CRIME_RECORDS

@api_router.post("/crime-records")
def create_crime_record(record: dict):
    MOCK_CRIME_RECORDS.append(record)
    return {"message": "Record created successfully", "record": record}
