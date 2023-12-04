import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Web5 } from "@web5/api";
import Homepage from './Homepage';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const initWeb5 = async () => {
    const { web5, did: myDid } = await Web5.connect();
    console.log(myDid);
  };

  initWeb5();

  return (
    <>
      <Homepage />
    </>
  );
}