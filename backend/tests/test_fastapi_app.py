import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_root():
    response = client.get("/")
    assert response.status_code == 200
    assert "message" in response.json()

def test_health():
    response = client.get("/api/v1/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "healthy"
    assert "version" in data

def test_login():
    response = client.post(
        "/api/v1/auth/login",
        json={"username": "admin", "password": "admin123"}
    )
    assert response.status_code == 200
    data = response.json()
    assert "access_token" in data
    assert data["role"] == "SUPER_ADMIN"

def test_login_invalid():
    response = client.post(
        "/api/v1/auth/login",
        json={"username": "admin", "password": "wrongpassword"}
    )
    assert response.status_code == 401

def test_predict_hotspots():
    response = client.post(
        "/api/v1/ml/predict-hotspots",
        json={"district": "Bengaluru Central", "time_window_hours": 48}
    )
    assert response.status_code == 200
    data = response.json()
    assert data["district"] == "Bengaluru Central"
    assert len(data["predictions"]) > 0
    assert "cell_id" in data["predictions"][0]

def test_explain_cell():
    response = client.get("/api/v1/ml/explain-cell/CELL-BENGALURU-CENTRAL-001")
    assert response.status_code == 200
    data = response.json()
    assert "shap_contributions" in data

def test_network_graph():
    response = client.get("/api/v1/network/graph?district=Bengaluru%20Central")
    assert response.status_code == 200
    data = response.json()
    assert data["total_nodes"] > 0
    assert data["total_edges"] > 0

def test_intelligence_briefing():
    response = client.post(
        "/api/v1/intelligence/briefing",
        json={"district": "Bengaluru Central", "period": "24h"}
    )
    assert response.status_code == 200
    data = response.json()
    assert "executive_summary" in data
    assert len(data["actionable_directives"]) > 0

def test_crimes_geojson():
    response = client.get("/api/v1/crimes/geojson")
    assert response.status_code == 200
    data = response.json()
    assert data["type"] == "FeatureCollection"
    assert len(data["features"]) > 0
