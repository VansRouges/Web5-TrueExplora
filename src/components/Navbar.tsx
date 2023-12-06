import { useEffect, useState } from 'react';
import { TbGridDots } from "react-icons/tb";
import Image from 'next/image';

const Navbar = () => {
  // Set state to handle the navbar opening and closing on smalled screen devices
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Set state to track whether the topbar is fixed based on the scroll position
  const [isTopbarFixed, setIsTopbarFixed] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Function used to update `isTopbarFixed` state to change background image of the Navbar component
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsTopbarFixed(true);
    } else {
      setIsTopbarFixed(false);
    }
  };

  // To add and remove the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <header className={`py-4 lg:px-10 px-4 w-full fixed mt-20 ${isTopbarFixed ? 'bg-gray-100' : 'bg-white'}`}>
      <div className="flex justify-between items-center">
        <figure className="flex font-medium">
          <Image
            src="/"
            width={30}
            height={30}
            className="w-16 h-16 text-white p-2 rounded-full"
            alt="project logo"
          />
        </figure>

        <nav className="hidden lg:flex space-x-4">
          <a href="#" className="text-base text-gray-700 font-medium hover:underline">Home</a>
          <a href="#" className="text-base text-gray-700 font-medium hover:underline">About</a>
          <a href="#" className="text-base text-gray-700 font-medium hover:underline">Offers</a>
          <a href="#" className="text-base text-gray-700 font-medium hover:underline">Seats</a>
          <a href="#" className="text-base text-gray-700 font-medium hover:underline">Destinations</a>
        </nav>

        <div className="hidden lg:flex space-x-4">
          <a href="#" className="text-base flex mt-2">
            <button className="bg-indigo-500 text-white px-4 py-1 rounded-2xl">Contact</button>
          </a>
        </div>

        <div className="lg:hidden">
          <button
            className="focus:outline-none"
            onClick={toggleMenu}
          >
            <TbGridDots className="w-6 h-6" />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="p-4 h-80 w-64 bg-gray-100 rounded-2xl fixed top-40 right-16">
            <button
              className="text-2xl absolute top-2 right-2 font-semibold"
              onClick={closeMenu}
            >
              &times;
            </button>
            <nav className="flex flex-col space-y-4 justify-center mt-6">
              <a href="#" className="text-lg flex justify-center">Home</a>
              <a href="#" className="text-lg flex justify-center">About</a>
              <a href="#" className="text-lg flex justify-center">Offers</a>
              <a href="#" className="text-lg flex justify-center">Seats</a>
              <a href="#" className="text-lg flex justify-center">Destinations</a>
              <a href="#" className="text-base flex justify-center mt-2">
                <button className="bg-indigo-500 text-white px-4 py-1 rounded-2xl">Contact</button>
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar