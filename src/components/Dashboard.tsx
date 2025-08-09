import React from 'react';
import { TrendingUp, Shield, AlertTriangle, Activity, Globe, Clock, Users, Server } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    { label: 'Active Threats', value: '1,247', change: '+12%', icon: AlertTriangle, color: 'text-red-400' },
    { label: 'Systems Protected', value: '45,892', change: '+5%', icon: Shield, color: 'text-green-400' },
    { label: 'Threats Blocked', value: '8,924', change: '+18%', icon: Activity, color: 'text-blue-400' },
    { label: 'Global Coverage', value: '99.7%', change: '+0.1%', icon: Globe, color: 'text-purple-400' },
  ];

  const recentThreats = [
    { name: 'APT29 Cozy Bear', severity: 'high', time: '2 hours ago', affected: 342 },
    { name: 'Emotet Banking Trojan', severity: 'critical', time: '4 hours ago', affected: 1205 },
    { name: 'SolarWinds Attack Vector', severity: 'high', time: '6 hours ago', affected: 89 },
    { name: 'Ryuk Ransomware Campaign', severity: 'critical', time: '8 hours ago', affected: 567 },
    { name: 'Cobalt Strike Beacons', severity: 'medium', time: '12 hours ago', affected: 234 },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white">Threat Intelligence Dashboard</h2>
          <p className="text-gray-400 mt-2">Real-time cybersecurity monitoring and analytics</p>
        </div>
        <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg border border-gray-700">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-300">Live Monitoring</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-200">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg bg-gray-900 ${stat.color}`}>
                  <IconComponent className="h-6 w-6" />
                </div>
                <span className="text-sm text-green-400 font-medium">{stat.change}</span>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Threats */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">Recent Threat Detections</h3>
            <button className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors">View All</button>
          </div>
          <div className="space-y-4">
            {recentThreats.map((threat, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg hover:bg-gray-850 transition-all duration-200">
                <div className={`w-3 h-3 rounded-full ${getSeverityColor(threat.severity)}`}></div>
                <div className="flex-1">
                  <p className="text-white font-medium">{threat.name}</p>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-xs text-gray-400 flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {threat.time}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center">
                      <Users className="h-3 w-3 mr-1" />
                      {threat.affected} affected
                    </span>
                  </div>
                </div>
                <button className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors">
                  Investigate
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* System Health */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">System Health Overview</h3>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm text-green-400">All Systems Operational</span>
            </div>
          </div>
          
          <div className="space-y-6">
            {[
              { name: 'Threat Detection Engine', status: 99.9, icon: Activity },
              { name: 'AI Analysis Pipeline', status: 98.7, icon: TrendingUp },
              { name: 'Data Processing', status: 99.2, icon: Server },
              { name: 'Global Network', status: 97.8, icon: Globe },
            ].map((system, index) => {
              const IconComponent = system.icon;
              return (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <IconComponent className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-300">{system.name}</span>
                    </div>
                    <span className="text-sm font-medium text-white">{system.status}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${system.status > 98 ? 'bg-green-500' : system.status > 95 ? 'bg-yellow-500' : 'bg-red-500'}`}
                      style={{ width: `${system.status}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Threat Map Visualization */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-6">Global Threat Activity</h3>
        <div className="h-64 bg-gray-900 rounded-lg flex items-center justify-center border border-gray-700">
          <div className="text-center">
            <Globe className="h-16 w-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400">Interactive threat map would be displayed here</p>
            <p className="text-sm text-gray-500 mt-2">Real-time visualization of global cyber threats</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;