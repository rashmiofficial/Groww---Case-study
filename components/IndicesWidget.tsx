import React from 'react';
import { IndexData } from '../types';
import { INDICES } from '../constants';

const IndicesWidget: React.FC = () => {
  return (
    <div className="no-scrollbar flex gap-3 overflow-x-auto px-4 py-4">
      {INDICES.map((index, i) => (
        <div 
          key={i} 
          className="min-w-[160px] flex-shrink-0 rounded-lg border border-slate-100 bg-white p-3 shadow-sm"
        >
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
            {index.name}
          </div>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-sm font-medium text-slate-800">
              {index.value.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
            </span>
            <span 
              className={`text-xs font-medium ${
                index.change >= 0 ? 'text-emerald-500' : 'text-red-500'
              }`}
            >
              {index.change > 0 ? '+' : ''}{index.change.toFixed(2)} ({Math.abs(index.percentChange).toFixed(2)}%)
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IndicesWidget;