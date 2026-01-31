import React from 'react';
import { motion } from 'framer-motion';

export const RadialBurst: React.FC<{ className?: string; color?: string }> = ({ className = '', color = 'stroke-white' }) => {
  return (
    <div className={`relative w-full aspect-square flex items-center justify-center overflow-hidden ${className}`}>
      <motion.svg 
        viewBox="0 0 400 400" 
        className={`w-full h-full opacity-60 ${color}`}
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        {Array.from({ length: 24 }).map((_, i) => (
          <line
            key={i}
            x1="200"
            y1="200"
            x2={200 + 300 * Math.cos((i * 15 * Math.PI) / 180)}
            y2={200 + 300 * Math.sin((i * 15 * Math.PI) / 180)}
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        ))}
        <circle cx="200" cy="200" r="40" fill="currentColor" className="text-black" />
      </motion.svg>
    </div>
  );
};

export const PlaceholderImage: React.FC<{ 
  label: string; 
  aspect?: string; 
  dark?: boolean;
}> = ({ label, aspect = 'aspect-video', dark = false }) => (
  <div className={`w-full ${aspect} relative group overflow-hidden border ${dark ? 'border-white/20 bg-white/5' : 'border-black/10 bg-black/5'}`}>
    {/* Diagonal Lines Pattern */}
    <div className="absolute inset-0 opacity-[0.05]" 
         style={{ backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, ${dark ? '#FFF' : '#000'} 10px, ${dark ? '#FFF' : '#000'} 11px)` }} 
    />
    
    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
      <span className={`text-xs uppercase tracking-widest mb-2 ${dark ? 'text-white/50' : 'text-black/50'}`}>
        Figure
      </span>
      <p className={`text-sm md:text-base font-medium ${dark ? 'text-white' : 'text-black'}`}>
        [{label}]
      </p>
    </div>

    {/* Crosshairs corners */}
    <div className={`absolute top-0 left-0 w-3 h-3 border-t border-l ${dark ? 'border-white' : 'border-black'}`} />
    <div className={`absolute top-0 right-0 w-3 h-3 border-t border-r ${dark ? 'border-white' : 'border-black'}`} />
    <div className={`absolute bottom-0 left-0 w-3 h-3 border-b border-l ${dark ? 'border-white' : 'border-black'}`} />
    <div className={`absolute bottom-0 right-0 w-3 h-3 border-b border-r ${dark ? 'border-white' : 'border-black'}`} />
  </div>
);

export const LaptopMockup: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative mx-auto max-w-4xl">
    <div className="relative bg-[#1a1a1a] rounded-t-xl p-2 md:p-4 shadow-2xl border border-gray-800">
      <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-green-500 rounded-full -translate-x-1/2 -mt-4 opacity-50"></div>
      <div className="bg-black rounded overflow-hidden aspect-[16/10] relative">
        {children}
      </div>
    </div>
    <div className="bg-[#121212] h-4 md:h-6 rounded-b-lg w-full relative">
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 md:w-24 h-1 md:h-1.5 bg-gray-700 rounded-b-md"></div>
    </div>
  </div>
);

export const WorkflowDiagram: React.FC = () => (
  <div className="w-full aspect-video relative bg-[#F9F9F7] rounded-sm border border-black/5 overflow-hidden text-paper-text font-sans select-none">
    <div className="absolute inset-0 opacity-30" 
         style={{ backgroundImage: 'radial-gradient(#000000 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}>
    </div>
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 800 450">
      <defs>
        <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#9ca3af" />
        </marker>
      </defs>
      <g stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="6 4" fill="none" markerEnd="url(#arrowhead)" opacity="0.6">
        <path d="M 150 100 Q 250 120 300 180" />
        <path d="M 160 110 Q 180 200 240 240" />
        <path d="M 650 100 Q 550 120 480 180" />
        <path d="M 640 130 Q 580 220 520 240" />
        <path d="M 180 350 Q 280 320 340 280" />
        <path d="M 200 320 Q 250 250 320 220" />
        <path d="M 620 350 Q 520 380 460 300" />
        <path d="M 600 320 Q 500 250 480 280" />
        <path d="M 300 120 C 400 150, 500 80, 600 120" />
        <path d="M 280 340 C 350 300, 450 420, 550 350" />
        <path d="M 250 200 Q 400 100 550 200" strokeDasharray="3 3" opacity="0.4" />
      </g>
    </svg>
    <div className="absolute top-[12%] left-[10%] flex flex-col items-center z-10">
      <div className="w-12 h-12 bg-white rounded-full border border-black/10 flex items-center justify-center text-3xl shadow-sm">👨‍💻</div>
      <span className="text-[10px] mt-2 uppercase tracking-widest text-paper-sub">Eng.</span>
    </div>
    <div className="absolute top-[18%] left-[25%] z-10">
       <div className="w-10 h-10 bg-white rounded flex items-center justify-center border border-orange-200 shadow-sm text-xs font-bold text-orange-600">Mat</div>
    </div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
       <div className="bg-white border border-black px-4 py-3 rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)] max-w-[180px] text-center">
          <p className="text-xs font-medium leading-tight text-black">"Wait, is this the result from v2 or v3?"</p>
       </div>
       <div className="w-3 h-3 bg-white border-b border-r border-black absolute -bottom-1.5 left-1/2 -translate-x-1/2 rotate-45"></div>
    </div>
  </div>
);

export const WorkshopWhiteboard: React.FC = () => (
  <div className="w-full relative bg-white border border-black/5 overflow-hidden">
    <img 
      src="workshop.jpg" 
      crossOrigin="anonymous"
      alt="Workshop Whiteboard showing system mapping with physical cards" 
      className="w-full h-auto block object-contain"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        if (!target.src.includes('workshop.jpg')) {
           target.src = 'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&q=80&w=2069';
        }
      }}
      loading="lazy"
    />
  </div>
);

export const SystemArchDiagram: React.FC = () => {
  const CARD_W = 160;
  const CARD_H = 80;
  const CENTER_X = 600;
  
  return (
    <div className="w-full bg-paper-dark border border-white/10 overflow-hidden shadow-sm aspect-[1.5/1]">
      <svg viewBox="0 0 1200 800" className="w-full h-full font-sans fill-white select-none">
        <defs>
          <marker id="arrowhead-white" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="white" />
          </marker>
          <pattern id="grid-white" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" opacity="0.05"/>
          </pattern>
        </defs>

        <rect width="1200" height="800" fill="url(#grid-white)" />

        {/* --- TIER LABELS (STAY AT ORIGINAL POS) --- */}
        <g className="opacity-40">
           <text x="50" y="140" className="text-[10px] uppercase tracking-widest fill-white font-medium">01. Source Modules</text>
           <text x="50" y="420" className="text-[10px] uppercase tracking-widest fill-white font-medium">02. Data Processing</text>
           <text x="50" y="700" className="text-[10px] uppercase tracking-widest fill-white font-medium">03. Output Modules</text>
        </g>

        {/* --- CONNECTIONS (ORTHOGONAL & CENTERED) --- */}
        <g stroke="white" fill="none" markerEnd="url(#arrowhead-white)">
          {/* Modelica -> Table (Centered Flow) */}
          <path d={`M ${CENTER_X - 220} 180 L ${CENTER_X - 220} 280 L ${CENTER_X - 40} 280 L ${CENTER_X - 40} 380`} strokeWidth="1.5" strokeOpacity="0.4" />
          <text x={CENTER_X - 180} y="270" className="text-[11px] fill-white/60 italic font-light">time-series data</text>

          {/* Modelica -> Visualization */}
          <path d={`M ${CENTER_X - 300} 180 L ${CENTER_X - 300} 640 L ${CENTER_X + 180} 640 L ${CENTER_X + 180} 660`} strokeWidth="1.5" strokeOpacity="0.4" />
          <text x={CENTER_X - 290} y="440" className="text-[11px] fill-white/60 italic font-light rotate-90" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>model state</text>

          {/* Python -> Table */}
          <path d={`M ${CENTER_X + 40} 180 L ${CENTER_X + 40} 380`} strokeWidth="1.5" strokeOpacity="0.4" />
          <text x={CENTER_X + 50} y="300" className="text-[11px] fill-white/60 italic font-light">structured data</text>

          {/* Python -> Plot */}
          <path d={`M ${CENTER_X + 120} 180 L ${CENTER_X + 120} 540 L ${CENTER_X - 80} 540 L ${CENTER_X - 80} 660`} strokeWidth="1.5" strokeOpacity="0.4" />
          <text x={CENTER_X + 20} y="530" className="text-[11px] fill-white/60 italic font-light">arrays/formulas</text>

          {/* Table -> Plot */}
          <path d={`M ${CENTER_X - 40} 460 L ${CENTER_X - 40} 540 L ${CENTER_X - 80} 540 L ${CENTER_X - 80} 660`} strokeWidth="1.5" strokeOpacity="0.4" />
          <text x={CENTER_X - 35} y="500" className="text-[11px] fill-white/40 italic font-light rotate-90" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>data source</text>

          {/* Table -> Python (Optional Ref) */}
          <path d={`M ${CENTER_X + 80} 380 L ${CENTER_X + 80} 180`} strokeWidth="1" strokeDasharray="6 4" strokeOpacity="0.3" />
          <text x={CENTER_X + 85} y="240" className="text-[11px] fill-white/30 italic font-light">optional input</text>
        </g>

        {/* --- CARDS (CENTERED POSITIONS) --- */}
        
        {/* Tier 1: Sources */}
        <g transform={`translate(${CENTER_X - 300}, 100)`}>
          <rect width={CARD_W} height={CARD_H} fill="white" fillOpacity="0.03" stroke="white" strokeWidth="2" />
          <rect x="5" y="5" width={CARD_W-10} height={CARD_H-10} fill="white" fillOpacity="0.05" />
          <text x={CARD_W/2} y="35" textAnchor="middle" className="text-xl font-bold fill-white">{"</>"}</text>
          <text x={CARD_W/2} y="60" textAnchor="middle" className="text-[13px] font-medium tracking-wide fill-white">Modelica</text>
          <circle cx="0" cy="0" r="2" fill="white" className="animate-pulse" />
        </g>

        <g transform={`translate(${CENTER_X - 40}, 100)`}>
          <rect width={CARD_W} height={CARD_H} fill="white" fillOpacity="0.03" stroke="white" strokeWidth="2" />
          <rect x="5" y="5" width={CARD_W-10} height={CARD_H-10} fill="white" fillOpacity="0.05" />
          <text x={CARD_W/2} y="35" textAnchor="middle" className="text-xl font-bold fill-white">{"</>"}</text>
          <text x={CARD_W/2} y="60" textAnchor="middle" className="text-[13px] font-medium tracking-wide fill-white">Python</text>
          <circle cx="0" cy="0" r="2" fill="white" className="animate-pulse" />
        </g>

        <g transform={`translate(${CENTER_X + 220}, 100)`}>
          <rect width={CARD_W} height={CARD_H} fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.2" />
          <text x={CARD_W/2} y="35" textAnchor="middle" className="text-xl font-bold fill-white/40">T</text>
          <text x={CARD_W/2} y="60" textAnchor="middle" className="text-[13px] font-medium tracking-wide fill-white/40">Text</text>
          <text x={CARD_W/2} y="100" textAnchor="middle" className="text-[9px] fill-white/20 uppercase tracking-[0.2em]">Isolated: Doc only</text>
        </g>

        {/* Tier 2: Processing */}
        <g transform={`translate(${CENTER_X - 40}, 380)`}>
          <rect width={CARD_W} height={CARD_H} fill="white" fillOpacity="0.08" stroke="white" strokeWidth="2" />
          <g transform="translate(70, 15)" opacity="0.6">
            <rect width="20" height="20" fill="none" stroke="white" strokeWidth="1" />
            <path d="M 0 10 L 20 10 M 10 0 L 10 20" stroke="white" strokeWidth="1" />
          </g>
          <text x={CARD_W/2} y="60" textAnchor="middle" className="text-[13px] font-medium tracking-wide fill-white">Table</text>
          <text x={CARD_W/2} y="105" textAnchor="middle" className="text-[9px] fill-white/40 uppercase tracking-[0.2em]">Editor + Result States</text>
        </g>

        {/* Tier 3: Outputs */}
        <g transform={`translate(${CENTER_X - 160}, 660)`}>
          <rect width={CARD_W} height={CARD_H} fill="white" fillOpacity="0.03" stroke="white" strokeWidth="2" />
          <g transform="translate(70, 15)" opacity="0.6">
            <rect x="0" y="10" width="4" height="10" fill="white" />
            <rect x="6" y="4" width="4" height="16" fill="white" />
            <rect x="12" y="8" width="4" height="12" fill="white" />
          </g>
          <text x={CARD_W/2} y="60" textAnchor="middle" className="text-[13px] font-medium tracking-wide fill-white">Plot</text>
        </g>

        <g transform={`translate(${CENTER_X + 100}, 660)`}>
          <rect width={CARD_W} height={CARD_H} fill="white" fillOpacity="0.03" stroke="white" strokeWidth="2" />
          <g transform="translate(70, 15)" opacity="0.6">
            <path d="M 0 5 L 10 0 L 20 5 L 20 15 L 10 20 L 0 15 Z" fill="none" stroke="white" strokeWidth="1.5" />
            <path d="M 0 5 L 10 10 L 20 5 M 10 10 L 10 20" stroke="white" strokeWidth="1" />
          </g>
          <text x={CARD_W/2} y="60" textAnchor="middle" className="text-[13px] font-medium tracking-wide fill-white">Visualization</text>
          <text x={CARD_W/2} y="105" textAnchor="middle" className="text-[9px] fill-white/40 uppercase tracking-[0.2em]">Requires 3D Model Data</text>
        </g>
      </svg>
    </div>
  );
};

export const Timeline: React.FC = () => {
  const milestones = ["Workshop", "System Design", "AI Design", "Launch", "Recognition"];
  return (
    <div className="w-full py-12 border-t border-black/10 mt-8">
      <div className="flex justify-between items-center relative">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-black/20 -z-10"></div>
        {milestones.map((m, i) => (
          <div key={m} className="flex flex-col items-center bg-paper-bg px-2">
            <div className="w-3 h-3 rounded-full bg-black border-4 border-paper-bg mb-4"></div>
            <span className="text-[10px] uppercase tracking-wider">{m}</span>
          </div>
        ))}
      </div>
    </div>
  );
}