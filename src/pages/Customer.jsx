import React from 'react';
import { Users, Search, Filter, Plus, MoreHorizontal } from 'lucide-react';

const customerData = [
  { id: 1, name: "Sravani K.", email: "sravani@example.com", spent: "$1,200" },
  { id: 2, name: "Rahul M.", email: "rahul@example.com", spent: "$450" },
  { id: 3, name: "Anjali P.", email: "anjali@example.com", spent: "$3,100" },
  { id: 4, name: "Vijay D.", email: "vijay@example.com", spent: "$0" },
];

const Customer = () => {
  return (
    <div className="space-y-6 p-6">
      {/* HEADER SECTION */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Customers</h1>
          <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest mt-1">
            Manage your user base
          </p>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-md text-[11px] font-medium flex items-center gap-2 hover:bg-slate-800 transition-colors">
          <Plus size={14} /> Add Customer
        </button>
      </div>

      {/* FILTER & SEARCH BAR */}
      <div className="flex gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input 
            type="text" 
            placeholder="Search customers..." 
            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
          />
        </div>
        <button className="px-3 py-2 border border-slate-200 rounded-lg flex items-center gap-2 text-slate-400 text-[11px] font-medium hover:bg-slate-50">
          <Filter size={14} /> Filter
        </button>
      </div>

      {/* CUSTOMER TABLE */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-5 py-3 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Customer</th>
              <th className="px-5 py-3 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Total Spent</th>
              <th className="px-5 py-3 w-10"></th> 
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {customerData.map((user) => (
              <tr key={user.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-5 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-slate-700">{user.name}</span>
                    <span className="text-[11px] text-slate-400 font-medium">{user.email}</span>
                  </div>
                </td>
                <td className="px-5 py-4 text-sm font-medium text-slate-600">
                  {user.spent}
                </td>
                <td className="px-5 py-4 text-right">
                  <button className="p-1 hover:bg-slate-100 rounded text-slate-400">
                    <MoreHorizontal size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customer;