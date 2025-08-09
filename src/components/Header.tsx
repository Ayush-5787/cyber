import React from 'react';
import { Shield, Search, BarChart3, FileImage, Activity } from 'lucide-react';

interface HeaderProps {
  activeView: string;
  setActiveView: (view: 'search' | 'dashboard' | 'infographic' | 'analytics') => void;
}

const Header: React.FC<HeaderProps> = ({ activeView, setActiveView }) => {
  const navItems = [
    { id: 'search', label: 'Threat Hunter', icon: Search },
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'infographic', label: 'Infographics', icon: FileImage },
    { id: 'analytics', label: 'Analytics', icon: Activity },
  ] as const;

  return (
    <header className="bg-gray-800 border-b border-gray-700 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Shield className="h-8 w-8 text-cyan-400" />
              <div className="absolute inset-0 bg-cyan-400 opacity-20 blur-sm rounded-full"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">
                Autonomous <span className="text-cyan-400">CyberSec</span>
              </h1>
              <p className="text-sm text-gray-400">Threat Hunter & Intelligence Platform</p>
            </div>
          </div>

          <nav className="flex space-x-1">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveView(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    activeView === item.id
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-cyan-400'
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;