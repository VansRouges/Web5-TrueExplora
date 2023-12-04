import Image from 'next/image';

const Hero = () => {
    return (
        <>
            <section className="bg-white">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="text-5xl mb-8 text-gray-900 break-words">Create Ever-lasting<br /> Memories With Us</h1>
                    </div>
                    <Image
                        src="/"
                        width={300}
                        height={300}
                        className="object-cover object-center"
                        alt="hero"
                    />
                </div>
            </section>
        </>
    )
}

export default Hero