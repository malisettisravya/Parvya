import React from 'react';
import { FileText, Download, BarChart3, PieChart, ArrowUpRight, ThumbsUp, Shield } from 'lucide-react';

const Reports = () => {
  return (
    <div className="p-6"> {/* Main Wrapper */}
      {/* HEADER SECTION */}
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h1 className="text-3xl font-extrabold text-slate-900 text-left">Reports</h1>
          <p className="text-sm font-medium text-slate-700">
            Real-time analytics and historical data exports.
          </p>
        </div>
      </div>

      {/* QUICK ANALYTICS CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        
        {/* Revenue Report Card */}
        <div className="bg-red-50/50 border border-red-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full">
          <div className="flex items-start gap-2">
            <div className="p-2 bg-red-50 text-red-600 rounded shrink-0">
              <BarChart3 size={25} />
            </div>
            <div className="flex-1 flex flex-col items-start">
              <p className="text-sm font-semibold text-slate-900 mb-1">Revenue Report</p>
              <h3 className="text-xl font-bold text-slate-900">₹ 0</h3>
              <div className="flex items-center gap-1 text-green-600 rounded-full bg-green-50 px-2 py-0.5 mt-2 w-fit">
                <ArrowUpRight size={16} />
                <span className="text-xs font-bold">+1%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Growth Card */}
        <div className="bg-blue-50/50 border border-blue-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full">
          <div className="flex items-start gap-2">
            <div className="p-2 bg-blue-50 text-blue-600 rounded shrink-0">
              <PieChart size={25} />
            </div>
            <div className="flex-1 flex flex-col items-start">
              <p className="text-sm font-semibold text-slate-900 mb-1">Customer Growth</p>
              <h3 className="text-xl font-bold text-slate-900">20</h3>
              <div className="flex items-center gap-1 text-green-600 rounded-full bg-green-50 px-2 py-0.5 mt-2 w-fit">
                <ArrowUpRight size={16} />
                <span className="text-xs font-bold">+5%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Consumer Satisfaction Card */}
        <div className="bg-orange-50/50 border border-orange-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full">
          <div className="flex items-start gap-2">
            <div className="p-2 bg-orange-50 text-orange-600 rounded shrink-0">
              <ThumbsUp size={25} />
            </div>
            <div className="flex-1 flex flex-col items-start">
              <p className="text-sm font-semibold text-slate-900 mb-1">Ratings</p>
              <h3 className="text-xl font-bold text-slate-900">15</h3>
              <div className="flex items-center gap-1 text-green-600 rounded-full bg-green-50 px-2 py-0.5 mt-2 w-fit">
                <ArrowUpRight size={16} />
                <span className="text-xs font-bold">+5%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Quality Card */}
        <div className="bg-purple-50/50 border border-purple-200 p-8 rounded-2xl shadow hover:shadow-md transition-shadow h-full">
          <div className="flex items-start gap-2">
            <div className="p-2 bg-purple-50 text-purple-600 rounded shrink-0">
              <Shield size={25} />
            </div>
            <div className="flex-1 flex flex-col items-start">
              <p className="text-sm font-semibold text-slate-900 mb-1">Product Quality</p>
              <h3 className="text-xl font-bold text-slate-900">10%</h3>
              <div className="flex items-center gap-1 text-green-600 rounded-full bg-green-50 px-2 py-0.5 mt-2 w-fit">
                <ArrowUpRight size={16} />
                <span className="text-xs font-bold">+5%</span>
              </div>
            </div>
          </div>
        </div>

      </div> {/* Grid Closes Here */}

      {/* RECENT GENERATED REPORTS LIST */}
      <div className="bg-white border border-slate-200 rounded-xl mt-8">
        <div className="px-6 py-4 border-b border-slate-100">
          <h2 className="text-lg font-bold text-slate-900 text-left">Recent Exports</h2>
        </div>
        
        <div className="divide-y divide-slate-100">
          <div className="px-5 py-3 flex items-center justify-between hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-slate-100 text-slate-500 rounded-lg">
                <FileText size={20} />
              </div>
              <p className="text-sm font-bold text-slate-900">Monthly_Sales_pdf</p>
            </div>
            <button className="text-red-600 hover:text-red-800 transition-colors">
              <Download size={20} />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Reports;