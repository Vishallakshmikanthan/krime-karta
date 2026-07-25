from typing import Dict, Any, List
import networkx as nx

class CriminalGraphService:
    def __init__(self):
        self.graph = nx.Graph()
        self._seed_default_graph()

    def _seed_default_graph(self):
        # Default syndicate relationships
        edges = [
            ("CRIM-001", "CRIM-002", "LIEUTENANT", 0.9),
            ("CRIM-001", "CRIM-003", "FINANCIER", 0.85),
            ("CRIM-001", "CRIM-004", "ENFORCER", 0.75),
            ("CRIM-002", "CRIM-005", "ASSOCIATE", 0.60),
            ("CRIM-002", "CRIM-006", "ASSOCIATE", 0.55),
            ("CRIM-003", "CRIM-007", "LOGISTICS", 0.70),
            ("CRIM-004", "CRIM-005", "ENFORCER", 0.80),
            ("CRIM-007", "CRIM-008", "INFORMANT", 0.40)
        ]
        
        for u, v, rel, w in edges:
            self.graph.add_edge(u, v, relationship=rel, weight=w)

        # Node properties
        nodes_meta = {
            "CRIM-001": {"label": "Rajan 'Don' Varma", "category": "Syndicate Boss", "risk": 0.98, "cases": 14},
            "CRIM-002": {"label": "Vikram 'Snake' Gowda", "category": "Operations Lead", "risk": 0.89, "cases": 9},
            "CRIM-003": {"label": "Anil 'Hawala' Mehta", "category": "Financial Handler", "risk": 0.84, "cases": 7},
            "CRIM-004": {"label": "Suresh 'Bhai' Patil", "category": "Enforcement Chief", "risk": 0.91, "cases": 11},
            "CRIM-005": {"label": "Karthik 'Shorty' Kumar", "category": "Field Operative", "risk": 0.65, "cases": 4},
            "CRIM-006": {"label": "Deepak 'Shadow' Rai", "category": "Cyber Operations", "risk": 0.72, "cases": 5},
            "CRIM-007": {"label": "Manjunath 'Trident' Hegde", "category": "Arms Supplier", "risk": 0.88, "cases": 8},
            "CRIM-008": {"label": "Priya 'Courier' Sharma", "category": "Mule Network", "risk": 0.52, "cases": 2}
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
                "category": meta.get("category", "Associate"),
                "risk_score": meta.get("risk", 0.50),
                "centrality": centrality_score,
                "cases_linked": meta.get("cases", 1)
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
