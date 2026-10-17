import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../ui/card';
import { Button } from '../ui/button';
import { Activity, Play, Square, Settings2, Link2, Download } from 'lucide-react';
import { Badge } from '../ui/badge';

export function SubscriptionConsoleView() {
  const [isStreaming, setIsStreaming] = useState(false);
  const [autoAnchor, setAutoAnchor] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    let interval: any;
    if (isStreaming) {
      interval = setInterval(() => {
        setMessages(prev => {
          const newMsg = {
             id: Date.now(),
             time: new Date().toLocaleTimeString(),
             asset: 'Nikkei225',
             price: (38000 + (Math.random() * 200 - 100)).toFixed(2),
             latency: Math.floor(Math.random() * 20) + 15,
             anchored: autoAnchor && Math.random() > 0.8
          };
          return [newMsg, ...prev].slice(0, 15);
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isStreaming, autoAnchor]);

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white">Subscription Console</h2>
          <p className="text-slate-400">WebSocket feed for continuous dApp data streams.</p>
        </div>
        <div className="flex space-x-3 items-center rounded-lg border border-slate-800 bg-[#050608] px-4 py-2">
           <div className={`h-2 w-2 rounded-full ${isStreaming ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
           <span className="text-sm font-mono text-slate-300">{isStreaming ? 'wss://oracle.moneta.network/stream' : 'Disconnected'}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
         <Card className="lg:col-span-1 border-slate-800">
           <CardHeader>
             <CardTitle className="text-sm border-b border-slate-800 pb-2">Stream Configuration</CardTitle>
           </CardHeader>
           <CardContent className="space-y-5">
             <div className="space-y-2">
                <label className="text-xs font-medium text-slate-400">Target Asset</label>
                <div className="px-3 py-2 bg-[#050608] border border-slate-800 rounded text-sm text-slate-300 font-mono">
                  &#123; "continent": "AS", "country": "JP", "category": "price", "subcategory": "Nikkei225" &#125;
                </div>
             </div>

             <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                   <label className="text-xs font-medium text-slate-300">Auto-Anchor to Chain</label>
                   <button 
                     onClick={() => setAutoAnchor(!autoAnchor)}
                     className={`w-9 h-5 flex items-center rounded-full p-1 transition-colors ${autoAnchor ? 'bg-cyan-500' : 'bg-slate-700'}`}
                   >
                     <div className={`bg-white w-3 h-3 rounded-full shadow-md transform transition-transform ${autoAnchor ? 'translate-x-4' : ''}`} />
                   </button>
                </div>
                <p className="text-[10px] text-slate-500">Every 10 seconds, batched data is anchored to Moneta Chain. Costs MONETA.</p>
             </div>

             <div className="pt-4 space-y-3">
               <Button 
                  className="w-full" 
                  variant={isStreaming ? 'danger' : 'default'}
                  onClick={() => setIsStreaming(!isStreaming)}
                >
                 {isStreaming ? (
                   <><Square className="w-4 h-4 mr-2" /> Stop Stream</>
                 ) : (
                   <><Play className="w-4 h-4 mr-2" /> Connect & Stream</>
                 )}
               </Button>
               {isStreaming && (
                 <Button className="w-full" variant="outline" size="sm">
                   <Link2 className="w-4 h-4 mr-2" /> View ABI / API Keys
                 </Button>
               )}
             </div>
           </CardContent>
         </Card>

         <Card className="lg:col-span-3 h-[500px] flex flex-col font-mono relative overflow-hidden">
           {isStreaming && <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-500/50 animate-pulse" />}
           
           <CardHeader className="py-3 px-4 border-b border-slate-800 bg-[#050608] flex flex-row items-center justify-between space-y-0">
             <div className="flex items-center space-x-4">
                <CardTitle className="text-sm text-slate-300 flex items-center">
                  <Activity className="w-4 h-4 mr-2 text-cyan-400" /> Live Feed
                </CardTitle>
                <div className="hidden md:flex space-x-3 text-xs">
                   <span className="text-slate-500">Loss: 0.00%</span>
                   <span className="text-green-500">Ping: ~12ms</span>
                </div>
             </div>
             <Button variant="ghost" size="icon" className="h-6 w-6"><Download className="w-3 h-3 text-slate-400" /></Button>
           </CardHeader>
           
           <CardContent className="flex-1 overflow-auto p-0 bg-[#050608]">
             {messages.length === 0 ? (
               <div className="h-full flex items-center justify-center text-slate-600 text-sm">
                 {isStreaming ? 'Waiting for first message...' : 'Stream inactive. Click Connect to begin.'}
               </div>
             ) : (
               <div className="divide-y divide-slate-800/50">
                 {messages.map((msg) => (
                   <div key={msg.id} className="p-3 text-xs md:text-sm flex items-center hover:bg-[#07080c] transition-colors group">
                     <span className="text-cyan-600 w-24 flex-shrink-0">{msg.time}</span>
                     <span className="text-slate-500 w-24">[{msg.asset}]</span>
                     <span className="text-green-400 font-semibold w-24">¥{msg.price}</span>
                     <span className="text-slate-500 flex-1 flex items-center">
                        latency: {msg.latency}ms
                     </span>
                     <div className="w-32 flex justify-end">
                       {msg.anchored ? (
                          <Badge variant="success" className="text-[9px] py-0">ANCHORED</Badge>
                       ) : autoAnchor && msg.latency > 18 ? (
                          <span className="text-[10px] text-slate-500">pending block...</span>
                       ) : null}
                     </div>
                   </div>
                 ))}
               </div>
             )}
           </CardContent>
         </Card>
      </div>
    </div>
  );
}
