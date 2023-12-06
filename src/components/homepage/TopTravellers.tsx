import Image from 'next/image';

const TopTravellers = () => {
  return (
    <>
      <section className="container lg:px-48 px-4 lg:py-10 mx-auto bg-white ">
        {/* <section className=""> */}
          <article className="flex flex-col text-center w-full mb-10">
            <h1 className="text-3xl">Top travelers of this month!</h1>
          </article>
          <section className="flex flex-wrap -m-2 justify-center">
            <section className="px-1 py-4 lg:w-1/4 md:w-1/2 w-full flex justify-center">
              <figure className="h-full">
                <Image
                  src="/Assets/images/place.jpeg"
                  width={800}
                  height={150}
                  className="flex-shrink-0 rounded-t-full rounded-b-full md:w-44 w-auto h-60 object-cover object-center"
                  alt="lounge"
                />
              </figure>
            </section>

            <section className="px-1 py-4 lg:w-1/4 md:w-1/2 w-full flex justify-center">
              <figure className="h-full">
                <Image
                  src="/Assets/images/place.jpeg"
                  width={800}
                  height={150}
                  className="flex-shrink-0 rounded-t-full rounded-b-full md:w-44 w-auto h-60 object-cover object-center"
                  alt="lounge"
                />
              </figure>
            </section>

            <section className="px-1 py-4 lg:w-1/4 md:w-1/2 w-full flex justify-center">
              <figure className="h-full">
                <Image
                  src="/Assets/images/place.jpeg"
                  width={800}
                  height={150}
                  className="flex-shrink-0 rounded-t-full rounded-b-full md:w-44 w-auto h-60 object-cover object-center"
                  alt="lounge"
                />
              </figure>
            </section>

            <section className="px-1 py-4 lg:w-1/4 md:w-1/2 w-full flex justify-center">
              <figure className="h-full">
                <Image
                  src="/Assets/images/place.jpeg"
                  width={800}
                  height={150}
                  className="flex-shrink-0 rounded-t-full rounded-b-full md:w-44 w-auto h-60 object-cover object-center"
                  alt="lounge"
                />
              </figure>
            </section>
          </section>
        {/* </section> */}
      </section>
    </>
  )
}

export default TopTravellers