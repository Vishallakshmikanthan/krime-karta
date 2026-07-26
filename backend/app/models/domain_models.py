import datetime
from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey, Text, Boolean, JSON, Numeric, Date
from sqlalchemy.orm import relationship
from app.db.session import Base
from geoalchemy2 import Geometry
from pgvector.sqlalchemy import Vector
from sqlalchemy.dialects.postgresql import INET, JSONB, ARRAY

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    role = Column(String, default="ANALYST") # FIELD_OFFICER, ANALYST, COMMANDER, SUPER_ADMIN
    district = Column(String, default="Bengaluru Central")
    badge_number = Column(String, nullable=True)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

class CrimeRecord(Base):
    __tablename__ = "crime_records"

    fir_number = Column(String(50), primary_key=True, index=True)
    fir_date = Column(DateTime(timezone=True), nullable=False)
    crime_type = Column(String(100), nullable=False)
    crime_category = Column(String(50))
    crime_subcategory = Column(String(100))
    ps_code = Column(String(20), index=True)
    beat_code = Column(String(20))
    location = Column(Geometry(geometry_type='POINT', srid=4326), nullable=False, index=True)
    address = Column(Text)
    victim_count = Column(Integer, default=0)
    accused_count = Column(Integer, default=0)
    property_stolen = Column(JSONB)
    property_recovered = Column(JSONB)
    vehicle_involved = Column(Boolean, default=False)
    vehicle_details = Column(JSONB)
    cyber_fraud_type = Column(String(50))
    drug_type = Column(String(50))
    drug_quantity_gm = Column(Numeric)
    
    risk_score = Column(Numeric(5,2))
    risk_factors = Column(JSONB)
    embedding = Column(Vector(384))
    
    created_at = Column(DateTime(timezone=True), default=datetime.datetime.utcnow)
    updated_at = Column(DateTime(timezone=True), default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)

class RowdySheeter(Base):
    __tablename__ = "rowdy_sheeters"

    rowdy_id = Column(String(50), primary_key=True)
    name = Column(String(200), nullable=False)
    aliases = Column(ARRAY(Text))
    category = Column(String(1)) # A, B, C
    ps_code = Column(String(20))
    native_place = Column(Geometry(geometry_type='POINT', srid=4326))
    current_address = Column(Geometry(geometry_type='POINT', srid=4326), index=True)
    gps_tracker_id = Column(String(50))
    bond_expiry = Column(Date)
    bail_conditions = Column(JSONB)
    geofence_zones = Column(ARRAY(Geometry(geometry_type='POLYGON', srid=4326)))
    associates = Column(ARRAY(String(50))) 
    cases_linked = Column(ARRAY(String(50)))
    risk_score = Column(Numeric(5,2))
    last_verified = Column(DateTime(timezone=True))
    status = Column(String(20), default='ACTIVE')
    embedding = Column(Vector(384))

class VehicleTelemetry(Base):
    __tablename__ = "vehicle_telemetry"

    vehicle_id = Column(String(50), primary_key=True)
    ps_code = Column(String(20))
    vehicle_type = Column(String(20))
    current_location = Column(Geometry(geometry_type='POINT', srid=4326), index=True)
    current_status = Column(String(20))
    shift_start = Column(DateTime(timezone=True))
    shift_end = Column(DateTime(timezone=True))
    assigned_beat = Column(String(20))
    gps_log = Column(JSONB)
    log_compliance_pct = Column(Numeric(5,2))

class CyberFraud1930(Base):
    __tablename__ = "cyber_fraud_1930"

    complaint_id = Column(String(50), primary_key=True)
    timestamp = Column(DateTime(timezone=True), nullable=False)
    victim_name = Column(String(200))
    victim_phone = Column(String(15))
    victim_email = Column(String(200))
    fraud_type = Column(String(50))
    amount_lost = Column(Numeric(15,2))
    amount_frozen = Column(Numeric(15,2), default=0)
    bank_accounts = Column(JSONB)
    upi_ids = Column(ARRAY(Text))
    phone_numbers = Column(ARRAY(Text))
    urls = Column(ARRAY(Text))
    ip_addresses = Column(ARRAY(INET))
    status = Column(String(20))
    ps_code = Column(String(20))
    location = Column(Geometry(geometry_type='POINT', srid=4326), index=True)
    embedding = Column(Vector(384))

class NetworkEdge(Base):
    __tablename__ = "network_edges"

    id = Column(Integer, primary_key=True, index=True)
    source_id = Column(String(50), ForeignKey("rowdy_sheeters.rowdy_id"))
    target_id = Column(String(50), ForeignKey("rowdy_sheeters.rowdy_id"))
    relationship_type = Column(String, default="ASSOCIATE") # LEADER, ASSOCIATE, FINANCIER, ENFORCER
    weight = Column(Float, default=1.0)

class PatrolPlan(Base):
    __tablename__ = "patrol_plans"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    district = Column(String, nullable=False)
    shift = Column(String, default="NIGHT") # MORNING, AFTERNOON, NIGHT
    risk_level = Column(String, default="HIGH")
    waypoints = Column(JSON, default=list)
    recommended_units = Column(Integer, default=4)
    status = Column(String, default="ACTIVE")
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
