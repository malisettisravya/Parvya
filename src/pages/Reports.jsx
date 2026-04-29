import React from 'react';
import { FileText, Download, BarChart3, PieChart, ArrowUpRight } from 'lucide-react';

const Reports = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 space-y-8 bg-slate-50 min-h-screen">
      {/* HEADER SECTION - Increased padding and clear alignment */}
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Reports</h1>
          <p className="text-sm font-medium text-slate-500">
            Real-time analytics and historical data exports.
          </p>
        </div>
        <button className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-sm active:scale-95">
          <Download size={18} /> Download All
        </button>
      </div>

      {/* QUICK ANALYTICS CARDS - Uniform p-6 padding */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "Revenue Report", value: "$12,450.00", trend: "+8%", color: "blue", Icon: BarChart3 },
          { title: "Customer Growth", value: "842 Users", trend: "+12%", color: "purple", Icon: PieChart },
        ].map((stat, i) => (
          <div key={i} className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2.5 bg-${stat.color}-50 text-${stat.color}-600 rounded-xl`}>
                <stat.Icon size={20} />
              </div>
              <div className="flex items-center gap-1 text-green-600 bg-green-50 px-2 py-1 rounded-full">
                <ArrowUpRight size={14} />
                <span className="text-xs font-bold">{stat.trend}</span>
              </div>
            </div>
            <p className="text-sm font-semibold text-slate-500 mb-1">{stat.title}</p>
            <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* RECENT GENERATED REPORTS LIST - Consistent p-6 horizontal padding */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100">
          <h2 className="text-lg font-bold text-slate-800">Recent Exports</h2>
        </div>
        
        <div className="divide-y divide-slate-100">
          {[
            { name: "Monthly_Sales_April.pdf", size: "1.2 MB", date: "Apr 15, 2026" },
            { name: "Inventory_Stock_Level.csv", size: "450 KB", date: "Apr 12, 2026" },
            { name: "Customer_Contact_List.xlsx", size: "2.8 MB", date: "Apr 10, 2026" }
          ].map((report, i) => (
            <div key={i} className="flex items-center justify-between px-6 py-4 hover:bg-slate-50/80 transition-colors group">
              <div className="flex items-center gap-4">
                <div className="bg-slate-100 p-2 rounded-lg group-hover:bg-blue-50 transition-colors">
                  <FileText className="text-slate-500 group-hover:text-blue-600" size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-700">{report.name}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{report.date} • {report.size}</p>
                </div>
              </div>
              <button className="text-sm font-bold text-blue-600 hover:text-blue-800 px-3 py-1 rounded-md hover:bg-blue-50 transition-all">
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;