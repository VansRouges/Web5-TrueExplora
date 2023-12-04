import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaYoutube, FaPinterestP } from "react-icons/fa";


const Footer = () => {
    return (
        <>
            <footer className="container lg:px-16 py-12 mx-auto ">
                <section className="flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <section className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <div className="flex flex-col">
                            <Image src="" alt="logo" />
                            <p className="text-gray-500 my-2">Your mind should be stronger than your feelings, fly!</p>
                            <figure className="flex justify-start mt-2">
                                <div className="mr-2 px-2 py-3 border-2 border-gray-300 rounded-2xl">
                                    <FaFacebookF />
                                </div>
                                <div className="mx-2 px-2 py-3 border-2 border-gray-300 rounded-2xl">
                                    <FaTwitter />
                                </div>
                                <div className="mx-2 px-2 py-3 border-2 border-gray-300 rounded-2xl">
                                    <FaYoutube />
                                </div>
                                <div className="mx-2 px-2 py-3 border-2 border-gray-300 rounded-2xl">
                                    <FaPinterestP />
                                </div>
                            </figure>
                        </div>
                    </section>
                    <section className="flex-grow flex flex-wrap md:pl-8 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                            <h2 className="font-semibold text-lg mb-3">Information</h2>
                            <nav className="list-none mb-10">
                                <li className="mb-2 cursor-pointer">
                                    Home
                                </li>
                                <li className="mb-2 cursor-pointer">
                                    Our Mission
                                </li>
                                <li className="mb-2 cursor-pointer">
                                    Careers
                                </li>
                                <li className="mb-2 cursor-pointer">
                                    Terms and Conditions
                                </li>
                                <li className="mb-2 cursor-pointer">
                                    Privacy Policy
                                </li>
                            </nav>
                        </div>

                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                            <h2 className="font-semibold text-lg mb-3">Quick Guide</h2>
                            <nav className="list-none mb-10">
                                <li className="mb-2 cursor-pointer">
                                    How it works
                                </li>
                                <li className="mb-2 cursor-pointer">
                                    Pricing Plan
                                </li>
                                <li className="mb-2 cursor-pointer">
                                    Register
                                </li>
                                <li className="mb-2 cursor-pointer">
                                    FAQs
                                </li>
                                <li className="mb-2 cursor-pointer">
                                    Terms of use
                                </li>
                            </nav>
                        </div>

                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                            <h2 className="font-semibold text-lg mb-3">Information</h2>
                            <nav className="list-none mb-10">
                                <li className="mb-2 cursor-pointer">
                                    +123456789
                                </li>
                                <li className="mb-2 cursor-pointer">
                                    info@nacademy.com
                                </li>
                                <li className="mb-2 cursor-pointer">
                                    24, Martins Street, Winchester.
                                </li>
                            </nav>
                        </div>

                    </section>
                </section>
                <section className="">
                    <section className="container mx-auto py-6 px-5 align-center text-center">
                        <p className="text-base text-center">Courtesy: Developed by the | TrueExplora team
                        </p>
                    </section>
                </section>
            </footer>
        </>
    )
}

export default Footer