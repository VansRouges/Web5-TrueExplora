import Image from 'next/image';

const Hero = () => {
    return (
        <>
            <section className="bg-white pt-10">
                <section className="container mx-auto flex px-5 py-4 items-center justify-center flex-col">
                    <article className="text-center lg:w-2/3 w-full">
                        <h1 className="lg:text-5xl text-4xl mb-8 text-gray-900 font-medium">Create Ever-lasting<br className="leading-relaxed" /> Memories With Us</h1>
                    </article>
                    <div className="relative w-full max-w-xl mx-auto overflow-hidden">
                        <video autoPlay loop muted className="w-full h-auto z-10 rounded-full">
                            <source 
                                src="/sky.mp4" 
                                type="video/mp4" 
                            />
                            Your browser does not support the video tag.
                        </video>
                        <Image
                            src="/plane.png"
                            width={500}
                            height={50}
                            className="object-cover -top-9 object-center absolute w-auto lg:h-[39rem] h-80"
                            alt="hero"
                        />
                    </div>
                    
                </section>
            </section>

        </>
    )
}

export default Hero