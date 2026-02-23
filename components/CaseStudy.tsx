import React from 'react';

import { ProjectMeta } from '../types';

const META_DATA: ProjectMeta = {
  role: "Sole Product Designer",
  team: "Design, Dev, AI Team",
  year: "2024–2025",
  status: "Post-Launch: Paid Conversion"
};

const CaseStudy: React.FC = () => {
  return (
    <div className="w-full bg-paper-bg selection:bg-paper-text selection:text-paper-bg relative">

      {/* 01. Hero Section */}
      <div id="hero" className="w-full flex justify-center bg-paper-bg">
        <div className="w-full max-w-[1440px] flex flex-col gap-8 md:gap-[48px] p-6 lg:p-[80px]">

          {/* Hero Image */}
          <div className="w-full h-auto md:h-[546px] rounded-2xl md:rounded-[16px] overflow-hidden bg-paper-bg">
            <img src="/assets/images/hero/cover.png" alt="Hero Cover" className="w-full h-full object-cover" />
          </div>

          {/* Hero Info */}
          <div className="w-full flex flex-col md:flex-row gap-8 md:gap-[72px]">

            {/* Title */}
            <div className="flex flex-col gap-4 md:gap-[16px] md:w-[380px] shrink-0">
              <div className="flex flex-col">
                <h1 className="font-display text-4xl md:text-[52px] leading-tight md:leading-[1.077] tracking-tight md:tracking-[-0.8px] text-paper-text font-normal">
                  ODE-Paper
                </h1>
              </div>
              <div className="flex flex-col">
                <h2 className="font-display text-lg md:text-[18px] leading-snug md:leading-[1.077] tracking-tight md:tracking-[-0.8px] text-paper-sub font-normal">
                  Interactive Analysis Notebook for Engineers
                </h2>
              </div>
            </div>

            {/* Info Column */}
            <div className="flex-1 flex flex-col gap-6 md:gap-[24px]">
              <span className="font-sans text-sm md:text-[14px] font-medium leading-[1.5] text-paper-sub">
                (brief)
              </span>
              <p className="font-sans text-base md:text-[16px] font-medium leading-relaxed md:leading-[1.6] tracking-tight md:tracking-[-0.18px] text-paper-text">
                Built 0→1 modular system unifying code, parameters, and visualization into dynamic documents.
              </p>

              <div className="hidden md:block w-full h-[1px] bg-black/[0.05]"></div>

              {/* Meta Row */}
              <div className="w-full grid grid-cols-2 md:flex justify-between gap-6 md:gap-4">
                <div className="flex flex-col gap-1 w-full md:max-w-[120px]">
                  <span className="font-sans text-xs md:text-[12px] text-paper-sub leading-[1.5] font-normal">Timeline</span>
                  <span className="font-sans text-sm md:text-[14px] font-medium text-paper-text leading-[1.5]">2024.05–2024.12</span>
                </div>
                <div className="flex flex-col gap-1 w-full md:max-w-[120px]">
                  <span className="font-sans text-xs md:text-[12px] text-paper-sub leading-[1.5] font-normal">Tools</span>
                  <span className="font-sans text-sm md:text-[14px] font-medium text-paper-text leading-[1.5]">Figma, AI Studio</span>
                </div>
                <div className="flex flex-col gap-1 w-full md:max-w-[120px]">
                  <span className="font-sans text-xs md:text-[12px] text-paper-sub leading-[1.5] font-normal">Role</span>
                  <span className="font-sans text-sm md:text-[14px] font-medium text-paper-text leading-[1.5]">Product designer</span>
                </div>
                <div className="flex flex-col gap-1 w-full md:max-w-[120px]">
                  <span className="font-sans text-xs md:text-[12px] text-paper-sub leading-[1.5] font-normal">Status</span>
                  <span className="font-sans text-sm md:text-[14px] font-medium text-paper-text leading-[1.5]">In Beta</span>
                </div>
              </div>

              <div className="w-full h-[1px] bg-black/[0.05]"></div>
            </div>

          </div>
        </div>
      </div>



      {/* Section 1: Pain Points */}
      <div id="insights" className="w-full flex justify-center bg-white">
        <div className="w-full max-w-[1440px] flex flex-col gap-12 md:gap-[48px] p-6 lg:p-[80px]">

          {/* Section Heading */}
          <div className="flex flex-col gap-3 md:gap-[12px] w-full">
            <h2 className="font-display text-4xl md:text-[52px] leading-tight md:leading-[1.077] tracking-tight md:tracking-[-0.8px] text-paper-text font-normal">
              Background
            </h2>
            <p className="font-sans text-base md:text-[18px] font-medium leading-relaxed md:leading-[1.5] tracking-tight md:tracking-[-0.18px] text-paper-sub md:w-[455px]">
              Engineers writing technical reports constantly switch between tools, leading to:
            </p>
          </div>

          {/* Dual Column */}
          <div className="w-full flex flex-col md:flex-row gap-12 md:gap-[66px] bg-[#FAFAFA] rounded-2xl md:rounded-[24px] p-8 md:p-[48px]">
            {/* Frame 1 */}
            <div className="flex flex-col gap-8 md:gap-[98px] md:w-[275px] shrink-0">
              {/* Phase 1 */}
              <div className="flex flex-col gap-4 md:gap-[16px]">
                <div className="bg-[#EA7B48]/10 text-[#EA7B48] px-4 py-[6px] rounded-[8px] max-w-fit font-sans text-base md:text-[18px] font-medium leading-[1.5]">
                  Authoring
                </div>
                <p className="font-sans text-base md:text-[16px] font-medium leading-relaxed md:leading-[1.6] tracking-tight md:tracking-[-0.18px] text-paper-sub">
                  The authoring process is fragmented across disconnected environments.
                </p>
              </div>

              {/* Phase 2 */}
              <div className="flex flex-col gap-4 md:gap-[16px]">
                <div className="bg-[#2172AB]/10 text-[#2172AB] px-4 py-[6px] rounded-[8px] max-w-fit font-sans text-base md:text-[18px] font-medium leading-[1.5]">
                  Delivery
                </div>
                <p className="font-sans text-base md:text-[16px] font-medium leading-relaxed md:leading-[1.6] tracking-tight md:tracking-[-0.18px] text-paper-sub">
                  When engineering papers can't be run, verified, or interacted with, they become black boxes.
                </p>
              </div>
            </div>

            {/* Illustration */}
            <div className="flex-1 rounded-lg md:rounded-[8px] overflow-hidden min-h-[250px] md:h-[365px]">
              <img src="/assets/images/section-1/painpoint.png" alt="Painpoints Visual" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Callout */}
          <div className="w-full flex flex-col gap-4 md:gap-[16px] bg-[#FAFAFA] rounded-2xl md:rounded-[24px] p-8 md:p-[64px]">
            <h3 className="font-display text-[32px] font-bold text-paper-text leading-tight">
              Paper's solution
            </h3>
            <p className="font-sans text-[20px] font-normal leading-relaxed md:leading-[1.6] text-paper-sub">
              Unified environment where writing = analysis = presentation. What's delivered isn't a static report, but an explorable, reproducible interactive document.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2: Module Foundation */}
      <div id="definition" className="w-full flex justify-center bg-white">
        <div className="w-full max-w-[1440px] flex flex-col gap-12 md:gap-[48px] p-6 lg:p-[80px]">

          {/* Section Heading */}
          <div className="flex flex-col gap-3 md:gap-[12px] w-full">
            <h2 className="font-display text-4xl md:text-[52px] leading-tight md:leading-[1.077] tracking-tight md:tracking-[-0.8px] text-paper-text font-normal">
              Product defining
            </h2>
            <p className="font-sans text-base md:text-[18px] font-medium leading-relaxed md:leading-[1.5] tracking-tight md:tracking-[-0.18px] text-paper-sub md:w-[455px]">
              To define the product scope and clarify core requirements, I organized a workshop with the team using physical cards to simulate real user workflows.
            </p>
          </div>

          {/* Media */}
          <div className="w-full rounded-2xl md:rounded-[16px] h-[300px] md:h-[520px] overflow-hidden">
            <img src="/assets/images/section-2/workshop.jpg" alt="Workshop Session" className="w-full h-full object-cover" />
          </div>

          {/* Core Insights */}
          <div className="w-full flex flex-col md:flex-row gap-8 md:gap-[40px]">
            {/* Insight 1 */}
            <div className="flex-1 flex flex-col gap-3 md:gap-[12px] p-6 md:p-[32px] bg-[#FAFAFA] rounded-2xl md:rounded-[24px]">
              <h4 className="font-display text-2xl md:text-[28px] font-normal leading-tight md:leading-[1.2] tracking-tight md:tracking-[-0.4px] text-paper-text">
                Users need to reference data from multiple sources.
              </h4>
              <p className="font-sans text-base md:text-[16px] font-medium leading-relaxed md:leading-[1.6] tracking-tight md:tracking-[-0.18px] text-paper-sub">
                Engineers pull data from different places — models from ODE simulation apps, code, external table files — and combine them into analysis workflows.
              </p>
            </div>

            {/* Insight 2 */}
            <div className="flex-1 flex flex-col gap-3 md:gap-[12px] p-6 md:p-[32px] bg-[#FAFAFA] rounded-2xl md:rounded-[24px]">
              <h4 className="font-display text-2xl md:text-[28px] font-normal leading-tight md:leading-[1.2] tracking-tight md:tracking-[-0.4px] text-paper-text">
                Connecting analysis components is critical.
              </h4>
              <p className="font-sans text-base md:text-[16px] font-medium leading-relaxed md:leading-[1.6] tracking-tight md:tracking-[-0.18px] text-paper-sub">
                The value lies in traceability. Changing a parameter should automatically update the referencing code and downstream plots.
              </p>
            </div>
          </div>
        </div>
      </div>



      {/* Section 3: Interaction Design */}
      <div id="modules" className="w-full flex justify-center bg-white">
        <div className="w-full max-w-[1440px] flex flex-col gap-12 md:gap-[48px] p-6 lg:p-[80px]">
          {/* Heading */}
          <div className="flex flex-col gap-3 md:gap-[12px] w-full px-[80px]">
            <h2 className="font-display text-4xl md:text-[52px] leading-tight md:leading-[1.077] tracking-tight md:tracking-[-0.8px] text-paper-text font-normal">
              Highlights
            </h2>
          </div>

          {/* Grid setup */}
          <div className="w-full flex flex-col md:flex-row gap-6 md:gap-[24px] pt-4 md:pt-[16px]">
            {/* Card 1 */}
            <div className="flex-1 flex flex-col flex-nowrap gap-4 md:gap-[10px] bg-[#FAFAFA] rounded-2xl md:rounded-[16px]">
              <div className="flex flex-col gap-3 md:gap-[12px] p-6 md:p-[24px]">
                {/* Icon */}
                <div className="w-12 h-12 bg-[#F2F2F580] rounded-[12px] flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-paper-text">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                </div>
                <h4 className="font-display text-lg md:text-[18px] font-semibold md:font-[600] leading-snug md:leading-[1.389] text-paper-text">
                  General Module Behaviors
                </h4>
                <p className="font-sans text-sm md:text-[14.5px] font-medium leading-relaxed md:leading-[1.448] text-paper-sub">
                  All modules share consistent behaviors for fast editing and connect through parent-child binding for data traceability.
                </p>
              </div>
              <div className="p-2 md:p-[8px] pt-0">
                <div className="w-full h-auto md:h-[295.5px] bg-white rounded-lg md:rounded-[8px] overflow-hidden">
                  <img src="/assets/images/section-3/Feature-general.png" alt="General Behaviors" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex-1 flex flex-col flex-nowrap gap-4 md:gap-[10px] bg-[#FAFAFA] rounded-2xl md:rounded-[16px]">
              <div className="flex flex-col gap-3 md:gap-[12px] p-6 md:p-[24px]">
                {/* Icon */}
                <div className="w-12 h-12 bg-[#F2F2F580] rounded-[12px] flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-paper-text">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <h4 className="font-display text-lg md:text-[18px] font-semibold md:font-[600] leading-snug md:leading-[1.389] text-paper-text">
                  Code Modules
                </h4>
                <p className="font-sans text-sm md:text-[14.5px] font-medium leading-relaxed md:leading-[1.448] text-paper-sub">
                  Run simulations and analysis in-notebook. Switch between text and visual views for clearer model understanding.
                </p>
              </div>
              <div className="p-2 md:p-[8px] pt-0">
                <div className="w-full h-auto md:h-[264px] bg-white rounded-lg md:rounded-[8px] overflow-hidden">
                  <img src="/assets/images/section-3/Feature-code.png" alt="Code Modules" className="w-full h-full object-contain p-2" />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex-1 flex flex-col flex-nowrap gap-4 md:gap-[10px] bg-[#FAFAFA] rounded-2xl md:rounded-[16px]">
              <div className="flex flex-col gap-3 md:gap-[12px] p-6 md:p-[24px]">
                {/* Icon */}
                <div className="w-12 h-12 bg-[#F2F2F580] rounded-[12px] flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-paper-text">
                    <path d="M3 3v18h18"></path>
                    <path d="M18 17V9"></path>
                    <path d="M13 17V5"></path>
                    <path d="M8 17v-3"></path>
                  </svg>
                </div>
                <h4 className="font-display text-lg md:text-[18px] font-semibold md:font-[600] leading-snug md:leading-[1.389] text-paper-text">
                  Visualization Modules
                </h4>
                <p className="font-sans text-sm md:text-[14.5px] font-medium leading-relaxed md:leading-[1.448] text-paper-sub">
                  Inspect and validate results in Table. Explore patterns and comparisons in Plot. Switch views while keeping the same data source connected.
                </p>
              </div>
              <div className="p-2 md:p-[8px] pt-0">
                <div className="w-full h-auto md:h-[264px] bg-white rounded-lg md:rounded-[8px] overflow-hidden">
                  <img src="/assets/images/section-3/Feature-visualization.png" alt="Visualization Modules" className="w-full h-full object-contain p-2" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* Section 4: AI Integration */}
      <div id="ai" className="w-full flex justify-center bg-white border-t border-black/5">
        <div className="w-full max-w-[1440px] flex flex-col gap-12 md:gap-[48px] p-6 lg:p-[80px]">

          <div className="flex flex-col gap-3 md:gap-[12px] w-full px-[80px]">
            <h2 className="font-display text-4xl md:text-[52px] leading-tight md:leading-[1.077] tracking-tight md:tracking-[-0.8px] text-paper-text font-normal">
              What's AI's role in Paper?
            </h2>
          </div>

          {/* AI Definition Callout */}
          <div className="w-full bg-[#FAFAFA] rounded-2xl md:rounded-[24px] p-8 md:p-[64px] flex flex-col md:flex-row gap-8 md:gap-[48px] justify-between items-start">
            <div>
              <svg width="64" height="64" viewBox="0 0 141 141" fill="none" className="text-[#EA7B48]">
                <path d="M23.381 12.814l1.32-0.91c5.1-3.521 5.778-4.003 6.455-4.482l3.366 4.762c-0.706 0.5-1.41 0.997-6.51 4.518l-2.209 1.523 9.397 5.707-3.025 4.984-8.794-5.34 0 12.012-5.83 0 0-11.663c-4.23 2.919-9.045 6.242-13.942 9.628l-3.315-4.795c5.228-3.616 10.364-7.16 14.792-10.216l-15.086-9.161 1.513-2.492 1.514-2.491 14.523 8.817 0-13.215 5.831 0 0 12.814z" fill="currentColor" />
              </svg>
            </div>
            <p className="font-display text-4xl md:text-[52px] font-normal leading-tight md:leading-[1.5] tracking-tight md:tracking-[-0.18px] text-paper-text md:w-[825px]">
              AI shouldn't be a general chatbot — it should be a collaborator embedded in the workflow.
            </p>
          </div>

          {/* Mechanisms */}
          <div className="w-full flex flex-col gap-8 md:gap-[48px]">

            {/* Mech 1 */}
            <div className="w-full flex flex-col md:flex-row gap-8 md:gap-[48px] items-center">
              <div className="flex-1 bg-white rounded-2xl md:rounded-[16px] p-4 md:p-[24px]">
                <img src="/assets/images/section-4/Demo-1.gif" alt="Context-aware generation" className="w-full h-auto rounded-lg" />
              </div>
              <div className="md:w-[400px] flex flex-col gap-4">
                <h4 className="font-display text-2xl md:text-[28px] font-bold text-paper-text">AI Integration in Outline</h4>
                <p className="font-sans text-base leading-relaxed text-paper-sub">
                  Trigger AI from the Outline while browsing. Call out a specific module and run targeted "Suggest" commands in context.
                </p>
              </div>
            </div>

            {/* Mech Row (2 and 3) */}
            <div className="w-full flex flex-col md:flex-row gap-8 md:gap-[48px]">
              {/* Mech 2 */}
              <div className="flex-1 bg-[#FAFAFA] border border-black/5 rounded-2xl md:rounded-[24px] p-6 md:p-[24px] flex flex-col gap-6">
                <div className="w-full h-[260px] bg-white rounded-xl md:rounded-[16px] overflow-hidden">
                  <img src="/assets/images/section-4/Demo-2.gif" alt="AI Assistance in Code Module" className="w-full h-full object-cover" />
                </div>
                <h4 className="font-display text-2xl md:text-[24px] font-bold text-paper-text">AI Assistance in Code Module</h4>
                <p className="font-sans text-base leading-relaxed md:leading-[1.6] text-paper-sub">
                  Generate runnable code directly inside Code modules. Also supports quick edits like fixing errors and refactoring.
                </p>
              </div>

              {/* Mech 3 */}
              <div className="flex-1 bg-[#FAFAFA] border border-black/5 rounded-2xl md:rounded-[24px] p-6 md:p-[24px] flex flex-col gap-6">
                <div className="w-full h-[260px] bg-white rounded-xl md:rounded-[16px] overflow-hidden">
                  <img src="/assets/images/section-4/Demo-3.gif" alt="Quick Add Modules for Next Step" className="w-full h-full object-cover" />
                </div>
                <h4 className="font-display text-2xl md:text-[24px] font-bold text-paper-text">Quick Add Modules for Next Step</h4>
                <p className="font-sans text-base leading-relaxed md:leading-[1.6] text-paper-sub">
                  From a current result, ask a question and instantly add the next module to continue the analysis.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Section 5: Impact */}
      <div id="impact" className="w-full flex justify-center bg-white border-t border-black/5">
        <div className="w-full max-w-[1440px] flex flex-col gap-12 md:gap-[48px] p-6 lg:p-[80px]">

          {/* Heading */}
          <div className="flex flex-col gap-3 md:gap-[12px] w-full px-[80px]">
            <h2 className="font-display text-4xl md:text-[52px] leading-tight md:leading-[1.077] tracking-tight md:tracking-[-0.8px] text-paper-text font-normal">
              Impact & future directions
            </h2>
            <p className="font-sans text-base md:text-[18px] font-medium leading-relaxed md:leading-[1.5] text-paper-sub">
              Launched public beta December 2025.
            </p>
          </div>

          {/* Impact Split */}
          <div className="w-full flex flex-col md:flex-row gap-12 md:gap-[64px]">

            {/* Left Column */}
            <div className="flex-1 flex flex-col gap-6 md:gap-[24px]">
              <div>
                <h4 className="font-sans text-sm md:text-[14px] font-bold text-paper-text uppercase tracking-wider mb-2">Impact</h4>
                <p className="font-sans text-base md:text-[16px] leading-relaxed text-paper-sub">
                  Launched public beta December 2025. Since then, we've welcomed ODE Believers from institutions including:
                </p>
              </div>
              {/* Institution Pills */}
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 border border-[#CCCCCC] rounded-full text-sm font-sans text-paper-text">German Aerospace Center</span>
                <span className="px-4 py-2 border border-[#CCCCCC] rounded-full text-sm font-sans text-paper-text">Rensselaer Polytechnic Institute</span>
                <span className="px-4 py-2 border border-[#CCCCCC] rounded-full text-sm font-sans text-paper-text">TU Munich</span>
                <span className="px-4 py-2 border border-[#CCCCCC] rounded-full text-sm font-sans text-paper-text">LTX Simulation</span>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 flex flex-col gap-6 md:gap-[24px]">
              <div>
                <h4 className="font-sans text-sm md:text-[14px] font-bold text-paper-text uppercase tracking-wider mb-2">Next step</h4>
                <p className="font-sans text-base md:text-[16px] leading-relaxed text-paper-sub">
                  Viewer-side AI: enabling readers to ask questions and explore results interactively — turning static consumption into active investigation.
                </p>
              </div>
            </div>

          </div>

          {/* Closing Card */}
          <div className="w-full border-t border-[#CCCCCC] pt-8 mt-8">
            <p className="font-display text-3xl md:text-[36px] font-medium italic text-paper-text text-left">
              "The goal isn't smarter AI — it's clearer workflows where human insight and machine speed work in tandem."
            </p>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-paper-bg pb-12 pt-24 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto border-t border-black/10 pt-16">
          {/* Top Row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-24 md:mb-32">
            <a href="mailto:ruiniohhh@gmail.com" className="font-display text-4xl md:text-5xl tracking-tight text-paper-text hover:opacity-70 transition-opacity mb-8 md:mb-0">
              ruiniohhh@gmail.com
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center justify-center border border-black/10 rounded-full p-1 hover:bg-black/5 transition-colors group cursor-pointer"
            >
              <div className="bg-paper-bg rounded-full px-6 py-2 group-hover:bg-transparent transition-colors">
                <span className="text-2xl text-paper-text font-sans">↑</span>
              </div>
            </button>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-[13px] font-sans">
            <p className="text-paper-sub mb-6 md:mb-0">© ruini oh | made in 2025</p>
            <div className="flex gap-8">
              <a href="https://www.behance.net/rannieoh" target="_blank" rel="noopener noreferrer" className="text-paper-sub hover:text-paper-text transition-colors">Behance</a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-paper-sub hover:text-paper-text transition-colors">Instagram</a>
              <a href="https://ruiniohh.webflow.io/" target="_blank" rel="noopener noreferrer" className="text-paper-sub hover:text-paper-text transition-colors">Portfolio</a>
              <a href="https://www.linkedin.com/in/rannie-ou/" target="_blank" rel="noopener noreferrer" className="text-paper-sub hover:text-paper-text transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CaseStudy;