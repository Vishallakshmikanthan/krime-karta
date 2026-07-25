import os
from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    PROJECT_NAME: str = "KrimeKartā Production API"
    VERSION: str = "2.0.0"
    API_V1_STR: str = "/api/v1"
    
    # Secret Key
    JWT_SECRET: str = os.getenv("JWT_SECRET", "krimekarta_super_secret_jwt_key_2026_prod")
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 7 # 7 days
    
    # Database
    DATABASE_URL: str = os.getenv("DATABASE_URL", "sqlite:///./krimekarta.db")
    
    # Gemini AI Studio Key
    GEMINI_API_KEY: str = os.getenv("GEMINI_API_KEY", "")
    
    # CORS
    CORS_ORIGINS: list[str] = [
        "http://localhost:5173",
        "http://localhost:3000",
        "http://127.0.0.1:5173",
        "*"
    ]

    model_config = SettingsConfigDict(case_sensitive=True)

settings = Settings()
