import React from 'react';
import { Globe, ArrowRight } from 'lucide-react';
import StarBackground from './StarBackground';

interface LandingPageProps {
  onStart: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden bg-background-dark">
      <StarBackground />

      {/* Navigation (Simplified - No Login) */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center pointer-events-none">
        <div className="flex items-center gap-3 text-white pointer-events-auto">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent-purple flex items-center justify-center shadow-[0_0_20px_rgba(13,127,242,0.4)]">
            <Globe size={20} className="text-white" />
          </div>
          <div>
            <h2 className="text-white text-xl font-bold tracking-wide uppercase leading-none">Galactic</h2>
            <span className="text-primary text-xs tracking-[0.2em] font-light">EXPLORER</span>
          </div>
        </div>
      </header>

      {/* Main Content: Solar System Visualization */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center w-full h-screen">

        <div
          onClick={onStart}
          className="relative group cursor-pointer transition-all duration-700 hover:scale-110"
        >
          {/* CTA Label */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-max text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out">
            <span className="text-accent-cyan font-mono text-sm tracking-widest block mb-2 animate-pulse">SYSTEM READY</span>
            <div className="flex items-center gap-2 text-white font-bold text-lg bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <span>ANALIZAR GALAXY CLUSTERS</span>
              <ArrowRight size={16} />
            </div>
          </div>

          {/* The Sun */}
          <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full bg-orange-400 shadow-[0_0_60px_20px_rgba(251,146,60,0.4)] z-20 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,#fef08a,transparent_50%)]"></div>
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_70%_70%,#c2410c,transparent_50%)] opacity-80"></div>
            <span className="text-white/90 font-bold text-xs md:text-sm tracking-widest z-30 mix-blend-overlay">ENTER</span>
          </div>

          {/* Orbit 1 (Mercury-ish) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] md:w-[260px] md:h-[260px] rounded-full border border-white/10 animate-[spin_4s_linear_infinite]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-gray-400 shadow-[0_0_10px_rgba(156,163,175,0.8)]"></div>
          </div>

          {/* Orbit 2 (Earth-ish) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full border border-white/10 animate-[spin_8s_linear_infinite]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 md:w-6 md:h-6 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>
          </div>

          {/* Orbit 3 (Mars-ish) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] md:w-[540px] md:h-[540px] rounded-full border border-white/5 animate-[spin_12s_linear_infinite]">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 md:w-5 md:h-5 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.6)]"></div>
          </div>

          {/* Hover Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </div>

        <p className="mt-32 md:mt-48 text-gray-500 font-mono text-xs uppercase tracking-widest animate-pulse">
          Click el sistema solar para iniciar
        </p>

      </main>
    </div>
  );
};

export default LandingPage;