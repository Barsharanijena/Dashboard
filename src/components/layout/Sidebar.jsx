import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, LogOut } from 'lucide-react';

const Sidebar = ({ onClose }) => {
  return (
    <div className="w-[280px] bg-[#1F1B2E] h-screen text-white flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <div className="w-12 h-12 bg-gradient-to-r from-[#E056D7] to-[#7948EA] rounded-full flex items-center justify-center border-4 border-[#2D1F47]">
          <span className="text-white font-bold text-2xl">B</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 py-6">
        <nav className="space-y-6">
          {/* Events Section */}
          <div className="px-6">
            <div className="flex items-center justify-between text-white mb-4">
              <span className="text-base">Events</span>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
            <div className="space-y-2">
              <Link 
                to="/new-requests" 
                className="flex items-center w-full text-left px-4 py-2 text-[#E056D7]"
                onClick={() => onClose?.()}
              >
                New Requests
              </Link>
              <Link 
                to="/estimate" 
                className="flex items-center w-full text-left px-4 py-2 text-gray-400"
                onClick={() => onClose?.()}
              >
                Estimate
                <span className="ml-2 bg-white bg-opacity-10 text-white px-2 py-0.5 rounded text-xs">9</span>
              </Link>
              <Link 
                to="/events" 
                className="flex items-center w-full text-left px-4 py-2 text-gray-400"
                onClick={() => onClose?.()}
              >
                Events
              </Link>
              <Link 
                to="/partial-requests" 
                className="flex items-center w-full text-left px-4 py-2 text-gray-400"
                onClick={() => onClose?.()}
              >
                Partial Requests
              </Link>
            </div>
          </div>

          {/* Positions Section */}
          <div className="px-6">
            <h2 className="text-base text-white mb-4">Positions</h2>
            <Link 
              to="/positions" 
              className="flex items-center w-full text-left px-4 py-2 text-gray-400"
              onClick={() => onClose?.()}
            >
              Positions
            </Link>
          </div>

          {/* Contractors Section */}
          <div className="px-6">
            <h2 className="text-base text-white mb-4">Contractors</h2>
            <Link 
              to="/contractors" 
              className="flex items-center w-full text-left px-4 py-2 text-gray-400"
              onClick={() => onClose?.()}
            >
              Contractors
            </Link>
          </div>

          {/* Users Section */}
          <div className="px-6">
            <div className="flex items-center justify-between text-white mb-4">
              <span className="text-base">Users</span>
              <ChevronDown size={16} className="text-gray-400 transform rotate-180" />
            </div>
            <div className="pl-4 space-y-2">
              <Link 
                to="/admins" 
                className="flex items-center w-full text-left px-4 py-2 text-gray-400"
                onClick={() => onClose?.()}
              >
                Admins
              </Link>
              <Link 
                to="/clients" 
                className="flex items-center w-full text-left px-4 py-2 text-gray-400"
                onClick={() => onClose?.()}
              >
                Clients
              </Link>
              <Link 
                to="/coordinators" 
                className="flex items-center w-full text-left px-4 py-2 text-gray-400"
                onClick={() => onClose?.()}
              >
                Coordinators
              </Link>
            </div>
          </div>

          {/* Profile Section */}
          <div className="px-6">
            <h2 className="text-base text-white mb-4">Profile</h2>
            <Link 
              to="/profile" 
              className="flex items-center w-full text-left px-4 py-2 text-gray-400"
              onClick={() => onClose?.()}
            >
              Profile
            </Link>
          </div>
        </nav>
      </div>

      {/* Logout Button */}
      <div className="p-6">
        <button 
          className="flex items-center gap-2 bg-white bg-opacity-5 text-gray-400 w-full px-4 py-3 rounded-lg"
          onClick={() => onClose?.()}
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar; 