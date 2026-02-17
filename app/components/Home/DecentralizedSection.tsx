import SectionHeader from '@/app/components/ui/SectionHeader'
import RightEllipse from '@/public/Images/DecentralizeImage.png'
import Image from 'next/image'

export default function DecentralizedSection() {
  const points = [
    'Best Price Execution',
    'Lowest Liquidation Risk',
    'Borderless & Composable',
  ]

  return (
    <section className="relative w-full overflow-hidden bg-background  md:py-20 md:mt-20">
      {/* TEXT CONTENT (CONSTRAINED) */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center">
        <div>
          <SectionHeader>
            Decentralized <br />
            <span className="text-2xl md:text-3xl">Interminable Future</span>
          </SectionHeader>

          <div className="space-y-6 mb-10">
            {points.map((point) => (
              <div key={point} className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                </div>
                <span className="text-base md:text-lg font-medium font-poppins text-foreground">
                  {point}
                </span>
              </div>
            ))}
          </div>

          <button className="bg-primary text-white px-8 py-3 rounded-md text-sm font-bold hover:opacity-90">
            Learn More
          </button>
        </div>
      </div>

      {/* IMAGE (FULL WIDTH, NOT CONSTRAINED) */}
      <div className="absolute inset-y-0 right-0 w-full md:w-1/2 pointer-events-none">
        {/* Glow */}
        <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-125 h-125 " />

        {/* Image */}
        <div className="relative h-full w-full">
          <Image
            src={RightEllipse}
            alt="Decentralized Network Visualization"
            fill
            priority
            className="object-contain object-right"
          />
        </div>
      </div>
    </section>
  )
}
