import React from 'react';

const StarBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 bg-background-dark pointer-events-none">
      {/* Deep Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0d7ff2]/10 via-[#050510] to-[#050510]"></div>
      
      {/* Stars Overlay */}
      <div className="absolute inset-0 stars-bg opacity-40"></div>
      
      {/* Bottom Accent Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-primary/5 to-transparent"></div>
    </div>
  );
};

export default StarBackground;