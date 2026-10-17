import React, { useState, useRef, useEffect } from 'react';
import { Check, ChevronDown, Search } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface SearchableSelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchableSelect({ options, value, onChange, placeholder = "Select...", className }: SearchableSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredOptions = options.filter(option => 
    option.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div className={cn("relative w-full", className)} ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-full items-center justify-between rounded border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-white disabled:cursor-not-allowed disabled:opacity-50 outline-none focus:border-cyan-500"
      >
        <span className="truncate">{value || placeholder}</span>
        <ChevronDown className="w-4 h-4 opacity-50" />
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border border-slate-700 bg-slate-900 shadow-lg shadow-black/50 text-xs custom-scrollbar">
          <div className="sticky top-0 bg-slate-900 border-b border-slate-800 p-2 z-10 flex items-center px-3">
            <Search className="w-3 h-3 text-slate-500 mr-2 shrink-0" />
            <input
              type="text"
              placeholder="Search countries..."
              className="w-full bg-transparent border-none text-white focus:outline-none placeholder:text-slate-600 h-6 outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <div className="p-1">
            {filteredOptions.length === 0 ? (
              <div className="p-2 text-slate-500 text-center">No results found.</div>
            ) : (
              filteredOptions.map((option) => (
                 <button
                  key={option}
                  type="button"
                  className={cn(
                    "flex w-full items-center justify-between rounded-sm px-2 py-1.5 text-left text-slate-300 hover:bg-slate-800 transition-colors",
                    value === option && "bg-cyan-600/20 text-cyan-400 font-medium"
                  )}
                  onClick={() => {
                    onChange(option);
                    setIsOpen(false);
                    setSearch("");
                  }}
                >
                  <span className="truncate">{option}</span>
                  {value === option && <Check className="w-3 h-3 text-cyan-500 shrink-0" />}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
