// Ensure you have the correct import for 'Inter' font
import { Inter } from 'next/font/google';

// Import necessary dependencies
import { Web5 } from "@web5/api";
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import your components
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Flights from '@/components/homepage/Flights';
import Hero from '@/components/homepage/Hero';
import Lounge from '@/components/homepage/Lounge';
import Memories from '@/components/homepage/Memories';
import Subscribe from '@/components/homepage/Subscribe';
import Support from '@/components/homepage/Support';
import TopTravellers from '@/components/homepage/TopTravellers';

// Initialize the Inter font with the specified subset
const inter = Inter({ subsets: ['latin'] });

// Define the Home component
export default function Home() {
  // State to store the user's DID
  const [web5, setWeb5] = useState(null);
  const [myDid, setMyDid] = useState<string | null>(null);
  const [didCopied, setDidCopied] = useState(false);


  // Function to initialize Web5 and set the DID in the state
  const initWeb5 = async () => {
    try {
      // Connect to Web5 and retrieve the DID
      const { web5, did: myDid } = await Web5.connect();
      
      // Log the DID to the console for debugging
      console.log(myDid);
      
      // Set the DID in the component state
      setMyDid(myDid);
    } catch (error) {
      // Handle any errors that occur during Web5 initialization
      console.error('Web5 initialization error:', error);
    }
  };

  // Use useEffect to run the initialization function on component mount
  useEffect(() => {
    initWeb5();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const handleCopyDid = async () => {
    if (myDid) {
      try {
        await navigator.clipboard.writeText(myDid);
        setDidCopied(true);
        toast.success("Your DID has been copied to clipboard!", {
          position: "top-right",
        });

        setTimeout(() => {
          setDidCopied(false);
        }, 3000);
      } catch (err) {
        toast.error('DID not available');
        console.log("Failed to copy DID: " + err);
      }
    }
  };

  // Return the JSX structure of your homepage
  return (
    <>
      <Navbar
        handleCopyDid={handleCopyDid}
        didCopied={didCopied}
        isWeb5Connected={!!myDid}
      />
      <Hero />
      <Flights />
      <Support />
      <Memories />
      <Lounge />
      <TopTravellers />
      <Subscribe />
      <Footer />
      <ToastContainer position="top-right" />
    </>
  );
}
