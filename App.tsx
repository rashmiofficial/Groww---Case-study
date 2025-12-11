import React, { useState } from 'react';
import Header from './components/Header';
import IndicesWidget from './components/IndicesWidget';
import TabNav from './components/TabNav';
import BottomNav from './components/BottomNav';
import HoldingsView from './components/views/HoldingsView';
import OrdersView from './components/views/OrdersView';

const App: React.FC = () => {
  // Default to Holdings as per Image 1, but user can switch to Orders for Image 2
  const [activeTab, setActiveTab] = useState("Holdings");

  const renderContent = () => {
    switch (activeTab) {
      case "Holdings":
        return <HoldingsView />;
      case "Orders":
        return <OrdersView />;
      default:
        // Generic placeholder for other tabs to keep the app feeling complete
        return (
          <div className="flex h-64 items-center justify-center text-slate-400">
             <p>Content for {activeTab}</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      <Header />
      <div className="bg-white pb-2">
        <IndicesWidget />
      </div>
      
      <TabNav activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="min-h-[60vh] bg-white">
        {renderContent()}
      </main>

      <BottomNav />
    </div>
  );
};

export default App;