from typing import Dict, Any, List
import networkx as nx

class CriminalGraphService:
    def __init__(self):
        self.graph = nx.Graph()
        self.rowdies_dataset = [
            {
                "id": 1,
                "name": "Kodigehalli Mune Gowda",
                "alias": "Mune Gowda",
                "era": "1960s – 1970s",
                "operative_territory": "North Bengaluru",
                "primary_criminal_background": "Recognized as Bengaluru's first organized underworld boss. Controlled early localized protection rackets (mamool) and real estate muscle power.",
                "current_status": "Deceased",
                "districts": ["Bengaluru Central"]
            },
            {
                "id": 2,
                "name": "MP Jayaraj",
                "alias": "Jayaraj",
                "era": "1970s – 1980s",
                "operative_territory": "Central Bengaluru",
                "primary_criminal_background": "First undisputed supreme kingpin of the city. Built strong criminal-political interfaces, running massive gambling, extortion, and contract hit rings.",
                "current_status": "Assassinated in 1990",
                "districts": ["Bengaluru Central"]
            },
            {
                "id": 3,
                "name": "Kotwal Ramachandra",
                "alias": "Kotwal",
                "era": "1970s – 1980s",
                "operative_territory": "North & South Bengaluru",
                "primary_criminal_background": "Highly violent contemporary and bitter rival of Jayaraj. Controlled trade unions and commercial protection rackets using crude edge weapons.",
                "current_status": "Assassinated in 1986",
                "districts": ["Bengaluru Central"]
            },
            {
                "id": 4,
                "name": "Benakanahalli Alappa Shivakumar",
                "alias": "Oil Kumar / Boot House Kumar",
                "era": "1980s",
                "operative_territory": "Sadashivanagar / Central Bengaluru",
                "primary_criminal_background": "The premier financial coordinator of the underworld. Dominated massive oil adulteration cartels and high-tier black-market financing.",
                "current_status": "Assassinated in 1990",
                "districts": ["Bengaluru Central"]
            },
            {
                "id": 5,
                "name": "Muthappa Rai",
                "alias": "Rai",
                "era": "1990s – 2000s",
                "operative_territory": "Coastal Karnataka & Bengaluru",
                "primary_criminal_background": "Revolutionized the regional underworld by introducing firearms. Ran international property litigation arbitration rings from Dubai before returning to establish a public front.",
                "current_status": "Died of natural causes in 2020",
                "districts": ["Mangaluru", "Bengaluru Central", "Mysuru City"]
            },
            {
                "id": 6,
                "name": "Agni Sridhar",
                "alias": "Sridhar",
                "era": "1980s – 1990s",
                "operative_territory": "Bengaluru City wide",
                "primary_criminal_background": "A critical intellectual and hit strategist during the 1980s factional wars. Heavily involved in the planning of rival gang assassinations.",
                "current_status": "Reformed; became an author, journalist, and filmmaker",
                "districts": ["Bengaluru Central"]
            },
            {
                "id": 7,
                "name": "Bekkina Kannu Rajendra",
                "alias": "Rajendra",
                "era": "1980s – 1990s",
                "operative_territory": "South Bengaluru",
                "primary_criminal_background": "Specialized executioner named for sharp nocturnal surveillance traits. Operated extensively in south-central turf blocks during early gang transitions.",
                "current_status": "Deceased",
                "districts": ["Bengaluru Central", "Mysuru City"]
            },
            {
                "id": 8,
                "name": "Sriramapura Kitty",
                "alias": "Kitty",
                "era": "1980s",
                "operative_territory": "Sriramapura",
                "primary_criminal_background": "A notorious central neighborhood factional boss who fought multiple bloody gang wars for physical area dominance during the 1980s.",
                "current_status": "Retired / Inactive",
                "districts": ["Bengaluru Central"]
            },
            {
                "id": 9,
                "name": "Koli Faiyaz",
                "alias": "Faiyaz",
                "era": "1980s – 1990s",
                "operative_territory": "Shivajinagar / Tannery Road",
                "primary_criminal_background": "Led powerful minority underworld syndicates centered out of Shivajinagar, specializing in localized smuggling, slaughterhouse control, and protection taxes.",
                "current_status": "Assassinated",
                "districts": ["Bengaluru Central", "Mangaluru"]
            },
            {
                "id": 10,
                "name": "Jedarahalli Krishnappa",
                "alias": "Krishnappa",
                "era": "1980s – 1990s",
                "operative_territory": "West Bengaluru",
                "primary_criminal_background": "An influential early operative who weaponized muscle power to control major real estate parcels and land development tracts in western Bengaluru.",
                "current_status": "Shifted to localized politics",
                "districts": ["Bengaluru Central"]
            },
            {
                "id": 11,
                "name": "Tanveer",
                "alias": "Tanveer",
                "era": "1990s – 2000s",
                "operative_territory": "Shivajinagar / East Bengaluru",
                "primary_criminal_background": "Close partner and successor to Koli Faiyaz. Heavily involved in long-running communal and territorial turf wars in East Bengaluru.",
                "current_status": "Monitored under history sheet",
                "districts": ["Bengaluru Central", "Mangaluru"]
            },
            {
                "id": 12,
                "name": "Marimuthu",
                "alias": "Marimuthu",
                "era": "1990s",
                "operative_territory": "Kalasipalyam / Slum belts",
                "primary_criminal_background": "A rare female rowdy-sheeter who rose from the slums to control widespread illicit liquor bootlegging, gambling, and prostitution rings.",
                "current_status": "Shifted to local politics; became municipal corporator",
                "districts": ["Bengaluru Central", "Mysuru City"]
            },
            {
                "id": 13,
                "name": "Dhaba Seena",
                "alias": "Seena",
                "era": "1990s – 2000s",
                "operative_territory": "Bengaluru Outer Ring Road",
                "primary_criminal_background": "Specialized in highway land-grabbing schemes, real estate extortions, and violent executions planned out of roadside eateries.",
                "current_status": "Inactive / Monitored",
                "districts": ["Bengaluru Central", "Hubballi-Dharwad"]
            },
            {
                "id": 14,
                "name": "Poison Rama",
                "alias": "Rama",
                "era": "1990s",
                "operative_territory": "West Bengaluru",
                "primary_criminal_background": "Earned notoriety for deploying chemical substances, poisons, and atypical weapons to incapacitate targets during robbery and property turf activities.",
                "current_status": "Apprehended / Inactive",
                "districts": ["Bengaluru Central"]
            },
            {
                "id": 15,
                "name": "Sriramapura Chandru",
                "alias": "Chandru",
                "era": "1990s",
                "operative_territory": "Sriramapura",
                "primary_criminal_background": "Highly violent contract execution specialist operating deep within northern Bengaluru neighborhood limits during transitional gang splits.",
                "current_status": "Assassinated",
                "districts": ["Bengaluru Central"]
            },
            {
                "id": 16,
                "name": "Kavala",
                "alias": "Kavala",
                "era": "1990s – 2000s",
                "operative_territory": "Bengaluru Border / Tamil Nadu border",
                "primary_criminal_background": "Headed a violent interstate network specializing in highway dacoity and executing contract hits (supari) for commercial developers.",
                "current_status": "Incarcerated / Active record",
                "districts": ["Bengaluru Central", "Mysuru City", "Mangaluru"]
            },
            {
                "id": 17,
                "name": "Gate Ganesha",
                "alias": "Ganesha",
                "era": "1990s",
                "operative_territory": "Railway Belt / Majestic Corridor",
                "primary_criminal_background": "A specialized railway-belt and transportation corridor enforcer who ran local extortion rings and targeted logistics operations.",
                "current_status": "Inactive",
                "districts": ["Bengaluru Central"]
            },
            {
                "id": 18,
                "name": "Kapali Anand",
                "alias": "Anand",
                "era": "1990s – 2000s",
                "operative_territory": "Gandhinagar / Cinema Belt",
                "primary_criminal_background": "Began as an enforcement element for illicit movie distribution and cinema-hall protection rackets; later pivoted to major land dispute settlements.",
                "current_status": "Deceased",
                "districts": ["Bengaluru Central"]
            },
            {
                "id": 19,
                "name": "Nagaraj",
                "alias": "Bomb Naga",
                "era": "1990s – Present",
                "operative_territory": "Sriramapura",
                "primary_criminal_background": "Expert in financial laundering, illegal high-volume currency exchange, parallel real estate funding, and massive cash-hoarding networks.",
                "current_status": "Active rowdy sheet under police surveillance",
                "districts": ["Bengaluru Central"]
            },
            {
                "id": 20,
                "name": "Ishtiaq Ahmed",
                "alias": "Pehalwan",
                "era": "2000s – Present",
                "operative_territory": "Shivajinagar",
                "primary_criminal_background": "Built a muscle-backed extortion empire; heavily linked to major white-collar financial deposit scams and parallel civic contract rigging.",
                "current_status": "Active surveillance by Central Crime Branch",
                "districts": ["Bengaluru Central"]
            },
            {
                "id": 21,
                "name": "Sunil Kumar K.",
                "alias": "Silent Sunil",
                "era": "2000s – Present",
                "operative_territory": "Bengaluru City wide",
                "primary_criminal_background": "Prominent active-era boss. Managed over two dozen cases ranging from homicide to massive corporate land settlements and real estate mediation.",
                "current_status": "Active history sheeter on watchlist",
                "districts": ["Bengaluru Central"]
            },
            {
                "id": 22,
                "name": "Rohit",
                "alias": "Onte Rohith",
                "era": "2000s – Present",
                "operative_territory": "Gayatri Nagar / North Bengaluru",
                "primary_criminal_background": "Major associate of Silent Sunil. Specialized in high-risk intimidation, illegal firearm supply, and physical intervention in high-value land disputes.",
                "current_status": "Active rowdy-sheeter",
                "districts": ["Bengaluru Central"]
            },
            {
                "id": 23,
                "name": "Naga",
                "alias": "Wilson Garden Naga",
                "era": "2010s – Present",
                "operative_territory": "Central & East Bengaluru",
                "primary_criminal_background": "Dominant modern kingpin involved in contract executions and supari operations. Accused of managing gang operations from inside prison facilities.",
                "current_status": "Active rowdy sheet; under Goonda Act monitoring",
                "districts": ["Bengaluru Central"]
            },
            {
                "id": 24,
                "name": "Ravi",
                "alias": "Cycle Ravi",
                "era": "2000s – Present",
                "operative_territory": "West Bengaluru",
                "primary_criminal_background": "Controlled western city zones via aggressive arms running, weapon hoarding, and running multi-crore property extortion rings.",
                "current_status": "Active; subjected to regular police raids",
                "districts": ["Bengaluru Central"]
            },
            {
                "id": 25,
                "name": "Mohan",
                "alias": "Double Meter Mohan",
                "era": "2010s – Present",
                "operative_territory": "South Bengaluru",
                "primary_criminal_background": "Runs highly aggressive predatory loan and illegal micro-finance rackets, enforcing collections using severe physical violence and property eviction.",
                "current_status": "Active rowdy sheet under police surveillance",
                "districts": ["Bengaluru Central", "Mysuru City"]
            },
            {
                "id": 26,
                "name": "Giri",
                "alias": "Kunigal Giri",
                "era": "2010s – Present",
                "operative_territory": "Tumakuru / National Highways",
                "primary_criminal_background": "Dangerous interstate highway dacoity coordinator specializing in tracking, intercepting, and robbing commercial logistics cargo movements.",
                "current_status": "Active inter-district target; frequently arrested",
                "districts": ["Hubballi-Dharwad", "Belagavi", "Bengaluru Central"]
            },
            {
                "id": 27,
                "name": "Bharatha",
                "alias": "Slum Bharatha",
                "era": "2010s – Present",
                "operative_territory": "South Bengaluru",
                "primary_criminal_background": "Infamous for street-level terror, local merchant extortion, and frequent bookings under the state Goonda Act for physical assault.",
                "current_status": "Active; currently facing externment proceedings",
                "districts": ["Bengaluru Central"]
            },
            {
                "id": 28,
                "name": "Kumar",
                "alias": "Welding Kumar",
                "era": "2010s – Present",
                "operative_territory": "North Bengaluru",
                "primary_criminal_background": "Specialized in severe arms possession, illegal firearms procurement, and organizing physical intimidation cells for commercial hire.",
                "current_status": "Active rowdy sheet monitored by CCB",
                "districts": ["Bengaluru Central", "Hubballi-Dharwad"]
            },
            {
                "id": 29,
                "name": "Satisha",
                "alias": "Hebbagodi Satisha",
                "era": "2010s – Present",
                "operative_territory": "Electronic City / Anekal belt",
                "primary_criminal_background": "Operates out of industrial belts, controlling illegal sand mining, industrial waste transport extortion, and real estate intimidation.",
                "current_status": "Active rowdy sheet; targeted by localized police",
                "districts": ["Mysuru City", "Bengaluru Central"]
            },
            {
                "id": 30,
                "name": "Ajith",
                "alias": "Malayali Ajith",
                "era": "2010s – Present",
                "operative_territory": "Kerala-Karnataka border / South Bengaluru",
                "primary_criminal_background": "An elite operative with connections across Kerala and Karnataka, managing high-value cross-border protection rackets and safehouses.",
                "current_status": "Active watchlist asset",
                "districts": ["Mangaluru", "Mysuru City"]
            },
            {
                "id": 31,
                "name": "Puneeth S.V.",
                "alias": "Puneeth",
                "era": "Present",
                "operative_territory": "Bengaluru City",
                "primary_criminal_background": "Arrested by the CCB for organizing localized arms supply chains, active criminal conspiracy, and weapon tracking.",
                "current_status": "Incarcerated; under trial",
                "districts": ["Bengaluru Central"]
            },
            {
                "id": 32,
                "name": "Shivakumar",
                "alias": "Auto Shiva",
                "era": "Present",
                "operative_territory": "Kamaksipalya / West Bengaluru",
                "primary_criminal_background": "Career history-sheeter specializing in illegal weapons retention, neighborhood extortion, and physical assault conspiracies.",
                "current_status": "Active rowdy sheet under police surveillance",
                "districts": ["Bengaluru Central"]
            },
            {
                "id": 33,
                "name": "Shahid Pasha",
                "alias": "Dakkar Shahid",
                "era": "Present",
                "operative_territory": "KG Halli / DJ Halli",
                "primary_criminal_background": "Runs a complex localized network in East Bengaluru; faces more than 20 active criminal trials for violent bodily harm offenses and extortion.",
                "current_status": "Active rowdy-sheeter",
                "districts": ["Bengaluru Central"]
            },
            {
                "id": 34,
                "name": "Krishna",
                "alias": "Korangu Krishna",
                "era": "Present",
                "operative_territory": "South & West Bengaluru",
                "primary_criminal_background": "Long-standing history-sheeter specialized in executing tactical burglaries, vehicle thefts, and running localized safehouse rings.",
                "current_status": "Active criminal record monitored by station house",
                "districts": ["Bengaluru Central"]
            },
            {
                "id": 35,
                "name": "Sridhar",
                "alias": "Thirthashri",
                "era": "Present",
                "operative_territory": "Bengaluru suburbs",
                "primary_criminal_background": "Active, armed-assault mercenary leader specializing in tactical contract hits planned across the layout subdivisions.",
                "current_status": "Active rowdy sheet",
                "districts": ["Mysuru City", "Bengaluru Central"]
            },
            {
                "id": 36,
                "name": "Prabhakar",
                "alias": "Putta",
                "era": "Present",
                "operative_territory": "Yelahanka / Peripheral corridors",
                "primary_criminal_background": "Core member of localized mercenary squads operating property settlement rackets and boundary disputes in peripheral city corridors.",
                "current_status": "Active surveillance profile",
                "districts": ["Belagavi", "Bengaluru Central"]
            },
            {
                "id": 37,
                "name": "Y. Devaraju",
                "alias": "Deva",
                "era": "Present",
                "operative_territory": "Bengaluru Outer Beltways",
                "primary_criminal_background": "Specializes in tracking targets, weapons concealment, and staging armed robberies along the outer beltways of the city.",
                "current_status": "Active rowdy sheet",
                "districts": ["Mysuru City", "Bengaluru Central"]
            },
            {
                "id": 38,
                "name": "V. Anand",
                "alias": "Anand",
                "era": "Present",
                "operative_territory": "Attibele / Border posts",
                "primary_criminal_background": "An active enforcer tied to cross-border contraband distribution and real estate extortion syndicates operating near interstate checkpoints.",
                "current_status": "Active surveillance target",
                "districts": ["Belagavi", "Mangaluru"]
            },
            {
                "id": 39,
                "name": "Ramappa",
                "alias": "Ramappa",
                "era": "Present",
                "operative_territory": "Ramanagara / Bidadi",
                "primary_criminal_background": "Operates a muscle-for-hire squad dealing with forceful land evictions and illegal construction site blockades in the quarrying belts.",
                "current_status": "Active local history sheet",
                "districts": ["Mysuru City"]
            },
            {
                "id": 40,
                "name": "V. Venkatesh",
                "alias": "Auto Venkatesh",
                "era": "Present",
                "operative_territory": "Malleshwaram",
                "primary_criminal_background": "Uses localized public transport networks to facilitate surveillance on extortion targets and transport small arms undetected.",
                "current_status": "Active rowdy sheet",
                "districts": ["Belagavi", "Bengaluru Central"]
            },
            {
                "id": 41,
                "name": "M. Venkatesh",
                "alias": "Venkatesh",
                "era": "Present",
                "operative_territory": "Kengeri",
                "primary_criminal_background": "Experienced logistics operative handling vehicle procurement, fake license plates, and weapons delivery for organized gangs.",
                "current_status": "Active criminal profile under precinct view",
                "districts": ["Hubballi-Dharwad", "Mysuru City"]
            },
            {
                "id": 42,
                "name": "Raju Cuttack",
                "alias": "Raju Nepali",
                "era": "Present",
                "operative_territory": "Interstate / Bengaluru city wide",
                "primary_criminal_background": "An interstate mercenary operative hired specifically for high-risk execution operations, specialized dacoity, and safehouse security.",
                "current_status": "Incarcerated; under surveillance",
                "districts": ["Mangaluru", "Belagavi"]
            },
            {
                "id": 43,
                "name": "Shankar Bahadur",
                "alias": "Bahadur",
                "era": "Present",
                "operative_territory": "Bengaluru Outer limits",
                "primary_criminal_background": "Operates in close coordination with cross-border hit squads, acting as an armed asset and muscle for localized gang leaders.",
                "current_status": "Active history sheet",
                "districts": ["Hubballi-Dharwad", "Mangaluru"]
            },
            {
                "id": 44,
                "name": "Lakshman Gowda",
                "alias": "Gowda",
                "era": "Present",
                "operative_territory": "Hassan / Rural limits",
                "primary_criminal_background": "Linked to coordinated robberies, public intimidation, and planning high-profile hits on rival sand-mining operators.",
                "current_status": "Active rowdy sheet under rural division",
                "districts": ["Belagavi"]
            },
            {
                "id": 45,
                "name": "Rajesh",
                "alias": "Rajesh",
                "era": "Present",
                "operative_territory": "Mysuru City limits",
                "primary_criminal_background": "An active street-level enforcer focused on illegal weapon deployment, retail extortion, and assault operations.",
                "current_status": "Active history-sheeter",
                "districts": ["Mysuru City"]
            },
            {
                "id": 46,
                "name": "Naveen",
                "alias": "Naveen",
                "era": "Present",
                "operative_territory": "Tumakuru districts",
                "primary_criminal_background": "Involved heavily in real estate intimidation and tracking targeted business owners along the industrial corridors for extortion payouts.",
                "current_status": "Active surveillance profile",
                "districts": ["Hubballi-Dharwad"]
            },
            {
                "id": 47,
                "name": "Girish",
                "alias": "Girish",
                "era": "Present",
                "operative_territory": "Chitradurga / National Highway",
                "primary_criminal_background": "A career criminal leading a specialized crew focused on coordinated highway robberies, vehicle tracking, and merchant extortions.",
                "current_status": "Active rowdy sheet",
                "districts": ["Belagavi", "Hubballi-Dharwad"]
            },
            {
                "id": 48,
                "name": "Thimmesh",
                "alias": "Thimma",
                "era": "Present",
                "operative_territory": "Davanagere",
                "primary_criminal_background": "A prominent local target and history-sheeter involved in a series of retaliatory street clashes and marketplace extortion syndicates.",
                "current_status": "Active monitoring under Goonda tracking",
                "districts": ["Hubballi-Dharwad"]
            },
            {
                "id": 49,
                "name": "Bhimagouda",
                "alias": "Bhimagouda",
                "era": "Present",
                "operative_territory": "Vijayapura district",
                "primary_criminal_background": "Operates in the northern belt; heavily involved in factional political-criminal warfare, land grabbing, and armed retaliation.",
                "current_status": "Active rowdy sheet on state watch",
                "districts": ["Belagavi"]
            },
            {
                "id": 50,
                "name": "Vetti Jaga",
                "alias": "Jaga",
                "era": "Present",
                "operative_territory": "Bengaluru Core",
                "primary_criminal_background": "A modern history-sheeter specializing in cyber-extortion, digital land-record fraud, and organizing tech-backed intimidation rackets.",
                "current_status": "Active rowdy sheet on police watch",
                "districts": ["Bengaluru Central"]
            }
        ]

        self.edges_dataset = [
            (1, 2, "FOUNDATIONAL_NEXUS", 0.95),
            (2, 3, "BITTER_FACTIONAL_FEUD", 0.99),
            (2, 4, "BLACK_MARKET_FINANCING", 0.92),
            (2, 6, "HIT_STRATEGY_PULSE", 0.90),
            (3, 6, "TURF_WAR_EXECUTION", 0.88),
            (3, 7, "NIGHT_SURVEILLANCE_CELL", 0.85),
            (4, 5, "PROPERTY_LITIGATION_RING", 0.94),
            (5, 6, "UNDERWORLD_FACTION_PACT", 0.89),
            (5, 21, "GLOBAL_SYNDICATE_MENTORSHIP", 0.96),
            (6, 8, "SRAMAPURA_NEIGHBORHOOD_WAR", 0.86),
            (9, 11, "SUCCESSOR_COMMUNAL_CARTEL", 0.93),
            (9, 12, "SLUM_TAX_BOOTLEGGING", 0.84),
            (10, 14, "WEST_ZONE_POISON_PACT", 0.82),
            (11, 20, "EAST_BENGALURU_EXTORTION", 0.91),
            (13, 16, "OUTER_RING_ROAD_DACOITY", 0.87),
            (15, 19, "SUPARI_CASH_HOARDING", 0.95),
            (16, 26, "INTERSTATE_HIGHWAY_DACOITY", 0.93),
            (17, 18, "RAILWAY_CINEMA_RACKET", 0.83),
            (19, 23, "HAWALA_SUPARI_NETWORK", 0.97),
            (20, 33, "COMMUNAL_TURF_NETWORK", 0.89),
            (21, 22, "CHIEF_LIEUTENANT_CELL", 0.95),
            (21, 23, "MODERN_SYNDICATE_ALLIANCE", 0.98),
            (23, 24, "ARMS_RUNNING_NEXUS", 0.94),
            (23, 27, "GOONDA_ACT_CELL", 0.88),
            (24, 28, "ILLEGAL_FIREARMS_PROCUREMENT", 0.91),
            (25, 27, "PREDATORY_MICROFINANCE", 0.90),
            (25, 29, "SAND_MINING_EVICTION", 0.92),
            (26, 46, "LOGISTICS_INTERCEPT_CREW", 0.86),
            (26, 47, "HIGHWAY_DACOITY_CARTEL", 0.89),
            (29, 38, "BORDER_CHECKPOINT_EXTORTION", 0.85),
            (30, 42, "CROSS_BORDER_HIT_SQUAD", 0.93),
            (31, 32, "ARMS_SUPPLY_CONSPIRACY", 0.87),
            (33, 50, "CYBER_EXTORTION_NETWORK", 0.89),
            (34, 41, "BURGLARY_VEHICLE_LOGISTICS", 0.84),
            (35, 36, "MERCENARY_CONTRACT_HIT", 0.92),
            (37, 39, "BELTWAY_QUARRY_EVICTION", 0.88),
            (40, 41, "PUBLIC_TRANSPORT_SURVEILLANCE", 0.82),
            (42, 43, "INTERSTATE_MERCENARY_SQUAD", 0.91),
            (44, 49, "FACTIONAL_LAND_WARFARE", 0.94),
            (45, 35, "RETAIL_WEAPON_DEPLOYMENT", 0.86),
            (48, 46, "RETALIATORY_STREET_FACTION", 0.83),
            (49, 47, "NORTHERN_BELT_LAND_GRAB", 0.88),
            (50, 21, "DIGITAL_FRAUD_MEDIATION", 0.90),
            (1, 8, "EARLY_NORTH_TURF", 0.81),
            (2, 9, "CENTRAL_SHIVAJINAGAR_PACT", 0.87),
            (4, 19, "BOOT_HOUSE_MONEY_LAUNDERING", 0.91),
            (7, 15, "SOUTH_NORTH_EXECUTION_LINK", 0.86),
            (10, 24, "WEST_LAND_INHERITANCE", 0.89),
            (12, 25, "SLUM_MICROFINANCE_BRIDGE", 0.84),
            (14, 34, "POISON_SAFEHOUSE_RING", 0.82),
            (16, 38, "ATTIBELE_DACOITY_ROUTE", 0.90),
            (18, 20, "GANDHINAGAR_EXTORTION", 0.85),
            (22, 31, "ONTE_PUNEETH_ARMS_CELL", 0.88),
            (24, 32, "AUTO_SHIVA_CYCLE_RAVI_PACT", 0.89),
            (26, 48, "DAVANAGERE_HIGHWAY_ROBBERY", 0.86),
            (29, 39, "RAMANAGARA_SAND_RACKET", 0.87),
            (30, 38, "KERALA_ATTIBELE_CORRIDOR", 0.91),
            (33, 34, "KG_HALLI_BURGLARY_CELL", 0.83),
            (35, 37, "SUBURB_OUTER_HIT_CREW", 0.88),
            (36, 40, "YELAHANKA_MALLESHWARAM_LINK", 0.84),
            (41, 43, "KENGERI_OUTER_LOGISTICS", 0.85),
            (42, 44, "INTERSTATE_RURAL_HIT", 0.89),
            (45, 39, "MYSURU_BIDADI_EVICTION", 0.86),
            (47, 49, "CHITRADURGA_VIJAYAPURA_CARTEL", 0.90)
        ]
        self._build_graph()

    def _build_graph(self):
        self.graph.clear()
        for r in self.rowdies_dataset:
            node_id = f"ROWDY-{r['id']:03d}"
            self.graph.add_node(
                node_id,
                numeric_id=r["id"],
                label=r["name"],
                alias=r["alias"],
                era=r["era"],
                operative_territory=r["operative_territory"],
                background=r["primary_criminal_background"],
                status=r["current_status"],
                districts=r["districts"],
                category="Syndicate Boss" if r["id"] in [2, 5, 19, 21, 23] else "Rowdy Sheeter",
                risk=0.98 if r["id"] in [2, 5, 19, 21, 23] else (0.85 + (r["id"] % 12) * 0.01),
                cases=5 + (r["id"] * 3) % 25
            )

        for u, v, rel, w in self.edges_dataset:
            node_u = f"ROWDY-{u:03d}"
            node_v = f"ROWDY-{v:03d}"
            if self.graph.has_node(node_u) and self.graph.has_node(node_v):
                self.graph.add_edge(node_u, node_v, relationship=rel, weight=w)

    def analyze_network(self, district: str = "Bengaluru Central") -> Dict[str, Any]:
        # Filter nodes belonging to the target district
        target_district_nodes = []
        for n, data in self.graph.nodes(data=True):
            districts = data.get("districts", [])
            # Match district name or return all if district is 'ALL'
            if district == "ALL" or any(d.lower() in district.lower() or district.lower() in d.lower() for d in districts):
                target_district_nodes.append(n)

        # Fallback if no specific match to avoid empty graph
        if not target_district_nodes:
            target_district_nodes = list(self.graph.nodes())[:12]

        subgraph = self.graph.subgraph(target_district_nodes).copy()

        # Compute dynamic NetworkX centralities
        betweenness = nx.betweenness_centrality(subgraph) if len(subgraph) > 1 else {n: 0.5 for n in subgraph}
        degree = nx.degree_centrality(subgraph) if len(subgraph) > 1 else {n: 0.5 for n in subgraph}

        nodes_list = []
        for node_id in subgraph.nodes():
            meta = subgraph.nodes[node_id]
            centrality_score = float(round(betweenness.get(node_id, 0.0) * 0.6 + degree.get(node_id, 0.0) * 0.4, 3))

            nodes_list.append({
                "id": node_id,
                "label": meta.get("label", node_id),
                "alias": meta.get("alias", ""),
                "era": meta.get("era", ""),
                "category": meta.get("category", "Rowdy Sheeter"),
                "risk_score": meta.get("risk", 0.85),
                "centrality": centrality_score,
                "cases_linked": meta.get("cases", 5),
                "district": meta.get("operative_territory", district),
                "background": meta.get("background", ""),
                "status": meta.get("status", "Active")
            })

        # Sort nodes by centrality descending
        nodes_list.sort(key=lambda x: x["centrality"], reverse=True)

        edges_list = []
        for u, v, data in subgraph.edges(data=True):
            edges_list.append({
                "source": u,
                "target": v,
                "relationship": data.get("relationship", "ASSOCIATE"),
                "weight": data.get("weight", 0.85)
            })

        sorted_bridges = sorted(betweenness.items(), key=lambda x: x[1], reverse=True)
        top_bridges = [subgraph.nodes[nid].get("label", nid) for nid, _ in sorted_bridges[:3]]

        return {
            "district": district,
            "total_nodes": len(nodes_list),
            "total_edges": len(edges_list),
            "top_syndicate_bridges": top_bridges,
            "nodes": nodes_list,
            "edges": edges_list
        }

graph_service = CriminalGraphService()
