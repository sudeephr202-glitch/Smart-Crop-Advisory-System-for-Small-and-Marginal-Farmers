import React, { useState } from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Dashboard } from './views/Dashboard';
import { CropDoctor } from './views/CropDoctor';
import { Advisory } from './views/Advisory';
import { Market } from './views/Market';
import { Assistant } from './views/Assistant';
import { AppView } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);

  const renderView = () => {
    switch (currentView) {
      case AppView.DASHBOARD:
        return <Dashboard onChangeView={setCurrentView} />;
      case AppView.CROP_DOCTOR:
        return <CropDoctor />;
      case AppView.ADVISORY:
        return <Advisory />;
      case AppView.MARKET:
        return <Market />;
      case AppView.ASSISTANT:
        return <Assistant />;
      default:
        return <Dashboard onChangeView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row font-sans text-gray-900">
      {/* Navigation - Sidebar on Desktop, Bottom Bar on Mobile */}
      <Navigation currentView={currentView} onNavigate={setCurrentView} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 md:ml-64 transition-all duration-300">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-8 w-full max-w-7xl mx-auto scroll-smooth">
          {renderView()}
        </main>
      </div>
    </div>
  );
}