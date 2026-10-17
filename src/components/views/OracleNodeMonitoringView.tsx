import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Server, Activity, Shield, MapPin, Search } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';

const mockNodes = [
  { id: 'MNT-NODE-01', org: 'Vortex Innovations', status: 'online', lat: '12ms', region: 'EU/FR', cpu: '45%', mem: '32%', rep: '99.8', consensus: '99.9%' },
  { id: 'MNT-NODE-02', org: 'Global Oracle Partners', status: 'online', lat: '42ms', region: 'AS/JP', cpu: '62%', mem: '48%', rep: '98.5', consensus: '99.5%' },
  { id: 'MNT-NODE-03', org: 'African Data Consortium', status: 'online', lat: '24ms', region: 'AF/NG', cpu: '22%', mem: '15%', rep: '99.9', consensus: '100%' },
  { id: 'MNT-NODE-04', org: 'Nexus Data Dynamics', status: 'offline', lat: '--', region: 'NA/US', cpu: '--', mem: '--', rep: '85.2', consensus: '82.1%' },
  { id: 'MNT-NODE-05', org: 'EU Blockchain Initiative', status: 'online', lat: '18ms', region: 'EU/DE', cpu: '51%', mem: '44%', rep: '99.1', consensus: '99.7%' },
];

export function OracleNodeMonitoringView() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center">
            <Server className="w-8 h-8 mr-3 text-cyan-500" /> Oracle Node Monitoring
          </h2>
          <p className="text-slate-400">Global view of all active and inactive oracle validator nodes.</p>
        </div>
        <div className="flex space-x-2">
            <div className="relative">
               <Search className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
               <Input placeholder="Search Node ID..." className="pl-9 w-64 h-10" />
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
         <Card className="border-slate-800">
           <CardHeader className="pb-2">
             <CardTitle className="text-xs text-slate-500">Total Nodes</CardTitle>
           </CardHeader>
           <CardContent>
             <div className="text-3xl font-bold text-white">852</div>
           </CardContent>
         </Card>
         <Card className="border-green-500/30">
           <CardHeader className="pb-2">
             <CardTitle className="text-xs text-green-500">Online</CardTitle>
           </CardHeader>
           <CardContent>
             <div className="text-3xl font-bold text-white">848</div>
           </CardContent>
         </Card>
         <Card className="border-red-500/30">
           <CardHeader className="pb-2">
             <CardTitle className="text-xs text-red-500">Offline</CardTitle>
           </CardHeader>
           <CardContent>
             <div className="text-3xl font-bold text-white">4</div>
           </CardContent>
         </Card>
         <Card className="border-cyan-500/30">
           <CardHeader className="pb-2">
             <CardTitle className="text-xs text-cyan-500">Avg Global Latency</CardTitle>
           </CardHeader>
           <CardContent>
             <div className="text-3xl font-bold text-white">24ms</div>
           </CardContent>
         </Card>
      </div>

      <Card>
        <CardContent className="p-0 overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-400">
            <thead className="text-[10px] uppercase tracking-widest bg-[#0a0b14] border-b border-slate-800 text-slate-500">
              <tr>
                <th className="px-6 py-4 font-semibold">Node ID / Owner</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Region</th>
                <th className="px-6 py-4 font-semibold">Latency</th>
                <th className="px-6 py-4 font-semibold">CPU / Mem</th>
                <th className="px-6 py-4 font-semibold">Reputation</th>
                <th className="px-6 py-4 font-semibold">Consensus</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {mockNodes.map((node, i) => (
                <tr key={i} className="hover:bg-slate-900/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-bold text-slate-200">{node.id}</div>
                    <div className="text-xs text-slate-500 mt-1">{node.org}</div>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant={node.status === 'online' ? 'success' : 'danger'}>
                      {node.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-slate-300">
                      <MapPin className="w-3 h-3 mr-1 text-slate-500" /> {node.region}
                    </div>
                  </td>
                  <td className="px-6 py-4 font-mono text-cyan-400">{node.lat}</td>
                  <td className="px-6 py-4">
                     <div className="flex items-center space-x-2 text-xs">
                        <span className="text-slate-300">{node.cpu}</span>
                        <span className="text-slate-600">/</span>
                        <span className="text-slate-300">{node.mem}</span>
                     </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className={`font-bold ${parseFloat(node.rep) > 99 ? 'text-green-500' : parseFloat(node.rep) > 90 ? 'text-yellow-500' : 'text-red-500'}`}>
                      {node.rep}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-300">{node.consensus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
