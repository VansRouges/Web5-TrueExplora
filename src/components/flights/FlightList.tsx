import React, { useState } from 'react';
// import FlightModal from './FlightModal';

const FlightList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState<{
    id: number;
    origin: string;
    destination: string;
    amount: number;
    date: string;
  } | null>(null);
  

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

  const openModal = (flight: {
    id: number;
    origin: string;
    destination: string;
    amount: number;
    date: string;
  }) => {
    setSelectedFlight(flight);
    setIsModalOpen(true);
  }; 

  const closeModal = () => {
    setSelectedFlight(null);
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto mt-8 max-w-7xl pb-16">
      <h2 className="text-2xl font-bold mb-4 lg:ml-0 ml-1">Flight List</h2>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockFlights.map((flight) => (
          <section
            key={flight.id}
            className="bg-white rounded p-4 shadow-md border border-gray-200"
          >
            <h3 className="text-xl font-bold mb-2">
              {flight.origin} to {flight.destination}
            </h3>
            <p className="text-gray-600 mb-2">${flight.amount}</p>
            <p className="text-gray-600">Date: {flight.date}</p>
            <button onClick={() => openModal(flight)} className="bg-green-500 mt-2 py-1 px-3 rounded text-white hover:bg-green-600">Book Now</button>
          </section>
        ))}
      </section>

      {/* {selectedFlight && (
        <FlightModal flight={selectedFlight} isOpen={true} onRequestClose={closeModal} />
      )} */}

    </div>
  );
};

export default FlightList;
