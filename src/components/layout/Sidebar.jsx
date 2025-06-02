import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, LogOut } from 'lucide-react';

const Sidebar = ({ onClose }) => {
  return (
    <div className="w-[280px] lg:w-64 bg-[#1a1625]/90 backdrop-blur-sm h-screen text-white flex flex-col">
      <div className="flex-1 p-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-[#E056D7] to-[#7948EA] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-white font-semibold">Dashboard</span>
          </div>
        </div>
        
        <nav className="space-y-6">
          <div>
            <div className="text-gray-400 text-xs uppercase tracking-wider mb-2">Events</div>
            <div className="space-y-1">
              <Link 
                to="/new-requests" 
                className="flex items-center w-full text-left px-3 py-2 rounded-lg text-white bg-gradient-to-r from-[#E056D7] to-[#7948EA]"
                onClick={() => onClose?.()}
              >
                New Requests
              </Link>
              <Link 
                to="/estimate" 
                className="flex items-center w-full text-left px-3 py-2 rounded-lg text-gray-400 hover:text-white transition-colors"
                onClick={() => onClose?.()}
              >
                Estimate
              </Link>
              <Link 
                to="/events" 
                className="flex items-center w-full text-left px-3 py-2 rounded-lg text-gray-400 hover:text-white transition-colors"
                onClick={() => onClose?.()}
              >
                Events
              </Link>
              <Link 
                to="/partial-requests" 
                className="flex items-center w-full text-left px-3 py-2 rounded-lg text-gray-400 hover:text-white transition-colors"
                onClick={() => onClose?.()}
              >
                Partial Requests
              </Link>
            </div>
          </div>

          <div>
            <div className="text-gray-400 text-xs uppercase tracking-wider mb-2">Positions</div>
            <Link 
              to="/positions" 
              className="flex items-center w-full text-left px-3 py-2 rounded-lg text-gray-400 hover:text-white transition-colors"
              onClick={() => onClose?.()}
            >
              Positions
            </Link>
          </div>

          <div>
            <div className="text-gray-400 text-xs uppercase tracking-wider mb-2">Contractors</div>
            <Link 
              to="/contractors" 
              className="flex items-center w-full text-left px-3 py-2 rounded-lg text-gray-400 hover:text-white transition-colors"
              onClick={() => onClose?.()}
            >
              Contractors
            </Link>
          </div>
          
          <div>
            <div className="text-gray-400 text-xs uppercase tracking-wider mb-2">Users</div>
            <div className="space-y-1">
              <Link 
                to="/admins" 
                className="flex items-center w-full text-left px-3 py-2 rounded-lg text-gray-400 hover:text-white transition-colors"
                onClick={() => onClose?.()}
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                Admins
              </Link>
              <Link 
                to="/clients" 
                className="flex items-center w-full text-left px-3 py-2 rounded-lg text-gray-400 hover:text-white transition-colors"
                onClick={() => onClose?.()}
              >
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Clients
              </Link>
              <Link 
                to="/coordinators" 
                className="flex items-center w-full text-left px-3 py-2 rounded-lg text-gray-400 hover:text-white transition-colors"
                onClick={() => onClose?.()}
              >
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                Coordinators
              </Link>
            </div>
          </div>
        </nav>
      </div>

      {/* Logout Button */}
      <div className="p-6 border-t border-[#2D2A37]">
        <button 
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors w-full"
          onClick={() => onClose?.()}
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar; 