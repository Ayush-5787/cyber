import React, { useState } from 'react';
import { FileImage, Download, Share2, BarChart3, PieChart, Activity, Network } from 'lucide-react';
import { ThreatData } from '../types/ThreatData';

interface InfographicGeneratorProps {
  threat: ThreatData | null;
  query: string;
}

const InfographicGenerator: React.FC<InfographicGeneratorProps> = ({ threat, query }) => {
  const [selectedTemplate, setSelectedTemplate] = useState<'executive' | 'technical' | 'timeline' | 'comparison'>('executive');
  const [isGenerating, setIsGenerating] = useState(false);

  const templates = [
    {
      id: 'executive',
      name: 'Executive Summary',
      description: 'High-level overview for stakeholders',
      icon: PieChart,
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 'technical',
      name: 'Technical Analysis',
      description: 'Detailed technical breakdown',
      icon: BarChart3,
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 'timeline',
      name: 'Attack Timeline',
      description: 'Chronological threat progression',
      icon: Activity,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'comparison',
      name: 'Threat Comparison',
      description: 'Compare with similar threats',
      icon: Network,
      color: 'from-purple-500 to-pink-500'
    }
  ] as const;

  const handleGenerateInfographic = async () => {
    setIsGenerating(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsGenerating(false);
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-4 py-2 rounded-full border border-purple-500/20">
          <FileImage className="h-4 w-4 text-purple-400" />
          <span className="text-sm text-gray-300">AI-Powered Visualization</span>
        </div>
        <h2 className="text-4xl font-bold text-white">
          Infographic <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Generator</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Transform complex threat intelligence into compelling visual narratives that inform and engage your audience
        </p>
      </div>

      {!threat ? (
        <div className="bg-gray-800 rounded-xl p-12 border border-gray-700 text-center">
          <FileImage className="h-16 w-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">No Threat Data Available</h3>
          <p className="text-gray-400 mb-6">Please conduct a threat search first to generate infographics</p>
          <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-200">
            Go to Threat Hunter
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Template Selection */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Choose Infographic Template</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {templates.map((template) => {
                const IconComponent = template.icon;
                return (
                  <button
                    key={template.id}
                    onClick={() => setSelectedTemplate(template.id)}
                    className={`p-6 rounded-xl border transition-all duration-200 text-left ${
                      selectedTemplate === template.id
                        ? 'border-purple-500 bg-purple-500/10'
                        : 'border-gray-700 bg-gray-800 hover:border-gray-600'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${template.color} p-3 mb-4`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">{template.name}</h4>
                    <p className="text-sm text-gray-400">{template.description}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Infographic Preview */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Infographic Preview</h3>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={handleGenerateInfographic}
                  disabled={isGenerating}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center space-x-2"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Generating...</span>
                    </>
                  ) : (
                    <>
                      <FileImage className="h-4 w-4" />
                      <span>Generate</span>
                    </>
                  )}
                </button>
                <button className="bg-gray-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-600 transition-colors flex items-center space-x-2">
                  <Download className="h-4 w-4" />
                  <span>Export</span>
                </button>
                <button className="bg-gray-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-600 transition-colors flex items-center space-x-2">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </button>
              </div>
            </div>

            {/* Mock Infographic */}
            <div className="bg-white rounded-lg p-8 min-h-[600px]">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{threat.name}</h2>
                <p className="text-lg text-gray-600">Cybersecurity Threat Analysis Report</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-red-50 rounded-lg">
                  <div className="text-3xl font-bold text-red-600 mb-2">{threat.severity.toUpperCase()}</div>
                  <div className="text-sm text-gray-600">Threat Level</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{threat.riskScore}</div>
                  <div className="text-sm text-gray-600">Risk Score</div>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">{threat.affectedSystems.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Systems Affected</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Indicators</h3>
                  <div className="space-y-2">
                    {threat.indicators.slice(0, 3).map((indicator, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 text-sm">{indicator}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Mitigation Steps</h3>
                  <div className="space-y-2">
                    {threat.mitigationSteps.slice(0, 3).map((step, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs">{index + 1}</span>
                        </div>
                        <p className="text-gray-700 text-sm">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-500">Generated by Autonomous CyberSec Threat Hunter</p>
                <p className="text-xs text-gray-400 mt-1">Powered by AI-driven threat intelligence</p>
              </div>
            </div>
          </div>

          {/* Customization Options */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4">Customization Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Color Theme</label>
                <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option>Corporate Blue</option>
                  <option>Security Red</option>
                  <option>Professional Gray</option>
                  <option>Custom Colors</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Layout Style</label>
                <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option>Modern Minimalist</option>
                  <option>Data-Heavy</option>
                  <option>Executive Summary</option>
                  <option>Technical Report</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Export Format</label>
                <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option>PNG (High Quality)</option>
                  <option>PDF (Print Ready)</option>
                  <option>SVG (Vector)</option>
                  <option>PowerPoint Slides</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfographicGenerator;