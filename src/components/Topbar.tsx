import Image from 'next/image';
import { BiSupport } from "react-icons/bi";
import { CiGlobe } from "react-icons/ci";


const Topbar = () => {
  return (
    <>
      <header className="container mx-auto bg-gray-100 w-full fixed z-10">
        <section className="flex flex-wrap py-4 lg:px-8 px-1 flex-row justify-between">
          <figure className="flex font-medium">
            <Image
              src="/Assets/images/plane2.png"
              width={36}
              height={36}
              className="w-12 h-12 text-white p-2 rounded-full"
              alt="logo"
            />
          </figure>

          <nav className="hidden lg:flex flex-wrap text-base align-center items-center">
            <div className="flex">
              <BiSupport className="w-6 h-6" />
              <a className="mr-5 ml-2 hover:underline cursor-pointer text-base text-gray-700">Support</a>
            </div>
            <div className="flex">
              <CiGlobe className="w-6 h-6" />
              <a className="mr-5 ml-2 hover:underline cursor-pointer text-base text-gray-700">Languages</a>
            </div>
          </nav>


          <nav className="flex flex-wrap text-base align-center items-center">
            <a className="mr-5">Sign In</a>
            <a className="mr-5">Sign Out</a>
          </nav>
        </section>
      </header>
    </>
  )
}

export default Topbar