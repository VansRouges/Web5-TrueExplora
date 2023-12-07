import { GoShieldCheck } from 'react-icons/go';
import { FaCalendarAlt } from 'react-icons/fa';

const Memories = () => {
  const memoryData = [
    {
      icon: <FaCalendarAlt className="flex text-center w-5 h-5 text-white inline-block" />,
      title: 'Book & Relax',
      description: 'You can also call airlines from your phone and book a flight ticket!',
    },
    {
      icon: <GoShieldCheck className="flex text-center w-5 h-5 text-white inline-block" />,
      title: 'Smart Checklist',
      description: 'You can also call airlines from your phone and book a flight ticket!',
    },
    {
      icon: <GoShieldCheck className="flex text-center w-5 h-5 text-white inline-block" />,
      title: 'Save More',
      description: 'You can also call airlines from your phone and book a flight ticket!',
    },
  ];

  return (
    <section className="container lg:px-48 py-24 mx-auto">
      <section className="flex lg:flex-row flex-col justify-between w-full mb-10 lg:px-20 px-6 text-center lg:text-left text-gray-700">
        <h1 className="lg:text-3xl text-2xl font-medium text-gray-900 lg:mb-0 mb-4">Travel to make memories all around the world</h1>
        <button className="text-white px-4 py-2 text-base bg-blue-500 rounded-3xl lg:mt-0 mt-5 lg:mx-0 mx-auto items-center">View all</button>
      </section>


      <section className="flex flex-wrap lg:-m-4 -m-1 text-center ">
        {memoryData.map((memory, index) => (
          <section key={index} className="p-2 md:w-1/3 sm:w-1/2 w-full flex justify-center">
            <article className="flex-shrink-0 rounded-t-full rounded-b-full w-3/5 h-68 bg-white px-4 py-12">
              <div
                className={`w-10 h-10 text-white inline-flex items-center justify-center rounded-full mb-1 ${index === 0 ? 'bg-indigo-400' : index === 1 ? 'bg-red-400' : 'bg-orange-400'
                  }`}
              >
                {memory.icon}
              </div>
              <h2 className="font-medium text-xl text-gray-900">{memory.title}</h2>
              <p className="text-gray-400 mt-6">{memory.description}</p>
            </article>
          </section>
        ))}
      </section>
    </section>
  );
};

export default Memories;
