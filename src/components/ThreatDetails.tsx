import React from 'react';
import { AlertTriangle, Clock, Shield, CheckCircle, ExternalLink, Target } from 'lucide-react';
import { ThreatData } from '../types/ThreatData';

interface ThreatDetailsProps {
  threat: ThreatData;
}

const ThreatDetails: React.FC<ThreatDetailsProps> = ({ threat }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Threat Overview */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <div className="flex items-center space-x-3 mb-4">
          <AlertTriangle className="h-6 w-6 text-red-400" />
          <h3 className="text-xl font-bold text-white">Threat Overview</h3>
        </div>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-gray-400 mb-2">Description</h4>
            <p className="text-gray-300 leading-relaxed">{threat.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-semibold text-gray-400 mb-2">Severity Level</h4>
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                threat.severity === 'high' ? 'bg-red-900/20 text-red-400' :
                threat.severity === 'medium' ? 'bg-yellow-900/20 text-yellow-400' :
                'bg-green-900/20 text-green-400'
              }`}>
                {threat.severity.charAt(0).toUpperCase() + threat.severity.slice(1)}
              </span>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-400 mb-2">Category</h4>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-900/20 text-purple-400">
                {threat.category}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Indicators of Compromise */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <div className="flex items-center space-x-3 mb-4">
          <Target className="h-6 w-6 text-orange-400" />
          <h3 className="text-xl font-bold text-white">Indicators of Compromise</h3>
        </div>
        <div className="space-y-3">
          {threat.indicators.map((indicator, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-gray-900 rounded-lg">
              <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-300 text-sm">{indicator}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <div className="flex items-center space-x-3 mb-4">
          <Clock className="h-6 w-6 text-blue-400" />
          <h3 className="text-xl font-bold text-white">Attack Timeline</h3>
        </div>
        <div className="space-y-4">
          {threat.timeline.map((event, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                {index < threat.timeline.length - 1 && (
                  <div className="w-0.5 h-8 bg-gray-700 mt-2"></div>
                )}
              </div>
              <div className="flex-1 pb-4">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-white font-medium">{event.event}</p>
                  <span className="text-xs text-gray-400">{event.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mitigation Steps */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <div className="flex items-center space-x-3 mb-4">
          <Shield className="h-6 w-6 text-green-400" />
          <h3 className="text-xl font-bold text-white">Recommended Mitigations</h3>
        </div>
        <div className="space-y-3">
          {threat.mitigationSteps.map((step, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-green-900/10 rounded-lg border border-green-900/20">
              <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
              <p className="text-gray-300 text-sm">{step}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-gray-700">
          <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
            <ExternalLink className="h-4 w-4" />
            <span className="text-sm font-medium">View detailed remediation guide</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThreatDetails;