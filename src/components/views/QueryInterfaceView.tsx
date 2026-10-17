import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../ui/card';
import { Select } from '../ui/select';
import { SearchableSelect } from '../ui/searchable-select';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Database, Zap, ShieldCheck, Copy, CheckCircle2, AlertCircle, Cpu } from 'lucide-react';
import { type OracleResponse } from '../../types';

const DATA_SOURCES_BY_CATEGORY: Record<string, string[]> = {
  "Financial Markets": [
    "Global Forex exchange rates", "USD/UGX exchange rate", "EUR/USD rate", "GBP/USD rate", "Crypto prices (BTC, ETH, etc.)", "Stock market indices (S&P 500)", "NASDAQ index", "Dow Jones index", "Commodity prices (gold)", "Silver price", "Oil prices (Brent crude)", "Natural gas price", "Agricultural commodity prices", "Bond yields (US Treasury)", "Inflation rate data"
  ],
  "Banking & Payments": [
    "Bank transaction confirmations", "Cross-border payment systems", "SWIFT network data", "Mobile money systems (MTN, Airtel)", "Credit card authorization systems", "Fraud detection alerts", "Interest rate updates", "Loan approval systems", "Central bank reports", "Reserve requirement updates"
  ],
  "Government Data": [
    "National ID verification systems", "Passport verification systems", "Tax records", "Business registration databases", "Election results systems", "Public service records", "Land registry data", "Court case records", "Immigration systems", "Government policy updates"
  ],
  "Weather & Environment": [
    "Real-time weather data", "Rainfall predictions", "Temperature sensors", "Wind speed data", "Climate change datasets", "Air quality index", "Flood detection sensors", "Earthquake monitoring systems", "Storm tracking systems", "Satellite weather imaging"
  ],
  "Transport & Logistics": [
    "Flight tracking systems", "Airline schedules", "Shipping container tracking", "Port operations data", "Road traffic systems", "GPS tracking systems", "Delivery logistics APIs", "Warehouse inventory systems", "Fuel station pricing", "Railway schedules"
  ],
  "Health Systems": [
    "Hospital patient records (anonymized)", "Disease outbreak alerts", "WHO health data feeds", "Pharmaceutical supply chains", "Vaccine distribution data", "Medical lab results APIs", "Emergency response systems", "Ambulance tracking systems", "Health insurance claims", "Medical device IoT sensors"
  ],
  "Communication & Internet": [
    "Internet traffic data", "DNS system data", "Domain registration updates", "Social media trend data", "Email verification systems", "Telecom network status", "Mobile tower signal data", "Cybersecurity threat feeds", "Spam detection systems", "IP reputation databases"
  ],
  "Energy & Infrastructure": [
    "Electricity grid status", "Power consumption data", "Solar energy production", "Hydropower generation data", "Wind farm output", "Oil refinery outputs", "Water supply systems", "Smart city sensor data", "Infrastructure damage reports", "Utility billing systems"
  ],
  "Digital & AI Systems": [
    "AI model outputs", "Machine learning predictions", "Cloud computing status", "API usage logs", "Blockchain network data (other chains)", "Smart contract events", "Digital identity verification APIs", "Cybersecurity AI alerts", "Data center health monitoring", "Software update feeds"
  ],
  "News & Information": [
    "Global news APIs", "Financial news feeds", "Political news updates", "Emergency alert systems", "Social sentiment analysis feeds"
  ]
};

const CATEGORIES = Object.keys(DATA_SOURCES_BY_CATEGORY);

const CONTINENT_COUNTRIES: Record<string, string[]> = {
  "Africa": ["Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cabo Verde", "Cameroon", "Central African Republic", "Chad", "Comoros", "Democratic Republic of the Congo", "Republic of the Congo", "Djibouti", "Egypt", "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Ivory Coast", "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi", "Mali", "Mauritania", "Mauritius", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Rwanda", "Sao Tome and Principe", "Senegal", "Seychelles", "Sierra Leone", "Somalia", "South Africa", "South Sudan", "Sudan", "Tanzania", "Togo", "Tunisia", "Uganda", "Zambia", "Zimbabwe"],
  "Asia": ["Afghanistan", "Armenia", "Azerbaijan", "Bahrain", "Bangladesh", "Bhutan", "Brunei", "Cambodia", "China", "Cyprus", "Georgia", "India", "Indonesia", "Iran", "Iraq", "Israel", "Japan", "Jordan", "Kazakhstan", "Kuwait", "Kyrgyzstan", "Laos", "Lebanon", "Malaysia", "Maldives", "Mongolia", "Myanmar", "Nepal", "North Korea", "Oman", "Pakistan", "Palestine", "Philippines", "Qatar", "Saudi Arabia", "Singapore", "South Korea", "Sri Lanka", "Syria", "Tajikistan", "Thailand", "Timor-Leste", "Turkey", "Turkmenistan", "United Arab Emirates", "Uzbekistan", "Vietnam", "Yemen"],
  "Europe": ["Albania", "Andorra", "Austria", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kosovo", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands", "North Macedonia", "Norway", "Poland", "Portugal", "Romania", "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Ukraine", "United Kingdom", "Vatican City"],
  "North America": ["Antigua and Barbuda", "Bahamas", "Barbados", "Belize", "Canada", "Costa Rica", "Cuba", "Dominica", "Dominican Republic", "El Salvador", "Grenada", "Guatemala", "Haiti", "Honduras", "Jamaica", "Mexico", "Nicaragua", "Panama", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Trinidad and Tobago", "United States"],
  "South America": ["Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela"],
  "Oceania": ["Australia", "Fiji", "Kiribati", "Marshall Islands", "Micronesia", "Nauru", "New Zealand", "Palau", "Papua New Guinea", "Samoa", "Solomon Islands", "Tonga", "Tuvalu", "Vanuatu"]
};

const CONTINENTS = Object.keys(CONTINENT_COUNTRIES);

export function QueryInterfaceView() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<OracleResponse | null>(null);
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
  const [selectedSource, setSelectedSource] = useState(DATA_SOURCES_BY_CATEGORY[CATEGORIES[0]][0]);
  const [selectedContinent, setSelectedContinent] = useState('North America');
  const [selectedCountry, setSelectedCountry] = useState('United States');

  const handleContinentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newContinent = e.target.value;
    setSelectedContinent(newContinent);
    setSelectedCountry(CONTINENT_COUNTRIES[newContinent][0]); // Auto-select first country in continent
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCategory = e.target.value;
    setSelectedCategory(newCategory);
    setSelectedSource(DATA_SOURCES_BY_CATEGORY[newCategory][0]); // Auto-select first source
  };

  const handleQuery = () => {
    setLoading(true);
    setResult(null);
    // Simulate network delay
    setTimeout(() => {
      setResult({
        id: crypto.randomUUID(),
        timestamp: new Date().toISOString(),
        continent: selectedContinent,
        country: selectedCountry,
        category: selectedCategory,
        subcategory: selectedSource,
        value: selectedCategory === 'Financial Markets' ? '$175.20' : (selectedCategory === 'Weather & Environment' ? '22°C' : 'Verified'),
        confidence: 0.99,
        nodesAgreed: 5,
        totalNodes: 7,
        latencyMs: 42,
        signatures: ['0x8f...3a2', '0x1c...9b4', '0x7e...2bd', '0x4a...1fc', '0x9d...8ef'],
        onChainAnchorHeight: 14205843
      });
      setLoading(false);
    }, 600);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-white">Ask the Oracle</h2>
        <p className="text-slate-400">Query real-world data with millisecond response and on-chain verification.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Database className="w-5 h-5 text-cyan-500" />
                <span>Construct Query</span>
              </CardTitle>
              <CardDescription>Define your data parameters to fetch signed oracle responses.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-medium text-slate-400">Target Continent</label>
                <Select value={selectedContinent} onChange={handleContinentChange}>
                  {CONTINENTS.map(c => <option key={c} value={c}>{c}</option>)}
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-slate-400">Target Country</label>
                <SearchableSelect 
                  options={CONTINENT_COUNTRIES[selectedContinent]} 
                  value={selectedCountry} 
                  onChange={setSelectedCountry} 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-slate-400">Data Category</label>
                <Select value={selectedCategory} onChange={handleCategoryChange}>
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-slate-400">Data Source</label>
                <SearchableSelect 
                  options={DATA_SOURCES_BY_CATEGORY[selectedCategory]} 
                  value={selectedSource} 
                  onChange={setSelectedSource} 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-slate-400">Time Preference</label>
                <Select defaultValue="now">
                  <option value="now">Now (Real-time, Off-chain)</option>
                  <option value="latest">Latest On-chain Anchor</option>
                  <option value="historical">Historical (Block Height)</option>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleQuery} className="w-full font-semibold" disabled={loading}>
                {loading ? (
                  <span className="flex items-center space-x-2">
                    <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#050608]"></span>
                    <span>Querying Oracle...</span>
                  </span>
                ) : (
                  <span className="flex items-center space-x-2">
                    <Zap className="w-4 h-4" />
                    <span>Run Query</span>
                  </span>
                )}
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-7">
          {result ? (
            <div className="space-y-6 animate-in slide-in-from-bottom-4 fade-in duration-500">
              <Card className="border-cyan-500/30 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-green-500" />
                <CardHeader className="pb-4">
                   <div className="flex justify-between items-center">
                     <Badge variant="success" className="animate-in fade-in zoom-in duration-300">
                       <CheckCircle2 className="w-3 h-3 mr-1" /> Successful Response
                     </Badge>
                     <span className="text-xs text-slate-500 font-mono">Latency: {result.latencyMs}ms</span>
                   </div>
                </CardHeader>
                <CardContent className="space-y-6">
                   <div className="flex items-baseline justify-between">
                     <div>
                       <p className="text-sm font-medium text-slate-400">{result.category.toUpperCase()} / {result.subcategory}</p>
                       <h3 className="text-4xl font-bold tracking-tight text-white mt-1">{result.value}</h3>
                     </div>
                     <div className="text-right">
                       <p className="text-sm font-medium text-slate-400">Consensus</p>
                       <p className="text-lg font-semibold text-green-400">{result.nodesAgreed}/{result.totalNodes} Nodes</p>
                     </div>
                   </div>

                   <div className="grid grid-cols-2 gap-4 p-4 rounded-lg bg-[#050608]/50 border border-slate-800/50">
                      <div>
                        <p className="text-xs text-slate-500 flex items-center mb-1"><ShieldCheck className="w-3 h-3 mr-1"/> Signatures</p>
                        <div className="space-y-1">
                          {result.signatures.slice(0, 3).map((sig, i) => (
                            <p key={i} className="text-xs font-mono text-slate-400">{sig}</p>
                          ))}
                          <p className="text-xs text-slate-500">+{result.signatures.length - 3} more</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 flex items-center mb-1"><Cpu className="w-3 h-3 mr-1"/> Fast Output JSON</p>
                        <Button variant="outline" size="sm" className="w-full text-xs h-8 justify-between mt-2">
                           <span className="truncate">Copy Payload</span>
                           <Copy className="w-3 h-3" />
                        </Button>
                      </div>
                   </div>
                </CardContent>
                <CardFooter className="bg-[#050608]/30 border-t border-zinc-900 justify-between">
                  <div className="flex items-center text-xs text-slate-400">
                    <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                    Ready for Smart Contract injection
                  </div>
                  <Button variant="secondary" size="sm" className="h-8 text-xs font-medium border border-slate-700">
                     Verify on Moneta Chain
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                 <CardHeader className="py-3 px-4 border-b border-slate-800">
                    <CardTitle className="text-sm text-slate-300 font-mono flex items-center justify-between">
                      Raw JSON Response
                      <Button variant="ghost" size="icon" className="h-6 w-6"><Copy className="w-3 h-3"/></Button>
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0">
                    <pre className="p-4 text-xs font-mono text-cyan-400 overflow-x-auto whitespace-pre-wrap">
                      {JSON.stringify(result, null, 2)}
                    </pre>
                 </CardContent>
              </Card>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center border-2 border-dashed border-slate-800 rounded-xl bg-[#0a0b14]/20 text-slate-500 p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-50" />
              <Database className="w-12 h-12 mb-4 opacity-50 text-cyan-500" />
              <h3 className="text-lg font-medium text-slate-300 mb-2">Awaiting Query</h3>
              <p className="max-w-xs text-sm">Configure your parameters on the left and execute the query to view millisecond-fast oracle responses.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
