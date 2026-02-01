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
      {/* Outline Navigation Bar - Sticky */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ul className="flex items-center justify-between md:justify-start md:gap-8 py-3 overflow-x-auto scrollbar-hide">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-xs uppercase tracking-widest whitespace-nowrap transition-all duration-200 px-2 py-1 ${activeSection === item.id
                    ? 'text-black font-medium border-b-2 border-black'
                    : 'text-paper-sub hover:text-black'
                    }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
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