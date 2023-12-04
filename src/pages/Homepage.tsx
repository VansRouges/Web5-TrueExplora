import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Topbar from '@/components/Topbar'
import Flights from '@/components/homepage/Flights'
import Hero from '@/components/homepage/Hero'
import Lounge from '@/components/homepage/Lounge'
import Memories from '@/components/homepage/Memories'
import Subscribe from '@/components/homepage/Subscribe'
import Support from '@/components/homepage/Support'
import TopTravellers from '@/components/homepage/TopTravellers'


const Homepage = () => {
    return (
        <>
            <Topbar />
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
    )
}

export default Homepage