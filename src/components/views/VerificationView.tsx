import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '../ui/card';
import { Button } from '../ui/button';
import { Search, CheckCircle2, XCircle, FileJson, Link2 } from 'lucide-react';

export function VerificationView() {
  const [payload, setPayload] = useState('');
  const [verifying, setVerifying] = useState(false);
  const [result, setResult] = useState<'idle' | 'valid' | 'invalid'>('idle');

  const handleVerify = () => {
    if (!payload.trim()) return;
    setVerifying(true);
    setResult('idle');
    setTimeout(() => {
      // randomly succeed or fail based on payload length for demo purposes
      if (payload.length > 50) {
        setResult('valid');
      } else {
        setResult('invalid');
      }
      setVerifying(false);
    }, 1200);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="text-center space-y-2 mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-white">Proof Checker</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Audit any off-chain data received from the Moneta Oracle. Paste the generated JSON payload to verify cryptographic signatures against the on-chain validator registry and Merkle root anchors.
        </p>
      </div>

      <Card className="border-cyan-900/30">
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileJson className="w-5 h-5 mr-2 text-cyan-500" />
            Oracle Response Payload
          </CardTitle>
          <CardDescription>Paste the raw JSON response containing data, signatures, and timestamps.</CardDescription>
        </CardHeader>
        <CardContent>
          <textarea 
            className="w-full h-48 bg-[#050608] border border-slate-800 rounded-lg p-4 text-xs font-mono text-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
            placeholder={'{\n  "timestamp": "2024-10-31T14:48:00Z",\n  "category": "price",\n  "value": "$175.20",\n  "signatures": ["0x..."]\n}'}
            value={payload}
            onChange={(e) => setPayload(e.target.value)}
          />
        </CardContent>
        <CardFooter className="bg-[#050608] flex justify-between items-center sm:px-6 py-4 border-t border-slate-800">
          <p className="text-xs text-slate-500 hidden sm:block">Requires node signature and valid timestamp.</p>
          <Button onClick={handleVerify} disabled={verifying || !payload.trim()} className="w-full sm:w-auto">
             {verifying ? (
               <span className="flex items-center">
                 <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#050608] mr-2"></span>
                 Verifying Proof...
               </span>
             ) : (
               <span className="flex items-center">
                 <Search className="w-4 h-4 mr-2" /> Verify Authenticity
               </span>
             )}
          </Button>
        </CardFooter>
      </Card>

      {result !== 'idle' && (
        <Card className={`animate-in fade-in slide-in-from-bottom-4 duration-500 border ${result === 'valid' ? 'border-green-500/50 bg-green-500/5' : 'border-red-500/50 bg-red-500/5'}`}>
           <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                 {result === 'valid' ? (
                   <CheckCircle2 className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                 ) : (
                   <XCircle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                 )}
                 <div className="space-y-4 flex-1">
                    <div>
                      <h3 className={`text-xl font-bold ${result === 'valid' ? 'text-green-400' : 'text-red-400'}`}>
                        {result === 'valid' ? 'Valid ✔' : 'Fraud ✘'}
                      </h3>
                      <p className="text-sm text-slate-400 mt-1">
                        {result === 'valid' 
                          ? 'The signatures successfully match active Moneta Consortium validators. The data hash is securely anchored to the blockchain.' 
                          : 'Signature mismatch or data manipulation detected. This payload does not correspond to an official consensus anchor.'}
                      </p>
                    </div>

                    {result === 'valid' && (
                      <div className="bg-[#050608] border border-slate-800 rounded-lg p-4 space-y-3">
                         <div className="flex justify-between items-center border-b border-slate-800/50 pb-2">
                            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Merkle Root</span>
                            <span className="text-xs font-mono text-slate-300">0x8f2d...49a1</span>
                         </div>
                         <div className="flex justify-between items-center border-b border-slate-800/50 pb-2">
                            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Block Height</span>
                            <span className="text-xs font-mono text-cyan-400">#14,205,843</span>
                         </div>
                         <div className="pt-2">
                            <Button variant="outline" size="sm" className="w-full text-xs">
                              <Link2 className="w-3 h-3 mr-2" /> View Anchor Transaction on Explorer
                            </Button>
                         </div>
                      </div>
                    )}
                 </div>
              </div>
           </CardContent>
        </Card>
      )}
    </div>
  );
}
