import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Activity, Globe, Zap, ShieldCheck, Search, Database } from 'lucide-react';

export function DashboardView() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white flex items-center">
             Global World View
          </h2>
          <p className="text-slate-400">Real-time health and coverage of the Moneta Oracle network.</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 border border-cyan-900 bg-cyan-950/30 px-4 py-2 rounded-lg">
            <span className="relative flex h-3 w-3 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
            <span className="text-sm font-medium text-cyan-400 font-mono uppercase tracking-wider">Testnet Deployment</span>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-slate-400">Total Oracle Nodes</CardTitle>
            <Globe className="h-4 w-4 text-cyan-500" />
          </CardHeader>
          <CardContent>
            <div className="text-sm font-bold text-slate-500 font-mono tracking-widest mt-1 mb-2">[ UNDER DEVELOPMENT ]</div>
            <p className="text-xs text-slate-500 mt-1 flex items-center">
              Operator onboarding in progress
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-slate-400">Live Feed Speed</CardTitle>
            <Zap className="h-4 w-4 text-cyan-500" />
          </CardHeader>
          <CardContent>
            <div className="text-sm font-bold text-slate-500 font-mono tracking-widest mt-1 mb-2">[ UNDER DEVELOPMENT ]</div>
            <p className="text-xs text-slate-500 mt-1">Benchmarking network latency</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-slate-400">Consensus Engine</CardTitle>
            <ShieldCheck className="h-4 w-4 text-cyan-500" />
          </CardHeader>
          <CardContent>
            <div className="text-sm font-bold text-cyan-500 font-mono tracking-widest mt-1 mb-2">[ ACTIVE TESTING ]</div>
            <p className="text-xs text-slate-500 mt-1">Verifying cryptographic proofs</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-slate-400">Active Feeds</CardTitle>
            <Activity className="h-4 w-4 text-cyan-500" />
          </CardHeader>
          <CardContent>
            <div className="text-sm font-bold text-slate-500 font-mono tracking-widest mt-1 mb-2">[ COMING SOON ]</div>
            <p className="text-xs text-slate-500 mt-1 flex items-center">
               Data provider integrations
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        <Card className="col-span-5 h-[400px] flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0a0b14] to-[#050608]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50"></div>
          
          <div className="relative z-10 flex flex-col items-center p-6 border border-slate-800 bg-slate-900/80 backdrop-blur-sm rounded-xl max-w-sm text-center">
            <Search className="w-8 h-8 text-cyan-500 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2 font-mono tracking-widest uppercase">Network Explorer</h3>
            <p className="text-slate-400 text-sm mb-6">Visualizing real-time oracle queries, cross-chain verification, and data provider latency.</p>
            <div className="font-mono text-[10px] px-3 py-1 bg-cyan-950 text-cyan-400 rounded border border-cyan-900 whitespace-nowrap">
              [ UNDER DEVELOPMENT ]
            </div>
            <p className="text-xs text-slate-500 mt-4">Expected deployment: Q4 2026</p>
          </div>
        </Card>
        
        <Card className="col-span-2 h-[400px] overflow-hidden flex flex-col">
          <CardHeader>
            <CardTitle>System Health Overview</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col items-center justify-center p-6 text-center">
             <Database className="w-8 h-8 text-slate-700 mb-4" />
             <h3 className="text-sm font-bold text-white mb-2">Infrastructure Syncing</h3>
             <p className="text-xs text-slate-500 mb-6">Connecting to testnet P2P gossip network and deploying security monitoring tools.</p>
             <div className="font-mono text-[10px] px-2 py-0.5 bg-slate-800 text-slate-400 rounded border border-slate-700 whitespace-nowrap">
                [ UNDER DEVELOPMENT ]
             </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
