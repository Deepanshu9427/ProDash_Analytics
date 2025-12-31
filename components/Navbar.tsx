
import React from 'react';
import { useAuth } from '../context/AuthContext';

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  const { user, logout } = useAuth();

  return (
    <header className="flex items-center justify-between px-4 py-4 bg-white border-b border-slate-200">
      <div className="flex items-center">
        <button 
          onClick={onMenuClick}
          className="p-2 mr-4 text-slate-600 hover:bg-slate-100 rounded-lg lg:hidden"
        >
          <i className="fa-solid fa-bars text-xl"></i>
        </button>
        <div className="relative hidden md:block">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <i className="fa-solid fa-magnifying-glass text-slate-400 text-sm"></i>
          </span>
          <input
            className="w-64 pl-10 pr-4 py-2 text-sm text-slate-700 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            type="text"
            placeholder="Search analytics..."
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex flex-col text-right hidden sm:block">
          <span className="text-sm font-semibold text-slate-700">{user?.email}</span>
          <span className="text-xs text-slate-400">Administrator</span>
        </div>
        <button 
          onClick={logout}
          className="flex items-center px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
        >
          <i className="fa-solid fa-right-from-bracket mr-2 text-slate-400"></i>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Navbar;
