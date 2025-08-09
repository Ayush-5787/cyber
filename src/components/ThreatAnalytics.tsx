import React, { useState } from 'react';
import { BarChart3, TrendingUp, PieChart, Activity, Calendar, Filter } from 'lucide-react';

const ThreatAnalytics: React.FC = () => {
  const [timeRange, setTimeRange] = useState('7d');
  const [threatType, setThreatType] = useState('all');

  const analytics = {
    totalThreats: 15847,
    blockedAttacks: 12394,
    riskScore: 73,
    topCategories: [
      { name: 'Malware', count: 4521, percentage: 28.5 },
      { name: 'Phishing', count: 3847, percentage: 24.3 },
      { name: 'APT', count: 2934, percentage: 18.5 },
      { name: 'Ransomware', count: 2245, percentage: 14.2 },
      { name: 'DDoS', count: 2300, percentage: 14.5 }
    ]
  };

  const trends = [
    { date: '2025-01-10', threats: 234, blocked: 189 },
    { date: '2025-01-11', threats: 456, blocked: 398 },
    { date: '2025-01-12', threats: 324, blocked: 289 },
    { date: '2025-01-13', threats: 567, blocked: 445 },
    { date: '2025-01-14', threats: 432, blocked: 387 },
    { date: '2025-01-15', threats: 678, blocked: 534 },
    { date: '2025-01-16', threats: 543, blocked: 467 }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white">Threat Analytics</h2>
          <p className="text-gray-400 mt-2">Advanced threat intelligence and behavioral analysis</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-gray-400" />
            <select 
              value={timeRange} 
              onChange={(e) => setTimeRange(e.target.value)}
              className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
              <option value="90d">Last 90 Days</option>
            </select>
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <select 
              value={threatType} 
              onChange={(e) => setThreatType(e.target.value)}
              className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="all">All Threats</option>
              <option value="malware">Malware</option>
              <option value="phishing">Phishing</option>
              <option value="apt">APT</option>
              <option value="ransomware">Ransomware</option>
            </select>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <Activity className="h-6 w-6 text-blue-400" />
            </div>
            <span className="text-sm text-green-400 font-medium">+12.5%</span>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">{analytics.totalThreats.toLocaleString()}</p>
            <p className="text-sm text-gray-400">Total Threats Detected</p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-green-500/20 rounded-lg">
              <BarChart3 className="h-6 w-6 text-green-400" />
            </div>
            <span className="text-sm text-green-400 font-medium">+8.2%</span>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">{analytics.blockedAttacks.toLocaleString()}</p>
            <p className="text-sm text-gray-400">Attacks Blocked</p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-orange-500/20 rounded-lg">
              <TrendingUp className="h-6 w-6 text-orange-400" />
            </div>
            <span className="text-sm text-red-400 font-medium">+2.1%</span>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">{analytics.riskScore}</p>
            <p className="text-sm text-gray-400">Average Risk Score</p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <PieChart className="h-6 w-6 text-purple-400" />
            </div>
            <span className="text-sm text-green-400 font-medium">94.2%</span>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">78.2%</p>
            <p className="text-sm text-gray-400">Detection Rate</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Threat Categories */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-6">Threat Categories</h3>
          <div className="space-y-4">
            {analytics.topCategories.map((category, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">{category.name}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-400">{category.count.toLocaleString()}</span>
                    <span className="text-sm font-medium text-white">{category.percentage}%</span>
                  </div>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      index === 0 ? 'bg-red-500' :
                      index === 1 ? 'bg-orange-500' :
                      index === 2 ? 'bg-yellow-500' :
                      index === 3 ? 'bg-blue-500' : 'bg-purple-500'
                    }`}
                    style={{ width: `${category.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Threat Trends */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-6">Threat Trends (Last 7 Days)</h3>
          <div className="space-y-4">
            <div className="h-64 relative">
              <div className="absolute inset-0 flex items-end justify-between px-2">
                {trends.map((day, index) => (
                  <div key={index} className="flex flex-col items-center space-y-2 flex-1">
                    <div className="w-full max-w-8 space-y-1">
                      <div 
                        className="bg-red-500 rounded-t"
                        style={{ height: `${(day.threats / 700) * 200}px` }}
                        title={`${day.threats} threats detected`}
                      ></div>
                      <div 
                        className="bg-green-500 rounded-b"
                        style={{ height: `${(day.blocked / 700) * 200}px` }}
                        title={`${day.blocked} threats blocked`}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-400 transform -rotate-45 origin-center">
                      {new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center space-x-6 pt-4 border-t border-gray-700">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded"></div>
                <span className="text-sm text-gray-300">Threats Detected</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                <span className="text-sm text-gray-300">Threats Blocked</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Geographic Distribution */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-6">Geographic Threat Distribution</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { country: 'United States', threats: 3245, flag: '🇺🇸' },
            { country: 'China', threats: 2876, flag: '🇨🇳' },
            { country: 'Russia', threats: 2134, flag: '🇷🇺' },
            { country: 'Germany', threats: 1654, flag: '🇩🇪' },
            { country: 'United Kingdom', threats: 1432, flag: '🇬🇧' },
            { country: 'France', threats: 1298, flag: '🇫🇷' },
            { country: 'Japan', threats: 1156, flag: '🇯🇵' },
            { country: 'South Korea', threats: 987, flag: '🇰🇷' }
          ].map((country, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-4 border border-gray-700">
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-2xl">{country.flag}</span>
                <div className="flex-1">
                  <p className="text-white font-medium">{country.country}</p>
                  <p className="text-sm text-gray-400">{country.threats.toLocaleString()} threats</p>
                </div>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-1">
                <div 
                  className="h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
                  style={{ width: `${(country.threats / 3245) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThreatAnalytics;