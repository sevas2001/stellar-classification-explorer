import React, { useMemo } from 'react';
import { Globe, ArrowRight, Sparkles } from 'lucide-react';
import StarBackground from './StarBackground';

interface LandingPageProps {
  onStart: () => void;
}

// Helper to generate star particles for a specific ring layer
const generateStars = (count: number, minRadius: number, maxRadius: number, opacityBase: number) => {
  return Array.from({ length: count }).map((_, i) => {
    const angle = Math.random() * 360;
    const radius = minRadius + Math.random() * (maxRadius - minRadius);
    const x = Math.cos(angle * (Math.PI / 180)) * radius;
    const y = Math.sin(angle * (Math.PI / 180)) * radius;
    const size = Math.random() * 2 + 0.5;
    const delay = Math.random() * 5;

    return { id: i, x, y, size, delay, opacity: Math.random() * 0.5 + opacityBase };
  });
};

const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  // Generate stable star maps
  const innerStars = useMemo(() => generateStars(80, 50, 150, 0.7), []);
  const midStars = useMemo(() => generateStars(120, 160, 280, 0.5), []);
  const outerStars = useMemo(() => generateStars(100, 290, 450, 0.3), []);

  return (
    <div className="relative h-screen flex flex-col overflow-hidden bg-background-dark font-display selection:bg-primary/30">
      <StarBackground />

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 px-8 py-8 flex justify-between items-center pointer-events-none fade-in">
        <div className="flex items-center gap-4 text-white pointer-events-auto group cursor-default">
          <div className="relative w-12 h-12 flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-md group-hover:bg-primary/40 transition-all duration-500"></div>
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-[#0b1026] to-[#1e2a4a] border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
              <Globe size={20} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-white text-2xl font-bold tracking-tight uppercase leading-none font-display">Gaia <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Archive</span></h2>
            <span className="text-gray-500 text-[10px] tracking-[0.3em] font-medium mt-1 ml-0.5">STELLAR CLASSIFICATION</span>
          </div>
        </div>
      </header>

      {/* Main Content: 3D Galaxy Visualization */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center w-full h-screen perspective-1000">

        {/* Galaxy Container */}
        <div
          onClick={onStart}
          className="relative group cursor-pointer transition-all duration-1000 ease-out galaxy-container hover:scale-105"
        >
          {/* Central Black Hole / Core */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full blur-[20px] z-20 animate-pulse mix-blend-screen overflow-visible">
            {/* Core Glow */}
            <div className="absolute inset-[-20px] bg-blue-500/20 rounded-full blur-xl"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full z-30 shadow-[0_0_50px_20px_rgba(255,255,255,0.8)]"></div>

          {/* LAYER 1: Inner Fast Ring - Stars */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none">
            <div className="w-full h-full rounded-full" style={{ animation: 'galaxy-rotate-fast 30s linear infinite' }}>
              {innerStars.map(star => (
                <div key={`in-${star.id}`} className="absolute rounded-full bg-blue-100 shadow-[0_0_5px_rgba(255,255,255,0.8)]"
                  style={{
                    top: `calc(50% + ${star.y}px)`,
                    left: `calc(50% + ${star.x}px)`,
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                    opacity: star.opacity,
                    animation: `twinkle 3s ease-in-out infinite alternate ${star.delay}s`
                  }} />
              ))}
            </div>
          </div>

          {/* LAYER 2: Mid Normal Ring - Mix of Stars and Dust */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none">
            <div className="w-full h-full rounded-full galaxy-spiral border border-white/5 bg-[radial-gradient(transparent_30%,rgba(60,20,100,0.1)_60%)] shadow-[0_0_100px_rgba(100,50,255,0.1)]">
              {/* Dust Arms */}
              <div className="absolute inset-0 rounded-full animate-spin-slow opacity-60 mix-blend-screen"
                style={{ background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 40deg, rgba(100,100,255,0.2) 60deg, transparent 90deg, transparent 140deg, rgba(200,50,255,0.2) 200deg, transparent 240deg)' }}>
              </div>
              {/* Stars integrated into main spiral */}
              {midStars.map(star => (
                <div key={`mid-${star.id}`} className="absolute rounded-full bg-purple-100"
                  style={{
                    top: `calc(50% + ${star.y}px)`,
                    left: `calc(50% + ${star.x}px)`,
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                    opacity: star.opacity,
                  }} />
              ))}
            </div>
          </div>

          {/* LAYER 3: Outer Slow Ring - Halo Stars */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] pointer-events-none">
            <div className="w-full h-full rounded-full" style={{ animation: 'galaxy-rotate-slow 90s linear infinite' }}>
              {outerStars.map(star => (
                <div key={`out-${star.id}`} className="absolute rounded-full bg-white"
                  style={{
                    top: `calc(50% + ${star.y}px)`,
                    left: `calc(50% + ${star.x}px)`,
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                    opacity: star.opacity * 0.8,
                  }} />
              ))}
            </div>
          </div>

          {/* Floating UI Elements */}
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-y-4 group-hover:translate-y-0 z-40">
            <span className="text-accent-cyan font-mono text-xs tracking-[0.2em] mb-3 animate-pulse flex items-center gap-2">
              <Sparkles size={12} />
              SYSTEM OVERRIDE DETECTED
              <Sparkles size={12} />
            </span>
            <button className="relative px-8 py-3 bg-white/5 backdrop-blur-xl border border-white/20 rounded-full text-white font-bold tracking-widest hover:bg-white/10 hover:border-white/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 flex items-center gap-3 overflow-hidden">
              <span className="relative z-10">EXPLORAR DATOS</span>
              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            </button>
          </div>

        </div>

        {/* Footer Text */}
        <div className="absolute bottom-12 text-center pointer-events-none">
          <p className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.4em] animate-pulse">
            Iniciando Secuencia de Visualización
          </p>
        </div>

      </main>
    </div>
  );
};

export default LandingPage;