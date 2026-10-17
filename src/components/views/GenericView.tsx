import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { CheckCircle2 } from 'lucide-react';

export function GenericView({ title, description, icon: Icon, features = [] }: { title: string, description: string, icon?: React.ElementType, features?: string[] }) {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center">
          {Icon && <Icon className="w-8 h-8 mr-3 text-cyan-500" />} {title}
        </h2>
        <p className="text-slate-400">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-slate-800 bg-slate-900/30 border-dashed md:col-span-1">
          <CardContent className="h-64 flex flex-col items-center justify-center text-center p-6">
            {Icon && <Icon className="w-12 h-12 text-slate-700 mb-4" />}
            <h3 className="text-lg font-bold text-slate-300 mb-2">{title} Module</h3>
            <p className="text-sm text-slate-500 max-w-md">This enterprise feature is functioning nominally. Advanced configurations and detailed logs are available to consortium administrators.</p>
          </CardContent>
        </Card>

        {features.length > 0 && (
          <Card className="md:col-span-1 bg-[#0a0b14] border-slate-800">
            <CardHeader>
              <CardTitle className="text-cyan-400">Functional Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
