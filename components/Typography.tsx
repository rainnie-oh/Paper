import React from 'react';

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

// Project Title - 40-64px Red Hat Display (for hero project name)
export const Title: React.FC<TextProps> = ({ children, className = '' }) => (
  <h1 className={`font-display text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] tracking-tight font-semibold ${className}`}>
    {children}
  </h1>
);

// Section Headlines - 32-40px Red Hat Display
export const Headline: React.FC<TextProps> = ({ children, className = '' }) => (
  <h2 className={`font-display text-[28px] md:text-[36px] lg:text-[40px] leading-[1.15] tracking-tight font-medium ${className}`}>
    {children}
  </h2>
);

// Subheadlines - 20-24px Red Hat Display
export const Subheadline: React.FC<TextProps> = ({ children, className = '' }) => (
  <h3 className={`font-display text-[18px] md:text-[20px] lg:text-[24px] leading-[1.3] font-medium ${className}`}>
    {children}
  </h3>
);

// Body Text - 18px Inter
export const Body: React.FC<TextProps> = ({ children, className = '' }) => (
  <p className={`font-sans text-[16px] md:text-[18px] leading-[1.7] text-paper-text/90 ${className}`}>
    {children}
  </p>
);

// Labels - 11-12px Inter uppercase
export const Label: React.FC<TextProps> = ({ children, className = '' }) => (
  <span className={`font-sans text-[11px] md:text-[12px] uppercase tracking-[0.12em] font-medium text-paper-sub block ${className}`}>
    {children}
  </span>
);

// Captions - 13-14px Inter
export const Caption: React.FC<TextProps> = ({ children, className = '' }) => (
  <p className={`font-sans text-[13px] md:text-[14px] text-paper-sub mt-4 border-l-2 border-paper-text/15 pl-3 leading-relaxed ${className}`}>
    {children}
  </p>
);
