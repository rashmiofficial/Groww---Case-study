import React, { useState } from 'react';
import { MOCK_ORDERS } from '../../constants';
import { ChevronDownIcon, XBoxIcon } from '../Icons';

const OrdersView: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="pb-24">
      {/* Header Section */}
      <div 
        className="flex cursor-pointer items-center justify-between border-b border-slate-100 bg-white px-4 py-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-base font-semibold text-slate-700">
          Open orders ({MOCK_ORDERS.length})
        </h2>
        <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
           <ChevronDownIcon className="h-5 w-5 text-slate-400" />
        </div>
      </div>

      {/* Orders List */}
      {isOpen && (
        <div className="bg-white">
          {/* Action Bar */}
          <div className="flex justify-start px-4 py-3">
             <button className="flex items-center gap-1 text-sm font-medium text-emerald-500 hover:text-emerald-600">
                <XBoxIcon className="h-4 w-4" />
                Cancel all
             </button>
          </div>

          {/* List Items */}
          <div className="flex flex-col">
            {MOCK_ORDERS.map((order) => (
              <div key={order.id} className="border-b border-slate-50 px-4 py-4 last:border-b-0">
                <div className="mb-1 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span 
                      className={`rounded px-1.5 py-0.5 text-[10px] font-bold ${
                        order.type === 'BUY' 
                          ? 'bg-emerald-50 text-emerald-600' 
                          : 'bg-red-50 text-red-500'
                      }`}
                    >
                      {order.type}
                    </span>
                    <span className="text-[10px] font-medium text-slate-400">
                      SL / TGT
                    </span>
                  </div>
                  <span className="text-xs text-slate-400">
                    {order.productType}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-800">
                      {order.symbol}
                    </h3>
                    <p className="mt-0.5 text-xs text-slate-500">
                      Mkt <span className="text-slate-700">500.00</span>
                    </p>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center justify-end gap-1.5">
                       <div className="h-1.5 w-1.5 rounded-full bg-amber-400"></div>
                       <span className="text-sm font-semibold text-slate-800">
                         {order.quantity}
                       </span>
                    </div>
                    <p className="mt-0.5 text-xs text-slate-500">
                      At <span className="text-slate-700">{order.price.toFixed(2)}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OrdersView;