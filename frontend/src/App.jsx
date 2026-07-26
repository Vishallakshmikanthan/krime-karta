import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SecureOfficerPortal from './pages/SecureOfficerPortal';
import TwoFaSecurityVerification from './pages/TwoFaSecurityVerification';
import OfficialLogin from './pages/OfficialLogin';
import AdvancedNetworkIntelligenceAnalysis from './pages/AdvancedNetworkIntelligenceAnalysis';
import GeospatialIntelligenceMap from './pages/GeospatialIntelligenceMap';
import NationalCrimeRecordsDatabase from './pages/NationalCrimeRecordsDatabase';
import AiPatrolRecommendationCenter from './pages/AiPatrolRecommendationCenter';
import CriminalIntelligenceDirectory from './pages/CriminalIntelligenceDirectory';
import StrategicAnalytics from './pages/StrategicAnalytics';
import DashboardOverview from './pages/DashboardOverview';
import CommandCenterOperations from './pages/CommandCenterOperations';

const Home = () => (
  <div className="p-8">
    <h1 className="text-2xl font-bold mb-4">KrimeKartā Screens</h1>
    <ul className="space-y-2">
      <li><Link className="text-blue-600 hover:underline" to="/secure-officer-portal">Secure Officer Portal</Link></li>
      <li><Link className="text-blue-600 hover:underline" to="/two-fa">2FA Security Verification</Link></li>
      <li><Link className="text-blue-600 hover:underline" to="/official-login">Official Login</Link></li>
      <li><Link className="text-blue-600 hover:underline" to="/advanced-network">Advanced Network Intelligence Analysis</Link></li>
      <li><Link className="text-blue-600 hover:underline" to="/geospatial-map">Geospatial Intelligence Map</Link></li>
      <li><Link className="text-blue-600 hover:underline" to="/national-crime-records">National Crime Records Database</Link></li>
      <li><Link className="text-blue-600 hover:underline" to="/ai-patrol">AI Patrol Recommendation Center</Link></li>
      <li><Link className="text-blue-600 hover:underline" to="/criminal-intelligence">Criminal Intelligence Directory</Link></li>
      <li><Link className="text-blue-600 hover:underline" to="/strategic-analytics">Strategic Analytics</Link></li>
      <li><Link className="text-blue-600 hover:underline" to="/dashboard">Dashboard Overview</Link></li>
      <li><Link className="text-blue-600 hover:underline" to="/command-center">Command Center Operations</Link></li>
    </ul>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OfficialLogin />} />
        <Route path="/directory" element={<Home />} />
        <Route path="/secure-officer-portal" element={<SecureOfficerPortal />} />
        <Route path="/two-fa" element={<TwoFaSecurityVerification />} />
        <Route path="/advanced-network" element={<AdvancedNetworkIntelligenceAnalysis />} />
        <Route path="/geospatial-map" element={<GeospatialIntelligenceMap />} />
        <Route path="/national-crime-records" element={<NationalCrimeRecordsDatabase />} />
        <Route path="/ai-patrol" element={<AiPatrolRecommendationCenter />} />
        <Route path="/criminal-intelligence" element={<CriminalIntelligenceDirectory />} />
        <Route path="/strategic-analytics" element={<StrategicAnalytics />} />
        <Route path="/dashboard" element={<DashboardOverview />} />
        <Route path="/command-center" element={<CommandCenterOperations />} />
      </Routes>
    </Router>
  );
}

export default App;
