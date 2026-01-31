import React from 'react';
import { Section, Grid, FadeIn } from './Layout';
import { Headline, Subheadline, Body, Label, Caption } from './Typography';
import { RadialBurst, PlaceholderImage, LaptopMockup, WorkflowDiagram, SystemArchDiagram, Timeline, WorkshopWhiteboard } from './Visuals';
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
      <Section className="min-h-[85vh] flex flex-col justify-between">
        <FadeIn className="border-b border-paper-text/10 pb-6 mb-12 flex justify-between items-end">
          <Label>Paper</Label>
          <Label>Interactive Analysis Notebook</Label>
        </FadeIn>
        
        <Grid>
          <div className="col-span-4 md:col-span-12 lg:col-span-10 mb-12 md:mb-0">
            <FadeIn delay={0.1}>
              <Headline className="mb-8">
                Paper—<br />
                Interactive Analysis Notebook for Engineers
              </Headline>
              <Subheadline className="md:w-3/4">
                An AI-powered modular notebook that unifies engineers' fragmented workflow—bringing documentation and analysis into one environment.
              </Subheadline>
            </FadeIn>
          </div>
          
          <div className="col-span-4 md:col-span-12 mt-12">
             <FadeIn delay={0.3} className="border-t border-black/10 pt-6 flex flex-col md:flex-row gap-8 md:gap-24">
                <div>
                  <Label className="mb-2">Role</Label>
                  <span className="text-sm">Sole Product Designer | Led full 0-1 process</span>
                </div>
                <div>
                   <Label className="mb-2">Recognition</Label>
                   <span className="text-sm">German Aerospace Center & Technical University of Munich</span>
                </div>
             </FadeIn>
          </div>
        </Grid>
      </Section>

      {/* Section 1: User Pain Points & Insights */}
      <Section className="bg-[#E5E4DE] border-t border-paper-text/5">
        <Grid>
          <div className="col-span-4 md:col-span-5">
            <FadeIn>
              <Label className="mb-4 text-paper-sub">Section 1: Insights</Label>
              <Subheadline className="mb-6">User Pain Points & Insights</Subheadline>
              <Body className="mb-8 text-base">
                Engineers writing technical reports constantly switch between tools—one for coding and running analysis, another for writing documents, manually copy-pasting results, and finally exporting static files.
              </Body>
              
              <div className="space-y-6 mb-12">
                <div>
                  <Label className="mb-1 text-black">Breakpoint 01: Overleaf</Label>
                  <p className="text-sm text-paper-sub">LaTeX is not WYSIWYG, formatting requires repeated compilation, inefficient writing.</p>
                </div>
                <div>
                  <Label className="mb-1 text-black">Breakpoint 02: MATLAB</Label>
                  <p className="text-sm text-paper-sub">Models and results must be exported elsewhere to share, no collaboration support.</p>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="col-span-4 md:col-span-6 md:col-start-7">
            <FadeIn delay={0.2}>
              <div className="bg-white p-6 shadow-sm border border-black/5 mb-6">
                <Label className="mb-4">Core Insight</Label>
                <p className="text-lg md:text-xl font-medium mb-4">
                  The problem isn't lacking better tools—it's that existing tools separate the thinking process from the final output.
                </p>
                <p className="text-sm text-paper-sub">
                  Documents only show conclusions, analysis workflows can't be reproduced.
                </p>
              </div>
              <WorkflowDiagram />
              <Caption>Fig 1.1: Transitioning from fragmented tools to a unified environment.</Caption>
            </FadeIn>
          </div>
        </Grid>
      </Section>

      {/* Section 2: Defining Product Form (Split Part 1: Process) */}
      <Section className="bg-white border-t border-paper-text/5">
        <Grid>
           <div className="col-span-4 md:col-span-12 mb-12">
              <FadeIn>
                <Label className="mb-4">Section 2: Definition</Label>
                <Headline className="md:w-3/4">From Abstract Concept to Composable System</Headline>
              </FadeIn>
           </div>
           
           <div className="col-span-4 md:col-span-5">
              <FadeIn delay={0.1}>
                 <Subheadline className="mb-6">The Challenge</Subheadline>
                 <Body className="mb-12">
                   Founder's requirement was "a computational document editor"—too vague. When do users need to write vs. run code? How do they combine? How to make complex analysis workflows both executable and readable?
                 </Body>
                 
                 <Subheadline className="mb-6">My Approach</Subheadline>
                 <Body className="mb-6">
                   Made the system tangible with physical cards. In workshops, I had the team simulate real scenarios: import model → run code analysis → generate charts → write conclusions.
                 </Body>
              </FadeIn>
           </div>
           
           <div className="col-span-4 md:col-span-6 md:col-start-7">
              <FadeIn delay={0.2}>
                 <WorkshopWhiteboard />
                 <Caption>Fig 2.1: Workshops using physical cards to simulate the "import to publish" workflow.</Caption>
              </FadeIn>
           </div>
        </Grid>
      </Section>

      {/* Section 2: Defining Product Form (Split Part 2: Insights & System) */}
      <Section className="bg-paper-dark text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <RadialBurst />
         </div>

         <Grid>
            <div className="col-span-4 md:col-span-12 mb-16 relative z-10">
               <FadeIn>
                 <Subheadline className="text-white text-3xl md:text-4xl">Core Insights & System Framework</Subheadline>
               </FadeIn>
            </div>

            {/* Insight Cards */}
            <div className="col-span-4 md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 relative z-10">
                 <FadeIn delay={0.1} className="bg-white/10 p-8 border border-white/10 backdrop-blur-sm">
                    <Label className="text-white mb-4">Insight 01</Label>
                    <h3 className="text-xl font-medium mb-2">Dual-mode need</h3>
                    <p className="text-sm text-white/70 leading-relaxed">Canvas mode for building complex data flows AND document mode for linear writing—not either/or, but two views of the same content.</p>
                 </FadeIn>
                 <FadeIn delay={0.2} className="bg-white/10 p-8 border border-white/10 backdrop-blur-sm">
                    <Label className="text-white mb-4">Insight 02</Label>
                    <h3 className="text-xl font-medium mb-2">Component I/O</h3>
                    <p className="text-sm text-white/70 leading-relaxed">Defined which components produce data (code, models), which consume data (charts), and which only display (text).</p>
                 </FadeIn>
                 <FadeIn delay={0.3} className="bg-white/10 p-8 border border-white/10 backdrop-blur-sm">
                    <Label className="text-white mb-4">Insight 03</Label>
                    <h3 className="text-xl font-medium mb-2">Publishing Flexibility</h3>
                    <p className="text-sm text-white/70 leading-relaxed">Engineers view complete workflow + code, while clients need streamlined results + interactions.</p>
                 </FadeIn>
            </div>

            {/* System Architecture */}
            <div className="col-span-4 md:col-span-12 relative z-10">
              <FadeIn delay={0.4}>
                 <div className="flex flex-col md:flex-row justify-between items-end border-b border-white/20 pb-6 mb-8">
                    <div>
                      <Label className="text-white mb-2">System Framework</Label>
                      <h3 className="text-2xl font-normal">From Insights to System Rules</h3>
                    </div>
                    <p className="text-sm text-white/60 md:w-1/3 mt-4 md:mt-0">
                      Based on these findings, I defined 6 module types and their connection rules, becoming the foundation for all subsequent feature design.
                    </p>
                 </div>
                 <SystemArchDiagram />
                 <Caption className="text-white/50 border-white/20">Fig 2.2: Modular system architecture derived from workshop insights.</Caption>
              </FadeIn>
            </div>
         </Grid>
      </Section>

      {/* Section 3: Write & analyze through building blocks */}
      <Section className="bg-white border-t border-paper-text/5">
         <Grid>
           <div className="col-span-4 md:col-span-12">
             <FadeIn>
                <Label className="mb-4">Section 3: Product Interaction</Label>
                <Headline className="text-4xl md:text-6xl mb-12">Write & analyze through building blocks</Headline>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-16">
                  <Body className="text-base">
                    Built a composable system where each module—code, data visualization, or text—serves a clear purpose and connects to form complete workflows. All modules share unified drag, resize, and connect behaviors with slash-command insertion.
                  </Body>
                  <Body className="text-base">
                    <strong>Code Modules:</strong> Dual-view switching (code ⇄ diagram) and ability to bind upstream data as input sources.
                  </Body>
                  <Body className="text-base">
                    <strong>Visualization Modules:</strong> Table and Plot can switch views within the same module while preserving data source.
                  </Body>
                  <Body className="text-base">
                    <strong>Parent-Child Linking:</strong> Visual connection lines show data flow. When a parent module re-runs, child modules auto-update—eliminating manual data passing and letting users instantly reference any intermediate result.
                  </Body>
                </div>
             </FadeIn>
           </div>

           <div className="col-span-4 md:col-span-12 mt-4 mb-20">
              <FadeIn delay={0.2}>
                 <div className="w-full aspect-[16/10] bg-black/5 border border-black/10 overflow-hidden relative">
                    {/* DESIGNER: Replace with actual Paper interface screenshot showing Code + Chart modules with connection lines */}
                    <img 
                      src="/images/paper-interface-modules.jpg" 
                      crossOrigin="anonymous"
                      alt="Paper interface showing Code module generating data, Chart module displaying results, with visual connection lines indicating parent-child relationships" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML += `
                          <div class="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                            <span class="text-[10px] uppercase tracking-widest text-black/30 mb-2">Interface Screenshot Placeholder (16:10)</span>
                            <p class="text-xs text-black/20 italic max-w-md">Code + Chart modules with active visual connection lines</p>
                          </div>
                        `;
                      }}
                    />
                 </div>
              </FadeIn>
           </div>
         </Grid>
      </Section>

      {/* Section 4: Embedding AI in Workflow */}
      <Section className="bg-[#E5E4DE] border-t border-paper-text/5">
        <Grid>
          <div className="col-span-4 md:col-span-12 mb-12">
             <FadeIn>
               <Label className="mb-4">Section 4: AI Integration</Label>
               <Headline>From Insights to Design Decisions</Headline>
             </FadeIn>
          </div>

          <div className="col-span-4 md:col-span-4">
             <FadeIn delay={0.1}>
               <Subheadline className="mb-4">4.1 Research</Subheadline>
               <Body className="text-base mb-4">
                 Researched Deepnote, Hex. Discovered generic AI limitations:
               </Body>
               <ol className="list-decimal pl-4 space-y-2 text-sm text-paper-text/80 mb-8">
                 <li><strong>No context understanding:</strong> Doesn't know data sources.</li>
                 <li><strong>Fragmented interaction:</strong> Separated chat window.</li>
                 <li><strong>One-shot generation:</strong> Hard to iterate.</li>
               </ol>
             </FadeIn>
          </div>
          <div className="col-span-4 md:col-span-7 md:col-start-6">
             <FadeIn delay={0.2} className="bg-white p-6 border border-black/5">
               <Label className="mb-4">4.2 Design Strategy</Label>
               <p className="text-lg font-medium mb-6">AI shouldn't be an "omnipotent assistant" but a collaborator that understands module relationships.</p>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                 <div>
                   <Label className="mb-1 text-black">Context-aware</Label>
                   <p className="text-xs text-paper-sub">Knows module types & data flow.</p>
                 </div>
                 <div>
                   <Label className="mb-1 text-black">Workflow-embedded</Label>
                   <p className="text-xs text-paper-sub">Triggered when stuck or viewing results.</p>
                 </div>
                 <div>
                   <Label className="mb-1 text-black">Transparent</Label>
                   <p className="text-xs text-paper-sub">Visible, editable, supports optimization.</p>
                 </div>
               </div>
             </FadeIn>
          </div>

          <div className="col-span-4 md:col-span-12 mt-12">
            <FadeIn delay={0.3}>
               <Subheadline className="mb-8">4.3 Solution Design</Subheadline>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="border-t border-black pt-4">
                    <Label className="mb-2">Mechanism 1</Label>
                    <p className="font-medium mb-2">Intelligent Suggestions</p>
                    <p className="text-sm text-paper-sub">Based on module type. Code modules get refactoring; Plots get analysis Q&A.</p>
                  </div>
                  <div className="border-t border-black pt-4">
                    <Label className="mb-2">Mechanism 2</Label>
                    <p className="font-medium mb-2">Complete AI Workflow</p>
                    <p className="text-sm text-paper-sub">Trigger → Preview & Explain → Accept/Iterate → Transparent Sourcing.</p>
                  </div>
                  <div className="border-t border-black pt-4">
                    <Label className="mb-2">Mechanism 3</Label>
                    <p className="font-medium mb-2">Follow-up Iteration</p>
                    <p className="text-sm text-paper-sub">Maintain conversation context for gradual optimization (e.g. "add steady state comparison").</p>
                  </div>
               </div>
               <div className="mt-12">
                  <PlaceholderImage label="Diagram: AI Trigger to Generation Flow" aspect="aspect-[21/9]" />
               </div>
            </FadeIn>
          </div>
        </Grid>
      </Section>

      {/* Section 5: Outcomes & Reflections */}
      <Section className="bg-white border-t border-paper-text/10">
        <Grid>
          <div className="col-span-4 md:col-span-5">
            <FadeIn>
               <Label className="mb-6">Section 5: Conclusion</Label>
               <Headline className="mb-8">Outcomes & Reflections</Headline>
               <div className="space-y-6">
                 <div>
                   <Label className="mb-2 text-black">Business Validation</Label>
                   <p className="text-base text-paper-text">Stakeholders expressed willingness to pay. Recognized by German Aerospace Center & TUM.</p>
                 </div>
                 <div>
                   <Label className="mb-2 text-black">Key Capabilities</Label>
                   <p className="text-base text-paper-text">User Insight, Iterative Thinking, Product Judgment, Cross-functional Collaboration.</p>
                 </div>
               </div>
            </FadeIn>
          </div>
          <div className="col-span-4 md:col-start-7 md:col-span-6">
             <FadeIn delay={0.2}>
               <div className="bg-paper-bg p-8 border border-black/5">
                 <Label className="mb-4">Reflection</Label>
                 <p className="text-lg md:text-xl font-medium leading-relaxed">
                   The biggest takeaway isn't "what features were designed" but learning how to make complex systems predictable and trustworthy through design.
                 </p>
                 <div className="mt-6 pt-6 border-t border-black/10 flex gap-4">
                    <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center text-xs">M</div>
                    <p className="text-sm text-paper-sub self-center">Modularity is a mental model.</p>
                 </div>
               </div>
               <Timeline />
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