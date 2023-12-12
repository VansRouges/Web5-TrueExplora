import { FaLocationDot, FaCircleUser } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import Link from "next/link"


const Flights = () => {
  return (
    <>
      <section className="container lg:px-48 px-8 py-12 mx-auto bg-white overflow-hidden">
        <section className="border-2 border-gray-100 rounded-lg pt-6 pb-3">
          <section className="flex justify-center w-full">
            <section className="bg-gray-100 rounded-3xl lg:px-6 px-12 lg:py-3 py-3 flex lg:flex-row flex-col text-center ">
              <p className="px-6 py-2 cursor-pointer text-lg hover:bg-blue-500 hover:rounded-3xl hover:text-white">Economy</p>
              <p className="px-6 py-2 cursor-pointer text-lg hover:bg-blue-500 hover:rounded-3xl hover:text-white">Business Class</p>
              <p className="px-6 py-2 cursor-pointer text-lg hover:bg-blue-500 hover:rounded-3xl hover:text-white">First Class</p>
            </section>
          </section>

          <section className="-m-4 text-center flex">
            <section className="p-4 md:w-1/4 sm:w-1/2 w-full flex lg:flex-row flex-col">
              <div className="px-4 py-6 flex">
                <figure className="mx-2 px-2 py-3 bg-gray-100 rounded-full">
                  <FaLocationDot className="w-5 h-5" />
                </figure>
                <div className="flex flex-col ml-1">
                  <h2 className="flex justify-start font-medium text-xl">Location</h2>
                  <input className="outline-none mt-1" placeholder="Where do you want to go?" />
                </div>
              </div>

              <div className="px-4 py-6 flex">
                <figure className="mx-2 px-2 py-4 bg-gray-100 rounded-2xl">
                  <FaCircleUser className="w-5 h-5" />
                </figure>
                <div className="flex flex-col ml-1">
                  <h2 className="flex justify-start font-medium text-xl">Travelers</h2>
                  <input className="outline-none mt-1" placeholder="Add guests" />
                </div>
              </div>

              <div className="px-4 py-6 flex">
                <figure className="mx-2 px-2 py-4 bg-gray-100 rounded-2xl">
                  <FaCalendarAlt className="w-5 h-5" />
                </figure>
                <div className="flex flex-col ml-1">
                  <h2 className="flex justify-start font-medium text-xl">Check In</h2>
                  <input className="outline-none mt-1" placeholder="Add date" />
                </div>
              </div>

              <div className="px-4 py-6 flex">
                <figure className="mx-2 px-2 py-4 bg-gray-100 rounded-2xl">
                  <FaCalendarAlt className="w-5 h-5" />
                </figure>
                <div className="flex flex-col ml-1">
                  <h2 className="flex justify-start font-medium text-xl">Check Out</h2>
                  <input className="outline-none mt-1" placeholder="Add date" />
                </div>
              </div>
            </section>

          </section>

          <section className="flex justify-center lg:mb-0 my-2">
            <Link href="/flights" className="px-8 py-2 bg-blue-500 rounded-4xl rounded-3xl text-white hover:bg-blue-400">Search Flight</Link>
          </section>

        </section>
      </section>
    </>
  )
}

export default Flights