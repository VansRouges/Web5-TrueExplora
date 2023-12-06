
const Subscribe = () => {
    return (
      <>
        <div className="max-w-2xl mx-auto py-12 px-8 md:px-0">
          <div className="flex flex-col justify-between items-center min-h-18rem">
            <h1 className="md:text-3xl text-2xl mb-6 font-normal">Subscribe Newsletters & get Latest News</h1>
            <div className="w-full relative rounded-full">
              <input
                type="search"
                name="email"
                className="w-full font-sans px-2 py-3 rounded-full border-none outline-none"
                placeholder="Enter Your Email Address"
                required
              />
              <button className="block cursor-pointer text-sm font-semibold rounded-full absolute -mt-3 -mr-0 bottom-0 right-0 p-2.5 bg-blue-700 text-white" type="submit">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Subscribe;
  