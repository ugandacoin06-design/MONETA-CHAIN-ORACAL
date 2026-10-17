import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Radio, Search, Filter } from 'lucide-react';
import { Input } from '../ui/input';

export function LiveFeedsView() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white mb-2">Live Oracle Feeds</h2>
          <p className="text-slate-400">Monitor real-time data streams reporting across the network.</p>
        </div>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 border-b border-slate-800">
           <div className="flex space-x-4 flex-1">
             <div className="relative flex-1 max-w-sm">
               <Search className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
               <Input placeholder="Search feeds (e.g. BTC/USD)..." className="pl-9" />
             </div>
             <button className="px-3 py-2 bg-slate-900 border border-slate-700 rounded text-xs text-slate-300 flex items-center">
               <Filter className="w-3 h-3 mr-2" /> Categories
             </button>
           </div>
        </CardHeader>
        <CardContent className="p-0">
           <div className="divide-y divide-slate-800">
              {['BTC/USD', 'ETH/USD', 'SOL/USD', 'XAU/USD', 'EUR/USD', 'London Temp °C'].map((feed, i) => (
                <div key={i} className="p-4 flex items-center justify-between hover:bg-slate-900/30 transition-colors">
                  <div className="flex items-center space-x-4">
                     <Radio className="w-5 h-5 text-cyan-500" />
                     <div>
                       <h4 className="font-bold text-white">{feed}</h4>
                       <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Updates real-time</p>
                     </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-mono text-white">
                       {i === 5 ? '18.2' : `$${(Math.random() * 50000 + 100).toFixed(2)}`}
                    </p>
                    <p className="text-xs text-green-500 flex justify-end items-center mt-1">
                       <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></span> Active
                    </p>
                  </div>
                </div>
              ))}
           </div>
        </CardContent>
      </Card>
    </div>
  );
}
