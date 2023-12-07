import Image from 'next/image';

const Lounge = () => {
  return (
    <section className="container lg:px-48 px-5 lg:pb-32 lg:py-24 p-12 mx-auto bg-white">
      
      <section className="flex flex-wrap">
        <section className="flex flex-col flex-wrap lg:py-6 lg:w-1/2 text-left">

          <section>
            <h2 className="text-gray-900 text-2xl font-medium mb-8">Unaccompanied Minor Lounge</h2>
          </section>

          <section className="flex flex-row">
            <section className="flex flex-col mb-6 lg:items-start items-center">
              <article className="flex-grow">
                <h2 className="text-gray-900 text-lg font-medium mb-3">Help through the airport</h2>
                <p className="leading-relaxed text-base text-gray-500">You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.</p>
              </article>
            </section>

            <section className="flex flex-col mb-6 lg:items-start items-center ml-6">
              <article className="flex-grow">
                <h2 className="text-gray-900 text-lg font-medium mb-3">Priority boarding</h2>
                <p className="leading-relaxed text-base text-gray-500">You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.</p>
              </article>
            </section>
          </section>

          <section className="flex flex-row">
            <section className="flex flex-col mb-6 lg:items-start items-center">
              <article className="flex-grow">
                <h2 className="text-gray-900 text-lg font-medium mb-3">Care on the flight</h2>
                <p className="leading-relaxed text-base text-gray-500">You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.</p>
              </article>
            </section>

            <section className="flex flex-col mb-6 lg:items-start items-center ml-6">
              <article className="flex-grow">
                <h2 className="text-gray-900 text-lg font-medium mb-3">Chauffeur-drive service</h2>
                <p className="leading-relaxed text-base text-gray-500">You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.</p>
              </article>
            </section>
          </section>

        </section>

        <figure className="flex justify-center lg:pl-20 lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <Image 
            src="/Assets/images/place.jpeg" 
            width={400}
            height={150}
            className="object-cover object-center lg:w-full lg:h-96 w-11/12 h-80 rounded-xl mt-6 lg:mt-0" 
            alt="lounge" 
          />
        </figure>
      </section>
    </section>
  )
}

export default Lounge