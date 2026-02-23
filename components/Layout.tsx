import React from 'react';
import { motion } from 'framer-motion';
import { SectionProps, FadeInProps } from '../types';

export const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const Section: React.FC<SectionProps> = ({ children, className = '', id, fullWidth = false }) => {
  return (
    <section
      id={id}
      className={`w-full py-24 md:py-32 relative ${className}`}
    >
      <div className={`mx-auto px-8 md:px-20 lg:px-32 ${fullWidth ? 'max-w-none' : 'max-w-screen-2xl'}`}>
        {children}
      </div>
    </section>
  );
};

export const Grid: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`grid grid-cols-4 md:grid-cols-12 gap-x-4 md:gap-x-8 gap-y-12 ${className}`}>
    {children}
  </div>
);