import DecentralizedSection from '@/app/components/Home/DecentralizedSection'
import Hero from '@/app/components/Home/Hero'
import MarketTable from '@/app/components/Home/MarketTable'
import { Products } from '@/app/components/Home/Products'
import StatsBar from '@/app/components/Home/StatsBar'
import Testimonials from '@/app/components/Home/Testimonials'
import { WhyChooseUs } from '@/app/components/Home/WhyChooseUs'

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-background">
      <Hero />
      <StatsBar />
      <DecentralizedSection />
      <MarketTable />
      <WhyChooseUs />
      <Products />
      <Testimonials/>
    </div>
  )
}
