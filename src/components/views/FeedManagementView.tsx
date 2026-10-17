import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Activity, Plus, Settings2, Pause, Trash2 } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { SearchableSelect } from '../ui/searchable-select';

const mockFeeds = [
  { id: 'F-001', name: 'BTC/USD', category: 'Finance', interval: 'Real-time', nodes: 120, status: 'active', trust: '99%' },
  { id: 'F-002', name: 'ETH/USD', category: 'Finance', interval: 'Real-time', nodes: 118, status: 'active', trust: '99%' },
  { id: 'F-003', name: 'London Weather', category: 'Weather', interval: '10s', nodes: 45, status: 'active', trust: '95%' },
  { id: 'F-004', name: 'Global Tech ETF', category: 'Equities', interval: '1s', nodes: 60, status: 'paused', trust: '90%' },
];

export function FeedManagementView() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center">
            <Activity className="w-8 h-8 mr-3 text-cyan-500" /> Feed Management
          </h2>
          <p className="text-slate-400">Admin control center for all oracle data feeds.</p>
        </div>
        <Button className="flex items-center space-x-2">
           <Plus className="w-4 h-4" /> <span>Create New Feed</span>
        </Button>
      </div>

      <Card>
        <CardContent className="p-0 overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-400">
            <thead className="text-[10px] uppercase tracking-widest bg-[#0a0b14] border-b border-slate-800 text-slate-500">
              <tr>
                <th className="px-6 py-4 font-semibold">Feed Name</th>
                <th className="px-6 py-4 font-semibold">Category</th>
                <th className="px-6 py-4 font-semibold">Update Interval</th>
                <th className="px-6 py-4 font-semibold">Assigned Nodes</th>
                <th className="px-6 py-4 font-semibold">Trust Threshold</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {mockFeeds.map((feed, i) => (
                <tr key={i} className="hover:bg-slate-900/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-bold text-slate-200">{feed.name}</div>
                    <div className="text-[10px] text-slate-500 font-mono mt-1">{feed.id}</div>
                  </td>
                  <td className="px-6 py-4">{feed.category}</td>
                  <td className="px-6 py-4 font-mono text-cyan-400">{feed.interval}</td>
                  <td className="px-6 py-4 text-slate-300">{feed.nodes}</td>
                  <td className="px-6 py-4 text-green-400">{feed.trust}</td>
                  <td className="px-6 py-4">
                     <Badge variant={feed.status === 'active' ? 'success' : 'warning'}>{feed.status}</Badge>
                  </td>
                  <td className="px-6 py-4 text-right">
                     <div className="flex justify-end space-x-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-cyan-400"><Settings2 className="w-4 h-4" /></Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-yellow-400"><Pause className="w-4 h-4" /></Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-red-400"><Trash2 className="w-4 h-4" /></Button>
                     </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
