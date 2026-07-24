Based on your answers, I have a clear picture. Here's my comprehensive implementation plan for the **KrimeKartā Full Stack MVP** with local Docker Compose development.

## Implementation Plan: KrimeKartā Full Stack MVP

### **Phase 1: Infrastructure & Foundation (Week 1)**
**Goal: Running local dev environment with database, backend skeleton, and connected frontend**

1. **Docker Compose Infrastructure**
   - PostgreSQL 16 + PostGIS 3.4 + pgvector 0.7
   - Redis for caching/sessions
   - Backend API (Node.js/Express or Python/FastAPI)
   - Frontend (Vite + React) with hot reload
   - Nginx reverse proxy for local domain routing

2. **Database Schema (PostgreSQL + PostGIS + pgvector)**
   - Core tables: users, roles, districts, police_stations, crime_categories
   - Crime records with PostGIS geometry (POINT for location)
   - Criminal profiles, victims, investigations
   - Evidence metadata, audit logs
   - pgvector columns for AI embeddings (crime embeddings, criminal embeddings)
   - Spatial indexes (GIST) for GIS queries
   - Row-level security policies for RBAC

3. **Backend API Foundation (Node.js/Express + TypeScript)**
   - Project structure: routes, controllers, services, models, middleware
   - JWT authentication (access + refresh tokens)
   - RBAC middleware (ADM, SP, DSP, CI, SHO, CA, IO roles)
   - Prisma ORM with PostGIS extensions
   - Zod validation, centralized error handling
   - API versioning (/api/v1)

4. **Frontend Integration**
   - Replace mock data with API calls (React Query / TanStack Query)
   - Auth context + protected routes
   - Role-based route guards
   - Environment-based API URL configuration

---

### **Phase 2: Core Domain Modules (Week 2-3)**
**Goal: Working Crime Management, Criminal Management, Investigation modules**

5. **Authentication Module (AUTH-001 to AUTH-004)**
   - Login, JWT issuance, refresh tokens, logout, audit logging
   - Role-based route protection on frontend

6. **Crime Management (CRM-001 to CRM-008)**
   - CRUD for crime records with FIR, location (PostGIS), crime type, status
   - Crime timeline, evidence metadata
   - Search/filter by FIR, location, criminal, victim, date, type
   - Soft delete, audit trail

7. **Criminal Management (CRIM-001 to CRIM-005)**
   - Criminal profiles with aliases, associates, previous cases
   - Timeline view, photo management (file upload to local storage/S3)

8. **Investigation Module (INV-001 to INV-005)**
   - Create investigation, assign officer, update status
   - Investigation timeline, case notes

---

### **Phase 3: Dashboard & Analytics (Week 3-4)**
**Goal: Role-based dashboards with real data**

9. **Dashboard Module (DASH-001 to DASH-004)**
   - Executive Dashboard (SP): Crime summary, active cases, AI alerts, district comparison
   - District Dashboard (DSP): District stats, investigation status, crime trends
   - Station Dashboard (SHO): Today's crimes, pending investigations, patrol assignments
   - Live KPI Cards: Real-time counts via WebSocket/polling

10. **Analytics Module (ANA-001 to ANA-004, ANA-006)**
    - Crime trends (time series), district comparison, category analysis, time analysis
    - Investigation statistics
    - Chart.js / Recharts visualizations

---

### **Phase 4: GIS & AI Intelligence (Week 4-5)**
**Goal: Geospatial intelligence and AI-powered insights**

11. **GIS Module (GIS-001 to GIS-006, GIS-008)**
    - Interactive crime map (Leaflet/MapLibre GL + OpenStreetMap)
    - Crime heatmap (PostGIS ST_ClusterKMeans / hexbin)
    - Cluster visualization, radius search
    - District boundaries, police station layers (GeoJSON)
    - Crime density analysis

12. **AI Module (AI-001 to AI-007) - Core MVP**
    - Hotspot detection (DBSCAN on PostGIS + temporal clustering)
    - Patrol recommendation (risk scoring + route optimization)
    - Crime summary generator (LLM via local Ollama or API)
    - District intelligence brief (scheduled generation)
    - Explainable AI (SHAP values for risk factors)
    - Confidence scores, risk ranking
    - Store embeddings in pgvector for similarity search

---

### **Phase 5: Advanced Features & Polish (Week 5-6)**
**Goal: Complete MVP with reports, admin, notifications, search, audit**

13. **Reports Module (REP-001 to REP-006)**
    - Daily/Weekly/Monthly/District Intelligence reports
    - PDF export (pdfmake/jsPDF), Excel export (SheetJS)

14. **Administration (ADM-001 to ADM-006)**
    - User management, role management
    - District/Station/Crime category management
    - Audit logs viewer

15. **Notifications (NOT-001 to NOT-003)**
    - System alerts, investigation updates, AI alerts
    - Real-time via WebSocket (Socket.io)

16. **Search & Audit (SRCH-001, SRCH-002, AUD-001 to AUD-003)**
    - Global search with filters
    - User activity logs, crime change history, login history

17. **Criminal Network Analysis (NET-001 to NET-003)**
    - Relationship graph (Cytoscape.js / React Flow)
    - Associate discovery, case connections

---

### **Phase 6: Testing, Documentation & Deployment Prep (Week 6)**
18. **Testing**: Unit tests (Vitest), Integration tests (Supertest), E2E (Playwright)
19. **API Documentation**: OpenAPI/Swagger
20. **Docker Production Build**: Multi-stage builds, health checks
21. **README & Developer Docs**: Setup, API docs, DB schema, deployment

---

### **Tech Stack Summary**

| Layer | Technology |
|-------|------------|
| **Frontend** | React 18 + Vite + JavaScript (ESM), React Router 6, TanStack Query, Tailwind CSS, Leaflet/MapLibre, Recharts, Cytoscape.js |
| **Backend** | Node.js 20 + Express + TypeScript, Prisma ORM, JWT (jsonwebtoken), Zod, Socket.io |
| **Database** | PostgreSQL 16 + PostGIS 3.4 + pgvector 0.7 (via Docker) |
| **Cache/Queue** | Redis 7 (sessions, caching, bullmq for jobs) |
| **AI/ML** | Python FastAPI microservice (scikit-learn, sentence-transformers) + pgvector, or local Ollama for LLM |
| **File Storage** | Local filesystem (dev) / S3-compatible (prod) |
| **Maps** | OpenStreetMap tiles + MapLibre GL JS |
| **DevOps** | Docker Compose (dev), GitHub Actions (CI) |

---

### **Docker Compose Services (docker-compose.yml)**

```yaml
services:
  postgres:
    image: pgvector/pgvector:pg16
    environment: POSTGRES_DB=krimekarta, POSTGRES_USER=postgres, POSTGRES_PASSWORD=postgres
    volumes: postgres_data:/var/lib/postgresql/data
    ports: ["5432:5432"]
    command: ["postgres", "-c", "shared_preload_libraries=pg_stat_statements"]

  redis:
    image: redis:7-alpine
    ports: ["6379:6379"]

  backend:
    build: ./backend
    ports: ["3001:3001"]
    environment: DATABASE_URL=postgresql://postgres:postgres@postgres:5432/krimekarta, REDIS_URL=redis://redis:6379, JWT_SECRET=dev-secret
    depends_on: [postgres, redis]
    volumes: [./backend:/app, /app/node_modules]

  frontend:
    build: ./frontend
    ports: ["5173:5173"]
    environment: VITE_API_URL=http://localhost:3001/api/v1
    volumes: [./frontend:/app, /app/node_modules]

  ai-service:
    build: ./ai-service
    ports: ["8000:8000"]
    environment: DATABASE_URL=postgresql://postgres:postgres@postgres:5432/krimekarta
    depends_on: [postgres]
    volumes: [./ai-service:/app]

  nginx:
    image: nginx:alpine
    ports: ["80:80", "443:443"]
    volumes: [./nginx.conf:/etc/nginx/nginx.conf:ro]
    depends_on: [frontend, backend]
```

---

### **Immediate Next Steps (Ready to Execute)**

1. **Create project structure** with backend/, frontend/, ai-service/, docker-compose.yml
2. **Initialize PostgreSQL schema** with Prisma + PostGIS extensions
3. **Build Auth API** + connect frontend login page
4. **Implement Crime CRUD** + connect NationalCrimeRecordsDatabase page
5. **Build GIS map** + connect GeospatialIntelligenceMap page
6. **Build AI service** + connect AiPatrolRecommendationCenter page

---

### **Questions Before Starting**

1. **Backend Language Preference**: Node.js/Express + TypeScript (as per docs) or Python/FastAPI? (Docs specify Node.js/Express)
2. **AI Service**: Local Python microservice (scikit-learn + sentence-transformers) or integrate Ollama for LLM summaries?
3. **Map Tiles**: OpenStreetMap (free) or Mapbox/MapTiler (requires token)?
4. **File Uploads**: Local filesystem for dev, S3-compatible (MinIO) for staging?

Once you confirm, I'll switch to Act Mode and start implementing Phase 1.