import React from 'react';
import { ViewType } from '../../types';
import { MONETA_CHAIN_URL } from '../../config';
import { Button } from '../ui/button';
import { Network, ArrowRight, ArrowDown, ExternalLink, Activity, Database, Shield, Zap, Globe, Code } from 'lucide-react';
import { cn } from '../../lib/utils';

import { Footer } from '../layout/Footer';

export function LandingPageView({ onViewChange }: { onViewChange: (view: ViewType) => void }) {
  return (
    <div className="min-h-screen bg-[#050608] text-slate-300 font-sans selection:bg-cyan-900/50">
      {/* 1. NAVIGATION */}
      <nav className="sticky top-0 z-50 border-b border-slate-800/50 bg-[#050608]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center cursor-pointer" onClick={() => onViewChange('landing')}>
              <img src="/assets/moneta-oracle-logo.png" alt="MONETA CHAIN ORACLE" className="h-[38px] md:h-[48px] w-auto object-contain block" />
            </div>
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
              <button onClick={() => onViewChange('dashboard')} className="hover:text-white transition-colors">Oracle</button>
              <button onClick={() => onViewChange('services')} className="hover:text-white transition-colors">Services</button>
              <button onClick={() => onViewChange('live_feeds')} className="hover:text-white transition-colors">Data Feeds</button>
              <button onClick={() => onViewChange('developer_portal')} className="hover:text-white transition-colors">Developers</button>
              <button onClick={() => onViewChange('security')} className="hover:text-white transition-colors">Security</button>
              <button onClick={() => onViewChange('ecosystem')} className="hover:text-white transition-colors">Ecosystem</button>
            </div>
            <div className="flex items-center space-x-4">
              <a href={MONETA_CHAIN_URL} target="_blank" rel="noopener noreferrer" className="hidden sm:block text-sm font-bold text-cyan-400 hover:text-cyan-300 tracking-widest transition-colors uppercase">
                VISIT MONETA CHAIN &rarr;
              </a>
              <Button onClick={() => onViewChange('developer_portal')} className="bg-cyan-600 hover:bg-cyan-500 text-white border-0">Build with MONETA</Button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* 2. HERO */}
        <section className="relative pt-24 pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[85vh] text-center px-4">
          <div className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
             {/* Subtle animated connections background */}
             <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px]">
                <svg className="w-full h-full text-cyan-500/20" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M100 50 L350 180" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
                   <path d="M700 50 L450 180" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse delay-75" />
                   <path d="M100 350 L350 220" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse delay-150" />
                   <path d="M700 350 L450 220" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse delay-300" />
                   <circle cx="100" cy="50" r="4" fill="currentColor" />
                   <circle cx="700" cy="50" r="4" fill="currentColor" />
                   <circle cx="100" cy="350" r="4" fill="currentColor" />
                   <circle cx="700" cy="350" r="4" fill="currentColor" />
                   
                   <text x="70" y="45" fill="currentColor" fontSize="12" className="font-mono">DATA</text>
                   <text x="710" y="45" fill="currentColor" fontSize="12" className="font-mono">DATA</text>
                   <text x="65" y="365" fill="currentColor" fontSize="12" className="font-mono">CHAIN</text>
                   <text x="710" y="365" fill="currentColor" fontSize="12" className="font-mono">CHAIN</text>
                </svg>
             </div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <img src="/assets/moneta-oracle-logo.png" alt="MONETA CHAIN ORACLE" className="h-20 md:h-32 w-auto object-contain block mb-8" />
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-6 leading-tight">
              ONE FEED. <br className="hidden md:block" />
              EVERY CHAIN. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">ABSOLUTE TRUTH.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
              A next-generation oracle infrastructure designed to bring reliable, verifiable real-world data to blockchain applications.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <a href={MONETA_CHAIN_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full sm:w-auto bg-cyan-600 hover:bg-cyan-500 text-white h-12 px-8 text-sm font-bold tracking-widest uppercase rounded-md shadow-lg shadow-cyan-500/20 transition-colors">
                VISIT MONETA CHAIN &rarr;
              </a>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 h-12 px-8 text-base font-medium rounded-md" onClick={() => onViewChange('developer_portal')}>
                Start Building
              </Button>
            </div>
            
            <div className="flex items-center space-x-3 text-xs font-mono text-slate-500 uppercase tracking-widest">
              <span>Decentralized</span>
              <span className="w-1 h-1 rounded-full bg-slate-700"></span>
              <span>Verifiable</span>
              <span className="w-1 h-1 rounded-full bg-slate-700"></span>
              <span>Multi-Chain</span>
            </div>
          </div>
        </section>

        {/* 2.5 BUILDING IN PUBLIC - UNDER DEVELOPMENT */}
        <section className="py-8 bg-cyan-950/20 border-y border-cyan-900/30 px-4">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1 space-y-3 text-center md:text-left">
              <div className="inline-flex items-center space-x-2 border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 rounded-sm mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="text-[10px] font-bold text-cyan-400 tracking-widest uppercase">Building in Public</span>
              </div>
              <h2 className="text-lg md:text-xl font-bold text-white">MONETA CHAIN ORACLE is currently under active development.</h2>
              <p className="text-sm text-slate-400 max-w-3xl leading-relaxed">
                We are building the infrastructure today for the multi-chain data economy of tomorrow. 
                Features marked as <span className="font-mono text-[10px] px-1.5 py-0.5 bg-slate-800 text-slate-300 rounded border border-slate-700 mx-1 whitespace-nowrap">[ UNDER DEVELOPMENT ]</span> or <span className="font-mono text-[10px] px-1.5 py-0.5 bg-slate-800 text-slate-300 rounded border border-slate-700 mx-1 whitespace-nowrap">[ COMING SOON ]</span> represent our roadmap to a transparent and verifiable oracle network.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end text-center md:text-right md:border-l border-cyan-900/50 md:pl-8 py-2">
              <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase mb-1">Current Status</span>
              <span className="text-sm font-bold text-cyan-400 tracking-widest">IN DEVELOPMENT</span>
              <span className="text-[10px] text-slate-500 font-mono mt-2">TESTNET Q4 2026</span>
            </div>
          </div>
        </section>

        {/* 3. SHORT PROBLEM STATEMENT */}
        <section className="py-24 bg-[#0a0b14] border-y border-slate-800/50 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
              Blockchains don't see the world. <br />
              <span className="text-cyan-400">MONETA Oracle connects them to it.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Smart contracts can verify what happens on-chain, but critical information often exists outside the blockchain. MONETA Oracle is designed to connect external data with decentralized applications through a secure and verifiable data layer.
            </p>
          </div>
        </section>

        {/* 4. THREE CORE PROMISES */}
        <section className="py-24 px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center border border-slate-800">
                <Database className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-1">ONE FEED</h3>
                <h4 className="text-xl font-semibold text-white mb-3">Unified Data</h4>
                <p className="text-slate-400 leading-relaxed">
                  A single oracle infrastructure designed to provide consistent data across supported blockchain ecosystems.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center border border-slate-800">
                <Globe className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-1">EVERY CHAIN</h3>
                <h4 className="text-xl font-semibold text-white mb-3">Multi-Chain</h4>
                <p className="text-slate-400 leading-relaxed">
                  Designed to make verified data available across different blockchain environments.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center border border-slate-800">
                <Shield className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-1">ABSOLUTE TRUTH</h3>
                <h4 className="text-xl font-semibold text-white mb-3">Verifiable</h4>
                <p className="text-slate-400 leading-relaxed">
                  Built around verification, cryptographic integrity, and decentralized data validation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. SIMPLE "HOW IT WORKS" SECTION */}
        <section className="py-24 bg-[#0a0b14] border-y border-slate-800/50 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-12">From the real world to the blockchain</h2>
            
            <div className="flex flex-col md:flex-row items-center justify-between mb-12">
               {['SOURCE', 'VERIFY', 'CONSENSUS', 'PROVE', 'DELIVER'].map((step, i, arr) => (
                 <React.Fragment key={step}>
                   <div className="flex flex-col items-center">
                     <div className="w-16 h-16 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mb-3">
                       <span className="text-cyan-400 font-bold">{i + 1}</span>
                     </div>
                     <span className="text-xs font-bold text-slate-300 tracking-widest uppercase">{step}</span>
                   </div>
                   {i < arr.length - 1 && (
                     <ArrowRight className="hidden md:block w-5 h-5 text-slate-600" />
                   )}
                   {i < arr.length - 1 && (
                     <ArrowDown className="md:hidden w-5 h-5 text-slate-600 my-4" />
                   )}
                 </React.Fragment>
               ))}
            </div>

            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              MONETA Oracle transforms external information into data that blockchain applications can consume and verify.
            </p>
            
            <Button variant="link" className="text-cyan-400 hover:text-cyan-300 font-medium group" onClick={() => onViewChange('developer_portal')}>
              Learn How It Works <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>

        {/* 6. MONETA CHAIN CONNECTION */}
        <section className="py-24 px-4 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">The data layer of MONETA CHAIN.</h2>
          <p className="text-slate-400 text-lg mb-12 leading-relaxed">
            MONETA Oracle is designed to provide the data infrastructure required for the next generation of MONETA CHAIN applications.
          </p>
          
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex flex-col items-center space-y-6">
            <div className="font-bold text-cyan-400 tracking-widest uppercase">MONETA ORACLE</div>
            <ArrowDown className="w-5 h-5 text-slate-600" />
            <div className="font-bold text-white tracking-widest uppercase text-xl">MONETA CHAIN</div>
            <ArrowDown className="w-5 h-5 text-slate-600" />
            <div className="font-bold text-slate-400 tracking-widest uppercase">DECENTRALIZED APPLICATIONS</div>
          </div>
        </section>

        {/* 7. DATA TYPES — SMALL PREVIEW */}
        <section className="py-24 bg-slate-900/30 border-y border-slate-800/50 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-12">Data for a world of applications.</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
               {['PRICE', 'RWA', 'DEFI', 'EVENTS', 'WEATHER', 'CUSTOM'].map((type, i) => (
                 <div key={type} className="relative bg-[#050608] border border-slate-800 rounded-xl p-6 flex flex-col items-center justify-center hover:border-cyan-500/50 transition-colors cursor-pointer pt-8">
                   <div className="absolute top-2 right-2 left-2 flex justify-center">
                     <span className="font-mono text-[8px] px-1 py-0.5 bg-slate-800 text-slate-400 rounded border border-slate-700 whitespace-nowrap">
                       {i % 2 === 0 ? '[ UNDER DEVELOPMENT ]' : '[ COMING SOON ]'}
                     </span>
                   </div>
                   <Activity className="w-6 h-6 text-cyan-500 mb-3" />
                   <span className="text-sm font-bold text-slate-300 uppercase tracking-widest">{type}</span>
                 </div>
               ))}
            </div>
            
            <Button variant="link" className="text-cyan-400 hover:text-cyan-300 font-medium group" onClick={() => onViewChange('live_feeds')}>
              Explore Data Feeds <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>

        {/* 8. DEVELOPER CTA */}
        <section className="py-32 px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <Code className="w-12 h-12 text-slate-600 mx-auto" />
            <h2 className="text-4xl font-bold text-white">Build on verified data.</h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              Give your applications access to the information they need—without building the entire oracle infrastructure yourself.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Button size="lg" className="w-full sm:w-auto bg-white hover:bg-slate-200 text-black h-12 px-8 font-medium rounded-md" onClick={() => onViewChange('developer_portal')}>
                Start Building <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 h-12 px-8 font-medium rounded-md" onClick={() => onViewChange('developer_portal')}>
                Read Documentation
              </Button>
            </div>
          </div>
        </section>

        {/* 9. FINAL CTA */}
        <section className="relative py-32 bg-gradient-to-b from-[#0a0b14] to-[#050608] border-t border-slate-800/50 px-4 text-center overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-900/20 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">
              The world produces the data. <br />
              <span className="text-cyan-400">MONETA brings it on-chain.</span>
            </h2>
            <p className="text-xl text-slate-300 tracking-widest uppercase font-mono">
              One feed. Every chain. Absolute truth.
            </p>
            <div className="pt-8">
              <a href={MONETA_CHAIN_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-cyan-600 hover:bg-cyan-500 text-white h-14 px-10 text-base font-bold tracking-widest uppercase rounded-md shadow-lg shadow-cyan-500/25 transition-colors">
                VISIT MONETA CHAIN &rarr;
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 10. FOOTER */}
      <Footer onViewChange={onViewChange} />
    </div>
  );
}
