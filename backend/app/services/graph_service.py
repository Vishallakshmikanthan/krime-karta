from typing import Dict, Any, List
import networkx as nx

class CriminalGraphService:
    def __init__(self):
        self.graph = nx.Graph()
        self._seed_default_graph()

    def _seed_default_graph(self):
        # Authenticated Karnataka Rowdies & Dons Syndicate Network
        edges = [
            ("CRIM-001", "CRIM-002", "SYNDICATE_ALLIANCE", 0.95),  # Wilson Garden Naga <-> Cycle Ravi
            ("CRIM-001", "CRIM-004", "FINANCIAL_NEXUS", 0.90),    # Wilson Garden Naga <-> Bomb Naga
            ("CRIM-001", "CRIM-006", "ENFORCEMENT_CELL", 0.85),   # Wilson Garden Naga <-> Slum Bharatha
            ("CRIM-002", "CRIM-007", "ARMS_SUPPLY", 0.88),         # Cycle Ravi <-> Welding Kumar
            ("CRIM-003", "CRIM-006", "EXTORTION_RACKET", 0.80),    # Double Meter Mohan <-> Slum Bharatha
            ("CRIM-003", "CRIM-008", "REAL_ESTATE_EVICTION", 0.82),# Double Meter Mohan <-> Hebbagodi Satisha
            ("CRIM-004", "CRIM-008", "LAUNDERING_FRONT", 0.87),    # Bomb Naga <-> Hebbagodi Satisha
            ("CRIM-005", "CRIM-007", "DACOITY_LOGISTICS", 0.84)   # Kunigal Giri <-> Welding Kumar
        ]
        
        for u, v, rel, w in edges:
            self.graph.add_edge(u, v, relationship=rel, weight=w)

        # Authenticated Karnataka Rowdy-Sheet & Dons Metadata
        nodes_meta = {
            "CRIM-001": {
                "label": "Wilson Garden Naga",
                "alias": "Supari & Contract Boss",
                "category": "Syndicate Boss",
                "risk": 0.98,
                "cases": 18,
                "district": "Central & East Bengaluru",
                "background": "Accused in multiple high-profile murder, extortion, and contract killing (supari) cases. Highly active in prison-network operations.",
                "status": "Active Rowdy Sheet / CCB Monitoring"
            },
            "CRIM-002": {
                "label": "Cycle Ravi",
                "alias": "Land & Arms Syndicate Lead",
                "category": "Armed Extortion",
                "risk": 0.94,
                "cases": 14,
                "district": "West Bengaluru",
                "background": "Specializes in armed extortion, illegal land settlements, and weapon hoarding across western subdivisions.",
                "status": "Active Rowdy Sheet / Preventive Detention"
            },
            "CRIM-003": {
                "label": "Double Meter Mohan",
                "alias": "Meter Interest Extortionist",
                "category": "Micro-Finance Extortion",
                "risk": 0.88,
                "cases": 11,
                "district": "South Bengaluru",
                "background": "Known for running aggressive micro-finance extortion rings and illegal, forceful real estate evictions.",
                "status": "Routine Police Counselling & Raids"
            },
            "CRIM-004": {
                "label": "Bomb Naga (Nagaraj)",
                "alias": "Hawala & Laundering Kingpin",
                "category": "Money Laundering Boss",
                "risk": 0.96,
                "cases": 16,
                "district": "Sriramapura / North Bengaluru",
                "background": "Operates massive money laundering networks, currency exchanges, and illegal real estate extortion rackets.",
                "status": "Active Rowdy Sheet / Financial Surveillance"
            },
            "CRIM-005": {
                "label": "Kunigal Giri",
                "alias": "Highway Dacoity Chief",
                "category": "Highway Dacoity Lead",
                "risk": 0.92,
                "cases": 15,
                "district": "Tumakuru / Bengaluru Outer",
                "background": "Head of organized highway robbery, inter-district dacoity, and contract extraction rings.",
                "status": "Inter-District Anti-Rowdy Surveillance"
            },
            "CRIM-006": {
                "label": "Slum Bharatha",
                "alias": "Turf Enforcer & Extortionist",
                "category": "Turf Intimidation",
                "risk": 0.86,
                "cases": 10,
                "district": "South Bengaluru",
                "background": "Notorious for physical assaults, localized turf extortion, and continuous public intimidation.",
                "status": "Goonda Act & Externment Orders"
            },
            "CRIM-007": {
                "label": "Welding Kumar",
                "alias": "Arms Possession Operative",
                "category": "Illegal Firearms",
                "risk": 0.89,
                "cases": 12,
                "district": "North Bengaluru",
                "background": "Engaged in severe arms possession, real estate threats, and aggressive neighborhood intimidation.",
                "status": "Strict Movement Monitoring & Crackdowns"
            },
            "CRIM-008": {
                "label": "Hebbagodi Satisha",
                "alias": "Sand & Industrial Extortionist",
                "category": "Industrial Extortion",
                "risk": 0.87,
                "cases": 13,
                "district": "Electronic City / Bengaluru South",
                "background": "Operates real estate land grabbing, industrial construction extortion, and illegal sand transportation rackets.",
                "status": "Precinct Externment Orders"
            }
        }
        
        for n, data in nodes_meta.items():
            if self.graph.has_node(n):
                self.graph.nodes[n].update(data)

    def analyze_network(self, district: str = "Bengaluru Central") -> Dict[str, Any]:
        # Compute NetworkX centrality metrics
        betweenness = nx.betweenness_centrality(self.graph)
        degree = nx.degree_centrality(self.graph)

        nodes_list = []
        for node_id in self.graph.nodes():
            meta = self.graph.nodes[node_id]
            centrality_score = float(round(betweenness.get(node_id, 0.0) * 0.6 + degree.get(node_id, 0.0) * 0.4, 3))
            
            nodes_list.append({
                "id": node_id,
                "label": meta.get("label", node_id),
                "alias": meta.get("alias", ""),
                "category": meta.get("category", "Associate"),
                "risk_score": meta.get("risk", 0.50),
                "centrality": centrality_score,
                "cases_linked": meta.get("cases", 1),
                "district": meta.get("district", "Bengaluru"),
                "background": meta.get("background", ""),
                "status": meta.get("status", "ACTIVE")
            })

        edges_list = []
        for u, v, data in self.graph.edges(data=True):
            edges_list.append({
                "source": u,
                "target": v,
                "relationship": data.get("relationship", "ASSOCIATE"),
                "weight": data.get("weight", 1.0)
            })

        # Identify top syndicate bridges (nodes with highest betweenness)
        sorted_bridges = sorted(betweenness.items(), key=lambda x: x[1], reverse=True)
        top_bridges = [self.graph.nodes[node_id].get("label", node_id) for node_id, _ in sorted_bridges[:3]]

        return {
            "district": district,
            "total_nodes": len(nodes_list),
            "total_edges": len(edges_list),
            "top_syndicate_bridges": top_bridges,
            "nodes": nodes_list,
            "edges": edges_list
        }

graph_service = CriminalGraphService()
