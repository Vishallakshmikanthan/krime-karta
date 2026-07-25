# 01 - KrimeKartā Project Structure & Technical Architecture

> **Document Path**: `crime_intelligence_docs/01_PROJECT_STRUCTURE_AND_ARCHITECTURE.md`  
> **Target Project**: `krime-karta`  
> **Platform Description**: AI-Powered Crime Intelligence, Geospatial Analytics & Patrol Decision Support Platform

---

## 1. Executive System Overview

**KrimeKartā** is built as an enterprise-grade AI decision support system for law enforcement agencies (Superintendents of Police, Deputy Superintendents, Circle Inspectors, Crime Intelligence Analysts, and State Crime Records Bureau officials).

The platform transforms raw historical crime records (CCTNS filings, FIR data, monthly State Crime Records Bureau PDF reviews, and geospatial logs) into actionable operational intelligence:
- **Spatial Intelligence**: Heatmap rendering, polygon geofencing, dangerous zone identification, route risk calculation.
- **Predictive Resource Allocation**: AI patrol route generation, shift recommendation, risk score calculation.
- **Entity & Network Intelligence**: Rowdy sheet monitoring, criminal relationship graphs, gang nexus visualization.
- **Automated Intelligence Briefings**: Real-time operational dashboarding and executive reporting.

---

## 2. Workspace Directory Hierarchy & Component Analysis

```
krime-karta/
├── backend/                              # FastAPI Python Backend Service
│   ├── app/
│   │   ├── api/
│   │   │   ├── v1/
│   │   │   │   └── router.py             # API Endpoint Routing & Handlers
│   │   ├── config.py                     # Environment & Server Settings
│   │   ├── db/                           # Database Connections & Session Management
│   │   ├── models/                       # SQLAlchemy Database Schemas
│   │   ├── schemas/                      # Pydantic Request/Response Schemas
│   │   ├── services/                     # ML Inference, Patrol Calculation & Analytics
│   │   └── main.py                       # FastAPI Application Entry Point
│   ├── Dockerfile                        # Backend Container Deployment
│   ├── requirements.txt                  # Python Dependencies (FastAPI, Uvicorn, SQLAlchemy, etc.)
│   └── package.json                      # Backend Script Runner (Port 3002)
├── frontend/                             # Vite + React + Tailwind CSS Web Application
│   ├── public/                           # Static Web Assets & Favicons
│   ├── src/
│   │   ├── assets/                       # Images, Icons & Media Assets
│   │   ├── components/
│   │   │   ├── layout/                   # Header, Sidebar, Navigation Layout
│   │   │   ├── maps/                     # Geospatial Map Components (Leaflet/Mapbox/Custom Canvas)
│   │   │   └── graphs/                   # Network Relationship & Charting Components
│   │   ├── hooks/                        # Custom React Hooks (Auth, Geolocation, Analytics)
│   │   ├── lib/                          # Utility Helpers, API Axios Client, Formatting
│   │   ├── pages/                        # Operational Application Views
│   │   │   ├── DashboardOverview.jsx                      # Executive Command Summary
│   │   │   ├── GeospatialIntelligenceMap.jsx              # Spatial Heatmaps & Geofences
│   │   │   ├── AiPatrolRecommendationCenter.jsx           # Patrol Route Planning & Shift Deployment
│   │   │   ├── CriminalIntelligenceDirectory.jsx          # Rowdy Sheets, Gangs & Dons Database
│   │   │   ├── AdvancedNetworkIntelligenceAnalysis.jsx   # Criminal Relationship Graphs
│   │   │   ├── StrategicAnalytics.jsx                     # Crime Trend Analysis & Predictive Charts
│   │   │   ├── NationalCrimeRecordsDatabase.jsx           # CCTNS Search & FIR Archives
│   │   │   ├── CommandCenterOperations.jsx                # Real-Time Incident Dispatching
│   │   │   ├── OfficialLogin.jsx                          # Secure Police Single Sign-On
│   │   │   ├── TwoFaSecurityVerification.jsx              # 2FA Authentication Challenge
│   │   │   └── SecureOfficerPortal.jsx                    # Officer Role & Access Control
│   │   ├── services/                     # Frontend API Client Services
│   │   ├── store/                        # State Management (Zustand/Redux Context)
│   │   ├── types/                        # TypeScript / JSDoc Schema Definitions
│   │   ├── App.jsx                       # Master Routing & Component Shell
│   │   └── index.css                     # Tailwind CSS & Modern Dark Mode Design System
│   ├── Dockerfile                        # Frontend Nginx Container Deployment
│   ├── vite.config.js                    # Vite Build Pipeline Configuration
│   ├── tailwind.config.js                # Custom Police Dark Theme & Palette Config
│   └── package.json                      # Node Dependencies & Scripts
├── crime-docs/                           # Official Karnataka State Crime Data Files
│   ├── CRIME REVIEW - JANUARY - 2026.pdf
│   ├── CRIME REVIEW - FEBRUARY - 2026.pdf
│   ├── CRIME REVIEW MARCH - 2026.pdf
│   ├── CRIME REVIEW - APRIL - 2026.pdf
│   ├── CRIME REVIEW - MAY - 2026.pdf
│   ├── CRIME REVIEW - JUNE - 2026.pdf
│   ├── crime-review-december-modified-2025.pdf
│   ├── crime_review_for_the_month_of_december_2025_9.csv
│   ├── ka-ipc-crimes-2025.csv
│   ├── ka-sll-crimes-2025.csv
│   ├── ka-crimes-women-children-scssts.csv
│   └── archive.zip                       # Multi-year historical crime dataset (2021-2024)
├── docs/                                 # Documentation & Architectural Plans
├── docker-compose.yml                    # Multi-container Deployment Manifest
├── render.yaml                           # Render Cloud Infrastructure as Code
└── README.md                             # Production Readme & Launch Guide
```

---

## 3. Technology Stack & Operational Architecture

| Architectural Layer | Technology Selected | Purpose & Responsibility |
| :--- | :--- | :--- |
| **Frontend Framework** | **React 18 + Vite** | Fast rendering, modular component hierarchy, HMR during development. |
| **Styling & Theme** | **Tailwind CSS + Vanilla CSS** | Custom Law Enforcement dark aesthetics (Midnight navy `#0B132B`, Tactical Cyan `#00E5FF`, Danger Amber/Red `#FF0055`). |
| **Geospatial Mapping** | **Leaflet / Mapbox GL + React-Leaflet** | Interactive map layers, heatmaps, polygon geofences, station markers, patrol path polylines. |
| **Network Visualization** | **Vis-Network / Cytoscape / D3** | Interactive node-edge graphs linking gang leaders (Dons), associates, rowdies, fronts, and illegal activities. |
| **Backend API Engine** | **FastAPI (Python 3.11+)** | High-performance asynchronous REST endpoints, automatic OpenAPI documentation, schema validation via Pydantic. |
| **Database & ORM** | **PostgreSQL + PostGIS / SQLite (SQLAlchemy)** | Spatial query processing, ST_Contains geofencing, temporal crime aggregation. |
| **Data Ingestion & Processing** | **Pandas, PyPDF, NumPy** | Automated ingestion of CCTNS CSV records and State Crime Records Bureau monthly PDF reviews. |
| **Containerization & Hosting** | **Docker, Docker-Compose, Render** | Containerized microservices deployment with production Nginx reverse proxy. |

---

## 4. Primary Operational Modules in KrimeKartā

### 1. Executive Dashboard Overview (`DashboardOverview.jsx`)
- High-level KPI widgets: Active Incidents, High-Risk Geofences, Total Rowdy Sheeted Offenders, Active Patrol Units.
- Real-time crime feed, district threat index meters, and recent emergency dispatches.

### 2. Geospatial Intelligence Map (`GeospatialIntelligenceMap.jsx`)
- Multi-layer map visualization: Crime Heatmap, Geofenced Red Zones, Police Station Jurisdictions, Live Patrol Vehicle GPS tracks.
- Dynamic filtering by Crime Category (Murder, Dacoity, Cyber Crime, NDPS, POCSO), Time Window, and Severity Index.

### 3. AI Patrol Recommendation Center (`AiPatrolRecommendationCenter.jsx`)
- AI-driven patrol route planner: Accepts parameters (Shift time, available vehicles, beat boundaries) and outputs optimized patrol routes covering high-risk cells.
- Risk reduction score calculator and patrol coverage efficiency metrics.

### 4. Criminal Intelligence Directory (`CriminalIntelligenceDirectory.jsx`)
- Comprehensive offender registry: Rowdy sheets, known gang affiliations, crime history, active bail/parole status, last known whereabouts.
- Searchable filters by crime head (Extortion, Dacoity, Drug Trafficking, Land Grabbing) and police station jurisdiction.

### 5. Advanced Network Intelligence Analysis (`AdvancedNetworkIntelligenceAnalysis.jsx`)
- Visual graph analyzer: Map syndicate structures (Dons -> Lieutenants -> Rowdies -> Local Foot-soldiers).
- Centrality metric calculation to identify key nexus nodes and money laundering fronts.

### 6. Strategic Analytics & Forecasting (`StrategicAnalytics.jsx`)
- Longitudinal trend charting: Compare monthly crime rates (2021–2026), season-over-season variations, and crime velocity.
- Predictive forecasting for upcoming high-risk periods (festivals, elections, political rallies).

### 7. National & State Crime Records Database (`NationalCrimeRecordsDatabase.jsx`)
- CCTNS integrated search interface: Query FIRs, chargesheets, stolen vehicle registries, missing person logs, and SAKALA service tickets.

### 8. Command Center Operations (`CommandCenterOperations.jsx`)
- Live tactical dispatch board: Emergency call monitoring (112 alerts), unit assignment, rapid response tracking, and incident escalation controls.

---

## 5. Architectural Data Flow & CCTNS Integration Pipeline

```mermaid
graph TD
    A["Raw CCTNS FIR Data & SCRB Monthly Reviews (PDF/CSV)"] -->|Data Ingestion Script| B["FastAPI Data Cleaning & Transformation Pipeline"]
    B -->|Spatial Processing & Geocoding| C["PostgreSQL / PostGIS Spatial Database"]
    C -->|ST_ClusterDBSCAN & Spatial Risk Scoring| D["AI Risk & Patrol Engine"]
    D -->|REST API (FastAPI v1 Router)| E["React Frontend Dashboard"]
    E --> F["Geospatial Map (Heatmaps & Geofences)"]
    E --> G["AI Patrol Route Generator"]
    E --> H["Offender & Network Graph Visualizer"]
    E --> I["Command Center Dispatch Board"]
```

---
*Proceed to Section 02 for the complete empirical analysis of Karnataka's crime trajectory from 2021 to 2026.*
