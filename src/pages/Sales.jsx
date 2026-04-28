import React from 'react';
import { DollarSign, TrendingUp, Calendar } from 'lucide-react';

const Sales = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl text-slate-800 font-bold text-left">Sales Overview</h1>
        <p className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">Performance Tracking</p>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Annual Sales Card */}
        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm group hover:border-blue-200 transition-all">
          <div className="flex items-center justify-between mb-1">
            <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
              <TrendingUp size={20} />
            </div>
            <span className="text-[10px] font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-full">+12.5%</span>
          </div>
          <p className="text-slate-500 text-[11px] font-semibold uppercase tracking-tight">This Year Sales</p>
          <h2 className="text-2xl font-bold text-slate-800">$45,200.00</h2>
        </div>

        {/* Monthly Sales Card */}
        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm group hover:border-blue-200 transition-all">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 bg-slate-50 rounded-lg text-slate-600">
              <Calendar size={20} />
            </div>
            <span className="text-[10px] font-bold text-slate-400">Target: $5k</span>
          </div>
          <p className="text-slate-500 text-[11px] font-semibold uppercase tracking-tight">Monthly Sales (April)</p>
          <h2 className="text-2xl font-bold text-slate-800">$4,120.50</h2>
        </div>

      </div>

      {/* Simple Sales Message */}
      
    </div>
  );
};

export default Sales;