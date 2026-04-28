import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import StudentTable from './components/Tabledata';
import OrderCards from './components/Ordercards';
import Products from './pages/Products';
import Dashboard from './pages/Dashboard';
import Sales from './pages/Sales';
import Customer from './pages/Customer';
import Reports from './pages/Reports';
import Cart from './pages/Cart';
import Checkoutpage from './pages/Checkoutpage';
import Settings from './pages/Settings'
import Helpcenter from './pages/Helpcenter';
import Aboutus from './pages/Aboutus'

export default function App() {
  return (
    <Router>
      <div className="flex  w-full min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
        
        {/* 1. Sidebar stays always visible */}
        <Sidebar />

        {/* 2. Main content area swaps components based on URL */}
        {/* CHANGED: Added 'dark:bg-slate-950' here as well to ensure the main area matches */}
        <main className="flex-1 p-8 flex flex-col gap-8 overflow-y-auto h-screen no-scrollbar dark:bg-slate-950">
          
          <Routes>
            <Route path="/" element={
              <>
                <OrderCards />
                
                {/* CHANGED: Added 'dark:bg-slate-900' and 'dark:border-slate-800' to the table container */}
                <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-none transition-colors">
                  <StudentTable />
                </div>
              </>
            } />
            <Route path="/Products" element={<Products />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Sales" element={<Sales />} />
            <Route path="/Customer" element={<Customer/>} />
            <Route path="/Reports" element={<Reports/>} />
            <Route path="/Cart"   element={<Cart/>}/>
            <Route path="/checkout" element={<Checkoutpage/>}/>
            <Route path="/Settings" element={<Settings/>}/>
            <Route path="/Help" element={<Helpcenter/>}/>
            <Route path="/About" element={<Aboutus/>}/>
          </Routes>

        </main>
      </div>
    </Router>

  );
}