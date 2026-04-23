import { NavLink } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const SidebarItem = ({ to, icon: Icon, label, showChevron }) => {
  return (
    <NavLink 
      to={to} 
      className={({ isActive }) => 
        `w-full flex items-center justify-between px-2 py-1.5 rounded-lg group transition-all ${
          isActive 
            ? 'bg-red-50 text-red-600 shadow-sm' 
            : 'text-slate-600 hover:bg-red-50'
        }`
      }
    >
      <div className="flex items-center gap-3">
        {/* Icon design stays exactly as you had it */}
        <Icon size={18} className="text-slate-400 group-hover:text-red-600 transition-colors" />
        
        {/* Text matches your text-[11px] font size */}
        <span className="text-[11px] font-medium">{label}</span>
      </div>

      {/* Chevron matching your old design */}
      {showChevron && <ChevronDown size={14} className="text-slate-400" />}
    </NavLink>
  );
};

export default SidebarItem;