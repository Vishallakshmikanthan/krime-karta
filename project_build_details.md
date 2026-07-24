📚 KrimeKartā Engineering Documentation Suite

Version: 1.0

Documentation Standard: Enterprise

Estimated Pages: 180–250+

Diagrams: 70+

Target Audience

Developers
UI/UX Designers
ML Engineers
DevOps Engineers
Judges
Investors
Government Reviewers
Documentation Structure
krimekarta/

docs/

├── README.md
│
├── 00-Project/
│   ├── Vision.md
│   ├── Problem-Statement.md
│   ├── Objectives.md
│   ├── Scope.md
│   ├── Features.md
│   ├── Functional-Requirements.md
│   ├── NonFunctional-Requirements.md
│   ├── User-Personas.md
│   ├── User-Flows.md
│   └── Glossary.md
│
├── 01-Architecture/
│   ├── High-Level-Architecture.md
│   ├── System-Architecture.md
│   ├── Microservices.md
│   ├── Component-Architecture.md
│   ├── Deployment-Architecture.md
│   ├── Event-Driven-Architecture.md
│   ├── Data-Flow.md
│   ├── Request-Lifecycle.md
│   ├── Sequence-Diagrams.md
│   └── Technology-Decisions.md
│
├── 02-Frontend/
│   ├── Frontend-Architecture.md
│   ├── Routing.md
│   ├── State-Management.md
│   ├── Folder-Structure.md
│   ├── Component-Library.md
│   ├── Design-System.md
│   ├── Theme.md
│   ├── Authentication-Flow.md
│   ├── Error-Handling.md
│   ├── Forms.md
│   ├── Maps.md
│   └── Accessibility.md
│
├── 03-Backend/
│   ├── Backend-Architecture.md
│   ├── FastAPI-Structure.md
│   ├── Services.md
│   ├── Dependency-Injection.md
│   ├── Repository-Pattern.md
│   ├── Validation.md
│   ├── Exception-Handling.md
│   ├── Logging.md
│   ├── Configuration.md
│   └── Background-Tasks.md
│
├── 04-Database/
│   ├── ER-Diagram.md
│   ├── PostgreSQL.md
│   ├── PostGIS.md
│   ├── Tables.md
│   ├── Relationships.md
│   ├── Indexing.md
│   ├── Constraints.md
│   ├── Views.md
│   ├── MaterializedViews.md
│   ├── Backup.md
│   └── Migration.md
│
├── 05-API/
│   ├── API-Overview.md
│   ├── Authentication.md
│   ├── Users.md
│   ├── Crimes.md
│   ├── Criminals.md
│   ├── Victims.md
│   ├── Patrol.md
│   ├── Reports.md
│   ├── Analytics.md
│   ├── AI.md
│   ├── GIS.md
│   ├── Notifications.md
│   └── Errors.md
│
├── 06-AI/
│   ├── AI-Architecture.md
│   ├── LLM.md
│   ├── Prompt-Engineering.md
│   ├── RAG.md
│   ├── Explainable-AI.md
│   ├── AI-Reports.md
│   ├── AI-Assistant.md
│   ├── AI-Safety.md
│   └── Evaluation.md
│
├── 07-Machine-Learning/
│   ├── ML-Pipeline.md
│   ├── Feature-Engineering.md
│   ├── Dataset.md
│   ├── Hotspot-Prediction.md
│   ├── Anomaly-Detection.md
│   ├── Model-Training.md
│   ├── Model-Versioning.md
│   ├── SHAP.md
│   ├── Evaluation.md
│   └── Inference.md
│
├── 08-GIS/
│   ├── GIS-Architecture.md
│   ├── PostGIS.md
│   ├── Heatmaps.md
│   ├── Clustering.md
│   ├── Layers.md
│   ├── GeospatialQueries.md
│   ├── Patrol-Routing.md
│   └── Map-Performance.md
│
├── 09-Security/
│   ├── Authentication.md
│   ├── Authorization.md
│   ├── RBAC.md
│   ├── JWT.md
│   ├── Audit-Logs.md
│   ├── Encryption.md
│   ├── Rate-Limiting.md
│   ├── OWASP.md
│   └── Threat-Model.md
│
├── 10-DevOps/
│   ├── Docker.md
│   ├── DockerCompose.md
│   ├── GitHubActions.md
│   ├── CI-CD.md
│   ├── Environments.md
│   ├── Monitoring.md
│   ├── Logging.md
│   ├── Prometheus.md
│   ├── Grafana.md
│   └── Deployment.md
│
├── 11-Testing/
│   ├── UnitTests.md
│   ├── IntegrationTests.md
│   ├── API-Tests.md
│   ├── UI-Tests.md
│   ├── Performance.md
│   ├── Security.md
│   └── LoadTesting.md
│
├── 12-Development/
│   ├── CodingStandards.md
│   ├── GitWorkflow.md
│   ├── BranchStrategy.md
│   ├── SprintPlan.md
│   ├── Roadmap.md
│   ├── Milestones.md
│   ├── TechDebt.md
│   └── Contributing.md
│
├── 13-Diagrams/
│   ├── Architecture.mmd
│   ├── ERD.mmd
│   ├── LoginFlow.mmd
│   ├── CrimeFlow.mmd
│   ├── PatrolFlow.mmd
│   ├── AIFlow.mmd
│   ├── Deployment.mmd
│   ├── SequenceLogin.mmd
│   ├── SequenceCrime.mmd
│   ├── SequenceReport.mmd
│   └── ...
│
└── ADR/
    ├── ADR-001-TechStack.md
    ├── ADR-002-Database.md
    ├── ADR-003-AI.md
    ├── ADR-004-Authentication.md
    └── ADR-005-GIS.md
Technologies We'll Standardize On
Frontend
React 19
TypeScript
Vite
Tailwind CSS v4
shadcn/ui
TanStack Query
Zustand
React Hook Form
Zod
Leaflet
Recharts
Sigma.js
Backend
FastAPI
SQLAlchemy 2.0
Alembic
Pydantic v2
JWT
Dependency Injection
Repository Pattern
Service Layer
Database
PostgreSQL
PostGIS
pgvector (future-ready for semantic search)
AI
Gemini 2.5 Flash
XGBoost
Isolation Forest
SHAP
DevOps
Docker
Docker Compose
GitHub Actions
Render
Vercel
Supabase
Architecture Philosophy

We'll follow Clean Architecture with Domain-Driven Design (DDD) principles.

Presentation Layer
        │
Application Layer
        │
Domain Layer
        │
Infrastructure Layer

Every module will be isolated, testable, and scalable.

Documentation Quality

Every document will include:

Purpose
Scope
Responsibilities
Architecture diagrams (Mermaid)
Data flow
Sequence diagrams
Folder structure
API examples
Best practices
Security considerations
Future improvements
References
Deliverables

By the end, you'll have:

A production-grade engineering documentation suite suitable for GitHub.
A clear implementation blueprint for frontend, backend, AI, GIS, and infrastructure.
Consistent architecture and coding standards across the project.
Documentation that supports hackathon judging today and future development afterward.
How we'll build it

Rather than generating a huge document all at once, we'll create it chapter by chapter in a logical order so each part builds on the previous one:

Project Foundation (vision, scope, requirements)
System Architecture
Database Design
Backend Architecture
Frontend Architecture
API Specifications
AI & Machine Learning
GIS & Analytics
Security
DevOps & Deployment
Testing
Development Standards & Roadmap

📘 Phase 1 — Product Foundation
────────────────────────────────────
00. Vision
01. Problem Statement
02. Objectives
03. Scope
04. Features
05. Functional Requirements
06. Non Functional Requirements
07. User Personas
08. User Journey

📘 Phase 2 — Architecture
────────────────────────────────────
09. High Level Architecture
10. System Architecture
11. Technology Decisions
12. Component Architecture
13. Deployment Architecture

📘 Phase 3 — Database
────────────────────────────────────
14. ER Diagram
15. Database Schema
16. Relationships
17. Indexes
18. Constraints

📘 Phase 4 — Backend
────────────────────────────────────
19. FastAPI Architecture
20. Services
21. APIs
22. Authentication
23. Background Jobs

📘 Phase 5 — Frontend
────────────────────────────────────
24. Frontend Architecture
25. Routing
26. State Management
27. Components

📘 Phase 6 — AI
────────────────────────────────────
28. AI Architecture
29. ML Pipeline
30. Prompt Engineering
31. Hotspot Engine
32. Patrol Recommendation

📘 Phase 7 — DevOps
────────────────────────────────────
33. Docker
34. CI/CD
35. Deployment
36. Monitoring

📘 Phase 8 — Testing
────────────────────────────────────
37. Unit Testing
38. Integration Testing
39. Performance
40. Security

# docs/00-Project/00-Vision
# KrimeKartā

## AI-Powered Crime Intelligence & Patrol Decision Support Platform

---

# Vision Statement

KrimeKartā aims to modernize crime intelligence and operational decision-making for the Karnataka Police by transforming fragmented crime records into actionable, explainable, and data-driven intelligence.

The platform is designed as a secure internal command system that assists law enforcement officers in identifying crime patterns, allocating patrol resources, monitoring investigations, and generating operational intelligence through advanced analytics, geospatial technologies, and artificial intelligence.

Rather than replacing human expertise, KrimeKartā augments decision-making by providing officers with timely recommendations, visual insights, and explainable AI outputs that improve situational awareness and operational efficiency.

---

# Mission

To provide Karnataka Police with a modern digital intelligence platform that enables proactive policing through reliable data, geospatial intelligence, machine learning, and secure enterprise software.

---

# Long-Term Vision

KrimeKartā is envisioned as the unified digital intelligence platform for policing operations across Karnataka.

The platform should evolve beyond crime record management into an operational ecosystem supporting:

- Crime Intelligence
- Patrol Operations
- Criminal Investigation
- Resource Allocation
- AI-Assisted Decision Support
- Geospatial Intelligence
- Predictive Analytics
- Operational Reporting

The architecture should support future statewide deployment while maintaining high standards of security, scalability, and reliability.

---

# Product Goals

## Operational Goals

- Improve situational awareness for officers.
- Reduce time spent manually analyzing crime data.
- Support evidence-based patrol planning.
- Improve district-level operational visibility.
- Detect emerging crime hotspots.
- Provide explainable AI recommendations.
- Automate intelligence report generation.

---

## Technical Goals

- Modular architecture.
- Enterprise-grade security.
- Horizontally scalable backend.
- Production-ready API design.
- Clean and maintainable codebase.
- Comprehensive documentation.
- Cloud-native deployment.
- High test coverage.

---

## AI Goals

The AI system must function as a decision-support assistant rather than an autonomous decision-maker.

Every AI-generated recommendation should include:

- Confidence score
- Contributing factors
- Supporting historical evidence
- Human-readable explanation

The platform must always allow officers to exercise final judgment.

---

# Core Principles

## 1. Human-Centered Intelligence

The platform assists officers rather than replacing them.

Human expertise always takes precedence over AI recommendations.

---

## 2. Explainability

Every prediction must clearly communicate:

- Why the recommendation was generated
- Which factors influenced it
- How confident the system is
- What historical evidence supports it

Black-box predictions are unacceptable.

---

## 3. Security First

The platform is designed exclusively for authorized law enforcement personnel.

Security considerations influence every architectural decision.

---

## 4. Reliability

Mission-critical software must remain stable under operational load.

The platform prioritizes reliability over unnecessary feature complexity.

---

## 5. Simplicity

Complex analytical capabilities should be presented through intuitive user interfaces that reduce cognitive load for officers.

---

## 6. Data Integrity

Crime records represent official government data.

Accuracy, traceability, auditability, and consistency are fundamental requirements.

---

# Success Metrics

The success of KrimeKartā will be evaluated through measurable operational outcomes rather than solely technical metrics.

Examples include:

- Reduced hotspot identification time.
- Faster patrol planning.
- Reduced manual report preparation.
- Improved operational visibility.
- Increased data quality.
- Improved officer productivity.
- Higher adoption across departments.

---

# Intended Users

Primary Users

- Superintendent of Police (SP)
- Deputy Superintendent of Police (DSP)
- Circle Inspectors
- Station House Officers (SHO)
- Crime Analysts
- Intelligence Officers

Secondary Users

- Karnataka State Crime Records Bureau
- Administrative Officers
- Government Decision Makers

---

# Out of Scope (Version 1)

The following capabilities are intentionally excluded from the initial production release:

- Live CCTV analytics
- Facial recognition
- Biometric identification
- Drone surveillance
- Real-time GPS tracking of officers
- Mobile patrol application
- Public complaint portal
- Emergency 112 integration
- Social media monitoring
- IoT sensor integration

These may be considered for future versions after the core platform has matured.

---

# Product Philosophy

KrimeKartā is not a crime prediction system.

It is a Crime Intelligence and Operational Decision Support Platform.

The system provides evidence-based recommendations that enhance human decision-making while preserving accountability, transparency, and operational trust.

---

# Version Information

Product Name:
KrimeKartā

Version:
1.0

Document Version:
1.0

Status:
Draft

Prepared For:
Karnataka Police Department

Prepared By:
KrimeKartā Engineering Team
# docs/00-Project/01-Problem-Statement.md

# Problem Statement

**Document Version:** 1.0

**Status:** Draft

**Project:** KrimeKartā – AI-Powered Crime Intelligence & Patrol Decision Support Platform

---

# 1. Introduction

Law enforcement agencies generate enormous volumes of operational data every day through First Information Reports (FIRs), investigation reports, patrol logs, criminal records, evidence, and district-level intelligence.

Although this information is valuable, much of it remains underutilized due to fragmented systems, manual analysis, and the absence of integrated intelligence platforms.

Police officers often rely on experience, spreadsheets, paper reports, and isolated software systems to make operational decisions.

As the amount of crime data continues to grow, traditional methods become increasingly inefficient.

KrimeKartā addresses this problem by providing a centralized Crime Intelligence Platform that transforms historical crime data into actionable operational insights using Artificial Intelligence, Machine Learning, Geospatial Analytics, and Explainable Decision Support.

---

# 2. Current Situation

Today, a typical crime analysis workflow follows this process.

Crime Occurs

↓

FIR Registration

↓

Crime Record Stored

↓

Manual Compilation

↓

Excel Reports

↓

District Analysis

↓

Officer Discussion

↓

Patrol Planning

↓

Operational Decision

↓

Action

This workflow depends heavily on manual effort and institutional knowledge.

---

# 3. Existing Challenges

## 3.1 Fragmented Data

Crime information is distributed across multiple police stations and administrative systems.

Officers frequently need to collect information from several sources before understanding the complete situation.

Problems:

- Duplicate records
- Inconsistent formats
- Difficult data sharing
- Delayed information flow

---

## 3.2 Manual Crime Analysis

Crime trend analysis is performed manually using spreadsheets and reports.

This requires significant officer time.

Problems:

- Slow analysis
- Human errors
- Limited scalability
- Difficult comparisons

---

## 3.3 Delayed Hotspot Identification

Crime hotspots are often identified only after patterns become obvious.

This delays proactive policing.

Problems:

- Increased response time
- Missed early warning signals
- Reactive operations

---

## 3.4 Patrol Planning Challenges

Patrol allocation depends largely on experience rather than analytical evidence.

Current limitations include:

- Uneven patrol distribution
- Resource wastage
- Inconsistent planning
- Limited operational visibility

---

## 3.5 Limited Visualization

Crime data is usually presented in tables or reports.

Relationships between crimes, criminals, locations, and time are difficult to understand.

Missing capabilities:

- Interactive maps
- Network visualization
- Trend analysis
- Timeline analysis

---

## 3.6 Report Preparation

Senior officers spend considerable time preparing:

- Daily reports
- Weekly reports
- Monthly reports
- Intelligence summaries

These reports often repeat similar information with updated statistics.

---

## 3.7 Lack of Explainable Intelligence

Current systems provide statistics but rarely provide actionable explanations.

Questions such as

"Why is this area becoming high risk?"

or

"What factors contributed to this recommendation?"

remain unanswered.

---

# 4. Root Cause Analysis

## Data Problems

- Multiple disconnected systems
- Manual data entry
- Lack of integration
- Inconsistent validation

---

## Operational Problems

- Heavy dependence on manual analysis
- Limited automation
- Static reporting
- Delayed decision making

---

## Technical Problems

- Legacy software
- Limited GIS capabilities
- No predictive analytics
- Minimal AI adoption

---

# 5. Stakeholder Pain Points

## Superintendent of Police (SP)

Needs:

- District overview
- Daily intelligence
- Emerging hotspots
- Patrol recommendations

Pain Points:

- Too much manual reporting
- Limited operational visibility
- Delayed intelligence

---

## Deputy Superintendent (DSP)

Needs:

- Crime trends
- Resource planning
- Investigation monitoring

Pain Points:

- Difficult district comparison
- Limited analytics
- Slow reporting

---

## Circle Inspector

Needs:

- Station performance
- Active investigations
- Patrol management

Pain Points:

- Manual workload
- Fragmented information

---

## Crime Analyst

Needs:

- Historical datasets
- Analytics tools
- Trend visualization

Pain Points:

- Manual processing
- Poor visualization
- Limited analytical capabilities

---

# 6. Business Impact

Without modernization:

- Longer investigation cycles
- Increased reporting effort
- Delayed operational decisions
- Poor situational awareness
- Inefficient patrol allocation
- Reduced analytical capability

---

# 7. Opportunity Analysis

Modern technologies provide an opportunity to transform policing operations.

The following technologies can significantly improve operational efficiency.

- Geospatial Intelligence
- Machine Learning
- Explainable AI
- Interactive Dashboards
- Automated Reporting
- Data Visualization
- Predictive Analytics

Together these technologies enable evidence-based operational planning.

---

# 8. Proposed Solution

KrimeKartā introduces a unified Crime Intelligence Platform.

The platform integrates

- Crime Records
- Criminal Information
- GIS Mapping
- Historical Analytics
- AI Recommendations
- Patrol Planning
- Intelligence Reporting

into a single enterprise application.

Rather than replacing officers, KrimeKartā augments human decision-making by providing data-driven operational intelligence.

---

# 9. Solution Benefits

Operational Benefits

✔ Faster hotspot identification

✔ Better patrol allocation

✔ Improved district monitoring

✔ Automated intelligence reports

✔ Better crime visualization

✔ Reduced manual work

Technical Benefits

✔ Scalable architecture

✔ Centralized database

✔ Modular APIs

✔ Explainable AI

✔ Enterprise security

✔ Cloud-ready deployment

---

# 10. Expected Outcomes

Short-Term

- Unified crime data
- Interactive dashboards
- Automated reporting
- Crime heatmaps
- Patrol recommendations

Medium-Term

- Improved operational efficiency
- Better resource allocation
- Faster intelligence generation

Long-Term

- Statewide deployment
- AI-assisted policing
- Data-driven governance
- Modern digital policing ecosystem

---

# 11. Success Criteria

The project will be considered successful if it achieves the following measurable outcomes.

Operational

- Reduced hotspot identification time
- Faster patrol planning
- Reduced report preparation effort
- Improved officer productivity

Technical

- High system availability
- Secure access control
- Low API response times
- Scalable deployment

User Experience

- Easy-to-use interface
- Reduced cognitive load
- Better visualization
- Positive officer adoption

---

# 12. Problem Summary

Current crime analysis processes rely heavily on fragmented data, manual reporting, and reactive decision-making.

KrimeKartā addresses these limitations by providing a centralized, AI-assisted Crime Intelligence Platform that enables proactive policing through geospatial analytics, explainable machine learning, and operational decision support while keeping officers in full control of final decisions.

---

# Document Status

Version: 1.0

Status: Draft

# docs/00-Project/02-Objectives.md

# Objectives

**Document Version:** 1.0

**Status:** Draft

**Project:** KrimeKartā – AI-Powered Crime Intelligence & Patrol Decision Support Platform

---

# 1. Purpose

This document defines the strategic, operational, technical, and measurable objectives of the KrimeKartā platform.

These objectives guide product planning, architecture, implementation, testing, deployment, and future enhancements.

Every feature developed for KrimeKartā should contribute to one or more objectives defined in this document.

---

# 2. Vision Alignment

KrimeKartā aims to modernize crime intelligence by enabling law enforcement agencies to make informed, evidence-based operational decisions through a unified digital platform.

The system is designed to improve operational efficiency while ensuring transparency, security, explainability, and human oversight.

---

# 3. Strategic Objectives

## SO-01 — Centralize Crime Intelligence

Develop a single enterprise platform that consolidates crime records, criminal profiles, investigations, patrol recommendations, analytics, and reports.

### Expected Outcome

- One unified system
- Elimination of fragmented data
- Consistent operational visibility

---

## SO-02 — Improve Decision Making

Provide officers with timely, data-driven insights rather than requiring manual analysis.

### Expected Outcome

- Faster operational decisions
- Reduced manual effort
- Better situational awareness

---

## SO-03 — Promote Proactive Policing

Enable law enforcement agencies to identify crime trends and emerging hotspots before they become significant operational challenges.

### Expected Outcome

- Early hotspot identification
- Evidence-based patrol planning
- Improved resource utilization

---

## SO-04 — Enhance Operational Visibility

Provide district-level and statewide dashboards for senior officers.

### Expected Outcome

- Better monitoring
- District comparisons
- Operational transparency

---

# 4. Business Objectives

## BO-01

Reduce manual report generation.

---

## BO-02

Improve officer productivity.

---

## BO-03

Reduce time spent analyzing crime records.

---

## BO-04

Provide executive-level operational dashboards.

---

## BO-05

Support informed allocation of patrol resources.

---

# 5. Functional Objectives

The platform shall provide:

✓ Crime Record Management

✓ Criminal Management

✓ Victim Management

✓ Case Tracking

✓ GIS Crime Mapping

✓ Heatmaps

✓ AI Hotspot Analysis

✓ Patrol Recommendation Engine

✓ Criminal Network Visualization

✓ Intelligence Report Generator

✓ Interactive Dashboards

✓ Search System

✓ Role-Based Access Control

✓ Audit Logging

✓ Report Export

---

# 6. AI Objectives

Artificial Intelligence must support—not replace—human decision-making.

The AI subsystem shall:

- Identify crime hotspots
- Recommend patrol areas
- Detect unusual crime patterns
- Generate intelligence summaries
- Explain every recommendation
- Estimate confidence levels
- Highlight supporting evidence

AI outputs should always be treated as advisory.

Final operational decisions remain with authorized officers.

---

# 7. Machine Learning Objectives

The ML pipeline shall:

- Train hotspot prediction models
- Detect anomalies
- Rank high-risk locations
- Calculate confidence scores
- Support model retraining
- Store model versions
- Enable explainability using SHAP

---

# 8. GIS Objectives

Provide geospatial intelligence using interactive maps.

Capabilities include:

- Crime markers
- Heatmaps
- Cluster visualization
- Administrative boundaries
- Station boundaries
- Radius search
- Nearby crime search
- District statistics
- Spatial filtering

---

# 9. Security Objectives

The platform shall:

- Authenticate every user
- Enforce RBAC
- Maintain audit logs
- Encrypt sensitive data
- Protect APIs
- Prevent unauthorized access
- Track security events
- Record user activity

---

# 10. Performance Objectives

Target response times:

Dashboard

< 2 seconds

Crime Search

< 1 second

Map Loading

< 3 seconds

AI Recommendation

< 5 seconds

Report Generation

< 10 seconds

API Average

< 500 ms

---

# 11. Reliability Objectives

System Availability

99.9%

Database Recovery

< 15 minutes

Automatic Backup

Daily

Audit Log Retention

7 years

Graceful Failure

Required

---

# 12. Scalability Objectives

The architecture should support:

- Multiple police stations
- Multiple districts
- Statewide deployment
- Millions of crime records
- Thousands of concurrent users

Future scalability should not require major architectural changes.

---

# 13. Maintainability Objectives

The project should follow:

- Modular architecture
- Clean Architecture
- SOLID Principles
- Repository Pattern
- Dependency Injection
- Automated Testing
- Documentation-Driven Development

---

# 14. User Experience Objectives

The application should:

- Require minimal training
- Reduce cognitive load
- Support keyboard navigation
- Provide meaningful error messages
- Deliver responsive performance
- Maintain visual consistency

The interface should prioritize clarity over visual complexity.

---

# 15. Data Objectives

Ensure:

- High data integrity
- Referential consistency
- Validation at every layer
- Auditability
- Traceability
- Version control for critical records

---

# 16. Reporting Objectives

Automatically generate:

- Daily Briefings
- Weekly Reports
- Monthly Reports
- District Intelligence Reports
- Crime Trend Reports
- AI Intelligence Summaries

Reports should be exportable in PDF and Excel formats.

---

# 17. Operational Objectives

Enable officers to:

- Monitor crime activity
- Identify hotspots
- Compare districts
- Allocate patrols
- Track investigations
- Generate intelligence reports
- Monitor crime trends

---

# 18. DevOps Objectives

Support:

- Containerized deployment
- Automated CI/CD
- Infrastructure as Code
- Monitoring
- Centralized logging
- Versioned releases
- Rollback capability

---

# 19. Success Metrics (KPIs)

## Operational KPIs

- 50% reduction in manual report preparation time
- 40% faster hotspot identification
- 30% improvement in patrol planning efficiency
- 25% reduction in dashboard loading time compared to legacy systems

---

## Technical KPIs

- API success rate > 99%
- Average API latency < 500 ms
- Database uptime > 99.9%
- AI inference success rate > 98%
- Zero critical security vulnerabilities before production release

---

## User KPIs

- Officer onboarding time < 1 day
- User satisfaction score > 4.5/5
- Reduction in manual analytical tasks
- Increased adoption across departments

---

# 20. SMART Goals

Specific

Develop a centralized crime intelligence platform.

---

Measurable

Reduce operational reporting effort by at least 50%.

---

Achievable

Implement using scalable cloud-native technologies.

---

Relevant

Improve law enforcement operational effectiveness.

---

Time-Bound

Deliver a production-ready Version 1.0 within the planned development schedule.

---

# 21. Milestones

Milestone 1

System Architecture Complete

---

Milestone 2

Database Design Complete

---

Milestone 3

Backend APIs Complete

---

Milestone 4

Frontend Integration Complete

---

Milestone 5

AI Engine Operational

---

Milestone 6

GIS Module Complete

---

Milestone 7

Testing Complete

---

Milestone 8

Production Deployment

---

# 22. Objectives Summary

KrimeKartā is designed to be more than a crime record management system.

Its primary objective is to empower Karnataka Police with a secure, intelligent, and scalable decision-support platform that combines structured crime data, geospatial intelligence, explainable AI, and modern software engineering practices to enhance operational efficiency and support proactive policing.

---

# Document Status

Version: 1.0

Status: Draft


# docs/00-Project/03-Scope.md

# Project Scope

**Document Version:** 1.0

**Status:** Draft

**Project:** KrimeKartā – AI-Powered Crime Intelligence & Patrol Decision Support Platform

---

# 1. Purpose

This document defines the boundaries of the KrimeKartā project.

It specifies:

- What the platform will deliver
- What is intentionally excluded
- User roles
- Module boundaries
- External integrations
- Assumptions
- Constraints
- Future expansion roadmap

The purpose of this document is to establish a clear scope for Version 1.0 and prevent uncontrolled feature expansion during development.

---

# 2. Product Scope

KrimeKartā is an internal enterprise platform designed for the Karnataka Police Department.

The platform assists police officers by providing:

- Crime Intelligence
- Crime Analytics
- Geospatial Visualization
- AI-Assisted Decision Support
- Patrol Recommendation
- Criminal Network Analysis
- Automated Intelligence Reporting

The platform is **not** a public-facing application and is intended solely for authorized law enforcement personnel.

---

# 3. Target Users

Primary Users

- Superintendent of Police (SP)
- Deputy Superintendent (DSP)
- Circle Inspector (CI)
- Station House Officer (SHO)
- Crime Analyst
- Investigation Officer

Secondary Users

- Karnataka State Crime Records Bureau
- Administrative Officers
- Government Decision Makers

---

# 4. System Boundaries

The platform is responsible for:

✓ Crime data management

✓ Criminal profile management

✓ Investigation tracking

✓ GIS visualization

✓ AI recommendations

✓ Analytics

✓ Reporting

✓ Authentication

✓ Role-based authorization

✓ Audit logging

The platform is **not** responsible for:

- Filing FIRs directly
- Emergency dispatch (112)
- CCTV monitoring
- Facial recognition
- Vehicle tracking
- Mobile patrol communication
- Court case management
- Prison management

---

# 5. Version 1.0 Scope

## Module 1 — Authentication

Included

- Login
- JWT Authentication
- Refresh Tokens
- Role-Based Access Control
- Password Reset
- Session Management

Not Included

- Aadhaar Login
- Biometric Authentication
- Single Sign-On

---

## Module 2 — Dashboard

Included

- KPI Cards
- Crime Statistics
- Recent Crimes
- AI Alerts
- Patrol Recommendations
- District Summary

---

## Module 3 — Crime Management

Included

- Create Crime Record
- Update Crime
- Delete Crime
- Crime Timeline
- Evidence Metadata
- Crime Categories
- Crime Status

---

## Module 4 — Criminal Management

Included

- Criminal Profiles
- Alias Management
- Previous Cases
- Network Relationships
- Search

---

## Module 5 — Victim Management

Included

- Victim Records
- Contact Information
- Case Mapping

---

## Module 6 — Investigation Management

Included

- Investigation Assignment
- Officer Assignment
- Timeline
- Status Updates
- Case Notes

---

## Module 7 — GIS

Included

- Crime Map
- Heatmap
- Marker Clustering
- Radius Search
- District View
- Police Station View
- Layer Control

---

## Module 8 — AI Intelligence

Included

- Hotspot Detection
- AI Crime Summary
- Patrol Recommendation
- Explainable AI
- Confidence Score

---

## Module 9 — Criminal Network Analysis

Included

- Network Graph
- Associate Relationships
- Case Relationships
- Criminal Clusters

---

## Module 10 — Reports

Included

- Daily Report
- Weekly Report
- Monthly Report
- AI Intelligence Report
- PDF Export
- Excel Export

---

## Module 11 — Administration

Included

- User Management
- Role Management
- Police Station Management
- District Management
- Audit Logs
- System Configuration

---

# 6. Out of Scope (Version 1.0)

The following features are intentionally excluded.

## AI

- Crime prediction using deep learning
- Computer vision
- Face recognition
- Voice recognition
- Weapon detection

---

## GIS

- Live GPS officer tracking
- Drone feeds
- Satellite surveillance
- Live traffic integration

---

## Investigation

- Digital evidence storage
- Chain of custody
- Forensic laboratory integration

---

## Public Services

- Citizen complaint portal
- Anonymous tip submission
- RTI integration
- Public crime dashboard

---

## Communication

- SMS Gateway
- WhatsApp Integration
- Email Campaigns
- Emergency Broadcast

---

## Mobile

- Android App
- iOS App
- Offline Mobile Support

---

# 7. External Integrations

Version 1.0

Supported

- PostgreSQL
- PostGIS
- Gemini API
- Leaflet Maps
- PDF Generator

Future

- Karnataka Police Database
- NCRB
- CCTNS
- GIS Services
- SMS Gateway
- Email Services
- Aadhaar Authentication
- Government Identity Provider

---

# 8. Assumptions

The project assumes:

- Users have internet connectivity.
- Officers receive proper training.
- Crime data is entered accurately.
- District boundaries are available.
- Historical crime records exist.
- Administrative users maintain master data.

---

# 9. Constraints

Technical

- Open-source technology stack
- Cloud deployment
- PostgreSQL database
- FastAPI backend
- React frontend

Operational

- Internal police usage only
- Secure network access
- Government security compliance

Project

- Limited hackathon timeline
- Demo-ready MVP
- Production-oriented architecture

---

# 10. User Roles

## System Administrator

Responsibilities

- User Management
- Role Assignment
- Configuration
- Audit Review

---

## Superintendent

Access

- State Dashboard
- Reports
- Analytics
- AI Insights
- Patrol Recommendations

---

## DSP

Access

- District Dashboard
- Investigation Overview
- Crime Analytics

---

## Circle Inspector

Access

- Crime Records
- Investigation
- Criminal Profiles

---

## Station Officer

Access

- Create Crime
- Update Crime
- Evidence Metadata
- Victims
- Reports

---

## Crime Analyst

Access

- Analytics
- GIS
- AI
- Reports
- Criminal Networks

---

# 11. Feature Dependency Graph

Authentication
│
├── User Management
│
├── Crime Management
│   ├── Investigation
│   ├── Victims
│   ├── Criminals
│   └── Reports
│
├── GIS
│   ├── Heatmaps
│   ├── Hotspots
│   └── AI
│
├── AI
│   ├── Patrol Recommendation
│   ├── Intelligence Report
│   └── Explainability
│
└── Dashboard

---

# 12. Module Interaction Matrix

| Module | Depends On |
|---------|------------|
| Dashboard | Crimes, AI, GIS |
| Crime Management | Authentication |
| Investigation | Crimes |
| Criminal Management | Crimes |
| GIS | Crimes |
| AI | GIS, Crimes |
| Reports | Crimes, AI |
| Analytics | Crimes |
| Administration | Authentication |

---

# 13. Future Roadmap

## Version 1.1

- Advanced Search
- Notification Engine
- Scheduled Reports
- Saved Dashboards
- AI Chat Assistant

---

## Version 2.0

- Mobile Application
- Real-time Patrol Tracking
- Multi-State Deployment
- IoT Integration
- CCTNS Synchronization

---

## Version 3.0

- Drone Intelligence
- Computer Vision
- Video Analytics
- Predictive Resource Allocation
- Natural Language Query Interface

---

# 14. Scope Summary

KrimeKartā Version 1.0 focuses on providing a secure, centralized Crime Intelligence and Patrol Decision Support Platform for the Karnataka Police.

The first release prioritizes operational value through analytics, GIS, explainable AI, and modern software engineering practices while intentionally excluding advanced surveillance, citizen-facing services, and real-time operational integrations to maintain a manageable and production-ready scope.

---

# Document Status

Version: 1.0

Status: Draft

# docs/00-Project/04-Features.md

# Product Feature Specification

**Project:** KrimeKartā

**Version:** 1.0

**Document Version:** 1.0

---

# 1. Purpose

This document defines every functional feature of KrimeKartā Version 1.0.

Each feature includes:

- Feature ID
- Description
- Priority
- User Roles
- Dependencies
- Acceptance Criteria

This document acts as the master product backlog.

---

# Feature Priority Legend

| Priority | Meaning |
|-----------|---------|
| Must | Required for Version 1.0 |
| Should | Important but not blocking |
| Could | Optional enhancement |
| Future | Planned for later versions |

---

# User Roles

ADM = System Administrator

SP = Superintendent of Police

DSP = Deputy Superintendent

CI = Circle Inspector

SHO = Station House Officer

CA = Crime Analyst

IO = Investigation Officer

---

# MODULE 1 — Authentication

---

## AUTH-001

Feature

Secure Login

Priority

Must

Users

All

Description

Allow authorized officers to securely log into the system.

Acceptance

✓ JWT issued

✓ Refresh token generated

✓ Login audit created

---

## AUTH-002

Role Based Access Control

Priority

Must

Users

All

Description

Restrict features according to assigned role.

Acceptance

✓ Unauthorized access blocked

---

## AUTH-003

Password Reset

Priority

Must

Description

Allow secure password reset by administrator.

---

## AUTH-004

Session Management

Priority

Must

Description

Track active sessions and support logout.

---

## AUTH-005

Account Locking

Priority

Should

Description

Lock account after repeated failed login attempts.

---

# MODULE 2 — Dashboard

---

## DASH-001

Executive Dashboard

Priority

Must

Users

SP

Features

- Crime Summary
- Active Cases
- AI Alerts
- District Comparison

---

## DASH-002

District Dashboard

Priority

Must

Users

DSP

Displays:

- District Statistics
- Investigation Status
- Crime Trend

---

## DASH-003

Station Dashboard

Priority

Must

Users

SHO

Displays

- Today's Crimes
- Pending Investigations
- Patrol Assignments

---

## DASH-004

Live KPI Cards

Priority

Must

Cards

- Total Crimes
- Active Cases
- Hotspots
- Patrol Alerts
- Arrests
- Convictions

---

# MODULE 3 — Crime Management

---

## CRM-001

Create Crime Record

Priority

Must

Description

Register a new crime.

---

## CRM-002

Edit Crime

Must

---

## CRM-003

Delete Crime

Should

Soft delete only.

---

## CRM-004

Crime Timeline

Must

Display chronological events.

---

## CRM-005

Evidence Metadata

Must

Store evidence details.

---

## CRM-006

Crime Categories

Must

Support configurable crime types.

---

## CRM-007

Crime Search

Must

Search by

- FIR
- Location
- Criminal
- Victim
- Date
- Crime Type

---

## CRM-008

Crime Filtering

Must

Filter using

- Date
- District
- Status
- Officer
- Crime Type

---

# MODULE 4 — Criminal Management

---

## CRIM-001

Create Criminal Profile

Must

---

## CRIM-002

Alias Management

Must

---

## CRIM-003

Previous Cases

Must

---

## CRIM-004

Known Associates

Must

---

## CRIM-005

Criminal Timeline

Must

---

## CRIM-006

Photo Management

Should

---

## CRIM-007

Fingerprint Reference

Future

---

# MODULE 5 — Victim Management

---

## VIC-001

Victim Profile

Must

---

## VIC-002

Contact Information

Must

---

## VIC-003

Case Association

Must

---

## VIC-004

Victim Timeline

Should

---

# MODULE 6 — Investigation

---

## INV-001

Create Investigation

Must

---

## INV-002

Assign Officer

Must

---

## INV-003

Update Status

Must

---

## INV-004

Investigation Timeline

Must

---

## INV-005

Case Notes

Must

---

## INV-006

Task Assignment

Should

---

# MODULE 7 — GIS

---

## GIS-001

Interactive Crime Map

Must

---

## GIS-002

Crime Heatmap

Must

---

## GIS-003

Cluster Visualization

Must

---

## GIS-004

Radius Search

Must

---

## GIS-005

District Boundaries

Must

---

## GIS-006

Police Station Layers

Must

---

## GIS-007

Time-based Crime Playback

Should

---

## GIS-008

Crime Density Analysis

Must

---

# MODULE 8 — Analytics

---

## ANA-001

Crime Trends

Must

---

## ANA-002

District Comparison

Must

---

## ANA-003

Crime Category Analysis

Must

---

## ANA-004

Time Analysis

Must

---

## ANA-005

Officer Performance

Should

---

## ANA-006

Investigation Statistics

Must

---

# MODULE 9 — Artificial Intelligence

---

## AI-001

Hotspot Detection

Must

---

## AI-002

Patrol Recommendation

Must

---

## AI-003

Crime Summary Generator

Must

---

## AI-004

District Intelligence Brief

Must

---

## AI-005

Explainable AI

Must

---

## AI-006

Confidence Score

Must

---

## AI-007

Risk Ranking

Must

---

## AI-008

Anomaly Detection

Should

---

## AI-009

Natural Language Assistant

Future

---

# MODULE 10 — Criminal Network Analysis

---

## NET-001

Relationship Graph

Must

---

## NET-002

Associate Discovery

Must

---

## NET-003

Case Connections

Must

---

## NET-004

Network Metrics

Should

---

## NET-005

Community Detection

Should

---

# MODULE 11 — Reports

---

## REP-001

Daily Report

Must

---

## REP-002

Weekly Report

Must

---

## REP-003

Monthly Report

Must

---

## REP-004

District Intelligence Report

Must

---

## REP-005

PDF Export

Must

---

## REP-006

Excel Export

Must

---

# MODULE 12 — Administration

---

## ADM-001

User Management

Must

---

## ADM-002

Role Management

Must

---

## ADM-003

District Management

Must

---

## ADM-004

Police Station Management

Must

---

## ADM-005

Crime Category Management

Must

---

## ADM-006

Audit Logs

Must

---

## ADM-007

System Settings

Should

---

# MODULE 13 — Notifications

---

## NOT-001

System Alerts

Must

---

## NOT-002

Investigation Updates

Must

---

## NOT-003

AI Alerts

Must

---

## NOT-004

Patrol Notifications

Should

---

# MODULE 14 — Search

---

## SRCH-001

Global Search

Must

---

## SRCH-002

Advanced Filters

Must

---

## SRCH-003

Saved Searches

Should

---

# MODULE 15 — Audit

---

## AUD-001

User Activity Logs

Must

---

## AUD-002

Crime Change History

Must

---

## AUD-003

Login History

Must

---

## AUD-004

Export Logs

Should

---

# Feature Summary

| Module | Feature Count |
|----------|---------------|
| Authentication | 5 |
| Dashboard | 4 |
| Crime Management | 8 |
| Criminal Management | 7 |
| Victim Management | 4 |
| Investigation | 6 |
| GIS | 8 |
| Analytics | 6 |
| AI | 9 |
| Criminal Network | 5 |
| Reports | 6 |
| Administration | 7 |
| Notifications | 4 |
| Search | 3 |
| Audit | 4 |

---

## Total Features

**86 Features**

Version 1.0

---

# Future Features

Planned for later releases

- Mobile Application
- Live GPS Tracking
- Drone Integration
- Facial Recognition
- CCTV Analytics
- IoT Sensors
- Predictive Policing Dashboard
- Voice Assistant
- Natural Language Queries
- Multi-State Deployment

---

# Document Status

Version: 1.0

Status: Draft

# docs/00-Project/05-Functional-Requirements.md

# Functional Requirements Specification (FRS)

**Project:** KrimeKartā

**Version:** 1.0

**Document Version:** 1.0

---

# 1. Purpose

This document defines the functional behavior of the KrimeKartā platform.

Every requirement describes what the system must do.

Each requirement contains:

- Requirement ID
- Description
- Priority
- Trigger
- Preconditions
- Processing Logic
- Postconditions
- Error Handling
- Acceptance Criteria

---

# Requirement Priority

| Priority | Meaning |
|-----------|---------|
| Critical | Required for system operation |
| High | Core feature |
| Medium | Important |
| Low | Enhancement |

---

# MODULE 1 — Authentication

---

## FR-AUTH-001

### Title

Officer Login

Priority

Critical

Description

The system shall authenticate users using Service ID and Password.

Preconditions

- User account exists
- Account is active

Processing

1. Validate Service ID
2. Verify password hash
3. Check account status
4. Generate JWT
5. Generate Refresh Token
6. Create Login Audit Record

Postconditions

- User authenticated
- Session started

Failure Conditions

- Invalid credentials
- Disabled account
- Locked account

Acceptance

✓ Login within 2 seconds

---

## FR-AUTH-002

JWT Authentication

Priority

Critical

The system shall protect all private APIs using JWT authentication.

---

## FR-AUTH-003

Refresh Token

Priority

High

The system shall issue refresh tokens allowing secure renewal of access tokens.

---

## FR-AUTH-004

Role Authorization

Priority

Critical

The system shall verify permissions before allowing access to protected resources.

---

## FR-AUTH-005

Logout

Priority

High

The system shall invalidate refresh tokens and terminate the active session.

---

# MODULE 2 — Dashboard

---

## FR-DASH-001

Executive Dashboard

Priority

Critical

The dashboard shall display

- Total Crimes
- Active Investigations
- Today's Crimes
- Hotspots
- AI Alerts
- Crime Trend

---

## FR-DASH-002

District Dashboard

The system shall show district-specific analytics.

---

## FR-DASH-003

Station Dashboard

The system shall display station-level operational metrics.

---

## FR-DASH-004

Real-Time KPI Cards

Dashboard KPIs shall refresh automatically every 60 seconds.

---

# MODULE 3 — Crime Management

---

## FR-CRM-001

Create Crime

Priority

Critical

The system shall allow authorized officers to register new crime records.

Required Fields

- FIR Number
- Crime Type
- Date
- Time
- Latitude
- Longitude
- District
- Police Station
- Description

Validation

- FIR must be unique
- Date cannot be future
- Coordinates required

Postconditions

- Crime stored
- Audit created
- Dashboard updated

---

## FR-CRM-002

Edit Crime

The system shall allow authorized officers to modify crime details.

Every modification shall create an audit log.

---

## FR-CRM-003

Delete Crime

Soft delete only.

Physical deletion prohibited.

---

## FR-CRM-004

Crime Timeline

Display chronological investigation history.

---

## FR-CRM-005

Crime Search

Search using

- FIR
- Criminal
- Victim
- Officer
- Location
- Date
- District

Maximum response time

1 second.

---

## FR-CRM-006

Crime Filtering

Support filtering by

- Status
- Category
- Date
- Officer
- Station
- District

---

# MODULE 4 — Criminal Management

---

## FR-CRIM-001

Create Criminal Profile

Store

- Personal Details
- Alias
- Photograph
- Criminal History

---

## FR-CRIM-002

Associate Crimes

One criminal may be linked with multiple crimes.

---

## FR-CRIM-003

Known Associates

Maintain criminal relationships.

---

## FR-CRIM-004

Criminal Timeline

Display historical criminal activity.

---

# MODULE 5 — Investigation

---

## FR-INV-001

Create Investigation

Every crime shall have one investigation.

---

## FR-INV-002

Assign Officer

Assign one primary investigation officer.

---

## FR-INV-003

Status Updates

Statuses

- Open
- Under Investigation
- Closed
- Archived

---

## FR-INV-004

Case Notes

Support chronological investigation notes.

---

# MODULE 6 — GIS

---

## FR-GIS-001

Interactive Map

Display all crimes on map.

---

## FR-GIS-002

Heatmaps

Generate crime density heatmaps.

---

## FR-GIS-003

Marker Clustering

Automatically cluster markers at lower zoom.

---

## FR-GIS-004

Radius Search

Search crimes within configurable radius.

---

## FR-GIS-005

District Boundaries

Display Karnataka district polygons.

---

## FR-GIS-006

Police Station Layer

Display police station jurisdiction.

---

## FR-GIS-007

Crime Playback

Replay crimes across time.

---

# MODULE 7 — Analytics

---

## FR-ANA-001

Crime Trend Analysis

Generate daily

Weekly

Monthly

Yearly trends.

---

## FR-ANA-002

District Comparison

Compare districts using

- Crime Rate
- Case Closure
- Arrest Rate

---

## FR-ANA-003

Category Analysis

Analyze crime by category.

---

## FR-ANA-004

Time Analysis

Display

- Hour
- Day
- Week
- Month
- Year

---

# MODULE 8 — Artificial Intelligence

---

## FR-AI-001

Hotspot Detection

The system shall identify crime hotspots using historical crime records and spatial clustering.

Output

- Coordinates
- Confidence Score
- Supporting Statistics

---

## FR-AI-002

Patrol Recommendation

Generate patrol recommendations based on

- Hotspots
- Time
- Crime Density
- Historical Patterns

---

## FR-AI-003

Explainable AI

Every recommendation shall include

- Reason
- Confidence
- Contributing Factors

---

## FR-AI-004

Intelligence Summary

Generate AI-powered district intelligence report.

---

## FR-AI-005

Risk Ranking

Rank locations according to operational risk.

---

# MODULE 9 — Criminal Network

---

## FR-NET-001

Relationship Graph

Display criminal associations.

---

## FR-NET-002

Community Detection

Identify connected criminal communities.

---

## FR-NET-003

Case Relationship Analysis

Detect shared cases.

---

# MODULE 10 — Reports

---

## FR-REP-001

Generate Daily Report

Include

- Crimes
- Investigations
- Arrests
- Hotspots

---

## FR-REP-002

Weekly Report

Generate weekly summary.

---

## FR-REP-003

Monthly Report

Generate monthly report.

---

## FR-REP-004

Export PDF

Generate professional PDF reports.

---

## FR-REP-005

Export Excel

Generate XLSX reports.

---

# MODULE 11 — Notifications

---

## FR-NOT-001

AI Alert

Notify officers when a new hotspot is detected.

---

## FR-NOT-002

Investigation Reminder

Notify assigned officers of pending investigations.

---

## FR-NOT-003

Dashboard Alerts

Display high-priority operational notifications.

---

# MODULE 12 — Administration

---

## FR-ADM-001

User Management

Administrators shall create

- Users
- Roles
- Permissions

---

## FR-ADM-002

District Management

Manage Karnataka districts.

---

## FR-ADM-003

Police Station Management

Manage police station information.

---

## FR-ADM-004

Audit Logs

Track

- Logins
- Updates
- Deletes
- AI Usage
- Report Exports

---

# Business Rules

## BR-001

One FIR Number shall correspond to only one crime record.

---

## BR-002

Crime records cannot be permanently deleted.

---

## BR-003

Every crime shall belong to exactly one police station.

---

## BR-004

Every investigation shall belong to one crime.

---

## BR-005

Only Administrators may manage user accounts.

---

## BR-006

AI recommendations shall never automatically modify operational records.

---

## BR-007

Every AI output shall include a confidence score.

---

## BR-008

Every modification shall create an audit entry.

---

# Functional Requirement Summary

| Module | Requirements |
|----------|--------------|
| Authentication | 5 |
| Dashboard | 4 |
| Crime | 6 |
| Criminal | 4 |
| Investigation | 4 |
| GIS | 7 |
| Analytics | 4 |
| AI | 5 |
| Network | 3 |
| Reports | 5 |
| Notifications | 3 |
| Administration | 4 |

---

Total Functional Requirements

**54 Primary Requirements**

(Each will later be decomposed into implementation stories.)

---

# Traceability Matrix (Initial)

| Feature | Functional Requirement |
|----------|------------------------|
| AUTH-001 | FR-AUTH-001 |
| CRM-001 | FR-CRM-001 |
| GIS-002 | FR-GIS-002 |
| AI-002 | FR-AI-002 |
| REP-004 | FR-REP-004 |

---

# docs/00-Project/06-Non-Functional-Requirements.md

# Non-Functional Requirements Specification (NFR)

**Project:** KrimeKartā

**Document Version:** 1.0

**Status:** Draft

---

# 1. Purpose

This document specifies the quality attributes of the KrimeKartā platform.

Unlike functional requirements, these requirements describe **how well** the system should perform rather than **what** it should do.

These requirements influence architecture, infrastructure, database design, security, testing, and deployment.

---

# 2. Requirement Classification

| Prefix | Category |
|---------|----------|
| NFR-PER | Performance |
| NFR-SEC | Security |
| NFR-AVL | Availability |
| NFR-REL | Reliability |
| NFR-SCL | Scalability |
| NFR-MTN | Maintainability |
| NFR-USA | Usability |
| NFR-CMP | Compatibility |
| NFR-OPS | Operational |
| NFR-LGL | Compliance |

---

# 3. Performance Requirements

---

## NFR-PER-001

### API Response Time

Requirement

95% of all API requests shall complete within **500 milliseconds** under normal operating conditions.

Target

≤ 500 ms

Maximum

≤ 2 seconds

---

## NFR-PER-002

Dashboard Loading

The dashboard shall fully render within **2 seconds** after authentication.

---

## NFR-PER-003

Crime Search

Search operations shall complete within **1 second** for datasets containing up to 5 million crime records.

---

## NFR-PER-004

Map Rendering

Interactive crime maps shall load within **3 seconds**.

---

## NFR-PER-005

AI Recommendation

AI-generated patrol recommendations shall complete within **5 seconds**.

---

## NFR-PER-006

Report Generation

Generate PDF intelligence reports within **10 seconds**.

---

# 4. Scalability Requirements

---

## NFR-SCL-001

Horizontal Scaling

Backend services shall support horizontal scaling without application redesign.

---

## NFR-SCL-002

Database Growth

The database shall support at least

- 10 million crime records
- 1 million criminal profiles
- 50 million audit log entries

without schema redesign.

---

## NFR-SCL-003

Concurrent Users

Support at least

- 2,000 concurrent authenticated users
- 10,000 API requests per minute

---

## NFR-SCL-004

Stateless Services

Application services shall remain stateless to enable load balancing.

---

# 5. Security Requirements

---

## NFR-SEC-001

Authentication

All users shall authenticate using secure credentials.

---

## NFR-SEC-002

Authorization

Every protected API shall enforce Role-Based Access Control (RBAC).

---

## NFR-SEC-003

Password Storage

Passwords shall be hashed using Argon2id or bcrypt with appropriate work factors.

---

## NFR-SEC-004

Encryption

Sensitive information shall be encrypted both:

- At Rest
- In Transit (TLS 1.3)

---

## NFR-SEC-005

Audit Logging

Every security-sensitive action shall generate an immutable audit log.

---

## NFR-SEC-006

Rate Limiting

Authentication endpoints shall enforce request rate limiting.

Example

5 failed login attempts

↓

Temporary account lock

---

## NFR-SEC-007

OWASP Compliance

The application shall mitigate the OWASP Top 10 security risks.

---

# 6. Reliability Requirements

---

## NFR-REL-001

System Availability

Target uptime:

99.9%

---

## NFR-REL-002

Graceful Failure

The application shall continue operating even if non-critical services fail.

Example

AI service unavailable

↓

Crime Management remains operational.

---

## NFR-REL-003

Automatic Recovery

Recover automatically from transient failures whenever possible.

---

## NFR-REL-004

Database Consistency

All transactions shall maintain ACID guarantees.

---

# 7. Availability Requirements

---

## NFR-AVL-001

Scheduled Maintenance

Maintenance windows shall be announced in advance.

---

## NFR-AVL-002

Database Backup

Automatic backups

Frequency

Daily

Retention

90 Days

---

## NFR-AVL-003

Disaster Recovery

Recovery Time Objective (RTO)

15 minutes

Recovery Point Objective (RPO)

5 minutes

---

# 8. Maintainability Requirements

---

## NFR-MTN-001

Architecture

Follow Clean Architecture.

---

## NFR-MTN-002

SOLID Principles

All backend modules shall adhere to SOLID principles.

---

## NFR-MTN-003

Code Coverage

Minimum unit test coverage

80%

---

## NFR-MTN-004

Documentation

Every public API shall be documented using OpenAPI.

---

## NFR-MTN-005

Code Reviews

All production code shall undergo peer review.

---

# 9. Usability Requirements

---

## NFR-USA-001

Responsive Interface

Support desktop resolutions from

1366×768

to

4K displays.

---

## NFR-USA-002

Accessibility

Meet WCAG 2.1 AA guidelines where applicable for internal users.

---

## NFR-USA-003

Consistency

Maintain consistent navigation and UI behavior across all modules.

---

## NFR-USA-004

Error Messages

Provide clear, actionable error messages without exposing internal system details.

---

# 10. Compatibility Requirements

---

## NFR-CMP-001

Supported Browsers

- Chrome
- Edge
- Firefox

Latest two major versions.

---

## NFR-CMP-002

Operating Systems

Support

- Windows
- Linux

---

## NFR-CMP-003

Database

Support PostgreSQL 16+ with PostGIS.

---

# 11. Operational Requirements

---

## NFR-OPS-001

Logging

Centralized application logging shall be enabled.

---

## NFR-OPS-002

Monitoring

Expose Prometheus-compatible metrics.

---

## NFR-OPS-003

Health Checks

Provide endpoints:

- /health
- /ready
- /live

---

## NFR-OPS-004

Configuration

All secrets shall be injected using environment variables or a secure secrets manager.

---

# 12. Compliance Requirements

---

## NFR-LGL-001

Auditability

All user actions affecting official records shall be traceable.

---

## NFR-LGL-002

Data Retention

Crime records and audit logs shall follow applicable government retention policies.

---

## NFR-LGL-003

Privacy

Personally identifiable information shall only be accessible to authorized roles.

---

# 13. AI Requirements

---

## NFR-AI-001

Explainability

Every AI recommendation shall include:

- Confidence score
- Influencing factors
- Human-readable explanation

---

## NFR-AI-002

Human Oversight

The AI subsystem shall never automatically approve, reject, or modify operational records.

---

## NFR-AI-003

Fallback Mode

If AI services are unavailable, the application shall continue operating with conventional analytics.

---

# 14. Observability Requirements

The platform shall support:

- Structured logging
- Distributed tracing
- Metrics collection
- Error reporting
- Performance dashboards

---

# 15. Non-Functional Requirement Summary

| Category | Count |
|----------|------:|
| Performance | 6 |
| Scalability | 4 |
| Security | 7 |
| Reliability | 4 |
| Availability | 3 |
| Maintainability | 5 |
| Usability | 4 |
| Compatibility | 3 |
| Operational | 4 |
| Compliance | 3 |
| AI | 3 |

**Total:** 46 Non-Functional Requirements

---

# 16. Traceability Matrix

| NFR | Architecture Impact |
|------|---------------------|
| NFR-PER-001 | API Design, Caching |
| NFR-SEC-004 | TLS, Database Encryption |
| NFR-SCL-001 | Kubernetes, Load Balancer |
| NFR-REL-004 | PostgreSQL Transactions |
| NFR-AI-001 | Explainable AI Pipeline |
| NFR-OPS-002 | Monitoring Stack |

---

# Document Status

Version: 1.0

Status: Draft

# docs/00-Project/07-User-Personas.md

# User Personas & Role Definitions

**Project:** KrimeKartā

**Document Version:** 1.0

**Status:** Draft

---

# 1. Purpose

This document defines all users of the KrimeKartā platform.

It describes:

- Responsibilities
- Goals
- Daily Activities
- Permissions
- Pain Points
- Dashboard Access
- Feature Access
- Success Metrics

This document serves as the foundation for:

- Role-Based Access Control (RBAC)
- User Interface Design
- API Authorization
- Workflow Design
- Dashboard Personalization

---

# 2. User Hierarchy

```text
                    System Administrator
                             │
        ┌────────────────────┴────────────────────┐
        │                                         │
 Superintendent of Police (SP)          State Crime Bureau
        │
 Deputy Superintendent (DSP)
        │
 Circle Inspector (CI)
        │
 Station House Officer (SHO)
        │
 Investigation Officer (IO)
        │
 Crime Analyst (CA)
```

---

# 3. Persona: System Administrator

## Profile

Responsible for managing the KrimeKartā platform.

The administrator has complete system-level access but does not perform operational policing activities.

---

## Primary Responsibilities

- User Management
- Role Management
- Permission Assignment
- District Configuration
- Police Station Management
- System Configuration
- Audit Monitoring
- Backup Monitoring

---

## Goals

- Ensure platform availability
- Maintain user accounts
- Monitor system health
- Configure master data

---

## Daily Activities

- Create new users
- Reset passwords
- Review audit logs
- Manage districts
- Configure police stations

---

## Permissions

✓ Full Access

---

## Dashboard

Displays

- Active Users
- Failed Logins
- Server Health
- API Usage
- Storage
- AI Usage
- Audit Logs

---

# 4. Persona: Superintendent of Police (SP)

## Profile

District-level operational leader responsible for strategic decision-making.

---

## Goals

- Monitor district crime
- Allocate resources
- Review investigations
- Identify hotspots
- Improve operational efficiency

---

## Daily Activities

- Review dashboards
- Monitor AI alerts
- Review patrol recommendations
- Compare police stations
- Export reports

---

## Permissions

Read

- All district data

Write

- Patrol Approvals
- Strategic Notes

---

## Dashboard

Widgets

- Crime Trend
- District Heatmap
- AI Intelligence
- High-Risk Areas
- Investigation Status
- Performance Metrics

---

## Pain Points

- Manual reports
- Slow hotspot detection
- Difficult district comparison

---

# 5. Persona: Deputy Superintendent (DSP)

## Profile

Responsible for supervising multiple police stations.

---

## Goals

- Monitor police stations
- Review investigations
- Allocate manpower
- Improve station performance

---

## Dashboard

Displays

- Station Comparison
- Pending Investigations
- Daily Crime
- AI Alerts

---

## Permissions

Read

District Data

Write

Investigation Assignments

---

# 6. Persona: Circle Inspector (CI)

## Profile

Supervises multiple police stations within a circle.

---

## Responsibilities

- Investigation review
- Officer coordination
- Case monitoring
- Crime analysis

---

## Dashboard

- Circle Statistics
- Investigation Timeline
- Crime Heatmap
- Officer Performance

---

## Permissions

Read

Assigned Circle

Write

Investigations

---

# 7. Persona: Station House Officer (SHO)

## Profile

Primary operational user responsible for managing police station activities.

---

## Responsibilities

- Register crimes
- Update investigations
- Manage criminal records
- Assign officers

---

## Daily Workflow

Morning

↓

Review Dashboard

↓

Register New Crimes

↓

Assign Investigation

↓

Update Cases

↓

Generate Reports

---

## Dashboard

Cards

- Today's Crimes
- Pending Cases
- Active Officers
- AI Alerts

---

## Permissions

Create

Crime Records

Update

Crime Records

Investigations

Victims

Reports

---

## Pain Points

- Repetitive paperwork
- Manual reporting
- Limited analytics

---

# 8. Persona: Investigation Officer (IO)

## Responsibilities

- Investigate crimes
- Collect evidence
- Update case notes
- Submit investigation reports

---

## Dashboard

- Assigned Cases
- Due Investigations
- Evidence Timeline
- Pending Tasks

---

## Permissions

Update

Assigned Investigations

Read

Related Crime Records

---

# 9. Persona: Crime Analyst

## Profile

Specialist responsible for identifying crime patterns using analytics.

---

## Responsibilities

- Analyze trends
- Review hotspots
- Generate intelligence
- Assist patrol planning

---

## Dashboard

- GIS Map
- Heatmaps
- AI Insights
- Crime Analytics
- Network Analysis

---

## Permissions

Read

All analytics

Generate

Reports

AI Intelligence

---

## Pain Points

- Manual analysis
- Data fragmentation
- Poor visualization

---

# 10. Role Comparison

| Capability | Admin | SP | DSP | CI | SHO | IO | Analyst |
|------------|:----:|:--:|:---:|:--:|:---:|:--:|:-------:|
| Login | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Dashboard | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Create Crime | ✓ | ✗ | ✗ | ✓ | ✓ | ✗ | ✗ |
| Edit Crime | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✗ |
| Delete Crime | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ |
| View GIS | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| AI Insights | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Criminal Network | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Reports | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| User Management | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ |
| Audit Logs | ✓ | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ |

---

# 11. Dashboard Matrix

| Dashboard | Admin | SP | DSP | CI | SHO | IO | Analyst |
|-----------|:-----:|:--:|:---:|:--:|:---:|:--:|:-------:|
| System Dashboard | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ |
| Executive Dashboard | ✗ | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ |
| District Dashboard | ✗ | ✓ | ✓ | ✗ | ✗ | ✗ | ✓ |
| Station Dashboard | ✗ | ✗ | ✓ | ✓ | ✓ | ✓ | ✗ |
| Analytics Dashboard | ✓ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ |
| AI Dashboard | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ✓ |

---

# 12. Role-Based Access Levels

| Level | Description |
|--------|-------------|
| L1 | Read Only |
| L2 | Create |
| L3 | Update |
| L4 | Delete (Soft Delete) |
| L5 | Administrative |
| L6 | System Configuration |

---

# 13. Future Personas

Planned for Version 2.0

- Cyber Crime Officer
- Traffic Police Officer
- Intelligence Bureau Officer
- State Crime Bureau Analyst
- Mobile Patrol Officer
- Command Control Operator

---

# 14. Persona Summary

KrimeKartā serves multiple operational roles across the Karnataka Police hierarchy.

Each role receives:

- A personalized dashboard
- Role-specific permissions
- Context-aware analytics
- Secure access controls
- Workflow tailored to operational responsibilities

This role-centric design ensures that users only see the information and capabilities required for their responsibilities while maintaining security, simplicity, and operational efficiency.

---

# Document Status

Version: 1.0

Status: Draft

# docs/01-Architecture/00-High-Level-Architecture.md

# High-Level System Architecture

**Project:** KrimeKartā

**Document Version:** 1.0

**Architecture Type:** Modular Monolith (Version 1.0)

**Target Deployment:** Cloud Native

---

# 1. Purpose

This document defines the overall architecture of KrimeKartā.

It provides a complete view of:

- System Components
- Data Flow
- Backend Services
- AI Pipeline
- GIS Engine
- Database
- Authentication
- External Services
- Deployment
- Monitoring
- Infrastructure

This architecture serves as the foundation for all subsequent engineering documents.

---

# 2. Architectural Principles

KrimeKartā follows these engineering principles:

- Clean Architecture
- Domain Driven Design (DDD)
- SOLID Principles
- Repository Pattern
- Service Layer Pattern
- Dependency Injection
- API First Design
- Database Per Application
- Stateless Backend
- Secure by Design
- Explainable AI

---

# 3. Architecture Overview

```text
                    ┌────────────────────────────┐
                    │     Police Officer         │
                    │  (SP/DSP/CI/SHO/Analyst)   │
                    └────────────┬───────────────┘
                                 │ HTTPS
                                 ▼
                 ┌─────────────────────────────────┐
                 │        React Frontend           │
                 │---------------------------------│
                 │ Dashboard                       │
                 │ GIS Map                         │
                 │ Crime Management                │
                 │ AI Intelligence                 │
                 │ Reports                         │
                 │ Criminal Network                │
                 └──────────────┬──────────────────┘
                                │ REST API
                                ▼
            ┌────────────────────────────────────────────┐
            │            FastAPI Backend                 │
            ├────────────────────────────────────────────┤
            │ Authentication Module                      │
            │ User Management                            │
            │ Crime Service                              │
            │ Criminal Service                           │
            │ Investigation Service                      │
            │ GIS Service                                │
            │ Analytics Service                          │
            │ AI Service                                 │
            │ Reporting Service                          │
            │ Notification Service                       │
            │ Audit Service                              │
            └───────┬───────────┬────────────┬───────────┘
                    │           │            │
                    ▼           ▼            ▼
          PostgreSQL      AI Engine      Redis Cache
           + PostGIS      (ML + LLM)

                    │
                    ▼
           Object Storage (Evidence)

                    │
                    ▼
            Monitoring Stack
```

---

# 4. System Components

KrimeKartā consists of six major subsystems.

1. Frontend
2. Backend
3. AI Platform
4. GIS Platform
5. Data Layer
6. Infrastructure Layer

---

# 5. Frontend Layer

Technology

- React 19
- TypeScript
- TailwindCSS
- React Router
- TanStack Query
- Zustand
- Leaflet
- Sigma.js
- Recharts

Responsibilities

- User Interface
- Form Validation
- Authentication
- API Communication
- Visualization
- GIS Rendering

No business logic shall exist inside the frontend.

---

# 6. Backend Layer

Technology

- FastAPI
- SQLAlchemy
- Alembic
- Pydantic
- JWT
- Dependency Injection

Responsibilities

- Authentication
- Authorization
- Business Logic
- API Layer
- Validation
- Audit Logging
- AI Orchestration
- Report Generation

The backend acts as the single source of business logic.

---

# 7. AI Layer

The AI subsystem provides decision-support capabilities.

Components

- Hotspot Prediction
- Patrol Recommendation
- Intelligence Report Generator
- Explainable AI Engine
- Risk Scoring
- Trend Detection

Models

- XGBoost
- Isolation Forest
- SHAP
- Gemini 2.5 Flash

The AI subsystem never modifies operational records directly.

---

# 8. GIS Layer

Components

- PostGIS
- Leaflet
- Heatmaps
- Spatial Clustering
- Radius Search
- Boundary Rendering

Responsibilities

- Crime Mapping
- Hotspot Visualization
- Patrol Planning
- Spatial Analytics

---

# 9. Data Layer

Primary Database

PostgreSQL

Spatial Extension

PostGIS

Future Extension

pgvector

Storage Categories

- Crime Records
- Criminal Profiles
- Victims
- Investigations
- Reports
- Audit Logs
- Users
- Districts
- Police Stations

---

# 10. Infrastructure Layer

Services

- Docker
- Docker Compose
- GitHub Actions
- Render
- Vercel
- Supabase Storage

Responsibilities

- Deployment
- Scaling
- Monitoring
- Logging
- Backup
- CI/CD

---

# 11. Core Domains

The application is divided into bounded contexts.

Authentication

↓

Crime Management

↓

Investigation

↓

Analytics

↓

GIS

↓

Artificial Intelligence

↓

Reporting

↓

Administration

Each domain owns its own services, repositories, and business rules.

---

# 12. Data Flow

Crime Registration Flow

Officer

↓

Frontend

↓

REST API

↓

Validation

↓

Business Rules

↓

PostgreSQL

↓

Audit Log

↓

Dashboard Update

↓

Analytics Update

↓

AI Pipeline Trigger

↓

Heatmap Refresh

---

# 13. AI Data Flow

Historical Crimes

↓

Feature Engineering

↓

Hotspot Prediction

↓

Risk Scoring

↓

SHAP Explainability

↓

Patrol Recommendation

↓

Gemini Intelligence Report

↓

Dashboard

---

# 14. Report Generation Flow

Crime Records

+

Analytics

+

AI Summary

↓

Template Engine

↓

PDF Generator

↓

Download

---

# 15. Security Flow

User Login

↓

Password Verification

↓

JWT

↓

Refresh Token

↓

RBAC

↓

Protected API

↓

Audit Log

---

# 16. Module Communication

Frontend

↓

Backend

↓

Services

↓

Repositories

↓

Database

Services never communicate directly with the database outside repositories.

---

# 17. Cross-Cutting Concerns

Applied to every module.

- Authentication
- Authorization
- Logging
- Validation
- Exception Handling
- Audit Logging
- Monitoring
- Metrics
- Caching

---

# 18. Architectural Constraints

- Stateless Backend
- REST APIs
- PostgreSQL Only
- OpenAPI Documentation
- JWT Authentication
- Soft Deletes
- Immutable Audit Logs
- Explainable AI

---

# 19. Quality Attributes

Performance

- <500 ms average API response

Availability

- 99.9%

Scalability

- Horizontal backend scaling

Security

- RBAC
- TLS
- Encryption
- Auditability

Maintainability

- Modular architecture
- Dependency Injection
- Repository Pattern

Reliability

- ACID transactions
- Daily backups

---

# 20. Future Evolution

Current Architecture

Modular Monolith

↓

Future

Modular Monolith + Event Bus

↓

Microservices (if required)

No redesign of domain logic should be necessary during migration.

---

# 21. Technology Stack Summary

| Layer | Technology |
|---------|------------|
| Frontend | React, TypeScript, Tailwind |
| Backend | FastAPI |
| ORM | SQLAlchemy |
| Database | PostgreSQL |
| GIS | PostGIS, Leaflet |
| AI | XGBoost, Gemini, SHAP |
| Graph Analytics | NetworkX |
| Authentication | JWT |
| Cache | Redis |
| Object Storage | Supabase Storage |
| Deployment | Docker |
| CI/CD | GitHub Actions |

---

# 22. Architecture Decisions

AD-001

Architecture Style

Modular Monolith

Reason

Simple deployment during Version 1.0 while preserving modular boundaries.

---

AD-002

Database

PostgreSQL + PostGIS

Reason

Relational consistency and native geospatial capabilities.

---

AD-003

Backend

FastAPI

Reason

High performance, OpenAPI support, strong Python ecosystem for AI.

---

AD-004

Frontend

React + TypeScript

Reason

Component-based architecture with strong ecosystem.

---

# 23. High-Level Architecture Summary

KrimeKartā follows a layered, modular architecture where:

- React provides the presentation layer.
- FastAPI encapsulates all business logic.
- PostgreSQL + PostGIS stores operational and spatial data.
- AI services generate explainable recommendations.
- GIS services enable spatial intelligence.
- Redis accelerates read-heavy operations.
- Docker ensures portable deployments.
- Monitoring and audit logging provide operational visibility.

The architecture is designed to be production-ready, secure, maintainable, and scalable while remaining simple enough for a Version 1.0 implementation.

---

