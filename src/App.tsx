import React, { useState } from 'react';
import { ViewType } from './types';
import { AppLayout } from './components/layout/AppLayout';
import { DashboardView } from './components/views/DashboardView';
import { QueryInterfaceView } from './components/views/QueryInterfaceView';
import { SubscriptionConsoleView } from './components/views/SubscriptionConsoleView';
import { NodeOperatorView } from './components/views/NodeOperatorView';
import { VerificationView } from './components/views/VerificationView';
import { LiveFeedsView } from './components/views/LiveFeedsView';
import { SecurityView } from './components/views/SecurityView';
import { OracleNodeMonitoringView } from './components/views/OracleNodeMonitoringView';
import { AIMonitoringView } from './components/views/AIMonitoringView';
import { FeedManagementView } from './components/views/FeedManagementView';
import { GenericView } from './components/views/GenericView';
import { useNotificationSimulator } from './hooks/useNotificationSimulator';
import { Bell, Map, HeartPulse, Boxes, Code, LineChart, FileText, Lock, Users, Settings } from 'lucide-react';

import { LandingPageView } from './components/views/LandingPageView';
import { AboutView } from './components/views/AboutView';
import { ServicesView } from './components/views/ServicesView';
import { EcosystemLinksView } from "./components/views/EcosystemLinksView";

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('landing');
  useNotificationSimulator(currentView);
  
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case 'dashboard': return <DashboardView />;
      case 'query': return <QueryInterfaceView />;
      case 'subscription': return <SubscriptionConsoleView />;
      case 'operator': return <NodeOperatorView />;
      case 'verification': return <VerificationView />;
      case 'live_feeds': return <LiveFeedsView />;
      case 'security': return <SecurityView />;
      case 'nodes': return <OracleNodeMonitoringView />;
      case 'ai_monitoring': return <AIMonitoringView />;
      case 'feed_management': return <FeedManagementView />;
      
      // Generic Placeholders for requested advanced modules
      case 'alerts': return <GenericView title="Alerts & Notifications" description="Real-time alert feed and notification history." icon={Bell} features={[
          'Real-time alert feed',
          'Filter by Security, Node failure, Feed error, Governance updates',
          'Alert severity levels (low / medium / high / critical)',
          'Acknowledge / dismiss alerts',
          'Routing settings (email, SMS, push)'
      ]}/>;
      case 'map': return <GenericView title="Global Oracle Map" description="Interactive world map with real-time node traffic." icon={Map} features={[
          'World map with oracle nodes',
          'Node location pins & live traffic lines',
          'Regional performance heatmap',
          'Attack origin markers',
          'Zoom & region filters',
          'Real-time movement animations'
      ]}/>;
      case 'system_health': return <GenericView title="System Health" description="Cluster-level infrastructure and resource monitoring." icon={HeartPulse} features={[
          'CPU usage (cluster level)',
          'RAM usage, Disk/storage usage, Network bandwidth',
          'Database health & Blockchain sync status',
          'Queue processing status & Error rate monitoring',
          'Uptime percentage'
      ]}/>;
      case 'smart_contracts': return <GenericView title="Smart Contract Feeds" description="View which contracts rely on oracle data." icon={Boxes} features={[
          'List of smart contracts using oracle',
          'Contract address & Connected feeds',
          'Trigger conditions',
          'Event logs & Transaction history',
          'Feed-to-contract mapping diagram',
          'Auto-execution status & Failure logs'
      ]}/>;
      case 'developer_portal': return <GenericView title="API & Developer Portal" description="Tools and documentation for integration." icon={Code} features={[
          'API key generation & API documentation',
          'Endpoint list (feeds, nodes, data)',
          'Test API console & Webhook setup panel',
          'SDK download section & Example code snippets',
          'Rate limit monitoring & Access logs'
      ]}/>;
      case 'analytics': return <GenericView title="Analytics & Reports" description="Performance charts and historical data trends." icon={LineChart} features={[
          'Feed performance charts & Node uptime graphs',
          'Consensus accuracy graph & Latency heatmaps',
          'Historical data trends & Oracle usage statistics',
          'Export options (PDF, CSV, JSON)',
          'Custom date range filters'
      ]}/>;
      case 'audit_logs': return <GenericView title="Audit Logs" description="Full system activity logs for compliance." icon={FileText} features={[
          'Full system activity logs',
          'Filter by user / node / action',
          'Time-stamped events',
          'Feed modifications history',
          'Governance actions & Security event logs',
          'Export logs feature & Tamper-proof record view'
      ]}/>;
      case 'governance': return <GenericView title="Governance Portal" description="Consortium voting and multi-sig approvals." icon={Lock} features={[
          'Proposal list (add/remove nodes, feeds)',
          'Voting system (YES / NO / ABSTAIN)',
          'Active votes timer & Consortium member list',
          'Voting power weight system',
          'Decision history logs & Policy update panel',
          'Multi-signature approval system'
      ]}/>;
      case 'users': return <GenericView title="User & Role Management" description="Manage access control and admin roles." icon={Users} features={[
          'User list & Role assignment (Admin, Validator, Developer, Viewer)',
          'Permission settings & Access level controls',
          'Add/remove users',
          'MFA enable/disable',
          'Login history logs & Device tracking'
      ]}/>;
      case 'settings': return <GenericView title="Settings & Configuration" description="Global system customization and policies." icon={Settings} features={[
          'System configuration & API controls',
          'Feed interval settings',
          'Theme settings (dark mode default)',
          'Security policies & Node configuration rules',
          'Backup settings & Notification preferences'
      ]}/>;
      
      default: return <DashboardView />;
    }
  };

  if (currentView === 'landing') {
    return <LandingPageView onViewChange={setCurrentView} />;
  }

  if (currentView === 'about') {
    return <AboutView onViewChange={setCurrentView} />;
  }

  if (currentView === 'ecosystem') {
    return <EcosystemLinksView onViewChange={setCurrentView} />;
  }
  if (currentView === 'services') {
    return <ServicesView onViewChange={setCurrentView} />;
  }

  return (
    <AppLayout currentView={currentView} onViewChange={setCurrentView}>
      {renderView()}
    </AppLayout>
  );
}
