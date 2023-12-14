// import React, { useState } from 'react';
// import Modal from 'react-modal';
// import PassengerForm from './PassengerForm';
// import ContactForm from './ContactForm';
// import { IoCloseOutline } from 'react-icons/io5';

// // defining app element so screen readers don't see main content when modal is opened
// Modal.setAppElement('#__next');

// interface FlightModalProps {
//   flight: {
//     origin: string;
//     destination: string;
//   };
//   isOpen: boolean;
//   onRequestClose: () => void;
// }

// const FlightModal: React.FC<FlightModalProps> = ({ flight, isOpen, onRequestClose }) => {

//   return (
//     <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="modal bg-gray-100 overflow-hidden">
//       <section className="modal-content">
//         <figure className="flex justify-end">
//           <button
//             className="text-gray-500 hover:text-gray-700 focus:outline-none"
//             onClick={onRequestClose}
//           >
//             <IoCloseOutline className="h-6 w-6 text-black" /> 
//           </button>
//         </figure>
//         <h2 className="text-2xl font-semibold text-center">
//           {flight.origin} to {flight.destination}
//         </h2>
//         <PassengerForm closeModal={onRequestClose} />
//         <ContactForm closeModal={onRequestClose} />

//         <section className="p-2 w-full mt-4 pb-2">
//           <button type="submit" className="flex mx-auto text-white bg-green-400 border-0 py-2 px-8 focus:outline-none hover:bg-green-500 rounded text-lg">Submit</button>
//         </section>
//       </section>
//     </Modal>
//   );
// };

// export default FlightModal;