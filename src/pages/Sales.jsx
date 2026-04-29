import React from 'react';
import { DollarSign, TrendingUp, Calendar } from 'lucide-react';

const Sales = () => {
  return (
    <div className="p-6 space-y-6"> {/* Added padding for consistency */}
      {/* Header */}
      <div>
        <h1 className="text-4xl text-slate-800 font-bold text-left">Sales Overview</h1>
        <p className="text-xl text-slate-900 font-medium text-left mt-10">Performance Tracking</p>
      </div>

      {/* Stats Cards Row - Forced 2 columns */}
      <div className="grid grid-cols-2 gap-6 mt-6">
        
        {/* Annual Sales Card */}
        <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100 shadow-sm group hover:border-blue-200 transition-all h-full">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2.5 bg-blue-100 text-blue-600 rounded-lg shrink-0">
              <TrendingUp size={20} />
            </div>
            <span className="text-10px font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
              +12.5%
            </span>
          </div>
          
          <div className="flex flex-col items-start">
            <p className="text-slate-500 text-[11px] font-bold uppercase tracking-tight mb-1">
              This Year Sales
            </p>
            <h2 className="text-2xl font-bold text-slate-800">$45,200.00</h2>
          </div>
        </div>

        {/* Monthly Sales Card */}
        <div className="bg-green-50/50 p-6 rounded-xl border border-green-100 shadow-sm group hover:border-green-200 transition-all h-full">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2.5 bg-green-100 text-green-600 rounded-lg shrink-0">
              <Calendar size={20} />
            </div>
            <span className="text-10px font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
              Target: $5k
            </span>
          </div>
          
          <div className="flex flex-col items-start">
            <p className="text-slate-500 text-[11px] font-bold uppercase tracking-tight mb-1">
              Monthly Sales (April)
            </p>
            <h2 className="text-2xl font-bold text-slate-800">$4,120.50</h2>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Sales;