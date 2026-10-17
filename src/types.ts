export type ViewType = 
  | 'landing'
  | 'dashboard' 
  | 'live_feeds' 
  | 'alerts'
  | 'nodes' 
  | 'map' 
  | 'system_health'
  | 'query' 
  | 'subscription' 
  | 'verification' 
  | 'developer_portal'
  | 'smart_contracts'
  | 'feed_management' 
  | 'governance' 
  | 'users' 
  | 'settings'
  | 'security' 
  | 'ai_monitoring' 
  | 'analytics' 
  | 'audit_logs'
  | 'operator'
  | 'about'
  | 'services'
  | 'ecosystem';

export interface DataPoint {
  time: string;
  value: number;
}

export interface OracleResponse {
  id: string;
  timestamp: string;
  continent: string;
  country: string;
  category: string;
  subcategory: string;
  value: string | number;
  confidence: number;
  nodesAgreed: number;
  totalNodes: number;
  signatures: string[];
  latencyMs: number;
  onChainAnchorHeight?: number;
}
