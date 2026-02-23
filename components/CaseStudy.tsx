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
    <div className="w-full bg-paper-bg selection:bg-paper-text selection:text-paper-bg">

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
                  <div className="w-px h-8 bg-black/20"></div>
                  <div className="w-3 h-3 border-2 border-black/30 rounded-full bg-paper-bg"></div>
                </div>
              </div>

              {/* Solution Card */}
              <div className="max-w-2xl mx-auto text-center bg-black text-white p-10">
                <Label className="mb-4 text-white/60">Paper's Solution</Label>
                <p className="text-xl md:text-2xl font-medium leading-relaxed mb-4">
                  Unified environment where <strong>writing = analysis = presentation</strong>.
                </p>
                <p className="text-sm text-white/70">
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

          {/* Workshop Photo Placeholder */}
          <div className="col-span-4 md:col-span-6 md:col-start-7 mb-12">
            <FadeIn delay={0.2}>
              <PlaceholderImage label="Workshop Photo (Card Scenario Simulation)" aspect="aspect-[4/3]" />
              <Caption>Workshop sessions using physical cards to map user workflows.</Caption>
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
              <div className="bg-white p-5 border border-black/5 mb-4">
                <Label className="mb-2 text-black">Insight 1</Label>
                <p className="font-display text-[15px] font-medium leading-snug mb-3">Users need to reference data from multiple sources</p>
                <p className="text-[13px] text-paper-sub leading-relaxed">
                  Modular system: Code, Text, Table, Plot modules assembled like building blocks.
                </p>
              </div>

              {/* Insight 2 */}
              <div className="bg-white p-5 border border-black/5">
                <Label className="mb-2 text-black">Insight 2</Label>
                <p className="font-display text-[15px] font-medium leading-snug mb-3">Module relationships determine data flow</p>
                <p className="text-[13px] text-paper-sub leading-relaxed">
                  Parent-child relationships: When a parent updates, children auto-refresh.
                </p>
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
              <div className="bg-[#F5F5F3] p-6 border border-black/5">
                <Subheadline className="mb-3">General Module Capabilities</Subheadline>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Body>
                    All modules share unified behaviors: drag to reposition, resize, slash-command insertion.
                  </Body>
                  <Body>
                    <strong>Parent-child relationships:</strong> Modules bind to data sources for data traceability and automatic updates.
                  </Body>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Code Module */}
          <div className="col-span-4 md:col-span-6 mb-8">
            <FadeIn delay={0.2}>
              <div className="border border-black/5 h-full">
                <div className="p-5 border-b border-black/5">
                  <Label className="mb-2 text-black">Code Module</Label>
                  <p className="text-[14px] leading-relaxed">
                    Dual-view switching (code ⇄ diagram) + upstream data binding capability.
                  </p>
                </div>
                <PlaceholderImage label="Code Module UI (code/diagram switch + binding)" aspect="aspect-[4/3]" />
              </div>
            </FadeIn>
          </div>

          {/* Visualization Modules */}
          <div className="col-span-4 md:col-span-6 mb-8">
            <FadeIn delay={0.3}>
              <div className="border border-black/5 h-full">
                <div className="p-5 border-b border-black/5">
                  <Label className="mb-2 text-black">Visualization Modules</Label>
                  <p className="text-[14px] leading-relaxed">
                    Table and Plot can switch views within the same module while preserving data source.
                  </p>
                </div>
                <PlaceholderImage label="Table/Plot Module UI (view switching)" aspect="aspect-[4/3]" />
              </div>
            </FadeIn>
          </div>
        </Grid>
      </Section>


      {/* Section 4: AI + Module-based */}
      <Section id="ai-design" className="bg-[#F5F5F3] border-t border-paper-text/5 py-12 md:py-16">
        <Grid>
          {/* Header + Opportunity */}
          <div className="col-span-4 md:col-span-12 mb-10">
            <FadeIn>
              <Headline className="mb-6">AI + Module-based</Headline>
              <div className="bg-white p-6 border border-black/5 max-w-3xl">
                <Subheadline className="mb-3">Paper's Opportunity</Subheadline>
                <Body className="mb-4">
                  With modular structure and parent-child relationships in place, AI can understand complete workflows. This enables AI to accelerate analysis.
                </Body>
                <p className="text-[14px] font-medium border-t border-black/10 pt-4">
                  Definition: <strong>AI shouldn't be a general chatbot</strong> but a <strong>collaborator embedded in the workflow</strong>.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Design Principles → Core Mechanisms (Connected Layout) */}
          <div className="col-span-4 md:col-span-12">
            <FadeIn delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                {/* Left: Principles (Compact) */}
                <div className="md:col-span-3">
                  <Subheadline className="mb-4">Design Principles</Subheadline>
                  <div className="space-y-3">
                    <div className="bg-white p-4 border-l-2 border-black">
                      <p className="text-[13px] font-medium">Context-aware</p>
                      <p className="text-[12px] text-paper-sub mt-1">Understands modules, sources, relationships</p>
                    </div>
                    <div className="bg-white p-4 border-l-2 border-black">
                      <p className="text-[13px] font-medium">Workflow-embedded</p>
                      <p className="text-[12px] text-paper-sub mt-1">Triggered at friction points</p>
                    </div>
                    <div className="bg-white p-4 border-l-2 border-black">
                      <p className="text-[13px] font-medium">Transparent</p>
                      <p className="text-[12px] text-paper-sub mt-1">Shows sources & reasoning</p>
                    </div>
                  </div>

                  {/* Arrow Connector */}
                  <div className="hidden md:flex items-center justify-center mt-6">
                    <div className="flex items-center gap-2 text-paper-sub">
                      <span className="text-[11px] uppercase tracking-wider">Applied as</span>
                      <svg width="24" height="12" viewBox="0 0 24 12" fill="none" className="text-paper-sub">
                        <path d="M0 6H22M22 6L17 1M22 6L17 11" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Right: Mechanisms (Featured) */}
                <div className="md:col-span-9">
                  <Subheadline className="mb-4">Core Mechanisms</Subheadline>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Mechanism 1 */}
                    <div className="border border-black/10 bg-white">
                      <PlaceholderImage label="AI Commands by Module" aspect="aspect-[4/3]" />
                      <div className="p-4">
                        <p className="text-[13px] font-medium mb-1">Module-specific Commands</p>
                        <p className="text-[12px] text-paper-sub">Code: generate, fix. Plot: analyze, Q&A.</p>
                      </div>
                    </div>

                    {/* Mechanism 2 */}
                    <div className="border border-black/10 bg-white">
                      <PlaceholderImage label="Quick Add vs In-module" aspect="aspect-[4/3]" />
                      <div className="p-4">
                        <p className="text-[13px] font-medium mb-1">Dual Entry Points</p>
                        <p className="text-[12px] text-paper-sub">Quick Add or in-module refine.</p>
                      </div>
                    </div>

                    {/* Mechanism 3 */}
                    <div className="border border-black/10 bg-white">
                      <PlaceholderImage label="Provenance Display" aspect="aspect-[4/3]" />
                      <div className="p-4">
                        <p className="text-[13px] font-medium mb-1">Transparent Provenance</p>
                        <p className="text-[12px] text-paper-sub">Shows data source & reasoning.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Grid>
      </Section>


      {/* Section 5: Impact & Future Directions */}
      <Section id="impact" className="bg-white border-t border-paper-text/10 py-12 md:py-16">
        <Grid>
          <div className="col-span-4 md:col-span-12 mb-10">
            <FadeIn>
              <Headline>Impact & Future Directions</Headline>
            </FadeIn>
          </div>

          {/* Impact */}
          <div className="col-span-4 md:col-span-6 mb-10">
            <FadeIn delay={0.1}>
              <Subheadline className="mb-4">Impact</Subheadline>
              <Body className="mb-6">
                Launched public beta December 2025. Since then, we've welcomed ODE Believers from institutions including:
              </Body>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-2 bg-[#F5F5F3] text-[13px] font-medium">German Aerospace Center</span>
                <span className="px-3 py-2 bg-[#F5F5F3] text-[13px] font-medium">Rensselaer Polytechnic Institute</span>
                <span className="px-3 py-2 bg-[#F5F5F3] text-[13px] font-medium">Technical University of Munich</span>
                <span className="px-3 py-2 bg-[#F5F5F3] text-[13px] font-medium">LTX Simulation GmbH</span>
              </div>
            </FadeIn>
          </div>

          {/* Next Step */}
          <div className="col-span-4 md:col-span-6 mb-10">
            <FadeIn delay={0.2}>
              <Subheadline className="mb-4">Next Step</Subheadline>
              <Body>
                <strong>Viewer-side AI:</strong> enabling readers to ask questions and explore results interactively.
              </Body>
            </FadeIn>
          </div>

          {/* Closing Statement */}
          <div className="col-span-4 md:col-span-12">
            <FadeIn delay={0.3}>
              <div className="border-t border-black/10 pt-10 mt-6">
                <p className="text-2xl md:text-3xl font-serif italic text-paper-text/80 max-w-3xl">
                  "The goal isn't smarter AI—it's clearer workflows where human insight and machine speed work in tandem."
                </p>
              </div>
            </FadeIn>
          </div>
        </Grid>
      </Section>


      {/* Footer */}
      <footer className="py-24 px-6 md:px-12 border-t border-black bg-paper-bg">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <Label className="mb-2">Designed by</Label>
            <p className="text-xl font-medium">Ruini Oh</p>
          </div>
          <div className="mt-8 md:mt-0 flex gap-8">
            <a href="#" className="text-sm uppercase tracking-widest hover:text-paper-sub">Twitter</a>
            <a href="#" className="text-sm uppercase tracking-widest hover:text-paper-sub">LinkedIn</a>
            <a href="#" className="text-sm uppercase tracking-widest hover:text-paper-sub">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CaseStudy;