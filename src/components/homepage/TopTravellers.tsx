import Image from "next/image";

const TopTravellers = () => {
  const travelData = [
    {
      src: "/Assets/images/travel 3.jpg",
      alt: "top traveller 1",
      thumbnail: "/Assets/images/travel 1.jpg",
    },
    {
      src: "/Assets/images/travel 1.jpg",
      alt: "top traveller 2",
      thumbnail: "/Assets/images/travel 2.jpg",
    },
    {
      src: "/Assets/images/travel 4.jpg",
      alt: "top traveller 3",
      thumbnail: "/Assets/images/travel 3.jpg",
    },
    {
      src: "/Assets/images/travel 2.jpg",
      alt: "top traveller 4",
      thumbnail: "/Assets/images/travel 4.jpg",
    },
  ];

  return (
    <section className="container lg:px-48 px-4 lg:pt-0 lg:pb-16 pb-10 mx-auto bg-white">
      <article className="flex flex-col text-center w-full mb-10">
        <h1 className="text-3xl">Top travelers of this month!</h1>
      </article>
      <section className="flex flex-wrap -m-2 justify-center">
        {travelData.map((travel, index) => (
          <div
            key={index}
            className="px-1 py-4 lg:w-1/4 md:w-1/2 w-full flex justify-center relative"
          >
            <figure className="h-full relative">
              <Image
                src={travel.src}
                width={800}
                height={150}
                className="flex-shrink-0 rounded-t-full rounded-b-full md:w-44 w-auto h-60 object-cover object-center"
                alt={travel.alt}
              />

              <Image
                src={travel.thumbnail}
                width={24}
                height={24}
                className="cursor-pointer w-auto h-60 object-cover object-center absolute bottom-4 border-2 border-gray-500 left-1/2 transform -translate-x-1/2 bg-white rounded-full w-12 h-12"
                alt={travel.alt}
              />
            </figure>
          </div>
        ))}
      </section>
    </section>
  );
};

export default TopTravellers;









// import Image from "next/image";
// import { useState } from "react";

// const TopTravellers = () => {
//   const travelData = [
//     {
//       src: "/Assets/images/travel 3.jpg",
//       alt: "top traveller 1",
//       thumbnail: "/Assets/images/travel 1.jpg",
//       description: "Description for top traveller 1",
//     },
//     {
//       src: "/Assets/images/travel 1.jpg",
//       alt: "top traveller 2",
//       thumbnail: "/Assets/images/travel 2.jpg",
//       description: "Description for top traveller 2",
//     },
//     {
//       src: "/Assets/images/travel 4.jpg",
//       alt: "top traveller 3",
//       thumbnail: "/Assets/images/travel 3.jpg",
//       description: "Description for top traveller 3",
//     },
//     {
//       src: "/Assets/images/travel 2.jpg",
//       alt: "top traveller 4",
//       thumbnail: "/Assets/images/travel 4.jpg",
//       description: "Description for top traveller 4",
//     },
//   ];

//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <section className="container lg:px-48 px-4 lg:pt-0 lg:pb-16 pb-10 mx-auto bg-white">
//       <article className="flex flex-col text-center w-full mb-10">
//         <h1 className="text-3xl">Top travelers of this month!</h1>
//       </article>
//       <section className="flex flex-wrap -m-2 justify-center">
//         {travelData.map((travel, index) => (
//           <div
//             key={index}
//             className="px-1 py-4 lg:w-1/4 md:w-1/2 w-full flex justify-center relative"
//           >
//             <figure
//               className="h-full relative"
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               <Image
//                 src={travel.src}
//                 width={800}
//                 height={150}
//                 className="flex-shrink-0 rounded-t-full rounded-b-full md:w-44 w-auto h-60 object-cover object-center"
//                 alt={travel.alt}
//               />

//               {hoveredIndex === index && (
//                 <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white w-full p-2 shadow-md rounded-b-full max-w-sm">
//                   <p className="text-gray-900">{travel.description}</p>
//                 </div>
//               )}


//               <Image
//                 src={travel.thumbnail}
//                 width={24}
//                 height={24}
//                 className="cursor-pointer w-auto h-12 object-cover object-center absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full"
//                 alt={travel.alt}
//               />
//             </figure>
//           </div>
//         ))}
//       </section>
//     </section>
//   );
// };

// export default TopTravellers;
