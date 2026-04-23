import React from 'react';

const OrderCards = () => {
  return (
    <div className="w-full flex flex-col">

      {/* --- HEADINGS SECTION --- */}
      <div className="flex flex-col text-left ">
        {/* We use !dark:text-white to make sure it's bright and visible */}
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Orders
        </h1>
        <h2 className="text-sm font-medium text-slate-500 dark:text-slate-400 flex flex-col">
          All Orders
        </h2>
      </div>

      {/* --- MANUAL CARDS GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        {/* CARD 1: Total Orders */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center mb-1">
            <div className="w-4 h-4 rounded-full bg-indigo-500"></div>
            <span className="text-[10px] font-medium text-slate-600 dark:text-slate-400 ml-2">
              Total Orders This Month
            </span>
          </div>
          <div className="text-2xl text-left font-bold text-slate-900 dark:text-white px-1">
            200
          </div>
        </div>

        {/* CARD 2: Another Total / Pending */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center mb-1">
            <div className="w-4 h-4 rounded-full bg-orange-500"></div>
            <span className="text-[10px] font-medium text-slate-600 dark:text-slate-400 ml-2">
              Total Orders This Year
            </span>
          </div>
          <div className="text-2xl text-left font-bold text-slate-900 dark:text-white px-1 ">
            20
          </div>
        </div>

        {/* CARD 3: Shipped */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center  mb-1">
            <div className="w-4 h-4 rounded-full bg-green-500"></div>
            <span className="text-[11px] font-medium text-slate-600 dark:text-slate-400 ml-2">
              Shipped Orders
            </span>
          </div>
          <div className="text-2xl text-left font-bold text-slate-900 dark:text-white px-1">
            20
          </div>
        </div>

        {/* CARD 4: Refunded */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center mb-1">
            <div className="w-4 h-4 rounded-full bg-red-500"></div>
            <span className="text-[11px] font-medium text-slate-600 dark:text-slate-400 ml-2">
              Refunded Orders
            </span>
          </div>
          <div className="text-2xl text-left font-bold text-slate-900 dark:text-white px-1">
            20
          </div>
        </div>

      </div>
    </div>
  );
};

export default OrderCards;