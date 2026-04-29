import React from "react";

export default function Customers() {
  return (
    <div className="p-8 min-h-screen">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-4xl font-semibold text-gray-800">Customers</h1>

        <button className="bg-red-500 text-white px-5 py-2 rounded-lg text-sm hover:bg-gray-800 transition">
          + Add Customer
        </button>
      </div>

      {/* Search */}
      <div className="mb-10 text-left">
        <input
          type="text"
          placeholder="Search customers..."
          className="w-full md:w-80 px-4 py-2 rounded-lg border bg-white text-sm outline-none focus:ring-2 focus:ring-red-100"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">

        <table className="w-full text-sm table-fixed">
          <thead>
  <tr>
    <th className="px-6 py-3 text-left w-1/4">Customer</th>
    <th className="px-6 py-3 text-left w-1/3">Email</th>
    <th className="px-6 py-3 text-left w-1/6">Spent</th>
    <th className="px-6 py-3 text-left w-1/6">Status</th>
    <th className="px-6 py-3 text-right w-1/12"></th>
  </tr>
</thead>

          <tbody className="divide-y">

            {/* Row */}
            <tr className="hover:bg-gray-50 transition">
              <td className="px-6 py-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-indigo-500 text-white flex items-center justify-center text-sm font-medium">
                  S
                </div>
                <span className="font-medium text-gray-800">Sravani K.</span>
              </td>

              <td className="px-6 py-4 text-gray-500">
                sravani@example.com
              </td>

              <td className="px-6 py-4 font-medium">$1,200</td>

              <td className="px-6 py-4">
                <span className="px-2 py-1 text-xs bg-green-100 text-green-600 rounded-full">
                  Active
                </span>
              </td>

              <td className="px-6 py-4 text-right text-gray-400 cursor-pointer">
                •••
              </td>
            </tr>

            <tr className="hover:bg-gray-50 transition">
              <td className="px-6 py-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gray-400 text-white flex items-center justify-center text-sm font-medium">
                  R
                </div>
                <span className="font-medium text-gray-800">Rahul M.</span>
              </td>

              <td className="px-6 py-4 text-gray-500">
                rahul@example.com
              </td>

              <td className="px-6 py-4 font-medium">$450</td>

              <td className="px-6 py-4">
                <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-600 rounded-full">
                  Pending
                </span>
              </td>

              <td className="px-6 py-4 text-right text-gray-400 cursor-pointer">
                •••
              </td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>
  );
}