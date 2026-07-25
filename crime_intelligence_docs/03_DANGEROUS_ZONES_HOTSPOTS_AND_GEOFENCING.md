# 03 - Dangerous Zones, Hotspots & Geofencing Parameters

> **Document Path**: `crime_intelligence_docs/03_DANGEROUS_ZONES_HOTSPOTS_AND_GEOFENCING.md`  
> **Target System**: KrimeKartā Geospatial Intelligence Map & Patrol Engine  
> **Source Records**: Karnataka State Crime Records Bureau 37 Police Unit Reviews (H1 2026)

---

## 1. Statewide District & Commissionerate Crime Rankings (H1 2026)

Karnataka Police operates across **37 Administrative Units** comprising 6 Major City Police Commissionerates, 30 Range Districts, and 1 Specialized Railway Unit.

The table below ranks all 37 jurisdictions by cumulative IPC/BNS Crime Volume recorded in H1 2026 (Jan–Jun 2026), alongside SLL crime totals and monthly averages:

| Rank | Police Unit / Jurisdiction | Unit Type / Range | IPC/BNS Month (Jun 2026) | IPC/BNS YTD (H1 2026) | SLL Month (Jun 2026) | SLL YTD (H1 2026) | Total H1 Crimes | Risk Tier Classification |
| :---: | :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **1** | **Bengaluru City** | Metropolitan Commissionerate | 3,008 | **17,232** | 1,740 | 10,323 | **27,555** | **TIER 1 (Critical Urban)** |
| **2** | **Belagavi District** | Northern Range | 514 | **3,795** | 215 | 1,223 | **5,018** | **TIER 2 (High Rural/Border)** |
| **3** | **Tumakuru District** | Central Range | 500 | **3,087** | 173 | 1,002 | **4,089** | **TIER 2 (High Transit/Rural)** |
| **4** | **Mandya District** | Southern Range | 438 | **2,712** | 192 | 1,166 | **3,878** | **TIER 2 (High Property/Agrarian)** |
| **5** | **Mysuru District** | Southern Range | 439 | **2,640** | 119 | 770 | **3,410** | **TIER 2 (High Property/Hurt)** |
| **6** | **Bengaluru District** | Central Range | 437 | **2,597** | 71 | 398 | **2,995** | **TIER 2 (High Suburban Industrial)** |
| **7** | **Hassan District** | Southern Range | 395 | **2,432** | 175 | 988 | **3,420** | **TIER 2 (High Property/Agrarian)** |
| **8** | **Shivamogga District** | Eastern Range | 392 | **2,425** | 223 | 1,236 | **3,661** | **TIER 2 (High Communal/Property)** |
| **9** | **Chitradurga District** | Eastern Range | 372 | **2,084** | 154 | 1,180 | **3,264** | **TIER 2 (High Transit Corridor)** |
| **10** | **Bengaluru South Dist** | Central Range | 317 | **1,856** | 73 | 442 | **2,298** | **TIER 2 (High Suburban Belt)** |
| **11** | **Vijayapur District** | Northern Range | 280 | **1,682** | 236 | 1,330 | **3,012** | **TIER 3 (Medium Border/Tension)** |
| **12** | **Raichur District** | Ballari Range | 316 | **1,626** | 143 | 1,144 | **2,770** | **TIER 3 (Medium Mining/Agrarian)** |
| **13** | **Davanagere District** | Eastern Range | 270 | **1,618** | 105 | 748 | **2,366** | **TIER 3 (Medium Commercial)** |
| **14** | **Bidar District** | North Eastern Range | 264 | **1,591** | 123 | 596 | **2,187** | **TIER 3 (Medium Border)** |
| **15** | **Chikkamagaluru Dist** | Western Range | 222 | **1,474** | 169 | 693 | **2,167** | **TIER 3 (Medium Plantation/Forest)**|
| **16** | **Kalaburagi District** | North Eastern Range | 261 | **1,398** | 103 | 454 | **1,852** | **TIER 3 (Medium Social Tension)** |
| **17** | **Uttara Kannada Dist** | Western Range | 221 | **1,277** | 179 | 839 | **2,116** | **TIER 3 (Medium Coastal/Transit)** |
| **18** | **Haveri District** | Eastern Range | 224 | **1,276** | 79 | 572 | **1,848** | **TIER 3 (Medium Agrarian)** |
| **19** | **Kolar District** | Central Range | 247 | **1,207** | 48 | 332 | **1,539** | **TIER 3 (Medium Suburban/Mining)**|
| **20** | **Chickballapura Dist**| Central Range | 198 | **1,205** | 157 | 976 | **2,181** | **TIER 3 (Medium Transit/Highway)**|
| **21** | **Bagalkot District** | Northern Range | 192 | **1,196** | 253 | 813 | **2,009** | **TIER 3 (Medium Agrarian/SLL)** |
| **22** | **Ballari District** | Ballari Range | 193 | **1,195** | 65 | 610 | **1,805** | **TIER 3 (Medium Mining/Urban)** |
| **23** | **Mysuru City** | Metropolitan Commissionerate | 184 | **1,189** | 64 | 432 | **1,621** | **TIER 3 (Medium Tourism/Urban)** |
| **24** | **Mangaluru City** | Metropolitan Commissionerate | 173 | **1,112** | 128 | 574 | **1,686** | **TIER 3 (Medium Coastal/NDPS)** |
| **25** | **Dakshina Kannada** | Western Range | 162 | **1,076** | 29 | 221 | **1,297** | **TIER 3 (Medium Coastal/Tension)** |
| **26** | **Udupi District** | Western Range | 145 | **1,035** | 37 | 286 | **1,321** | **TIER 3 (Medium Coastal/Tourism)**|
| **27** | **Chamarajanagar Dist** | Southern Range | 176 | **987** | 113 | 612 | **1,599** | **TIER 4 (Low Border/Forest)** |
| **28** | **Yadgir District** | North Eastern Range | 199 | **966** | 103 | 577 | **1,543** | **TIER 4 (Low Agrarian/SC-ST)** |
| **29** | **Belagavi City** | Metropolitan Commissionerate | 154 | **930** | 124 | 513 | **1,443** | **TIER 4 (Low Border Urban)** |
| **30** | **Koppal District** | Ballari Range | 156 | **923** | 108 | 693 | **1,616** | **TIER 4 (Low Agrarian)** |
| **31** | **Vijayanagara Dist** | Ballari Range | 144 | **919** | 56 | 793 | **1,712** | **TIER 4 (Low Mining/Heritage)** |
| **32** | **Hubballi Dharwad City**| Metropolitan Commissionerate | 124 | **893** | 72 | 560 | **1,453** | **TIER 4 (Low Commercial City)** |
| **33** | **Kodagu District** | Southern Range | 109 | **878** | 47 | 528 | **1,406** | **TIER 4 (Low Plantation/Forest)**|
| **34** | **Kalaburagi City** | Metropolitan Commissionerate | 153 | **815** | 123 | 462 | **1,277** | **TIER 4 (Low Regional Urban)** |
| **35** | **Gadag District** | Northern Range | 104 | **611** | 102 | 608 | **1,219** | **TIER 4 (Low Agrarian)** |
| **36** | **Dharwad District** | Northern Range | 77 | **598** | 66 | 317 | **915** | **TIER 4 (Low Agrarian)** |
| **37** | **K.G.F (Kolar Gold Field)**| Specialized Mining Unit | 57 | **338** | 24 | 208 | **546** | **TIER 4 (Low Specialized Unit)** |

---

## 2. Spatial Crime Risk Tiers & Hotspot Profiling

### Tier 1: Metropolitan High-Density Urban Zone (Bengaluru City)
- **Crime Footprint**: Accounts for **25.9% of all IPC/BNS crimes** and **29.2% of all SLL crimes** in Karnataka.
- **Dominant Crime Profiles**: Cyber Crime (Phishing, OTP, Investment scams), Motor Vehicle Theft (Two-wheelers in outer ring road hubs), Cyber Sex Crimes / CSAM, Commercial Burglary, Narcotics distribution (MDMA/Cocktails).
- **Dangerous Hotspot Geofences**: Whitefield, Electronic City, Koramangala, Indiranagar, Majestic Railway/Bus Station Hub, Peenya Industrial Area, Kamakshipalya, Yelahanka.

### Tier 2: Major Rural & Industrial Transit Belts
- **Belagavi District (#2)**: Border jurisdiction with Maharashtra; high violent crime rate (Murders over land/water disputes), illicit arms movement, inter-state property offenders.
- **Tumakuru District (#3)**: Major industrial & transit highway junction (NH-44/NH-48); high traffic fatalities, highway robberies, night house burglaries.
- **Mandya & Mysuru Districts (#4 & #5)**: High agrarian population density; property disputes, sudden quarrel homicides, motorcycle theft, domestic cruelty (Sec. 498A).
- **Shivamogga & Hassan (#7 & #8)**: High volume of property theft, communal sensitive pockets (Shivamogga town), forest timber illegal transit.

### Tier 3: Specialized Risk Belts
- **Coastal Risk Belt (Mangaluru City, Dakshina Kannada, Udupi)**: High NDPS synthetic drug seizures, moral policing / communal clash triggers, maritime smuggling risks.
- **Mining & Mineral Belt (Ballari, Raichur, Vijayanagara, Chitradurga)**: High illegal sand & iron-ore transport violations (MMDR/KMMCR), land grabbing extortion gangs.
- **Border Tension Belt (Bidar, Kalaburagi, Vijayapur)**: Inter-state dacoity gangs, SC/ST atrocity hotspots, unlicensed firearm seizures (Arms Act).

---

## 3. Dangerous Highway Corridors & Fatal Accident Hotspots

Motor vehicle accidents constitute the single largest loss of life in Karnataka. Official SCRB data for June 2026 records:
- **Total Accidents**: 3,727 cases (859 Fatal, 2,868 Non-Fatal)
- **Total Casualties**: **885 Deaths** and **4,883 Injuries** (~29 fatal crash deaths per day).

```
                      HIGHWAY FATALITY CORRIDOR BREAKDOWN (JUNE 2026)
                      
   National Highways [NH]   ===================================> 36% Deaths (321 Killed)
   State Highways [SH]      =============================> 27% Deaths (237 Killed)
   District / Rural Roads   =====================================> 37% Deaths (327 Killed)
```

### Critical Highway Geofence Corridors:
1. **NH-44 (Bengaluru – Chikkaballapura – Andhra Border)**: High-speed fatal collisions, midnight dacoity attempts.
2. **NH-48 (Bengaluru – Tumakuru – Davanagere – Hubballi)**: Heavy commercial vehicle freight corridor; highest non-fatal injuries (942 in June 2026).
3. **NH-75 (Bengaluru – Hassan – Mangaluru)**: Ghat section hazardous turns (Shiradi Ghat), heavy night bus crashes.
4. **NH-66 (Udupi – Mangaluru – Karwar Coastal Highway)**: High-speed passenger vehicle fatalities.

---

## 4. Geofencing Boundary Parameters for KrimeKartā System

To implement dynamic geofencing within the `GeospatialIntelligenceMap.jsx` component, police administrators can enforce polygon boundaries with pre-calibrated alert rules:

```json
{
  "geofence_rules": [
    {
      "zone_id": "GF-BLR-CENTRAL-01",
      "zone_name": "Majestic Bus Terminal & Railway Hub",
      "risk_score": 9.4,
      "polygon_coordinates": [[12.9774, 77.5708], [12.9790, 77.5730], [12.9750, 77.5750], [12.9730, 77.5720]],
      "primary_threats": ["Pocket Picking", "Motor Vehicle Theft", "Immoral Traffic", "Narcotics"],
      "recommended_patrol_density": "2 Units / 500m",
      "geofence_trigger": "AUTO_ALERT_ON_ENTRY_OF_ROWDY_SHEETER"
    },
    {
      "zone_id": "GF-NH48-TUMAKURU-CORRIDOR",
      "zone_name": "NH-48 Kyatsandra - Kyathasandra Bypass",
      "risk_score": 8.8,
      "polygon_coordinates": [[13.3400, 77.1000], [13.3600, 77.1200], [13.3500, 77.1400], [13.3300, 77.1100]],
      "primary_threats": ["Fatal Speed Crashes", "Highway Robbery", "Dacoity"],
      "recommended_patrol_density": "Interceptor Radar Unit 24/7",
      "geofence_trigger": "SPEED_VIOLATION_AND_NIGHT_CHECKPOINT"
    }
  ]
}
```

---
*Proceed to Section 04 for granular category-wise crime breakdowns (Murder motives, Cyber crimes, NDPS, POCSO).*
