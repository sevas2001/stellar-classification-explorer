import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import ExplorerPage from './components/ExplorerPage';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'explorer'>('landing');

  return (
    <div className="font-display text-white antialiased">
      {currentView === 'landing' ? (
        <LandingPage onStart={() => setCurrentView('explorer')} />
      ) : (
        <ExplorerPage onExit={() => setCurrentView('landing')} />
      )}
    </div>
  );
};

export default App;