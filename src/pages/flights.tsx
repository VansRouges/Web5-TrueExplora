import React from 'react'
import Navbar from '@/components/Navbar'
import FlightList from '@/components/flights/FlightList'
import Image from "next/image"

function flights() {
  return (
    <div>
      <Navbar />
      <div className="mx-auto py-2 sm:px-6 sm:py-3 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray- px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left mb-5">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Embark on a Journey Beyond Boundaries with TruExplora – Where Every Adventure Begins! 
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="#"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 border-black shadow-sm hover:bg-gray-100"
                >
                  Get started
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="relative sm:mt-12 h-96 lg:mt-0">
              <Image
                className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                src="/people.jpg"
                alt="App screenshot"
                width={1824}
                height={1180}
              />
            </div>
          </div>
        </div>
      <FlightList />
    </div>
  )
}

export default flights