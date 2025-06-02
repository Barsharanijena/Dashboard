import React from 'react';
import { Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EventRequests = () => {
  const navigate = useNavigate();
  const eventRequests = [
    {
      id: 1,
      eventName: 'Filled Name',
      eventStart: 'Jan 12, 2024',
      eventEnd: 'Jan 14, 2024',
      clientName: 'Muhammad Asad'
    },
    {
      id: 2,
      eventName: 'Filled Name',
      eventStart: 'Jan 12, 2024',
      eventEnd: 'Jan 14, 2024',
      clientName: 'Muhammad Asad'
    },
    // More dummy data can be added here
  ];

  return (
    <div className="text-white">
      <h1 className="text-2xl lg:text-3xl font-semibold mb-4 lg:mb-8 mt-12 lg:mt-0">Event Requests</h1>
      
      <div className="bg-[#1F1B2E] rounded-lg p-4 lg:p-6 overflow-x-auto">
        {/* Desktop Header */}
        <div className="hidden lg:grid grid-cols-4 gap-4 text-purple-300 mb-4 px-4">
          <div className="flex items-center gap-2">
            <span>Event Name</span>
            <span className="w-4 h-4 rounded-full bg-purple-400"></span>
          </div>
          <div>Event Start</div>
          <div>Event End</div>
          <div>Client Name</div>
        </div>

        <div className="space-y-4">
          {eventRequests.map(request => (
            <div 
              key={request.id}
              className="bg-[#2A2439] rounded-lg p-4 hover:bg-[#332C44] transition-colors cursor-pointer"
              onClick={() => navigate(`/events/${request.id}`)}
            >
              {/* Mobile Layout */}
              <div className="lg:hidden space-y-2">
                <div className="flex items-center gap-2 text-purple-300 mb-2">
                  <Eye size={20} />
                  <span className="font-medium">{request.eventName}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-gray-400">Start:</span>
                    <span className="ml-2 text-gray-300">{request.eventStart}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">End:</span>
                    <span className="ml-2 text-gray-300">{request.eventEnd}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-gray-400">Client:</span>
                    <span className="ml-2 text-gray-300">{request.clientName}</span>
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden lg:grid grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  <Eye size={20} className="text-purple-400" />
                  {request.eventName}
                </div>
                <div>{request.eventStart}</div>
                <div>{request.eventEnd}</div>
                <div>{request.clientName}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventRequests; 