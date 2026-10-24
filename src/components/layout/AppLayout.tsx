import React, { useState } from 'react';
import { ViewType } from '../../types';
import { Globe, Database, Network, Server, ShieldCheck, Settings, Menu, Activity, Radio, Bell, Map, HeartPulse, Code, Boxes, LayoutDashboard, Shield, BrainCircuit, LineChart, FileText, Users, Lock, ChevronDown, ChevronRight, ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';
import { Toaster } from '../ui/Toaster';
import { Footer } from './Footer';
import { MONETA_CHAIN_URL } from '../../config';

interface AppLayoutProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
  children: React.ReactNode;
}

type NavGroup = {
  title: string;
  items: { id: ViewType; label: string; icon: React.ElementType }[];
};

const NAV_GROUPS: NavGroup[] = [
  {
    title: 'Core',
    items: [
      { id: 'dashboard', label: 'Landing Dashboard', icon: LayoutDashboard },
      { id: 'live_feeds', label: 'Live Oracle Feeds', icon: Radio },
      { id: 'alerts', label: 'Alerts & Notifications', icon: Bell },
    ]
  },
  {
    title: 'Infrastructure',
    items: [
      { id: 'nodes', label: 'Oracle Node Monitoring', icon: Server },
      { id: 'map', label: 'Geographic Oracle Map', icon: Map },
      { id: 'system_health', label: 'System Health', icon: HeartPulse },
    ]
  },
  {
    title: 'Developers',
    items: [
      { id: 'query', label: 'Ask the Oracle', icon: Database },
      { id: 'subscription', label: 'WebSocket Feed', icon: Network },
      { id: 'verification', label: 'Proof Checker', icon: ShieldCheck },
      { id: 'smart_contracts', label: 'Smart Contract Feeds', icon: Boxes },
      { id: 'developer_portal', label: 'API & Dev Portal', icon: Code },
    ]
  },
  {
    title: 'Security & Analytics',
    items: [
      { id: 'security', label: 'Security Center', icon: Shield },
      { id: 'ai_monitoring', label: 'AI Monitoring', icon: BrainCircuit },
      { id: 'analytics', label: 'Analytics & Charts', icon: LineChart },
      { id: 'audit_logs', label: 'Audit Logs', icon: FileText },
    ]
  },
  {
    title: 'Governance',
    items: [
      { id: 'feed_management', label: 'Feed Management', icon: Activity },
      { id: 'governance', label: 'Governance Portal', icon: Lock },
      { id: 'operator', label: 'My Node (Operator)', icon: Server },
      { id: 'users', label: 'User & Role Mgmt', icon: Users },
      { id: 'settings', label: 'Settings & Config', icon: Settings },
    ]
  }
];

export function AppLayout({ currentView, onViewChange, children }: AppLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [expandedGroups, setExpandedGroups] = useState<string[]>(NAV_GROUPS.map(g => g.title));


  const toggleGroup = (title: string) => {
    setExpandedGroups(prev => 
      prev.includes(title) ? prev.filter(t => t !== title) : [...prev, title]
    );
  };

  return (
    <div className="flex min-h-screen bg-[#050608] text-white relative">
      {/* Sidebar - Desktop */}
      <aside className="hidden w-64 border-r border-slate-800 bg-[#07080c] md:flex flex-col sticky top-0 h-screen overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center cursor-pointer" onClick={() => onViewChange('landing')}>
          <img src="/assets/moneta-oracle-logo.png" alt="MONETA CHAIN ORACLE" className="h-[38px] md:h-[48px] w-auto object-contain block" />
        </div>
        
        {/* Navigation list */}
        <nav className="flex-1 overflow-y-auto py-4 custom-scrollbar">
          {NAV_GROUPS.map((group) => (
            <div key={group.title} className="mb-4">
              <button 
                onClick={() => toggleGroup(group.title)}
                className="w-full flex items-center justify-between px-6 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-slate-300 transition-colors"
              >
                <span>{group.title}</span>
                {expandedGroups.includes(group.title) ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
              </button>
              
              {expandedGroups.includes(group.title) && (
                <div className="mt-1 px-3 space-y-0.5">
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    const isActive = currentView === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => onViewChange(item.id)}
                        className={`w-full flex items-center space-x-3 px-3 py-2 rounded text-xs transition-colors ${
                          isActive 
                            ? 'bg-cyan-600/20 text-cyan-400 font-medium border border-cyan-500/20' 
                            : 'text-slate-400 hover:bg-slate-900/50 hover:text-slate-200 border border-transparent'
                        }`}
                      >
                        <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-500' : 'text-slate-500'}`} />
                        <span className="truncate">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </nav>
        
        <div className="p-3 border-t border-slate-800 bg-[#06070a]">
          <a
            href={MONETA_CHAIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full px-3 py-2 rounded bg-cyan-950/40 hover:bg-cyan-900/40 border border-cyan-800/40 hover:border-cyan-500/50 text-cyan-400 hover:text-cyan-300 text-xs font-semibold tracking-wide transition-all group"
          >
            <span className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>Official Website</span>
            </span>
            <ExternalLink className="w-3 h-3 text-cyan-500 group-hover:text-cyan-300" />
          </a>
        </div>

        <div className="p-4 border-t border-slate-800 text-[10px] text-slate-600 font-mono uppercase tracking-widest flex items-center justify-between">
          <span>MONETA v2.4</span>
          <span className="flex items-center text-green-500/70"><span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 animate-pulse"></span> ONLINE</span>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 relative">
        {/* Mobile Header */}
        <header className="md:hidden sticky top-0 flex items-center justify-between p-4 border-b border-slate-800 bg-[#0a0b14] z-50">
          <div className="flex items-center cursor-pointer" onClick={() => onViewChange('landing')}>
            <img src="/assets/moneta-oracle-logo.png" alt="MONETA CHAIN ORACLE" className="h-[38px] w-auto object-contain block" />
          </div>
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="w-6 h-6" />
          </Button>
        </header>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed top-[73px] left-0 right-0 bottom-0 bg-[#07080c] z-50 overflow-y-auto">
            <nav className="p-4 space-y-6">
               {NAV_GROUPS.map((group) => (
                 <div key={group.title}>
                   <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 px-2">{group.title}</h3>
                   <div className="space-y-1">
                     {group.items.map((item) => {
                      const Icon = item.icon;
                      const isActive = currentView === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => { onViewChange(item.id); setMobileMenuOpen(false); }}
                          className={`w-full flex items-center space-x-3 px-3 py-3 rounded text-sm ${
                            isActive ? 'bg-cyan-600/20 text-cyan-400 border border-cyan-500/20' : 'text-slate-400 hover:bg-slate-900/50 hover:text-slate-200 border border-transparent'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                          <span>{item.label}</span>
                        </button>
                      );
                    })}
                   </div>
                 </div>
               ))}
               <div className="pt-4 border-t border-slate-800">
                 <a
                   href={MONETA_CHAIN_URL}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center justify-between w-full px-4 py-3 rounded-lg bg-cyan-950/50 border border-cyan-800/50 text-cyan-400 font-semibold text-sm"
                 >
                   <span className="flex items-center gap-2">
                     <Globe className="w-4 h-4 text-cyan-400" />
                     <span>Official Website</span>
                   </span>
                   <ExternalLink className="w-4 h-4 text-cyan-500" />
                 </a>
               </div>
             </nav>
           </div>
         )}

        {/* Main scrollable area */}
        <main className="flex-1 select-text relative z-10 custom-scrollbar w-full flex flex-col">
          <div className="max-w-7xl mx-auto p-4 md:p-8 flex-1 w-full">
            {children}
          </div>
          <Footer onViewChange={onViewChange} />
        </main>
      </div>
      <Toaster />
    </div>
  );
}
