import React from 'react';
import { StocksIcon, MutualFundsIcon, MoreIcon } from './Icons';

const BottomNav: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 border-t border-slate-200 bg-white pb-safe">
      <div className="flex justify-around py-2">
        <button className="flex flex-col items-center gap-1 p-2">
          <div className="flex h-6 w-6 items-center justify-center text-emerald-500">
             <StocksIcon active={true} className="h-6 w-6" />
          </div>
          <span className="text-[10px] font-medium text-emerald-600">Stocks</span>
        </button>
        
        <button className="flex flex-col items-center gap-1 p-2">
          <div className="flex h-6 w-6 items-center justify-center text-slate-400">
             <MutualFundsIcon className="h-6 w-6" />
          </div>
          <span className="text-[10px] font-medium text-slate-500">Mutual funds</span>
        </button>
        
        <button className="flex flex-col items-center gap-1 p-2">
          <div className="flex h-6 w-6 items-center justify-center text-slate-400">
             <MoreIcon className="h-5 w-5" />
          </div>
          <span className="text-[10px] font-medium text-slate-500">More</span>
        </button>
      </div>
    </div>
  );
};

export default BottomNav;