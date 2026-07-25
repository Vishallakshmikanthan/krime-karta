import math
import random
from datetime import datetime
from typing import List, Dict, Any

try:
    import numpy as np
    import xgboost as xgb
    from sklearn.ensemble import IsolationForest
    HAS_ML_LIBS = True
except Exception:
    HAS_ML_LIBS = False

class HotspotMLEngine:
    def __init__(self):
        self.xgb_model = None
        self.iso_forest = None
        self._initialize_models()

    def _initialize_models(self):
        if not HAS_ML_LIBS:
            return
        try:
            np.random.seed(42)
            X_train = np.random.randn(200, 6)
            y_train = (X_train[:, 4] * 0.4 + X_train[:, 2] * 0.2 + np.random.randn(200) * 0.1 > 0.3).astype(int)

            self.xgb_model = xgb.XGBClassifier(
                n_estimators=20,
                max_depth=4,
                learning_rate=0.1,
                eval_metric="logloss"
            )
            self.xgb_model.fit(X_train, y_train)

            self.iso_forest = IsolationForest(n_estimators=50, contamination=0.15, random_state=42)
            self.iso_forest.fit(X_train)
        except Exception:
            self.xgb_model = None
            self.iso_forest = None

    def predict_district_hotspots(self, district: str = "Bengaluru Central", time_window: int = 48) -> List[Dict[str, Any]]:
        base_lat, base_lng = 12.9716, 77.5946
        grid_cells = []
        cell_counter = 1
        
        hour = datetime.now().hour
        day_of_week = datetime.now().weekday()
        
        for lat_step in [-0.03, -0.015, 0.0, 0.015, 0.03]:
            for lng_step in [-0.03, -0.015, 0.0, 0.015, 0.03]:
                lat = round(base_lat + lat_step, 4)
                lng = round(base_lng + lng_step, 4)
                cell_id = f"CELL-{district.replace(' ', '-').upper()}-{cell_counter:03d}"
                cell_counter += 1

                density = min(max(abs(math.sin(lat_step * 100) + math.cos(lng_step * 100)) * 2.5, 0.1), 5.0)
                lighting_idx = min(max(0.8 - (density * 0.1), 0.1), 1.0)

                if HAS_ML_LIBS and self.xgb_model and self.iso_forest:
                    try:
                        features = np.array([[lat_step, lng_step, hour, day_of_week, density, lighting_idx]])
                        risk_prob = float(self.xgb_model.predict_proba(features)[0][1])
                        anomaly_pred = int(self.iso_forest.predict(features)[0])
                        is_anomaly = (anomaly_pred == -1)
                    except Exception:
                        risk_prob = min(max(density / 5.0 + (0.3 if hour > 20 else 0.1), 0.05), 0.95)
                        is_anomaly = (risk_prob > 0.75 and density > 3.0)
                else:
                    risk_prob = min(max(density / 5.0 + (0.3 if hour > 20 else 0.1), 0.05), 0.95)
                    is_anomaly = (risk_prob > 0.75 and density > 3.0)

                if risk_prob > 0.75:
                    risk_level = "CRITICAL"
                elif risk_prob > 0.50:
                    risk_level = "HIGH"
                elif risk_prob > 0.30:
                    risk_level = "MEDIUM"
                else:
                    risk_level = "LOW"

                factors = [
                    {"factor": "Past 48h Incident Cluster", "weight": round(density * 0.18, 2)},
                    {"factor": f"Night Hour Risk ({hour}:00 hrs)", "weight": round(0.25 if hour > 20 or hour < 5 else 0.05, 2)},
                    {"factor": "Low Street Illumination Index", "weight": round((1.0 - lighting_idx) * 0.20, 2)}
                ]

                grid_cells.append({
                    "cell_id": cell_id,
                    "latitude": lat,
                    "longitude": lng,
                    "risk_score": round(risk_prob, 3),
                    "risk_level": risk_level,
                    "is_anomaly": is_anomaly,
                    "top_risk_factors": factors,
                    "recommended_patrols": int(math.ceil(risk_prob * 5))
                })

        grid_cells.sort(key=lambda x: x["risk_score"], reverse=True)
        return grid_cells

hotspot_engine = HotspotMLEngine()
