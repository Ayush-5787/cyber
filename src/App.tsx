import React, { useState } from 'react';
import Header from './components/Header';
import SearchInterface from './components/SearchInterface';
import Dashboard from './components/Dashboard';
import InfographicGenerator from './components/InfographicGenerator';
import ThreatAnalytics from './components/ThreatAnalytics';
import { ThreatData } from './types/ThreatData';

function App() {
  const [activeView, setActiveView] = useState<'search' | 'dashboard' | 'infographic' | 'analytics'>('search');
  const [currentThreat, setCurrentThreat] = useState<ThreatData | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Simulate AI research results
    const mockThreat: ThreatData = {
      id: Date.now().toString(),
      name: query,
      severity: Math.random() > 0.5 ? 'high' : Math.random() > 0.3 ? 'medium' : 'low',
      category: ['APT', 'Malware', 'Phishing', 'Ransomware'][Math.floor(Math.random() * 4)],
      description: `Advanced threat analysis for ${query} reveals sophisticated attack patterns and potential vulnerabilities.`,
      indicators: [
        'Suspicious network traffic detected',
        'Unusual process behavior identified',
        'Potential data exfiltration attempt',
        'Compromised authentication detected'
      ],
      timeline: [
        { date: '2025-01-15', event: 'Initial detection' },
        { date: '2025-01-16', event: 'Pattern analysis completed' },
        { date: '2025-01-17', event: 'Threat classified' }
      ],
      riskScore: Math.floor(Math.random() * 100),
      affectedSystems: Math.floor(Math.random() * 1000) + 1,
      mitigationSteps: [
        'Update security patches',
        'Monitor network traffic',
        'Implement access controls',
        'Conduct security audit'
      ]
    };
    setCurrentThreat(mockThreat);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header activeView={activeView} setActiveView={setActiveView} />
      
      <main className="container mx-auto px-6 py-8">
        {activeView === 'search' && (
          <SearchInterface onSearch={handleSearch} currentThreat={currentThreat} />
        )}
        
        {activeView === 'dashboard' && (
          <Dashboard />
        )}
        
        {activeView === 'infographic' && (
          <InfographicGenerator threat={currentThreat} query={searchQuery} />
        )}
        
        {activeView === 'analytics' && (
          <ThreatAnalytics />
        )}
      </main>
    </div>
  );
}

export default App;