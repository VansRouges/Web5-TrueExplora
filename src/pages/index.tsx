import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Web5 } from "@web5/api";
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
// import Topbar from '@/components/Topbar'
import Flights from '@/components/homepage/Flights'
import Hero from '@/components/homepage/Hero'
import Lounge from '@/components/homepage/Lounge'
import Memories from '@/components/homepage/Memories'
import Subscribe from '@/components/homepage/Subscribe'
import Support from '@/components/homepage/Support'
import TopTravellers from '@/components/homepage/TopTravellers'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const initWeb5 = async () => {
    const { web5, did: myDid } = await Web5.connect();
    console.log(myDid);
  };

  initWeb5();

  return (
    <>
      <Navbar />
      <Hero />
      <Flights />
      <Support />
      <Memories />
      <Lounge />
      <TopTravellers />
      <Subscribe />
      <Footer />
    </>
  );
}