import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CaseStudy from './components/CaseStudy';

const NAV_ITEMS = [
  { id: 'background', label: 'Background' },
  { id: 'definition', label: 'Definition' },
  { id: 'highlights', label: 'Highlights' },
  { id: 'ai', label: 'AI', hasIcon: true },
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
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[80px]">
          <div className="flex items-center justify-between py-4">
            {/* Back Button */}
            <a
              href="https://ruiniohh.webflow.io/"
              className="flex items-center gap-2 text-paper-sub hover:text-black transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              <span className="text-[11px] md:text-xs uppercase tracking-wider font-medium">Portfolio</span>
            </a>

            {/* Nav Items - Overlapping Pills */}
            <ul className="flex items-center -space-x-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.id} className="relative">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`text-[11px] md:text-xs uppercase tracking-wider whitespace-nowrap transition-all duration-200 px-4 py-1.5 rounded-full relative flex items-center gap-1.5 ${activeSection === item.id
                      ? 'bg-black text-white z-20'
                      : 'text-paper-sub hover:text-black hover:bg-black/5 z-10'
                      }`}
                  >
                    {item.hasIcon && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
                      </svg>
                    )}
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