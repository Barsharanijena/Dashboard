import React from 'react';
import { ChevronLeft, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const EventDetails = () => {
  const meetingRooms = [
    {
      id: 1,
      name: 'Meeting Room 1',
      positions: 12,
      status: 'available',
      startDate: 'Start from 12 Jan 2023',
      endDate: 'Ends at 15 Jan 2023'
    },
    {
      id: 2,
      name: 'Meeting Room 2',
      positions: 12,
      status: 'occupied',
      startDate: 'Start from 12 Jan 2023',
      endDate: 'Ends at 15 Jan 2023'
    },
    {
      id: 3,
      name: 'Meeting Room 3',
      positions: 12,
      status: 'available',
      startDate: 'Start from 12 Jan 2023',
      endDate: 'Ends at 15 Jan 2023'
    },
    {
      id: 4,
      name: 'Meeting Room 4',
      positions: 12,
      status: 'available',
      startDate: 'Start from 12 Jan 2023',
      endDate: 'Ends at 15 Jan 2023'
    },
    {
      id: 5,
      name: 'Meeting Room 5',
      positions: 12,
      status: 'available',
      startDate: 'Start from 12 Jan 2023',
      endDate: 'Ends at 15 Jan 2023'
    }
  ];

  const positions = Array(8).fill({}).map((_, index) => ({
    id: index + 1,
    position: 'Camera 1 (Video)',
    time: '9 am - 7 pm',
    info: 'LP default',
    quantity: 20
  }));

  return (
    <div className="text-white p-4">
      {/* Header with back button and title */}
      <div className="flex items-center gap-3 mb-6">
        <Link to="/events" className="text-gray-400 hover:text-white">
          <ChevronLeft size={20} />
        </Link>
        <h1 className="text-xl font-semibold">Event Name (Venue Details)</h1>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button className="bg-[#1F1B2E] text-gray-400 px-4 py-2 rounded-lg text-sm">
          Event Details
        </button>
        <button className="bg-[#E056D7] text-white px-4 py-2 rounded-lg text-sm">
          Assign Coordinator/Coordinator
        </button>
        <button className="bg-[#1F1B2E] text-gray-400 px-4 py-2 rounded-lg text-sm">
          Session Management
        </button>
        <button className="bg-[#1F1B2E] text-gray-400 px-4 py-2 rounded-lg text-sm border border-gray-700">
          Generate SOW
        </button>
      </div>

      {/* Assign Coordinator Section - Horizontal */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-1/3">
            <h2 className="text-lg mb-4">Assign Coordinator</h2>
            <div className="space-y-3">
              <div className="relative">
                <select className="w-full bg-[#1A1625] text-gray-400 border border-[#3D3A47] rounded-lg px-4 py-2.5 appearance-none focus:outline-none focus:ring-1 focus:ring-[#E056D7]">
                  <option>Search Coordinator</option>
                </select>
              </div>
              <button className="text-[#E056D7] text-sm hover:text-[#E056D7]/80 transition-colors">
                Add New Coordinator
              </button>
            </div>
          </div>

          <div className="lg:w-2/3">
            <h2 className="text-lg mb-4">Event Name (Venue Here)</h2>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Start:</span>
                <span>12-12-2023</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Ends:</span>
                <span>15-12-2023</span>
              </div>
              <div>
                <span className="text-gray-400 block mb-2">Venue Address:</span>
                <div className="bg-[#1A1625] rounded-lg p-3 border border-[#3D3A47] text-gray-300">
                  Some Location 12, Name Here, City, State
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Assign Contractor Section */}
        <div>
          <h2 className="text-lg mb-4">Assign Contractor</h2>
          <div className="space-y-3">
            {meetingRooms.map((room) => (
              <div
                key={room.id}
                className={`rounded-lg ${
                  room.id === 1
                    ? 'bg-[#E056D7] bg-opacity-20'
                    : 'bg-[#1F1B2E]'
                } border border-[#3D3A47] overflow-hidden`}
              >
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium flex items-center gap-2 flex-wrap">
                      {room.name}
                      <Star size={14} className="text-yellow-400 fill-current" />
                      <span className="text-[#E056D7] text-sm">{room.positions} Positions</span>
                    </h3>
                  </div>
                  <div className="text-xs text-gray-400">
                    <p>{room.startDate}</p>
                    <p>{room.endDate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Positions Table */}
        <div>
          <div className="bg-[#E056D7] text-white px-4 lg:px-6 py-3 rounded-t-lg">
            <h2 className="font-medium">Positions</h2>
          </div>
          <div className="bg-[#1F1B2E] rounded-b-lg overflow-x-auto">
            <div className="p-4">
              <div className="grid grid-cols-5 gap-2 lg:gap-4 text-sm text-gray-400 mb-4 min-w-[600px]">
                <div>Position</div>
                <div>Time</div>
                <div>Info</div>
                <div>Quantity</div>
                <div>Action</div>
              </div>
              <div className="space-y-2">
                {positions.map((pos) => (
                  <div key={pos.id} className="grid grid-cols-5 gap-2 lg:gap-4 text-sm py-2 min-w-[600px]">
                    <div>{pos.position}</div>
                    <div>{pos.time}</div>
                    <div>{pos.info}</div>
                    <div>{pos.quantity}</div>
                    <div>
                      <select className="w-full bg-[#1F1B2E] text-gray-400 border border-[#3D3A47] rounded px-2 py-1.5 text-sm appearance-none">
                        <option>Select Contractor</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4 flex items-center justify-between border-t border-[#3D3A47]">
              <div className="flex items-center gap-2">
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1F1B2E] text-gray-400">←</button>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#E056D7]"></span>
                  <span className="w-2 h-2 rounded-full bg-gray-600"></span>
                  <span className="w-2 h-2 rounded-full bg-gray-600"></span>
                </div>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1F1B2E] text-gray-400">→</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-[#E056D7] text-white px-12 py-3 rounded-lg font-medium w-full lg:w-auto">
          Save Edits
        </button>
      </div>
    </div>
  );
};

export default EventDetails; 