import { GoShieldCheck } from "react-icons/go";
import { FaCalendarAlt } from "react-icons/fa";


const Memories = () => {
  return (
    <>
      <section className="container lg:px-48 py-24 mx-auto">
        {/* <section className=""> */}
        <section className="flex lg:flex-row flex-col justify-between w-full mb-10 lg:px-20 px-6 text-center">
          <h1 className="text-3xl font-medium text-gray-900">Travel to make memories all around the world</h1>
          <button className="text-white px-4 py-2 text-base bg-indigo-600 rounded-3xl lg:mt-0 mt-5 w-fit items-center">View all</button>
        </section>

        <section className="flex flex-wrap lg:-m-4 -m-1 text-center ">
          <section className="p-2 md:w-1/3 sm:w-1/2 w-full flex justify-center">
            <article className="flex-shrink-0 rounded-t-full rounded-b-full w-3/5 h-72 bg-white px-4 py-12">
              <div className="w-10 h-10 text-white inline-flex items-center justify-center rounded-full bg-indigo-300 mb-1">
                <FaCalendarAlt className="flex text-center w-5 h-5 text-white inline-block" />
              </div>
              <h2 className="font-medium text-xl text-gray-900">Book & Relax</h2>
              <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
            </article>
          </section>

          <section className="p-2 md:w-1/3 sm:w-1/2 w-full flex justify-center">
            <article className="flex-shrink-0 rounded-t-full rounded-b-full w-3/5 h-72 bg-white px-4 py-12">
              <div className="w-10 h-10 text-white inline-flex items-center justify-center rounded-full bg-indigo-300 mb-1">
                <GoShieldCheck className="flex text-center w-5 h-5 text-white inline-block" />
              </div>
              <h2 className="font-medium text-xl text-gray-900">Smart Checklist</h2>
              <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
            </article>
          </section>

          <section className="p-2 md:w-1/3 sm:w-1/2 w-full flex justify-center">
            <article className="flex-shrink-0 rounded-t-full rounded-b-full w-3/5 h-72 bg-white px-4 py-12">
              <div className="w-10 h-10 text-white inline-flex items-center justify-center rounded-full bg-indigo-300 mb-1">
                <GoShieldCheck className="flex text-center w-5 h-5 text-white inline-block" />
              </div>
              <h2 className="font-medium text-xl text-gray-900">Save More</h2>
              <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
            </article>
          </section>

        </section>
        {/* </section> */}
      </section>
    </>
  )
}

export default Memories