import React from 'react';
import {
  LayoutGrid,
  ChevronDown,
  ChevronLeft,
  ShoppingBag,
  ShoppingCart,
  Package,
  DollarSign,
  Users,
  FileText,
  Settings,
  HelpCircle,
  Moon,
  CreditCard,
  RefreshCw,
} from 'lucide-react';
import SidebarItem from './sidebarItem';
import { useState, useEffect } from 'react';

const Sidebar = () => {
  const [dark, setDark] = useState(false);

  // THE BRAIN: Connects the React state to the HTML document
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <aside className="w-48 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col min-h-screen transition-colors duration-300">

      {/* SECTION 1: Logo Area */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-1">
          <div className="bg-red-300 w-8 h-8 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm rotate-45"></div>
          </div>
          <span className="font-bold text-xl text-slate-800 dark:text-white">Parvya</span>
        </div>
        {/* <ChevronLeft className="text-slate-400 dark:text-slate-500 cursor-pointer" size={20} /> */}
      </div>

      {/* SECTION 3: Main Menu */}
      <div className="">
        <p className="text-11px font-bold text-slate-400 dark:text-slate-500 px-2 py-2 uppercase tracking-wider mb-3 text-left">Main</p>

        <SidebarItem to="/dashboard" icon={LayoutGrid} label="Dashboard" />
        <SidebarItem to="/products" icon={ShoppingBag} label="Products" />
        <SidebarItem to="/Cart" icon={ShoppingCart} label="Cart" />
        <SidebarItem to="/" icon={Package} label="Orders" />
        <SidebarItem to="/sales" icon={DollarSign} label="Sales" />
        <SidebarItem to="/customer" icon={Users} label="Customer" />
        <SidebarItem to="/Reports" icon={FileText} label="Reports" />
      </div>

      {/* SECTION 4: Settings Menu */}
      <div className="px-2">
        <p className="text-11px font-bold text-slate-400 dark:text-slate-500 px-2 py-2 uppercase tracking-wider mb-1 text-left">Settings</p>

        <SidebarItem to="/sync" icon={RefreshCw} label="MarketPlace Sync" />
        <SidebarItem to="/About" icon={CreditCard} label="Aboutus" />
        <SidebarItem to="/settings" icon={Settings} label="Settings" />
        <SidebarItem to="/help" icon={HelpCircle} label="Help Center" />
      </div>

      {/* SECTION 5: Dark Mode Footer */}
      <div className="mt-auto border-t border-slate-100 dark:border-slate-800 p-6">
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center">
            <Moon size={18} className="text-slate-900 dark:text-slate-900" />
            <span className="text-[15px] font-medium text-slate-600 dark:text-slate-900">Dark Mode</span>
          </div>
          <div 
            onClick={() => setDark(!dark)} 
            className={`w-10 h-5 rounded-full relative cursor-pointer transition-colors duration-300 ${dark ? 'bg-red-600' : 'bg-slate-200 dark:bg-slate-700'}`}
          >
            <div className={`absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform duration-300 ${dark ? 'translate-x-5' : 'translate-x-0'}`} />
          </div>
        </div>
      </div>

    </aside>
  );
};

export default Sidebar;