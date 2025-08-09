export interface ThreatData {
  id: string;
  name: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  category: string;
  description: string;
  indicators: string[];
  timeline: Array<{
    date: string;
    event: string;
  }>;
  riskScore: number;
  affectedSystems: number;
  mitigationSteps: string[];
}

export interface VisualizationData {
  type: 'chart' | 'network' | 'timeline' | 'heatmap';
  data: any;
  config: any;
}