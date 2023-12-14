import React, { useState } from 'react';

interface ContactFormProps {
  closeModal: () => void;
}


const ContactForm: React.FC<ContactFormProps> = ({ closeModal }) => {
  const [title, setTitle] = useState('Mr');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [streetAddress, setStreetAddress] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <>
      <section className="container px-5 pt-4 pb-2 mx-auto">
        <section className="lg:w-2/3 mx-auto">
          <article className="flex flex-col w-full mb-1">
            <h1 className="sm:text-3xl text-2xl font-medium mb-2 text-indigo-700">Contact Information</h1>
          </article>

          <form className="flex flex-col -m-2 bg-white px-4 py-6 rounded-lg" onSubmit={handleSubmit}>

            {/* column 1 */}
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

              <section className="p-2 lg:w-1/3 w-1/2">
                <section className="relative">
                  <label htmlFor="first name" className="leading-7 text-sm text-gray-600">First Name*</label>
                  <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </section>
              </section>

              <section className="p-2 lg:w-1/3 w-1/2">
                <section className="relative">
                  <label htmlFor="last-name" className="leading-7 text-sm text-gray-600">Last Name*</label>
                  <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </section>
              </section>
            </section>

            {/* column 2 */}
            <section className="flex flex-row flex-wrap">
              <section className="p-2 lg:w-1/4 w-1/2">
                <section className="relative">
                  <label htmlFor="first name" className="leading-7 text-sm text-gray-600">Country</label>
                  <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </section>
              </section>

              <section className="p-2 lg:w-1/4 w-1/2">
                <section className="relative">
                  <label htmlFor="first name" className="leading-7 text-sm text-gray-600">Phone number</label>
                  <input type="number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </section>
              </section>

              <section className="p-2 lg:w-1/4 w-1/2">
                <section className="relative">
                  <label htmlFor="last-name" className="leading-7 text-sm text-gray-600">Email address*</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </section>
              </section>

              <section className="p-2 lg:w-1/4 w-1/2">
                <section className="relative">
                  <label htmlFor="last-name" className="leading-7 text-sm text-gray-600">Confirm email address*</label>
                  <input type="email" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </section>
              </section>
            </section>


            {/* column 3 */}
            <section className="flex flex-row flex-wrap">
              <section className="p-2 lg:w-1/4 w-1/2">
                <section className="relative">
                  <label htmlFor="country" className="leading-7 text-sm text-gray-600">
                    Country*
                  </label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  >
                    <option value="usa">Nigeria</option>
                    <option value="canada">Canada</option>
                    <option value="uk">United Kingdom</option>
                    <option value="uk">United States</option>
                    <option value="uk">China</option>
                    <option value="uk">Austraalia</option>
                  </select>
                </section>
              </section>



              <section className="p-2 lg:w-1/3 w-1/2">
                <section className="relative">
                  <label htmlFor="last-name" className="leading-7 text-sm text-gray-600">Town or City*</label>
                  <input type="text" value={city} onChange={(e) => setCity(e.target.value)} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </section>
              </section>

              <section className="p-2 lg:w-1/3 w-1/2">
                <section className="relative">
                  <label htmlFor="last-name" className="leading-7 text-sm text-gray-600">Street address*</label>
                  <input type="text" value={streetAddress} onChange={(e) => setStreetAddress(e.target.value)} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </section>
              </section>
            </section>

          </form>
        </section>
      </section>
    </>
  );
};

export default ContactForm;
