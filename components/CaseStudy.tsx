import React from 'react';
import { Section, Grid, FadeIn } from './Layout';
import { Title, Headline, Subheadline, Body, Label, Caption } from './Typography';
import { RadialBurst, PlaceholderImage, LaptopMockup, WorkflowDiagram, SystemArchDiagram, Timeline, WorkshopWhiteboard, AiPrinciplesDiagram, AiMechanismFlow, EditorToViewerDiagram } from './Visuals';
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

      {/* Sticky Table of Contents */}
      <div className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-6 font-sans">
        {/* Back Button */}
        <a
          href="https://ruiniohh.webflow.io/"
          className="flex items-center gap-2 bg-white/70 backdrop-blur-xl px-4 py-2 rounded-full text-paper-sub hover:text-paper-text transition-colors shadow-sm"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span className="text-sm font-medium">Back to Portfolio</span>
        </a>

        {/* Nav Pill */}
        <nav className="hidden md:flex items-center gap-8 bg-white/70 backdrop-blur-xl px-10 py-4 rounded-full text-[14px] shadow-sm">
          <a href="#hero" className="text-paper-text font-medium hover:opacity-70 transition-opacity">Context</a>
          <a href="#insights" className="text-paper-sub hover:text-paper-text transition-colors">Structure</a>
          <a href="#modules" className="text-paper-sub hover:text-paper-text transition-colors">Modules</a>
          <a href="#ai" className="text-paper-sub hover:text-paper-text transition-colors">AI</a>
          <a href="#impact" className="text-paper-sub hover:text-paper-text transition-colors">Impact</a>
        </nav>

        {/* Spacer for centering Pill */}
        <div className="hidden md:block w-[180px]"></div>
      </div>

      {/* 01. Hero Section */}
      <Section id="hero" className="min-h-[90vh] flex flex-col">
        {/* Top Row: Title/Tags (Left) | Project Cover (Right) */}
        <Grid className="flex-1 items-start pt-8">
          {/* Left Column: Title + Tags */}
          <div className="col-span-4 md:col-span-5 flex flex-col justify-start">
            <FadeIn delay={0.1}>
              <h1 className="font-display text-[48px] md:text-[64px] lg:text-[80px] leading-[0.95] tracking-tight font-semibold mb-6">
                <a
                  href="https://www.orthogonal.dev/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-8 decoration-2"
                >
                  ODE-PAPER
                </a>
              </h1>
              <Subheadline className="text-xl md:text-2xl mb-8 text-paper-sub">
                AI Interactive Analysis Notebook for Engineers
              </Subheadline>
              <div className="flex gap-3">
                <span className="text-[11px] md:text-[12px] uppercase tracking-widest bg-black text-white px-4 py-2 font-medium rounded-full">Product Design</span>
                <span className="text-[11px] md:text-[12px] uppercase tracking-widest border border-black/40 px-4 py-2 font-medium rounded-full">AI SaaS</span>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Project Cover */}
          <div className="col-span-4 md:col-span-6 md:col-start-7">
            <FadeIn delay={0.2}>
              <img
                src="/assets/images/hero/cover.png"
                alt="Paper - AI Interactive Analysis Notebook"
                className="w-full object-cover rounded-lg"
              />
            </FadeIn>
          </div>
        </Grid>

        {/* Bottom Row: One-liner (Left) | Key Info (Right) */}
        <FadeIn delay={0.3} className="border-t border-black/10 pt-8 pb-4 mt-12">
          <Grid>
            {/* One-liner */}
            <div className="col-span-4 md:col-span-5 mb-8 md:mb-0">
              <Subheadline className="text-lg md:text-xl leading-relaxed">
                Built 0-1 modular system unifying code, parameters, and visualization into dynamic documents.
              </Subheadline>
            </div>

            {/* Key Info Grid */}
            <div className="col-span-4 md:col-span-6 md:col-start-7">
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                <div>
                  <Label className="mb-1 text-paper-sub">Timeline</Label>
                  <span className="text-sm font-medium">2024.05 – 2024.12</span>
                </div>
                <div>
                  <Label className="mb-1 text-paper-sub">Tools</Label>
                  <span className="text-sm font-medium">Figma, Google AI Studio</span>
                </div>
                <div>
                  <Label className="mb-1 text-paper-sub">My Role</Label>
                  <span className="text-sm font-medium">Sole Product Designer</span>
                  <p className="text-xs text-paper-sub mt-0.5">Full 0-1 Process</p>
                </div>
                <div>
                  <Label className="mb-1 text-paper-sub">Status</Label>
                  <span className="text-sm font-medium">Public Beta</span>
                  <p className="text-xs text-paper-sub mt-0.5">Dec 2025</p>
                </div>
              </div>
            </div>
          </Grid>
        </FadeIn>
      </Section>



      {/* Section 1: User Pain Points & Insights */}
      <Section id="insights" className="bg-[#E5E4DE] border-t border-paper-text/5">
        <Grid>
          <div className="col-span-4 md:col-span-12 mb-8">
            <FadeIn>
              <Headline className="text-3xl md:text-4xl">User Pain Points & Insights</Headline>
            </FadeIn>
          </div>

          {/* Two-Phase Layout: Phase 1 | Arrow | Phase 2 */}
          <div className="col-span-4 md:col-span-12">
            <FadeIn delay={0.1}>
              <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-0 mb-12">
                {/* Phase 1: Authoring */}
                <div className="flex-1 bg-white p-8 border border-black/10">
                  <Label className="mb-3 text-black">Phase 1: Authoring</Label>
                  <p className="text-base leading-relaxed mb-6">
                    Engineers constantly jump between tools—MATLAB for analysis, Overleaf for writing, manually copy-pasting results.
                  </p>
                  <PlaceholderImage label="Authoring Workflow Visual" aspect="aspect-[4/3]" />
                </div>

                {/* Arrow Connector */}
                <div className="hidden md:flex items-center justify-center px-4">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-px bg-black/30"></div>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-black/50">
                      <path d="M 6 4 L 10 8 L 6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="md:hidden flex justify-center py-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-black/30 rotate-90">
                    <path d="M 6 4 L 10 8 L 6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Phase 2: Delivery */}
                <div className="flex-1 bg-white p-8 border border-black/10">
                  <Label className="mb-3 text-black">Phase 2: Delivery</Label>
                  <p className="text-base leading-relaxed mb-6">
                    When engineering papers can't be run, verified, or interacted with, they become black boxes.
                  </p>
                  <PlaceholderImage label="Delivery Problem Visual" aspect="aspect-[4/3]" />
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Paper's Solution - Centered below, converging the two phases */}
          <div className="col-span-4 md:col-span-12">
            <FadeIn delay={0.2}>
              {/* Visual Connector from both phases */}
              <div className="flex justify-center mb-6">
                <div className="flex flex-col items-center">
                  <div className="w-[2px] h-16 bg-black/10"></div>
                </div>
              </div>

              {/* Solution Card */}
              <div className="max-w-3xl mx-auto text-center bg-paper-bg border border-black/5 rounded-3xl p-12 md:p-16 shadow-sm">
                <Label className="mb-4 text-paper-sub">Paper's Solution</Label>
                <p className="text-2xl md:text-3xl font-display font-medium leading-relaxed mb-4 text-paper-text">
                  Unified environment where <strong>writing = analysis = presentation</strong>.
                </p>
                <p className="text-base text-paper-sub leading-relaxed">
                  What's delivered isn't a static report, but an explorable, reproducible interactive document.
                </p>
              </div>
            </FadeIn>
          </div>
        </Grid>
      </Section>


      {/* Section 2: Module-Product Foundation */}
      <Section id="definition" className="bg-white border-t border-paper-text/5">
        <Grid>
          {/* Header */}
          <div className="col-span-4 md:col-span-12 mb-12">
            <FadeIn>
              <Headline>Module-Product Foundation</Headline>
            </FadeIn>
          </div>

          {/* Challenge + Workshop Row */}
          <div className="col-span-4 md:col-span-5 mb-12">
            <FadeIn delay={0.1}>
              <Subheadline className="mb-4">Challenge</Subheadline>
              <Body className="mb-10">
                Received a vague brief—"Build a computational document editor."
              </Body>

              <Subheadline className="mb-4">Workshop Approach</Subheadline>
              <Body>
                Used physical cards to simulate real scenarios with the team: import model → run analysis → generate charts → write conclusions.
              </Body>
            </FadeIn>
          </div>

          {/* Workshop Photo */}
          <div className="col-span-4 md:col-span-12 mb-12">
            <FadeIn delay={0.2}>
              <img src="/assets/images/section-2/workshop.jpg" alt="Workshop Session using physical cards" className="w-full max-h-[600px] object-cover rounded-2xl shadow-sm border border-black/5" />
              <Caption className="mt-6 text-center text-paper-sub">Workshop sessions using physical cards to map user workflows.</Caption>
            </FadeIn>
          </div>
        </Grid>
      </Section>

      {/* Section 2 Part 2: Core Insights */}
      <Section id="system" className="bg-[#F5F5F3] border-t border-paper-text/5 py-12 md:py-16">
        <Grid>
          {/* Left: Insight Cards (stacked) */}
          <div className="col-span-4 md:col-span-4">
            <FadeIn>
              <Subheadline className="mb-6">Core Insights</Subheadline>

              {/* Insight 1 */}
              <div className="flex gap-4 items-start mb-6">
                <div className="mt-1 p-2 bg-paper-bg rounded-lg border border-black/5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-paper-sub"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                </div>
                <div>
                  <h4 className="font-display text-[16px] font-medium leading-snug mb-2 text-paper-text">Users need to reference data from multiple sources</h4>
                  <p className="text-[13px] text-paper-sub leading-relaxed">
                    Modular system: Code, Text, Table, Plot modules assembled like building blocks.
                  </p>
                </div>
              </div>

              {/* Insight 2 */}
              <div className="flex gap-4 items-start">
                <div className="mt-1 p-2 bg-paper-bg rounded-lg border border-black/5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-paper-sub"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="3" y="12" width="18" height="9" rx="2" ry="2"></rect><rect x="12" y="3" width="9" height="18" rx="2" ry="2"></rect></svg>
                </div>
                <div>
                  <h4 className="font-display text-[16px] font-medium leading-snug mb-2 text-paper-text">Module relationships determine data flow</h4>
                  <p className="text-[13px] text-paper-sub leading-relaxed">
                    Parent-child relationships: When a parent updates, children auto-refresh.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: Module Diagram */}
          <div className="col-span-4 md:col-span-8 mt-8 md:mt-0">
            <FadeIn delay={0.1}>
              <div className="bg-white p-5 border border-black/5 h-full">
                <div className="flex justify-between items-center mb-4">
                  <Label className="text-black">Module System Architecture</Label>
                  <span className="text-[11px] text-paper-sub">6 types + I/O rules</span>
                </div>
                <PlaceholderImage label="Module Diagram (6 types + connections + parent-child linking)" aspect="aspect-[16/9]" />
              </div>
            </FadeIn>
          </div>
        </Grid>
      </Section>



      {/* Section 3: Interaction & Component Design */}
      <Section className="bg-white border-t border-paper-text/5 py-12 md:py-16">
        <Grid>
          {/* Header */}
          <div className="col-span-4 md:col-span-12 mb-10">
            <FadeIn>
              <Headline>Interaction & Component Design</Headline>
            </FadeIn>
          </div>

          {/* General Module Capabilities */}
          <div className="col-span-4 md:col-span-12 mb-10">
            <FadeIn delay={0.1}>
              <div className="bg-[#F5F5F3] p-8 border border-black/5 rounded-3xl flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <Subheadline className="mb-4 text-[20px]">General Module Capabilities</Subheadline>
                  <div className="space-y-4">
                    <Body className="text-paper-sub leading-relaxed text-[15px]">
                      All modules share unified behaviors: <strong className="text-paper-text font-medium">drag to reposition, resize, slash-command insertion</strong>.
                    </Body>
                    <Body className="text-paper-sub leading-relaxed text-[15px]">
                      <strong className="text-paper-text font-medium">Parent-child relationships:</strong> Modules bind to data sources for data traceability and automatic updates.
                    </Body>
                  </div>
                </div>
                <div className="md:w-1/2 w-full">
                  <img src="/assets/images/section-3/Feature-general.png" alt="General Module Features" className="w-full h-auto rounded-xl shadow-sm border border-black/5 bg-white" />
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Code Module */}
          <div className="col-span-4 md:col-span-6 mb-8">
            <FadeIn delay={0.2} className="h-full">
              <div className="border border-black/5 h-full rounded-3xl overflow-hidden bg-white shadow-sm flex flex-col">
                <div className="p-6 md:p-8 border-b border-black/5 bg-[#F5F5F3]">
                  <Label className="mb-3 text-paper-text font-bold text-[14px]">Code Module</Label>
                  <p className="text-[15px] leading-relaxed text-paper-sub">
                    Dual-view switching (code ⇄ diagram) + upstream data binding capability.
                  </p>
                </div>
                <div className="p-8 flex-1 flex items-center justify-center bg-paper-bg">
                  <img src="/assets/images/section-3/Feature-code.png" alt="Code Module UI" className="w-full max-w-[400px] h-auto object-contain rounded-lg shadow-sm border border-black/5" />
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Visualization Modules */}
          <div className="col-span-4 md:col-span-6 mb-8">
            <FadeIn delay={0.3} className="h-full">
              <div className="border border-black/5 h-full rounded-3xl overflow-hidden bg-white shadow-sm flex flex-col">
                <div className="p-6 md:p-8 border-b border-black/5 bg-[#F5F5F3]">
                  <Label className="mb-3 text-paper-text font-bold text-[14px]">Visualization Modules</Label>
                  <p className="text-[15px] leading-relaxed text-paper-sub">
                    Table and Plot can switch views within the same module while preserving data source.
                  </p>
                </div>
                <div className="p-8 flex-1 flex items-center justify-center bg-paper-bg">
                  <img src="/assets/images/section-3/Feature-visualization.png" alt="Visualization Modules UI" className="w-full max-w-[400px] h-auto object-contain rounded-lg shadow-sm border border-black/5" />
                </div>
              </div>
            </FadeIn>
          </div>
        </Grid>
      </Section>


      {/* Section 4: AI + Module-based */}
      <Section id="ai" className="bg-[#E5E4DE] border-t border-paper-text/5 py-12 md:py-16">
        <Grid>
          {/* Header + Opportunity */}
          <div className="col-span-4 md:col-span-12 mb-10">
            <FadeIn>
              <Headline className="mb-6">AI + Module-based</Headline>

              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <Body className="text-[16px] leading-relaxed mb-4 text-paper-text">
                    With modular structure and parent-child relationships in place, AI can understand complete workflows. This enables AI to accelerate analysis.
                  </Body>
                </div>

                {/* Embedded Concept Statement */}
                <div className="md:w-1/2">
                  <div className="bg-white/60 p-6 md:p-8 border border-black/5 rounded-2xl flex gap-4 items-start shadow-sm">
                    <div className="p-2 bg-white rounded-lg mt-1 border border-black/5">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-black"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                    </div>
                    <div>
                      <p className="text-[16px] font-medium leading-relaxed font-display text-paper-text">
                        Definition: <strong>AI shouldn't be a general chatbot</strong> but a <strong>collaborator embedded in the workflow</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Mechanisms as an Asymmetric Grid */}
          <div className="col-span-4 md:col-span-12">
            <FadeIn delay={0.1}>
              <Subheadline className="mb-6 hidden">Core Mechanisms & Principles</Subheadline>
              <div className="flex flex-col gap-6">

                {/* 1. Full-Width Featured Card */}
                <div className="bg-white rounded-[24px] border border-black/5 p-6 md:p-10 flex flex-col md:flex-row items-center gap-10 shadow-sm">
                  <div className="md:w-1/3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-paper-bg/50 rounded-full mb-5 border border-black/5">
                      <span className="w-2 h-2 rounded-full bg-paper-text"></span>
                      <span className="text-[13px] font-medium text-paper-sub">Principle 1</span>
                    </div>
                    <h4 className="font-display text-[26px] font-bold text-paper-text mb-4">Context-aware generation</h4>
                    <p className="text-[15px] text-paper-sub leading-relaxed">
                      AI understands the structure of your document, including data sources and relationships, generating highly relevant insights and code specifically tailored to the current analytical state.
                    </p>
                  </div>
                  <div className="md:w-2/3 w-full h-[320px] md:h-[420px] bg-paper-bg rounded-[16px] overflow-hidden border border-black/5 shadow-inner relative">
                    <img src="/assets/images/section-4/Demo-1.gif" alt="Context-aware generation" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Split Row for 2 and 3 */}
                <div className="flex flex-col md:flex-row gap-6">
                  {/* 2. Half-Width Card */}
                  <div className="flex-1 bg-white rounded-[24px] border border-black/5 p-6 shadow-sm flex flex-col">
                    <div className="w-full h-[260px] bg-paper-bg rounded-[16px] mb-8 overflow-hidden border border-black/5 shadow-inner">
                      <img src="/assets/images/section-4/Demo-2.gif" alt="Dual entry points" className="w-full h-full object-cover" />
                    </div>
                    <div className="px-2">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-paper-bg/50 rounded-full mb-4 border border-black/5">
                        <span className="w-2 h-2 rounded-full bg-paper-text"></span>
                        <span className="text-[13px] font-medium text-paper-sub">Principle 2</span>
                      </div>
                      <h4 className="font-display text-[22px] font-bold text-paper-text mb-3">Dual entry points</h4>
                      <p className="text-[15px] text-paper-sub leading-relaxed">
                        Quick Add to generate new modules based on existing results, or In-module invoke to refine current content. Both show previews before acceptance.
                      </p>
                    </div>
                  </div>

                  {/* 3. Half-Width Card */}
                  <div className="flex-1 bg-white rounded-[24px] border border-black/5 p-6 shadow-sm flex flex-col">
                    <div className="w-full h-[260px] bg-paper-bg rounded-[16px] mb-8 overflow-hidden border border-black/5 shadow-inner">
                      <img src="/assets/images/section-4/Demo-3.gif" alt="Transparent provenance" className="w-full h-full object-cover" />
                    </div>
                    <div className="px-2">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-paper-bg/50 rounded-full mb-4 border border-black/5">
                        <span className="w-2 h-2 rounded-full bg-paper-text"></span>
                        <span className="text-[13px] font-medium text-paper-sub">Principle 3</span>
                      </div>
                      <h4 className="font-display text-[22px] font-bold text-paper-text mb-3">Transparent provenance</h4>
                      <p className="text-[15px] text-paper-sub leading-relaxed">
                        Every AI-generated output explicitly displays its data source and reasoning path—building trust and enabling technical verification.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </FadeIn>
          </div>
        </Grid>
      </Section>


      {/* Section 5: Impact & Future Directions */}
      <Section id="impact" className="bg-white py-16 md:py-24">
        <Grid>
          <div className="col-span-4 md:col-span-12 mb-12">
            <FadeIn>
              <Headline>Impact & Future Directions</Headline>
            </FadeIn>
          </div>

          {/* Left Column: Impact Narrative + Institutional Adoption */}
          <div className="col-span-4 md:col-span-6 flex flex-col gap-10">
            <FadeIn delay={0.1}>
              <div>
                <Subheadline className="mb-5">Real-World Impact</Subheadline>
                <div className="text-[16px] mb-8 leading-relaxed text-paper-sub space-y-4">
                  <p>
                    Launched in public beta in December 2025, Paper quickly proved its value. By accelerating the transition from raw analytical data to cohesive, readable reports, we've welcomed early adopters and "ODE Believers" from leading research institutions spanning the globe.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-paper-bg border border-black/5 text-[13px] font-medium rounded-full text-paper-text">German Aerospace Center</span>
                  <span className="px-4 py-2 bg-paper-bg border border-black/5 text-[13px] font-medium rounded-full text-paper-text">Rensselaer Polytechnic</span>
                  <span className="px-4 py-2 bg-paper-bg border border-black/5 text-[13px] font-medium rounded-full text-paper-text">Technical University of Munich</span>
                  <span className="px-4 py-2 bg-paper-bg border border-black/5 text-[13px] font-medium rounded-full text-paper-text">LTX Simulation GmbH</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Next Steps & Closing */}
          <div className="col-span-4 md:col-span-5 md:col-start-8">
            <FadeIn delay={0.2} className="h-full flex flex-col justify-between">
              <div className="mb-12">
                <Subheadline className="mb-5">Next Step</Subheadline>
                <div className="p-8 bg-paper-bg rounded-2xl border border-black/5 shadow-sm">
                  <p className="text-[15px] leading-relaxed text-paper-text">
                    <strong>Viewer-side AI integration:</strong> enabling readers to dynamically ask questions, manipulate parameters, and explore analytical results interactively directly from the published document.
                  </p>
                </div>
              </div>

              {/* Closing Statement */}
              <div className="border-l-4 border-black/10 pl-6 py-2 mt-auto">
                <p className="text-xl md:text-[24px] font-serif italic text-paper-text/80 leading-snug">
                  "The goal isn't smarter AI—it's clearer workflows where human insight and machine speed work in tandem."
                </p>
              </div>
            </FadeIn>
          </div>
        </Grid>
      </Section>


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