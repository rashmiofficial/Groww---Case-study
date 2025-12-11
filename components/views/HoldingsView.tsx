import React, { useState, useEffect } from 'react';
import { SortIcon, ChevronsIcon, InfoIcon } from '../Icons';

interface HoldingItem {
  id: string;
  name: string;
  shares: number;
  value: string;
  percent: string;
  isProfit: boolean;
  graphType: 'up' | 'down';
}

const HOLDINGS_DATA: HoldingItem[] = [
  {
    id: '1',
    name: 'IDFC First Bank',
    shares: 150,
    value: '-₹1,014.00',
    percent: '(-8.93%)',
    isProfit: false,
    graphType: 'up' // Graph is green going up despite loss, matching screenshot
  },
  {
    id: '2',
    name: 'Varun Beverages',
    shares: 11,
    value: '+₹752.51',
    percent: '(+12.61%)',
    isProfit: true,
    graphType: 'down' // Graph is red going down despite profit, matching screenshot
  },
  {
    id: '3',
    name: 'NHPC',
    shares: 1140,
    value: '-₹14,569.20',
    percent: '(-13.70%)',
    isProfit: false,
    graphType: 'up'
  },
  {
    id: '4',
    name: 'Data Patterns (I)',
    shares: 27,
    value: '-₹13,108.50',
    percent: '(-17.53%)',
    isProfit: false,
    graphType: 'up'
  }
];

const Sparkline = ({ type }: { type: 'up' | 'down' }) => {
  if (type === 'up') {
    return (
      <svg viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M2 18 L10 14 L18 16 L28 8 L38 12 L58 2" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 18 L58 18" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M2 2 L12 8 L22 6 L32 14 L42 10 L58 18" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 2 L58 2" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="2 2" />
    </svg>
  );
};

const INITIAL_AMOUNT = 8058712;
const UPDATED_AMOUNT = 9067786;

const HoldingsView: React.FC = () => {
  const [hasHoldings, setHasHoldings] = useState(false);
  const [currentValue, setCurrentValue] = useState(INITIAL_AMOUNT);
  const [showUpdateInfo, setShowUpdateInfo] = useState(false);

  useEffect(() => {
    if (hasHoldings) {
      // Show increase after 5 seconds
      const timer = setTimeout(() => {
        setCurrentValue(UPDATED_AMOUNT);
        setShowUpdateInfo(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [hasHoldings]);

  if (!hasHoldings) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center p-8">
        {/* Illustration placeholder using pure CSS/SVG composition to mimic the 'Jar with Coins' */}
        <div className="relative mb-8 h-48 w-48">
           {/* Simple vector approximation of the jar */}
           <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-90">
              {/* Background ring */}
              <ellipse cx="100" cy="150" rx="80" ry="30" stroke="#E2E8F0" strokeWidth="2" fill="none" />
              
              {/* Jar Body */}
              <path d="M60 150 C60 190, 140 190, 140 150 L130 90 L70 90 Z" fill="#F1F5F9" opacity="0.5"/>
              <path d="M60 150 C60 190, 140 190, 140 150 L130 90 L70 90 Z" stroke="#BFDBFE" strokeWidth="2" strokeLinejoin="round"/>
              
              {/* Jar Rim */}
              <ellipse cx="100" cy="90" rx="35" ry="12" fill="#DBEAFE" stroke="#93C5FD" strokeWidth="2"/>
              
              {/* Coin Top */}
              <circle cx="100" cy="60" r="18" fill="#BFDBFE" stroke="#60A5FA" strokeWidth="2"/>
              <circle cx="100" cy="60" r="12" fill="#DBEAFE"/>
              
              {/* Coin floating */}
              <circle cx="160" cy="100" r="4" fill="#E0F2FE"/>
              <circle cx="40" cy="160" r="6" fill="#E0F2FE"/>
              
              {/* Green dot accent */}
              <circle cx="120" cy="150" r="6" fill="#34D399"/>
           </svg>
        </div>

        <h3 className="mb-6 text-lg font-semibold text-slate-700">
          You have no holdings
        </h3>
        
        <button 
          onClick={() => setHasHoldings(true)}
          className="rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-600 active:bg-emerald-700"
        >
          Make your next investment
        </button>
      </div>
    );
  }

  // Calculate difference for tooltip
  const diffAmount = (UPDATED_AMOUNT - INITIAL_AMOUNT).toLocaleString('en-IN');

  // Populated View
  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Trust Strip */}
      <div className="flex items-center justify-center bg-emerald-500 py-1.5">
         <span className="text-[10px] font-bold text-white">Last data synced - 10:30 AM</span>
      </div>

      {/* Page Header */}
      <div className="px-4 py-3">
          <h2 className="text-base font-bold text-slate-800">Holdings (24)</h2>
      </div>
      
      <div className="px-4 pt-2">
          {/* Summary Card */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-[0_2px_8px_rgba(0,0,0,0.05)] p-4">
              {/* Top Row */}
              <div className="flex justify-between items-start mb-5">
                  <div>
                      <div className="text-xs text-slate-500 mb-1">Current</div>
                      <div className="flex items-center gap-2">
                        <div className="text-lg font-semibold text-slate-800 tracking-tight transition-all duration-300">
                          ₹{currentValue.toLocaleString('en-IN')}
                        </div>
                        {showUpdateInfo && (
                          <div className="group relative">
                             <InfoIcon className="h-4 w-4 text-emerald-500 cursor-pointer" />
                             {/* Tooltip */}
                             <div className="absolute left-full ml-2 w-48 rounded-md bg-slate-800 p-2.5 text-[10px] leading-relaxed text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 z-20 pointer-events-none -translate-y-1/2 top-1/2">
                                <div className="absolute -left-1 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-slate-800"></div>
                                Your current amount increased by ₹{diffAmount} and that happened due to this stock price increment.
                             </div>
                          </div>
                        )}
                      </div>
                  </div>
                  <div className="text-right">
                      <div className="text-xs text-slate-500 mb-1">Total returns</div>
                      <div className="text-sm font-medium text-emerald-500">+ ₹71,93,709 (831.64%)</div>
                  </div>
              </div>
              
              {/* Divider (Invisible spacing) */}

              {/* Bottom Row */}
               <div className="flex justify-between items-start">
                  <div>
                      <div className="text-xs text-slate-500 mb-1">Invested</div>
                      <div className="text-base font-medium text-slate-700">₹8,65,003</div>
                  </div>
                  <div className="text-right">
                      <div className="text-xs text-slate-500 mb-1">1D returns</div>
                      <div className="text-sm font-medium text-emerald-500">+ ₹72,83,611 (939.70%)</div>
                  </div>
              </div>
          </div>
          
          {/* Sort & Filter Bar */}
          <div className="flex justify-between items-center mt-6 mb-3">
              <button className="flex items-center gap-1.5 text-xs font-bold text-slate-600">
                  Sort
                  <SortIcon className="w-4 h-4 text-slate-500" />
              </button>
              <button className="flex items-center gap-1.5 text-xs font-bold text-slate-600">
                  <ChevronsIcon className="w-4 h-4 text-slate-500" />
                  Returns (%)
              </button>
          </div>
          
          {/* Holdings List */}
          <div className="flex flex-col">
              {HOLDINGS_DATA.map((item, index) => (
                  <div key={item.id} className="flex items-center justify-between py-4 border-b border-slate-100 last:border-0">
                      {/* Left: Name and Shares */}
                      <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-slate-800 truncate">{item.name}</div>
                          <div className="text-xs text-slate-500 mt-1">{item.shares} shares</div>
                      </div>
                      
                      {/* Center: Sparkline */}
                      <div className="w-16 h-8 mx-2 flex-shrink-0">
                         <Sparkline type={item.graphType} />
                      </div>
                      
                      {/* Right: Value and Percent */}
                      <div className="text-right flex-shrink-0">
                           <div className="text-sm font-medium text-slate-800">{item.value}</div>
                           <div className={`text-xs mt-1 font-medium ${item.isProfit ? 'text-emerald-500' : 'text-red-500'}`}>
                              {item.percent}
                           </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default HoldingsView;