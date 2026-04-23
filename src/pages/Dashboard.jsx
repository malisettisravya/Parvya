import React from 'react';
import { LayoutGrid } from 'lucide-react';


const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      {/* Icon with a soft background */}
     
      
      {/* Main Heading using your font style */}
      <h1 className="text-xl font-bold text-slate-800 mb-2">Dashboard</h1>
      
      {/* Coming Soon Message with 11px font like your sidebar */}
      <p className="text-[11px] font-medium text-slate-500 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full">
        Coming Soon
      </p>
      
      {/* Optional Description */}
      <p className="mt-4 text-sm text-slate-400 max-w-xs">
        We are working hard to bring your data analytics here. Stay tuned!
      </p>
    </div>

  
  );
};

export default Dashboard;