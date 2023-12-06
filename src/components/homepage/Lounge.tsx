import Image from 'next/image';

const Lounge = () => {
  return (
    <section className="container lg:px-48 px-5 lg:py-20 mx-auto bg-white">
      
      <section className="flex flex-wrap">
        <section className="flex flex-col flex-wrap lg:py-6 lg:w-1/2 text-left">

          <section>
            <h2 className="text-gray-900 text-2xl font-medium mb-8">Unaccompanied Minor Lounge</h2>
          </section>

          <section className="flex flex-row">
            <section className="flex flex-col mb-6 lg:items-start items-center">
              <article className="flex-grow">
                <h2 className="text-gray-900 text-lg font-medium mb-3">Travel requirements for Dubai</h2>
                <p className="leading-relaxed text-base text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              </article>
            </section>

            <section className="flex flex-col mb-6 lg:items-start items-center ml-6">
              <article className="flex-grow">
                <h2 className="text-gray-900 text-lg font-medium mb-3">Chaffeur services at your arrival</h2>
                <p className="leading-relaxed text-base text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              </article>
            </section>
          </section>

          <section className="flex flex-row">
            <section className="flex flex-col mb-6 lg:items-start items-center">
              <article className="flex-grow">
                <h2 className="text-gray-900 text-lg font-medium mb-3">Multi-risk travel insurance</h2>
                <p className="leading-relaxed text-base text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              </article>
            </section>

            <section className="flex flex-col mb-6 lg:items-start items-center ml-6">
              <article className="flex-grow">
                <h2 className="text-gray-900 text-lg font-medium mb-3">SSServices at your arrival</h2>
                <p className="leading-relaxed text-base text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              </article>
            </section>
          </section>

        </section>

        <figure className="flex justify-center lg:pl-20 lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <Image 
            src="/Assets/images/place.jpeg" 
            width={400}
            height={150}
            className="object-cover object-center lg:w-full lg:h-3/5 w-11/12 h-1/2 rounded-xl mt-6 lg:mt-0" 
            alt="lounge" 
          />
        </figure>
      </section>
    </section>
  )
}

export default Lounge