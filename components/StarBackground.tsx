import React from 'react';

const StarBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 bg-background-dark pointer-events-none overflow-hidden text-neutral-900">

      {/* Deep Radial Void */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a103c_0%,_#000000_100%)] opacity-80"></div>

      {/* Nebula Clouds */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-900/20 blur-[100px] rounded-full mix-blend-screen animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      {/* Star Layers using CSS Box Shadows for performance */}
      <div className="absolute inset-0 stars-small opacity-80"></div>
      <div className="absolute inset-0 stars-small opacity-50 scale-150 origin-center animation-delay-[10s]"></div>

      {/* Twinkling Individual Stars */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white shadow-[0_0_4px_rgba(255,255,255,0.8)] star-twinkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 3 + 2}s`
          }}
        ></div>
      ))}

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(transparent_50%,_black_100%)]"></div>
    </div>
  );
};

export default StarBackground;