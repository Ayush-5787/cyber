import React, { useState, useEffect } from 'react';
import { Search, Zap, AlertTriangle, Clock, Shield } from 'lucide-react';
import { ThreatData } from '../types/ThreatData';
import ThreatDetails from './ThreatDetails';

interface SearchInterfaceProps {
  onSearch: (query: string) => void;
  currentThreat: ThreatData | null;
}

const SearchInterface: React.FC<SearchInterfaceProps> = ({ onSearch, currentThreat }) => {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [suggestions] = useState([
    'APT29 Cozy Bear',
    'Emotet Banking Trojan',
    'SolarWinds Supply Chain Attack',
    'Ryuk Ransomware Campaign',
    'Cobalt Strike Beacons',
    'Mimikatz Credential Harvesting'
  ]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setIsSearching(true);
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate AI processing
    onSearch(query);
    setIsSearching(false);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-400 bg-red-900/20';
      case 'high': return 'text-orange-400 bg-orange-900/20';
      case 'medium': return 'text-yellow-400 bg-yellow-900/20';
      case 'low': return 'text-green-400 bg-green-900/20';
      default: return 'text-gray-400 bg-gray-900/20';
    }
  };

  return (
    <div className="space-y-8">
      {/* Search Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 px-4 py-2 rounded-full border border-cyan-500/20">
          <Zap className="h-4 w-4 text-cyan-400" />
          <span className="text-sm text-gray-300">AI-Powered Threat Intelligence</span>
        </div>
        <h2 className="text-4xl font-bold text-white">
          Autonomous Threat <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Hunter</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Transform cybersecurity research into actionable intelligence with advanced AI analysis and visualization
        </p>
      </div>

      {/* Search Form */}
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="relative">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter threat name, IoC, or security research query..."
              className="w-full pl-12 pr-32 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
              disabled={isSearching}
            />
            <button
              type="submit"
              disabled={isSearching || !query.trim()}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {isSearching ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Analyzing...</span>
                </div>
              ) : (
                'Hunt Threats'
              )}
            </button>
          </div>
        </form>

        {/* Quick Suggestions */}
        <div className="mt-6">
          <p className="text-sm text-gray-400 mb-3">Popular threat searches:</p>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => setQuery(suggestion)}
                className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full border border-gray-700 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-200"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Search Results */}
      {isSearching && (
        <div className="text-center py-12">
          <div className="inline-flex items-center space-x-3 bg-gray-800 px-6 py-4 rounded-xl border border-gray-700">
            <div className="w-6 h-6 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
            <div className="text-left">
              <p className="text-white font-medium">AI Research in Progress</p>
              <p className="text-sm text-gray-400">Analyzing threat intelligence sources...</p>
            </div>
          </div>
        </div>
      )}

      {currentThreat && !isSearching && (
        <div className="space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Threat Severity</p>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mt-1 ${getSeverityColor(currentThreat.severity)}`}>
                    <AlertTriangle className="h-3 w-3 mr-1" />
                    {currentThreat.severity.toUpperCase()}
                  </span>
                </div>
                <AlertTriangle className={`h-8 w-8 ${currentThreat.severity === 'high' ? 'text-red-400' : 'text-yellow-400'}`} />
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Risk Score</p>
                  <p className="text-2xl font-bold text-white mt-1">{currentThreat.riskScore}/100</p>
                </div>
                <div className={`h-8 w-8 rounded-full flex items-center justify-center ${currentThreat.riskScore > 70 ? 'bg-red-500' : currentThreat.riskScore > 40 ? 'bg-yellow-500' : 'bg-green-500'}`}>
                  <Shield className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Affected Systems</p>
                  <p className="text-2xl font-bold text-white mt-1">{currentThreat.affectedSystems.toLocaleString()}</p>
                </div>
                <div className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">{currentThreat.affectedSystems > 100 ? '999+' : currentThreat.affectedSystems}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Category</p>
                  <p className="text-lg font-semibold text-cyan-400 mt-1">{currentThreat.category}</p>
                </div>
                <Clock className="h-8 w-8 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Detailed Analysis */}
          <ThreatDetails threat={currentThreat} />
        </div>
      )}
    </div>
  );
};

export default SearchInterface;