import React from 'react';
import { FileText, Download, BarChart3, PieChart, ArrowUpRight } from 'lucide-react';

const Reports = () => {
  return (
    <div className="space-y-6">
      {/* HEADER SECTION */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Reports</h1>
          <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest mt-1">
            Analytics & Data Export
          </p>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-md text-[11px] font-medium flex items-center gap-2 hover:bg-slate-800 transition-colors shadow-sm">
          <Download size={14} /> Download All
        </button>
      </div>

      {/* QUICK ANALYTICS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-none">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-blue-50 text-blue-600 rounded-lg">
              <BarChart3 size={16} />
            </div>
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-tight">Revenue Report</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900">$12,450.00</h3>
          <div className="flex items-center gap-1 mt-1 text-green-600">
            <ArrowUpRight size={12} />
            <span className="text-[10px] font-bold">+8% from last month</span>
          </div>
        </div>

        <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-none">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-purple-50 text-purple-600 rounded-lg">
              <PieChart size={16} />
            </div>
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-tight">Customer Growth</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900">842 Users</h3>
          <div className="flex items-center gap-1 mt-1 text-green-600">
            <ArrowUpRight size={12} />
            <span className="text-[10px] font-bold">+12% new signups</span>
          </div>
        </div>
      </div>

      {/* RECENT GENERATED REPORTS LIST */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-none">
        <div className="px-5 py-3 border-b border-slate-100 bg-slate-50/50">
          <h2 className="text-sm font-bold text-slate-800">Recent Exports</h2>
        </div>
        
        <div className="divide-y divide-slate-100">
          {[
            { name: "Monthly_Sales_April.pdf", size: "1.2 MB", date: "Apr 15, 2026" },
            { name: "Inventory_Stock_Level.csv", size: "450 KB", date: "Apr 12, 2026" },
            { name: "Customer_Contact_List.xlsx", size: "2.8 MB", date: "Apr 10, 2026" }
          ].map((report, i) => (
            <div key={i} className="flex items-center justify-between px-5 py-3 hover:bg-slate-50 transition-colors cursor-pointer group">
              <div className="flex items-center gap-3">
                <FileText className="text-slate-400 group-hover:text-blue-500" size={18} />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-slate-700">{report.name}</span>
                  <span className="text-[10px] text-slate-400">{report.date} • {report.size}</span>
                </div>
              </div>
              <button className="text-[11px] font-bold text-blue-600 hover:underline">Download</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;