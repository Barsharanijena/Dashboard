import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Menu, X, Bell, User } from 'lucide-react';

const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1625] via-[#2D1F47] to-[#1A1625]">
      <div className="flex">
        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden fixed top-4 left-4 z-50 text-white p-2 rounded-lg bg-gradient-to-r from-[#E056D7] to-[#7948EA]"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Sidebar with mobile handling */}
        <div className={`
          fixed lg:static inset-y-0 left-0 z-40 
          transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0 transition-transform duration-300 ease-in-out
        `}>
          <Sidebar onClose={() => setIsMobileMenuOpen(false)} />
        </div>

        {/* Overlay for mobile */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Main content area */}
        <div className="flex-1 min-h-screen">
          {/* Header */}
          <div className="bg-[#1A1625]/80 backdrop-blur-sm border-b border-[#2D2A37] px-6 py-4">
            <div className="flex items-center justify-end">
              <div className="flex items-center space-x-4">
                <button className="text-gray-400 hover:text-white transition-colors">
                  <Bell size={20} />
                </button>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#E056D7] to-[#7948EA] rounded-full flex items-center justify-center">
                    <User size={16} className="text-white" />
                  </div>
                  <div className="hidden sm:block">
                    <div className="text-white text-sm">Hi Barsharan Jena</div>
                    <div className="text-gray-400 text-xs">Welcome back!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <main className="p-4 lg:p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout; 