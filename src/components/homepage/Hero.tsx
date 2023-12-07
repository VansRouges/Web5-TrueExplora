import Image from 'next/image';

const Hero = () => {
    return (
        <>
            <section className="bg-white pt-24">
                <section className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <article className="text-center lg:w-2/3 w-full">
                        <h1 className="lg:text-5xl text-4xl mb-8 text-gray-900 font-medium">Create Ever-lasting<br className="leading-relaxed" /> Memories With Us</h1>
                    </article>
                    <Image
                        src="/Assets/images/hero-plane.png"
                        width={500}
                        height={50}
                        className="object-cover object-center w-auto lg:h-96 h-80"
                        alt="hero"
                    />
                </section>
            </section>

        </>
    )
}

export default Hero