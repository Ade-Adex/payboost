import DecentralizedSection from '@/app/components/Home/DecentralizedSection'
import Hero from '@/app/components/Home/Hero'
import MarketTable from '@/app/components/Home/MarketTable'
import { Products } from '@/app/components/Home/Products'
import StatsBar from '@/app/components/Home/StatsBar'
import Testimonials from '@/app/components/Home/Testimonials'
import { WhyChooseUs } from '@/app/components/Home/WhyChooseUs'
import Image from 'next/image'
import HeroImage from '@/public/Images/Group 1000004157.png'
import HeroImage2 from '@/public/Images/Group 1000004158.png'

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-background">
      <Hero />
      {/* <StatsBar /> */}

      {/* <div className=" w-full h-full overflow-hidden">
        <Image
          src={HeroImage}
          alt="Payboost Illustration"
          priority
          className="block md:hidden absolute object-contain scale-100 z-50 top-full -left-5 opacity-75 pointer-events-none"
        />

        <Image
          src={HeroImage2}
          alt="Payboost Illustration"
          priority
          className="block md:hidden absolute object-contain scale-100 z-50 left-0 -bottom-105 pointer-events-none"
        />
      </div> */}
      <DecentralizedSection />
      <MarketTable />
      <WhyChooseUs />
      <Products />
      <Testimonials />
    </div>
  )
}
