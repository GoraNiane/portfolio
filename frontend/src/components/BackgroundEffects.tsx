import React from 'react';

export const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Grille géométrique subtile */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />

      {/* Orbes lumineux légers en dégradé d'ambiance bleu & cyan */}
      <div 
        className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full bg-blue-500/06 blur-[130px] animate-pulse-subtle" 
      />
      <div 
        className="absolute top-1/3 -right-40 w-[550px] h-[550px] rounded-full bg-sky-400/06 blur-[140px] animate-pulse-subtle" 
        style={{ animationDelay: '1.5s' }}
      />
      <div 
        className="absolute top-2/3 left-10 w-[500px] h-[500px] rounded-full bg-indigo-500/05 blur-[120px] animate-pulse-subtle" 
        style={{ animationDelay: '3s' }}
      />
      <div 
        className="absolute -bottom-20 right-1/4 w-[650px] h-[650px] rounded-full bg-blue-600/05 blur-[150px] animate-pulse-subtle" 
        style={{ animationDelay: '2s' }}
      />

      {/* Dégradé doux */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(248,250,252,0.5)_90%)]" />
    </div>
  );
};
