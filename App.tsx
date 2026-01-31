import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import CaseStudy from './components/CaseStudy';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen w-full relative">
      {/* Progress Bar - Sticky */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-paper-text origin-left z-50 mix-blend-difference"
        style={{ scaleX }}
      />
      
      {/* Main Content */}
      <main>
        <CaseStudy />
      </main>
    </div>
  );
};

export default App;