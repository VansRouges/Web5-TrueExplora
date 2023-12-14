import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';

interface PassengerFormProps {
  closeModal: () => void;
}

const PassengerForm: React.FC<PassengerFormProps> = ({ closeModal }) => {
  const [passengerType, setPassengerType] = useState('adult');
  const [passengerCount, setPassengerCount] = useState(1);
  const [title, setTitle] = useState('Mr');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <>
      <section className="container px-5 py-4 mx-auto">
        <section className="lg:w-2/3 mx-auto">
          <article className="flex flex-col w-full mb-3">
            <h1 className="sm:text-3xl text-2xl font-medium mb-2 text-indigo-700">Passenger Details</h1>
          </article>
          <form className="flex flex-col -m-2 bg-white px-4 py-6 rounded-lg" onSubmit={handleSubmit}>
            <section className="flex flex-row items-center mb-2">
              <FaUser className="text-green-300 w-6 h-6 ml-2" />
              <section className="ml-2">
                <label htmlFor="passenger type" className="leading-7 text-sm text-gray-600">Passenger Type:</label>
                <select value={passengerType} onChange={(e) => setPassengerType(e.target.value)} className="outline-none">
                  <option value="adult">Adult</option>
                  <option value="child">Child</option>
                </select>
              </section>

              <section className="ml-4">
                <label htmlFor="passenger count" className="leading-7 text-sm text-gray-600">Passenger Count:</label>
                <select value={passengerCount} onChange={(e) => setPassengerCount(Number(e.target.value))} className="outline-none">
                  {[1, 2, 3, 4, 5].map((count) => (
                    <option key={count} value={count}>
                      {count}
                    </option>
                  ))}
                </select>
              </section>
            </section>

            <section className="flex flex-row flex-wrap">
              <section className="p-2 lg:w-1/4 w-1/2">
                <section className="relative">
                  <label htmlFor="first name" className="leading-7 text-sm text-gray-600">Title</label>
                  <select value={title} onChange={(e) => setTitle(e.target.value)} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Ms</option>
                  </select>
                </section>
              </section>

              <section className="p-2 lg:w-1/4 w-1/2">
                <section className="relative">
                  <label htmlFor="first name" className="leading-7 text-sm text-gray-600">First Name</label>
                  <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </section>
              </section>

              <section className="p-2 lg:w-1/4 w-1/2">
                <section className="relative">
                  <label htmlFor="last-name" className="leading-7 text-sm text-gray-600">Last Name</label>
                  <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </section>
              </section>

              <section className="p-2 lg:w-1/4 w-1/2">
                <div className="grid grid-cols-3 gap-2">
                  {/* Day */}
                  <div className="relative">
                    <label htmlFor="day" className="leading-7 text-sm text-gray-600">Day</label>
                    <select
                      value={day}
                      onChange={(e) => setDay(e.target.value)}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    >
                      {Array.from({ length: 31 }, (_, index) => index + 1).map((day) => (
                        <option key={day} value={day}>
                          {day}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Month */}
                  <div className="relative">
                    <label htmlFor="month" className="leading-7 text-sm text-gray-600">Month</label>
                    <select
                      value={month}
                      onChange={(e) => setMonth(e.target.value)}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    >
                      <option value="1">January</option>
                      <option value="2">February</option>
                      <option value="3">March</option>
                      <option value="4">April</option>
                      <option value="5">May</option>
                      <option value="6">June</option>
                      <option value="7">July</option>
                      <option value="8">August</option>
                      <option value="9">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                    </select>
                  </div>

                  {/* Year */}
                  <div className="relative">
                    <label htmlFor="year" className="leading-7 text-sm text-gray-600">Year</label>
                    <select
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    >
                      {Array.from({ length: 10 }, (_, index) => index + 2023).map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </section>

            </section>

          </form>
        </section>
      </section>
    </>
  );
};

export default PassengerForm;
