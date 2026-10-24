import React from 'react';
import { ViewType } from '../../types';
import { MONETA_CHAIN_URL } from '../../config';
import { Button } from '../ui/button';
import { Network, ArrowRight, ExternalLink, Globe, Search, Database, ShieldAlert } from 'lucide-react';
import { Footer } from "../layout/Footer";

export function EcosystemLinksView({ onViewChange }: { onViewChange: (view: ViewType) => void }) {
  return (
    <div className="min-h-screen bg-[#050608] text-slate-300 font-sans selection:bg-cyan-900/50 flex flex-col">
      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 border-b border-slate-800/50 bg-[#050608]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center cursor-pointer" onClick={() => onViewChange('landing')}>
              <img src="/assets/moneta-oracle-logo.png" alt="MONETA CHAIN ORACLE" className="h-[32px] sm:h-[42px] w-auto object-contain block" />
            </div>
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
              <button onClick={() => onViewChange('dashboard')} className="hover:text-white transition-colors">Oracle Dashboard</button>
              <button onClick={() => onViewChange('services')} className="hover:text-white transition-colors">Services</button>
              <button onClick={() => onViewChange('about')} className="hover:text-white transition-colors">About</button>
              <button onClick={() => onViewChange('ecosystem')} className="text-white transition-colors font-bold">Ecosystem</button>
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

      <main className="flex-1 w-full flex flex-col relative z-10">
        
        {/* HERO SECTION */}
        <section className="pt-24 pb-16 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              MONETA ORACLE <br/> 
              <span className="text-cyan-400">— OFFICIAL ECOSYSTEM LINKS</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-8 font-light">
              EXPLORE THE MONETA ECOSYSTEM
            </p>
            <p className="text-base text-slate-300 max-w-2xl mx-auto">
              MONETA ORACLE is part of the growing MONETA CHAIN ecosystem.<br/>
              Discover the technology, infrastructure, and tools being developed across the ecosystem.
            </p>
          </div>
        </section>

        {/* ECOSYSTEM CARDS */}
        <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: MONETA CHAIN */}
            <div className="bg-[#0a0b14] border border-slate-800/50 rounded-xl p-8 flex flex-col items-center text-center hover:border-cyan-500/30 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-cyan-900/20 flex items-center justify-center mb-6 border border-cyan-500/20">
                <Globe className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">MONETA CHAIN</h3>
              <h4 className="text-sm font-bold text-slate-500 tracking-widest uppercase mb-6">The Foundation of the Ecosystem</h4>
              <p className="text-slate-400 text-sm mb-8 flex-1">
                Explore the official MONETA CHAIN website and discover the blockchain technology, ecosystem, vision, and developments powering MONETA.
              </p>
              <div className="w-full flex flex-col space-y-2 mt-auto">
                <a
                  href={MONETA_CHAIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-cyan-600 hover:bg-cyan-500 text-white h-12 text-xs font-bold tracking-widest uppercase rounded-md shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all gap-2"
                >
                  VISIT MONETA CHAIN &rarr;
                </a>
                <a
                  href={MONETA_CHAIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-cyan-400 hover:text-cyan-300 font-mono tracking-wider flex items-center justify-center gap-1.5 transition-colors group pt-1"
                >
                  <span className="underline group-hover:text-cyan-200">https://moneta-chain.vercel.app/</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400 group-hover:text-cyan-200" />
                </a>
              </div>
            </div>

            {/* Card 2: MONETA EXPLORER */}
            <div className="bg-[#0a0b14] border border-slate-800/50 rounded-xl p-8 flex flex-col items-center text-center hover:border-cyan-500/30 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-cyan-900/20 flex items-center justify-center mb-6 border border-cyan-500/20">
                <Search className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">MONETA EXPLORER</h3>
              <h4 className="text-sm font-bold text-slate-500 tracking-widest uppercase mb-6">VISIBLE TRUTH. INVISIBLE WEALTH.</h4>
              <p className="text-slate-400 text-sm mb-8 flex-1">
                Explore the MONETA blockchain through the official MONETA Explorer. View blockchain activity, transactions, blocks, addresses, and other on-chain information as the network develops.
              </p>
              <div className="w-full flex flex-col space-y-2 mt-auto">
                <Button disabled variant="outline" className="w-full border-slate-700 text-slate-400 h-12 uppercase tracking-widest text-xs font-bold bg-slate-900/50">
                  VISIT MONETA EXPLORER &rarr;
                </Button>
                <span className="text-xs text-amber-500 font-mono tracking-widest uppercase mt-2 block">Official link: COMING SOON</span>
              </div>
            </div>

            {/* Card 3: MONETA ORACLE */}
            <div className="bg-[#0a0b14] border border-cyan-500/30 rounded-xl p-8 flex flex-col items-center text-center relative overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.1)]">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
              <div className="w-16 h-16 rounded-full bg-cyan-600 flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/20">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">MONETA ORACLE</h3>
              <h4 className="text-sm font-bold text-cyan-500 tracking-widest uppercase mb-6">TRUSTED DATA. CONNECTED INTELLIGENCE.</h4>
              <p className="text-slate-400 text-sm mb-8 flex-1">
                MONETA ORACLE is designed to provide reliable data and information infrastructure for applications within the MONETA ecosystem.
              </p>
              <div className="w-full flex flex-col space-y-2 mt-auto">
                <div className="w-full h-12 flex items-center justify-center border border-cyan-500 text-cyan-400 uppercase tracking-widest text-xs font-bold bg-cyan-950/30 rounded-md">
                  YOU ARE HERE
                </div>
                <span className="text-xs text-cyan-500 font-mono tracking-widest uppercase pt-1 block opacity-0 select-none">Current Platform</span>
              </div>
            </div>

          </div>
        </section>

        {/* OFFICIAL LINKS LIST & WARNING */}
        <section className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-24 text-center">
          <div className="bg-[#0a0b14] border border-slate-800 rounded-xl p-8 md:p-12">
            <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">OFFICIAL LINKS</h2>
            <ul className="space-y-4 text-slate-300 text-sm md:text-base mb-12">
              <li className="flex flex-col sm:flex-row items-center justify-center sm:space-x-3 gap-1 sm:gap-0">
                <span className="font-bold text-white">MONETA CHAIN</span>
                <span className="hidden sm:inline text-slate-600">—</span>
                <a
                  href={MONETA_CHAIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 underline font-mono text-sm inline-flex items-center gap-1.5 font-medium"
                >
                  https://moneta-chain.vercel.app/
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-[11px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded font-semibold uppercase tracking-wider">
                  Official Website
                </span>
              </li>
              <li className="flex flex-col sm:flex-row items-center justify-center sm:space-x-2">
                <span className="font-bold text-white">MONETA EXPLORER</span>
                <span className="hidden sm:inline text-slate-600">—</span>
                <span className="text-slate-500">Official Blockchain Explorer (Coming Soon)</span>
              </li>
              <li className="flex flex-col sm:flex-row items-center justify-center sm:space-x-2">
                <span className="font-bold text-white">MONETA ORACLE</span>
                <span className="hidden sm:inline text-slate-600">—</span>
                <span className="text-cyan-400">Official Oracle Platform (Current App)</span>
              </li>
            </ul>

            <div className="border-t border-slate-800 pt-8 mt-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-900/20 mb-4 border border-cyan-500/20">
                <ShieldAlert className="w-6 h-6 text-cyan-400" />
              </div>
              <h2 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">IMPORTANT</h2>
              <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed mb-6">
                The official website for MONETA CHAIN is live at{" "}
                <a
                  href={MONETA_CHAIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 underline font-mono font-semibold"
                >
                  https://moneta-chain.vercel.app/
                </a>.
                <br/><br/>
                Official website address for MONETA EXPLORER will be published soon.
                <br/>
                Only official links provided by the MONETA CHAIN team should be trusted.
              </p>
              <a
                href={MONETA_CHAIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-cyan-500/40 bg-cyan-950/40 text-cyan-400 hover:text-white hover:bg-cyan-900/60 hover:border-cyan-400 font-bold uppercase tracking-widest text-sm rounded-md transition-all shadow-lg shadow-cyan-500/10"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                VISIT MONETA CHAIN &rarr; (MONETA-CHAIN.VERCEL.APP)
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <Footer onViewChange={onViewChange} />
    </div>
  );
}
