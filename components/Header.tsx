import React from 'react';
import { SearchIcon, QrCodeIcon, LogoIcon } from './Icons';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-white px-4 py-3 shadow-sm">
      <div className="flex items-center gap-3">
        <LogoIcon className="h-8 w-8" />
        <h1 className="text-xl font-semibold text-slate-800">Stocks</h1>
      </div>
      
      <div className="flex items-center gap-5">
        <button className="text-slate-600 hover:text-slate-900">
          <SearchIcon className="h-6 w-6" />
        </button>
        <button className="text-slate-600 hover:text-slate-900">
          <QrCodeIcon className="h-6 w-6" />
        </button>
        <div className="h-8 w-8 overflow-hidden rounded-full border border-slate-200">
          <img 
            src="https://picsum.photos/100/100" 
            alt="User Profile" 
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;