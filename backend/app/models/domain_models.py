import datetime
from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey, Text, Boolean, JSON
from sqlalchemy.orm import relationship
from app.db.session import Base

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

    id = Column(Integer, primary_key=True, index=True)
    fir_number = Column(String, unique=True, index=True, nullable=False)
    title = Column(String, nullable=False)
    category = Column(String, index=True, nullable=False) # Robbery, Cybercrime, Assault, Theft, Homicide
    severity = Column(String, default="HIGH") # CRITICAL, HIGH, MEDIUM, LOW
    status = Column(String, default="UNDER_INVESTIGATION")
    latitude = Column(Float, nullable=False)
    longitude = Column(Float, nullable=False)
    location_name = Column(String, nullable=False)
    district = Column(String, index=True, nullable=False)
    station_name = Column(String, index=True, nullable=False)
    occured_at = Column(DateTime, default=datetime.datetime.utcnow)
    reported_at = Column(DateTime, default=datetime.datetime.utcnow)
    description = Column(Text, nullable=True)
    evidence = Column(JSON, default=list)

class CriminalEntity(Base):
    __tablename__ = "criminal_entities"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True, nullable=False)
    alias = Column(String, nullable=True)
    category = Column(String, default="Organized Crime Syndicate")
    risk_score = Column(Float, default=0.85)
    primary_district = Column(String, default="Bengaluru Central")
    status = Column(String, default="WANTED") # WANTED, ARRESTED, UNDER_SURVEILLANCE
    cases_linked = Column(Integer, default=1)
    centrality_score = Column(Float, default=0.0)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

class NetworkEdge(Base):
    __tablename__ = "network_edges"

    id = Column(Integer, primary_key=True, index=True)
    source_id = Column(Integer, ForeignKey("criminal_entities.id"))
    target_id = Column(Integer, ForeignKey("criminal_entities.id"))
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
