import Image from 'next/image';

const Support = () => {
  return (
    <>
      <section className="container lg:px-48 py-12 mx-auto bg-white">
        <section className="text-center mb-10">
          <h2 className="text-lg text-gray-500 tracking-widest">TRAVEL SUPPORT</h2>
          <h1 className="sm:text-3xl text-2xl font-medium text-center text-gray-900 my-2">Plan your travel with confidence</h1>
          <p className="text-base text-gray-500 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Find help with booking and travel plans, see what to expect along the journey!</p>
        </section>
        <section className="flex flex-wrap">
          <section className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:text-left text-center">
            <section className="flex flex-col mb-6 lg:items-start items-center">
              <div className="w-8 h-6 text-white inline-flex items-center justify-center rounded-full bg-indigo-300 mb-1">
                <p>01</p>
              </div>
              <article className="flex-grow">
                <h2 className="text-gray-900 text-lg font-medium mb-3">Travel requirements for Dubai</h2>
                <p className="leading-relaxed text-base text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              </article>
            </section>

            <section className="flex flex-col mb-6 lg:items-start items-center">
              <div className="w-8 h-6 text-white inline-flex items-center justify-center rounded-full bg-orange-400 mb-1">
                <p>02</p>
              </div>
              <article className="flex-grow">
                <h2 className="text-gray-900 text-lg font-medium mb-3">Chaffeur services at your arrival</h2>
                <p className="leading-relaxed text-base text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              </article>
            </section>

            <section className="flex flex-col mb-6 lg:items-start items-center">
              <div className="w-8 h-6 text-white inline-flex items-center justify-center rounded-full bg-orange-300 mb-1">
                <p>03</p>
              </div>
              <article className="flex-grow">
                <h2 className="text-gray-900 text-lg font-medium mb-3">Multi-risk travel insurance</h2>
                <p className="leading-relaxed text-base text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              </article>
            </section>

          </section>

          <figure className="lg:pl-16 lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <Image
              src="/"
              width={50}
              height={50}
              className="object-cover object-center"
              alt="support"
            />
          </figure>
        </section>
      </section>
    </>
  )
}

export default Support