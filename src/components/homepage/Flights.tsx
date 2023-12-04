import { FaLocationDot, FaCircleUser } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";


const Flights = () => {
  return (
    <>
      <section className="container lg:px-48 py-12 mx-auto bg-white">
        <section className="border-2 border-gray-200 rounded-lg pt-6 pb-3">
          <section className="flex justify-center">
            <section className="bg-gray-200 rounded-3xl px-6 py-3 flex">
              <p className="px-6 cursor-pointer text-lg">Economy</p>
              <p className="px-6 cursor-pointer text-lg">Business Class</p>
              <p className="px-6 cursor-pointer text-lg">First Class</p>
            </section>
          </section>

          <section className="-m-4 text-center flex">
            <section className="p-4 md:w-1/4 sm:w-1/2 w-full flex flex-row">
              <div className="px-4 py-6 flex">
                {/* <FaLocationDot className="w-5 h-5 mt-3 bg-gray-300" /> */}
                <figure className="mx-2 px-2 py-3 bg-gray-200 rounded-full">
                  <FaLocationDot className="w-5 h-5" />
                </figure>
                <div className="flex flex-col ml-1">
                  <h2 className="flex justify-start font-medium text-xl">Location</h2>
                  <input className="outline-none mt-1" placeholder="Where do you want to go?" />
                </div>
              </div>

              <div className="px-4 py-6 flex">
                <figure className="mx-2 px-2 py-4 bg-gray-200 rounded-2xl">
                  <FaCircleUser className="w-5 h-5" />
                </figure>
                <div className="flex flex-col ml-1">
                  <h2 className="flex justify-start font-medium text-xl">Travelers</h2>
                  <input className="outline-none mt-1" placeholder="Add guests" />
                </div>
              </div>

              <div className="px-4 py-6 flex">
                <figure className="mx-2 px-2 py-4 bg-gray-200 rounded-2xl">
                  <FaCalendarAlt className="w-5 h-5" />
                </figure>
                <div className="flex flex-col ml-1">
                  <h2 className="flex justify-start font-medium text-xl">Check In</h2>
                  <input className="outline-none mt-1" placeholder="Add date" />
                </div>
              </div>

              <div className="px-4 py-6 flex">
                <figure className="mx-2 px-2 py-4 bg-gray-200 rounded-2xl">
                  <FaCalendarAlt className="w-5 h-5" />
                </figure>
                <div className="flex flex-col ml-1">
                  <h2 className="flex justify-start font-medium text-xl">Check Out</h2>
                  <input className="outline-none mt-1" placeholder="Add date" />
                </div>
              </div>

              {/* <section className="flex">
                <button className="px-8 py-2 bg-blue-500 rounded-4xl rounded-3xl">Search Flight</button>
              </section> */}
            </section>
          </section>

        </section>
      </section>
    </>
  )
}

export default Flights