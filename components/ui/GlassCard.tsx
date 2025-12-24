import React from 'react';
import { GlassCardProps } from '../../types';

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', noPadding = false }) => {
  return (
    <div className={`backdrop-blur-xl bg-surface-glass border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-xl ${noPadding ? '' : 'p-4'} ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;