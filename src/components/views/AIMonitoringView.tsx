import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../ui/card';
import { BrainCircuit, Activity, Server, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { Badge } from '../ui/badge';

export function AIMonitoringView() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center">
          <BrainCircuit className="w-8 h-8 mr-3 text-cyan-500" /> AI Monitoring Dashboard
        </h2>
        <p className="text-slate-400">Advanced AI fraud detection, predictive analytics, and automated defense.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-cyan-500/30">
          <CardHeader>
            <CardTitle className="text-cyan-400">AI Confidence Map</CardTitle>
          </CardHeader>
          <CardContent>
             <div className="flex items-end justify-between">
                <div className="text-4xl font-bold text-white">99.98%</div>
                <Activity className="w-6 h-6 text-cyan-500 opacity-50" />
             </div>
             <p className="text-xs text-slate-400 mt-2">Network intelligence behavioral scoring.</p>
          </CardContent>
        </Card>
        
        <Card className="border-yellow-500/30">
          <CardHeader>
            <CardTitle className="text-yellow-400">Anomalies Detected</CardTitle>
          </CardHeader>
          <CardContent>
             <div className="flex items-end justify-between">
                <div className="text-4xl font-bold text-white">3</div>
                <AlertTriangle className="w-6 h-6 text-yellow-500 opacity-50" />
             </div>
             <p className="text-xs text-slate-400 mt-2">Past 24 hours. Evaluated by defense neural net.</p>
          </CardContent>
        </Card>

        <Card className="border-green-500/30">
          <CardHeader>
            <CardTitle className="text-green-500">Auto-Mitigations</CardTitle>
          </CardHeader>
          <CardContent>
             <div className="flex items-end justify-between">
                <div className="text-4xl font-bold text-white">3</div>
                <CheckCircle2 className="w-6 h-6 text-green-500 opacity-50" />
             </div>
             <p className="text-xs text-slate-400 mt-2">Threats automatically neutralized without human input.</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent AI Defense Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
             {[
               { rule: 'Behavioral Deviation', trigger: 'Sub-millisecond data spoofing attempt', action: 'Node connection severed', conf: '99.9%' },
               { rule: 'Price Feed Anomaly', trigger: 'XAU/USD variance > 5% against global mean', action: 'Feed consensus excluded', conf: '98.5%' },
               { rule: 'Pattern Recognition', trigger: 'DDoS precursor fingerprint matching', action: 'IP blocklist updated', conf: '99.1%' },
             ].map((action, i) => (
                <div key={i} className="flex justify-between items-start p-4 bg-slate-900 border border-slate-800 rounded">
                   <div className="space-y-1">
                     <div className="flex items-center space-x-2">
                        <Badge variant="warning">DETECTED</Badge>
                        <span className="text-sm font-bold text-white">{action.rule}</span>
                     </div>
                     <p className="text-xs text-slate-400 ml-1">{action.trigger}</p>
                   </div>
                   <div className="text-right">
                     <p className="text-xs text-green-400 font-bold uppercase tracking-widest">{action.action}</p>
                     <p className="text-[10px] text-slate-500 mt-1 font-mono">CONF: {action.conf}</p>
                   </div>
                </div>
             ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
