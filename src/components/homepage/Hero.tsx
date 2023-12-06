import Image from 'next/image';

const Hero = () => {
    return (
        <>
            <section className="bg-white pt-24">
                <section className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <article className="text-center lg:w-2/3 w-full">
                        <h1 className="lg:text-5xl text-4xl mb-8 text-gray-900 break-words">Create Ever-lasting<br /> Memories With Us</h1>
                    </article>
                    <Image
                        src="/Assets/images/place.jpeg"
                        width={500}
                        height={50}
                        className="object-cover object-center lg:h-96 h-80"
                        alt="hero"
                    />
                </section>
            </section>
        </>
    )
}

export default Hero