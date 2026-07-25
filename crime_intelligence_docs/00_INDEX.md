# KrimeKartā - Karnataka Crime Intelligence & Project Analysis Repository

> **Repository Directory**: `crime_intelligence_docs/`  
> **Source Workspace**: `krime-karta`  
> **Source Crime Records**: Karnataka State Crime Records Bureau (SCRB) & Police Computer Wing (CCTNS) Reviews (2021 – 2026)  
> **Scope**: Comprehensive Architectural Analysis of KrimeKartā Platform & In-Depth Empirical Intelligence Extraction from Karnataka Crime Documentation.

---

## Executive Overview

This documentation folder contains a comprehensive, multi-dimensional analysis combining:
1. **The Technical & System Architecture** of the **KrimeKartā** AI-Powered Crime Intelligence and Patrol Decision Support Platform.
2. **Empirical Crime Intelligence & Geospatial Analytics** extracted directly from official Karnataka State Police monthly crime reviews (December 2025 – June 2026), historical datasets (2021 – 2024), and specialized statutory reporting (IPC/BNS, SLL, POCSO, Crime against SC/ST, Women, Cyber Crimes, NDPS, MV Accidents).

---

## Directory Navigation & Modular Section Files

| File | Section Title | Key Topics Covered |
| :--- | :--- | :--- |
| [00_INDEX.md](file:///c:/Users/Lenovo/Downloads/krime-karta/crime_intelligence_docs/00_INDEX.md) | **Master Index & Executive Overview** | Folder map, executive summaries, datasets cataloged, methodology. |
| [01_PROJECT_STRUCTURE_AND_ARCHITECTURE.md](file:///c:/Users/Lenovo/Downloads/krime-karta/crime_intelligence_docs/01_PROJECT_STRUCTURE_AND_ARCHITECTURE.md) | **Platform Architecture & Codebase Analysis** | System design, Frontend (Vite/React/Tailwind), Backend (FastAPI), Database schema, CCTNS Sync, AI Patrol & Network Intelligence modules. |
| [02_KARNATAKA_CRIME_OVERVIEW_AND_TRENDS.md](file:///c:/Users/Lenovo/Downloads/krime-karta/crime_intelligence_docs/02_KARNATAKA_CRIME_OVERVIEW_AND_TRENDS.md) | **Statewide Crime Trajectory (2021–2026)** | Longitudinal crime trends (2021: 178K, 2022: 205K, 2023: 188K, 2024: 235K, 2025: 202K, H1 2026: 106K), monthly progression (Dec 2025 – Jun 2026). |
| [03_DANGEROUS_ZONES_HOTSPOTS_AND_GEOFENCING.md](file:///c:/Users/Lenovo/Downloads/krime-karta/crime_intelligence_docs/03_DANGEROUS_ZONES_HOTSPOTS_AND_GEOFENCING.md) | **Dangerous Zones, Risk Tiers & Geofencing** | District risk ranking (37 Units), Urban Commissionerates vs Rural Districts, Highway accident corridors, Illegal mining belts, Geofence boundary parameters. |
| [04_CRIME_RATES_AND_CATEGORY_DEEP_DIVE.md](file:///c:/Users/Lenovo/Downloads/krime-karta/crime_intelligence_docs/04_CRIME_RATES_AND_CATEGORY_DEEP_DIVE.md) | **Category-Wise Crime Rate Deep Dive** | Granular statistics: Murders by motive, Dacoity, Robbery, Burglary, Cyber Crime (24 sub-types), NDPS (Synthetic vs Organic), POCSO & Women crimes, SC/ST atrocities. |
| [05_ROWDIES_GANGS_DONS_AND_ORGANIZED_CRIME.md](file:///c:/Users/Lenovo/Downloads/krime-karta/crime_intelligence_docs/05_ROWDIES_GANGS_DONS_AND_ORGANIZED_CRIME.md) | **Organized Crime, Gangs, Dons & Preventive Actions** | Rowdy sheet tracking, gang rivalries, syndicates (Matka/Gambling, Drug cartels, Immoral trafficking), Preventive Security Proceedings (BNSS Sec 126, 128, 129). |
| [06_POLICE_UNITS_CCTNS_AND_INFRASTRUCTURE.md](file:///c:/Users/Lenovo/Downloads/krime-karta/crime_intelligence_docs/06_POLICE_UNITS_CCTNS_AND_INFRASTRUCTURE.md) | **Police Unit Performance, CCTNS & Infrastructure** | CCTNS compliance across 37 units, Patrol vehicle log entry rates, SAKALA citizen service efficiency, public service verification loads. |
| [07_ACTIONABLE_INTELLIGENCE_AND_STRATEGIC_RECOMMENDATIONS.md](file:///c:/Users/Lenovo/Downloads/krime-karta/crime_intelligence_docs/07_ACTIONABLE_INTELLIGENCE_AND_STRATEGIC_RECOMMENDATIONS.md) | **Actionable Intelligence & Platform Integration** | Strategic intelligence rules, AI patrol route optimization algorithms, predictive risk scoring models, deployment workflows for law enforcement. |

---

## Data Source Catalog

The empirical analysis in this folder is derived from the official files located in the `crime-docs/` workspace directory:
- **Monthly PDF Reviews (State Crime Records Bureau & Police Computer Wing)**:
  - `CRIME REVIEW - JUNE - 2026.pdf` (54 pages)
  - `CRIME REVIEW - MAY - 2026.pdf` (54 pages)
  - `CRIME REVIEW - APRIL - 2026.pdf` (54 pages)
  - `CRIME REVIEW MARCH - 2026.pdf` (54 pages)
  - `CRIME REVIEW - FEBRUARY - 2026.pdf` (54 pages)
  - `CRIME REVIEW - JANUARY - 2026.pdf` (54 pages)
  - `crime-review-december-modified-2025.pdf` (54 pages)
- **Historical CSV Data Repositories**:
  - `archive.zip` (`CRIME_REVIEW_2021_TO_2024_KARNATAKA_CLEAN.csv` - 31,338 records)
  - `crime_review_for_the_month_of_december_2025_9.csv` (777 records)
  - `ka-ipc-crimes-2025.csv` (IPC/BNS statutory crime heads)
  - `ka-sll-crimes-2025.csv` (Special & Local Laws statutory heads)
  - `ka-crimes-women-children-scssts.csv` (Specialized statutory crime counts)

---

## Key Statewide High-Level Metrics (Summary Snapshot)

- **Total Cognizable Crimes Recorded (H1 2026)**: **106,417 cases** (71,118 IPC/BNS + 35,299 SLL)
- **Total Cognizable Crimes Recorded (Full Year 2025)**: **202,533 cases** (138,666 IPC/BNS + 63,867 SLL)
- **#1 Crime Volume Jurisdiction**: **Bengaluru City** (17,232 IPC/BNS cases & 10,323 SLL cases in H1 2026)
- **#1 Rural District Volume**: **Belagavi District** (3,795 IPC/BNS cases in H1 2026), followed by **Tumakuru** (3,087 cases)
- **Preventive Rowdy/Offender Security Cases Booked (June 2026)**: **5,137 cases** under BNSS Sec 126, 128, 129
- **Monthly Cyber Crimes (June 2026)**: **921 cases** (dominated by OTP/KYC frauds, investment scams, online money transfers, CSAM)
- **Monthly Drug Seizures (NDPS June 2026)**: **1,232 cases** (653 cultivated/processed + 579 synthetic drugs)
- **Highway Fatal Accidents (June 2026)**: **859 fatal crashes** resulting in **885 deaths** (36% on National Highways)

---
*Generated for KrimeKartā Operational Decision Support System.*
