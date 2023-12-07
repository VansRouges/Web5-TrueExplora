import Image from 'next/image';

const Support = () => {
  const supportData = [
    {
      number: '1',
      title: 'Travel requirements for Dubai',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      number: '2',
      title: 'Chaffeur services at your arrival',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      number: '3',
      title: 'Multi-risk travel insurance',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
  ];

  return (
    <>
      <section className="container lg:px-48 px-6 lg:py-24 py-2 mx-auto bg-white">
        <section className="text-center mb-10">
          <h2 className="text-lg text-gray-500 tracking-widest">TRAVEL SUPPORT</h2>
          <h1 className="sm:text-3xl text-2xl font-medium text-center text-gray-900 my-2">Plan your travel with confidence</h1>
          <p className="text-base text-gray-500 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Find help with booking and travel plans, see what to expect along the journey!</p>
        </section>
        <section className="flex flex-wrap">
          <section className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 text-left">
            {supportData.map((support, index) => (
              <section key={index} className="flex flex-col mb-6 lg:items-start text-left">
                <div className={`w-8 h-6 text-white inline-flex items-center justify-center rounded-full mb-1 ${
                  index === 0 ? 'bg-indigo-300' : index === 1 ? 'bg-orange-300' : 'bg-red-300'
                }`}
                >
                  <p>{support.number}</p>
                </div>
                <article className="flex-grow">
                  <h2 className="text-gray-900 text-lg font-medium mb-3">{support.title}</h2>
                  <p className="leading-relaxed text-base text-gray-500">{support.description}</p>
                </article>
              </section>
            ))}
          </section>

          <figure className="flex justify-center lg:pl-20 lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <Image
              src="/Assets/images/place.jpeg"
              width={400}
              height={150}
              className="object-cover object-center lg:w-full lg:h-96 w-full h-80 rounded-xl mt-10 lg:mt-8"
              alt="lounge"
            />
          </figure>
        </section>
      </section>
    </>
  )
}

export default Support