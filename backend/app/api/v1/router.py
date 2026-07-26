from fastapi import APIRouter, Depends, HTTPException, status
from typing import List, Dict, Any
from datetime import datetime
import hashlib
import jwt
import uuid
from sqlalchemy.orm import Session
from sqlalchemy import or_, desc

from app.config import settings
from app.db.session import get_db
from app.models.domain_models import CrimeRecord, User
from app.schemas.pydantic_schemas import (
    UserLogin, Token, UserResponse, HotspotPredictRequest, HotspotPredictResponse,
    NetworkGraphResponse, BriefingRequest, ExecutiveBriefingResponse, GeoJSONCollection, GeoJSONFeature,
    CrimeRecordCreate, CrimeRecordSchema, PaginatedCrimeRecords
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

@api_router.get("/health")
def health_check():
    return {
        "status": "healthy",
        "version": settings.VERSION,
        "service": "KrimeKartā Production FastAPI ML Engine",
        "timestamp": datetime.utcnow().isoformat() + "Z"
    }

@api_router.post("/auth/login", response_model=Token)
def login(user_in: UserLogin, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.username == user_in.username).first()
    if not user or not verify_password(user_in.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password"
        )
    
    payload = {
        "sub": user.username,
        "role": user.role,
        "exp": datetime.utcnow().timestamp() + (settings.ACCESS_TOKEN_EXPIRE_MINUTES * 60)
    }
    token = jwt.encode(payload, settings.JWT_SECRET, algorithm=settings.ALGORITHM)
    
    return Token(
        access_token=token,
        token_type="bearer",
        user_id=user.id,
        role=user.role,
        username=user.username
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

def serialize_crime(record: CrimeRecord) -> dict:
    return {
        "fir_number": record.fir_number,
        "title": record.title,
        "crime_type": record.crime_type,
        "crime_category": record.crime_category,
        "priority": record.priority,
        "status": record.status,
        "latitude": record.latitude,
        "longitude": record.longitude,
        "location_name": record.location_name,
        "district": record.district,
        "station_name": record.station_name,
        "fir_date": record.fir_date,
        "description": record.description,
        "suspects": record.suspects,
        "arrests": record.arrests,
        "documents": record.documents,
        "risk_score": float(record.risk_score) if record.risk_score is not None else None,
    }

def query_crime_records(
    db: Session,
    search: str | None = None,
    district: str | None = None,
    category: str | None = None,
    status_filter: str | None = None,
):
    query = db.query(CrimeRecord)
    if search:
        pattern = f"%{search}%"
        query = query.filter(or_(
            CrimeRecord.fir_number.ilike(pattern),
            CrimeRecord.title.ilike(pattern),
            CrimeRecord.crime_type.ilike(pattern),
            CrimeRecord.station_name.ilike(pattern),
        ))
    if district:
        query = query.filter(CrimeRecord.district == district)
    if category and category != "All Categories":
        query = query.filter(CrimeRecord.crime_category == category)
    if status_filter:
        query = query.filter(CrimeRecord.status == status_filter)
    return query.order_by(desc(CrimeRecord.fir_date))

@api_router.get("/crimes/geojson", response_model=GeoJSONCollection)
def get_crimes_geojson(district: str = "Bengaluru Central", db: Session = Depends(get_db)):
    crimes = query_crime_records(db, district=district).limit(500).all()
    features = []
    for c in crimes:
        features.append(GeoJSONFeature(
            geometry={"type": "Point", "coordinates": [c.longitude, c.latitude]},
            properties={
                "fir_number": c.fir_number,
                "title": c.title,
                "category": c.crime_category or c.crime_type,
                "severity": c.priority,
                "status": c.status,
                "district": c.district,
                "station_name": c.station_name,
            }
        ))
        
    return GeoJSONCollection(features=features)

@api_router.get("/crime-records", response_model=PaginatedCrimeRecords)
def get_crime_records(
    page: int = 1,
    limit: int = 25,
    search: str | None = None,
    district: str | None = None,
    category: str | None = None,
    status: str | None = None,
    db: Session = Depends(get_db),
):
    page = max(page, 1)
    limit = min(max(limit, 1), 100)
    query = query_crime_records(db, search=search, district=district, category=category, status_filter=status)
    total = query.count()
    records = query.offset((page - 1) * limit).limit(limit).all()
    return {
        "items": [serialize_crime(record) for record in records],
        "total": total,
        "page": page,
        "limit": limit,
    }

@api_router.get("/crimes", response_model=PaginatedCrimeRecords)
def get_crimes_alias(
    page: int = 1,
    limit: int = 25,
    search: str | None = None,
    district: str | None = None,
    category: str | None = None,
    status: str | None = None,
    db: Session = Depends(get_db),
):
    return get_crime_records(page, limit, search, district, category, status, db)

@api_router.get("/crime-records/{fir_number}", response_model=CrimeRecordSchema)
def get_crime_record(fir_number: str, db: Session = Depends(get_db)):
    record = db.query(CrimeRecord).filter(CrimeRecord.fir_number == fir_number).first()
    if not record:
        raise HTTPException(status_code=404, detail="Crime record not found")
    return serialize_crime(record)

@api_router.post("/crime-records", response_model=CrimeRecordSchema, status_code=status.HTTP_201_CREATED)
def create_crime_record(record_in: CrimeRecordCreate, db: Session = Depends(get_db)):
    fir_number = record_in.fir_number or f"FIR-2026-{uuid.uuid4().hex[:8].upper()}"
    existing = db.query(CrimeRecord).filter(CrimeRecord.fir_number == fir_number).first()
    if existing:
        raise HTTPException(status_code=409, detail="FIR number already exists")

    record = CrimeRecord(
        fir_number=fir_number,
        fir_date=record_in.fir_date or datetime.utcnow(),
        title=record_in.title,
        crime_type=record_in.crime_type,
        crime_category=record_in.crime_category or record_in.crime_type,
        priority=record_in.priority,
        status=record_in.status,
        district=record_in.district,
        station_name=record_in.station_name,
        ps_code=record_in.station_name.upper().replace(" ", "-"),
        latitude=record_in.latitude,
        longitude=record_in.longitude,
        location_name=record_in.location_name,
        address=record_in.location_name,
        description=record_in.description,
        suspects=record_in.suspects,
        arrests=record_in.arrests,
        documents=record_in.documents,
        accused_count=record_in.suspects,
        risk_score=88 if record_in.priority.upper() == "HIGH" else 55,
        risk_factors=["manual-entry", "officer-submitted"],
    )
    db.add(record)
    db.commit()
    db.refresh(record)
    return serialize_crime(record)

@api_router.post("/crimes", response_model=CrimeRecordSchema, status_code=status.HTTP_201_CREATED)
def create_crime_alias(record_in: CrimeRecordCreate, db: Session = Depends(get_db)):
    return create_crime_record(record_in, db)
