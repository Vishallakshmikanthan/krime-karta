from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from app.config import settings

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

        # Ensure all districts have rich FIR records
        stations = [
            ("Bengaluru Central", "Upparpet PS", 12.9767, 77.5716, "Wilson Garden Naga"),
            ("Bengaluru Central", "Commercial Street PS", 12.9822, 77.6083, "Silent Sunil"),
            ("Bengaluru Central", "Indiranagar PS", 12.9719, 77.6412, "Cycle Ravi"),
            ("Bengaluru Central", "Sriramapura PS", 12.9910, 77.5680, "Bomb Naga"),
            ("Mysuru City", "Mysuru South PS", 12.2958, 76.6394, "Hebbagodi Satisha"),
            ("Mysuru City", "Nazarbad PS", 12.3080, 76.6620, "Rajesh"),
            ("Mangaluru", "Mangaluru North PS", 12.8702, 74.8806, "Muthappa Rai Faction"),
            ("Mangaluru", "Panambur PS", 12.9520, 74.8100, "Raju Nepali"),
            ("Hubballi-Dharwad", "Hubballi Central PS", 15.3647, 75.1240, "Kunigal Giri"),
            ("Hubballi-Dharwad", "Suburban PS", 15.3500, 75.1400, "Thimma"),
            ("Belagavi", "Belagavi Market PS", 15.8497, 74.4977, "Bhimagouda"),
            ("Belagavi", "Camp PS", 15.8600, 74.5100, "Auto Venkatesh"),
            ("Belagavi", "APMC Yard PS", 15.8800, 74.5200, "Girish"),
        ]

        categories = [
            ("Murder & Extortion (Sec 103 BNS)", "Targeted contract execution and land settlement threat", "HIGH"),
            ("Armed Extortion & Arms Act", "Illicit firearms procurement and business merchant extortion", "HIGH"),
            ("Highway Dacoity (Sec 310 BNS)", "Interstate cargo truck interception and armed robbery", "HIGH"),
            ("Cyber Fraud & Financial Scam", "UPI mule account network and extortion money laundering", "MEDIUM"),
            ("NDPS Act (Narcotics Cartel)", "Contraband movement near highway border checkposts", "HIGH"),
            ("Organized Crime & Bootlegging", "Illicit liquor distribution and local trade union intimidation", "MEDIUM"),
        ]

        # Re-seed if CrimeRecord count is low or missing districts
        existing_count = db.query(CrimeRecord).count()
        if existing_count < 50:
            db.query(CrimeRecord).delete()
            base_date = datetime.datetime(2026, 7, 25, 14, 0)
            records = []
            for i in range(150):
                district, station, lat, lng, suspect = stations[i % len(stations)]
                category, title_base, priority = categories[i % len(categories)]
                occurred_at = base_date - datetime.timedelta(hours=i * 2)
                status_opts = ["ACTIVE_INVESTIGATION", "ARREST_WARRANT_ISSUED", "GOONDA_ACT_PROCEEDINGS", "EXTERNMENT_ORDER_SERVED"]
                current_status = status_opts[i % len(status_opts)]
                
                records.append(CrimeRecord(
                    fir_number=f"FIR-2026-{i + 1001:05d}",
                    fir_date=occurred_at,
                    title=f"{title_base} #{1 + (i % 9)}",
                    crime_type=category,
                    crime_category=category,
                    priority=priority,
                    status=current_status,
                    district=district,
                    station_name=station,
                    ps_code=station.upper().replace(" ", "-"),
                    latitude=round(lat + ((i % 7) - 3) * 0.003, 6),
                    longitude=round(lng + ((i % 5) - 2) * 0.003, 6),
                    location_name=f"{station} Jurisdiction Sector {1 + (i % 6)}",
                    address=f"Sector {1 + (i % 6)}, {station}, {district}",
                    victim_count=1 + (i % 3),
                    accused_count=1 + (i % 5),
                    suspects=1 + (i % 5),
                    arrests=i % 2,
                    documents=3 + (i % 8),
                    risk_score=94 if priority == "HIGH" else 72,
                    risk_factors=["cctns-sync", "syndicate-linkage", "historical-hotspot"],
                    description=f"CCTNS registered case dossier under {category}. Suspect {suspect} tagged under rowdy-sheet surveillance.",
                ))
            db.add_all(records)

        db.commit()
    finally:
        db.close()
