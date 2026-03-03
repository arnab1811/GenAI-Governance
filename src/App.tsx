import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ArrowLeft, Shield, BookOpen, Database, Lock, Users, FileText, CheckCircle, ExternalLink, Link as LinkIcon, ChevronDown, ArrowRight } from 'lucide-react';
import { universities } from './data';

export default function App() {
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedUniversityId, setSelectedUniversityId] = useState<string>('');
  const [view, setView] = useState<'home' | 'details'>('home');

  const countries = useMemo(() => {
    const uniqueCountries = Array.from(new Set(universities.map(u => u.country)));
    return uniqueCountries.sort();
  }, []);

  const filteredUniversities = useMemo(() => {
    if (!selectedCountry) return [];
    return universities.filter(u => u.country === selectedCountry).sort((a, b) => a.university.localeCompare(b.university));
  }, [selectedCountry]);

  const selectedUniversity = useMemo(() => {
    return universities.find(u => u.id === selectedUniversityId) || null;
  }, [selectedUniversityId]);

  const handleViewDetails = () => {
    if (selectedUniversityId) {
      setView('details');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setView('home');
  };

  return (
    <div className="min-h-screen bg-wur-bg font-sans text-stone-900 selection:bg-wur-blue-light selection:text-wur-blue-dark">
      {/* Navbar */}
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-wur-green rounded flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div className="font-bold text-wur-blue-dark leading-tight text-sm tracking-wide">
            GENAI<br/>GOVERNANCE
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-wur-green">
          <a href="#" className="flex items-center gap-1 hover:text-wur-green-dark transition-colors">Themes <ChevronDown className="w-4 h-4"/></a>
          <a href="#" className="flex items-center gap-1 hover:text-wur-green-dark transition-colors">Universities <ChevronDown className="w-4 h-4"/></a>
          <a href="#" className="flex items-center gap-1 hover:text-wur-green-dark transition-colors">About <ChevronDown className="w-4 h-4"/></a>
          <button className="w-9 h-9 rounded-full border border-wur-green flex items-center justify-center text-wur-green hover:bg-wur-green hover:text-white transition-colors">
            <Search className="w-4 h-4" />
          </button>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {view === 'home' ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-6 pt-8 pb-16">
              <div className="text-sm text-wur-green font-medium mb-6">
                Home / GenAI Governance Explorer
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-wur-green mb-10 tracking-tight">
                GenAI Governance Explorer
              </h1>
              
              <div className="relative">
                {/* Main Image */}
                <div className="w-full md:w-[85%] h-[500px] rounded-[40px] overflow-hidden relative shadow-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" 
                    alt="Students on campus" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Thin white circle overlay */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full border border-white/60 pointer-events-none"></div>
                </div>

                {/* Quick To Card */}
                <div className="absolute top-12 right-0 w-80 bg-wur-blue-light rounded-[32px] p-8 shadow-xl hidden md:block z-10">
                  <h3 className="text-wur-blue-dark text-xl font-medium mb-6">Quick to:</h3>
                  <ul className="space-y-4 mb-8">
                    {['European Universities', 'North American Universities', 'Data Protection Policies', 'Licensing Models'].map(item => (
                      <li key={item} className="border-b border-wur-blue-dark/20 pb-3">
                        <a href="#" className="flex items-center justify-between text-wur-blue-dark text-sm font-medium hover:opacity-70 transition-opacity">
                          {item} <ArrowRight className="w-4 h-4" />
                        </a>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-wur-blue-dark text-white rounded-full py-3.5 px-6 text-sm font-medium flex items-center justify-between hover:bg-opacity-90 transition-colors">
                    View all institutions <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Floating Search Pill */}
                <div className="absolute -bottom-6 left-8 bg-wur-search rounded-full p-2 pr-2 pl-6 flex items-center gap-4 shadow-lg border border-white/50 z-10">
                  <Search className="w-5 h-5 text-wur-green" />
                  <input 
                    type="text" 
                    placeholder="Search or ask..." 
                    className="bg-transparent border-none focus:outline-none text-sm w-32 md:w-48 text-wur-green placeholder:text-wur-green/70"
                  />
                  <button className="bg-wur-green text-white rounded-full px-6 py-3 text-sm font-medium flex items-center gap-2 hover:bg-wur-green-dark transition-colors">
                    Search <Search className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Mission / Background */}
            <div className="max-w-4xl mx-auto px-6 py-24 text-center">
              <p className="text-wur-green text-xl md:text-2xl font-medium mb-16 leading-relaxed">
                The GenAI Governance Explorer is a comprehensive resource tracking how leading research organizations provision, secure, and govern Generative AI tools.
              </p>
              
              <div className="inline-block bg-wur-pink text-wur-blue-dark text-[10px] font-bold px-3 py-1.5 uppercase tracking-wider mb-8 rounded-sm">
                Mission
              </div>
              
              <h2 className="text-3xl md:text-4xl font-serif text-wur-green leading-snug mb-10">
                “To understand the potential of GenAI while ensuring data protection, security, and academic integrity.”
              </h2>
              
              <p className="text-sm text-gray-800 leading-relaxed text-left">
                Universities are rapidly shifting from ad-hoc individual GenAI accounts to centrally provisioned, institution-licensed services. This shift aims to reduce data-protection risk, standardize controls (identity, retention, audit), and give the campus community access to higher-capability models without forcing people into consumer terms. This tool provides an inventory of centrally provisioned GenAI services across Europe, North America, and other regions.
              </p>
            </div>

            {/* Selector Section */}
            <div className="bg-white py-24 border-y border-stone-200">
              <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-wur-green mb-4">Explore Institutional Policies</h2>
                  <p className="text-gray-600">Select a country and university to view detailed governance information.</p>
                </div>

                <div className="bg-wur-bg rounded-[32px] p-8 md:p-12 shadow-sm border border-stone-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-wur-green uppercase tracking-wider ml-1">Country</label>
                      <div className="relative">
                        <select 
                          className="w-full appearance-none bg-white border border-stone-200 text-wur-blue-dark text-base rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-wur-green/20 focus:border-wur-green transition-all cursor-pointer shadow-sm"
                          value={selectedCountry}
                          onChange={(e) => {
                            setSelectedCountry(e.target.value);
                            setSelectedUniversityId('');
                          }}
                        >
                          <option value="">Select a country...</option>
                          {countries.map(country => (
                            <option key={country} value={country}>{country}</option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-5 pointer-events-none text-wur-green">
                          <ChevronDown className="w-5 h-5" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-sm font-bold text-wur-green uppercase tracking-wider ml-1">University</label>
                      <div className="relative">
                        <select 
                          className="w-full appearance-none bg-white border border-stone-200 text-wur-blue-dark text-base rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-wur-green/20 focus:border-wur-green transition-all cursor-pointer shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                          value={selectedUniversityId}
                          onChange={(e) => setSelectedUniversityId(e.target.value)}
                          disabled={!selectedCountry}
                        >
                          <option value="">Select a university...</option>
                          {filteredUniversities.map(uni => (
                            <option key={uni.id} value={uni.id}>{uni.university}</option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-5 pointer-events-none text-wur-green">
                          <ChevronDown className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <button 
                      onClick={handleViewDetails}
                      disabled={!selectedUniversityId}
                      className="bg-wur-green text-white rounded-full px-8 py-4 font-medium flex items-center gap-2 hover:bg-wur-green-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                    >
                      View Governance Details <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Themes Section */}
            <div className="max-w-7xl mx-auto px-6 py-24">
              <h2 className="text-4xl font-bold text-wur-green text-center mb-16">Discover our themes</h2>
              
              <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 border-b border-stone-200 mb-16">
                {['Data Protection', 'Licensing Models', 'Access & Eligibility', 'Training Requirements'].map((tab, i) => (
                  <button key={tab} className={`pb-4 text-sm font-medium transition-colors ${i === 0 ? 'text-wur-green border-b-2 border-wur-green' : 'text-gray-500 hover:text-wur-green'}`}>
                    {tab}
                  </button>
                ))}
              </div>

              <div className="flex flex-col md:flex-row items-center gap-16 max-w-5xl mx-auto">
                <div className="w-full md:w-1/2 flex justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop" 
                    alt="Data Protection" 
                    className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full object-cover shadow-xl"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-3xl font-bold text-wur-green mb-6">Data Protection & Privacy</h3>
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    Institutions repeatedly instruct users to sign in with institutional credentials and to look for visual indicators such as Microsoft's "green shield" for enterprise data protection. Contractual claims ensure enterprise/education accounts prevent the vendor from using "your data" to train models by default.
                  </p>
                  <button className="bg-wur-green text-white rounded-full px-6 py-3 text-sm font-medium flex items-center gap-2 hover:bg-wur-green-dark transition-colors">
                    Discover this theme <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Support Section */}
            <div className="max-w-7xl mx-auto px-6 pb-24">
              <div className="relative rounded-[40px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" 
                  alt="Research" 
                  className="w-full h-[400px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 bg-wur-bg pt-8 pr-8 rounded-tr-[40px] w-full md:w-1/2">
                  <div className="inline-block bg-wur-pink text-wur-blue-dark text-[10px] font-bold px-3 py-1.5 uppercase tracking-wider mb-6 rounded-sm">
                    Research Fund
                  </div>
                  <h3 className="text-3xl font-bold text-wur-green mb-4">Support our research</h3>
                  <p className="text-gray-700 mb-8 leading-relaxed text-sm">
                    The GenAI Governance Explorer stimulates the development of academic talent, groundbreaking research and innovative policy frameworks.
                  </p>
                  <button className="bg-wur-green text-white rounded-full px-6 py-3 text-sm font-medium flex items-center gap-2 hover:bg-wur-green-dark transition-colors">
                    Find out how you can contribute <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

          </motion.div>
        ) : (
          <motion.div
            key="details"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="min-h-screen pb-24"
          >
            {/* Details View */}
            <div className="max-w-7xl mx-auto px-6 py-8">
              <button 
                onClick={handleBack}
                className="inline-flex items-center gap-2 text-wur-green hover:text-wur-green-dark transition-colors font-medium mb-12"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </button>
              
              {selectedUniversity && (
                <main className="max-w-5xl mx-auto">
                  <div className="mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-wur-blue-light/20 text-wur-blue-dark text-xs font-bold uppercase tracking-wider mb-6">
                      {selectedUniversity.region}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-wur-green mb-6 tracking-tight">
                      {selectedUniversity.university}
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
                      Governance framework and provisioning details for Generative AI tools at {selectedUniversity.university}.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left Column: Key Info */}
                    <div className="md:col-span-1 space-y-6">
                      <div className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm">
                        <div className="w-12 h-12 rounded-xl bg-wur-blue-light/20 text-wur-blue-dark flex items-center justify-center mb-6">
                          <BookOpen className="w-6 h-6" />
                        </div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-wur-green mb-3">Provided Tools</h3>
                        <p className="text-stone-900 font-medium leading-relaxed">{selectedUniversity.tools}</p>
                      </div>

                      <div className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm">
                        <div className="w-12 h-12 rounded-xl bg-wur-blue-light/20 text-wur-blue-dark flex items-center justify-center mb-6">
                          <Users className="w-6 h-6" />
                        </div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-wur-green mb-3">Eligibility</h3>
                        <p className="text-stone-900 font-medium leading-relaxed">{selectedUniversity.eligible}</p>
                      </div>

                      {selectedUniversity.links && selectedUniversity.links.length > 0 && (
                        <div className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm">
                          <div className="w-12 h-12 rounded-xl bg-wur-pink/30 text-wur-blue-dark flex items-center justify-center mb-6">
                            <LinkIcon className="w-6 h-6" />
                          </div>
                          <h3 className="text-sm font-bold uppercase tracking-wider text-wur-green mb-4">References & Policies</h3>
                          <ul className="space-y-4">
                            {selectedUniversity.links.map((link, idx) => (
                              <li key={idx}>
                                <a 
                                  href={link.url} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="group flex items-start gap-2 text-sm text-wur-blue-dark hover:text-wur-green transition-colors"
                                >
                                  <ExternalLink className="w-4 h-4 mt-0.5 shrink-0 opacity-70 group-hover:opacity-100" />
                                  <span className="leading-snug font-medium">{link.title}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Right Column: Detailed Policies */}
                    <div className="md:col-span-2 space-y-6">
                      <DetailCard 
                        icon={<Lock className="w-6 h-6" />}
                        title="Authentication & Data Protection"
                        content={selectedUniversity.auth}
                      />
                      <DetailCard 
                        icon={<Database className="w-6 h-6" />}
                        title="Data Classification & Rules"
                        content={selectedUniversity.dataRules}
                      />
                      <DetailCard 
                        icon={<FileText className="w-6 h-6" />}
                        title="Logging, Retention & Audit"
                        content={selectedUniversity.logging}
                      />
                      <DetailCard 
                        icon={<CheckCircle className="w-6 h-6" />}
                        title="Training & Approvals"
                        content={selectedUniversity.training}
                      />
                      <DetailCard 
                        icon={<Shield className="w-6 h-6" />}
                        title="Licensing Model"
                        content={selectedUniversity.licensing}
                      />
                    </div>
                  </div>
                </main>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-wur-blue-dark text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-wider text-wur-blue-light">About Us</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About GenAI Gov</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Working with us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Alumni</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-wider text-wur-blue-light">Resources</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Research with us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Policy Groups</a></li>
                <li><a href="#" className="hover:text-white transition-colors">News & background</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Collaborating for impact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-wider text-wur-blue-light">Studying</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Bachelor</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Master</a></li>
                <li><a href="#" className="hover:text-white transition-colors">PhD</a></li>
                <li><a href="#" className="hover:text-white transition-colors">For professionals</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-wider text-wur-blue-light">Social Links</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn <ExternalLink className="w-3 h-3 inline ml-1"/></a></li>
                <li><a href="#" className="hover:text-white transition-colors">YouTube <ExternalLink className="w-3 h-3 inline ml-1"/></a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook <ExternalLink className="w-3 h-3 inline ml-1"/></a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-400">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-white tracking-wide">GENAI GOVERNANCE</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy & Cookie Statement</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility Statement</a>
              <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
              <a href="#" className="hover:text-white transition-colors">General terms and conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function DetailCard({ icon, title, content }: { icon: React.ReactNode, title: string, content: string }) {
  return (
    <div className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm">
      <div className="flex items-start gap-5">
        <div className="mt-1 text-wur-blue-light">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-wur-green mb-3">{title}</h3>
          <p className="text-gray-700 leading-relaxed">{content}</p>
        </div>
      </div>
    </div>
  );
}
