import React, { useState } from 'react';
import { Rocket, Wifi, Filter, Radar, RotateCcw, X, ChevronDown, MonitorPlay, Atom, Activity } from 'lucide-react';
import GlassCard from './ui/GlassCard';
import { ClusterData, ClusterType } from '../types';

// Updated Data based on user request with FIXED IMAGES
const clusters: Record<string, ClusterData> = {
  cluster0: {
    id: "CLS-00",
    name: "Cluster 0: Gigantes Rojas",
    sector: "Halo Exterior",
    ngc: "M53",
    type: ClusterType.RED_GIANT,
    starCount: 4200,
    avgTemp: 3200, // Cold
    radVel: 85,
    density: 15.2,
    image: "/images/cluster0.png", // Generated Red Giant Image
    description: "Estrellas enormes y frías en una etapa avanzada de evolución estelar. Han agotado el hidrógeno en sus núcleos y ahora fusionan helio. Su baja temperatura superficial les da un color rojizo característico.",
    stable: true,
    metallicity: -0.060,
    gravity: 0.882
  },
  cluster1: {
    id: "CLS-01",
    name: "Cluster 1: Secuencia Principal",
    sector: "Brazo de Orión",
    ngc: "Sol-Vicinity",
    type: ClusterType.MAIN_SEQUENCE,
    starCount: 15000,
    avgTemp: 5778, // Sun-like
    radVel: 20,
    density: 5.5,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/800px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg", // The Sun (SDO)
    description: "Estrellas tipo Sol (Enanas Amarillas) en equilibrio hidrostático. Fusionan hidrógeno en helio en sus núcleos. Representan la mayoría de las estrellas en el disco galáctico y son las candidatas principales para albergar vida.",
    stable: true,
    metallicity: -0.355,
    gravity: 4.111
  },
  cluster2: {
    id: "CLS-02",
    name: "Cluster 2: Alta Velocidad",
    sector: "Halo Galáctico",
    ngc: "HV-Stream",
    type: ClusterType.HIGH_VELOCITY,
    starCount: 120,
    avgTemp: 4500,
    radVel: 450, // Extremely fast!
    density: 1.2,
    image: "/images/cluster2.png", // Generated High Velocity Image
    description: "Conocidas como las 'velocistas' del Halo. Poseen un movimiento propio (PM) extremadamente alto (51 mas/yr). Suelen ser estrellas expulsadas de sistemas binarios o por interacciones con el agujero negro central.",
    stable: false,
    metallicity: -0.240,
    gravity: 4.584
  },
  cluster3: {
    id: "CLS-03",
    name: "Cluster 3: Enanas Blancas",
    sector: "Remanentes Locales",
    ngc: "Sirius-B Group",
    type: ClusterType.WHITE_DWARF,
    starCount: 850,
    avgTemp: 15000, // Very hot
    radVel: 12,
    density: 1000000, // Very dense
    image: "/images/cluster3.png", // Generated White Dwarf Image
    description: "Remanentes estelares muy calientes (15,000K) pero tenues debido a su pequeño tamaño (comparable a la Tierra). Materia degenerada extremadamente densa. El destino final de estrellas de masa media.",
    stable: true,
    metallicity: -0.883,
    gravity: 4.144
  },
  cluster4: {
    id: "CLS-04",
    name: "Cluster 4: Azules / Jóvenes",
    sector: "Cúmulo Abierto",
    ngc: "Pleiades-M45",
    type: ClusterType.BLUE_YOUNG,
    starCount: 500,
    avgTemp: 25000, // Extremely hot
    radVel: -15,
    density: 8.8,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Pleiades_large.jpg/800px-Pleiades_large.jpg", // The Pleiades
    description: "Estrellas masivas de tipo espectral A y B. Son muy jóvenes, calientes y luminosas. Su vida es corta en términos astronómicos. Se encuentran típicamente en regiones de formación estelar activa.",
    stable: true,
    metallicity: -0.594,
    gravity: 3.873
  },
  cluster5: {
    id: "CLS-05",
    name: "Cluster 5: Subgigantes",
    sector: "Zona de Transición",
    ngc: "Procyon-Region",
    type: ClusterType.SUB_GIANT,
    starCount: 2100,
    avgTemp: 5200,
    radVel: 35,
    density: 4.1,
    image: "/images/cluster5.png", // Generated Subgiant Image
    description: "Estrellas en transición que han cesado la fusión de hidrógeno en su núcleo y están empezando a evolucionar hacia gigantes rojas. Son más brillantes que las enanas de la secuencia principal de la misma temperatura.",
    stable: true,
    metallicity: -0.172,
    gravity: 2.818
  }
};

interface ExplorerPageProps {
  onExit: () => void;
}

const ExplorerPage: React.FC<ExplorerPageProps> = ({ onExit }) => {
  const [selectedClusterKey, setSelectedClusterKey] = useState<string>("cluster0");
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'astro'>('overview');

  const currentCluster = clusters[selectedClusterKey];

  const handleClusterChange = (key: string) => {
    setLoading(true);
    setSelectedClusterKey(key);
    // Simulate data fetch
    setTimeout(() => setLoading(false), 800);
  };

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-background-dark font-display text-white">

      {/* 1. Background / 3D Visualization Area */}
      {/* Dynamic background based on cluster type could go here, keeping static space for now */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center transition-opacity duration-1000"
        style={{
          backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDVCh5x88CFyDSMlMAGtvGoMcPDeqcM_YKcm3lJUx7H2C7x-qMWhrzzT1jnAr7Z0BIMivkP8AnRasAVVqfrCV2diJy3szQv5abZGwSD5Vt9aB1iX67cIVNwu6ofQttlIV1AJJR5ZUN5JdyKU2hGDkqznciyUhPkGXJCMHkOHpCwt03cezZy42q364t5OZzpkFA0PZqlGGz6nWf-sjwuvbs07asUug87ZAVLOlyWrErSPwgGabiIgqMQNUcmFO2jHX3wzkVCoZ63IoT6")',
        }}
      >
        <div className="absolute inset-0 bg-[#05070a]/60 backdrop-blur-[1px]"></div>

        {/* Simulated 3D Points - Abstract decoration */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-primary rounded-full shadow-[0_0_15px_3px_#0d7ff2] animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_20px_5px_rgba(255,255,255,0.8)] animate-pulse"></div>
      </div>

      {/* 2. Top Navigation Bar - Simple, No Login */}
      <nav className="absolute top-0 w-full z-50 border-b border-white/10 bg-[#05070a]/80 backdrop-blur-md">
        <div className="px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4 cursor-pointer" onClick={onExit}>
            <div className="flex items-center justify-center w-8 h-8 rounded bg-primary/20 text-primary border border-primary/30 shadow-[0_0_10px_rgba(13,127,242,0.2)]">
              <Rocket size={18} />
            </div>
            <div>
              <h1 className="text-white text-lg font-bold leading-none tracking-widest uppercase">Gaia <span className="text-primary">Analyzer</span></h1>
              <span className="text-xs text-gray-400 font-mono tracking-wider">PUBLIC ACCESS // READ ONLY</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6 text-sm font-medium">
              <span className="text-primary border-b-2 border-primary pb-0.5 shadow-[0_4px_12px_rgba(13,127,242,0.5)] cursor-default">Cluster Analysis</span>
            </div>
          </div>
        </div>
      </nav>

      {/* 3. Main Interface Layout */}
      <main className="relative z-10 w-full min-h-screen pt-20 pb-6 px-6 grid grid-cols-1 lg:grid-cols-12 gap-6 pointer-events-none">

        {/* LEFT COLUMN: Controls */}
        <div className="lg:col-span-3 flex flex-col gap-4 pointer-events-auto self-start mt-4">

          {/* Target Selector */}
          <GlassCard>
            <label className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <Radar size={16} />
              Seleccionar Cluster
            </label>
            <div className="relative">
              <select
                value={selectedClusterKey}
                onChange={(e) => handleClusterChange(e.target.value)}
                className="w-full h-12 bg-[#1b2127]/80 border border-white/10 rounded-lg text-white px-4 appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-mono text-sm cursor-pointer hover:bg-[#1b2127] truncate pr-8"
              >
                {Object.entries(clusters).map(([key, data]) => (
                  <option key={key} value={key}>{data.name}</option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-primary">
                <ChevronDown size={18} />
              </div>
            </div>
          </GlassCard>

          {/* Filters (Visual only for now) */}
          <GlassCard>
            <div className="flex justify-between items-center mb-3">
              <label className="flex items-center gap-2 text-gray-300 text-xs font-bold uppercase tracking-wider">
                <Filter size={16} />
                Filtros Espectrales
              </label>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "M (Roja)", color: "bg-red-500", active: currentCluster.type === ClusterType.RED_GIANT },
                { label: "G (Amarilla)", color: "bg-yellow-400", active: currentCluster.type === ClusterType.MAIN_SEQUENCE },
                { label: "A/B (Azul)", color: "bg-blue-400", active: currentCluster.type === ClusterType.BLUE_YOUNG },
                { label: "D (Blanca)", color: "bg-white", active: currentCluster.type === ClusterType.WHITE_DWARF },
                { label: "SG (Transición)", color: "bg-orange-300", active: currentCluster.type === ClusterType.SUB_GIANT }
              ].map((tag) => (
                <button key={tag.label} className={`flex items-center gap-2 h-8 px-3 rounded-md border text-xs font-medium transition-all ${tag.active ? 'bg-primary/20 border-primary/40 text-white hover:bg-primary/30' : 'bg-[#283039]/50 border-white/5 text-gray-300 opacity-50'}`}>
                  <div className={`w-2 h-2 rounded-full ${tag.color} ${tag.active ? 'shadow-[0_0_5px_currentColor]' : ''}`}></div>
                  <span>{tag.label}</span>
                </button>
              ))}
            </div>
          </GlassCard>

          {/* System Status */}
          <GlassCard className="flex items-center gap-4">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <path className="text-white/10" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                <path className="text-green-400" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="92, 100" strokeLinecap="round" strokeWidth="3" />
              </svg>
              <Wifi size={14} className="absolute text-green-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-400 uppercase tracking-wider">Estado</span>
              <span className="text-sm font-bold text-white">Analizando</span>
            </div>
          </GlassCard>
        </div>

        {/* SPACER */}
        <div className="hidden lg:block lg:col-span-5 xl:col-span-6"></div>

        {/* RIGHT COLUMN: HUD Panel */}
        <div className="lg:col-span-4 xl:col-span-3 pointer-events-auto h-full flex flex-col pb-4">
          <div className={`bg-[#111418]/90 backdrop-blur-2xl border border-white/10 border-t-4 border-t-primary rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col h-full overflow-hidden transition-all duration-500 ${loading ? 'opacity-90 scale-[0.98]' : 'opacity-100 scale-100'}`}>

            {/* Panel Header */}
            <div className="p-5 border-b border-white/10 flex justify-between items-start bg-gradient-to-b from-white/5 to-transparent">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#0d7ff2]"></span>
                  <span className="text-[10px] font-mono text-primary uppercase tracking-widest">Información</span>
                </div>
                <h2 className="text-xl font-bold text-white leading-tight tracking-tight shadow-black drop-shadow-md">{currentCluster.name}</h2>
                <p className="text-sm text-gray-400 font-mono mt-1">{currentCluster.sector} // {currentCluster.ngc}</p>
              </div>
              <button onClick={onExit} className="text-gray-400 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-5 space-y-6">

              {/* TABS */}
              <div className="flex gap-2 p-1 bg-white/5 rounded-lg mb-4">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all ${activeTab === 'overview' ? 'bg-primary text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                >
                  Resumen
                </button>
                <button
                  onClick={() => setActiveTab('astro')}
                  className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all ${activeTab === 'astro' ? 'bg-primary text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                >
                  Astrofísica
                </button>
              </div>

              {/* TAB CONTENT: OVERVIEW */}
              {activeTab === 'overview' && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                  {/* Main Image */}
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-white/10 shadow-lg group">
                    {loading && (
                      <div className="absolute inset-0 z-20 bg-black/80 flex items-center justify-center">
                        <RotateCcw className="animate-spin text-primary" size={32} />
                      </div>
                    )}
                    <img
                      src={currentCluster.image}
                      alt={currentCluster.name}
                      className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${loading ? 'blur-sm' : ''}`}
                    />
                    <div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-black/80 to-transparent">
                      <span className="text-[10px] text-white/80 font-mono border border-white/20 px-1.5 py-0.5 rounded bg-black/40">VISUALIZACIÓN</span>
                    </div>
                  </div>

                  {/* Analysis Text */}
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-primary pl-3 mb-2">Descripción</h3>
                    <p className="text-sm text-gray-300 leading-relaxed font-light">
                      {currentCluster.description}
                    </p>
                  </div>

                  {/* Gauges */}
                  <div className="grid grid-cols-2 gap-3">
                    {/* Temp Gauge */}
                    <div className="bg-white/5 rounded-lg p-3 flex flex-col items-center justify-center border border-white/5 hover:bg-white/10 transition-colors">
                      <div className="relative w-16 h-16 mb-2">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                          <path className="text-gray-700" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                          {/* Temp normalized approx 30000 max */}
                          <path className="text-orange-500 transition-all duration-1000 ease-out" strokeDasharray={`${Math.min((currentCluster.avgTemp / 30000) * 100, 100)}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center flex-col">
                          <span className="text-[10px] text-gray-400">AVG</span>
                          <span className="text-xs font-bold text-white">TEMP</span>
                        </div>
                      </div>
                      <span className="text-lg font-bold text-white font-mono">{currentCluster.avgTemp.toLocaleString()}<span className="text-xs text-gray-400 ml-1">K</span></span>
                    </div>

                    {/* Velocity Gauge */}
                    <div className="bg-white/5 rounded-lg p-3 flex flex-col items-center justify-center border border-white/5 hover:bg-white/10 transition-colors">
                      <div className="relative w-16 h-16 mb-2">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                          <path className="text-gray-700" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                          {/* Vel normalized approx 500 max */}
                          <path className="text-primary transition-all duration-1000 ease-out" strokeDasharray={`${Math.min((Math.abs(currentCluster.radVel) / 500) * 100, 100)}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center flex-col">
                          <span className="text-[10px] text-gray-400">RAD</span>
                          <span className="text-xs font-bold text-white">VEL</span>
                        </div>
                      </div>
                      <span className="text-lg font-bold text-white font-mono">{currentCluster.radVel}<span className="text-xs text-gray-400 ml-1">km/s</span></span>
                    </div>
                  </div>

                  {/* Bar Chart */}
                  <div className="bg-white/5 rounded-lg p-4 border border-white/5">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-xs text-gray-400 font-bold uppercase">Densidad Relativa</span>
                      <span className="text-xl font-bold text-primary font-mono">{currentCluster.density}</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-primary h-1.5 rounded-full transition-all duration-1000 ease-out" style={{ width: `${Math.min(currentCluster.density * 5, 100)}%` }}></div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB CONTENT: ASTROPHYSICS */}
              {activeTab === 'astro' && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                  {/* Metallicity Card */}
                  <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 rounded-xl p-6 relative overflow-hidden group hover:border-white/20 transition-all">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <Atom size={64} />
                    </div>
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="flex items-center gap-2 mb-2">
                        <Atom className="text-accent-purple" size={20} />
                        <h3 className="text-sm font-bold text-gray-300 uppercase tracking-widest">Metalicidad [Fe/H]</h3>
                      </div>
                      <div className="text-5xl font-black text-white tracking-tighter mb-2 font-mono">
                        {currentCluster.metallicity}
                      </div>
                      <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden mb-3 max-w-[150px]">
                        {/* Map range -2.5 to 0.5. Center at -1.0 roughly? Or just 0. */}
                        <div className={`h-full ${currentCluster.metallicity < 0 ? 'bg-red-400' : 'bg-green-400'}`} style={{ width: '100%' }}></div>
                      </div>
                      <p className="text-xs text-gray-400 leading-snug max-w-[200px]">
                        {currentCluster.metallicity < -0.5
                          ? "Pobre en metales. Indica una población estelar antigua."
                          : "Rica en metales. Indica estrellas más jóvenes como el Sol."}
                      </p>
                    </div>
                  </div>

                  {/* Gravity Card */}
                  <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-white/10 rounded-xl p-6 relative overflow-hidden group hover:border-white/20 transition-all">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <Activity size={64} />
                    </div>
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="flex items-center gap-2 mb-2">
                        <Activity className="text-accent-cyan" size={20} />
                        <h3 className="text-sm font-bold text-gray-300 uppercase tracking-widest">Gravedad (log g)</h3>
                      </div>
                      <div className="text-5xl font-black text-white tracking-tighter mb-2 font-mono">
                        {currentCluster.gravity}
                      </div>
                      <p className="text-xs text-gray-400 leading-snug max-w-[200px]">
                        Gravedad superficial logarítmica (cgs). Valores altos indican estrellas compactas (enanas), bajos indican gigantes.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                    <h4 className="text-xs font-bold text-gray-400 uppercase mb-3">Interpretación Astrofísica</h4>
                    <ul className="space-y-2 text-xs text-gray-300">
                      <li className="flex justify-between border-b border-white/5 pb-2">
                        <span>Clase de Luminosidad:</span>
                        <span className="font-mono text-primary">
                          {currentCluster.type === "Enanas Blancas" ? "D (Degenerada)" :
                            currentCluster.type === "Gigantes Rojas" ? "III (Gigante)" :
                              "V (Secuencia P.)"}
                        </span>
                      </li>
                      <li className="flex justify-between border-b border-white/5 pb-2">
                        <span>Edad Estimada:</span>
                        <span className="font-mono text-primary">
                          {currentCluster.metallicity < -0.5 ? "> 10 Gyr" : "~ 4.6 Gyr"}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}


            </div>

            {/* Footer ID */}
            <div className="p-3 bg-black/40 border-t border-white/5 flex justify-between items-center text-[10px] text-gray-500 font-mono">
              <span>ID: {currentCluster.id}</span>
              <span className="flex items-center gap-1">
                <span className={`block w-1.5 h-1.5 rounded-full ${currentCluster.stable ? 'bg-green-500' : 'bg-red-500'}`}></span>
                {currentCluster.stable ? 'ESTABLE' : 'INESTABLE'}
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* 4. CRT/Scanline Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
    </div>
  );
};

export default ExplorerPage;