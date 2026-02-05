import DecentralizedSection from '@/app/components/Home/DecentralizedSection'
import Hero from '@/app/components/Home/Hero'
import StatsBar from '@/app/components/Home/StatsBar'

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-background">
      <Hero />
      <StatsBar />
      <DecentralizedSection/>
    </div>
  )
}
