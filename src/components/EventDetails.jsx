import React from 'react';
import { ArrowLeft } from 'lucide-react';

const EventDetails = () => {
  return (
    <div className="p-6 w-full">
      {/* Header with back button and event name */}
      <div className="flex items-center gap-3 mb-6">
        <button className="text-white">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-2xl text-white font-medium">
          Event Name <span className="text-gray-400">(Venue Details)</span>
        </h1>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-2 mb-8">
        <button className="px-6 py-2 rounded-lg bg-[#E056D7] text-white">
          Event Details
        </button>
        <button className="px-6 py-2 rounded-lg bg-[#E056D7] text-white">
          Assign Coordinator/Coordinator
        </button>
        <button className="px-6 py-2 rounded-lg bg-[#2D2A37] text-white">
          Session Management
        </button>
        <button className="px-6 py-2 rounded-lg bg-[#2D2A37] text-white">
          Generate SOW
        </button>
      </div>

      {/* Event Information Box */}
      <div className="flex justify-between items-start mb-8">
        <div className="flex-1">
          <h2 className="text-xl text-white mb-4">Assign Coordinator</h2>
          <div className="relative">
            <select className="w-full bg-[#1A1625] text-gray-400 px-4 py-3 rounded-lg appearance-none border border-[#2D2A37] focus:outline-none focus:border-[#E056D7]">
              <option>Search Coordinator</option>
            </select>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M1 1L6 6L11 1" stroke="white" strokeWidth="2"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Event Details Box */}
        <div className="ml-6 bg-[#1A1625] rounded-lg p-4 min-w-[400px] border border-[#2D2A37]">
          <h2 className="text-xl text-white mb-3">
            Event Name <span className="text-gray-400">(Venue Here)</span>
          </h2>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Start:</span>
              <span className="text-white">12-12-2023</span>
              <span className="text-gray-400 ml-4">Ends:</span>
              <span className="text-white">15-12-2023</span>
            </div>
            <div className="text-sm">
              <span className="text-gray-400">Venue Address:</span>
              <span className="text-white ml-2">Some Location 12, Name Here, City, State.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the component */}
    </div>
  );
};

export default EventDetails; 