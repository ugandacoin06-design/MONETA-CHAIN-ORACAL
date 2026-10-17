import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Shield, ShieldAlert, Activity } from 'lucide-react';

export function SecurityView() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center">
          <Shield className="w-8 h-8 mr-3 text-cyan-500" /> Security Center
        </h2>
        <p className="text-slate-400">Enterprise-grade threat monitoring and network defense.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-red-500/30 bg-red-500/5">
          <CardHeader>
            <CardTitle className="text-red-400">Active Threats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-red-500">2</div>
            <p className="text-xs text-slate-400 mt-2">DDoS attempt mitigated. Invalid signature blocked.</p>
          </CardContent>
        </Card>
        
        <Card className="border-cyan-500/30">
          <CardHeader>
            <CardTitle className="text-cyan-400">Security Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-white">99.8/100</div>
            <p className="text-xs text-slate-400 mt-2">AI behavioral analysis normal.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Intrusion Events (24h)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-white">14</div>
            <p className="text-xs text-slate-400 mt-2">All handled automatically.</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center"><Activity className="w-4 h-4 mr-2 text-red-500" /> Recent Security Incidents</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
             {[
               { id: 1, type: 'Invalid Signature', source: 'Node 0x8a...2b', action: 'Request dropped', time: '5m ago' },
               { id: 2, type: 'DDoS Attempt', source: '192.168.x.x', action: 'IP Blacklisted', time: '1h ago' },
               { id: 3, type: 'Data Anomaly', source: 'Weather API', action: 'AI Filtered', time: '3h ago' },
             ].map(incident => (
                <div key={incident.id} className="flex justify-between items-center p-3 bg-slate-900 border border-slate-800 rounded">
                   <div className="flex items-center space-x-3">
                     <ShieldAlert className="w-4 h-4 text-red-500" />
                     <div>
                       <p className="text-sm font-bold text-white">{incident.type}</p>
                       <p className="text-xs text-slate-500 font-mono">{incident.source}</p>
                     </div>
                   </div>
                   <div className="text-right">
                     <p className="text-xs text-green-500 font-bold">{incident.action}</p>
                     <p className="text-[10px] text-slate-500">{incident.time}</p>
                   </div>
                </div>
             ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
