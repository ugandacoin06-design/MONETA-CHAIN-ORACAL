import React from 'react';
import { ViewType } from '../../types';
import { ExternalLink } from 'lucide-react';
import { MONETA_CHAIN_URL } from '../../config';

interface FooterProps {
  onViewChange: (view: ViewType) => void;
}

export function Footer({ onViewChange }: FooterProps) {
  return (
    <footer className="border-t border-slate-800/50 bg-[#050608] pt-16 pb-8 px-4 sm:px-6 lg:px-8 mt-auto z-10 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 mb-16">
        <div className="col-span-2 md:col-span-1 space-y-6">
          <div className="flex items-center">
            <img src="/assets/moneta-oracle-logo.png" alt="MONETA CHAIN ORACLE" className="h-[38px] md:h-[48px] w-auto object-contain block cursor-pointer" onClick={() => onViewChange('landing')} />
          </div>
          <p className="text-xs text-slate-500 font-mono tracking-widest uppercase leading-loose">
            ONE FEED. <br />
            EVERY CHAIN. <br />
            ABSOLUTE TRUTH.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><a href={MONETA_CHAIN_URL} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors flex items-center">Official Website <ExternalLink className="w-3 h-3 ml-1" /></a></li>
            <li><button onClick={() => onViewChange('dashboard')} className="hover:text-white transition-colors">Oracle</button></li>
            <li><button onClick={() => onViewChange('services')} className="hover:text-white transition-colors">Services</button></li>
            <li><button onClick={() => onViewChange('live_feeds')} className="hover:text-white transition-colors">Data Feeds</button></li>
            <li><button onClick={() => onViewChange('developer_portal')} className="hover:text-white transition-colors">Developers</button></li>
            <li><button onClick={() => onViewChange('security')} className="hover:text-white transition-colors">Security</button></li>
            <li><button onClick={() => onViewChange('ecosystem')} className="hover:text-white transition-colors">Ecosystem</button></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><button onClick={() => onViewChange('developer_portal')} className="hover:text-white transition-colors">Documentation</button></li>
            <li><button onClick={() => onViewChange('developer_portal')} className="hover:text-white transition-colors">API</button></li>
            <li><button onClick={() => onViewChange('system_health')} className="hover:text-white transition-colors">Status</button></li>
            <li><a href="#" className="hover:text-white transition-colors flex items-center">GitHub <ExternalLink className="w-3 h-3 ml-1" /></a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><button onClick={() => onViewChange('about')} className="hover:text-white transition-colors">About</button></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Social</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><a href="#" className="hover:text-white transition-colors">X (Twitter)</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Telegram</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
            <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
            <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Medium</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-slate-800/50 pt-8 flex flex-col lg:flex-row items-center justify-between text-xs text-slate-600 gap-4">
        <div className="flex flex-col items-center lg:items-start space-y-3">
          <p>&copy; {new Date().getFullYear()} <a href={MONETA_CHAIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 underline transition-colors">MONETA CHAIN</a>. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-2 text-slate-500">
            <a href="#" className="hover:text-white transition-colors">X</a>
            <span>&middot;</span>
            <a href="#" className="hover:text-white transition-colors">Telegram</a>
            <span>&middot;</span>
            <a href="#" className="hover:text-white transition-colors">Discord</a>
            <span>&middot;</span>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <span>&middot;</span>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <span>&middot;</span>
            <a href="#" className="hover:text-white transition-colors">YouTube</a>
            <span>&middot;</span>
            <a href="#" className="hover:text-white transition-colors">Medium</a>
          </div>
        </div>
        <div className="flex items-center mt-4 lg:mt-0">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 my-auto mr-2 animate-pulse"></span>
          Systems Operational
        </div>
      </div>
    </footer>
  );
}
