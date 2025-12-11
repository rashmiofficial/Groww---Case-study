import React from 'react';
import { TABS } from '../constants';

interface TabNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TabNav: React.FC<TabNavProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="sticky top-[60px] z-40 bg-white shadow-sm">
      <div className="no-scrollbar flex overflow-x-auto border-b border-slate-100">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`
              relative flex-shrink-0 px-5 py-3 text-sm font-medium transition-colors
              ${
                activeTab === tab
                  ? 'text-emerald-600'
                  : 'text-slate-500 hover:text-slate-700'
              }
            `}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 h-0.5 w-full bg-emerald-600 rounded-t-full" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabNav;