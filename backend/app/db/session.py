from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from app.config import settings

# SQLite or PostgreSQL engine
connect_args = {"check_same_thread": False} if "sqlite" in settings.DATABASE_URL else {}

engine = create_engine(
    settings.DATABASE_URL,
    connect_args=connect_args,
    echo=False
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def init_db():
    from app.models.domain_models import CrimeRecord, User
    from app.config import settings
    import datetime
    import hashlib

    User.__table__.create(bind=engine, checkfirst=True)
    CrimeRecord.__table__.create(bind=engine, checkfirst=True)

    db = SessionLocal()
    try:
        def hash_password(password: str) -> str:
            return hashlib.sha256((password + settings.JWT_SECRET).encode("utf-8")).hexdigest()

        if db.query(User).count() == 0:
            db.add_all([
                User(
                    username="admin",
                    email="admin@krimekarta.gov.in",
                    hashed_password=hash_password("admin123"),
                    role="SUPER_ADMIN",
                    district="Bengaluru Central",
                    badge_number="KSP-ADMIN-001",
                ),
                User(
                    username="officer",
                    email="officer@krimekarta.gov.in",
                    hashed_password=hash_password("officer123"),
                    role="FIELD_OFFICER",
                    district="Bengaluru Central",
                    badge_number="KSP-FIELD-104",
                ),
            ])

        if db.query(CrimeRecord).count() == 0:
            stations = [
                ("Bengaluru Central", "Upparpet PS", 12.9767, 77.5716),
                ("Bengaluru Central", "Commercial Street PS", 12.9822, 77.6083),
                ("Bengaluru Central", "Indiranagar PS", 12.9719, 77.6412),
                ("Mysuru City", "Mysuru South PS", 12.2958, 76.6394),
                ("Hubballi-Dharwad", "Hubballi Central PS", 15.3647, 75.1240),
            ]
            categories = [
                ("Property Crime", "Vehicle theft cluster near transit hub", "HIGH"),
                ("Cyber Crime", "UPI mule account and phishing syndicate", "MEDIUM"),
                ("Narcotics (NDPS)", "Contraband movement near highway checkpost", "HIGH"),
                ("Financial Fraud", "ATM skimming and loan app extortion complaints", "MEDIUM"),
                ("Organized Crime", "Extortion racket linked to repeat offenders", "HIGH"),
            ]
            base_date = datetime.datetime(2026, 7, 24, 22, 30)
            records = []
            for i in range(120):
                district, station, lat, lng = stations[i % len(stations)]
                category, title, priority = categories[i % len(categories)]
                occurred_at = base_date - datetime.timedelta(hours=i * 3)
                records.append(CrimeRecord(
                    fir_number=f"FIR-2026-{i + 101:05d}",
                    fir_date=occurred_at,
                    title=title,
                    crime_type=category,
                    crime_category=category,
                    priority=priority,
                    status="ACTIVE_INVESTIGATION" if i % 6 else "UNDER_REVIEW",
                    district=district,
                    station_name=station,
                    ps_code=station.upper().replace(" ", "-"),
                    latitude=round(lat + ((i % 7) - 3) * 0.004, 6),
                    longitude=round(lng + ((i % 5) - 2) * 0.004, 6),
                    location_name=f"{station} jurisdiction sector {1 + (i % 8)}",
                    address=f"Sector {1 + (i % 8)}, {district}",
                    victim_count=i % 3,
                    accused_count=1 + (i % 6),
                    suspects=1 + (i % 6),
                    arrests=i % 3,
                    documents=2 + (i % 11),
                    risk_score=92 if priority == "HIGH" else 64,
                    risk_factors=["repeat-location", "night-window", "historical-cluster"],
                    description=f"{category} record generated for operational analytics and patrol decision support.",
                ))
            db.add_all(records)

        db.commit()
    finally:
        db.close()
