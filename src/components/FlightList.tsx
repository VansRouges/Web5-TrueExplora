// FlightList.js

import React from 'react';

const FlightList = () => {
  const mockFlights = [
    {
      id: 1,
      origin: 'New York',
      destination: 'Los Angeles',
      amount: 500,
      date: '2023-12-10',
    },
    {
      id: 2,
      origin: 'London',
      destination: 'Tokyo',
      amount: 800,
      date: '2023-12-15',
    },
    {
      id: 3,
      origin: 'Paris',
      destination: 'Sydney',
      amount: 700,
      date: '2023-12-20',
    },
    {
      id: 4,
      origin: 'Dubai',
      destination: 'New York',
      amount: 1000,
      date: '2023-12-25',
    },
    {
      id: 5,
      origin: 'Beijing',
      destination: 'San Francisco',
      amount: 600,
      date: '2023-12-30',
    },
  ];

  return (
    <div className="container mx-auto mt-8 max-w-7xl">
      <h2 className="text-2xl font-bold mb-4">Flight List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockFlights.map((flight) => (
          <div
            key={flight.id}
            className="bg-white rounded p-4 shadow-md border border-gray-200"
          >
            <h3 className="text-xl font-bold mb-2">
              {flight.origin} to {flight.destination}
            </h3>
            <p className="text-gray-600 mb-2">${flight.amount}</p>
            <p className="text-gray-600">Date: {flight.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightList;
