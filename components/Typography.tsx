import React from 'react';

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export const Headline: React.FC<TextProps> = ({ children, className = '' }) => (
  <h1 className={`text-5xl md:text-7xl lg:text-[5rem] leading-[1.05] tracking-tight font-medium ${className}`}>
    {children}
  </h1>
);

export const Subheadline: React.FC<TextProps> = ({ children, className = '' }) => (
  <h2 className={`text-2xl md:text-3xl leading-tight font-normal ${className}`}>
    {children}
  </h2>
);

export const Body: React.FC<TextProps> = ({ children, className = '' }) => (
  <p className={`text-lg md:text-[1.25rem] leading-[1.6] text-paper-text/90 ${className}`}>
    {children}
  </p>
);

export const Label: React.FC<TextProps> = ({ children, className = '' }) => (
  <span className={`text-[0.7rem] md:text-xs uppercase tracking-[0.15em] font-medium text-paper-sub block ${className}`}>
    {children}
  </span>
);

export const Caption: React.FC<TextProps> = ({ children, className = '' }) => (
  <p className={`text-xs md:text-sm text-paper-sub mt-4 border-l border-paper-text/20 pl-3 leading-relaxed ${className}`}>
    {children}
  </p>
);
