import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CaseStudy from './components/CaseStudy';

const NAV_ITEMS = [
  { id: 'hero', label: 'Overview' },
  { id: 'insights', label: 'Insights' },
  { id: 'definition', label: 'Definition' },
  { id: 'system', label: 'System' },
  { id: 'ai-design', label: 'AI Design' },
  { id: 'impact', label: 'Impact' },
];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full relative">
      {/* Navigation Bar - Sticky */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-paper-bg/90 backdrop-blur-lg">
        <div className="max-w-screen-2xl mx-auto px-8 md:px-20 lg:px-32">
          <div className="flex items-center justify-start py-4">
            {/* Nav Items - Overlapping Pills */}
            <ul className="flex items-center -space-x-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.id} className="relative">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`text-[11px] md:text-xs uppercase tracking-wider whitespace-nowrap transition-all duration-200 px-4 py-1.5 rounded-full relative ${activeSection === item.id
                      ? 'bg-black text-white z-20'
                      : 'text-paper-sub hover:text-black hover:bg-black/5 z-10'
                      }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content with top padding for fixed nav */}
      <main className="pt-12">
        <CaseStudy />
      </main>
    </div>
  );
};

export default App;