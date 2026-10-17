import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Server, Wallet, ShieldAlert, Cpu, Award } from 'lucide-react';

export function NodeOperatorView() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between space-y-4 md:space-y-0">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white">Node Operator Panel</h2>
          <p className="text-slate-400">Consortium member dashboard. Manage your node, stakes, and geographical shard.</p>
        </div>
        <div className="flex items-center space-x-3 bg-[#0a0b14] border border-slate-800 rounded-lg p-2">
           <Wallet className="text-cyan-500 w-5 h-5 ml-2" />
           <div className="text-right pr-2">
              <div className="text-xs text-slate-500 font-medium">Connected Wallet</div>
              <div className="text-sm font-mono font-semibold text-slate-200">0xEA24...90F1</div>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
         <Card className="bg-[#0a0b14] border border-green-500/30">
           <CardHeader className="pb-2">
             <CardTitle className="text-sm font-medium text-slate-400 flex items-center justify-between">
               Node Status <Badge variant="success" className="text-[10px]">ONLINE</Badge>
             </CardTitle>
           </CardHeader>
           <CardContent>
             <div className="text-2xl font-bold text-white flex items-center">
               <Server className="w-5 h-5 mr-2 text-green-400" /> MNT-NODE-01
             </div>
           </CardContent>
         </Card>

         <Card>
           <CardHeader className="pb-2">
             <CardTitle className="text-sm font-medium text-slate-400">Total Stake</CardTitle>
           </CardHeader>
           <CardContent>
             <div className="text-2xl font-bold text-white">1,250,000</div>
             <p className="text-xs text-cyan-500 font-mono mt-1">MONETA</p>
           </CardContent>
         </Card>

         <Card>
           <CardHeader className="pb-2">
             <CardTitle className="text-sm font-medium text-slate-400">Uptime (30d)</CardTitle>
           </CardHeader>
           <CardContent>
             <div className="text-2xl font-bold text-white">99.998%</div>
             <p className="text-xs text-green-400 mt-1">Tier 1 Elite</p>
           </CardContent>
         </Card>

         <Card>
           <CardHeader className="pb-2">
             <CardTitle className="text-sm font-medium text-slate-400">Pending Rewards</CardTitle>
           </CardHeader>
           <CardContent>
             <div className="text-2xl font-bold text-white">4,392</div>
             <p className="text-xs text-slate-500 font-mono mt-1">MONETA</p>
           </CardContent>
         </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Hardware & Geographic Shard</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-1">
                   <p className="text-xs text-slate-500">Continent</p>
                   <p className="text-sm font-semibold text-slate-200">Europe</p>
                </div>
                <div className="space-y-1">
                   <p className="text-xs text-slate-500">Country</p>
                   <p className="text-sm font-semibold text-slate-200">France (FR)</p>
                </div>
                <div className="space-y-1">
                   <p className="text-xs text-slate-500">Queries Served</p>
                   <p className="text-sm font-semibold text-slate-200">1.2M</p>
                </div>
                <div className="space-y-1">
                   <p className="text-xs text-slate-500">Avg Latency</p>
                   <p className="text-sm font-semibold text-green-400">18ms</p>
                </div>
             </div>
             
             <div className="p-4 border border-slate-800 bg-[#050608] rounded-lg flex items-start justify-between">
               <div className="flex space-x-3">
                 <Cpu className="w-5 h-5 text-cyan-500 mt-0.5" />
                 <div>
                   <p className="text-sm font-medium text-slate-200">Geographic Shift Request</p>
                   <p className="text-xs text-slate-500 max-w-sm mt-1">Request reassignment to a different country or continent to optimize global coverage. Subject to consortium vote.</p>
                 </div>
               </div>
               <Button variant="outline" size="sm">Request Shift</Button>
             </div>
          </CardContent>
        </Card>

        <Card className="border-rose-900/30">
          <CardHeader>
            <CardTitle className="text-red-400 flex items-center">
              <ShieldAlert className="w-4 h-4 mr-2" /> Recent Disputes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 bg-[#050608] border border-slate-800 rounded-lg">
               <div className="flex justify-between items-center mb-2">
                 <Badge variant="outline" className="text-[10px] text-slate-400 border-slate-700">RESOLVED</Badge>
                 <span className="text-[10px] text-slate-500">Oct 12, 14:02 UTC</span>
               </div>
               <p className="text-xs text-slate-300">Accusation of invalid temperature reporting for RU/Moscow.</p>
               <div className="mt-2 flex justify-between items-center">
                 <span className="text-xs font-semibold text-green-400 flex items-center">
                   <Award className="w-3 h-3 mr-1" /> Won Display
                 </span>
                 <span className="text-xs font-mono text-slate-500">Tx: 0x8a1...f0</span>
               </div>
            </div>
            
            <div className="text-center py-4 border-2 border-dashed border-slate-800 rounded-lg text-slate-500">
               <ShieldAlert className="w-6 h-6 mx-auto mb-2 opacity-30" />
               <p className="text-xs">No active slashing alerts.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
