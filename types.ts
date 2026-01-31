import React from 'react';

export interface ProjectMeta {
  role: string;
  team: string;
  year: string;
  status: string;
}

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
}

export interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}